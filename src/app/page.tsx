import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  TrustStrip,
  PackageCardsSection,
  HowItWorksSection,
  CoachingFocusSection,
  TestimonialsSection,
  FAQPreviewSection,
  CTABandSection,
} from "@/components/pages/home";

export default function Home() {
  return (
    <div className="flex flex-column min-h-screen" style={{ background: "transparent" }}>
      <Header />
      <main className="flex-grow-1" style={{ background: "transparent" }}>
        <HeroSection />
        <TrustStrip />
        <PackageCardsSection />
        <HowItWorksSection />
        <CoachingFocusSection />
        <TestimonialsSection />
        <FAQPreviewSection />
        <CTABandSection />
      </main>
      <Footer />
    </div>
  );
}
