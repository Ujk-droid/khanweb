"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Friends = () => {
  return (
    <section className="bg-[#0B0B0C] text-[#FAFAFA] border-t border-[#2A2420] relative overflow-hidden">
      {/* Subtle Rose Copper Gold ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(183,132,96,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B78460] to-[#E5C0A0]">
              Understand User Flow.
            </span>
            <span className="block text-[#FAFAFA] mt-2">Increase Conversion.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-[#9A8F87] leading-relaxed">
            TechExa Vision transforms ideas into exceptional digital solutions through cutting-edge web design and full-stack development.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-3 rounded-xl font-semibold text-[#0B0B0C] transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
                boxShadow: "0 0 20px rgba(183,132,96,0.3)",
              }}
            >
              Get Started
            </a>

            <Link
              href="/about"
              className="inline-flex items-center px-10 py-3 rounded-xl border border-[#B78460]/40 text-[#B78460] font-semibold hover:bg-[rgba(183,132,96,0.08)] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Friends;
