"use client";

import { useTheme } from "@/providers";

const PARALLAX_IMAGE = "/kholton-bg.png";

/** Fixed full-viewport background for layout. Does not move on scroll; only content scrolls. Shown on light theme only. */
export function GlobalParallaxBackground() {
  const { theme } = useTheme();
  const showBackground = theme === "socal-aqua-light";

  if (!showBackground) return null;

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
          backgroundImage: `url(${PARALLAX_IMAGE})`,
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
