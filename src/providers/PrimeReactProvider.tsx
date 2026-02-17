"use client";

import { PrimeReactProvider as PrimeProvider } from "primereact/api";

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
