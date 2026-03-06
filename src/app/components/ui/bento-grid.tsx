"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        "group relative col-span-1 row-span-1 overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1c] p-6",
        "transition-all duration-300 hover:border-[#255F38]/50 hover:shadow-[0_0_30px_rgba(37,95,56,0.15)]",
        colSpan === 2 && "md:col-span-2",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#255F38]/0 via-[#255F38]/0 to-[#255F38]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export const BentoCardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

export const BentoCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const BentoCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm text-gray-400 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

export const BentoCardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("mt-auto", className)}>{children}</div>;
};
