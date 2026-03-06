# TechExa Vision - SaaS Redesign Documentation

## Overview
Your TechExa Vision website has been redesigned with a premium, modern SaaS aesthetic inspired by Linear and Vercel, using the forest green theme color `#255F38`.

## Theme Colors

### Primary Colors
- **Background**: `#030712` (Very dark gray/black)
- **Primary Green**: `#255F38` (Deep forest green)
- **Green Dark**: `#1a4a2b`
- **Green Light**: `#2f7a47`
- **Accent Green**: `#4ade80` (Bright green for highlights)

### Secondary Backgrounds
- **Bg Secondary**: `#0a0f1c`
- **Bg Tertiary**: `#111827`

## Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900
- **Letter-spacing**: Tight for headings

## New Components Created

### 1. UI Components (`src/app/components/ui/`)

#### Aurora Background
```tsx
import { AuroraBackground } from "./ui/aurora-background"

<AuroraBackground radialGradient="conic-gradient(from 90deg at 50% 50%, #0000 90%, #255F38 180deg, #0000 270deg)">
  {children}
</AuroraBackground>
```

#### Background Beams (Updated)
```tsx
import { BackgroundBeams } from "./ui/background-beams"

<BackgroundBeams className="opacity-40" />
```

#### Spotlight & SpotlightCard
```tsx
import { SpotlightCard } from "./ui/spotlight"

<SpotlightCard>
  <div>Your card content</div>
</SpotlightCard>
```

#### MovingBorder & MovingBorderButton
```tsx
import { MovingBorderButton } from "./ui/moving-border"

<MovingBorderButton
  duration={3000}
  borderRadius={12}
  from="#255F38"
  to="#2f7a47"
>
  Button Text
</MovingBorderButton>
```

#### BentoGrid (Bento Box Layout)
```tsx
import { BentoGrid, BentoCard, BentoCardHeader, BentoCardTitle, BentoCardDescription, BentoCardContent } from "./ui/bento-grid"

<BentoGrid>
  <BentoCard colSpan={2} rowSpan={1}>
    <BentoCardHeader>
      <BentoCardTitle>Title</BentoCardTitle>
    </BentoCardHeader>
    <BentoCardDescription>Description</BentoCardDescription>
    <BentoCardContent>Content</BentoCardContent>
  </BentoCard>
</BentoGrid>
```

### 2. Page Components

#### Loading Component (`src/app/components/Loading.tsx`)
- Particle animation with forest green theme
- Typewriter effect: "Building Your Digital Future"
- Progress bar with gradient
- Logo with glow effect

#### Hero Section (`src/app/components/hero.tsx`)
- Background Beams effect
- Grid pattern overlay
- Gradient text: White to `#4ade80`
- MovingBorder CTA button
- Stats section
- Badge with Sparkles icon

#### Services Section (`src/app/components/services-bento.tsx`)
- Bento Grid layout (9 service cards)
- Spotlight hover effect on each card
- Icons for each service
- CTA section at bottom

#### Navbar (`src/app/components/Navbar.tsx`)
- Glassmorphic design
- Backdrop blur: 10px
- Bottom border: `1px solid rgba(37, 95, 56, 0.2)`
- Animated underline on hover
- Mobile responsive menu

#### Footer (`src/app/components/Footer.tsx`)
- Updated with forest green theme
- Floating background shapes
- Social media links
- Contact information

## Configuration Files Updated

### 1. Tailwind Config (`tailwind.config.ts`)
```ts
// Added theme colors
techexa: {
  green: "#255F38",
  greenDark: "#1a4a2b",
  greenLight: "#2f7a47",
  bg: "#030712",
  bgSecondary: "#0a0f1c",
  bgTertiary: "#111827",
}

// Added animations
animation: {
  spotlight: "spotlight 2s ease .75s 1 forwards",
  shimmer: "shimmer 2s linear infinite",
  "border-beam": "border-beam calc(var(--duration)*1s) linear infinite",
  marquee: "marquee var(--duration) linear infinite",
  meteor: "meteor 5s linear infinite",
}

// Updated fonts
fontFamily: {
  sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  heading: ["var(--font-inter)", "system-ui", "sans-serif"],
  mono: ["var(--font-geist-mono)", "monospace"],
}
```

### 2. Global CSS (`src/app/globals.css`)
- Updated CSS variables for dark theme
- Custom scrollbar with green theme
- Glass morphism utility class
- Text gradient utility
- Glow effects
- Grid and dot pattern backgrounds

### 3. Layout (`src/app/layout.tsx`)
- Changed font to Inter
- Updated theme to dark mode default
- Background: `#030712`

### 4. Home Page (`src/app/page.tsx`)
```tsx
import Hero from "./components/hero"
import Services from "./components/services-bento"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <Hero />
      <Services />
    </main>
  )
}
```

## CSS Utility Classes

### Background Effects
```css
.bg-grid           /* Grid pattern */
.bg-dot-pattern    /* Dot pattern */
.bg-noise          /* Noise texture */
.spotlight-highlight /* Spotlight radial gradient */
```

### Effects
```css
.glass             /* Glassmorphism */
.text-gradient     /* Gradient text */
.glow-green        /* Green glow shadow */
.card-hover        /* Hover lift effect */
.animate-glow      /* Pulsing glow */
.animate-float     /* Floating animation */
.animate-shimmer   /* Shimmer effect */
```

## Running the Project

### Development
```bash
cd khanweb
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Key Design Principles

1. **Dark First**: All designs start with dark background `#030712`
2. **Subtle Glows**: Use green (`#255F38`) for subtle glows and gradients
3. **Glassmorphism**: Backdrop blur for floating elements
4. **Tight Spacing**: Inter font with tight letter-spacing
5. **Smooth Animations**: 300-500ms transitions
6. **Accessibility**: Maintain contrast ratios for text

## Component Customization

### Changing Theme Color
Update in `tailwind.config.ts`:
```ts
techexa: {
  green: "#YOUR_COLOR",
  greenDark: "#DARKER_VERSION",
  greenLight: "#LIGHTER_VERSION",
}
```

### Adjusting Animation Speed
Update in component props:
```tsx
<MovingBorderButton duration={5000} /> // Slower
<MovingBorderButton duration={2000} /> // Faster
```

### Changing Gradient Direction
```tsx
radialGradient="conic-gradient(from 180deg at 50% 50%, #255F38 0deg, #2f7a47 180deg, #255F38 360deg)"
```

## Files Modified/Created

### Modified
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/components/Navbar.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/Loading.tsx`
- `src/app/components/hero.tsx`
- `src/app/components/ui/background-beams.tsx`
- `tailwind.config.ts`

### Created
- `src/app/components/ui/aurora-background.tsx`
- `src/app/components/ui/spotlight.tsx`
- `src/app/components/ui/moving-border.tsx`
- `src/app/components/ui/bento-grid.tsx`
- `src/app/components/services-bento.tsx`

## Next Steps

To complete the redesign across all pages:

1. **About Page**: Update with new theme colors and components
2. **Project Page**: Use BentoGrid or SpotlightCard for project showcase
3. **Team Page**: Update with new gradient and animation effects
4. **Blog Page**: Update cards with new hover effects
5. **Contact Page**: Update form with new theme colors

## Support

For issues or questions about the implementation, refer to:
- Aceternity UI: https://ui.aceternity.com
- Framer Motion: https://www.framer.com/motion
- Tailwind CSS: https://tailwindcss.com/docs
