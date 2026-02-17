import {
  HeroSection,
  TrustStrip,
  PackageCardsSection,
  FAQPreviewSection,
  CTABandSection,
} from "@/components/pages/home";
import type { SearchParamsPromise } from "@/types/next";

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
    <>
      <HeroSection />
      <TrustStrip />
      <PackageCardsSection />
      <FAQPreviewSection />
      <CTABandSection />
    </>
  );
}
