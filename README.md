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

## Browser automation (MCP)

The project includes a **Playwright MCP** server in `.cursor/mcp.json` so Cursor’s agent can navigate and interact with the app (e.g. open `http://localhost:3001`, click, take snapshots).

1. **Use the project config** — Cursor should pick up `.cursor/mcp.json` in this repo. If you use a global MCP config instead, add the same `playwright` server there.
2. **First-time setup** — The first time the agent uses the Playwright tools, Playwright may need to download browser binaries. From the project root run: `npx playwright install`
3. **Restart Cursor** — After adding or changing MCP config, restart Cursor (or reload the window) so the agent gets the new tools.
4. **Start the app** — Have the dev server running (e.g. `npm run dev -- -p 3001`) and ask the agent to navigate to that URL and browse the app.

## Docs and versioning

- **CHANGELOG.md** — All notable changes; update on code changes.
- **package.json** — Version kept in sync with changelog.
- **public/themes/README.md** — PrimeReact theme reference (Arya Blue) for local comparison.
