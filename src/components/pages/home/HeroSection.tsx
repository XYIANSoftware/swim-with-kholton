"use client";

import Link from "next/link";
import { Skeleton } from "primereact/skeleton";
import { HERO_HEADLINE, HERO_SUBHEAD } from "@/constants/copy";
import { BOOK_LESSON_HREF } from "@/constants/nav";

export function HeroSection() {
  return (
    <section className="section" style={{ minHeight: "30rem" }}>
      <div className="hero-banner">
        <div className="container flex flex-column align-items-center justify-content-center gap-4 md:gap-6 text-center">
          <div className="hero-banner__content w-full" style={{ maxWidth: "42rem" }}>
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
            <div className="flex flex-wrap gap-2 justify-content-center">
              <Link
                href="/packages"
                className="p-button p-button-lg no-underline"
                style={{
                  color: "var(--primary-color-text)",
                  background: "var(--primary-color)",
                  borderColor: "var(--primary-color)",
                }}
              >
                View Packages
              </Link>
              <Link
                href={BOOK_LESSON_HREF}
                className="p-button p-button-lg p-button-outlined no-underline"
                style={{
                  color: "var(--primary-color)",
                  borderColor: "var(--primary-color)",
                  background: "transparent",
                }}
              >
                Book Lesson
              </Link>
            </div>
          </div>
          <div className="flex justify-content-center min-h-15rem md:min-h-20rem w-full" style={{ maxWidth: "28rem" }}>
            <Skeleton
              width="100%"
              height="100%"
              className="border-round"
              style={{ minHeight: "15rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
