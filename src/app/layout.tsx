"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Poppins, Playfair_Display } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./globals.css";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en" className={`dark ${poppins.variable} ${playfair.variable}`}>
      <body className="font-body bg-background text-foreground">
        <Navbar />
        <div className="min-h-screen">{isLoading ? <Loading /> : children}</div>
        <Footer />
      </body>
    </html>
  );
}
