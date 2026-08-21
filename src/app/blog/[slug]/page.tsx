import Link from "next/link";
import CloudinaryImage from "../../components/CloudinaryImage";
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
    "website-development-cost-pakistan-2026": {
      title: "Website Development Cost in Pakistan (2026 Guide)",
      date: "July 8, 2026",
      content: `
        <p>If you're planning to get a website built in Pakistan, the first question is almost always: how much will it actually cost? The honest answer is that it depends heavily on the type of website, but here is a realistic breakdown based on the current 2026 market.</p>
        <h2>Basic Business Website</h2>
        <p>A simple 5 to 10 page business website — the kind most small businesses and service providers need — typically costs between PKR 35,000 and PKR 100,000. This usually includes a modern design, mobile responsiveness, a contact form, and basic SEO setup.</p>
        <h2>E-commerce Website</h2>
        <p>If you want to sell products online, pricing shifts based on the platform. A template-based Shopify or WooCommerce store generally starts around PKR 80,000, while a fully custom online store with unique features, multiple payment gateways (JazzCash, EasyPaisa, card payments), and advanced product management can go from PKR 150,000 to PKR 300,000 or more.</p>
        <h2>Custom Web Applications</h2>
        <p>For businesses that need more than a website — booking systems, client portals, dashboards, or internal tools — costs start around PKR 200,000 and scale up based on complexity, integrations, and the number of user roles involved.</p>
        <h2>What Affects the Final Price</h2>
        <p>Several factors move the price up or down: the number of pages, whether the design is custom or template-based, third-party integrations (payment gateways, CRMs, APIs), and whether SEO is included from the start. A website without proper SEO setup often ends up needing a second investment later just to become visible on Google.</p>
        <h2>Our Advice</h2>
        <p>Don't just compare prices — compare what's included. A cheap website with no SEO, no mobile optimization, and no ongoing support usually costs more in the long run once you factor in the redo.</p>
        <p><strong>Not sure what your project would actually cost?</strong> <a href="/contact">Get a free, no-obligation quote from our team</a> and we'll break down the exact cost for your specific needs.</p>
      `,
      imageUrl: "techexa-vision/five",
    },
    "signs-business-needs-custom-web-application": {
      title: "7 Signs Your Business Needs a Custom Web Application",
      date: "July 8, 2026",
      content: `
        <p>Many businesses stick with spreadsheets and generic apps far longer than they should — not because it's the right choice, but because switching feels like a big step. Here are 7 clear signs it's time to consider a custom web application.</p>
        <h2>1. Your Spreadsheets Are Crashing or Slowing Down</h2>
        <p>If your Excel files take minutes to open or freeze constantly, your data has already outgrown spreadsheets. A custom system handles this volume instantly.</p>
        <h2>2. Your Team Repeats the Same Manual Tasks Daily</h2>
        <p>Manually copying data between tools, retyping orders, or re-entering customer details wastes hours every week — hours that automation could eliminate entirely.</p>
        <h2>3. You're Using 4-5 Disconnected Tools</h2>
        <p>When your CRM, invoicing, and inventory systems don't talk to each other, your team spends more time reconciling data than using it.</p>
        <h2>4. You Can't Get Real-Time Reports</h2>
        <p>If getting a simple performance report means exporting from three platforms and manually combining them, you're missing the real-time insight a custom dashboard would give you instantly.</p>
        <h2>5. Off-the-Shelf Software Almost Fits, But Not Quite</h2>
        <p>If you're paying for a SaaS tool but still building workarounds for the features it lacks, you're already paying for something that doesn't fully work for you.</p>
        <h2>6. Your Business Model Is Unique</h2>
        <p>If no existing software matches how your business actually operates, that's usually a strong sign a tailored solution will pay for itself quickly.</p>
        <h2>7. You're Growing Fast and Your Tools Aren't Keeping Up</h2>
        <p>Generic tools often cap users, storage, or features. A custom application is built to scale alongside your business instead of limiting it.</p>
        <p><strong>Recognize 3 or more of these signs?</strong> <a href="/contact">Talk to our team for a free consultation</a> — we'll help you figure out exactly what kind of solution makes sense for your business.</p>
      `,
      imageUrl: "techexa-vision/four",
    },
    "ai-chatbots-small-business-pakistan": {
      title: "Do WhatsApp & AI Chatbots Actually Help Small Businesses in Pakistan?",
      date: "July 8, 2026",
      content: `
        <p>With over 110 million WhatsApp users in Pakistan, businesses are increasingly asking whether an AI chatbot is worth the investment — or just another tech trend. Here's an honest look.</p>
        <h2>What an AI Chatbot Actually Does</h2>
        <p>A well-built chatbot can answer FAQs, take orders, qualify leads, and provide instant replies on WhatsApp, your website, or Facebook — 24/7, without a human needing to be online.</p>
        <h2>Real Results Businesses Are Seeing</h2>
        <p>Local examples show meaningful impact: e-commerce stores using WhatsApp chatbots have cut support costs significantly while handling a much higher volume of order-tracking queries automatically. Retail businesses report freeing up hours every day that used to go into answering the same questions repeatedly.</p>
        <h2>Why It Matters More in Pakistan Specifically</h2>
        <p>Pakistani customers message in English, Urdu, and Roman Urdu — often within the same conversation. A properly built chatbot understands all three and replies naturally, which builds more trust than a rigid, English-only bot.</p>
        <h2>Which Businesses Benefit Most</h2>
        <p>E-commerce and retail (order automation, cart recovery), healthcare (appointment booking), real estate (lead qualification), and education (admissions support) tend to see the fastest returns.</p>
        <h2>Is It Worth It for a Small Business?</h2>
        <p>If you're currently answering the same 10-15 questions manually, every single day, the math usually works in your favor — a chatbot handles that volume instantly and lets you focus on the conversations that actually need a human touch.</p>
        <p><strong>Curious what a chatbot could handle for your specific business?</strong> <a href="/contact">Request a free demo</a> and we'll show you exactly how it would work for your customers.</p>
      `,
      imageUrl: "techexa-vision/two",
    },
  };
  return Promise.resolve(posts[slug]);
};

export async function generateStaticParams() {
  return [
    { slug: "website-development-cost-pakistan-2026" },
    { slug: "signs-business-needs-custom-web-application" },
    { slug: "ai-chatbots-small-business-pakistan" },
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
            <CloudinaryImage
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