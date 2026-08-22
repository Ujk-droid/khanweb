"use client";

// Lazy-loaded, desktop-only ambient particle field for the Home hero.
// Kept in its own file so Hero.tsx can `next/dynamic` import it with
// `ssr: false` — react-three-fiber touches the DOM/WebGL context and
// can't run during SSR, and there's no reason to ship its JS to visitors
// who never see it (mobile gets a plain CSS gradient instead, see Hero.tsx).
//
// "Particle network" effect: drifting copper dots that draw a thin line
// between any two neighbours closer than CONNECT_DISTANCE, brighten near
// the cursor, and keep clear of the centre AI-chip logo via a circular
// exclusion zone. Orthographic camera == 1 world unit is 1 CSS pixel
// (see react-three-fiber's default ortho frustum), so all the tunables
// below are plain pixel values.
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// ── Tunables ──────────────────────────────────────────────────────────
// Kept deliberately subtle — this is a background accent for the first
// screen of the hero, not the focal point. The mask below (and the
// text-protection scrim in Hero.tsx) keep it out of the text/stats
// content further down the page.
const BACK_COUNT = 63; // small, dim, "far" particles
const FRONT_COUNT = 27; // larger, brighter, "near" particles
const PARTICLE_COUNT = BACK_COUNT + FRONT_COUNT; // 90 total

const CONNECT_DISTANCE = 120; // px — max distance to draw a line between two particles
const LINE_BASE_OPACITY = 0.19; // at zero distance
const LINE_MAX_OPACITY = 0.43; // hard cap even with the cursor boost
const MAX_LINES = 900; // hard cap on simultaneous line segments (perf guard)

const MOUSE_RADIUS = 150; // px — cursor influence radius
const MOUSE_REPEL_STRENGTH = 34; // px/s push at the center of the radius

const EXCLUSION_RADIUS = 150; // px — hard no-entry zone around the center chip
const RING_SPAWN_OUTER = EXCLUSION_RADIUS * 1.9; // halo band particles spawn/orbit in
const CORE_CONNECT_DISTANCE = EXCLUSION_RADIUS * 2.4; // reach of the "chip as core node" lines
const CORE_LINE_COUNT = 2;

const DRIFT_SPEED_MIN = 3; // px/s
const DRIFT_SPEED_MAX = 9; // px/s

const COPPER = { r: 0xb7 / 255, g: 0x84 / 255, b: 0x60 / 255 };

type Particle = { x: number; y: number; vx: number; vy: number };

function makeParticle(spawnInRing: boolean): Particle {
  let x: number;
  let y: number;
  if (spawnInRing) {
    const angle = Math.random() * Math.PI * 2;
    const radius = EXCLUSION_RADIUS + Math.random() * (RING_SPAWN_OUTER - EXCLUSION_RADIUS);
    x = Math.cos(angle) * radius;
    y = Math.sin(angle) * radius;
  } else {
    x = (Math.random() - 0.5) * 1800;
    y = (Math.random() - 0.5) * 1000;
    const d = Math.hypot(x, y);
    if (d < EXCLUSION_RADIUS) {
      const scale = (EXCLUSION_RADIUS + Math.random() * 40) / (d || 1);
      x *= scale;
      y *= scale;
    }
  }
  const speed = DRIFT_SPEED_MIN + Math.random() * (DRIFT_SPEED_MAX - DRIFT_SPEED_MIN);
  const dir = Math.random() * Math.PI * 2;
  return { x, y, vx: Math.cos(dir) * speed, vy: Math.sin(dir) * speed };
}

