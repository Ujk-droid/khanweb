import type React from "react"

function GradientCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ")
  return (
    <div
      className={cn(
        "relative rounded-xl p-[1px] overflow-hidden bg-gradient-to-r from-[#B78460] to-[#8A5A3C]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#B78460] to-[#8A5A3C] opacity-30 blur-[4px]"></div>
      <div className="relative h-full rounded-[10px] bg-[#0B0B0C] p-5 z-10">{children}</div>
    </div>
  )
}

export { GradientCard }
