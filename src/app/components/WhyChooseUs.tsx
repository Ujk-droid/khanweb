"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Award, Clock, HeartHandshake } from "lucide-react";
import { ChipBadge } from "./ui/AiChip";
import { TiltWrapper } from "@/components/TiltWrapper";

const reasons = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Premium Quality",
    description: "Every project is crafted with meticulous attention to detail, delivering pixel-perfect results that exceed expectations.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Delivery",
    description: "We move quickly without cutting corners. Agile workflows ensure your product ships on time, every time.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure by Default",
    description: "Security is baked into every layer — from architecture decisions to code reviews and deployment pipelines.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Team",
    description: "Our diverse team of engineers, designers, and strategists brings deep expertise across every discipline.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Support",
    description: "We're always available. Round-the-clock support ensures your digital products stay running smoothly.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Client-First Approach",
    description: "Your success is our success. We build long-term partnerships, not just one-off projects.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#0B0B0C" }}
    >
      {/* Copper ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(140,90,60,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              border: "1px solid rgba(183, 132, 96, 0.22)",
              background: "rgba(183, 132, 96, 0.07)",
              color: "#B78460",
            }}
          >
            Why TechExa Vision
          </span>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text mb-4"
            style={{ backgroundImage: "linear-gradient(to bottom, #E5C0A0 0%, #B78460 60%, #8A5A3C 100%)" }}
          >
            Why Choose Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9A8F87" }}>
            We combine technical excellence with a client-first mindset to deliver digital solutions that truly make a difference.
          </p>
          {/* Circuit divider */}
          <div className="mt-6 flex justify-center">
            <div className="relative h-px w-48" style={{ background: "linear-gradient(to right, transparent, #B78460, transparent)" }}>
              <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full" style={{ background: "#B78460", boxShadow: "0 0 6px rgba(183,132,96,0.6)" }} />
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl p-6 transition-all duration-400"
              style={{
                background: "rgba(20, 20, 20, 0.70)",
                border: "1px solid rgba(42, 36, 32, 0.9)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(183, 132, 96, 0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(42, 36, 32, 0.9)";
              }}
            >
              {/* Copper hover overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(183,132,96,0.04) 0%, transparent 60%)" }}
              />

              {/* ── Chip badge — top-right ─────────────────── */}
              <div
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ filter: "drop-shadow(0 0 4px rgba(183,132,96,0.5))" }}
              >
                <ChipBadge className="w-7 h-7" />
              </div>

              <div className="relative z-10">
                {/* Copper icon with 3D Tilt effect */}
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
                      boxShadow: "0 0 14px rgba(183,132,96,0.20), 0 2px 6px rgba(0,0,0,0.4)",
                      transform: "translateZ(50px)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <span style={{ color: "#F5F0EB", transform: "translateZ(20px)" }}>{reason.icon}</span>
                  </div>
                </TiltWrapper>

                <h3 className="font-heading text-lg font-bold mb-2" style={{ color: "#F5F0EB" }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9A8F87" }}>
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
