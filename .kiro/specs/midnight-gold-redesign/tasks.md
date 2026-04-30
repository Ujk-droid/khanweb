# Implementation Plan: Midnight & Gold Redesign

## Overview

Migrate the TechExa Vision website from its current inconsistent blue/purple/green theme to a unified **Midnight & Gold** aesthetic. Changes flow top-down: design system tokens first, then shared layout components, then page-level components. The migration is a pure styling change — no new routes, no data model changes, no backend work.

## Tasks

- [x] 1. Update design system — `globals.css`
  - Replace all `:root` and `.dark` CSS custom properties with Midnight & Gold HSL values (`--background: 240 10% 4%`, `--card: 240 5% 10%`, `--primary: 46 65% 52%`, `--foreground: 0 0% 98%`, `--muted-foreground: 240 4% 65%`, `--border: 240 4% 16%`, `--ring: 46 65% 52%`, `--accent: 46 65% 52%`)
  - Remove all Legacy_Blue, Legacy_Purple, and Legacy_Green values from `:root` and `.dark` blocks
  - Update `.glass` to use `rgba(9, 9, 11, 0.7)` background and `rgba(212, 175, 55, 0.15)` border
  - Update `.text-gradient` to produce a gradient from `#FAFAFA` to `#D4AF37`
  - Rename `.glow-green` → `.glow-gold` and update its `box-shadow` to Gold_Accent RGBA values
  - Update `.card-hover` hover shadow to Gold_Accent RGBA values
  - Update `.bg-grid` and `.bg-dot-pattern` to use Gold_Accent RGBA at ≤ 0.08 opacity
  - Update `.border-beam` keyframe gradient to use `#D4AF37` instead of legacy green
  - Update `.spotlight-highlight` radial gradient to use Gold_Accent RGBA
  - Update scrollbar thumb to `#D4AF37` and track to `#09090B`
  - _Requirements: 1.1–1.10, 3.1–3.8_

- [x] 2. Update design system — `tailwind.config.ts`
  - Add `gold: "#D4AF37"`, `midnight: "#09090B"`, `surface: "#18181B"`, `border-subtle: "#27272A"` colour tokens
  - Update the `techexa` colour group to replace Legacy_Blue and Legacy_Purple entries with Gold_Accent, Midnight_Background, and Surface_Color equivalents
  - Update `backgroundImage` entries (`brand-gradient`, `glow-conic`) to use `#D4AF37` instead of legacy blue/purple
  - Update `boxShadow` entries (`brand-glow`, `brand-glow-lg`) to use Gold_Accent RGBA values
  - Add `fontFamily` entries: `sans: ["var(--font-geist)", ...]` and `heading: ["var(--font-outfit)", ...]`
  - _Requirements: 2.1–2.7_

- [x] 3. Refactor `layout.tsx` into server component and create `ClientLayout.tsx`
  - [x] 3.1 Refactor `layout.tsx` to a server component
    - Remove `"use client"` directive from `layout.tsx`
    - Add `export const metadata: Metadata` with full SEO fields (title template, description, keywords, openGraph, twitter)
    - Import `Outfit` and `Geist` from `next/font/google` with `variable` and `display: "swap"` options
    - Apply `--font-outfit` and `--font-geist` CSS variables to `<html>` className
    - Set `bg-[#09090B] text-[#FAFAFA]` on `<body>` (or equivalent CSS variable classes)
    - Render `<ClientLayout>` inside `<body>` passing `children`
    - _Requirements: 4.1, 4.2_
  - [x] 3.2 Create `src/app/components/ClientLayout.tsx`
    - Add `"use client"` directive
    - Move `usePathname`, `useState`, `useEffect` loading-state logic from old `layout.tsx`
    - Render `<Navbar />`, `<Loading />`, `{children}`, `<Footer />` in correct order
    - _Requirements: 4.1, 4.2_

- [x] 4. Update `Loading.tsx` with Gold theme
  - Replace blue-to-purple progress bar gradient with Gold_Gradient (`#D4AF37` → `#F0D060`)
  - Replace Legacy_Blue RGBA logo glow with Gold_Accent RGBA (`rgba(212,175,55,…)`)
  - _Requirements: 4.3, 4.4_

- [x] 5. Update `Navbar.tsx` with Gold theme
  - Replace Legacy_Blue RGBA logo glow with Gold_Accent RGBA
  - Update brand name text gradient to `#FAFAFA` → `#D4AF37`
  - Replace blue-to-purple desktop nav link hover underline with Gold_Accent indicator
  - Replace blue-to-purple CTA button gradient with Gold_Accent background
  - Replace blue mobile nav link hover tint with Gold_Accent/10 tint
  - Replace blue-to-purple mobile CTA button with Gold_Accent background
  - On scroll > 10 px, apply Glassmorphism background using Surface_Color + Border_Color bottom border
  - _Requirements: 5.1–5.7_

