"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  scale?: number;
  style?: React.CSSProperties;
}

export const TiltWrapper: React.FC<TiltWrapperProps> = ({
  children,
  className = "",
  intensity = 15,
  scale = 1.05,
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Transform coordinates to degrees based on intensity
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center (range -0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ perspective: "1000px", ...style }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          scale: scale,
          filter: "drop-shadow(0 0 15px rgba(183, 132, 96, 0.4))"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltWrapper;
