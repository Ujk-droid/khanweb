"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// ─────────────────────────────────────────────────────────────
//  TechOrbitSVG — Rose Copper Gold circular tech diagram
//
//  A center glowing hub with concentric rings; each ring carries
//  a handful of glowing nodes connected to the hub by thin spokes.
//
//  animated    — hub breathing glow, per-node idle pulse, and the
//                travelling data pulse (all SMIL, cheap, always safe).
//  interactive — hands ring rotation to a rAF loop instead of SMIL so
//                its speed can respond to cursor movement, turns on
//                per-node proximity glow (node + its spoke brighten as
//                the cursor nears), and enables click: nearby nodes
//                pulse larger and their spokes flare, the hub pops
//                with a spring, and a ripple expands from the center.
//                Desktop-only — the caller is responsible for not
//                setting this on mobile.
// ─────────────────────────────────────────────────────────────

const COPPER = "#B78460";
const CHAMPAGNE = "#E5C0A0";
const BRONZE = "#8A5A3C";
const DIM = "rgba(183,132,96,0.20)";

const CENTER = 130;
const NODE_BASE_R = 3.2;
const PROXIMITY_PX = 60; // on-screen px — how close the cursor must be to light up a node
const CLICK_RADIUS_PX = 150; // on-screen px — how far a click's pulse reaches
const CLICK_DECAY_TAU = 0.12; // seconds — click pulse settles back out over ~350-450ms

// radius, node angles (deg), base angular speed (deg/s, sign = direction)
const RINGS = [
  { radius: 42, angles: [30, 150, 270], speed: 6 },
  { radius: 68, angles: [45, 135, 225, 315], speed: -3.79 },
  { radius: 94, angles: [18, 90, 162, 234, 306], speed: 2.77 },
] as const;

