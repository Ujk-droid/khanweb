# Requirements Document

## Introduction

TechExa Vision requires a complete visual redesign of its website to adopt a premium "Midnight & Gold" aesthetic. The current site uses an inconsistent mix of blue/purple gradients and forest-green theme tokens spread across `globals.css`, `tailwind.config.ts`, and every page and component. The redesign must replace every colour reference site-wide with a unified Midnight & Gold palette, update all interactive states (hover, focus, active), and ensure the new look is applied consistently across all 7 pages (Home, About, Services, Projects, Blog, Team, Contact) and every shared component (Navbar, Footer, Loading, Hero, ServicesCards, BlogCard, and all UI primitives in `components/ui/`).

The stack is Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion, located in the `khanweb/` directory.

---

## Glossary

- **Website**: The TechExa Vision Next.js application located in `khanweb/`.
- **Design_System**: The combination of `globals.css` CSS custom properties, `tailwind.config.ts` colour tokens, and the shared utility classes that define the visual language of the Website.
- **Midnight_Background**: The primary page background colour `#09090B` (Jet Charcoal).
- **Surface_Color**: The card/panel surface colour `#18181B`, used for glassmorphism and elevated surfaces.
- **Gold_Accent**: The metallic gold accent colour `#D4AF37`, used for buttons, icons, highlights, and interactive indicators.
- **Primary_Text**: The main body and heading text colour `#FAFAFA`.
- **Secondary_Text**: The subdued/muted text colour `#A1A1AA`.
- **Border_Color**: The subtle dark border colour `#27272A`.
- **Legacy_Blue**: Any existing blue colour token (e.g. `#3B82F6`, `blue-500`, `blue-600`) that must be replaced.
- **Legacy_Purple**: Any existing purple colour token (e.g. `#8B5CF6`, `purple-500`, `purple-600`) that must be replaced.
- **Legacy_Green**: Any existing forest-green colour token (e.g. `#255F38`, `#1A3636`, `#73f3f3`) that must be replaced.
- **Page**: One of the seven route pages: Home (`/`), About (`/about`), Services (`/services`), Projects (`/project`), Blog (`/blog`), Team (`/team`), Contact (`/contact`).
- **Component**: Any `.tsx` file under `khanweb/src/app/components/` or `khanweb/src/components/`.
- **UI_Primitive**: Any `.tsx` file under `khanweb/src/app/components/ui/` or `khanweb/src/components/ui/`.
- **Glassmorphism**: A visual effect combining a semi-transparent Surface_Color background with `backdrop-filter: blur()` and a Border_Color border.
- **Gold_Gradient**: A linear gradient from `#D4AF37` to a lighter gold tone (e.g. `#F0D060`) used for text gradients and decorative accents.
- **Scrollbar**: The browser scrollbar rendered by `::-webkit-scrollbar` rules in `globals.css`.

---

## Requirements

### Requirement 1: Global CSS Custom Properties

**User Story:** As a developer, I want all CSS custom properties in `globals.css` to reflect the Midnight & Gold palette, so that every component that consumes those variables automatically inherits the new theme without per-component overrides.

#### Acceptance Criteria

1. THE Design_System SHALL define `--background` as the HSL equivalent of `#09090B` (Midnight_Background).
2. THE Design_System SHALL define `--card` as the HSL equivalent of `#18181B` (Surface_Color).
3. THE Design_System SHALL define `--primary` as the HSL equivalent of `#D4AF37` (Gold_Accent).
4. THE Design_System SHALL define `--foreground` as the HSL equivalent of `#FAFAFA` (Primary_Text).
5. THE Design_System SHALL define `--muted-foreground` as the HSL equivalent of `#A1A1AA` (Secondary_Text).
6. THE Design_System SHALL define `--border` as the HSL equivalent of `#27272A` (Border_Color).
7. THE Design_System SHALL define `--ring` as the HSL equivalent of `#D4AF37` (Gold_Accent) so that focus rings use gold.
8. THE Design_System SHALL define `--accent` as the HSL equivalent of `#D4AF37` (Gold_Accent).
9. THE Design_System SHALL remove or replace all Legacy_Blue, Legacy_Purple, and Legacy_Green values from the `:root` and `.dark` blocks.
10. WHEN the `.dark` class is applied, THE Design_System SHALL use the same Midnight & Gold values so that the dark-mode block is consistent with the default theme.

---

### Requirement 2: Tailwind Configuration Colour Tokens

