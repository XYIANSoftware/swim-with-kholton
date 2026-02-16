"use client";

import { PrimeReactProvider as PrimeProvider } from "primereact/api";

export function PrimeReactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrimeProvider>{children}</PrimeProvider>;
}
