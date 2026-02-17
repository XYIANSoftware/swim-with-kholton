# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.0] - 2025-02-16

### Added

- Next.js App Router app scaffold in repo root via `create-next-app@latest .`
- TypeScript, path alias `@/*` → `./src/*`
- PrimeReact, PrimeIcons, PrimeFlex, Sass, date-fns, react-hook-form, Zustand
- Blank app baseline: default styles and Vercel/Next assets removed
- Project structure: `src/app`, `src/styles`, `src/providers`, `src/components` (common, layout, ui, pages), `src/constants`, `src/types`, `src/hooks`, `src/services`, `src/stores` with hierarchical index re-exports
- Global styles: `main.scss` load order (variables → base → utilities → themes → primereact-overrides)
- `variables.scss` with `:root` semantic tokens; `base.scss` (resets, html/body via vars); `utilities.scss` (container classes)
- Dark-synth theme: `themes/dark-synth.scss` with full variable set and dialog overrides, scoped to `data-theme="dark-synth"`
- `primereact-overrides.scss` for Prime components using only CSS variables
- ThemeProvider (client) with theme state, localStorage persistence (`app-theme`), `data-theme` on document, `setTheme` / `cycleTheme`; useTheme() throws outside provider
- PrimeReactProvider; Providers composition (ThemeProvider → PrimeReactProvider → children)
- Root layout: Prime lara-dark-blue theme CSS, PrimeIcons, PrimeFlex, main.scss; `html data-theme="dark-synth"`; beforeInteractive inline script for theme to prevent flash
- Home page: Card, Button, ThemeSwitcher using PrimeReact and @/components / @/constants
- CHANGELOG and version 0.1.0

### Changed

- ThemeProvider always renders context (fixes SSR/prerender when useTheme is used in client components).

### Fixed

- Reverted mistaken peptides copy; restored Swim with Kholton metadata and home copy.

## [0.2.0] - 2025-02-16

### Added

- **SoCal Aqua Light** theme: soft off-white/cool neutrals, aqua/cyan/ocean accents, warm coral CTA (`--cta-accent`), deep navy/charcoal text; hero gradient and dialog overrides.
- **Theme toggle**: THEMES = [socal-aqua-light, dark-synth]; THEME_LABELS "Aqua Light" / "Dark Synth"; default theme socal-aqua-light; smooth 0.3s transition on html/body.
- **Header**: sticky nav with SITE_NAME, links (Home, About, Packages, Schedule, FAQ), theme switcher (compact in nav), "Book Lesson" CTA; mobile hamburger + Sidebar with links, theme toggle, CTA.
- **Footer**: columns (Links, Contact, service area placeholder), copyright.
- **Home page sections**: Hero (split layout, headline, View Packages + Book Lesson), Trust strip (SEC, National Team, Technique, All Ages), Packages preview (3 cards + View all), How it works (4 steps), Coaching focus (5 benefit cards), Testimonials (3 placeholder cards), FAQ preview (accordion + See full FAQ), CTA band ("Ready to level up" + Book Lesson).
- **About page**: bio hero (photo placeholder), credentials strip, coaching philosophy (3 pillars), What to expect.
- **Packages page**: grid of 5 package cards (beginner → small group), policies placeholder.
- **Schedule/Contact page**: two-column (booking CTA + scheduling placeholder, inquiry form with FloatLabel inputs); form submit placeholder message.
- **FAQ page**: accordion with 7 items (ages, adults, duration, bring, location, weather, improvement).
- **Copy constants**: copy.ts, packages.ts, about.ts, nav.ts (SITE_NAME, NAV_LINKS, BOOK_LESSON_HREF).
- **Section animations**: .section-fade-in, .stagger-children with animation-delay for card grids; .surface-hover utility.
- **CTA accent**: .p-button.cta-accent / .cta-accent on links for coral (Aqua Light) or primary (Dark Synth).
- Metadata title/description updated to "Kholton Swim Coaching".

## [0.2.7] - 2025-02-16

### Changed

