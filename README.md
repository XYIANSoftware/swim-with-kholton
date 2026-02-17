This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## PrimeReact usage

- **Theming**: We use one built-in theme CSS (Lara) and override with our own SCSS using **CSS variables** ([Colors](https://primereact.org/colors/), [Theming](https://primereact.org/theming/)). Scoped overrides live in `src/styles/primereact-overrides.scss` (named-class approach).
- **DataView (packages)**: [DataView Layout](https://primereact.org/dataview/#layout) — grid layout uses **PrimeFlex Grid classes** in `itemTemplate` (`col-12 md:col-6 lg:col-4`). Pass-through (`pt`) is used to add a scoped class to the grid DOM element ([Pass Through](https://primereact.org/passthrough/)).
- **Accordion, TabView, etc.**: Custom templates and headers follow the [Accordion](https://primereact.org/accordion/) / [TabView](https://primereact.org/tabview/) docs; styling uses theme variables and the same overrides file.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
