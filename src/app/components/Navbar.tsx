"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// ── Rose Copper Gold palette constants ──────────────────────
const COPPER      = "#B78460";
const CHAMPAGNE   = "#E5C0A0";
const BG          = "#0B0B0C";
const SURFACE     = "#141414";
const BORDER      = "#2A2420";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",     href: "/" },
    { name: "Services", href: "/services" },
    { name: "About",    href: "/about" },
    { name: "Project",  href: "/project" },
    { name: "Blog",     href: "/blog" },
    { name: "Team",     href: "/team" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={{
        background: isScrolled
          ? `rgba(11, 11, 12, 0.88)`
          : "transparent",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: isScrolled
          ? `1px solid rgba(183, 132, 96, 0.10)`
          : "1px solid transparent",
        boxShadow: isScrolled
          ? "0 4px 32px rgba(0,0,0,0.5)"
          : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Copper glow behind logo */}
              <div
                className="absolute -inset-2 rounded-full blur-md transition-all duration-500"
                style={{
                  background: "rgba(183, 132, 96, 0.18)",
                }}
              />
              <Image
                src="/logo1.jpg"
                alt="TechExa Vision Logo"
                width={44}
                height={44}
                className="rounded-full relative z-10"
                style={{
                  border: `1px solid rgba(183, 132, 96, 0.30)`,
                  boxShadow: "0 0 14px rgba(183,132,96,0.25)",
                }}
              />
            </div>
            {/* Embossed copper text gradient */}
            <span
              className="text-xl font-heading font-bold tracking-tight text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${CHAMPAGNE} 0%, ${COPPER} 60%, #8A5A3C 100%)`,
              }}
            >
              TechExa Vision
            </span>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-all duration-300 group select-none rounded-md ${
                    active
                      ? "text-[#E5C0A0]"
                      : "text-[#9A8F87] hover:text-[#F5F0EB]"
                  }`}
                >
                  {link.name}

                  {/* Active: copper underline */}
                  {active && (
                    <span
                      className="absolute bottom-0 left-2 right-2 h-px rounded-full"
                      style={{ background: `linear-gradient(to right, transparent, ${COPPER}, transparent)` }}
                    />
                  )}

                  {/* Hover: animated underline */}
                  {!active && (
                    <span
                      className="absolute bottom-0 left-1/2 w-0 h-px group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
                      style={{ background: `rgba(183, 132, 96, 0.5)` }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA Button — Desktop ─────────────────────────── */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${COPPER} 0%, #8A5A3C 100%)`,
                color: "#F5F0EB",
                boxShadow: "0 0 15px rgba(183,132,96,0.22), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* ── Mobile Menu Button ───────────────────────────── */}
          <button
            className="md:hidden p-2"
            style={{ color: "#F5F0EB" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(11, 11, 12, 0.97)",
              backdropFilter: "blur(24px)",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm"
                      style={{
                        color: active ? CHAMPAGNE : "#9A8F87",
                        background: active ? "rgba(183, 132, 96, 0.08)" : "transparent",
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: COPPER }}
                        />
                      )}
                      {link.name}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  className="mt-3 mx-4 px-6 py-3 text-center rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${COPPER} 0%, #8A5A3C 100%)`,
                    color: "#F5F0EB",
                    boxShadow: "0 0 15px rgba(183,132,96,0.22)",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
