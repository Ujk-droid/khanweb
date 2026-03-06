"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogCardPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-2xl">
          {/* Image Container with overlay */}
          <div className="relative w-full h-52 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 text-xs font-medium">
                Blog
              </span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Date */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
              {post.excerpt}
            </p>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group/link">
              <span className="transition-colors duration-300 group-hover/link:text-blue-300">Read Article</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}