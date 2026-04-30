"use client";

import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-techexa-bg">
      <div className="relative flex flex-col items-center">
        {/* Central AI Chip SVG */}
        <div className="relative h-40 w-40 md:h-48 md:w-48">
          {/* Outer Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-techexa-copper/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Corner Accents */}
            <path d="M 10 25 L 10 10 L 25 10" stroke="#B78460" strokeWidth="1" opacity="0.4" />
            <path d="M 75 10 L 90 10 L 90 25" stroke="#B78460" strokeWidth="1" opacity="0.4" />
            <path d="M 90 75 L 90 90 L 75 90" stroke="#B78460" strokeWidth="1" opacity="0.4" />
            <path d="M 25 90 L 10 90 L 10 75" stroke="#B78460" strokeWidth="1" opacity="0.4" />

            {/* Chip Body */}
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              rx="4"
              stroke="#B78460"
              strokeWidth="2"
              className="drop-shadow-[0_0_12px_rgba(183,132,96,0.5)]"
            />
            
            {/* Inner Details */}
            <rect
              x="30"
              y="30"
              width="40"
              height="40"
              rx="2"
              stroke="#B78460"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Scanning Line */}
            <motion.line
              x1="22"
              x2="78"
              stroke="#B78460"
              strokeWidth="1"
              opacity="0.5"
              animate={{
                y: [22, 78, 22],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Pins - Top */}
            {[30, 40, 50, 60, 70].map((x) => (
              <line key={`t-${x}`} x1={x} y1="12" x2={x} y2="20" stroke="#B78460" strokeWidth="2" strokeLinecap="round" />
            ))}

            {/* Pins - Bottom */}
            {[30, 40, 50, 60, 70].map((x) => (
              <line key={`b-${x}`} x1={x} y1="80" x2={x} y2="88" stroke="#B78460" strokeWidth="2" strokeLinecap="round" />
            ))}

            {/* Pins - Left */}
            {[30, 40, 50, 60, 70].map((y) => (
              <line key={`l-${y}`} x1="12" y1={y} x2="20" y2={y} stroke="#B78460" strokeWidth="2" strokeLinecap="round" />
            ))}

            {/* Pins - Right */}
            {[30, 40, 50, 60, 70].map((y) => (
              <line key={`r-${y}`} x1="80" y1={y} x2="88" y2={y} stroke="#B78460" strokeWidth="2" strokeLinecap="round" />
            ))}

            {/* Central Core Pulse */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="#B78460"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 0.9, 0.4],
                filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Circuit Traces */}
            <path
              d="M 50 20 L 50 30 M 50 70 L 50 80 M 20 50 L 30 50 M 70 50 L 80 50"
              stroke="#B78460"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.8"
            />
            
            {/* Diagonal Traces */}
            <path d="M 30 30 L 22 22 M 70 30 L 78 22 M 30 70 L 22 78 M 70 70 L 78 78" stroke="#B78460" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <span className="text-techexa-copper font-heading text-sm md:text-base tracking-[0.4em] uppercase font-medium">
            TechExa Vision
          </span>
          <div className="mt-3 flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-techexa-copper"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
