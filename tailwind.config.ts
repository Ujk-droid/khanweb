import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ── Rose Copper Gold Design Tokens ────────────────────────
        copper: "#B78460",          // Rose Copper Gold — primary accent
        champagne: "#E5C0A0",       // Sand/Champagne — highlights
        bronze: "#8A5A3C",          // Dark Bronze — gradient end
        midnight: "#0B0B0C",        // Matte Charcoal Black — page background
        surface: "#141414",         // Elevated Surface — cards/panels
        "border-subtle": "#2A2420", // Warm Dark Border
        // ── TechExa Vision semantic palette ───────────────────────
        techexa: {
          copper: "#B78460",
          champagne: "#E5C0A0",
          bronze: "#8A5A3C",
          bg: "#0B0B0C",
          bgSurface: "#141414",
          bgElevated: "#1A1614",
          border: "#2A2420",
          textPrimary: "#F5F0EB",
          textSecondary: "#9A8F87",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) scale(0.8)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "border-beam": {
          "100%": { offsetDistance: "100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        meteor: "meteor 5s linear infinite",
      },
      fontFamily: {
        // Geist for body, Space Grotesk for headings
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom, #0B0B0C, #141414)",
        // Copper conic gradient for decorative elements
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #B78460 0deg, #E5C0A0 180deg, #B78460 360deg)",
        // Rose Copper brand gradient
        "brand-gradient": "linear-gradient(135deg, #B78460 0%, #8A5A3C 100%)",
        // Subtle copper-to-transparent for section fades
        "copper-fade": "linear-gradient(to bottom, rgba(183,132,96,0.06), transparent)",
      },
      boxShadow: {
        // Copper glow shadows
        "copper-glow": "0 0 15px rgba(183, 132, 96, 0.25)",
        "copper-glow-lg": "0 0 40px rgba(183, 132, 96, 0.30), 0 0 80px rgba(183, 132, 96, 0.10)",
        "copper-glow-sm": "0 0 8px rgba(183, 132, 96, 0.18)",
        // Card pressed/embossed look
        "card-pressed": "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.35), 0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(183,132,96,0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
