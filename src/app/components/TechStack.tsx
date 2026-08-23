"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiThreedotjs,
  SiCloudinary,
  SiRadixui,
  SiVercel,
  SiPython,
  SiOpenai,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techStack: { name: string; Icon: IconType }[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Three.js", Icon: SiThreedotjs },
  { name: "Cloudinary", Icon: SiCloudinary },
  { name: "Radix UI", Icon: SiRadixui },
  { name: "Vercel", Icon: SiVercel },
  { name: "Python", Icon: SiPython },
  { name: "OpenAI", Icon: SiOpenai },
];

export default function TechStack() {
  return (
    <section className="relative py-24 bg-[#0B0B0C] overflow-hidden">
      {/* Subtle copper ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(183,132,96,0.04)_0%,_transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
            Our Stack
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#FAFAFA]">
            Our Tech Stack
          </h2>
          <p className="text-[#9A8F87] text-lg max-w-2xl mx-auto">
            Technologies we use to build fast, modern, and scalable products.
          </p>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto" />
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {techStack.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card group flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-8 border border-[#2A2420] hover:border-[rgba(183,132,96,0.4)] transition-colors duration-300"
            >
              <Icon className="h-10 w-10 text-[#9A8F87] group-hover:text-[#E5C0A0] group-hover:drop-shadow-[0_0_10px_rgba(183,132,96,0.5)] transition-all duration-300" />
              <span className="text-sm font-medium text-[#9A8F87] group-hover:text-[#F5F0EB] transition-colors duration-300 text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
