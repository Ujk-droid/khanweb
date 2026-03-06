"use client"

import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Uzma Khan",
    role: "Founder & CEO",
    bio: "Visionary leader with expertise in software development and business strategy. Founded TechExa Vision with a mission to transform digital experiences through innovation and excellence.",
    image: "",
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
  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-[#030712]" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
          >
            Our Team
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent`}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            The brilliant minds behind TechExa Vision. Our diverse team of experts is passionate about creating
            innovative solutions and pushing the boundaries of technology.
          </motion.p>
        </div>
      </section>

      {/* Featured Member */}
      <section className="relative py-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.filter(member => member.featured).map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-40" />
                    <Avatar className="w-40 h-40 border-4 border-gray-800 ring-2 ring-blue-500/50 relative">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-5xl font-bold">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4 px-4 py-1.5">
                    Founder
                  </Badge>
                  <h2 className={`text-3xl font-bold text-white mb-2`}>{member.name}</h2>
                  <p className="text-blue-400 text-xl font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700 hover:border-blue-500/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.filter(member => !member.featured).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Avatar className="w-28 h-28 mx-auto ring-2 ring-gray-700 group-hover:ring-blue-500/50 transition-all relative">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl font-bold">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <h3 className={`text-xl font-semibold text-white mb-1`}>{member.name}</h3>
                      <p className="text-blue-400 font-medium mb-3 text-sm">{member.role}</p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{member.bio}</p>

                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="bg-gray-700/50 text-gray-300 border-gray-600 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-center space-x-3">
                        <Link href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                        <Link href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                          <Twitter className="h-4 w-4" />
                        </Link>
                        <Link href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                          <Github className="h-4 w-4" />
                        </Link>
                        <Link href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-500/10">
                          <Mail className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 max-w-3xl mx-auto backdrop-blur-sm"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4`}>
              The Vision of TechExa
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              At TechExa, we are driven by a bold vision to transform ideas into impactful digital solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600/90 hover:to-purple-600/90 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}