- [x] 6. Update `Footer.tsx` with Gold theme
  - Replace blue-to-purple glow overlay with Gold_Accent glow overlay at low opacity
  - Replace Legacy_Blue RGBA floating background shapes with Gold_Accent RGBA
  - Update social icon links to Gold_Accent icons with Gold_Accent/20 hover background
  - Update service and company link hover colour to Gold_Accent
  - Update contact section bullet dots to Gold_Accent
  - Update logo border to Gold_Accent/50, logo glow to Gold_Accent RGBA
  - Update brand name text gradient to `#FAFAFA` → `#D4AF37`
  - Update bottom bar border to Border_Color (`#27272A`) instead of `white/10`
  - _Requirements: 6.1–6.10_

- [x] 7. Checkpoint — design system and layout complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Merge Hero components into canonical `Hero.tsx`
  - [x] 8.1 Create `src/app/components/Hero.tsx` (merged canonical)
    - Combine the richer structure of `hero-new.tsx` (logo, title, subtitle, CTA buttons, stats, scroll indicator) with the badge and `BackgroundBeams` from `hero.tsx`
    - Replace all blue/green/purple colours with Gold palette (gold orbs, Gold_Accent CTA button, Border_Color secondary button, Gold_Gradient stat values)
    - Export as `HeroSection` named export
    - _Requirements: 7.1–7.4_
  - [x] 8.2 Update `page.tsx` import to use new `Hero.tsx`
    - Change import from `hero-new.tsx` (or `hero.tsx`) to `./components/Hero`
    - _Requirements: 7.1_
  - [x] 8.3 Delete `src/app/components/hero.tsx` and `src/app/components/ui/hero-new.tsx`
    - Remove old hero files after confirming `page.tsx` compiles cleanly
    - _Requirements: 7.1_

- [x] 9. Update `services-new.tsx` with Gold theme
  - Replace blue-to-purple icon background gradient with Gold_Accent gradient
  - Replace card hover overlay with Gold_Accent/5 gradient
  - Replace card hover border with Gold_Accent/20
  - Update section divider line to Gold_Accent
  - Update "Start Your Project" CTA button to Gold_Accent background
  - _Requirements: 7.5–7.9_

- [x] 10. Create `WhyChooseUs.tsx` new component
  - Create `src/app/components/WhyChooseUs.tsx` with 4–6 differentiator cards
  - Use Surface_Color card backgrounds, Gold_Accent icon accents, gold hover borders
  - _Requirements: 7.1 (new Home page section)_

- [x] 11. Update `Work.tsx` (Testimonials) with Gold theme
  - Update "Clients Say" heading gradient to Gold_Accent instead of legacy teal/green
  - Update card hover border to Gold_Accent/50
  - Update Avatar fallback gradient to Gold_Accent
  - Confirm star ratings remain `fill-yellow-400` (already appropriate)
  - _Requirements: 9.5–9.8_

- [x] 12. Update `page.tsx` (Home) to wire up new sections
  - Import and render `<WhyChooseUs />` and `<Work />` (Testimonials) in the Home page
  - Confirm `<HeroSection />` import points to new `Hero.tsx`
  - _Requirements: 7.1_

- [x] 13. Checkpoint — Home page complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Update About page components with Gold theme
  - [x] 14.1 Update `AboutHero.tsx`
    - Pass `#D4AF37` as `particleColor` to SparklesCore
    - Replace blue-to-purple gradient overlay with Gold_Accent gradient overlay
    - Update heading gradient to `#D4AF37` → lighter gold → `#FAFAFA`
    - _Requirements: 8.1–8.3_
  - [x] 14.2 Update `about/page.tsx`
    - Update sparkles `particleColor` to `#D4AF37`
    - Update section divider to Gold_Accent
    - Update info card hover border to Gold_Accent/30
    - _Requirements: 8.4–8.6_
  - [x] 14.3 Update `Friends.tsx`
    - Update CTA buttons to Gold_Accent backgrounds and borders
    - _Requirements: 8.7_
  - [x] 14.4 Update `List.tsx`
    - Update list item hover border to Gold_Accent/30
    - _Requirements: 8.8_

