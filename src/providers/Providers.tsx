"use client";

import { GlobalParallaxBackground } from "@/components/ui";
import { PrimeReactProvider } from "./PrimeReactProvider";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PrimeReactProvider>
        <GlobalParallaxBackground />
        <div className="layout-content">{children}</div>
      </PrimeReactProvider>
    </ThemeProvider>
  );
}
