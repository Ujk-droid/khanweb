"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kamran Khan",
    role: "MD",
    company: "Laser Tech",
    image: "",
    rating: 5,
    text: "TechExa Vision transformed our entire digital infrastructure. Their team's expertise and dedication exceeded our expectations. The results speak for themselves — 300% increase in performance.",
  },
  {
    name: "Rizwan Ahmed",
    role: "MD",
    company: "Omega Scale Industry",
    image: "",
    rating: 5,
    text: "Working with TechExa Vision was a game-changer. They delivered a scalable solution that perfectly aligned with our business goals. Highly recommend their services.",
  },
  {
    name: "Asfaq Ahmed Khilji",
    role: "Founder",
    company: "Modren Scale Industry",
    image: "",
    rating: 5,
    text: "The level of professionalism and technical expertise at TechExa Vision is outstanding. They turned our vision into reality with precision and creativity.",
  },
  {
    name: "Imran Khan",
    role: "MD",
    company: "Imran Steel Works",
    image: "",
    rating: 5,
    text: "TechExa Vision's innovative approach and attention to detail made all the difference. Our product launch was a huge success thanks to their exceptional work.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#0B0B0C] overflow-hidden">
      {/* Subtle copper ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(183,132,96,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B78460] to-[#E5C0A0]">
              Clients Say
            </span>
          </h2>
          <p className="text-[#9A8F87] text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with TechExa Vision.
          </p>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass-card bg-[#141414] border-[#2A2420] hover:border-[rgba(183,132,96,0.4)] transition-all duration-300 group relative overflow-hidden h-full">
                <CardContent className="p-6">
                  {/* Decorative quote icon */}
                  <div className="absolute top-4 right-4 opacity-15 group-hover:opacity-25 transition-opacity">
                    <Quote className="h-8 w-8 text-[#B78460]" />
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#B78460] text-[#B78460]" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-[#9A8F87] mb-6 leading-relaxed italic text-sm">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-[#2A2420] group-hover:ring-[rgba(183,132,96,0.4)] transition-all">
                      <AvatarImage src={testimonial.image || ""} alt={testimonial.name} />
                      <AvatarFallback
                        style={{
                          background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
                          color: "#0B0B0C",
                          fontWeight: 700,
                        }}
                      >
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-heading text-[#FAFAFA] font-semibold">{testimonial.name}</h4>
                      <p className="text-[#9A8F87] text-sm">{testimonial.role}</p>
                      <p className="text-[#B78460] text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
