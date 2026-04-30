"use client";
import { cn } from "@/lib/utils";
import type React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

/**
 * HoverBorderGradient — Midnight & Gold edition
 * Default gradient uses gold tones; callers can override via `from`/`to` props.
 */
export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  from = "rgba(212, 175, 55, 0.6)",
  to = "rgba(240, 208, 96, 0.3)",
  ...props
}: {
  children?: ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  from?: string;
  to?: string;
  [key: string]: unknown;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("relative rounded-3xl group", containerClassName)}
      onMouseMove={handleMouseMove}
    >
      {/* Radial gold gradient that follows the cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              ${from},
              ${to} 60%,
              transparent
            )
          `,
        }}
      />
      <Tag className={cn("relative rounded-3xl", className)} {...props}>
        {children}
      </Tag>
    </div>
  );
};
