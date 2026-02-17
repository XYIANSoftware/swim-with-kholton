import Link from "next/link";
import { CTA_BAND_HEADLINE, CTA_BAND_BUTTON } from "@/constants/copy";
import { BOOK_LESSON_HREF } from "@/constants/nav";

export function CTABandSection() {
  return (
    <section
      className="section text-center"
      style={{
        background: "var(--surface-section)",
        borderTop: "1px solid var(--surface-border)",
      }}
    >
      <div className="container">
        <h2 className="m-0 mb-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {CTA_BAND_HEADLINE}
        </h2>
        <Link
          href={BOOK_LESSON_HREF}
          className="p-button p-button-lg cta-accent no-underline mt-2"
          style={{ color: "white" }}
        >
          {CTA_BAND_BUTTON}
        </Link>
      </div>
    </section>
  );
}
