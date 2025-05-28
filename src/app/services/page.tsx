"use client";
import { motion } from "framer-motion";
// import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Code, Globe, Layers, Smartphone, Zap, Cpu } from "lucide-react"; // Import CPU icon for AI
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-red-500" />,
      title: "Web Design",
      description: "Beautiful, responsive websites that engage users and drive conversions.",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Full-Stack Development",
      description: "End-to-end solutions with robust backend and intuitive frontend.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
      title: "Mobile Applications",
      description: "Native and cross-platform apps that deliver exceptional user experiences.",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Performance Optimization",
      description: "Speed up your digital products for better user engagement and SEO.",
    },
    {
      // Replacing UI/UX Design with Marketing
      icon: <Layers className="h-10 w-10 text-green-500" />,
      title: "Marketing",
      description: "Boost your online presence with targeted marketing strategies, content creation, and SEO optimization.",
    },
    {
      // Adding the AI service card
      icon: <Cpu className="h-10 w-10 text-purple-500" />,  // Using the CPU icon for AI
      title: "AI Solutions",
      description: "Developing intelligent solutions with machine learning, automation, and AI agents to enhance your business capabilities.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-black font-serif">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#6EE7B7] to-[#1A3636] mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            We provide comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <HoverBorderGradient
                containerClassName="h-full"
                className="p-4 sm:p-6 h-full bg-black border border-[#333333] dark:border-neutral-800 rounded-xl transform transition-transform hover:scale-105"
                as="div"
                from="rgba(255, 70, 70, 0.5)"
                to="rgba(70, 70, 255, 0.5)"
              >
                <div className="flex flex-col h-full text-center">
                  <div className="mb-4 flex justify-center items-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
                </div>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
