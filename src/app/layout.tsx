import type { Metadata } from "next";
import { Outfit, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

// ── Fonts ──────────────────────────────────────────────────────────────────
// Only fonts actually wired to a Tailwind class (font-sans / font-heading /
// font-mono) or referenced directly by a component (Outfit — AiChip, WorldMap
// SVG text) are loaded. Montserrat and Inter were loaded but never used
// anywhere and have been removed.
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
        url: "https://res.cloudinary.com/ecasprck/image/upload/w_1200,h_630,c_pad,b_rgb:0B0B0C,q_auto,f_jpg/techexa-vision/logo1.jpg",
        width: 1200,
        height: 630,
        alt: "TechExa Vision Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechExa Vision — Premium Software Development",
    description:
      "Premium software development from Karachi, Pakistan. Web, mobile, and AI solutions.",
    images: [
      "https://res.cloudinary.com/ecasprck/image/upload/w_1200,h_630,c_pad,b_rgb:0B0B0C,q_auto,f_jpg/techexa-vision/logo1.jpg",
    ],
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

// ── Organization JSON-LD ───────────────────────────────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechExa Vision",
  url: "https://techexavision.com",
  logo: "https://res.cloudinary.com/ecasprck/image/upload/q_auto/techexa-vision/logo1.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Garden East",
    addressLocality: "Karachi",
    addressCountry: "Pakistan",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@techexavision.com",
    telephone: "+92-331-2436713",
    areaServed: "PK",
  },
  sameAs: [
    "https://www.facebook.com/TechexaVision",
    "https://www.instagram.com/_techexavision_official_/",
    "https://www.linkedin.com/company/111404936",
  ],
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
      className={`dark ${outfit.variable} ${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans bg-[#0B0B0C] text-[#F5F0EB] antialiased bg-deep-space">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>

        {/* ── Google Analytics ── */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EB0B386Y1G"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EB0B386Y1G', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* ── Meta Pixel (Facebook Pixel) ── */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1513748648732090');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1513748648732090&ev=PageView&noscript=1"
            alt="facebook-pixel-fallback"
          />
        </noscript>
      </body>
    </html>
  );
}