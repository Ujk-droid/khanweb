"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleDensity?: number;
  // Add these new properties
  particleColor?: string | string[]; // Can be a single color string or an array of color strings
  particleOpacity?: number; // Should be a number for global opacity
};

export const SparklesCore: React.FC<ParticlesProps> = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleDensity,
    particleColor, // Destructure the new props
    particleOpacity, // Destructure the new props
  } = props;

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: unknown) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "#0d47a1" },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                resize: { enable: true },
              },
              modes: {
                push: { quantity: 4 },
              },
            },
            particles: {
              color: {
                // Use particleColor if provided, otherwise default to your array
                value: particleColor || ["#1A3636", "#73f3f3", "#2A4759"],
              },
              move: {
                enable: true,
                speed: speed || 1.5,
                direction: "none",
              },
              number: {
                value: particleDensity || 300,
                density: { enable: true },
              },
              opacity: {
                // Use particleOpacity if provided, otherwise default to your object
                value: particleOpacity !== undefined ? { min: 0.1, max: particleOpacity } : { min: 0.1, max: 1 },
                animation: { enable: true },
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
              },
              shape: {
                type: "circle",
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};