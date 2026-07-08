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
    title: "Website Development Cost in Pakistan (2026 Guide)",
    excerpt: "A realistic 2026 breakdown of website, e-commerce, and custom web app pricing in Pakistan — and what actually affects the final cost.",
    date: "2026-07-08",
    slug: "website-development-cost-pakistan-2026",
    imageUrl: "/five.png",
  },
  {
    id: 2,
    title: "7 Signs Your Business Needs a Custom Web Application",
    excerpt: "Still running your business on spreadsheets and disconnected tools? Here are 7 clear signs it's time for a custom solution.",
    date: "2026-07-08",
    slug: "signs-business-needs-custom-web-application",
    imageUrl: "/four.png",
  },
  {
    id: 3,
    title: "Do WhatsApp & AI Chatbots Actually Help Small Businesses in Pakistan?",
    excerpt: "With 110M+ WhatsApp users in Pakistan, we break down whether AI chatbots are worth it — and which businesses benefit most.",
    date: "2026-07-08",
    slug: "ai-chatbots-small-business-pakistan",
    imageUrl: "/two.png",
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