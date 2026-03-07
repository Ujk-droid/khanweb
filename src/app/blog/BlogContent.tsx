"use client";

import BlogCard from "../components/blog-card";
import { motion } from "framer-motion";

interface BlogPostSummary {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

const blogPosts: BlogPostSummary[] = [
  {
    id: 1,
    title: "Getting Started with Our Services",
    excerpt: "Learn how to get started with our comprehensive services and solutions.",
    date: "2023-05-15",
    slug: "getting-started",
    imageUrl: "/of3.webp",
  },
  {
    id: 2,
    title: "Industry Trends and Insights",
    excerpt: "Stay updated with the latest trends and insights in the technology industry.",
    date: "2023-06-22",
    slug: "industry-trends",
    imageUrl: "/of2.jpg",
  },
  {
    id: 3,
    title: "Case Study: Digital Transformation",
    excerpt: "Explore our recent case study on successful digital transformation projects.",
    date: "2023-07-10",
    slug: "case-study-digital-transformation",
    imageUrl: "/office.jpeg",
  },
];

export default function BlogContent() {
  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-[#030712]" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Latest Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest news, insights, and developments from our team
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
