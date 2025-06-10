"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Poppins, Playfair_Display } from "next/font/google"

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
})

const teamMembers = [
  {
    name: "Uzma Khan",
    role: "Founder & CEO",
    bio: "Visionary leader with expertise in software development and business strategy. Founded TechExa Vision with a mission to transform digital experiences through innovation and excellence.",
    image: "/placeholder.svg?height=400&width=400",
    skills: ["Leadership", "Strategy", "Innovation", "Business Development"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "uzma@techexavision.com",
    },
    featured: true,
  },
  {
    name: "Ishtiaq Khan",
    role: "Chief Technology Officer",
    bio: "Technology expert with deep knowledge of software architecture and emerging technologies. Leads the technical vision and development strategy for all projects.",
    // image: "/placeholder.svg?height=400&width=400",
    skills: ["Software Architecture", "Cloud Solutions", "AI/ML", "DevOps"],
    social: {
      linkedin: "https://www.linkedin.com/in/ishtiaq-khan-chrp-5766a648?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      twitter: "#",
      github: "#",
      email: "ishtiaqkhan8073@gmail.com",
    },
  },
  {
    name: "Shagufta Khan",
    role: "Head of Design",
    bio: "Creative design leader with a passion for creating beautiful, user-centered digital experiences. Oversees all design aspects from concept to implementation.",
    // image: "/placeholder.svg?height=400&width=400",
    skills: ["UI/UX Design", "Brand Identity", "User Research", "Prototyping"],
    social: {
      linkedin: "www.linkedin.com/in/shagufta-khan-165566295",
      twitter: "#",
      github: "#",
      email: "ik7405403@gmail.com",
    },
  },
  {
    name: "Aisha",
    role: "Senior Developer",
    bio: "Experienced full-stack developer with expertise in building scalable web applications. Known for writing clean, efficient code and solving complex technical challenges.",
    // image: "/placeholder.svg?height=400&width=400",
    skills: ["React", "Node.js", "TypeScript", "Database Design"],
    social: {
      linkedin: "https://www.linkedin.com/in/aisha-486a4b228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#",
      email: "creativegraphics911@gmail.com",
    },
  },
  {
    name: "Mussafa",
    role: "Marketer",
    bio: "Detail-oriented project manager who ensures timely delivery of high-quality solutions. Excels at coordinating teams and maintaining client relationships.",
    // image: "/placeholder.svg?height=400&width=400",
    skills: ["Project Planning", "Agile Methodology", "Client Relations", "Team Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mustafa@techexavision.com",
    },
  },
]

