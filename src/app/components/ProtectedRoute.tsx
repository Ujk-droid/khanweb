"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // Define public routes that don't require authentication
  const publicRoutes = ["/", "/about", "/services", "/contact", "/project", "/blog", "/team", "/verify-email"];
  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    // If not loading, not authenticated, and not on a public route, redirect to home
    if (!loading && !isAuthenticated && !isPublicRoute) {
      router.push("/");
    }
  }, [isAuthenticated, loading, pathname, router, isPublicRoute]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0C]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B78460]"></div>
          <p className="text-[#9A8F87] text-sm animate-pulse">Loading TechExa Vision...</p>
        </div>
      </div>
    );
  }

  // If not authenticated and not on a public route, don't render children (redirecting)
  if (!isAuthenticated && !isPublicRoute) {
    return (
       <div className="min-h-screen bg-[#0B0B0C]" />
    );
  }

  return <>{children}</>;
}
