"use client";
import { motion } from "framer-motion";
import { Code, Globe, Layers, Smartphone, Zap, Cpu } from "lucide-react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import But from "../components/But";
import TestimonialsSection from "../components/Work";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-[#B78460]" />,
    title: "Web Design",
    description: "Beautiful, responsive websites that engage users and drive conversions.",
  },
  {
    icon: <Code className="h-10 w-10 text-[#E5C0A0]" />,
    title: "Full-Stack Development",
    description: "End-to-end solutions with robust backend and intuitive frontend.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-[#B78460]" />,
    title: "Mobile Applications",
    description: "Native and cross-platform apps that deliver exceptional user experiences.",
  },
  {
    icon: <Zap className="h-10 w-10 text-[#E5C0A0]" />,
    title: "Performance Optimization",
    description: "Speed up your digital products for better user engagement and SEO.",
  },
  {
    icon: <Layers className="h-10 w-10 text-[#B78460]" />,
    title: "Marketing",
    description: "Boost your online presence with targeted marketing strategies, content creation, and SEO optimization.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-[#E5C0A0]" />,
    title: "AI Solutions",
    description: "Developing intelligent solutions with machine learning, automation, and AI agents to enhance your business capabilities.",
  },
];

export default function Services() {
  return (
    <>
      <section id="services" className="py-24 bg-[#0B0B0C] relative overflow-hidden">
        {/* Subtle copper grid */}
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        {/* Copper ambient orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[rgba(183,132,96,0.04)] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-[#FAFAFA]">Our Services</h2>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto mb-6" />
            <p className="text-[#9A8F87] max-w-2xl mx-auto text-sm sm:text-base">
              We provide comprehensive digital solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <HoverBorderGradient
                  containerClassName="h-full"
                  className="p-6 h-full bg-[#141414] border border-[#2A2420] rounded-3xl transition-all duration-300 hover:shadow-[0_16px_40px_rgba(183,132,96,0.08)]"
                  as="div"
                  from="rgba(183, 132, 96, 0.5)"
                  to="rgba(229, 192, 160, 0.2)"
                >
                  <div className="flex flex-col h-full text-center">
                    <div className="mb-4 flex justify-center items-center">
                      {service.icon}
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 text-[#FAFAFA]">
                      {service.title}
                    </h3>
                    <p className="text-[#9A8F87] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </HoverBorderGradient>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20">
            <But />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
