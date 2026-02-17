"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/providers";

const PARALLAX_IMAGE = "/kholton-bg.png";
const PARALLAX_BREAKPOINT = 768;
const FACTOR_DESKTOP = 0.35;
const FACTOR_MOBILE = 0.2;

/** Full-viewport parallax background for layout. Shown on light theme only; dark theme uses solid page background. */
export function GlobalParallaxBackground() {
  const { theme } = useTheme();
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);

  const updateOffset = useCallback(() => {
    if (typeof window === "undefined") return;
    const scrollY = window.scrollY;
    const factor = isMobile ? FACTOR_MOBILE : FACTOR_DESKTOP;
    setOffset(-scrollY * factor);
  }, [isMobile]);

  useEffect(() => {
    const mq =
      typeof window !== "undefined"
        ? window.matchMedia(`(max-width: ${PARALLAX_BREAKPOINT}px)`)
        : null;
    if (mq) {
      const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
      mq.addEventListener("change", handleChange);
      queueMicrotask(() => setIsMobile(mq.matches));
      return () => mq.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateOffset();
        rafRef.current = null;
      });
    };
    requestAnimationFrame(() => updateOffset());
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [updateOffset]);

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
          top: 0,
          left: 0,
          right: 0,
          height: "120%",
          minHeight: "100%",
          backgroundImage: `url(${PARALLAX_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translate3d(0, ${offset}px, 0)`,
          willChange: "transform",
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
