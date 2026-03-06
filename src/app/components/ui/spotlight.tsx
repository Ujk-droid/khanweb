"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className,
  fill,
  children,
}: {
  className?: string;
  fill?: string;
  children?: React.ReactNode;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 overflow-hidden rounded-lg",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill || "rgba(37, 95, 56, 0.4)"}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Spotlight className="h-full">
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-lg border border-white/10 bg-[#030712] p-8",
          "transition-all duration-300 hover:border-[#255F38]/50 hover:shadow-[0_0_40px_rgba(37,95,56,0.2)]",
          className
        )}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </Spotlight>
  );
};
