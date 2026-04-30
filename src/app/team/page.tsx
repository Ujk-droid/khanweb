"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Uzma Khan",
    role: "Founder & CEO",
    image: "/uzmadp.png",
    bio: "Visionary leader with expertise in software development and business strategy. Founded TechExa Vision with a mission to transform digital experiences through innovation and excellence.",
    skills: ["Leadership", "Strategy", "Innovation", "Business Development"],
    social: { linkedin: "#", twitter: "#", github: "#", email: "uzma@techexavision.com" },
    featured: true,
  },
  {
    name: "Ishtiaq Khan",
    role: "Chief Technology Officer",
    image: null,
    bio: "Technology expert with deep knowledge of software architecture and emerging technologies. Leads the technical vision and development strategy for all projects.",
    skills: ["Software Architecture", "Cloud Solutions", "AI/ML", "DevOps"],
    social: {
      linkedin: "https://www.linkedin.com/in/ishtiaq-khan-chrp-5766a648",
      twitter: "#", github: "#", email: "ishtiaqkhan8073@gmail.com",
    },
  },
  {
    name: "Shagufta Khan",
    role: "Head of Design",
    image: null,
    bio: "Creative design leader with a passion for creating beautiful, user-centered digital experiences. Oversees all design aspects from concept to implementation.",
    skills: ["UI/UX Design", "Brand Identity", "User Research", "Prototyping"],
    social: {
      linkedin: "https://www.linkedin.com/in/shagufta-khan-165566295",
      twitter: "#", github: "#", email: "ik7405403@gmail.com",
    },
  },
  {
    name: "Aisha",
    role: "Senior Developer",
    image: null,
    bio: "Experienced full-stack developer with expertise in building scalable web applications. Known for writing clean, efficient code and solving complex technical challenges.",
    skills: ["React", "Node.js", "TypeScript", "Database Design"],
    social: {
      linkedin: "https://www.linkedin.com/in/aisha-486a4b228",
      twitter: "#", github: "#", email: "creativegraphics911@gmail.com",
    },
  },
  {
    name: "Mussafa",
    role: "Marketer",
    image: null,
    bio: "Detail-oriented project manager who ensures timely delivery of high-quality solutions. Excels at coordinating teams and maintaining client relationships.",
    skills: ["Project Planning", "Agile Methodology", "Client Relations", "Team Leadership"],
    social: { linkedin: "#", twitter: "#", github: "#", email: "mustafa@techexavision.com" },
  },
];

const socialLinks = (social: { linkedin: string; twitter: string; github: string; email: string }, size = 5) => (
  <div className="flex space-x-3">
    <Link href={social.linkedin} className="text-[#A1A1AA] hover:text-[#B78460] transition-colors p-2 rounded-full hover:bg-[rgba(183,132,96,0.08)]">
      <Linkedin className={`h-${size} w-${size}`} />
    </Link>
    <Link href={social.twitter} className="text-[#A1A1AA] hover:text-[#B78460] transition-colors p-2 rounded-full hover:bg-[rgba(183,132,96,0.08)]">
      <Twitter className={`h-${size} w-${size}`} />
    </Link>
    <Link href={social.github} className="text-[#A1A1AA] hover:text-[#B78460] transition-colors p-2 rounded-full hover:bg-[rgba(183,132,96,0.08)]">
      <Github className={`h-${size} w-${size}`} />
    </Link>
    <Link href={`mailto:${social.email}`} className="text-[#A1A1AA] hover:text-[#B78460] transition-colors p-2 rounded-full hover:bg-[rgba(183,132,96,0.08)]">
      <Mail className={`h-${size} w-${size}`} />
    </Link>
  </div>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#FAFAFA] relative overflow-hidden">
      {/* Copper ambient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgba(183,132,96,0.05)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgba(183,132,96,0.04)] rounded-full blur-3xl pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-28 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B78460] via-[#E5C0A0] to-[#FAFAFA]"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#9A8F87] max-w-3xl mx-auto leading-relaxed"
          >
            The brilliant minds behind TechExa Vision. Our diverse team of experts is passionate about creating
            innovative solutions and pushing the boundaries of technology.
          </motion.p>
        </div>
      </section>

      {/* Featured Member */}
      <section className="relative py-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.filter((m) => m.featured).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[rgba(183,132,96,0.05)] border border-[rgba(183,132,96,0.2)] rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-3 gap-12 items-center">
                {/* Avatar */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-full blur-xl opacity-40"
                      style={{ background: "linear-gradient(135deg, #B78460, #E5C0A0)" }}
                    />
                    <Avatar className="w-40 h-40 border-4 border-[#2A2420] ring-2 ring-[rgba(183,132,96,0.5)] relative">
                      {member.image && (
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      )}
                      <AvatarFallback
                        style={{
                          background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
                          color: "#0B0B0C",
                          fontWeight: 700,
                          fontSize: "2.5rem",
                        }}
                      >
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-2">
                  <Badge className="bg-[rgba(183,132,96,0.15)] text-[#B78460] border border-[rgba(183,132,96,0.3)] mb-4 px-4 py-1.5">
                    Founder
                  </Badge>
                  <h2 className="font-heading text-3xl font-bold text-[#FAFAFA] mb-2">{member.name}</h2>
                  <p className="text-[#B78460] text-xl font-medium mb-4">{member.role}</p>
                  <p className="text-[#9A8F87] mb-6 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-[#141414] text-[#9A8F87] border-[#2A2420] hover:border-[rgba(183,132,96,0.4)] transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {socialLinks(member.social)}
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
            {teamMembers.filter((m) => !m.featured).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card bg-[#141414] border-[#2A2420] hover:border-[rgba(183,132,96,0.35)] transition-all duration-300 group backdrop-blur-sm overflow-hidden rounded-3xl h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <div className="absolute -inset-2 bg-[rgba(183,132,96,0.15)] rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Avatar className="w-28 h-28 mx-auto ring-2 ring-[#2A2420] group-hover:ring-[rgba(183,132,96,0.5)] transition-all relative">
                          {member.image && (
                            <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                          )}
                          <AvatarFallback
                            style={{
                              background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
                              color: "#0B0B0C",
                              fontWeight: 700,
                              fontSize: "1.5rem",
                            }}
                          >
                            {member.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-[#FAFAFA] mb-1">{member.name}</h3>
                      <p className="text-[#B78460] font-medium mb-3 text-sm">{member.role}</p>
                      <p className="text-[#9A8F87] text-sm mb-4 leading-relaxed line-clamp-3">{member.bio}</p>

                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.skills.slice(0, 3).map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-[#0B0B0C] text-[#9A8F87] border-[#2A2420] text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        {socialLinks(member.social, 4)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[rgba(183,132,96,0.05)] border border-[rgba(183,132,96,0.2)] rounded-3xl p-12 max-w-3xl mx-auto backdrop-blur-sm"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
              The Vision of TechExa
            </h2>
            <p className="text-[#9A8F87] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              At TechExa, we are driven by a bold vision to transform ideas into impactful digital solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 rounded-xl font-semibold text-[#0B0B0C] transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
                boxShadow: "0 0 20px rgba(183,132,96,0.3)",
              }}
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