function polar(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

interface TechOrbitSVGProps {
  animated?: boolean;
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface NodeSlot {
  node: SVGCircleElement | null;
  line: SVGLineElement | null;
  hoverGlow: number;
  clickGlow: number;
}

interface Ripple {
  id: number;
}

export function TechOrbitSVG({ animated = true, interactive = false, className = "", style }: TechOrbitSVGProps) {
  const uid = useId().replace(/[:]/g, "");
  const ringRefs = useRef<(SVGGElement | null)[]>([]);
  const nodeSlots = useRef<NodeSlot[]>([]);
  const hubControls = useAnimation();
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // ── Interactive ring rotation + node proximity/click glow ────
  // Imperative rAF loop: mutates SVG attributes/styles directly,
  // no React state, so this never triggers a re-render.
  useEffect(() => {
    if (!interactive) return;

    const mouse = { x: -9999, y: -9999, lastX: -9999, lastY: -9999 };
    let speedBoost = 0;
    const angles = RINGS.map(() => 0);

    ringRefs.current.forEach((g) => {
      if (g) g.style.transformOrigin = `${CENTER}px ${CENTER}px`;
    });

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("pointermove", handlePointerMove);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 20);
      last = now;

      // Cursor speed gently boosts rotation — decays back to the base
      // speed as soon as the cursor settles or leaves.
      const moved = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      const rawBoost = Math.min(moved / 40, 1);
      speedBoost = speedBoost * 0.9 + rawBoost * 0.1;

      RINGS.forEach((ring, i) => {
        angles[i] += ring.speed * dt * (1 + speedBoost * 0.6);
        const g = ringRefs.current[i];
        if (g) g.style.transform = `rotate(${angles[i]}deg)`;
      });

      const decay = Math.exp(-dt / CLICK_DECAY_TAU);
      for (const slot of nodeSlots.current) {
        if (!slot.node || !slot.line) continue;
        const rect = slot.node.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(cx - mouse.x, cy - mouse.y);
        const target = dist < PROXIMITY_PX ? 1 - dist / PROXIMITY_PX : 0;
        slot.hoverGlow = slot.hoverGlow * 0.85 + target * 0.15;
        slot.clickGlow *= decay;

        const combined = slot.hoverGlow + slot.clickGlow;
        slot.node.setAttribute("r", String(NODE_BASE_R + Math.min(combined, 1.6) * 2.2));
        slot.node.style.opacity = String(0.75 + Math.min(combined, 1) * 0.25);
        slot.line.style.opacity = String(0.6 + Math.min(combined, 1) * 0.4);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(raf);
    };
  }, [interactive]);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive) return;

    for (const slot of nodeSlots.current) {
      if (!slot.node) continue;
      const rect = slot.node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(cx - e.clientX, cy - e.clientY);
      const impulse = dist < CLICK_RADIUS_PX ? 1 - dist / CLICK_RADIUS_PX : 0;
      slot.clickGlow = Math.max(slot.clickGlow, impulse);
    }

    hubControls.start({
      scale: [1, 1.4, 1],
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    });

    setRipples((prev) => [...prev, { id: Date.now() + Math.random() }]);
  };

  let nodeIndex = 0;

  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ ...style, pointerEvents: interactive ? "auto" : "none", cursor: interactive ? "pointer" : undefined }}
      onClick={interactive ? handleClick : undefined}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-hubCore`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={CHAMPAGNE} />
          <stop offset="100%" stopColor={COPPER} />
        </radialGradient>
        <radialGradient id={`${uid}-hubGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={CHAMPAGNE} stopOpacity="0.8" />
          <stop offset="100%" stopColor={COPPER} stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-nodeGlow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id={`${uid}-hubGlowFilter`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── Outer dashed instrument bezel ─────────────────────── */}
      <g>
        <circle
          cx={CENTER} cy={CENTER} r="112"
          stroke={COPPER} strokeWidth="0.7" strokeOpacity="0.14" strokeDasharray="1.5 7"
        />
        {animated && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CENTER} ${CENTER}`}
            to={`360 ${CENTER} ${CENTER}`}
            dur="220s"
            repeatCount="indefinite"
          />
        )}
      </g>

      {/* ── Rings: circle + spokes + nodes ─────────────────────── */}
      {RINGS.map((ring, ringIdx) => {
        const forward = ring.speed > 0;
        const dur = 360 / Math.abs(ring.speed);
        return (
        <g key={ringIdx} ref={(el) => { ringRefs.current[ringIdx] = el; }}>
          <circle cx={CENTER} cy={CENTER} r={ring.radius} stroke={DIM} strokeWidth="0.8" />
          {animated && !interactive && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={forward ? `0 ${CENTER} ${CENTER}` : `360 ${CENTER} ${CENTER}`}
              to={forward ? `360 ${CENTER} ${CENTER}` : `0 ${CENTER} ${CENTER}`}
              dur={`${dur}s`}
              repeatCount="indefinite"
            />
          )}

          {ring.angles.map((angle, i) => {
            const { x, y } = polar(ring.radius, angle);
            const gradId = `${uid}-spoke-${ringIdx}-${i}`;
            const slotIndex = nodeIndex++;
            return (
              <g key={i}>
                <linearGradient
                  id={gradId}
                  gradientUnits="userSpaceOnUse"
                  x1={x} y1={y} x2={CENTER} y2={CENTER}
                >
                  <stop offset="0%" stopColor={COPPER} stopOpacity="0.12" />
                  <stop offset="100%" stopColor={CHAMPAGNE} stopOpacity="0.55" />
                </linearGradient>
                <line
                  x1={x} y1={y} x2={CENTER} y2={CENTER}
                  stroke={`url(#${gradId})`} strokeWidth="0.9"
                  ref={(el) => {
                    if (!interactive) return;
                    const slot = (nodeSlots.current[slotIndex] ??= { node: null, line: null, hoverGlow: 0, clickGlow: 0 });
                    slot.line = el;
                  }}
                />
                <circle
                  cx={x} cy={y} r={NODE_BASE_R}
                  fill={CHAMPAGNE} filter={`url(#${uid}-nodeGlow)`} opacity="0.9"
                  ref={(el) => {
                    if (!interactive) return;
                    const slot = (nodeSlots.current[slotIndex] ??= { node: null, line: null, hoverGlow: 0, clickGlow: 0 });
                    slot.node = el;
                  }}
                >
                  {animated && (
                    <animate
                      attributeName="opacity"
                      values="0.55;1;0.55"
                      dur={`${2.6 + i * 0.5}s`}
                      begin={`${i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
              </g>
            );
          })}
        </g>
        );
      })}

      {/* ── Traveling data pulse on the outer ring ────────────── */}
      {animated && (
        <>
          <circle r="2.2" fill={CHAMPAGNE} filter={`url(#${uid}-nodeGlow)`}>
            <animateMotion dur="9s" repeatCount="indefinite">
              <mpath href={`#${uid}-outerPath`} />
            </animateMotion>
          </circle>
          <path
            id={`${uid}-outerPath`}
            d={`M ${CENTER + 94} ${CENTER} A 94 94 0 1 1 ${CENTER - 94} ${CENTER} A 94 94 0 1 1 ${CENTER + 94} ${CENTER}`}
            visibility="hidden"
          />
        </>
      )}

      {/* ── Click ripple — expands from the hub, fades out ────── */}
      {ripples.map((r) => (
        <motion.circle
          key={r.id}
          cx={CENTER} cy={CENTER}
          fill="none" stroke={CHAMPAGNE} strokeWidth="2.5"
          filter={`url(#${uid}-nodeGlow)`}
          initial={{ r: 10, opacity: 0.85 }}
          animate={{ r: 118, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onAnimationComplete={() => setRipples((prev) => prev.filter((x) => x.id !== r.id))}
        />
      ))}

      {/* ── Center hub — fixed position, pops on click ────────── */}
      <motion.g animate={hubControls} style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
        <circle cx={CENTER} cy={CENTER} r="20" fill={`url(#${uid}-hubGlow)`}>
          {animated && (
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.6s" repeatCount="indefinite" />
          )}
        </circle>
        <circle
          cx={CENTER} cy={CENTER} r="7"
          fill={`url(#${uid}-hubCore)`}
          stroke={BRONZE} strokeWidth="0.6" strokeOpacity="0.5"
          filter={`url(#${uid}-hubGlowFilter)`}
        />
      </motion.g>
    </svg>
  );
}

export default TechOrbitSVG;
