"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  // Quick progress bar animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 20;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030712] z-[999] overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
        {/* Logo with glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl" />
          <Image
            src="/logo1.jpg"
            alt="TechExa Vision Logo"
            width={80}
            height={80}
            className="rounded-full border-2 border-blue-400/50 relative z-10"
          />
        </motion.div>

        {/* Progress bar */}
        <div className="w-48">
          <div className="relative h-0.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
