"use client";

import { motion } from "framer-motion";
import { ChipBadge } from "../components/ui/AiChip";

const projects = [
  {
    title: "SmartSteel SaaS",
    description: "An AI-driven SaaS for the steel fabrication industry that automates material costing and PDF estimate generation.",
    video: "/steelfabrications.mp4",
    tags: ["Next.js", "FastAPI", "Hugging Face AI"],
    link: "#",
  },
  {
    title: "Digital FTE (AI Command Center)",
    description: "An autonomous business automation dashboard featuring LinkedIn outreach automation, WhatsApp API integration, and Gmail auto-reply agents.",
    video: "/personalassistant.mp4",
    tags: ["Next.js", "Node.js", "Python", "Docker"],
    link: "#",
  },
  {
    title: "Modern E-Commerce SaaS",
    description: "A multi-language (English, Arabic, Urdu) e-commerce platform with Stripe integration, a dynamic admin dashboard, and AI blog generation.",
    video: "/ecommerce.mp4",
    tags: ["Next.js 14", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "AI Estimate Generator",
    description: "A specialized tool for generating professional project estimates and invoices with a custom PDF engine.",
    video: "/portfolio.mp4",
    tags: ["Next.js", "PDF Engine", "AI Automation"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0B0B0C" }}>
      {/* Copper grid background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      {/* Copper ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(140,90,60,0.05)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(140,90,60,0.04)" }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ border: "1px solid rgba(183,132,96,0.22)", background: "rgba(183,132,96,0.07)", color: "#B78460" }}>
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F0EB" }}>
            Our Projects
          </h2>
          <div className="h-px w-20 mx-auto mb-6" style={{ background: "linear-gradient(to right, transparent, #B78460, transparent)" }} />
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#9A8F87" }}>
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card relative h-full bg-[#141414]/80 rounded-3xl overflow-hidden border border-[#2A2420] backdrop-blur-xl transition-all duration-500 hover:border-[rgba(183,132,96,0.45)] hover:shadow-[0_20px_40px_rgba(183,132,96,0.15)]">

                {/* Video Preview */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Rose Copper Gold hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(183,132,96,0)] group-hover:bg-[rgba(183,132,96,0.08)] transition-all duration-500 z-20" />
                  
                  {/* External link icon (if link exists and is not #) */}
                  {project.link !== "#" && (
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-[rgba(11,11,12,0.7)] backdrop-blur-sm border border-[#B78460]/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#B78460]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#FAFAFA] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B78460] group-hover:to-[#E5C0A0] transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#9A8F87] text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[rgba(183,132,96,0.08)] border border-[rgba(183,132,96,0.2)] text-[#B78460] transition-all duration-300 hover:bg-[rgba(183,132,96,0.15)] hover:border-[rgba(183,132,96,0.4)] hover:text-[#FAFAFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rose Copper Gold accent line on hover */}
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#B78460] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner glow */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[rgba(183,132,96,0.15)] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0B0B0C] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B78460]/50"
            style={{
              background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
              boxShadow: "0 0 20px rgba(183,132,96,0.3)",
            }}
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
