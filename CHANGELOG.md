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
