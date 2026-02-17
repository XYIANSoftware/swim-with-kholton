"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ParallaxBackgroundProps {
  /** Background image path (e.g. /background-marine.png) */
  imageSrc: string;
  /** Optional second image for layered parallax (slower layer) */
  imageSrcSecondary?: string;
  /** Parallax factor: 0 = fixed, 0.5 = moves half as fast as scroll. Desktop. */
  factor?: number;
  /** Parallax factor on mobile (smaller = subtler, better performance) */
  factorMobile?: number;
  /** Overlay color for text readability (e.g. rgba(0,0,0,0.3)) */
  overlay?: string;
  /** Min height of the section (e.g. 30rem or 100vh) */
  minHeight?: string;
  children: React.ReactNode;
  className?: string;
}

const PARALLAX_BREAKPOINT = 768;

export function ParallaxBackground({
  imageSrc,
  imageSrcSecondary,
  factor = 0.35,
  factorMobile = 0.2,
  overlay,
  minHeight = "30rem",
  children,
  className = "",
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);

  const updateOffset = useCallback(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const scrollY = window.scrollY;
    const currentFactor = isMobile ? factorMobile : factor;
    const parallaxOffset = scrollY * currentFactor;
    setOffset(-parallaxOffset);
  }, [factor, factorMobile, isMobile]);

  useEffect(() => {
    const mq = typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${PARALLAX_BREAKPOINT}px)`)
      : null;
    if (mq) {
      setIsMobile(mq.matches);
      const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    updateOffset();
    const handleScroll = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateOffset();
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [updateOffset]);

  return (
    <section
      ref={containerRef}
      className={`parallax-section relative flex align-items-center overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Primary parallax layer */}
      <div
        className="parallax-layer absolute w-full top-0 left-0 right-0"
        style={{
          height: "120%",
          minHeight: "100%",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translate3d(0, ${offset}px, 0)`,
          willChange: "transform",
        }}
        aria-hidden
      />
      {/* Optional secondary (slower) layer */}
      {imageSrcSecondary && (
        <div
          className="parallax-layer absolute w-full top-0 left-0 right-0"
          style={{
            height: "130%",
            minHeight: "100%",
            backgroundImage: `url(${imageSrcSecondary})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translate3d(0, ${offset * 0.6}px, 0)`,
            willChange: "transform",
            opacity: 0.5,
          }}
          aria-hidden
        />
      )}
      {/* Overlay for text contrast */}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlay, pointerEvents: "none" }}
          aria-hidden
        />
      )}
      {/* Content above background */}
      <div className="relative z-1 w-full">
        {children}
      </div>
    </section>
  );
}
