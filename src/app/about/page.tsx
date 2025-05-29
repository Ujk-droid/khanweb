"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../components/ui/sparkles";

import Friends from "../components/Friends";
import List from "../components/List";
import AboutHero from "../components/AboutHero";
// import { List } from "lucide-react";
// import { SparklesCore } from "./ui/sparkles";

export default function About() {
  return (
    <>
    <AboutHero />
  
    <section id="about" className="py-16 bg-black relative overflow-hidden font-serif">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#ff0000"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12 text-center md:text-left md:flex-row">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About TechExa Vision</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#73f3f3] to-[#006A71] mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-300 mb-4">
              TechExa Vision is a forward-thinking software house pushing the boundaries of digital innovation.
            </p>
            <p className="text-gray-300">
              We combine technical expertise with creative thinking to deliver solutions that drive business success.
            </p>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Our Mission", text: "Empowering businesses with innovative digital solutions." },
              { title: "Our Vision", text: "Leading digital transformation with excellence." },
              { title: "Our Values", text: "Innovation, integrity, and collaboration." },
              { title: "Our Approach", text: "User-centered, data-driven solutions." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-600 to-transparent p-5 rounded-lg shadow-md"
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <List/>
    <Friends/>
    </>
  );
}
