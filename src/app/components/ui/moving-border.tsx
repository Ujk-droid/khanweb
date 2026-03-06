"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MovingBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  duration?: number;
  borderRadius?: number;
  borderWidth?: number;
  from?: string;
  to?: string;
}

export const MovingBorder = ({
  children,
  containerClassName,
  className,
  duration = 3000,
  borderRadius = 8,
  borderWidth = 2,
  from = "#255F38",
  to = "#2f7a47",
}: MovingBorderProps) => {
  return (
    <div
      className={cn(
        "relative inline-flex h-fit w-fit overflow-hidden rounded-[--border-radius]",
        containerClassName
      )}
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{
          borderRadius: `${borderRadius}px`,
          background: `conic-gradient(from 0deg at 50% 50%, ${from}, ${to}, ${from})`,
          filter: "blur(2px)",
        }}
      />
      <motion.div
        className="absolute inset-[--border-width]"
        style={{
          borderRadius: `${borderRadius - borderWidth}px`,
          background: "#030712",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: `${duration / 1000}s`,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative z-10 px-6 py-3",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const MovingBorderButton = ({
  children,
  className,
  ...props
}: MovingBorderProps) => {
  return (
    <MovingBorder
      {...props}
      containerClassName={cn(
        "group cursor-pointer",
        props.containerClassName
      )}
      className={cn(
        "bg-transparent text-white font-medium transition-colors hover:text-[#255F38]",
        className
      )}
    >
      {children}
    </MovingBorder>
  );
};