**User Story:** As a developer, I want the Tailwind config to expose named Midnight & Gold colour tokens, so that I can use semantic class names like `bg-gold`, `text-gold`, and `border-surface` throughout the codebase.

#### Acceptance Criteria

1. THE Design_System SHALL add a `gold` colour token in `tailwind.config.ts` with value `#D4AF37`.
2. THE Design_System SHALL add a `midnight` colour token with value `#09090B`.
3. THE Design_System SHALL add a `surface` colour token with value `#18181B`.
4. THE Design_System SHALL add a `border-subtle` colour token with value `#27272A`.
5. THE Design_System SHALL update the `techexa` colour group to replace Legacy_Blue and Legacy_Purple entries with Gold_Accent, Midnight_Background, and Surface_Color equivalents.
6. THE Design_System SHALL update `backgroundImage` entries (e.g. `brand-gradient`, `glow-conic`) to use Gold_Accent instead of Legacy_Blue and Legacy_Purple.
7. THE Design_System SHALL update `boxShadow` entries (e.g. `brand-glow`, `brand-glow-lg`) to use Gold_Accent RGBA values instead of blue RGBA values.

---

### Requirement 3: Global Utility Classes

**User Story:** As a developer, I want the utility classes in `globals.css` (`.glass`, `.text-gradient`, `.glow-green`, `.card-hover`, `.bg-grid`, `.bg-dot-pattern`) to use Midnight & Gold values, so that any component using these classes automatically renders with the correct new aesthetic.

#### Acceptance Criteria

1. THE Design_System SHALL update the `.glass` class to use `rgba(9, 9, 11, 0.7)` as the background and `rgba(212, 175, 55, 0.15)` as the border colour.
2. THE Design_System SHALL update the `.text-gradient` class to produce a gradient from `#FAFAFA` to `#D4AF37`.
3. THE Design_System SHALL rename `.glow-green` to `.glow-gold` and update its `box-shadow` values to use Gold_Accent RGBA values.
4. THE Design_System SHALL update the `.card-hover` hover shadow to use Gold_Accent RGBA values.
5. THE Design_System SHALL update `.bg-grid` and `.bg-dot-pattern` to use Gold_Accent RGBA values at low opacity (≤ 0.08) for the grid lines and dots.
6. THE Design_System SHALL update the `.border-beam` keyframe gradient to use Gold_Accent instead of Legacy_Green.
7. THE Design_System SHALL update the `.spotlight-highlight` radial gradient to use Gold_Accent RGBA instead of Legacy_Green RGBA.
8. THE Design_System SHALL update the Scrollbar thumb colour to `#D4AF37` and the track colour to `#09090B`.

---

### Requirement 4: Layout and Body Defaults

**User Story:** As a visitor, I want the page background and default text colour to match the Midnight & Gold palette from the very first render, so that there is no flash of the old blue/green theme.

#### Acceptance Criteria

1. THE Website SHALL set `bg-[#09090B]` (or the equivalent CSS variable) as the `body` background in `layout.tsx`.
2. THE Website SHALL set `text-[#FAFAFA]` as the default `body` text colour in `layout.tsx`.
3. WHEN the page is loading, THE Loading component SHALL display the progress bar using a Gold_Gradient instead of a blue-to-purple gradient.
4. WHEN the page is loading, THE Loading component SHALL display the logo glow using Gold_Accent RGBA instead of Legacy_Blue RGBA.

---

### Requirement 5: Navbar Component

**User Story:** As a visitor, I want the Navbar to use the Midnight & Gold palette for its background, logo glow, link underlines, and CTA button, so that the navigation feels premium and consistent with the rest of the site.

#### Acceptance Criteria

1. WHEN the user scrolls past 10 px, THE Navbar SHALL apply a Glassmorphism background using Surface_Color and a Border_Color bottom border.
2. THE Navbar SHALL display the logo glow using Gold_Accent RGBA instead of Legacy_Blue RGBA.
3. THE Navbar SHALL render the brand name text gradient from `#FAFAFA` to `#D4AF37`.
4. WHEN a desktop nav link is hovered, THE Navbar SHALL display a Gold_Accent underline indicator instead of a blue-to-purple gradient.
5. THE Navbar CTA button SHALL use a Gold_Accent background (solid or gradient) instead of a blue-to-purple gradient.
6. WHEN a mobile nav link is hovered, THE Navbar SHALL apply a Gold_Accent/10 background tint instead of a blue tint.
7. THE Navbar mobile CTA button SHALL use a Gold_Accent background instead of a blue-to-purple gradient.

---

