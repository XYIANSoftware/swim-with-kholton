"use client";

import { useTheme } from "@/providers";

const LIGHT_BG_IMAGE = "/kholton-bg.png";
const DARK_BG_IMAGE = "/dark-synth-bg.png";

/** Fixed full-viewport background for layout. Does not move on scroll; only content scrolls. Light theme uses kholton-bg; dark theme uses dark-synth-bg. */
export function GlobalParallaxBackground() {
  const { theme } = useTheme();
  const image =
    theme === "socal-aqua-light"
      ? LIGHT_BG_IMAGE
      : theme === "dark-synth"
        ? DARK_BG_IMAGE
        : null;

  if (!image) return null;

  return (
    <div
      className="global-parallax-bg"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        className="global-parallax-bg-layer"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="global-parallax-bg-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--hero-overlay)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