- [x] 15. Update Services page components with Gold theme
  - [x] 15.1 Update `services/page.tsx`
    - Update section divider to Gold_Accent
    - Update service icons to Gold_Accent colour
    - Update HoverBorderGradient `from`/`to` props to Gold_Accent RGBA values
    - _Requirements: 9.1–9.3_
  - [x] 15.2 Update `But.tsx`
    - Ensure stat values remain `#FAFAFA`; apply Gold_Accent to any accent elements
    - _Requirements: 9.4_

- [x] 16. Update `project/page.tsx` with Gold theme
  - Replace background glow orbs with Gold_Accent/10
  - Update section divider to Gold_Accent
  - Update project card hover border to Gold_Accent/30 and box shadow to Gold_Accent
  - Update project card title hover to Gold_Gradient text
  - Update tag badges to Gold_Accent/10 background and Gold_Accent/20 border
  - Update tag badge hover to increased Gold_Accent opacity with white text
  - Update "View More on GitHub" CTA button to Gold_Accent background
  - Update project card corner glow to Gold_Accent/20
  - _Requirements: 10.1–10.9_

- [x] 17. Update Blog components with Gold theme
  - [x] 17.1 Update `blog/BlogContent.tsx`
    - Replace background glow orbs with Gold_Accent/10
    - Update "Latest Insights" badge to Gold_Accent/10 background, Gold_Accent/20 border, Gold_Accent text
    - Update heading gradient to Gold_Accent
    - Update section divider to Gold_Accent
    - _Requirements: 11.1–11.4_
  - [x] 17.2 Update `components/blog-card.tsx`
    - Update card hover border to Gold_Accent/30
    - Update "Blog" badge to Gold_Accent/20 background, Gold_Accent/30 border, Gold_Accent text
    - Update title hover colour to Gold_Accent
    - Update "Read Article" link to Gold_Accent text
    - Update bottom gradient line to Gold_Accent
    - _Requirements: 11.5–11.9_
  - [x] 17.3 Update `blog/[slug]/page.tsx`
    - Set page background to `#09090B` (Midnight_Background)
    - Set card background to `#18181B` (Surface_Color)
    - Update prose heading colour to Gold_Accent
    - Update prose link colour to Gold_Accent
    - _Requirements: 11.10–11.13_

- [x] 18. Update `team/page.tsx` with Gold theme
  - Replace background glow orbs with Gold_Accent/10
  - Update "Our Team" badge to Gold_Accent/10 background, Gold_Accent/20 border, Gold_Accent text
  - Update heading gradient to Gold_Accent
  - Update featured member card background gradient to Gold_Accent/10, border to Gold_Accent/20
  - Update featured member Avatar glow to Gold_Accent, ring to Gold_Accent/50
  - Update "Founder" badge to Gold_Accent/20 background, Gold_Accent/30 border, Gold_Accent text
  - Update featured member role text to Gold_Accent
  - Update social link hover to Gold_Accent/10 background
  - Update team grid cards to Surface_Color background
  - Update team grid card hover border to Gold_Accent/30, Avatar hover ring to Gold_Accent/50
  - Update team grid card role text to Gold_Accent
  - Update CTA section card to Gold_Accent/10 background, Gold_Accent/20 border
  - Update CTA "Learn More About Us" button to Gold_Accent background
  - _Requirements: 12.1–12.16_

- [x] 19. Update Contact page components with Gold theme
  - [x] 19.1 Update `contact/page.tsx`
    - Set background to Midnight_Background
    - Replace Legacy_Blue RGBA floating shapes with Gold_Accent RGBA
    - Update particle dots to Gold_Accent
    - Update heading gradient to Gold_Accent
    - Update form card border to Gold_Accent/30
    - Update form card heading to Gold_Accent text
    - Update input focus state to Gold_Accent border and Gold_Accent/20 ring
    - Update submit button to Gold_Accent background
    - Update contact info icon backgrounds to Gold_Accent gradient
    - Update "Get in Touch" heading to Gold_Accent text
    - Update info card border to Gold_Accent/30
    - _Requirements: 13.1–13.12_
  - [x] 19.2 Update `CssGlobe.tsx`
    - Replace legacy teal/cyan glow RGBA values with Gold_Accent RGBA
    - _Requirements: 13.4_

