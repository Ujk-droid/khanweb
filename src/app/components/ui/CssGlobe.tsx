"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const CssGlobe = ({
  className,
  size = 400,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div
      className={cn("relative overflow-hidden rounded-full", className)}
      style={{ width: size, height: size }}
    >
      {/* Outer gold glow ring */}
      <div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)" }}
      />

      {/* Spinning earth */}
      <div className="w-full h-full relative rounded-full overflow-hidden">
        <div className="absolute inset-0 animate-spin-slow">
          <Image
            src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
            alt="Earth"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gold tint overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, transparent 50%, rgba(240,208,96,0.08) 100%)" }}
        />
      </div>

      {/* Pulsing gold glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl animate-pulse pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)" }}
      />
    </div>
  );
};
