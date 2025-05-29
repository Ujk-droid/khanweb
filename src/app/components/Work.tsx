import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Kamran Khan",
    role: "MD",
    company: "Laser Tech",
    image: "/placeholder.svg?height=60&width=60&query=professional man CEO",
    rating: 5,
    text: "TechExa Vision transformed our entire digital infrastructure. Their team's expertise and dedication exceeded our expectations. The results speak for themselves - 300% increase in performance.",
  },
  {
    name: "Rizwan Ahmed",
    role: "MD",
    company: "Omega Scale Industry",
    image: "/placeholder.svg?height=60&width=60&query=professional woman CTO",
    rating: 5,
    text: "Working with TechExa Vision was a game-changer. They delivered a scalable solution that perfectly aligned with our business goals. Highly recommend their services.",
  },
  {
    name: "Asfaq Ahmed Khilji",
    role: "Founder, Modren Scale",
    company: "Modren Scale Industry",
    image: "/placeholder.svg?height=60&width=60&query=professional man founder",
    rating: 5,
    text: "The level of professionalism and technical expertise at TechExa Vision is outstanding. They turned our vision into reality with precision and creativity.",
  },
  {
    name: "Imran Khan",
    role: "MD",
    company: "Imran Steel Works",
    image: "/placeholder.svg?height=60&width=60&query=professional woman product manager",
    rating: 5,
    text: "TechExa Vision's innovative approach and attention to detail made all the difference. Our product launch was a huge success thanks to their exceptional work.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#73f3f3] to-[#1A3636] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dont just take our word for it. Here what industry leaders have to say about working with TechExa Vision.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="h-8 w-8 text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-gray-700 group-hover:ring-blue-500/50 transition-all">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-[#73f3f3] to-[#1A3636] text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-blue-400 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

     
      </div>
    </section>
  )
}
