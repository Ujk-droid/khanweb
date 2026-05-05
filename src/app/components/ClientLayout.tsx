"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastProvider } from "./ui/custom-toast";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import ProtectedRoute from "./ProtectedRoute";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

function AuthModals() {
  const { 
    isLoginModalOpen, 
    setLoginModalOpen, 
    isSignupModalOpen, 
    setSignupModalOpen 
  } = useAuth();

  return (
    <>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
        onSwitchToSignup={() => {
          setLoginModalOpen(false);
          setSignupModalOpen(true);
        }}
      />
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setSignupModalOpen(false)} 
        onSwitchToLogin={() => {
          setSignupModalOpen(false);
          setLoginModalOpen(true);
        }}
      />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ToastProvider>
        <Navbar />
        <div className="min-h-screen">
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </div>
        <Footer />
        <AuthModals />
      </ToastProvider>
    </AuthProvider>
  );
}