- **Packages page**: Switched to PrimeReact [DataView](https://primereact.org/dataview/) with `layout="grid"` and a single `itemTemplate` so every package card uses the same structure and layout. Added responsive grid (1 col → 2 → 3) and uniform card styling: fixed min-height, `.package-card-for` (line-clamp 2), `.package-card-benefits` (min-height), `.package-card-meta` so all cards are the same size and shape. Home Packages section uses the same card classes for consistent appearance.

## [0.2.6] - 2025-02-16

### Fixed

- **Accordion styling**: Our primereact-overrides were replacing Prime’s accordion rules (which live in `@layer primereact`) without keeping layout. Restored full accordion structure: padding (`--content-padding`), border-radius, `.p-accordion-toggle-icon` spacing, `.p-accordion-tab` margin, and expanded (`.p-highlight`) state so headers and content have proper padding and the PrimeIcons chevron is spaced correctly.

## [0.2.5] - 2025-02-16

### Fixed

- **Layout width and centering**: Content is now constrained to the viewport and centered consistently. Added `--content-max-width: 1200px` and `.content-wrap` so header, main, and footer use the same max width and center; `.layout-content` has `width: 100%`, `max-width: 100%`, `min-width: 0`, and `overflow-x: hidden` so nothing spills horizontally; `body` has `width: 100%`, `overflow-x: hidden`, and `min-width: 0` for correct fitting.

## [0.2.4] - 2025-02-16

### Changed

- **Global parallax background**: Background image and parallax are now applied at layout level (via `GlobalParallaxBackground` in `Providers`) so they appear on every page, not only the homepage. Light theme shows the full-viewport parallax with overlay; dark theme keeps the solid page background. Hero section no longer wraps its own `ParallaxBackground`; it’s plain content over the global background.

## [0.2.3] - 2025-02-16

### Fixed

- **Lint**: Resolved all ESLint issues: removed unused `errors` from schedule page formState; ParallaxBackground and ThemeProvider no longer call `setState` synchronously in effects (deferred via `queueMicrotask` / `requestAnimationFrame` to satisfy `react-hooks/set-state-in-effect`).

### Added

- **Next.js 15+ dynamic APIs**: `@/types/next` (and re-export from `@/types`) with `PageParams` and `SearchParamsPromise` so future dynamic routes use `await params` / `React.use(params)` and `await searchParams` / `React.use(searchParams)` correctly.

## [0.2.2] - 2025-02-16

### Fixed

- **Header (mobile)**: Hamburger menu button now uses `p-button-sm` and base SCSS spacing so it matches the "Book" button size; icon-only small buttons get consistent min dimensions in `primereact-overrides.scss`.

## [0.2.1] - 2025-02-16

### Added

- Parallax hero background using public images (background-marine.png, backgorund-one.png); ParallaxBackground component with scroll-driven parallax, mobile-safe factor, theme overlay (--hero-overlay).
- PrimeReact Ripple enabled globally (PrimeReactProvider value={{ ripple: true }}).
- Base spacing variables (--spacing-button-*, --spacing-input-*, --spacing-card) and card body padding.
- Elevation tokens (--elevation-1, --elevation-2); card shadow and header shadow; card hover lift.
- Single-button theme switcher with tooltip ("Switch to …"); smaller size override (.theme-toggle-btn).
- Smooth keyboard tabbing (scroll-margin on :focus-visible).
- Desktop centering: main width 100%; grids in section/main container use justify-content: center on lg.

### Changed

- Theme init: inline script in head (no Next Script) to fix hydration; suppressHydrationWarning on html/script.
- ThemeProvider: useLayoutEffect for theme apply; applyTheme on theme change.
- Light theme: marine navy + white palette; transparency and gloss (--hero-overlay, --gloss-color).
- Outlined button and nav link hover/focus; focus-visible full color reversal on buttons, nav, accordion.
- Hero "Book Lesson" button contrast (transparent bg, primary color text); card padding from --spacing-card.

### Fixed

- Hero parallax background not visible: section now has explicit `background: transparent`, parallax/overlay layers use `zIndex: 0`, content wrapper `zIndex: 1`; hero overlay opacity reduced (SoCal 0.55→0.35, Dark 0.45→0.3) so image shows through.
- Hero background source: light theme uses `public/kholton-bg.png` only; dark theme has no hero background (image TBD). App icons (favicon/icon) use same image via Next.js metadata: `src/app/icon.png` and `src/app/apple-icon.png` copied from `kholton-bg.png`; no `favicon.ico` (use `icon.png` for tab icon per [Next.js app-icons](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)).
- Schedule/contact form inputs: refactored to React Hook Form with proper state (Controller + controlled value/onChange); FloatLabel + InputText/InputTextarea; ARIA (aria-invalid, aria-describedby, role="alert" on errors, aria-labelledby on form); validation (required, email pattern); error messages with .p-error; theme CSS variables for inputs (--float-label-color, --input-invalid-border, --error-text-color) and .p-float-label / .p-invalid / .p-inputtextarea overrides so inputs work and match PrimeReact theme.
- Theming and clicks: aligned with [PrimeReact](https://github.com/primefaces/primereact) Lara theme; added missing design tokens to :root (--border-radius, --content-padding, --inline-spacing, --maskbg, --p-border-radius); cursor: pointer on .p-button and accordion header links, cursor: text on inputs, cursor: not-allowed on disabled buttons; border-radius and appearance on buttons; Sidebar and overlay use theme vars (--surface-overlay, --maskbg) and close button cursor; hover limited to :not(:disabled) so disabled state is clear.
- Hero background visible: main and page wrapper set to `background: transparent`; `.parallax-section.section` forced `background: transparent !important`; parallax section uses `isolation: isolate`; hero overlay lightened (0.35→0.25); no backgrounds on wrappers over the hero.
- Package cards uniform size: `.package-cards-grid` with `grid-auto-rows: minmax(20rem, 1fr)` so every row (including when the 3rd card wraps) has equal height; `.package-card` with `min-height: 20rem`, `height: 100%`, flex so cards match and CTA stays at bottom on home and packages page.
- Hero image layer stacking: parallax background layer and overlay use explicit z-index (1, 2, 3) so the image layer is never behind body/main; layer uses inset positioning; `.parallax-section .parallax-layer` has `pointer-events: none`.

### Added

- `netlify.toml`: build command `npm run build` and `NODE_VERSION = "22"` for Netlify deploys (Next.js 16 framework detection handles publish).
