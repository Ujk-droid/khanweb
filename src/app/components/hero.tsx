"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

export default function Hero() {
  const words = [
    { text: "Building" },
    { text: "digital" },
    { text: "experiences" },
    { text: "that" },
    {
      text: "matter.",
      className: "text-red-500 dark:text-[#BB3E00]",
    },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/logo1.jpg"
            alt="TechExa Vision Logo"
            width={200}
            height={200}
            className="mx-auto transition-transform ease-in-out duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#73f3f3] to-[#1A3636]">
            TechExa Vision
          </span>
        </motion.h1>

        <div className="mb-8 flex justify-center">
          <TypewriterEffect words={words} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          We transform ideas into exceptional digital solutions with cutting-edge web design and full-stack development.
        </motion.p>
      </div>
    </section>
  );
}
