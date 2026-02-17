import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "@/providers";
import { APP_THEME_STORAGE_KEY, DEFAULT_THEME, THEMES } from "@/constants";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./main.scss";

const THEME_INIT_SCRIPT = `(function(){var k="` + APP_THEME_STORAGE_KEY + `";var d="` + DEFAULT_THEME + `";var v=` + JSON.stringify(THEMES) + `;try{var s=localStorage.getItem(k);var t=s&&v.indexOf(s)!==-1?s:d;document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme",d);}})();`;

export const metadata: Metadata = {
  title: "Kholton Swim Coaching",
  description: "Swim coaching with a national-level athlete. Confidence, technique, speed — all ages and skill levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="socal-aqua-light">
      <head />
      <Script id="theme-init" strategy="beforeInteractive">
        {THEME_INIT_SCRIPT}
      </Script>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
