import HeroSection from "@/app/components/Hero";
import { ServicesCards } from "@/app/components/ui/services-new";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import TestimonialsSection from "@/app/components/Work";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-[#FAFAFA] overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <HeroSection
        subtitle="TechExa Vision delivers cutting-edge software solutions with modern design and exceptional performance. Transform your business with our expert team."
        ctaText="Start Your Project"
        ctaHref="/contact"
      />

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#0B0B0C]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#141414]/30 to-[#0B0B0C] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-[#FAFAFA] md:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#9A8F87] max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#B78460] to-transparent mx-auto" />
          </div>

          {/* Services Grid */}
          <ServicesCards />

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-[#0B0B0C] transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #B78460 0%, #E5C0A0 100%)",
                boxShadow: "0 0 15px rgba(183,132,96,0.2)",
              }}
            >
              Start Your Project
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <TestimonialsSection />

    </main>
  );
}