### Requirement 6: Footer Component

**User Story:** As a visitor, I want the Footer to use the Midnight & Gold palette for its background, social icon accents, link hover colours, and floating background shapes, so that the page ends with a consistent premium feel.

#### Acceptance Criteria

1. THE Footer SHALL use Midnight_Background as its base background colour.
2. THE Footer SHALL replace the blue-to-purple glow overlay with a Gold_Accent glow overlay at low opacity.
3. THE Footer floating background shapes SHALL use Gold_Accent RGBA colours instead of Legacy_Blue RGBA.
4. THE Footer social icon links SHALL display Gold_Accent icons and a Gold_Accent/20 hover background instead of blue.
5. THE Footer service and company link hover colour SHALL be Gold_Accent instead of Legacy_Blue.
6. THE Footer contact section bullet dots SHALL use Gold_Accent instead of Legacy_Blue.
7. THE Footer logo border SHALL use Gold_Accent/50 instead of Legacy_Blue/50.
8. THE Footer logo glow SHALL use Gold_Accent RGBA instead of Legacy_Blue RGBA.
9. THE Footer brand name text gradient SHALL go from `#FAFAFA` to `#D4AF37`.
10. THE Footer bottom bar border SHALL use Border_Color instead of `white/10`.

---

### Requirement 7: Home Page

**User Story:** As a visitor, I want the Home page (Hero section and Services section) to use the Midnight & Gold palette, so that the first impression of the site is premium and cohesive.

#### Acceptance Criteria

1. THE HeroSection component SHALL replace the animated blue orbs with Gold_Accent orbs at low opacity.
2. THE HeroSection component SHALL render the primary CTA button with a Gold_Accent background instead of a blue-to-purple gradient.
3. THE HeroSection component SHALL render the secondary "View Our Work" button with a Border_Color border and Surface_Color background.
4. THE HeroSection stat values SHALL use a Gold_Gradient text instead of a blue-to-purple gradient text.
5. THE Home page Services section divider line SHALL use Gold_Accent instead of a blue-to-purple gradient.
6. THE Home page "Start Your Project" CTA button SHALL use a Gold_Accent background instead of a blue-to-purple gradient.
7. THE ServicesCards component SHALL replace the blue-to-purple icon background gradient with a Gold_Accent gradient.
8. WHEN a service card is hovered, THE ServicesCards component SHALL display a Gold_Accent/5 gradient overlay instead of a blue/purple overlay.
9. WHEN a service card is hovered, THE ServicesCards component SHALL display a Gold_Accent/20 border instead of a white/20 border.

---

### Requirement 8: About Page

**User Story:** As a visitor, I want the About page to use the Midnight & Gold palette for its sparkles, section dividers, info cards, and CTA buttons, so that the page is visually consistent with the rest of the site.

#### Acceptance Criteria

1. THE AboutHero component SHALL pass `#D4AF37` as the `particleColor` prop to SparklesCore instead of Legacy_Blue.
2. THE AboutHero component SHALL replace the blue-to-purple gradient overlay with a Gold_Accent gradient overlay.
3. THE AboutHero heading gradient SHALL go from `#D4AF37` via a lighter gold to `#FAFAFA`.
4. THE About section sparkles SHALL use `#D4AF37` as the `particleColor` instead of Legacy_Blue.
5. THE About section divider SHALL use Gold_Accent instead of a blue-to-purple gradient.
6. WHEN an about info card is hovered, THE About page SHALL display a Gold_Accent/30 border instead of a blue border.
7. THE Friends component CTA buttons SHALL use Gold_Accent backgrounds and borders instead of Legacy_Blue.
8. THE List component list items SHALL display a Gold_Accent/30 hover border instead of a blue hover border.

---

### Requirement 9: Services Page

**User Story:** As a visitor, I want the Services page to use the Midnight & Gold palette for its service icons, hover border gradients, section dividers, and stats, so that the page communicates premium quality.

#### Acceptance Criteria

1. THE Services page section divider SHALL use Gold_Accent instead of a blue-to-purple gradient.
2. THE Services page service icons SHALL use Gold_Accent colour instead of Legacy_Blue and Legacy_Purple colours.
3. THE HoverBorderGradient component on the Services page SHALL use Gold_Accent RGBA values for its `from` and `to` gradient props.
4. THE But component stat values SHALL remain white (`#FAFAFA`) with Gold_Accent used for any accent elements.
5. THE Work (Testimonials) component card hover border SHALL use Gold_Accent/50 instead of Legacy_Blue/50.
6. THE Work component "Clients Say" heading gradient SHALL use Gold_Accent instead of the legacy teal/green gradient.
7. THE Work component Avatar fallback gradient SHALL use Gold_Accent instead of the legacy teal/green gradient.
8. THE Work component star ratings SHALL remain yellow (`fill-yellow-400`) as they are already appropriate for the gold theme.

