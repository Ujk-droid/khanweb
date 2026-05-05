"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroChip } from "./ui/AiChip";

interface FloatingAiChipProps {
  variant?: "hero" | "badge" | "divider";
  className?: string;
  size?: "sm" | "md" | "lg";
  position?: "right" | "left";
  opacity?: number;
  blur?: boolean;
  animated?: boolean;
}

export const FloatingAiChip: React.FC<FloatingAiChipProps> = ({
  className = "",
  size = "lg",
  position = "right",
  opacity = 0.22,
  blur = true,
  animated = true,
}) => {
  // Size mapping
  const sizeMap = {
    sm: "clamp(120px, 14vw, 200px)",
    md: "clamp(180px, 18vw, 260px)",
    lg: "clamp(180px, 22vw, 320px)",
  };

  // Position mapping
  const positionStyle = position === "right" 
    ? { right: "3%", top: "12%" }
    : { left: "2%", bottom: "15%" };

  // Initial rotation
  const initialRotate = position === "right" ? -8 : 12;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: initialRotate }}
      animate={{ opacity: 1, scale: 1, rotate: initialRotate }}
      transition={{
        duration: 1.2,
        delay: position === "right" ? 0.3 : 0.5,
        ease: "easeOut",
      }}
      className={`absolute pointer-events-none select-none ${className}`}
      style={positionStyle}
    >
      {/* Floating wrapper with anti-gravity effect */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: sizeMap[size],
        }}
      >
        {/* Pulsing copper glow background */}
        {blur && (
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.45, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 blur-3xl rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(183, 132, 96, 0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        )}

        {/* Subtle rotation and chip container */}
        <motion.div
          animate={{
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            opacity: opacity,
            filter: blur 
              ? `drop-shadow(0 0 18px rgba(183,132,96,0.35))`
              : `drop-shadow(0 0 12px rgba(183,132,96,0.25))`,
          }}
        >
          <HeroChip animated={animated} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingAiChip;
