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
