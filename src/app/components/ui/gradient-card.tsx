import type React from "react"

function GradientCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ")
  return (
    <div
      className={cn(
        "relative rounded-xl p-[2px] overflow-hidden bg-gradient-to-r from-[#73f3f3] to-[#006A71]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#73f3f3] to-[#006A71] opacity-75 blur-[2px]"></div>
      <div className="relative h-full rounded-lg bg-gray-950 p-5 z-10">{children}</div>
    </div>
  )
}

export { GradientCard }
