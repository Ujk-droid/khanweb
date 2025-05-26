
"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import type React from "react"
import { useRef, useState, useEffect } from "react"
import { CssGlobe } from "@/app/components/ui/CssGlobe"
// import { Input } from "./ui/input"
// import { Textarea } from "./ui/textarea"
// import { Button } from "./ui/button"

import { Mail, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
// import { BackgroundGradient } from "./ui/background-gradient"
// import { SparklesCore } from "./ui/sparkles"
// import { TextRevealCard } from "./ui/text-reveal-card"
import Swal from "sweetalert2"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import { SparklesCore } from "../components/ui/sparkles"
import { TextRevealCard } from "../components/ui/text-reveal-card"
import { BackgroundGradient } from "../components/ui/background-gradient"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const [globeSize, setGlobeSize] = useState(400)
  const [isMobile, setIsMobile] = useState(false)

  // Add resize listener to adjust globe size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGlobeSize(280)
        setIsMobile(true)
      } else if (window.innerWidth < 768) {
        setGlobeSize(320)
        setIsMobile(false)
      } else {
        setGlobeSize(400)
        setIsMobile(false)
      }
    }

    // Set initial size
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill out all fields before submitting.",
        icon: "warning",
        confirmButtonColor: "#3B82F6",
        background: "#0f172a",
        color: "#ffffff",
      })
      return
    }

    // Show loading state
    Swal.fire({
      title: "Sending your message...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      background: "#0f172a",
    })

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9bda5b9c-29c1-402e-b099-2de22660da48",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully. We will contact you soon!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3B82F6",
          background: "#0f172a",
          color: "#ffffff",
          iconColor: "#6EE7B7",
        }).then(() => {
          setFormData({ name: "", email: "", message: "" })
        })
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was a problem sending your message. Please try again later or contact us directly at 03312436713aa@gmail.com",
        icon: "error",
        confirmButtonColor: "#3B82F6",
        background: "#0f172a",
        color: "#ffffff",
      })
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-black relative overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
          particleOpacity={0.8}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#547792] to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-[#547792] to-transparent z-0"></div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-500 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div style={{ opacity, y }} className="text-center mb-16 relative">
          {/* Main section sparkles */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <SparklesCore
              id="heading-sparkles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#3B82F6"
              particleOpacity={0.8}
            />
          </div>

          {/* TextRevealCard with its own sparkles */}
          <div className="relative mx-auto max-w-3xl">
            {/* Dedicated sparkles for TextRevealCard */}
            <div className="absolute inset-0 w-full h-full z-0">
              <SparklesCore
                id="text-reveal-sparkles"
                background="transparent"
                minSize={0.8}
                maxSize={1.8}
                particleDensity={120}
                className="w-full h-full"
                particleColor="#FF5555"
                particleOpacity={0.9}
              />
            </div>

            <TextRevealCard text="Get In Touch" revealText="Let's Work Together" className="mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#73f3f3] to-[#]">
                Get In Touch
              </h2>
            </TextRevealCard>
          </div>

          <div className="h-1 w-20 bg-gradient-to-r from-[#73f3f3] to-[#1A3636] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Contact us today to discuss your project and discover how TechExa
            Vision can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BackgroundGradient className="rounded-[22px] p-0.5 bg-black">
              <div className="bg-black/90 backdrop-blur-xl p-10 rounded-[20px] border border-gray-800 h-full">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#73f3f3] to-[#1A3636]">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-red-500 transition-colors"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={cn(
                        "w-full bg-gray-900/50 border-gray-700 focus:border-red-500 focus:ring-red-500 transition-all",
                        "hover:border-gray-500 focus:shadow-[0_0_0_2px_rgba(239,68,68,0.2)]",
                      )}
                    />
                    <div className="absolute inset-0 rounded-md -z-10 bg-gradient-to-r opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur transition-opacity"></div>
                  </div>

                  <div className="group relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-red-500 transition-colors"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className={cn(
                        "w-full bg-gray-900/50 border-gray-700 focus:border-red-500 focus:ring-red-500 transition-all",
                        "hover:border-gray-500 focus:shadow-[0_0_0_2px_rgba(239,68,68,0.2)]",
                      )}
                    />
                    <div className="absolute inset-0 rounded-md -z-10 bg-gradient-to-r from-transparent via-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur transition-opacity"></div>
                  </div>

                  <div className="group relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-red-500 transition-colors"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      required
                      className={cn(
                        "w-full bg-gray-900/50 border-gray-700 focus:border-red-500 focus:ring-red-500 min-h-[150px] transition-all",
                        "hover:border-gray-500 focus:shadow-[0_0_0_2px_rgba(239,68,68,0.2)]",
                      )}
                    />
                    <div className="absolute inset-0 rounded-md -z-10 bg-gradient-to-r from-transparent via-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur transition-opacity"></div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full relative group overflow-hidden rounded-full bg-gradient-to-r from-[#73f3f3] to-[#006A71] px-8 py-3 text-white"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#73f3f3] to-[#006A71] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </form>
              </div>
            </BackgroundGradient>
          </motion.div>

          {/* CSS Globe and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8 px-2 sm:px-4"
          >
            <div className="relative group w-full flex justify-center">
              {/* Light Gray Gradient Border */}
              <div
                className={`absolute inset-0 ${isMobile ? "max-w-[280px]" : "max-w-[400px]"} mx-auto aspect-square rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 p-1 animate-spin-slow [animation-duration:8s] opacity-70 group-hover:opacity-100 transition-opacity`}
              >
                <div className="absolute inset-0 rounded-full bg-black blur-sm"></div>
              </div>

              {/* Subtle Glow Effect */}
              <div
                className={`absolute inset-0 ${isMobile ? "max-w-[280px]" : "max-w-[400px]"} mx-auto aspect-square rounded-full bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 group-hover:opacity-30 blur-md scale-95 group-hover:scale-105 transition-all duration-1000`}
              ></div>

              <BackgroundGradient
                className={`rounded-full p-0.5 bg-black ${isMobile ? "max-w-[280px]" : "max-w-[400px]"} w-full mx-auto`}
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden bg-black/90 backdrop-blur-xl">
                  <CssGlobe className="w-full aspect-square" size={globeSize} />
                </div>
              </BackgroundGradient>
            </div>

            <BackgroundGradient className="rounded-[22px] p-0.5 bg-black w-full">
              <div className="bg-black/70 backdrop-blur-xl p-8 rounded-[20px] border border-gray-800 h-full">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4 relative overflow-hidden rounded-xl p-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-[#73f3f3] to-[#006A71] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-gray-700 p-3 rounded-full transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#6EE7B7] hover:to-[#3B82F6]">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg transition-colors duration-300">Our Location</h4>
                      <p className="text-gray-400">Gardeneast karachi Pakistan</p>
                    </div>
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-[#73f3f3] to-[#006A71] blur-xl opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-150"></div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 relative overflow-hidden rounded-xl p-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-[#73f3f3] to-[#1A3636] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-gray-700 p-3 rounded-full transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#6EE7B7] hover:to-[#3B82F6]">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg transition-colors duration-300">Email Us</h4>
                      <p className="text-gray-400">info@techexavision.com</p>
                      <p className="text-gray-400">03312436713aa@gmail.com</p>
                    </div>
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-[#73f3f3] to-[#1A3636] blur-xl opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-150"></div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 relative overflow-hidden rounded-xl p-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-[#73f3f3] to-[#1A3636] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-gray-700 p-3 rounded-full transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#6EE7B7] hover:to-[#3B82F6]">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg transition-colors duration-300">Call Us</h4>
                      <p className="text-gray-400">03312436713</p>
                      <p className="text-gray-400">03298388739</p>
                    </div>
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-[#73f3f3] to-[#1A3636] blur-xl opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-150"></div>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
