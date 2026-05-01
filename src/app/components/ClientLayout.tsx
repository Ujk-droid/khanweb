"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastProvider } from "./ui/custom-toast";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <Navbar />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </ToastProvider>
  );
}
