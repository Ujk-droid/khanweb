"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./globals.css";

// Inter Font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Show loading only on route changes (not initial load)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Reduced from 2000ms to 300ms

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans bg-[#030712] text-white antialiased">
        <Navbar />
        <div className="min-h-screen">{isLoading ? <Loading /> : children}</div>
        <Footer />
      </body>
    </html>
  );
}
