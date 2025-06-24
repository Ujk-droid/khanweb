"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const CssGlobe = ({
  className,
  size = 400,
}: {
  className?: string
  size?: number
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-full", className)} style={{ width: size, height: size }}>
      {/* Enhanced glow effect matching theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#006A71]/30 to-[#73f3f3]/30 rounded-full blur-xl"></div>

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

        {/* Add a gradient overlay that enhances the colors with theme colors */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#006A71]/10 via-transparent to-[#73f3f3]/10 mix-blend-overlay"></div>
      </div>

      {/* Add a pulsing glow effect with theme colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#006A71]/20 to-[#73f3f3]/20 rounded-full blur-xl animate-pulse"></div>
    </div>
  )
}