---

### Requirement 10: Projects Page

**User Story:** As a visitor, I want the Projects page to use the Midnight & Gold palette for its background effects, card hover states, tag badges, and CTA button, so that the portfolio section feels premium.

#### Acceptance Criteria

1. THE Projects page background glow orbs SHALL use Gold_Accent/10 instead of Legacy_Blue/10 and Legacy_Purple/10.
2. THE Projects page section divider SHALL use Gold_Accent instead of a blue-to-purple gradient.
3. WHEN a project card is hovered, THE Projects page SHALL display a Gold_Accent/30 border instead of a blue border.
4. WHEN a project card is hovered, THE Projects page SHALL display a Gold_Accent box shadow instead of a blue box shadow.
5. WHEN a project card is hovered, THE Projects page project title SHALL transition to a Gold_Gradient text instead of a blue-to-purple gradient text.
6. THE Projects page tag badges SHALL use Gold_Accent/10 background and Gold_Accent/20 border instead of Legacy_Blue equivalents.
7. WHEN a tag badge is hovered, THE Projects page SHALL increase the badge Gold_Accent opacity and display white text.
8. THE Projects page "View More on GitHub" CTA button SHALL use a Gold_Accent background instead of a blue-to-purple gradient.
9. WHEN a project card corner glow is visible, THE Projects page SHALL display a Gold_Accent/20 glow instead of a blue/purple glow.

---

### Requirement 11: Blog Page

**User Story:** As a visitor, I want the Blog page and individual blog post pages to use the Midnight & Gold palette for their background effects, badges, headings, card hover states, and read-more links, so that the content section is visually consistent.

#### Acceptance Criteria

1. THE BlogContent component background glow orbs SHALL use Gold_Accent/10 instead of Legacy_Blue/10 and Legacy_Purple/10.
2. THE BlogContent "Latest Insights" badge SHALL use Gold_Accent/10 background and Gold_Accent/20 border with Gold_Accent text instead of Legacy_Blue equivalents.
3. THE BlogContent heading gradient SHALL use Gold_Accent instead of a blue-to-purple gradient.
4. THE BlogContent section divider SHALL use Gold_Accent instead of a blue-to-purple gradient.
5. WHEN a blog card is hovered, THE BlogCard component SHALL display a Gold_Accent/30 border instead of a blue border.
6. THE BlogCard "Blog" badge SHALL use Gold_Accent/20 background and Gold_Accent/30 border with Gold_Accent text instead of Legacy_Blue equivalents.
7. WHEN a blog card title is hovered, THE BlogCard component SHALL transition the title colour to Gold_Accent instead of Legacy_Blue.
8. THE BlogCard "Read Article" link SHALL use Gold_Accent text instead of Legacy_Blue text.
9. THE BlogCard bottom gradient line SHALL use Gold_Accent instead of a blue-to-purple gradient.
10. THE Blog post detail page background SHALL use Midnight_Background (`#09090B`) instead of `gray-950`.
11. THE Blog post detail page card background SHALL use Surface_Color (`#18181B`) instead of `gray-900`.
12. THE Blog post detail page prose heading colour SHALL use Gold_Accent instead of `purple-300`.
13. THE Blog post detail page prose link colour SHALL use Gold_Accent instead of `purple-400`.

---

### Requirement 12: Team Page

**User Story:** As a visitor, I want the Team page to use the Midnight & Gold palette for its background effects, featured member card, team grid cards, badges, social link hovers, and CTA section, so that the team section feels premium and consistent.

#### Acceptance Criteria

