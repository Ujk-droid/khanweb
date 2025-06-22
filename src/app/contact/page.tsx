"use client"

import type React from "react"
import { Dancing_Script, Roboto, Roboto_Mono } from "next/font/google"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { CssGlobe } from "../components/ui/CssGlobe"
import { Textarea } from "../components/ui/textarea"
// import { CssGlobe } from "./components/css-globe"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  // Memoized floating elements matching the loading theme
  const floatingShapes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: `${Math.random() * 40 + 20}px`,
        delay: `${i * 0.3}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: `rgba(0, 106, 113, ${Math.random() * 0.15 + 0.05})`,
      })),
    [],
  )

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: `${Math.random() * 3 + 1}px`,
        delay: `${i * 0.2}s`,
        duration: `${Math.random() * 4 + 3}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    [],
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon!",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full blur-md transform-gpu animate-float-slow pointer-events-none"
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#006A71]/5 via-[#01949f]/5 to-[#73f3f3]/5 pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#73f3f3] transform-gpu animate-particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              opacity: 0,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              boxShadow: "0 0 8px rgba(115, 243, 243, 0.6)",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header Section with Globe */}
        <div className="text-center mb-16">
          {/* Globe */}
          <div className="flex justify-center mb-8">
            <CssGlobe size={200} className="animate-float" />
          </div>

          <h1
            className={`${dancingScript.className} text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#006A71] via-[#01949f] to-[#73f3f3] mb-6`}
            style={{
              textShadow: "0 0 20px rgba(115, 243, 243, 0.5)",
              transform: "perspective(500px) rotateX(5deg)",
            }}
          >
            Contact Us
          </h1>
          <p
            className={`${roboto.className} text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light`}
          >
            {"Ready to create your digital home? Get in touch with us and let's bring your vision to life."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-[#006A71]/30 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h2 className={`${roboto.className} text-2xl font-semibold text-[#73f3f3] mb-6 flex items-center gap-2`}>
                <Send className="w-6 h-6" />
                Send us a Message
              </h2>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-900/30 border border-green-500/30 text-green-300"
                      : "bg-red-900/30 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className={`${roboto.className} text-sm`}>{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`${robotoMono.className} block text-sm font-medium text-gray-300 mb-2`}
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${roboto.className} bg-gray-700/50 border-[#006A71]/50 text-white placeholder-gray-400 focus:border-[#73f3f3] focus:ring-[#73f3f3]/20`}
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`${robotoMono.className} block text-sm font-medium text-gray-300 mb-2`}
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${roboto.className} bg-gray-700/50 border-[#006A71]/50 text-white placeholder-gray-400 focus:border-[#73f3f3] focus:ring-[#73f3f3]/20`}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`${robotoMono.className} block text-sm font-medium text-gray-300 mb-2`}
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`${roboto.className} bg-gray-700/50 border-[#006A71]/50 text-white placeholder-gray-400 focus:border-[#73f3f3] focus:ring-[#73f3f3]/20`}
                    placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`${robotoMono.className} block text-sm font-medium text-gray-300 mb-2`}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`${roboto.className} bg-gray-700/50 border-[#006A71]/50 text-white placeholder-gray-400 focus:border-[#73f3f3] focus:ring-[#73f3f3]/20 resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${roboto.className} w-full bg-gradient-to-r from-[#006A71] to-[#01949f] hover:from-[#01949f] hover:to-[#73f3f3] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#73f3f3]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                  style={{
                    boxShadow: "0 4px 15px rgba(1, 148, 159, 0.3)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-[#006A71]/30 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <h2 className={`${roboto.className} text-2xl font-semibold text-[#73f3f3] mb-6`}>Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-gradient-to-r from-[#006A71] to-[#01949f] rounded-lg group-hover:shadow-lg group-hover:shadow-[#73f3f3]/25 transition-all duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`${roboto.className} text-lg font-medium text-white mb-1`}>Email</h3>
                      <p className={`${roboto.className} text-gray-300`}>03312436713aa@gmail.com</p>
                      <p className={`${roboto.className} text-gray-400 text-sm`}>We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-gradient-to-r from-[#006A71] to-[#01949f] rounded-lg group-hover:shadow-lg group-hover:shadow-[#73f3f3]/25 transition-all duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`${roboto.className} text-lg font-medium text-white mb-1`}>Phone</h3>
                      <p className={`${roboto.className} text-gray-300`}>0331 2436713</p>
                      <p className={`${roboto.className} text-gray-400 text-sm`}>Mon-Fri, 9AM-6PM PKT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-gradient-to-r from-[#006A71] to-[#01949f] rounded-lg group-hover:shadow-lg group-hover:shadow-[#73f3f3]/25 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`${roboto.className} text-lg font-medium text-white mb-1`}>Office</h3>
                      <p className={`${roboto.className} text-gray-300`}>Garden East</p>
                      <p className={`${roboto.className} text-gray-300`}>Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Global styles matching the loading theme */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes particle {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-100px) translateX(20px) scale(1.2); opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
