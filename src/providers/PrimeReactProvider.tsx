"use client";

import { PrimeReactProvider as PrimeProvider } from "primereact/api";

/**
 * Wraps the app per primereact.org/installation (Context from primereact/api).
 * Ripple enabled globally for buttons.
 */
export function PrimeReactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrimeProvider value={{ ripple: true }}>
      {children}
    </PrimeProvider>
  );
}
