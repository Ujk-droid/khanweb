"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight.tsx";
import { BentoGrid, BentoCardHeader, BentoCardTitle, BentoCardDescription, BentoCardContent } from "./ui/bento-grid.tsx";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Zap, 
  Cpu,
  ArrowRight,
  Palette,
  Database,
  Shield,
  Cloud,
  Terminal
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-[#4ade80]" />,
    title: "Web Design",
    description: "Beautiful, responsive websites that engage users and drive conversions with modern design principles.",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    icon: <Code className="w-8 h-8 text-[#4ade80]" />,
    title: "Full-Stack Development",
    description: "End-to-end solutions with robust backend and intuitive frontend using cutting-edge technologies.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#4ade80]" />,
    title: "Mobile Applications",
    description: "Native and cross-platform apps that deliver exceptional user experiences on iOS and Android.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Palette className="w-8 h-8 text-[#4ade80]" />,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for optimal user engagement.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Zap className="w-8 h-8 text-[#4ade80]" />,
    title: "Performance Optimization",
    description: "Speed up your digital products for better user engagement, SEO rankings, and conversion rates.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#4ade80]" />,
    title: "AI Solutions",
    description: "Intelligent solutions with machine learning, automation, and AI agents to enhance business capabilities.",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    icon: <Database className="w-8 h-8 text-[#4ade80]" />,
    title: "Database Architecture",
    description: "Scalable and secure database solutions designed for high performance and data integrity.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#4ade80]" />,
    title: "Cloud Services",
    description: "Cloud-native solutions for deployment, scaling, and management on AWS, Azure, or GCP.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: <Shield className="w-8 h-8 text-[#4ade80]" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security implementations and compliance with industry standards.",
    colSpan: 1,
    rowSpan: 1,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#255F38]/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#255F38]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#255F38]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#255F38]/30 bg-[#255F38]/10 backdrop-blur-sm mb-6">
            <Terminal className="w-4 h-4 text-[#4ade80]" />
            <span className="text-sm text-gray-300">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#4ade80]">
              What We Offer
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs, 
            delivered with precision and expertise.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SpotlightCard>
                <BentoCardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-[#255F38]/20 border border-[#255F38]/30">
                      {service.icon}
                    </div>
                  </div>
                  <BentoCardTitle>{service.title}</BentoCardTitle>
                </BentoCardHeader>
                <BentoCardDescription>
                  {service.description}
                </BentoCardDescription>
                <BentoCardContent>
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#4ade80] text-sm font-medium mt-4 group"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </BentoCardContent>
              </SpotlightCard>
            </motion.div>
          ))}
        </BentoGrid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl border border-[#255F38]/20 bg-[#255F38]/5 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Need a custom solution?
              </h3>
              <p className="text-gray-400">
                Let&apos;s discuss how we can help bring your vision to life.
              </p>
            </div>
            <motion.a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#255F38] to-[#2f7a47] text-white font-medium hover:shadow-[0_0_30px_rgba(37,95,56,0.4)] transition-shadow whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