export default function TeamPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasRef2 = useRef<HTMLCanvasElement>(null)
  const meteorsRef = useRef<HTMLDivElement>(null)

  // Hero section wave animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Wave animation variables
    let animationId: number
    let time = 0

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw multiple waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, height * 0.7)

        // Create wave path
        for (let x = 0; x <= width; x += 10) {
          const y =
            height * 0.7 +
            Math.sin((x * 0.01 + time * 0.002 + i * 0.5) * Math.PI) * (20 + i * 10) +
            Math.sin((x * 0.005 + time * 0.001 + i * 0.3) * Math.PI) * (10 + i * 5)
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        // Set wave color with opacity
        const alpha = 0.1 - i * 0.02
        ctx.fillStyle = `rgba(${i === 0 ? "59, 130, 246" : i === 1 ? "147, 51, 234" : "6, 182, 212"}, ${alpha})`
        ctx.fill()
      }

      time += 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Bottom section wave animation
  useEffect(() => {
    const canvas = canvasRef2.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Wave animation variables
    let animationId: number
    let time = 0

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw multiple waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, height * 0.3)

        // Create wave path
        for (let x = 0; x <= width; x += 10) {
          const y =
            height * 0.3 +
            Math.sin((x * 0.01 + time * 0.002 + i * 0.5) * Math.PI) * (20 + i * 10) +
            Math.sin((x * 0.005 + time * 0.001 + i * 0.3) * Math.PI) * (10 + i * 5)
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, 0)
        ctx.lineTo(0, 0)
        ctx.closePath()

        // Set wave color with opacity
        const alpha = 0.1 - i * 0.02
        ctx.fillStyle = `rgba(${i === 0 ? "59, 130, 246" : i === 1 ? "147, 51, 234" : "6, 182, 212"}, ${alpha})`
        ctx.fill()
      }

      time += 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Meteors animation
  useEffect(() => {
    const meteorsContainer = meteorsRef.current
    if (!meteorsContainer) return

    const createMeteor = () => {
      const meteor = document.createElement("div")
      meteor.className = "meteor"

      // Random starting position
      const startX = Math.random() * window.innerWidth
      const startY = -50

      // Random end position
      const endX = startX + (Math.random() - 0.5) * 400
      const endY = window.innerHeight + 50

      // Random size and color
      const size = Math.random() * 3 + 1
      const colors = ["#3b82f6", "#9333ea", "#06b6d4", "#10b981", "#f59e0b"]
      const color = colors[Math.floor(Math.random() * colors.length)]

      meteor.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 ${size * 4}px ${color}, 0 0 ${size * 8}px ${color}40;
        pointer-events: none;
        z-index: 1;
      `

      meteorsContainer.appendChild(meteor)

      // Animate meteor
      const duration = Math.random() * 3000 + 2000
      meteor.animate(
        [
          { transform: `translate(0, 0) scale(1)`, opacity: 0 },
          { transform: `translate(0, 50px) scale(1)`, opacity: 1, offset: 0.1 },
          { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0.5)`, opacity: 0 },
        ],
        {
          duration: duration,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      ).onfinish = () => {
        meteor.remove()
      }
    }

    // Create meteors at intervals
    const meteorInterval = setInterval(() => {
      if (Math.random() < 0.7) {
        // 70% chance to create a meteor
        createMeteor()
      }
    }, 800)

    return () => {
      clearInterval(meteorInterval)
    }
  }, [])

  return (
    <div
      className={`min-h-screen bg-black text-white relative overflow-hidden ${poppins.variable} ${playfair.variable}`}
    >
      {/* Meteors Container */}
      <div ref={meteorsRef} className="fixed inset-0 pointer-events-none z-10"></div>

      {/* Hero Section with Aceternity-style Waves */}
      <section className="relative py-20 overflow-hidden">
        {/* Canvas for wave animation */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />

        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins font-normal leading-relaxed">
            The brilliant minds behind TechExa Vision. Our diverse team of experts is passionate about creating
            innovative solutions and pushing the boundaries of technology.
          </p>
        </div>

        {/* SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>
      </section>

      {/* Featured Team Member (CEO) */}
      <section className="py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers
            .filter((member) => member.featured)
            .map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-3 gap-12 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
                      <Avatar className="w-48 h-48 border-4 border-gray-800 ring-2 ring-blue-500/50">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-4xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="mb-2">
                      <Badge className="bg-blue-600/30 text-blue-400 border border-blue-500/30 hover:bg-blue-600/40">
                        Founder
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2 font-playfair">{member.name}</h2>
                    <p className="text-blue-400 text-xl font-medium mb-4 font-poppins">{member.role}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed font-poppins font-normal">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-800/80 text-gray-300 hover:bg-gray-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <Link
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 relative z-20">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers
              .filter((member) => !member.featured)
              .map((member, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-gray-700 group-hover:ring-blue-500/50 transition-all">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold text-white mb-1 font-playfair">{member.name}</h3>
                      <p className="text-blue-400 font-medium mb-3 font-poppins">{member.role}</p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed font-poppins">{member.bio}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-gray-700 text-gray-300 hover:bg-gray-600"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-3">
                        <Link
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                          href={member.social.github}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                        <Link
                          href={`mailto:${member.social.email}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA with Wave Background */}
      <section className="py-20 relative overflow-hidden z-20">
        {/* Canvas for bottom wave animation */}
        <canvas ref={canvasRef2} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />

        {/* Animated Wave Background */}
        <div className="absolute inset-0">
          <div className="wave-container">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
          </div>
        </div>

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
  <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-3xl p-12 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">The Vision of Techexa</h2>
    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-poppins font-normal leading-relaxed">
      At Techexa, we are driven by a bold vision to transform ideas into impactful digital solutions. Our commitment to innovation, quality, and collaboration defines everything we do.
    </p>
    <Link
      href="/about"
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
    >
      Learn More About Us
    </Link>
  </div>
</div>

      </section>

    

      <style jsx>{`
        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            ellipse at center,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 51, 234, 0.03) 50%,
            transparent 70%
          );
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .wave1 {
          animation: wave 8s ease-in-out infinite;
        }

        .wave2 {
          animation: wave 12s ease-in-out infinite reverse;
          animation-delay: -2s;
        }

        .wave3 {
          animation: wave 16s ease-in-out infinite;
          animation-delay: -4s;
        }

        @keyframes wave {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
          }
        }

        .meteor {
          animation: meteorTail 0.5s ease-out;
        }

        @keyframes meteorTail {
          0% {
            box-shadow: 0 0 0 transparent;
          }
          50% {
            box-shadow: -30px -30px 20px currentColor;
          }
          100% {
            box-shadow: -60px -60px 40px transparent;
          }
        }

        /* Custom font classes */
        :global(.font-playfair) {
          font-family: var(--font-playfair);
        }

        :global(.font-poppins) {
          font-family: var(--font-poppins);
        }
      `}</style>
    </div>
  )
}
