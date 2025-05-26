"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        {isLoading ? <Loading /> : children}
        <Footer />
      </body>
    </html>
  );
}
