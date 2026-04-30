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
    <div className="min-h-screen bg-[#0B0B0C] text-[#FAFAFA] relative overflow-hidden">
      {/* Copper ambient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgba(183,132,96,0.05)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgba(183,132,96,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
            Latest Insights
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#B78460] to-[#E5C0A0]">
            Our Blog
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto mb-6" />
          <p className="text-xl text-[#9A8F87] max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest news, insights, and developments from our team
          </p>
        </motion.div>

        {/* Blog Grid */}
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
