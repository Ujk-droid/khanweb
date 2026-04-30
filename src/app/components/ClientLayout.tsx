"use client";

import React from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import { ToastProvider } from "./ui/custom-toast.tsx";

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
