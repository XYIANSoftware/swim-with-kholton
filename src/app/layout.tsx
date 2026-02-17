import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Providers } from "@/providers";
import { APP_THEME_STORAGE_KEY, DEFAULT_THEME, THEMES, SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/constants";
// Load order per primereact.org/installation: theme → icons → PrimeFlex → app styles
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./main.scss";

const THEME_INIT_SCRIPT = `(function(){var k="` + APP_THEME_STORAGE_KEY + `";var d="` + DEFAULT_THEME + `";var v=` + JSON.stringify(THEMES) + `;try{var s=localStorage.getItem(k);var t=s&&v.indexOf(s)!==-1?s:d;document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme",d);}})();`;

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: `${SITE_NAME} | Swimming Lessons Irvine & Newport Beach`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...DEFAULT_KEYWORDS],
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    ...(SITE_URL && { url: SITE_URL }),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params?: Promise<Record<string, string | string[]>>;
}>;

export default async function RootLayout(props: RootLayoutProps) {
  if (props.params) await props.params;
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
          <main>{props.children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
