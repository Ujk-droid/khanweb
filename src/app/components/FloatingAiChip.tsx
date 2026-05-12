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
        {/* Intense 3D Neural Glow — Multiple layers */}
        {blur && (
          <>
            {/* Outer cyan-blue neural glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 blur-3xl rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(100, 200, 255, 0.3) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            {/* Inner warm amber neural glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute inset-0 blur-2xl rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255, 157, 66, 0.4) 0%, transparent 65%)",
                filter: "blur(35px)",
              }}
            />
            {/* Deep purple core glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute inset-0 blur-xl rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 60%)",
                filter: "blur(25px)",
              }}
            />
          </>
        )}

        {/* Subtle rotation with 3D perspective and chip container */}
        <motion.div
          animate={{
            rotate: [0, 2, 0, -2, 0],
            rotateX: [0, 3, 0, -3, 0],
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            opacity: opacity,
            filter: blur 
              ? `drop-shadow(0 0 30px rgba(255,157,66,0.5)) drop-shadow(0 0 60px rgba(100,200,255,0.3)) drop-shadow(0 0 20px rgba(168,85,247,0.25))`
              : `drop-shadow(0 0 12px rgba(183,132,96,0.25))`,
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <HeroChip animated={animated} />
        </motion.div>

        {/* Pulsing energy particles around chip */}
        {animated && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  background: i % 2 === 0 ? "rgba(255, 157, 66, 0.6)" : "rgba(100, 200, 255, 0.5)",
                  left: `${50 + 40 * Math.cos((i / 4) * Math.PI * 2)}%`,
                  top: `${50 + 40 * Math.sin((i / 4) * Math.PI * 2)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FloatingAiChip;