- [x] 20. Checkpoint — all pages complete
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 21. Write smoke tests for design system
  - [ ] 21.1 Create `src/__tests__/design-system.smoke.test.ts`
    - Assert `globals.css` contains `--background: 240 10% 4%`
    - Assert `globals.css` contains `--primary: 46 65% 52%`
    - Assert `globals.css` contains `--ring: 46 65% 52%`
    - Assert `globals.css` `.glass` class uses `rgba(9, 9, 11, 0.7)`
    - Assert `globals.css` `.text-gradient` uses `#D4AF37`
    - Assert `globals.css` scrollbar thumb uses `#D4AF37`
    - Assert `tailwind.config.ts` contains `gold: "#D4AF37"`
    - Assert `tailwind.config.ts` contains `midnight: "#09090B"`
    - Assert `tailwind.config.ts` contains `surface: "#18181B"`
    - Assert `layout.tsx` does NOT contain `"use client"` at the top level
    - Assert `layout.tsx` contains `export const metadata`
    - Assert `layout.tsx` contains `Outfit`
    - _Requirements: 1.1–1.10, 2.1–2.4, 4.1_

- [ ] 22. Write property-based tests for no legacy colour leakage
  - [ ] 22.1 Install `fast-check` dev dependency
    - Run `npm install --save-dev fast-check` in `khanweb/`
    - _Requirements: 14.1–14.5_
  - [ ]* 22.2 Write property test — Property 1: No Legacy Blue hex values
    - Create `src/__tests__/colour-consistency.property.test.ts`
    - Tag: `// Feature: midnight-gold-redesign, Property 1: No Legacy Blue Hex Values in Source Files`
    - Enumerate all `.tsx` and `.css` files under `src/`; use `fc.constantFrom(...files)` to sample; assert none contain `#3B82F6`, `#2563EB`, `#60A5FA`, `#1D4ED8` (case-insensitive variants)
    - **Property 1: No Legacy Blue Hex Values in Source Files**
    - **Validates: Requirements 14.1**
  - [ ]* 22.3 Write property test — Property 2: No Legacy Purple hex values
    - Tag: `// Feature: midnight-gold-redesign, Property 2: No Legacy Purple Hex Values in Source Files`
    - Assert no file contains `#8B5CF6`, `#7C3AED`, `#A78BFA`, `#6D28D9` (case-insensitive variants)
    - **Property 2: No Legacy Purple Hex Values in Source Files**
    - **Validates: Requirements 14.2**
  - [ ]* 22.4 Write property test — Property 3: No Legacy Green hex values
    - Tag: `// Feature: midnight-gold-redesign, Property 3: No Legacy Green Hex Values in Source Files`
    - Assert no file contains `#255F38`, `#1A3636`, `#73f3f3`, `#006A71`, `#2f7a47`, `#4ade80` (case-insensitive variants)
    - **Property 3: No Legacy Green Hex Values in Source Files**
    - **Validates: Requirements 14.3**
  - [ ]* 22.5 Write property test — Property 4: No Legacy Blue/Purple Tailwind decorative classes in TSX files
    - Tag: `// Feature: midnight-gold-redesign, Property 4: No Legacy Blue/Purple Tailwind Decorative Classes in TSX Files`
    - Enumerate all `.tsx` files; assert none match patterns `bg-blue-\d`, `text-blue-\d`, `from-blue-\d`, `to-blue-\d`, `via-blue-\d`, `border-blue-\d`, `bg-purple-\d`, `text-purple-\d`, `from-purple-\d`, `to-purple-\d`, `via-purple-\d`, `border-purple-\d`, `shadow-blue-`, `shadow-purple-`
    - **Property 4: No Legacy Blue/Purple Tailwind Decorative Classes in TSX Files**
    - **Validates: Requirements 14.4**
  - [ ]* 22.6 Write property test — Property 5: No Legacy Green Tailwind decorative classes in TSX files
    - Tag: `// Feature: midnight-gold-redesign, Property 5: No Legacy Green Tailwind Decorative Classes in TSX Files`
    - Assert no `.tsx` file matches `bg-green-\d`, `text-green-\d`, `from-green-\d`, `to-green-\d`, `border-green-\d`
    - **Property 5: No Legacy Green Tailwind Decorative Classes in TSX Files**
    - **Validates: Requirements 14.5**

- [ ] 23. Final checkpoint — run full test suite
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Migration order is dependency-safe: design tokens → layout → shared components → pages
- Property tests (22.2–22.6) validate the universal "no legacy colour leakage" invariant across all source files
- Smoke tests (21.1) validate specific design system values are correctly set
- The `glow-green` → `glow-gold` rename in `globals.css` must be reflected in any component that references the old class name
- After deleting `hero.tsx` and `hero-new.tsx` (task 8.3), verify the build compiles before proceeding
- `ClientLayout.tsx` must carry `"use client"` so that `layout.tsx` can remain a pure server component with `export const metadata`
