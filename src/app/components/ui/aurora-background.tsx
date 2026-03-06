"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  radialGradient?: string;
}

export function AuroraBackground({
  className,
  children,
  radialGradient = "conic-gradient(from 90deg at 50% 50%, #0000 90%, #255F38 180deg, #0000 270deg)",
}: AuroraBackgroundProps) {
  return (
    <main className={cn("relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#030712]", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] filter",
            "animate-aurora",
            "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#255F38]/30 via-[#030712]/50 to-transparent"
          )}
          style={{
            background: radialGradient,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#255F38]/5 to-[#255F38]/10" />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
}
