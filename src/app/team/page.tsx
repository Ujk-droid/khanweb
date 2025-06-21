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
    skills: ["Software Architecture", "Cloud Solutions", "AI/ML", "DevOps"],
    social: {
      linkedin: "https://www.linkedin.com/in/ishtiaq-khan-chrp-5766a648?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#",
      email: "ishtiaqkhan8073@gmail.com",
    },
  },
  {
    name: "Shagufta Khan",
    role: "Head of Design",
    bio: "Creative design leader with a passion for creating beautiful, user-centered digital experiences. Oversees all design aspects from concept to implementation.",
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
  const particlesRef = useRef<HTMLDivElement>(null)
  const meteorsRef = useRef<HTMLDivElement>(null)

  // Top wave animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Draw multiple waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, height * 0.7)

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

        const alpha = 0.1 - i * 0.02
        ctx.fillStyle = `rgba(${i === 0 ? "0, 106, 113" : i === 1 ? "1, 148, 159" : "115, 243, 243"}, ${alpha})`
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

  // Bottom wave animation
  useEffect(() => {
    const canvas = canvasRef2.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Draw multiple waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, height * 0.3)

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

        const alpha = 0.1 - i * 0.02
        ctx.fillStyle = `rgba(${i === 0 ? "0, 106, 113" : i === 1 ? "1, 148, 159" : "115, 243, 243"}, ${alpha})`
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

  // Particles animation (matching loading component)
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"

      const size = Math.random() * 4 + 2
      const duration = Math.random() * 3 + 2
      const delay = Math.random() * 5

      particle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background: #73f3f3;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        z-index: 1;
        box-shadow: 0 0 10px rgba(115, 243, 243, 0.8);
        animation: particle ${duration}s ease-in-out ${delay}s infinite;
      `

      container.appendChild(particle)
    }

    for (let i = 0; i < 30; i++) {
      createParticle()
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  // Meteors animation
  useEffect(() => {
    const meteorsContainer = meteorsRef.current
    if (!meteorsContainer) return

    const createMeteor = () => {
      const meteor = document.createElement("div")
      meteor.className = "meteor"

      const startX = Math.random() * window.innerWidth
      const startY = -50
      const endX = startX + (Math.random() - 0.5) * 400
      const endY = window.innerHeight + 50
      const size = Math.random() * 3 + 1
      const colors = ["#006A71", "#01949f", "#73f3f3"]
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

    const meteorInterval = setInterval(() => {
      if (Math.random() < 0.7) {
        createMeteor()
      }
    }, 800)

    return () => {
      clearInterval(meteorInterval)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden ${poppins.variable} ${playfair.variable}`}>
      {/* Background elements */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      <div ref={meteorsRef} className="fixed inset-0 pointer-events-none z-10" />
      
      {/* Top wave canvas */}
      <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-1/3 z-10" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#006A71] via-[#01949f] to-[#73f3f3] bg-clip-text text-transparent ${playfair.className}`}>
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind TechExa Vision. Our diverse team of experts is passionate about creating
            innovative solutions and pushing the boundaries of technology.
          </p>
        </div>
      </section>

      {/* Featured Member */}
      <section className="relative py-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.filter(member => member.featured).map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-[#006A71]/20 to-[#01949f]/20 border border-[#01949f]/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#006A71] to-[#73f3f3] rounded-full blur opacity-30 animate-pulse" />
                    <Avatar className="w-48 h-48 border-4 border-gray-800 ring-2 ring-[#01949f]/50">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#006A71] to-[#73f3f3] text-white text-4xl">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Badge className="bg-[#006A71]/30 text-[#73f3f3] border border-[#01949f]/30 mb-4">
                    Founder
                  </Badge>
                  <h2 className={`text-3xl font-bold text-white mb-2 ${playfair.className}`}>{member.name}</h2>
                  <p className="text-[#73f3f3] text-xl font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-gray-800/80 text-gray-300 hover:bg-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link href={member.social.linkedin} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={member.social.twitter} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href={member.social.github} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.filter(member => !member.featured).map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-[#01949f]/50 transition-all duration-300 group backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-gray-700 group-hover:ring-[#01949f]/50 transition-all">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#006A71] to-[#73f3f3] text-white">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className={`text-xl font-semibold text-white mb-1 ${playfair.className}`}>{member.name}</h3>
                    <p className="text-[#73f3f3] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-3">
                      <Link href={member.social.linkedin} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href={member.social.twitter} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href={member.social.github} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-[#73f3f3] transition-colors">
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

      {/* CTA Section with Bottom Wave */}
      <section className="py-20 relative z-20">
        {/* Bottom wave canvas */}
        <canvas ref={canvasRef2} className="absolute top-0 left-0 w-full h-full z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-[#006A71]/20 to-[#01949f]/20 border border-[#01949f]/30 rounded-3xl p-12 max-w-3xl mx-auto backdrop-blur-sm">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${playfair.className}`}>
              The Vision of Techexa
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              At Techexa, we are driven by a bold vision to transform ideas into impactful digital solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#006A71] to-[#01949f] hover:from-[#006A71]/90 hover:to-[#01949f]/90 text-white font-medium rounded-lg transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes particle {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px) scale(1.2); opacity: 0; }
        }
        
        .font-playfair {
          font-family: var(--font-playfair);
        }
        
        .font-poppins {
          font-family: var(--font-poppins);
        }
      `}</style>
    </div>
  )
}