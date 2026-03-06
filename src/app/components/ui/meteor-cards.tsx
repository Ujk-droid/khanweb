"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Meteor {
  x: number;
  y: number;
  length: number;
  delay: number;
  duration: number;
}

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className }) => {
  const [meteors, setMeteors] = React.useState<Meteor[]>([]);

  React.useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      length: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 2,
    }));
    setMeteors(styles);
  }, [number]);

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-emerald-500 shadow-[0_0_0_1px_#10B981]",
            className
          )}
          style={{
            top: 0,
            left: `${el.x}%`,
            width: `${el.length}px`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          <div className="pointer-events-none absolute inset-0 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-emerald-500 to-transparent opacity-50" />
        </span>
      ))}
    </>
  );
};

interface MeteorCardProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  gradient?: "emerald" | "green" | "teal";
}

export const MeteorCard: React.FC<MeteorCardProps> = ({
  children,
  className,
  icon,
  title,
  description,
  gradient = "emerald",
}) => {
  const gradientClasses = {
    emerald: "from-emerald-500/20 to-green-600/20",
    green: "from-green-500/20 to-emerald-600/20",
    teal: "from-teal-500/20 to-emerald-600/20",
  };

  return (
    <div className="relative h-full w-full">
      {/* Meteors Background Effect */}
      <Meteors number={15} />

      {/* Card Container */}
      <motion.div
        whileHover={{ y: -8 }}
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c]/80 p-6 backdrop-blur-xl transition-all duration-500",
          "hover:border-emerald-500/50",
          "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)]",
          className
        )}
      >
        {/* Gradient Background on Hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            gradientClasses[gradient],
            "group-hover:opacity-100"
          )}
        />

        {/* Border Glow Effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
            "group-hover:opacity-100"
          )}
          style={{
            boxShadow: "inset 0 0 20px rgba(16, 185, 129, 0.1)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          {icon && (
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/30">
              {React.cloneElement(icon as React.ReactElement, {
                className: "h-6 w-6 text-white",
              })}
            </div>
          )}

          {/* Title */}
          {title && (
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          )}

          {/* Description */}
          {description && (
            <p className="mb-4 text-slate-400">{description}</p>
          )}

          {/* Children */}
          {children}
        </div>

        {/* Corner Accent */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      </motion.div>
    </div>
  );
};

// Services Cards Component
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesCardsProps {
  services?: ServiceCard[];
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ services }) => {
  const defaultServices: ServiceCard[] = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies like Next.js, React, and Tailwind CSS.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern businesses.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "API Development",
      description: "Robust, scalable APIs that power your applications and integrations.",
    },
  ];

  const servicesToUse = services || defaultServices;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {servicesToUse.map((service, index) => (
        <MeteorCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          gradient={index % 3 === 0 ? "emerald" : index % 3 === 1 ? "green" : "teal"}
        />
      ))}
    </div>
  );
};

// Background Gradient Animation Component
interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  animate = true,
}) => {
  return (
    <div className={cn("group relative", className)}>
      {/* Animated Gradient Background */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 opacity-20 blur-lg transition-opacity duration-500",
          animate && "group-hover:opacity-40"
        )}
      />

      {/* Content Container */}
      <div className="relative h-full rounded-2xl bg-[#0a0f1c]">
        {children}
      </div>
    </div>
  );
};
