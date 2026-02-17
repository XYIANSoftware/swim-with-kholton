import {
  HeroSection,
  TrustStrip,
  PackageCardsSection,
  FAQPreviewSection,
  CTABandSection,
} from "@/components/pages/home";
import type { SearchParamsPromise } from "@/types/next";

export const metadata = {
  title: "Swimming Lessons Irvine & Newport Beach | Orange County",
  description:
    "Swim lessons in Irvine, Newport Beach, and Orange County. All ages and skill levels. Book a lesson with Kholton Swim Coaching.",
};

type HomePageProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  searchParams?: SearchParamsPromise;
}>;

export default async function Home(props: HomePageProps) {
  await Promise.all([
    props.params ?? Promise.resolve({}),
    props.searchParams ?? Promise.resolve({}),
  ]);
  return (
    <div className="home-sections">
      <HeroSection />
      <TrustStrip />
      <PackageCardsSection />
      <FAQPreviewSection />
      <CTABandSection />
    </div>
  );
}
