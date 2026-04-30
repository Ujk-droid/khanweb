"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChipBadge } from "./AiChip.tsx";
import { TiltWrapper } from "@/components/TiltWrapper";

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
      title: "AI Solutions",
      description: "Intelligent automation, machine learning, and AI agents to enhance your business capabilities.",
    },
  ];

  const servicesToUse = services || defaultServices;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {servicesToUse.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-card group relative overflow-hidden rounded-3xl p-6 backdrop-blur-xl transition-all duration-500"
      style={{
        background: "rgba(20, 20, 20, 0.70)",
        border: "1px solid rgba(42, 36, 32, 0.9)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.35)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(183, 132, 96, 0.28)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3), 0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(183,132,96,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(42, 36, 32, 0.9)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.35)";
      }}
    >
      {/* Copper hover overlay */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(183,132,96,0.04) 0%, transparent 60%)" }}
      />

      {/* ── Chip badge — top-right corner ─────────────────── */}
      <div
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400"
        style={{ filter: "drop-shadow(0 0 4px rgba(183,132,96,0.5))" }}
      >
        <ChipBadge className="w-7 h-7" />
      </div>

      <div className="relative z-10">
        {/* Copper icon container with 3D Tilt effect */}
        <TiltWrapper
          intensity={25}
          scale={1.05}
          style={{ transformStyle: "preserve-3d" }}
          className="mb-4 w-fit"
        >
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-700 ease-in-out shadow-[0_0_20px_rgba(183,132,96,0.3)] group-hover:shadow-[0_0_35px_rgba(183,132,96,0.6)] group-hover:rotate-[360deg]"
            style={{
              background: "linear-gradient(135deg, #B78460 0%, #8A5A3C 100%)",
              boxShadow: "0 0 14px rgba(183,132,96,0.22), 0 2px 6px rgba(0,0,0,0.4)",
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d"
            }}
          >
            {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, {
              className: "h-6 w-6",
              style: { color: "#F5F0EB", transform: "translateZ(20px)" },
            })}
          </div>
        </TiltWrapper>

        <h3
          className="font-heading mb-2 text-xl font-bold"
          style={{ color: "#F5F0EB" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#9A8F87" }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};
