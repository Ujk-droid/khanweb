"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0C] pt-24 pb-16">
      {/* Rose Copper Gold sparkles background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#B78460"
        />
      </div>

      {/* Rose Copper Gold gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(183,132,96,0.08)_0%,_transparent_70%)] z-10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-20">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-6">
            About Us
          </span>

          <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B78460] via-[#E5C0A0] to-[#FAFAFA]">
              Innovating Tomorrow
            </span>
            <br />
            <span className="text-[#FAFAFA]">Technology Today</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9A8F87] mb-8 max-w-2xl mx-auto leading-relaxed">
            At TechExa Vision, we transform ideas into cutting-edge digital solutions. Join us in shaping the future
            of technology with innovation, creativity, and excellence.
          </p>

          {/* Rose Copper Gold divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
