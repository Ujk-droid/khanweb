"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { FaInstagram, FaLinkedin, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Pre-computed floating elements for background (static to avoid hydration mismatch)
const floatingShapes = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  size: `${i === 0 ? 52 : i === 1 ? 35 : 22}px`,
  delay: `${i * 0.6}s`,
  left: `${i === 0 ? 8 : i === 1 ? 76 : 16}%`,
  top: `${i === 0 ? 95 : i === 1 ? 56 : 4}%`,
  color: i === 0 ? "rgba(59, 130, 246, 0.12)" : i === 1 ? "rgba(59, 130, 246, 0.18)" : "rgba(59, 130, 246, 0.08)",
}));

export default function Footer() {

  return (
    <footer className="relative isolate z-10 bg-gradient-to-t from-[#030712] via-[#0a0f1c] to-[#030712] border-t border-white/10 pt-12 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full blur-lg transform-gpu animate-float-slow pointer-events-none"
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

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

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
              <div className="relative">
                <Image
                  src="/logo1.jpg"
                  alt="TechExa Vision Logo"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-blue-500/50"
                  style={{
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                  }}
                />
              </div>
              <span
                className={`${roboto.className} ml-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400`}
              >
                TechExa Vision
              </span>
            </div>
            <p className={`${roboto.className} text-gray-400 mb-4 font-light`}>
              Transforming ideas into exceptional digital solutions with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576313547700"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50"
              >
                <FaFacebookF size={20} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://wa.me/923312436713"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50"
              >
                <FaWhatsapp size={20} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/uzmakhan11122"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50"
              >
                <FaInstagram size={20} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/uzma-khan-4818b42b4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50"
              >
                <FaLinkedin size={20} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className={`${roboto.className} text-lg font-semibold text-white mb-4`}>Services</h3>
            <ul className="space-y-2">
              {[
                ["Web Design", "/services"],
                ["Full-Stack Development", "/services"],
                ["Mobile Applications", "/services"],
                ["UI/UX Design", "/services"],
                ["AI Solutions", "/services"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className={`${roboto.className} group flex items-center text-gray-400 hover:text-blue-400 transition-colors font-light`}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors"></span>
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
            <h3 className={`${roboto.className} text-lg font-semibold text-white mb-4`}>Company</h3>
            <ul className="space-y-2">
              {[
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Projects", "/project"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className={`${roboto.className} group flex items-center text-gray-400 hover:text-blue-400 transition-colors font-light`}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors"></span>
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
            <h3 className={`${roboto.className} text-lg font-semibold text-white mb-4`}>Contact</h3>
            <ul className={`${roboto.className} space-y-3 text-gray-400 font-light`}>
              <li className="flex items-start">
                <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 mt-2"></span>
                <span>Garden East, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
                <FaEnvelope className="text-blue-500 mr-2" />
                03312436713aa@gmail.com
              </li>
              <li className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
                <FaPhone className="text-blue-500 mr-2" />
                0331 2436713
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${roboto.className} text-gray-500 text-sm font-light`}>
              © {new Date().getFullYear()} TechExa Vision. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className={`${roboto.className} text-gray-500 hover:text-blue-400 text-sm transition-colors font-light`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className={`${roboto.className} text-gray-500 hover:text-blue-400 text-sm transition-colors font-light`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(8px) rotate(3deg); }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>
    </footer>
  );
}
