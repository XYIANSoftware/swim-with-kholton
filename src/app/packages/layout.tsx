import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Swim lesson packages in Irvine, Newport Beach, and Orange County. Beginner to competitive — choose the option that fits your goals.",
};

export default function PackagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
