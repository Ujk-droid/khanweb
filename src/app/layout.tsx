import type { Metadata } from "next";
import { Outfit, Geist, Geist_Mono, Space_Grotesk, Inter, Montserrat } from "next/font/google";
import Script from "next/script"; // 1. Script component import kiya
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

// ── Fonts ──────────────────────────────────────────────────────────────────
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// ── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "TechExa Vision — Premium Software Development",
    template: "%s | TechExa Vision",
  },
  description:
    "TechExa Vision delivers cutting-edge web, mobile, and AI solutions. Transform your business with our expert team in Karachi, Pakistan.",
  keywords: [
    "software development",
    "web design",
    "mobile apps",
    "AI solutions",
    "full-stack development",
    "UI/UX design",
    "TechExa Vision",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "TechExa Vision", url: "https://techexavision.com" }],
  creator: "TechExa Vision",
  metadataBase: new URL("https://techexavision.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techexavision.com",
    siteName: "TechExa Vision",
    title: "TechExa Vision — Premium Software Development",
    description:
      "Cutting-edge software solutions with modern design and exceptional performance. Web, mobile, and AI development from Karachi, Pakistan.",
    images: [
      {
        url: "/logo1.jpg",
        width: 400,
        height: 400,
        alt: "TechExa Vision Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechExa Vision — Premium Software Development",
    description:
      "Premium software development from Karachi, Pakistan. Web, mobile, and AI solutions.",
    images: ["/logo1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ── Root Layout (Server Component) ────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable}`}
    >
      {/* 2. Google Analytics Scripts yahan add kiye hain */}
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KNE8TN14OP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNE8TN14OP', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-sans bg-[#0B0B0C] text-[#F5F0EB] antialiased bg-deep-space">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}