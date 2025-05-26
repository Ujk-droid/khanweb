


import React from "react";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientCard = ({ children, className }: GradientCardProps) => {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};