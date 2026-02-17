import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Providers } from "@/providers";
import { APP_THEME_STORAGE_KEY, DEFAULT_THEME, THEMES } from "@/constants";
// Load order per primereact.org/installation: theme → icons → PrimeFlex → app styles
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
    <html lang="en" data-theme="socal-aqua-light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
          suppressHydrationWarning
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
