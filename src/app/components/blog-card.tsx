import Link from "next/link";
import Image from "next/image";

// Define the type for the data a single blog card expects
interface BlogCardPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

// Define the props for the BlogCard component itself
interface BlogCardProps {
  post: BlogCardPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-105">
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill // Use fill to make the image cover its container
            className="object-cover"
            // Optimize image loading for different screen sizes
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-white line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <p className="text-gray-500 text-xs mt-auto">{post.date}</p>
        </div>
      </div>
    </Link>
  );
}