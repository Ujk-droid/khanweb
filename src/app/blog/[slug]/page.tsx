import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react"; // Assuming you have lucide-react installed
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui Button

// Define the structure of a single blog post's full content
interface BlogPostContent {
  title: string;
  date: string;
  content: string; // HTML content
  imageUrl: string;
}

// Define the props for the page component and generateMetadata
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Mock data fetching function for individual blog posts
// In a real application, this would fetch from an API or database
const getBlogPost = async (slug: string): Promise<BlogPostContent | undefined> => {
  const posts: Record<string, BlogPostContent> = {
    "getting-started": {
      title: "Getting Started with Our Services",
      date: "May 15, 2023",
      content: `
        <p>Welcome to our comprehensive guide on getting started with our services. This guide will walk you through everything you need to know to make the most of our offerings.</p>
        <h2>Understanding Our Platform</h2>
        <p>Our platform is designed with user experience in mind. The intuitive interface allows you to navigate through various features seamlessly. Begin by exploring the dashboard, which provides an overview of all available tools and services.</p>
        <h2>Setting Up Your Account</h2>
        <p>To fully utilize our services, ensure your account is properly set up. This includes completing your profile, setting preferences, and configuring notification settings. A complete profile helps us tailor our services to your specific needs.</p>
        <h2>Exploring Key Features</h2>
        <p>Our platform offers a range of features designed to enhance your experience. Take time to explore each feature and understand how it can benefit your specific use case. Our documentation provides detailed information on each feature.</p>
        <h2>Getting Support</h2>
        <p>Should you encounter any challenges, our support team is always ready to assist. You can reach out through the help center, email, or live chat. We're committed to ensuring you have a smooth experience with our services.</p>
      `,
      imageUrl: "/of3.webp",
    },
    "industry-trends": {
      title: "Industry Trends and Insights",
      date: "June 22, 2023",
      content: `
        <p>The technology landscape is constantly evolving, with new trends emerging regularly. Staying informed about these trends is crucial for businesses looking to maintain a competitive edge.</p>
        <h2>Artificial Intelligence and Machine Learning</h2>
        <p>AI and ML continue to revolutionize various industries. From automated customer service to predictive analytics, these technologies are enhancing efficiency and decision-making processes across sectors.</p>
        <h2>Cloud Computing</h2>
        <p>Cloud services are becoming increasingly sophisticated, offering more than just storage solutions. Businesses are leveraging cloud computing for complex operations, collaborative work, and secure data management.</p>
        <h2>Cybersecurity</h2>
        <p>With the rise in digital operations, cybersecurity has become a top priority. Advanced security measures, including AI-driven threat detection and blockchain technology, are being implemented to protect sensitive data.</p>
        <h2>Internet of Things (IoT)</h2>
        <p>IoT is expanding beyond smart homes to industrial applications. The integration of IoT with other technologies is creating smarter, more efficient systems in manufacturing, healthcare, and urban planning.</p>
      `,
      imageUrl: "/of2.jpg",
    },
    "case-study-digital-transformation": {
      title: "Case Study: Digital Transformation",
      date: "July 10, 2023",
      content: `
        <p>Digital transformation is reshaping how businesses operate and deliver value to customers. This case study explores a successful digital transformation journey of a traditional manufacturing company.</p>
        <h2>Background</h2>
        <p>The company, a 50-year-old manufacturing firm, was facing challenges with outdated processes and increasing competition. They decided to embark on a digital transformation journey to modernize their operations and enhance customer experience.</p>
        <h2>Challenges</h2>
        <p>The main challenges included resistance to change from employees, integration of new technologies with existing systems, and ensuring minimal disruption to ongoing operations during the transition.</p>
        <h2>Implementation Strategy</h2>
        <p>The transformation was implemented in phases, starting with the digitization of core processes, followed by the introduction of data analytics for decision-making, and finally, the adoption of IoT for real-time monitoring and predictive maintenance.</p>
        <h2>Results</h2>
        <p>The digital transformation resulted in a 30% increase in operational efficiency, a 25% reduction in maintenance costs, and a significant improvement in customer satisfaction scores. The company is now positioned as an industry leader in innovation.</p>
      `,
      imageUrl: "/office.jpeg",
    },
  };

  // Simulate an async fetch
  return Promise.resolve(posts[slug]);
};

// Next.js function to generate static paths for dynamic routes at build time
export async function generateStaticParams() {
  const slugs = [
    "getting-started",
    "industry-trends",
    "case-study-digital-transformation",
  ];

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Next.js function to generate metadata (title, description) for each page
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - My Blog",
    };
  }

  // Strip HTML tags for the description and ensure it's not too long
  const description = post.content
    ? post.content.replace(/<[^>]*>?/gm, "").slice(0, 150) + "..."
    : "A blog post from our site.";

  return {
    title: post.title,
    description: description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">
            The blog post you are looking for doesn&#39;t exist or has been removed.
          </p>
          <Button variant="outline" asChild className="mt-8 mx-auto flex items-center justify-center">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
          <p className="text-gray-400 mb-8 border-b border-gray-800 pb-4">{post.date}</p>

          <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" // Adjust sizes for the individual post image
            />
          </div>

          {/* dangerouslySetInnerHTML is used for rendering HTML content */}
          <div
            className="prose prose-invert max-w-none prose-headings:text-purple-300 prose-a:text-purple-400 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}