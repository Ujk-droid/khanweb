'use client';
import React from 'react';
import { SparklesCore } from '../components/ui/sparkles'; // Adjust path as needed

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Sparkles background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#00FFFF"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-black to-purple-900/20 z-10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#57B4BA] via-[#015551] to-cyan-400 bg-clip-text text-transparent">
              Innovating Tomorrow
            </span>
            <br />
            <span className="text-white">Technology Today</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            At TechExa Vision, we transform ideas into cutting-edge digital solutions. Join us in shaping the future
            of technology with innovation, creativity, and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
