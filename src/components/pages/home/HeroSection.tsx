"use client";

import Link from "next/link";
import { ParallaxBackground } from "@/components/ui";
import { useTheme } from "@/providers/ThemeProvider";
import { HERO_HEADLINE, HERO_SUBHEAD } from "@/constants/copy";
import { BOOK_LESSON_HREF } from "@/constants/nav";

const LIGHT_HERO_IMAGE = "/kholton-bg.png";

export function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "socal-aqua-light";
  return (
    <ParallaxBackground
      imageSrc={isLight ? LIGHT_HERO_IMAGE : undefined}
      overlay={isLight ? "var(--hero-overlay)" : undefined}
      minHeight="30rem"
      className="section"
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
        <div className="flex-1 flex justify-content-center md:justify-content-end opacity-60 min-h-15rem md:min-h-20rem">
          {/* Optional: decorative or leave empty so parallax is the visual */}
        </div>
      </div>
    </ParallaxBackground>
  );
}
