import { Metadata } from "next";
import BlogContent from "./BlogContent";

// Metadata for the main blog page
export const metadata: Metadata = {
  title: "Web Development, App & AI Insights | TechExa Vision Blog",
  description: "Practical guides on website costs in Pakistan, custom web applications, and AI chatbots for small businesses — from the TechExa Vision team.",
};

export default function BlogPage() {
  return <BlogContent />;
}