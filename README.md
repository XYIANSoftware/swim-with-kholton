# Swim with Kholton

Marketing site for Kholton Swim Coaching: Next.js (App Router), React, TypeScript, PrimeReact, theme toggle (SoCal Aqua Light / Dark Synth).

## Tech stack

- **React** (latest stable) + **Next.js** (App Router, latest stable)
- **TypeScript** (strict)
- **PrimeReact** + **PrimeFlex** + **PrimeIcons**
- **date-fns**, **react-hook-form**, **Zustand** (as needed)
- **Sass** for styles

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Build: `npm run build`. Lint: `npm run lint`.

## Project structure

- **`src/app/`** — Next.js App Router routes; each route has a `page.tsx` (thin parent, composes sections).
- **`src/components/`** — Reusable UI: `common/`, `layout/`, `ui/`, `pages/` (home sections, etc.). Use `@/components` via index re-exports.
- **`src/constants/`** — Copy, nav, theme, packages, etc. Re-export from `@/constants`.
- **`src/types/`** — Shared types; re-export from `@/types`.
- **`src/styles/`** — Global Sass: variables, base (resets + PrimeReact foundation), utilities, themes (socal-aqua-light, dark-synth).
- **`src/providers/`** — ThemeProvider, PrimeReactProvider, root Providers wrapper.
- **`src/hooks/`**, **`src/services/`**, **`src/stores/`** — Shared hooks, API/business logic, Zustand stores (index re-exports).

Path alias: `@/*` → `./src/*`.

## Theming

- Two themes: **SoCal Aqua Light** (default) and **Dark Synth**. Toggle in header (desktop) or mobile menu.
- Theme is persisted in `localStorage` and applied via `data-theme` on `<html>`. Base layout and PrimeReact structure live in `src/styles/base.scss`; themes only override color variables in `src/styles/themes/`.

## Docs and versioning

- **CHANGELOG.md** — All notable changes; update on code changes.
- **package.json** — Version kept in sync with changelog.
- **public/themes/README.md** — PrimeReact theme reference (Arya Blue) for local comparison.