1. THE Team page background glow orbs SHALL use Gold_Accent/10 instead of Legacy_Blue/10 and Legacy_Purple/10.
2. THE Team page "Our Team" badge SHALL use Gold_Accent/10 background and Gold_Accent/20 border with Gold_Accent text instead of Legacy_Blue equivalents.
3. THE Team page heading gradient SHALL use Gold_Accent instead of a blue-to-purple gradient.
4. THE Team page featured member card background gradient SHALL use Gold_Accent/10 instead of Legacy_Blue/10 and Legacy_Purple/10.
5. THE Team page featured member card border SHALL use Gold_Accent/20 instead of Legacy_Blue/20.
6. THE Team page featured member Avatar glow SHALL use Gold_Accent instead of a blue-to-purple gradient.
7. THE Team page featured member Avatar ring SHALL use Gold_Accent/50 instead of Legacy_Blue/50.
8. THE Team page "Founder" badge SHALL use Gold_Accent/20 background and Gold_Accent/30 border with Gold_Accent text instead of Legacy_Blue equivalents.
9. THE Team page featured member role text SHALL use Gold_Accent instead of Legacy_Blue.
10. WHEN a social link is hovered on the featured member card, THE Team page SHALL display a Gold_Accent/10 background instead of a blue tint.
11. THE Team grid cards SHALL use Surface_Color as their background instead of `gray-800/50`.
12. WHEN a team grid card is hovered, THE Team page SHALL display a Gold_Accent/30 border instead of a blue border.
13. WHEN a team grid card Avatar is hovered, THE Team page SHALL display a Gold_Accent/50 ring instead of a blue ring.
14. THE Team grid card role text SHALL use Gold_Accent instead of Legacy_Blue.
15. THE Team page CTA section card SHALL use Gold_Accent/10 background gradient and Gold_Accent/20 border instead of Legacy_Blue equivalents.
16. THE Team page CTA "Learn More About Us" button SHALL use a Gold_Accent background instead of a blue-to-purple gradient.

---

### Requirement 13: Contact Page

**User Story:** As a visitor, I want the Contact page to use the Midnight & Gold palette for its background, globe glow, heading gradient, form card, input focus states, submit button, and contact info icons, so that the contact experience feels premium.

#### Acceptance Criteria

1. THE Contact page background SHALL use Midnight_Background instead of `gray-900/gray-800/black` gradient.
2. THE Contact page floating background shapes SHALL use Gold_Accent RGBA colours instead of Legacy_Blue RGBA.
3. THE Contact page particle dots SHALL use Gold_Accent instead of Legacy_Blue.
4. THE CssGlobe component glow effects SHALL use Gold_Accent RGBA instead of the legacy teal/cyan colours.
5. THE Contact page heading gradient SHALL use Gold_Accent instead of a blue-to-purple gradient.
6. THE Contact page form card border SHALL use Gold_Accent/30 instead of Legacy_Blue/30.
7. THE Contact page form card heading SHALL use Gold_Accent text instead of Legacy_Blue text.
8. WHEN a form input is focused, THE Contact page SHALL display a Gold_Accent border and Gold_Accent/20 ring instead of Legacy_Blue equivalents.
9. THE Contact page submit button SHALL use a Gold_Accent background instead of a blue-to-purple gradient.
10. THE Contact page contact info icon backgrounds SHALL use Gold_Accent gradient instead of a blue-to-purple gradient.
11. THE Contact page "Get in Touch" heading SHALL use Gold_Accent text instead of Legacy_Blue text.
12. THE Contact page info card border SHALL use Gold_Accent/30 instead of Legacy_Blue/30.

---

### Requirement 14: Consistency and No Legacy Colour Leakage

**User Story:** As a developer, I want to ensure no Legacy_Blue, Legacy_Purple, or Legacy_Green colour values remain anywhere in the codebase after the redesign, so that the Midnight & Gold theme is truly complete and maintainable.

#### Acceptance Criteria

1. THE Website SHALL contain no hardcoded Legacy_Blue hex values (e.g. `#3B82F6`, `#2563EB`, `#60A5FA`) in any `.tsx` or `.css` file after the redesign.
2. THE Website SHALL contain no hardcoded Legacy_Purple hex values (e.g. `#8B5CF6`, `#7C3AED`, `#A78BFA`) in any `.tsx` or `.css` file after the redesign.
3. THE Website SHALL contain no hardcoded Legacy_Green hex values (e.g. `#255F38`, `#1A3636`, `#73f3f3`, `#006A71`) in any `.tsx` or `.css` file after the redesign.
4. THE Website SHALL contain no Tailwind utility classes referencing `blue-` or `purple-` colour scales for decorative/brand purposes (e.g. `bg-blue-500`, `text-purple-400`, `from-blue-600`) in any `.tsx` file after the redesign.
5. THE Website SHALL contain no Tailwind utility classes referencing `green-` colour scales for decorative/brand purposes in any `.tsx` file after the redesign.
6. WHEN a new component is added to the Website, THE Design_System SHALL provide sufficient named tokens (gold, midnight, surface, border-subtle) so that the developer does not need to use hardcoded hex values.
