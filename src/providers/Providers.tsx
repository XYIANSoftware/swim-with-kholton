"use client";

import { PrimeReactProvider } from "./PrimeReactProvider";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </ThemeProvider>
  );
}
