"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  baseRadius?: number;
}

export const Vortex = (props: VortexProps) => {
  const {
    children,
    className,
    containerClassName,
    particleCount = 70,
    rangeY = 100,
    baseHue = 160, // Emerald hue
    baseSpeed = 0.5,
    baseRadius = 2,
  } = props;

  const particles = React.useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: baseSpeed + Math.random() * 0.5,
      radius: baseRadius + Math.random() * 3,
      hue: baseHue + Math.random() * 20,
    }));
  }, [particleCount, baseHue, baseSpeed, baseRadius]);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#030712]",
        containerClassName
      )}
    >
      {/* Animated Background Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#10B981/5_1px,transparent_1px),linear-gradient(to_bottom,#10B981/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "top center",
        }}
      />

      {/* Vortex Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.radius * 2,
              height: particle.radius * 2,
              backgroundColor: `hsl(${particle.hue}, 84%, 39%)`,
              boxShadow: `0 0 ${particle.radius * 4}px hsl(${particle.hue}, 84%, 39%)`,
            }}
            animate={{
              y: [
                particle.y - rangeY,
                particle.y + rangeY,
                particle.y - rangeY,
              ],
              x: [
                particle.x + Math.sin(particle.y / 50) * 20,
                particle.x - Math.sin(particle.y / 50) * 20,
                particle.x + Math.sin(particle.y / 50) * 20,
              ],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712]" />

      {/* Content Container */}
      <div className={cn("relative z-10 h-full w-full", className)}>
        {children}
      </div>
    </div>
  );
};

// Hero Component using Vortex
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Building Your Digital Future",
  subtitle = "TechExa Vision delivers cutting-edge software solutions with modern design and exceptional performance. Transform your business with our expert team.",
  ctaText = "Get Started",
  onCtaClick,
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Vortex
        particleCount={80}
        rangeY={150}
        baseHue={160}
        baseSpeed={0.3}
        containerClassName="bg-[#030712]"
      >
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400">
              Welcome to TechExa Vision
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-b from-white via-white to-emerald-400 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl text-center text-lg text-slate-400 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-medium text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#030712]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                {ctaText}
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button className="group inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#030712]">
              Learn More
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Vortex>
    </section>
  );
};
