# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Fixed

- **Home hero section**: Hero content (title, description, View Packages / Book Lesson buttons, image area) is now center-aligned at all breakpoints to match the intended layout.
- **Mobile sidebar theme**: Sidebar panel now uses app theme variables (`--surface-card`, `--text-color`, etc.) so light/dark theme applies when the menu is open; layout still comes from PrimeReact.
- **About page Stepper**: "What to expect" Next/Back did nothing. Stepper is now controlled via `activeStep` and `onChangeStep` instead of ref `nextCallback`/`prevCallback`; buttons update step state so navigation works.
- **Mobile sidebar**: Sidebar content was not visible when opened. Root cause: our `.p-sidebar-content` override in `base.scss` replaced PrimeReact’s rule and omitted `flex-grow: 1`, so the content area collapsed. Removed that override and the extra `.sidebar-menu.p-sidebar` bandaid rules; sidebar now relies on PrimeReact’s structure (see [Sidebar API](https://primereact.org/sidebar/)). Only theme-style overrides remain (`.p-sidebar` background/color/border, header close icon, mask).

### Added

- **About page**: New TabView tab "Hours & pricing" with intro and three philosophy-style bullets (confirm rates when you book, flexible scheduling, packages for value). Copy in `HOURS_AND_PRICING` in `@/constants/about`.

### Fixed

- **FAQ page runtime error**: `child.type._payload.value.find is not a function` — PrimeReact Accordion was rendered from a Server Component, so its children (AccordionTab) had a shape that broke PrimeReact’s internal check. The accordion is now rendered inside a client component `FAQAccordion` (`@/components/pages/faq`); the FAQ page (server) passes `items={allFaq}` and the client component renders Accordion + AccordionTab.

### Added

- **Documentation**: README updated with Public assets (bg images, app icons for small use only, OG), SEO and metadata (robots, seo.ts, 404), E2E script note, and Documentation/versioning section. CHANGELOG remains the source of truth for code changes.
- **Verify lint and build**: Added `.cursor/rules/verify-lint-build.mdc` — run `npm run lint` and `npm run build` when making changes to verify before committing. README Getting started lists lint, build, and E2E commands.
- **404 page layout**: Content is center-justified and constrained (max-width 32rem, flex column align-items-center text-center) so it looks good on large screens; removed reliance on .container for this page.
- **Sidebar theme switcher**: Theme control in the mobile sidebar was invisible/non-functional (Dropdown overlay z-index in sidebar). Replaced with PrimeReact SelectButton: two buttons "Light" and "Dark" (labels simplified from "Aqua Light" / "Dark Synth"), no overlay, so clicking works. Theme labels in constants are now "Light" and "Dark".
- **Sidebar menu style**: Mobile side panel is now a proper menu: nav with `<ul>`/`<li>`, list-style. Current route is highlighted (primary color, font-weight 600, highlight background, 3px left border) and exposed to screen readers with `aria-current="page"`. Active detection uses `usePathname()` (exact match for `/`, pathname match or prefix for others). Theme and Book Lesson sit below the nav list with a separator.
- **Playwright MCP** for Cursor: `.cursor/mcp.json` configures the Playwright MCP server so the agent can navigate to localhost, click, and take snapshots. README section "Browser automation (MCP)" documents first-time setup (`npx playwright install`) and restarting Cursor.
- **E2E tests**: Playwright installed; `e2e/browse-and-verify.spec.ts` visits all routes, exercises View Packages / Book Lesson links, checks UI (About “Meet your coach”, Packages “Choose Package”, FAQ heading, 404 + Back to Home, footer Privacy/Terms), and asserts no console errors (expected 404 resource error when visiting a bad URL is ignored). Run with `npm run test:e2e` (uses `reuseExistingServer: true`; start dev server on port 3001 first or let Playwright use an existing one).

## [0.2.17] - 2026-02-17

### Fixed

- **Next.js 15+ async params/searchParams**: Resolved "params are being enumerated" and "searchParams were accessed directly" warnings. Root layout and all pages now treat `params` and `searchParams` as Promises: server components `await` them; client components (About, Packages) unwrap with `React.use()`. Added `EMPTY_PARAMS_PROMISE` / `EMPTY_SEARCH_PARAMS_PROMISE` in `@/types/next` for client fallbacks.

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

## [0.2.10] - 2025-02-16

### Added

- **Trust strip (SEC Swimmer, etc.)**: Trust items are clickable; each opens a PrimeReact Dialog overlay with a short detail (title + body). Copy constants extended with `TrustItemId`, `detail.title` and `detail.body` per item. TrustStrip is a client component with Dialog; same strip appears on the Packages page so credentials are visible and clickable there too.

### Fixed

- **Header (mobile)**: Hamburger menu button now opens the sidebar reliably: added explicit `type="button"` and a stable `openMobileMenu` callback via `useCallback` so the PrimeReact Button receives a consistent click handler (per PrimeReact Button docs).

### Changed

- **Centering (all screen sizes)**: Layout chain now forces full width so `.container` centers with margin auto: page root (`.flex.flex-column.min-h-screen`) and `.section` have explicit `width: 100%`; main/header/footer get `min-width: 0` to avoid flex overflow. Hero content is centered on small screens: `justify-content-center md:justify-content-start`, `text-center md:text-left` on copy, and `justify-content-center md:justify-content-start` on the button row.
- **Global background**: Background is now fixed and does not move on scroll; only page content scrolls. GlobalParallaxBackground no longer uses scroll-driven transform (removed offset, scroll/resize listeners). Background covers the viewport (position: fixed, inset: 0, background-size: cover).
- **Centering (PrimeFlex)**: Layout and grids now use PrimeFlex-style centering per primereact.org and primeflex.org. `.layout-content` uses `display: flex; flex-direction: column; align-items: center` so content centers; `.layout-content > *` has `width: 100%` so header/main/footer span full width and inner `.container` / `.content-wrap` center via margin auto. DataView grid gets `pt={{ grid: { className: "grid justify-content-center" } }}` so package cards are centered; `.p-dataview-content .grid` and `.section .container .grid` get `justify-content: center` on lg.
- **Setup**: Documented layout CSS order (theme → icons → PrimeFlex → app) and PrimeReactProvider (primereact.org/installation) in layout.tsx and PrimeReactProvider.tsx.

## [0.2.11] - 2025-02-16

### Fixed

- **Ripple on icon-only small buttons**: Hamburger (and other icon-only small buttons) no longer show an oversized ripple. PrimeReact Ripple sizes the `.p-ink` circle from the button’s outer dimensions; the theme uses 3rem (48px) for icon-only, so the ripple was 48px. Overrides now force icon-only small buttons to 2.25rem × 2.25rem with `overflow: hidden` so the ripple is compact and clipped to the button.

## [0.2.12] - 2025-02-16

### Added

- **Hero banner**: Hero section content is wrapped in a `.hero-banner` strip with a semi-transparent white background (`--hero-banner-bg`: default `rgba(255,255,255,0.1)`) so the headline and CTA read more clearly over the parallax background. Variable is theme-overridable; padding and border-radius applied for a banner look.

### Removed

- **How it works section**: "How it works" (four-step process) removed from the home page. Deleted `HowItWorksSection` component and `HOW_IT_WORKS_STEPS` from copy.
- **What we work on section**: "What we work on" (coaching focus benefit cards) removed from the home page. Deleted `CoachingFocusSection` component and `COACHING_FOCUS_ITEMS` from copy.
- **What people say section**: "What people say" (testimonials) removed from the home page. Deleted `TestimonialsSection` component and `TESTIMONIALS` from copy. Home flow is now Hero → Trust → Packages → FAQ → CTA.

### Fixed

- **Sidebar (mobile menu)**: `.p-sidebar-content` now has small horizontal padding (0.75rem) so the title, nav links, theme control, and Book Lesson button are not flush to the edges.

## [0.2.13] - 2025-02-16

### Changed

- **About page**: Rebuilt with PrimeReact components. "About" and "Coaching philosophy" are now a [TabView](https://primereact.org/tabview/) (two tabs: About with bio, photo placeholder, credentials; Coaching philosophy with three pillars). "What to expect" uses the basic horizontal [Stepper](https://primereact.org/stepper/) (no `orientation="vertical"`), three steps (Check-in, Session, Takeaways), `flexBasis: '50rem'`, and Back/Next buttons per PrimeReact Basic demo; copy unchanged from `WHAT_TO_EXPECT`. Page is a client component for TabView/Stepper interactivity.

### Added

- **Stepper & TabView theming**: Lara theme ships with hardcoded colors for `.p-stepper` and `.p-tabview`, so they didn’t pick up app theme variables. Added overrides in `primereact-overrides.scss` so both components use theme variables: `--text-color`, `--text-color-secondary`, `--surface-card`, `--surface-border`, `--primary-color`, `--highlight-bg`, `--focus-ring`. Stepper and TabView on the About page now respect socal-aqua-light and dark-synth.
- **Stepper "What to expect" styling**: Stepper panel uses muted dark blue at 60% opacity (`--stepper-bg`), white text (`--stepper-text`), and a wrapper with light grey/light blue (`--stepper-wrapper-bg`). Variables in variables.scss; themes override (socal-aqua-light: wrapper #e8eef5; dark-synth: wrapper #1a0a2e). About page uses `.stepper-wrapper` around the Stepper.

### Changed

- **Styles architecture**: PrimeReact foundation (sizes, padding, shadows, structure) is now in `base.scss`; `primereact-overrides.scss` was removed. Base is the single place for how PrimeReact components look and behave; themes only override color variables so switching theme changes colors, not layout. Load order: variables → base → utilities → themes.
- **TabView panel padding**: `.p-tabview .p-tabview-panel` now has `padding: var(--content-padding, 1.25rem)` so tab content (e.g. About / Coaching philosophy) is not flush to the edges.

## [0.2.15] - 2025-02-16

### Fixed

- **Footer always at bottom**: Footer was appearing in the middle of the page on short content (e.g. FAQ) with the SpeedDial button detached at viewport bottom. Layout updated so the footer stays at the bottom of the viewport: `.layout-content` now has `min-height: 100vh` and its single child (the page wrapper) gets `flex: 1 1 0`, `min-height: 0`, and flex column so it fills the viewport; header and footer have `flex-shrink: 0` so main expands and the footer stays pinned to the bottom. The SpeedDial remains in the footer and now appears at the bottom with it.
- **Never scroll past the footer (viewport lock)**: `overscroll-behavior-y: none` on `html` and `body` so you can’t overscroll (e.g. rubber-band) past the end of the page; the scroll stops at the footer.

### Added

- **Privacy and Terms pages**: Basic `/privacy` and `/terms` pages with standard sections. Privacy: information we collect, how we use it, cookies/tracking, contact. Terms: acceptance, services, user conduct, limitation of liability, changes, contact. Both use the same layout as FAQ/schedule (Header, narrow container, Footer) and metadata for title/description. Footer copyright row now includes “Privacy” and “Terms” links.

### Changed

- **Footer (mobile/small screens)**: Footer is now compact on all screens. Above the divider: single row with essential contact only (site name + email/phone on one line) and a PrimeReact [SpeedDial](https://primereact.org/speeddial/) for page navigation (Home, About, Packages, Schedule, FAQ, Book Lesson) with labels and icons; direction up, bars/close icons, outlined button. Removed the large Links and Contact columns from the footer (those are available in the hamburger menu). Bottom section (divider + copyright) unchanged; overall footer height kept minimal so it never dominates on small screens.
- **FooterNavSpeedDial**: New client component that builds SpeedDial items from `NAV_LINKS` and `BOOK_LESSON_HREF`, using `useRouter` from `next/navigation` for in-app navigation.

## [0.2.17] - 2025-02-16

### Changed

- **Footer SpeedDial trigger icon**: Replaced hamburger with question mark: open uses `pi pi-question-circle`, close uses `pi pi-times`.
- **Footer SpeedDial labels**: Actions now show icon and label text (custom item template). Each action is a pill with icon + label; styles in `base.scss` (`.p-speeddial-action-with-label`, `.p-speeddial-action-label`).
- **Footer SpeedDial menu items**: Reduced padding (height 2.25rem, padding 0 0.5rem, gap 0.375rem) for a slimmer look; background dark blue 80% opacity with white text; spacing between items 0.375rem; hover slightly darker.
- **Hero banner background**: Increased opacity so strip is more white (`--hero-banner-bg` 0.2 → 0.85).
- **Section spacing**: Gap between consecutive sections (`.section + .section` margin-top 3rem).
- **Section backgrounds**: `--page-background` and `--surface-section` made ~15% more transparent in both themes (socal-aqua-light 0.98/0.96 → 0.83/0.81; dark-synth and default to rgba with 0.85).
- **Packages page DataView**: DataView used with `value` from const `packageList` (sourced from `@/constants/packages`), `dataKey="id"`, `gutter` for grid spacing, and `itemTemplate(item, layout)` for both grid and list layouts. PT options apply `packages-page-dataview-grid` and `packages-page-dataview-content` for styling. Page wrapped in section with `--page-background`.
- **DataView theme**: `--dataview-grid-gap` in variables (1.25rem); base.scss styles for `.p-dataview-content .grid` and `.packages-page-dataview-grid` gap so package cards have clear spacing.

## [0.2.16] - 2025-02-16

### Added

- **Cursor rule**: `.cursor/rules/react-next-style.mdc` — React/Next style (KISS, small files, naming, TypeScript no-any, structure, performance). Always applied.

### Changed

- **README**: Rewritten to be accurate and dev-facing: tech stack, structure (`app/`, `components/`, `constants/`, `types/`, styles, providers), theming, path alias, versioning/docs.
- **TrustStrip (trust ticker)**: Smaller height: component-specific `TrustStrip.scss` (imported in the component) now holds all trust-ticker styles; padding reduced (section 0.5rem vertical, items 0.375rem 1rem), margin-bottom 2.5rem → 1.5rem. Removed trust-ticker rules from `utilities.scss` so styles apply only via this component’s class names; no PrimeReact overrides added.
- **Hover and focus contrast**: Accordion and other hover/focus effects use less transparency and keep contrast.

### Fixed

- **TypeScript**: About page Stepper ref no longer uses `any`; uses `ComponentRef<typeof Stepper>`. Package version set to 0.2.16 to match changelog.
- **Image placeholders → Skeleton**: PrimeReact [Skeleton](https://primereact.org/skeleton/) used for image placeholders so they look like loading states. About page: photo placeholder is now a Skeleton (100% × 20rem, border-radius). Hero: decorative image area is now a Skeleton filling the flex area (min-height 15rem / 20rem). Placeholders may never load real images; Skeletons still show the intended layout.
- **Packages carousel card size**: Carousel cards are now a fixed height (22rem) on all screen sizes. Component-specific `PackageCardsSection.scss` makes the card content area scroll (`overflow-y: auto`) when needed, and reduces card padding (body 0.75rem 1rem, title/subtitle gaps, content padding) so layout stays uniform.
- **DataView compact (PrimeReact-style)**: Header/content padding reduced (header & footer 0.75rem 1rem, content padding 0). Grid gap 1.25rem → 1rem. Packages page list layout uses a compact row per package (name, forWho, tags, Choose Package) instead of a full Card; grid keeps full Cards with p-2 on columns. Header is a span for a smaller label.
- **DataView colors and padding**: Lara theme uses hardcoded DataView header/content/footer colors and padding, so they didn’t follow app themes. Base now overrides `.p-dataview .p-dataview-header`, `.p-dataview-content`, and `.p-dataview-footer` to use theme variables (`--surface-ground`, `--surface-card`, `--surface-border`, `--text-color`, `--content-padding`) so DataView looks correct in all themes (SoCal Aqua Light and Dark Synth).
- **SpeedDial / global button size**: Footer SpeedDial trigger was 4rem (Lara theme) and ignored global button padding. Global button padding and sizes live in `base.scss` (`.p-button`, `.p-button-sm`, `.p-button-icon-only.p-button-sm`). Added override in base for `.p-speeddial-button.p-button.p-button-icon-only` to use the same 2.25rem size and padding as header small buttons (Book Lesson / hamburger), and set `buttonClassName="p-button-outlined p-button-sm"` on Footer SpeedDial so it uses the global small size.
- **Button icons and appearance**: Button icons were too small (Lara uses 0.875rem for sm). Base overrides: default icon 1rem, icon-only 1.125rem, lg 1.25rem so layout toggles and other icon buttons read clearly. Primary and outlined buttons get explicit `border: 1px solid` and `font-weight: 600` so they look solid and readable.
- **Card density**: Card body/content padding reduced from 1.5rem to 1rem; card title and subtitle margins tightened (0.25rem / 0.35rem) so cards feel less oversized.
- **DataView list (PrimeReact-style)**: List layout aligned with PrimeReact docs: compact rows (py-3 px-3/4), smaller header (0.5rem padding, font-weight 600), thin dividers between rows, smaller list tags (0.75rem), and list row CTA uses short “Choose” label with arrow icon for a cleaner look.

- **Icon-only buttons (DataViewLayoutOptions)**: Themes often set only width on icon-only buttons, so height was squashed (e.g. 48×42px). Base now forces all `.p-button.p-button-icon-only` to square 2.5rem × 2.5rem with `!important`, and `.p-button-group .p-button.p-button-icon-only` the same so layout toggles stay square. Icon-only icon size 1.25rem; text+icon 1.125rem. Trust strip icons use `text-2xl`.
- **Container vs DataView padding**: Page container padding reverted to 1.5rem / 2rem (no extra padding on whole page). Trust strip is full-width via `100vw` and `calc(50% - 50vw)` margin so it spans the viewport when inside `.container`. Padding increased only around the DataView: packages page DataView wrapped in `.packages-dataview-wrap` with vertical and horizontal padding so Options and content cards are not tight to the edge.
- **Buttons with icon + label**: In base, all `.p-button` that have both icon and label get `display: inline-flex`, `align-items: center`, `justify-content: center`, and `gap: 0.375rem` so icon and label are centered with consistent spacing. Icon left/right margins set to 0 so gap controls spacing.
- **Unified button and icon sizes (base)**: All small buttons (hamburger, Book, etc.) now share the same height via `--button-sm-height: 2.25rem`. Every `.p-button-sm` gets explicit height, inline-flex, and center alignment so label and icon-only buttons match. Icon sizes use `--button-icon-size` (1.125rem) and `--button-icon-only-size` (1.25rem); small icon-only buttons use `--button-icon-size` so all small icons are the same.

### Added

- **404 page**: `app/not-found.tsx` for Next.js App Router. Shown for unknown routes or when `notFound()` is called. Centered layout with 404 heading, short message, and “Back to Home” CTA button (uses site theme and `cta-accent`).

- **robots.txt**: `app/robots.ts` generates robots.txt so only home (`/`), `/packages`, and `/about` are allowed for indexing; `/schedule`, `/faq`, `/privacy`, and `/terms` are disallowed.
- **SEO and metadata**: Centralized in `constants/seo.ts` (SITE_URL from env, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS for Irvine, Newport Beach, Orange County swimming lessons). Root layout: title template, description, keywords, Open Graph, Twitter card, robots. Home page: custom title/description. About and packages: `layout.tsx` metadata for each. Set `NEXT_PUBLIC_SITE_URL` in production for canonical and OG URLs.
- **TabView (About page)**: Full styling in `base.scss` for PrimeReact TabView: nav container with border and surface-ground, tab headers with padding (1rem 1.25rem), font-weight 600, active state (primary color + 3px bottom border), hover state, inkbar, panel padding and min-height, prev/next buttons. Uses theme variables for both themes.
- **Dark Synth background image**: GlobalParallaxBackground now shows a background image for both themes: light theme uses `kholton-bg.png`, dark theme uses `dark-synth-bg.png`. Place the dark image at `public/dark-synth-bg.png`.
- **What to expect (Stepper)**: Added `margin-bottom: 3.5rem` to `.stepper-banner` so the section has more space above the footer. Stepper content container (`.p-stepper-panels`) now has `border-radius: 0.75rem` and `overflow: hidden`.
- **App icons for small use**: `public/app-icon-light.png` and `app-icon-dark.png` are for small thumbnail/icon use only (see `constants/assets.ts`). About section photo stays an empty Skeleton placeholder on purpose; do not use these icons for main content.

## [0.2.14] - 2025-02-16

### Added

- **PrimeReact theme reference**: Downloaded official [PrimeReact Arya Blue theme](https://github.com/primefaces/primereact/blob/master/public/themes/arya-blue/theme.css) to `public/themes/arya-blue/theme.css` for local reference. Use when comparing variable names, `@layer primereact` structure, or component class names. `public/themes/README.md` documents the source URL and a curl command to refresh the file.
- **Packages section Carousel**: Home page packages section is now a client component using PrimeReact `Carousel`. Shows all package cards in a circular carousel with responsive breakpoints (3 → 2 → 1 visible), same Card content (title, forWho, benefits, duration/price, Choose Package), plus “View all packages” link below.
- **Package level tags**: Package cards (home Carousel and packages page) show level with PrimeReact [Tag](https://primereact.org/tag/): Beginner (success), Intermediate (info), Advanced (warning), Competitive (danger), Group (secondary). `PackageOption` now has optional `level` and `levelSeverity`; package names no longer include level in parentheses.

### Changed

- **Package cards**: Duration and price shown as Tags (value only, no “Duration:”/“Price:” labels); level, duration, and price in one flex row with gap. Card subtitle uses `--text-color-secondary`; Tag padding/font in base so Tags have consistent PrimeReact-style padding.
- **Packages Carousel**: Auto-advance every 4s (`autoplayInterval={4000}`); smooth slide transition (0.4s ease on `.p-carousel-items-container`).
- **Package prices**: Placeholder prices set to "$25–$75" for all packages (dummy for now).
- **Trust strip**: Rebuilt as a full-width horizontal ticker (stock/weather style). All items on one line, scrolling across the viewport with a seamless loop (duplicated content, 40s animation, translateX -50%). Hover pauses the ticker. Added `margin-bottom: 2.5rem` so the strip is visually separated from the Packages section.

### Removed

- **Schedule page content**: Replaced the full schedule/contact page (form, scheduling copy, inquiry form) with a minimal placeholder. `/schedule` now shows only a title and “Calendly goes here.” (Calendly will be added later.) Nav and Book Lesson still point to `/schedule`. FAQ answer for weather/cancellations no longer references “Schedule page.”

### Fixed

- **Card subtitle**: `.p-card .p-card-subtitle` now uses `var(--text-color-secondary)` so it’s readable in both themes (was inheriting light theme white). Subtitle margin set to 0.5rem.
- **Tag styling**: `.p-tag` in base now has padding, font-size, font-weight, border-radius; `.p-tag-rounded` for pill shape so Tags are visibly styled.

## [0.2.9] - 2025-02-16

### Changed

- **Packages page**: Refactored to use PrimeReact Card and DataView as intended. Cards use Card’s `title`, `subTitle`, and `footer` props (primereact.org/card); DataView uses `DataViewLayoutOptions` so users can switch between grid and list. Removed forced uniform card sizing (min-heights, fixed content blocks) so cards size naturally by content and no longer look identical/rigid.
- **Home packages section**: Aligned with same Card API (title, subTitle, footer) and dropped custom package-card utility classes.
- **Styles**: Removed `.package-cards-grid` and `.package-card` uniform sizing from primereact-overrides; removed `.package-card-*` utilities from utilities.scss.

## [0.2.8] - 2025-02-16

### Fixed

- **Schedule/contact form inputs**: Typed text (e.g. capital letters) no longer clips or appears oversized. Input overrides now set explicit `font-size: 1rem`, `line-height: 1.5`, `min-height: 2.5rem`, and `appearance: none` on `.p-inputtext` / `.p-inputtextarea` so inputs don’t inherit inconsistent typography and have enough vertical space for one line of text.

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
- Footer sticky to bottom: page root `.flex.flex-column.min-h-screen` has `min-height: 100vh`; `& > main` gets `flex-grow: 1`, `flex-shrink: 0`, `min-height: 0` so main fills space and footer stays at bottom when content is short.
- Centering: page root direct children (header, main, footer) forced to full width via `.flex.flex-column.min-h-screen > header/main/footer` so inner `.container` centers correctly; SCSS nesting in utilities for `.layout-content` and page root; `box-sizing: border-box` on container/content-wrap.
- Header and footer ~15% more transparent: light theme header 0.94→0.79, footer 0.96→0.81; dark theme header/footer rgba with 0.85 alpha; new --footer-bg in themes, Footer uses var(--footer-bg).
- Hero image layer stacking: parallax background layer and overlay use explicit z-index (1, 2, 3) so the image layer is never behind body/main; layer uses inset positioning; `.parallax-section .parallax-layer` has `pointer-events: none`.

### Added

- `netlify.toml`: build command `npm run build` and `NODE_VERSION = "22"` for Netlify deploys (Next.js 16 framework detection handles publish).
