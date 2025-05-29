import Link from "next/link";
import Image from "next/image";

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

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content Container */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Title with Playfair Display */}
          <h3 className="text-xl font-semibold mb-2 text-white line-clamp-2 font-heading tracking-tight">
            {post.title}
          </h3>

          {/* Excerpt with Poppins */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow font-body leading-relaxed">
            {post.excerpt}
          </p>

          {/* Date with Poppins */}
          <p className="text-gray-500 text-xs mt-auto font-body">
            {post.date}
          </p>
        </div>
      </div>
    </Link>
  );
}