function ParticleField() {
  const frontRef = useRef<THREE.Points>(null);
  const backRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Physics state — plain arrays mutated in place every frame, never
  // touching React state, so the whole network runs without re-renders.
  const particles = useMemo<Particle[]>(() => {
    const arr: Particle[] = [];
    const RING_RATIO = 0.4; // fraction spawned in the halo band around the chip
    for (let i = 0; i < PARTICLE_COUNT; i++) arr.push(makeParticle(Math.random() < RING_RATIO));
    return arr;
  }, []);

  const frontPositions = useMemo(() => new Float32Array(FRONT_COUNT * 3), []);
  const backPositions = useMemo(() => new Float32Array(BACK_COUNT * 3), []);
  const linePositions = useMemo(() => new Float32Array(MAX_LINES * 2 * 3), []);
  const lineColors = useMemo(() => new Float32Array(MAX_LINES * 2 * 3), []);

  // Seed the static (pre-first-frame) buffers so nothing flashes at 0,0,0.
  useMemo(() => {
    for (let i = 0; i < FRONT_COUNT; i++) {
      const p = particles[BACK_COUNT + i];
      frontPositions[i * 3] = p.x;
      frontPositions[i * 3 + 1] = p.y;
      frontPositions[i * 3 + 2] = 4;
    }
    for (let i = 0; i < BACK_COUNT; i++) {
      const p = particles[i];
      backPositions[i * 3] = p.x;
      backPositions[i * 3 + 1] = p.y;
      backPositions[i * 3 + 2] = -4;
    }
  }, [particles, frontPositions, backPositions]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX - window.innerWidth / 2;
      pointer.current.y = -(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30); // clamp to avoid big jumps on tab refocus
    const { width, height } = state.size;
    const halfW = width / 2 + 60;
    const halfH = height / 2 + 60;
    const mx = pointer.current.x;
    const my = pointer.current.y;

    if (!prefersReducedMotion) {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap around the viewport edges so drift never runs dry.
        if (p.x > halfW) p.x = -halfW;
        else if (p.x < -halfW) p.x = halfW;
        if (p.y > halfH) p.y = -halfH;
        else if (p.y < -halfH) p.y = halfH;

        // Keep clear of the center AI-chip: soft collision that slides
        // particles around the boundary instead of bouncing them away,
        // which is what gives the halo/orbit look around the chip.
        const dist = Math.hypot(p.x, p.y);
        if (dist < EXCLUSION_RADIUS) {
          const nx = p.x / (dist || 1);
          const ny = p.y / (dist || 1);
          p.x = nx * EXCLUSION_RADIUS;
          p.y = ny * EXCLUSION_RADIUS;
          const radialVel = p.vx * nx + p.vy * ny;
          if (radialVel < 0) {
            p.vx -= radialVel * nx;
            p.vy -= radialVel * ny;
          }
        }

        // Cursor gently pushes nearby particles out of its way.
        const dx = p.x - mx;
        const dy = p.y - my;
        const mDist = Math.hypot(dx, dy);
        if (mDist < MOUSE_RADIUS && mDist > 0.001) {
          const push = ((MOUSE_RADIUS - mDist) / MOUSE_RADIUS) * MOUSE_REPEL_STRENGTH * dt;
          p.x += (dx / mDist) * push;
          p.y += (dy / mDist) * push;
        }
      }
    }

    // Write particle positions into the two depth-tier buffers.
    for (let i = 0; i < FRONT_COUNT; i++) {
      const p = particles[BACK_COUNT + i];
      frontPositions[i * 3] = p.x;
      frontPositions[i * 3 + 1] = p.y;
    }
    for (let i = 0; i < BACK_COUNT; i++) {
      const p = particles[i];
      backPositions[i * 3] = p.x;
      backPositions[i * 3 + 1] = p.y;
    }
    if (frontRef.current) frontRef.current.geometry.attributes.position.needsUpdate = true;
    if (backRef.current) backRef.current.geometry.attributes.position.needsUpdate = true;

    // Rebuild the connecting-line network for this frame.
    let lineCount = 0;
    const maxVerts = MAX_LINES * 2 * 3;
    for (let i = 0; i < particles.length && lineCount * 6 < maxVerts; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 >= CONNECT_DISTANCE * CONNECT_DISTANCE) continue;

        const dist = Math.sqrt(d2);
        let alpha = (1 - dist / CONNECT_DISTANCE) * LINE_BASE_OPACITY;

        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const mDist = Math.hypot(midX - mx, midY - my);
        if (mDist < MOUSE_RADIUS) {
          alpha *= 1 + (1 - mDist / MOUSE_RADIUS) * 1.8;
        }
        alpha = Math.min(alpha, LINE_MAX_OPACITY);

        const o = lineCount * 6;
        linePositions[o] = a.x;
        linePositions[o + 1] = a.y;
        linePositions[o + 2] = 0;
        linePositions[o + 3] = b.x;
        linePositions[o + 4] = b.y;
        linePositions[o + 5] = 0;
        lineColors[o] = COPPER.r * alpha;
        lineColors[o + 1] = COPPER.g * alpha;
        lineColors[o + 2] = COPPER.b * alpha;
        lineColors[o + 3] = COPPER.r * alpha;
        lineColors[o + 4] = COPPER.g * alpha;
        lineColors[o + 5] = COPPER.b * alpha;
        lineCount++;
        if (lineCount * 6 >= maxVerts) break;
      }
    }

    // A couple of lines from the chip's edge (the "core node") out to its
    // nearest halo particles, so the chip reads as part of the network.
    if (lineCount * 6 < maxVerts) {
      const nearest: { dist: number; p: Particle }[] = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dist = Math.hypot(p.x, p.y);
        if (dist > CORE_CONNECT_DISTANCE) continue;
        nearest.push({ dist, p });
      }
      nearest.sort((a, b) => a.dist - b.dist);
      for (let k = 0; k < Math.min(CORE_LINE_COUNT, nearest.length) && lineCount * 6 < maxVerts; k++) {
        const { dist, p } = nearest[k];
        const edgeX = (p.x / dist) * EXCLUSION_RADIUS;
        const edgeY = (p.y / dist) * EXCLUSION_RADIUS;
        const alpha = Math.min((1 - dist / CORE_CONNECT_DISTANCE) * LINE_BASE_OPACITY * 1.6, LINE_MAX_OPACITY);

        const o = lineCount * 6;
        linePositions[o] = edgeX;
        linePositions[o + 1] = edgeY;
        linePositions[o + 2] = 0;
        linePositions[o + 3] = p.x;
        linePositions[o + 4] = p.y;
        linePositions[o + 5] = 0;
        lineColors[o] = COPPER.r * alpha;
        lineColors[o + 1] = COPPER.g * alpha;
        lineColors[o + 2] = COPPER.b * alpha;
        lineColors[o + 3] = COPPER.r * alpha;
        lineColors[o + 4] = COPPER.g * alpha;
        lineColors[o + 5] = COPPER.b * alpha;
        lineCount++;
      }
    }

    if (lineRef.current) {
      const geo = lineRef.current.geometry;
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.setDrawRange(0, lineCount * 2);
    }
  });

  return (
    <>
      <lineSegments ref={lineRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} usage={THREE.DynamicDrawUsage} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} usage={THREE.DynamicDrawUsage} />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </lineSegments>

      <Points ref={backRef} positions={backPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8A5A3C"
          size={1.8}
          sizeAttenuation={false}
          depthWrite={false}
          opacity={0.37}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      <Points ref={frontRef} positions={frontPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#E5C0A0"
          size={3.0}
          sizeAttenuation={false}
          depthWrite={false}
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </>
  );
}

export default function HeroParticles() {
  return (
    // Confined to the first screen of the hero only — pinned to the top
    // of the (taller, scrollable) section and capped at 100vh, so it can
    // never reach the stats/paragraph content further down. The mask
    // fades it out well before that edge instead of a hard cutoff line.
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none"
      style={{
        height: "100vh",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 88%)",
        maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 88%)",
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 100], zoom: 1, near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}
