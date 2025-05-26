// import { BlogCard } from "../../components/blog-card"; // Adjust path if your components folder is elsewhere
import { Metadata } from "next";
import { BlogCard } from "../components/blog-card";

// Define the structure for your blog post data (for the listing page)
interface BlogPostSummary {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

// Static data for your blog posts to display on the main blog page
const blogPosts: BlogPostSummary[] = [
  {
    id: 1,
    title: "Getting Started with Our Services",
    excerpt: "Learn how to get started with our comprehensive services and solutions.",
    date: "2023-05-15",
    slug: "getting-started",
    imageUrl: "/of3.webp", // Ensure these paths are correct in your /public folder
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

// Metadata for the main blog page
export const metadata: Metadata = {
  title: "Our Blog - Latest News & Insights",
  description: "Stay updated with the latest news, insights, and developments from our team.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and developments from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}