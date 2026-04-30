"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

// Pre-computed floating shapes — Copper tinted
const floatingShapes = [
  { id: 0, size: "52px", delay: "0s",    left: "8%",  top: "95%", color: "rgba(183,132,96,0.10)" },
  { id: 1, size: "35px", delay: "0.6s",  left: "76%", top: "56%", color: "rgba(183,132,96,0.14)" },
  { id: 2, size: "22px", delay: "1.2s",  left: "16%", top: "4%",  color: "rgba(183,132,96,0.07)" },
];

export default function Footer() {
  return (
    <footer className="relative isolate z-10 bg-[#0B0B0C] border-t border-[#2A2420] pt-12 pb-8 overflow-hidden">

      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full blur-lg transform-gpu animate-float-slow"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.left,
              top: shape.top,
              background: shape.color,
              animationDelay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle Rose Copper Gold glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(183,132,96,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/logo1.jpg"
                alt="TechExa Vision Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#B78460]/50"
                style={{ boxShadow: "0 0 15px rgba(183,132,96,0.3)" }}
              />
              <span className="ml-3 text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAFA] to-[#B78460]">
                TechExa Vision
              </span>
            </div>
            <p className="text-[#9A8F87] mb-5 text-sm leading-relaxed">
              Transforming ideas into exceptional digital solutions with cutting-edge technology.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {[
                { href: "https://www.facebook.com/profile.php?id=61576313547700", icon: <FaFacebookF size={16} /> },
                { href: "https://wa.me/923312436713",                              icon: <FaWhatsapp  size={16} /> },
                { href: "https://www.instagram.com/uzmakhan11122",                 icon: <FaInstagram size={16} /> },
                { href: "https://www.linkedin.com/in/uzma-khan-4818b42b4",         icon: <FaLinkedin  size={16} /> },
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full border border-[#2A2420] hover:border-[#B78460]/50 hover:bg-[rgba(183,132,96,0.1)] transition-all duration-300"
                >
                  <span className="text-[#B78460] group-hover:text-[#E5C0A0] transition-colors">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="font-heading text-base font-semibold text-[#FAFAFA] mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Design",
                "Full-Stack Development",
                "Mobile Applications",
                "UI/UX Design",
                "AI Solutions",
              ].map((label) => (
                <li key={label}>
                  <Link
                    href="/services"
                    className="group flex items-center text-sm text-[#9A8F87] hover:text-[#B78460] transition-colors duration-300"
                  >
                    <span className="w-1 h-1 bg-[#B78460] rounded-full mr-2 group-hover:bg-[#E5C0A0] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="font-heading text-base font-semibold text-[#FAFAFA] mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                ["About Us",  "/about"],
                ["Services",  "/services"],
                ["Projects",  "/project"],
                ["Blog",      "/blog"],
                ["Contact",   "/contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="group flex items-center text-sm text-[#9A8F87] hover:text-[#B78460] transition-colors duration-300"
                  >
                    <span className="w-1 h-1 bg-[#B78460] rounded-full mr-2 group-hover:bg-[#E5C0A0] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-heading text-base font-semibold text-[#FAFAFA] mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-[#9A8F87]">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#B78460] rounded-full mt-2 shrink-0" />
                <span>Garden East, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2 hover:text-[#B78460] transition-colors cursor-pointer">
                <FaEnvelope className="text-[#B78460] shrink-0" />
                03312436713aa@gmail.com
              </li>
              <li className="flex items-center gap-2 hover:text-[#B78460] transition-colors cursor-pointer">
                <FaPhone className="text-[#B78460] shrink-0" />
                0331 2436713
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2420] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9A8F87] text-sm">
              © {new Date().getFullYear()} TechExa Vision. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-[#9A8F87] hover:text-[#B78460] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#9A8F87] hover:text-[#B78460] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
