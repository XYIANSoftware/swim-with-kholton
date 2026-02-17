"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import { NAV_LINKS, SITE_NAME, BOOK_LESSON_HREF } from "@/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <header
        className="header sticky top-0 z-3 w-full px-3 py-2 md:px-4 md:py-3 shadow-2"
        style={{
          background: "var(--header-bg)",
          color: "var(--header-fg)",
          borderBottom: "var(--header-border)",
          boxShadow: "var(--elevation-2)",
        }}
      >
        <div className="content-wrap flex align-items-center justify-content-between">
          <Link
            href="/"
            className="font-semibold text-xl no-underline"
            style={{ color: "var(--header-fg)" }}
          >
            {SITE_NAME}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex align-items-center gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="p-2 no-underline border-round transition-colors transition-duration-150"
                style={{ color: "var(--header-fg)" }}
              >
                {label}
              </Link>
            ))}
            <ThemeSwitcher compact />
            <Link
              href={BOOK_LESSON_HREF}
              className="p-button p-button-sm cta-accent ml-2 no-underline"
              style={{ color: "white" }}
            >
              Book Lesson
            </Link>
          </nav>

          {/* Mobile: hamburger + CTA — same size as Book via base SCSS (p-button-sm) */}
          <div className="flex align-items-center gap-2 md:hidden">
            <Button
              icon="pi pi-bars"
              rounded
              text
              className="p-button-sm"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            />
            <Link
              href={BOOK_LESSON_HREF}
              className="p-button p-button-sm cta-accent no-underline"
              style={{ color: "white" }}
            >
              Book
            </Link>
          </div>
        </div>
      </header>

      <Sidebar
        visible={mobileMenuOpen}
        onHide={closeMobileMenu}
        position="right"
        className="w-full sm:w-20rem"
        style={{ background: "var(--surface-card)", color: "var(--text-color)" }}
      >
        <div className="flex flex-column gap-3">
          <h2 className="m-0 text-xl font-semibold">{SITE_NAME}</h2>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMobileMenu}
              className="p-3 no-underline border-round surface-hover transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-top-1 surface-border">
            <span className="block text-sm text-color-secondary mb-2">Theme</span>
            <ThemeSwitcher compact={false} />
          </div>
          <Link
            href={BOOK_LESSON_HREF}
            onClick={closeMobileMenu}
            className="p-button cta-accent w-full mt-2 no-underline text-center"
            style={{ color: "white" }}
          >
            Book Lesson
          </Link>
        </div>
      </Sidebar>
    </>
  );
}
