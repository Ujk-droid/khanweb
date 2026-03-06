"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MovingBorderButton } from "./ui/moving-border";
import { BackgroundBeams } from "./ui/background-beams";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-20">
      {/* Background Beams Effect */}
      <BackgroundBeams className="opacity-40" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#255F38]/20 via-[#030712]/50 to-transparent" />

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#255F38]/30 bg-[#255F38]/10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-[#4ade80]" />
          <span className="text-sm text-gray-300">Transforming Ideas into Digital Excellence</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#255F38] to-[#2f7a47] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <Image
              src="/logo1.jpg"
              alt="TechExa Vision Logo"
              width={180}
              height={180}
              className="rounded-full border-2 border-[#255F38]/30 relative z-10 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Main heading with gradient text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient block">
            TechExa Vision
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Build exceptional digital experiences with{" "}
          <span className="text-[#4ade80] font-medium">cutting-edge technology</span> and{" "}
          <span className="text-[#4ade80] font-medium">premium design</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MovingBorderButton
            duration={3000}
            borderRadius={12}
            from="#255F38"
            to="#2f7a47"
            className="group"
            asChild
          >
            <a href="/contact" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MovingBorderButton>

          <motion.a
            href="/project"
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-[#255F38]/20 hover:border-[#255F38]/50 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#255F38] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
