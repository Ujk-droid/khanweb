"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../components/ui/sparkles";
import Friends from "../components/Friends";
import List from "../components/List";
import AboutHero from "../components/AboutHero";

const aboutCards = [
  { title: "Our Mission",  text: "Empowering businesses with innovative digital solutions." },
  { title: "Our Vision",   text: "Leading digital transformation with excellence." },
  { title: "Our Values",   text: "Innovation, integrity, and collaboration." },
  { title: "Our Approach", text: "User-centered, data-driven solutions." },
];

export default function About() {
  return (
    <>
      <AboutHero />

      {/* About section with Rose Copper Gold sparkles */}
      <section id="about" className="py-20 bg-[#0B0B0C] relative overflow-hidden">
        {/* Rose Copper Gold sparkles */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.5}
            maxSize={1.2}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#B78460"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-12 text-center md:text-left md:flex-row">

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#FAFAFA]">
                About TechExa Vision
              </h2>
              {/* Rose Copper Gold divider */}
              <div className="h-px w-20 bg-gradient-to-r from-[#B78460] to-[#E5C0A0] mb-6 mx-auto md:mx-0" />
              <p className="text-[#9A8F87] mb-4 leading-relaxed">
                TechExa Vision is a forward-thinking software house pushing the boundaries of digital innovation.
              </p>
              <p className="text-[#9A8F87] leading-relaxed">
                We combine technical expertise with creative thinking to deliver solutions that drive business success.
              </p>
            </motion.div>

            {/* Cards Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {aboutCards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="glass-card bg-[#141414] p-5 rounded-3xl border border-[#2A2420] hover:border-[rgba(183,132,96,0.35)] transition-all duration-300 group"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  {/* Rose Copper Gold accent line */}
                  <div className="h-0.5 w-8 bg-gradient-to-r from-[#B78460] to-[#E5C0A0] mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-heading text-lg font-bold mb-2 text-[#FAFAFA]">{item.title}</h3>
                  <p className="text-[#9A8F87] text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <List />
      <Friends />
    </>
  );
}
