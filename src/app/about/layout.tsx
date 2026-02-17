import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet your swim coach. SEC swimmer, US National Team experience. Swimming lessons in Irvine, Newport Beach, and Orange County for all ages and skill levels.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
