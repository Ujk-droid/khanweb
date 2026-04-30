import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostContent {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const getBlogPost = async (slug: string): Promise<BlogPostContent | undefined> => {
  const posts: Record<string, BlogPostContent> = {
    "getting-started": {
      title: "Getting Started with Our Services",
      date: "May 15, 2023",
      content: `
        <p>Welcome to our comprehensive guide on getting started with our services. This guide will walk you through everything you need to know to make the most of our offerings.</p>
        <h2>Understanding Our Platform</h2>
        <p>Our platform is designed with user experience in mind. The intuitive interface allows you to navigate through various features seamlessly.</p>
        <h2>Setting Up Your Account</h2>
        <p>To fully utilize our services, ensure your account is properly set up. This includes completing your profile, setting preferences, and configuring notification settings.</p>
        <h2>Exploring Key Features</h2>
        <p>Our platform offers a range of features designed to enhance your experience. Take time to explore each feature and understand how it can benefit your specific use case.</p>
        <h2>Getting Support</h2>
        <p>Should you encounter any challenges, our support team is always ready to assist. You can reach out through the help center, email, or live chat.</p>
      `,
      imageUrl: "/of3.webp",
    },
    "industry-trends": {
      title: "Industry Trends and Insights",
      date: "June 22, 2023",
      content: `
        <p>The technology landscape is constantly evolving, with new trends emerging regularly. Staying informed about these trends is crucial for businesses looking to maintain a competitive edge.</p>
        <h2>Artificial Intelligence and Machine Learning</h2>
        <p>AI and ML continue to revolutionize various industries. From automated customer service to predictive analytics, these technologies are enhancing efficiency and decision-making processes.</p>
        <h2>Cloud Computing</h2>
        <p>Cloud services are becoming increasingly sophisticated, offering more than just storage solutions. Businesses are leveraging cloud computing for complex operations and secure data management.</p>
        <h2>Cybersecurity</h2>
        <p>With the rise in digital operations, cybersecurity has become a top priority. Advanced security measures are being implemented to protect sensitive data.</p>
        <h2>Internet of Things (IoT)</h2>
        <p>IoT is expanding beyond smart homes to industrial applications, creating smarter, more efficient systems in manufacturing, healthcare, and urban planning.</p>
      `,
      imageUrl: "/of2.jpg",
    },
    "case-study-digital-transformation": {
      title: "Case Study: Digital Transformation",
      date: "July 10, 2023",
      content: `
        <p>Digital transformation is reshaping how businesses operate and deliver value to customers. This case study explores a successful digital transformation journey of a traditional manufacturing company.</p>
        <h2>Background</h2>
        <p>The company, a 50-year-old manufacturing firm, was facing challenges with outdated processes and increasing competition. They decided to embark on a digital transformation journey.</p>
        <h2>Challenges</h2>
        <p>The main challenges included resistance to change from employees, integration of new technologies with existing systems, and ensuring minimal disruption to ongoing operations.</p>
        <h2>Implementation Strategy</h2>
        <p>The transformation was implemented in phases, starting with the digitization of core processes, followed by data analytics, and finally IoT for real-time monitoring.</p>
        <h2>Results</h2>
        <p>The digital transformation resulted in a 30% increase in operational efficiency, a 25% reduction in maintenance costs, and a significant improvement in customer satisfaction scores.</p>
      `,
      imageUrl: "/office.jpeg",
    },
  };
  return Promise.resolve(posts[slug]);
};

export async function generateStaticParams() {
  return [
    { slug: "getting-started" },
    { slug: "industry-trends" },
    { slug: "case-study-digital-transformation" },
  ];
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found | TechExa Vision" };
  const description = post.content.replace(/<[^>]*>?/gm, "").slice(0, 150) + "...";
  return {
    title: post.title,
    description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] text-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4 text-[#FAFAFA]">Blog Post Not Found</h1>
          <p className="text-[#9A8F87] mb-8">The blog post you are looking for doesn&#39;t exist or has been removed.</p>
          <Button variant="outline" asChild className="border-[#B78460]/40 text-[#B78460] hover:bg-[rgba(183,132,96,0.08)]">
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
    <div className="min-h-screen bg-[#0B0B0C] text-[#FAFAFA]">
      {/* Subtle Rose Copper Gold ambient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(183,132,96,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Back button */}
        <div className="flex justify-center mb-10">
          <Button
            variant="outline"
            asChild
            className="border-[#2A2420] text-[#9A8F87] hover:border-[#B78460]/40 hover:text-[#B78460] hover:bg-[rgba(183,132,96,0.06)] transition-all duration-300"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article card */}
        <div className="max-w-3xl mx-auto bg-[#141414] rounded-3xl p-8 shadow-xl border border-[#2A2420]">
          <h1 className="font-heading text-4xl font-bold mb-3 text-[#FAFAFA]">{post.title}</h1>
          <p className="text-[#9A8F87] mb-8 border-b border-[#2A2420] pb-4 text-sm">{post.date}</p>

          <div className="relative w-full h-80 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Prose — Rose Copper Gold headings and links */}
          <div
            className="prose prose-invert max-w-none prose-headings:text-[#B78460] prose-headings:font-heading prose-a:text-[#B78460] prose-a:no-underline hover:prose-a:text-[#E5C0A0] prose-strong:text-[#FAFAFA] prose-p:text-[#9A8F87] prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
