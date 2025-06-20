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

export default function Footer() {
  return (
    <footer className="relative isolate z-10 bg-black border-t border-gray-800 pt-12 pb-8 font-serif">
      <div className="container mx-auto px-4">
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
              />
              <span className="ml-3 text-xl font-bold text-white">
                TechExa Vision
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ideas into exceptional digital solutions with
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576313547700"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-blue-600/20"
              >
                <FaFacebookF
                  size={20}
                  className="text-blue-500 group-hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://wa.me/923312436713"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-green-600/20"
              >
                <FaWhatsapp
                  size={20}
                  className="text-green-500 group-hover:text-green-400 transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/uzmakhan11122"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-pink-600/20"
              >
                <FaInstagram
                  size={20}
                  className="text-pink-500 group-hover:text-pink-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/uzma-khan-4818b42b4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-blue-600/20"
              >
                <FaLinkedin
                  size={20}
                  className="text-blue-500 group-hover:text-blue-400 transition-colors"
                />
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
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                ["Web Design", "/services/web-design"],
                ["Full-Stack Development", "/services/full-stack"],
                ["Mobile Applications", "/services/mobile-apps"],
                ["UI/UX Design", "/services/ui-ux"],
                ["E-Commerce Solutions", "/services/ecommerce"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
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
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                ["About Us", "/about"],
                ["Our services", "/services"],
                ["project", "/project"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
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
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>{" "}
                Garden East
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>{" "}
                Karachi
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>{" "}
                Pakistan
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-2" />
                03312436713aa@gmail.com
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-400 mr-2" />
                0331 2436713
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TechExa Vision. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Terms of Service
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
