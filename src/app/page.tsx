import { HeroSection } from "./components/ui/hero-new";
import { ServicesCards } from "./components/ui/services-new";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden">
      {/* Hero Section with Logo */}
      <HeroSection 
        title="TechExa Vision"
        subtitle="TechExa Vision delivers cutting-edge software solutions with modern design and exceptional performance. Transform your business with our expert team."
        ctaText="Get Started"
      />

      {/* Services Section */}
      <section className="relative py-24">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0a0f1c] to-[#030712]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Comprehensive solutions tailored to your business needs
            </p>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <ServicesCards />

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl rounded-full" />
              
              <button className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#030712]">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20" />
    </main>
  );
}
