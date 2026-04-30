"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Textarea } from "../components/ui/textarea";
import WorldMap from "../components/ui/WorldMap";
import { motion } from "framer-motion";
import { useToast } from "../components/ui/custom-toast";

// ── Rose Copper Gold palette ─────────────────────────────────
const COPPER    = "#B78460";
const CHAMPAGNE = "#E5C0A0";
const BG        = "#0B0B0C";
const SURFACE   = "#141414";
const BORDER    = "#2A2420";
const TEXT      = "#F5F0EB";
const MUTED     = "#9A8F87";

// Static floating shapes — copper tinted
const floatingShapes = [
  { id: 0, size: "52px", delay: "0s",   left: "8%",  top: "15%", color: "rgba(183,132,96,0.07)" },
  { id: 1, size: "38px", delay: "0.5s", left: "85%", top: "25%", color: "rgba(183,132,96,0.05)" },
  { id: 2, size: "28px", delay: "1.0s", left: "20%", top: "70%", color: "rgba(183,132,96,0.08)" },
  { id: 3, size: "44px", delay: "1.5s", left: "70%", top: "60%", color: "rgba(183,132,96,0.06)" },
  { id: 4, size: "22px", delay: "2.0s", left: "45%", top: "85%", color: "rgba(183,132,96,0.07)" },
];

export default function ContactUs() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Thank you! Your message has been sent. We'll get back to you soon!" });
        showToast({ message: "Message sent successfully!", type: "success", duration: 5000 });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: data.error || "Failed to send. Please try again." });
      }
    } catch {
      setSubmitStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: BG }}>

      {/* Floating copper shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full blur-xl transform-gpu animate-float-slow"
            style={{ width: s.size, height: s.size, left: s.left, top: s.top, background: s.color, animationDelay: s.delay }}
          />
        ))}
      </div>

      {/* Copper radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(140,90,60,0.06) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-24">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{
              border: `1px solid rgba(183, 132, 96, 0.22)`,
              background: "rgba(183, 132, 96, 0.07)",
              color: COPPER,
            }}
          >
            Get In Touch
          </span>

          <h1
            className="font-heading font-bold text-transparent bg-clip-text mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              backgroundImage: `linear-gradient(to bottom, ${CHAMPAGNE} 0%, ${COPPER} 55%, #8A5A3C 100%)`,
            }}
          >
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: MUTED }}>
            Ready to build something exceptional? Get in touch and let&apos;s bring your vision to life.
          </p>
        </motion.div>

        {/* ── World Map ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-14 max-w-4xl mx-auto"
        >
          <WorldMap />
        </motion.div>

        {/* ── Form + Info Grid ───────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Card
              className="rounded-3xl"
              style={{
                background: "rgba(20, 20, 20, 0.70)",
                border: `1px solid rgba(183, 132, 96, 0.14)`,
                backdropFilter: "blur(24px)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <CardContent className="p-8">
                <h2
                  className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2"
                  style={{ color: COPPER }}
                >
                  <Send className="w-5 h-5" />
                  Send us a Message
                </h2>

                {/* Status */}
                {submitStatus.type && (
                  <div
                    className="mb-6 p-4 rounded-2xl flex items-center gap-3"
                    style={{
                      background: submitStatus.type === "success"
                        ? "rgba(183, 132, 96, 0.08)"
                        : "rgba(180, 60, 60, 0.10)",
                      border: `1px solid ${submitStatus.type === "success" ? "rgba(183,132,96,0.28)" : "rgba(180,60,60,0.28)"}`,
                      color: submitStatus.type === "success" ? CHAMPAGNE : "#f87171",
                    }}
                  >
                    {submitStatus.type === "success"
                      ? <CheckCircle className="w-5 h-5 shrink-0" />
                      : <AlertCircle className="w-5 h-5 shrink-0" />}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: "name",  label: "Full Name",      type: "text",  placeholder: "Your full name" },
                      { id: "email", label: "Email Address",  type: "email", placeholder: "your@email.com" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-sm font-medium mb-2" style={{ color: MUTED }}>
                          {label}
                        </label>
                        <Input
                          id={id} name={id} type={type}
                          value={formData[id as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={placeholder}
                          required disabled={isSubmitting}
                          className="rounded-xl"
                          style={{
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            color: TEXT,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: MUTED }}>
                      Subject
                    </label>
                    <Input
                      id="subject" name="subject" type="text"
                      value={formData.subject} onChange={handleInputChange}
                      placeholder="What's this about?" required disabled={isSubmitting}
                      className="rounded-xl"
                      style={{ background: BG, border: `1px solid ${BORDER}`, color: TEXT }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: MUTED }}>
                      Message
                    </label>
                    <Textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleInputChange}
                      rows={6} required disabled={isSubmitting}
                      placeholder="Tell us about your project..."
                      className="rounded-xl resize-none"
                      style={{ background: BG, border: `1px solid ${BORDER}`, color: TEXT }}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full font-semibold py-3 transition-all duration-300 hover:scale-105 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{
                      background: `linear-gradient(135deg, ${COPPER} 0%, #8A5A3C 100%)`,
                      color: TEXT,
                      boxShadow: "0 0 15px rgba(183,132,96,0.22), 0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: `${TEXT} transparent transparent transparent` }} />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-6"
          >
            {/* Info card */}
            <Card
              className="rounded-3xl flex-1"
              style={{
                background: "rgba(20, 20, 20, 0.70)",
                border: `1px solid rgba(183, 132, 96, 0.14)`,
                backdropFilter: "blur(24px)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-semibold mb-6" style={{ color: COPPER }}>
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-5 h-5" />,   title: "Email",  line1: "03312436713aa@gmail.com", line2: "We'll respond within 24 hours" },
                    { icon: <Phone className="w-5 h-5" />,  title: "Phone",  line1: "0331 2436713",            line2: "Mon–Fri, 9AM–6PM PKT" },
                    { icon: <MapPin className="w-5 h-5" />, title: "Office", line1: "Garden East",             line2: "Karachi, Pakistan" },
                  ].map(({ icon, title, line1, line2 }) => (
                    <div key={title} className="flex items-start gap-4 group">
                      <div
                        className="p-3 rounded-xl shrink-0 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${COPPER} 0%, #8A5A3C 100%)`,
                          color: TEXT,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold mb-0.5" style={{ color: TEXT }}>
                          {title}
                        </h3>
                        <p className="text-sm" style={{ color: MUTED }}>{line1}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(154,143,135,0.6)" }}>{line2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card
              className="rounded-3xl"
              style={{
                background: "rgba(183, 132, 96, 0.05)",
                border: `1px solid rgba(183, 132, 96, 0.14)`,
              }}
            >
              <CardContent className="p-6 text-center">
                <p className="text-sm mb-4" style={{ color: MUTED }}>
                  Prefer a quick chat? Reach us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/923312436713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, ${COPPER} 0%, #8A5A3C 100%)`,
                    color: TEXT,
                    boxShadow: "0 0 15px rgba(183,132,96,0.20)",
                  }}
                >
                  Chat on WhatsApp
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
