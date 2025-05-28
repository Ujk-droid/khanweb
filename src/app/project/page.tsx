"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientCard } from "../components/ui/gradient-card";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured small industry website with payment integration and inventory management.",
      image: "/hk.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "https://marketplace-flax-omega.vercel.app",
    },
    {
      title: "Food Delivery App",
      description: "Food Delivery app with real-time tracking and payment integration.",
      image: "/fd.jpg",
      tags: ["React Native", "Firebase", "Google Maps API"],
      link: "https://09to05.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      description: "A modern admin dashboard with user management, analytics, and role-based access control.",
      image: "/ad2.png",
      tags: ["Next.js", "Tailwind CSS", "Chart.js", "Prisma"],
      link: "https://admin-seven-snowy.vercel.app",
    },
    {
      title: "Blog Website",
      description: "A fully functional blog platform with markdown support, commenting, and SEO features.",
      image: "/blog.png",
      tags: ["Next.js", "MDX", "Tailwind CSS", "Firebase"],
      link: "https://blogproject-red.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#73f3f3] to-[#1A3636] bg-clip-text font-serif">
            Our Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#73f3f3] to-[#1A3636] mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto font-serif">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group w-full max-w-md mx-auto"
            >
              <GradientCard>
                <div className="flex flex-col h-full">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-56 rounded-xl overflow-hidden mb-4 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300 block"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </a>
                  ) : (
                    <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#F4631E] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300 transition-colors duration-300 hover:bg-red-500 hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
