"use client";

// Lazy-loaded, desktop-only ambient particle field for the Home hero.
// Kept in its own file so Hero.tsx can `next/dynamic` import it with
// `ssr: false` — react-three-fiber touches the DOM/WebGL context and
// can't run during SSR, and there's no reason to ship its JS to visitors
// who never see it (mobile gets a plain CSS gradient instead, see Hero.tsx).
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 700;

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 5.5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = radius * Math.cos(phi) * 0.6 - 2;
    }
    return arr;
  }, []);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_state, delta) => {
    const group = pointsRef.current;
    if (!group || prefersReducedMotion) return;
    group.rotation.y += delta * 0.025;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.current.y * 0.12, 0.02);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, pointer.current.x * 0.06, 0.02);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#B78460"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ParticleField />
    </Canvas>
  );
}
