"use client";
import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  "Custom Web & Mobile App Development",
  "Modern UI/UX Design",
  "Full-Stack Solutions with Scalable Architecture",
  "E-Commerce Platform Development",
  "Enterprise Software & Admin Dashboards",
  "Reliable Support & Maintenance Services",
];

const List = () => {
  return (
    <section className="bg-[#0B0B0C] text-[#A1A1AA] relative overflow-hidden">
      {/* Subtle Rose Copper Gold dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 container px-5 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading sm:text-3xl text-2xl font-bold text-[#FAFAFA] mb-4">
            TechExa Vision — Crafting Digital Excellence
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto mb-6" />
          <p className="text-[#9A8F87] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A cutting-edge software house committed to transforming ideas into powerful digital solutions. From web design to full-stack development and mobile applications, we deliver tailored software that empowers businesses to grow.
          </p>
        </motion.div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-[#141414] backdrop-blur-sm rounded-2xl flex p-4 h-full items-center border border-[#2A2420] hover:border-[rgba(183,132,96,0.35)] transition-all duration-300 group">
                {/* Rose Copper Gold bullet */}
                <span className="w-2 h-2 rounded-full bg-[#B78460] mr-3 shrink-0 group-hover:bg-[#E5C0A0] transition-colors" />
                <span className="font-medium text-[#9A8F87] group-hover:text-[#FAFAFA] transition-colors text-sm">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
