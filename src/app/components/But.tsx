"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+",  label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const But = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-[#2A2420] px-4 md:px-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B78460] to-[#E5C0A0] mb-2">
            {stat.value}
          </div>
          <div className="text-[#9A8F87] text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default But;
