import { Metadata } from "next";
import BlogContent from "./BlogContent";

// Metadata for the main blog page
export const metadata: Metadata = {
  title: "Our Blog - Latest News & Insights",
  description: "Stay updated with the latest news, insights, and developments from our team.",
};

export default function BlogPage() {
  return <BlogContent />;
}