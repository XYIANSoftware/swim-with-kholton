"use client";

import Link from "next/link";
import { HERO_HEADLINE, HERO_SUBHEAD } from "@/constants/copy";
import { BOOK_LESSON_HREF } from "@/constants/nav";

export function HeroSection() {
  return (
    <section
      className="section hero-gradient min-h-30rem flex align-items-center"
      style={{ background: "var(--hero-gradient, var(--page-background))" }}
    >
      <div className="container flex flex-column md:flex-row align-items-center gap-4 md:gap-6">
        <div className="flex-1">
          <h1
            className="m-0 text-4xl md:text-5xl font-bold line-height-3 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {HERO_HEADLINE}
          </h1>
          <p
            className="text-xl md:text-2xl m-0 mb-4 text-color-secondary"
            style={{ color: "var(--text-color-secondary)" }}
          >
            {HERO_SUBHEAD}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/packages"
              className="p-button p-button-lg no-underline"
              style={{ color: "var(--primary-color-text)", background: "var(--primary-color)", borderColor: "var(--primary-color)" }}
            >
              View Packages
            </Link>
            <Link
              href={BOOK_LESSON_HREF}
              className="p-button p-button-lg p-button-outlined no-underline"
              style={{ color: "var(--primary-color)", borderColor: "var(--primary-color)" }}
            >
              Book Lesson
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-content-center md:justify-content-end opacity-60">
          {/* Placeholder for hero image / wave graphic */}
          <div
            className="border-round w-full max-w-md h-20rem"
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--surface-border)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
