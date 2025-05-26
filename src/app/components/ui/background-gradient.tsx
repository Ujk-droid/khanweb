"use client"
import { cn } from "@/lib/utils"
import type React from "react"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-[#73f3f3] via-[#1A3636] to-black-300 opacity-70 group-hover:opacity-100 blur-sm transition duration-500",
          animate && "animate-gradient",
          className,
        )}
      />
      <div className="relative">{children}</div>
    </div>
  )
}