"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroChip } from "./ui/AiChip";

export interface HeroProps {
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const HeroSection: React.FC<HeroProps> = ({
  subtitle = "TechExa Vision delivers cutting-edge software solutions with modern design and exceptional performance. Transform your business with our expert team.",
  ctaText = "Start Your Project",
  ctaHref = "/contact",
}) => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20"
      style={{ backgroundColor: "#0B0B0C" }}
    >
      {/* ── Deep-space copper radial glows ─────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%", left: "-10%",
          width: "65vw", height: "65vw",
          background: "radial-gradient(circle, rgba(140, 90, 60, 0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%", right: "-10%",
          width: "55vw", height: "55vw",
          background: "radial-gradient(circle, rgba(140, 90, 60, 0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── Matte grid texture ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(183,132,96,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(183,132,96,0.035) 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
      />

      {/* ── Vignette ────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(11,11,12,0.7) 100%)",
        }}
      />

      {/* ── AI Chip — large glowing background accent ───────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute pointer-events-none select-none"
        style={{
          right: "3%",
          top: "12%",
          width: "clamp(180px, 22vw, 320px)",
          opacity: 0.22,
          filter: "drop-shadow(0 0 18px rgba(183,132,96,0.35))",
        }}
      >
        <HeroChip animated />
      </motion.div>

      {/* ── AI Chip — mirrored left, dimmer ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 12 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
        className="absolute pointer-events-none select-none"
        style={{
          left: "2%",
          bottom: "15%",
          width: "clamp(120px, 14vw, 200px)",
          opacity: 0.12,
          filter: "drop-shadow(0 0 12px rgba(183,132,96,0.25))",
        }}
      >
        <HeroChip animated={false} />
      </motion.div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center w-full max-w-5xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
          style={{
            border: "1px solid rgba(183, 132, 96, 0.20)",
            background: "rgba(183, 132, 96, 0.07)",
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "#E5C0A0" }} />
          <span className="text-sm" style={{ color: "#9A8F87" }}>
            Transforming Ideas into Digital Excellence
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative group">
            {/* Layered copper glow */}
            <div
              className="absolute -inset-8 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110"
              style={{ background: "radial-gradient(circle, rgba(183,132,96,0.20) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -inset-4 rounded-full blur-xl"
              style={{ background: "radial-gradient(circle, rgba(183,132,96,0.14) 0%, transparent 70%)" }}
            />
            <div className="relative h-36 w-36 md:h-44 md:w-44">
              <Image
                src="/logo1.jpg"
                alt="TechExa Vision Logo"
                fill
                className="rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  border: "2px solid rgba(183, 132, 96, 0.28)",
                  boxShadow: "0 0 40px rgba(183,132,96,0.22), 0 0 80px rgba(183,132,96,0.08)",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Hero Title — Embossed Copper Metallic ─────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-heading font-bold tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1.05 }}
        >
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to bottom, #F5F0EB 0%, #B78460 50%, #8A5A3C 100%)",
            }}
          >
            TechExa Vision
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#9A8F87" }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — Copper to Dark Bronze */}
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #B78460 0%, #8A5A3C 100%)",
              color: "#F5F0EB",
              boxShadow: "0 0 15px rgba(183,132,96,0.25), 0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Secondary */}
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all duration-300 hover:brightness-110"
            style={{
              border: "1px solid rgba(42, 36, 32, 0.9)",
              background: "rgba(20, 20, 20, 0.6)",
              color: "#F5F0EB",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(183, 132, 96, 0.30)";
              (e.currentTarget as HTMLElement).style.background = "rgba(183, 132, 96, 0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(42, 36, 32, 0.9)";
              (e.currentTarget as HTMLElement).style.background = "rgba(20, 20, 20, 0.6)";
            }}
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl mx-auto"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "50+",  label: "Happy Clients" },
            { value: "10+",  label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="font-heading text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-1"
                style={{ backgroundImage: "linear-gradient(to bottom, #E5C0A0 0%, #B78460 100%)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "#9A8F87" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
            style={{ color: "rgba(154, 143, 135, 0.5)" }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
