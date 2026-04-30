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
      whileHover={{ y: -8, scale: 1.02 }} 
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        <div className="glass-card bg-[#18181B] backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden h-full flex flex-col border border-[#27272A] hover:border-[rgba(183,132,96,0.35)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(183,132,96,0.08)]">

          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 to-transparent z-10" />
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Copper badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-[rgba(183,132,96,0.15)] backdrop-blur-sm border border-[rgba(183,132,96,0.3)] text-[#B78460] text-xs font-medium">
                Blog
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Date */}
            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-3">
              <Calendar className="w-4 h-4 text-[#B78460]" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl font-semibold mb-3 text-[#FAFAFA] line-clamp-2 group-hover:text-[#B78460] transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#A1A1AA] text-sm mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Read More */}
            <div className="mt-auto flex items-center gap-2 text-[#B78460] text-sm font-medium group/link">
              <span className="transition-colors duration-300 group-hover/link:text-[#E5C0A0]">Read Article</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* Copper bottom accent line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#B78460] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
