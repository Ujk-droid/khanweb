"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TechOrbitSVG } from "./ui/TechOrbit";
import { useIsDesktop } from "@/lib/useIsDesktop";

// Hero accent — a circular tech-orbit diagram (hub + concentric rings +
// glowing nodes). Desktop-only, same gating as HeroParticles:
//  - the whole diagram visibly tilts toward the cursor in real time (tracked
//    across the full window, same "field of influence" feel as the particle
//    network's cursor repel, not just a hover-over-the-graphic tilt)
//  - each ring's rotation speed nudges up slightly as the cursor moves
//  - nodes brighten (and their spoke line brightens with them) as the
//    cursor nears them
// Mobile gets the identical SVG rendered fully static (no listeners, no
// <animate>/<animateTransform> tags at all) at low opacity — a light
// decorative watermark rather than something competing for attention.

interface TechOrbitVisualProps {
  position?: "right" | "left";
  size?: "sm" | "lg";
}

const sizeMap = {
  sm: "clamp(140px, 16vw, 220px)",
  lg: "clamp(210px, 24vw, 360px)",
};

const TILT_DEGREES = 18; // clearly follows the cursor — a real "leaning toward you" feel

export const TechOrbitVisual: React.FC<TechOrbitVisualProps> = ({ position = "right", size = "lg" }) => {
  const isDesktop = useIsDesktop();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  // Tracked across the whole window (not just this element's own bounds) so
  // the diagram reacts the moment the cursor enters the hero, matching the
  // particle network's whole-hero "field of influence" rather than a tight
  // hover box.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.5 });
  const springY = useSpring(my, { stiffness: 90, damping: 18, mass: 0.5 });
  const rotateX = useTransform(springY, [-1, 1], [TILT_DEGREES, -TILT_DEGREES]);
  const rotateY = useTransform(springX, [-1, 1], [-TILT_DEGREES, TILT_DEGREES]);

  const enableMotion = isDesktop && !reducedMotion;

  useEffect(() => {
    if (!enableMotion) return;
    const handlePointerMove = (e: PointerEvent) => {
      mx.set(Math.max(-1, Math.min(1, (e.clientX / window.innerWidth) * 2 - 1)));
      my.set(Math.max(-1, Math.min(1, (e.clientY / window.innerHeight) * 2 - 1)));
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [enableMotion, mx, my]);

  const positionStyle =
    position === "right" ? { right: "3%", top: "10%" } : { left: "2%", bottom: "13%" };
  const initialRotate = position === "right" ? -4 : 6;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: initialRotate }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: position === "right" ? 0.3 : 0.5, ease: "easeOut" }}
      className="absolute z-20 pointer-events-none select-none"
      style={{ ...positionStyle, width: sizeMap[size] }}
    >
      {enableMotion ? (
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ perspective: "800px" }}
        >
          {/* Soft copper glow behind the diagram — single tone, matches the palette */}
          <motion.div
            animate={{ opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(183,132,96,0.28) 0%, transparent 70%)" }}
          />
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
            <TechOrbitSVG
              animated
              interactive
              className="relative w-full h-auto"
              style={{ opacity: size === "lg" ? 0.9 : 0.65 }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <TechOrbitSVG animated={false} className="w-full h-auto" style={{ opacity: size === "lg" ? 0.35 : 0.2 }} />
      )}
    </motion.div>
  );
};

export default TechOrbitVisual;
