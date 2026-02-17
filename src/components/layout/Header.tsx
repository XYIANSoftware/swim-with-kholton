"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import { NAV_LINKS, SITE_NAME, BOOK_LESSON_HREF } from "@/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

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
              type="button"
              icon="pi pi-bars"
              rounded
              text
              className="p-button-sm"
              aria-label="Open menu"
              onClick={openMobileMenu}
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
        modal
        appendTo="self"
        className="w-full sm:w-20rem sidebar-menu"
      >
        <nav className="flex flex-column gap-1" aria-label="Main navigation">
          <h2 className="m-0 mb-2 text-xl font-semibold">{SITE_NAME}</h2>
          <ul className="m-0 p-0 list-none flex flex-column gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMobileMenu}
                    className={`sidebar-nav-item flex align-items-center p-3 no-underline border-round transition-colors ${active ? "sidebar-nav-item--active" : "surface-hover"}`}
                    style={{
                      color: active ? "var(--primary-color)" : "var(--text-color)",
                      fontWeight: active ? 600 : undefined,
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-3 pt-3 border-top-1 surface-border flex flex-column gap-3">
          <div>
            <span className="block text-sm text-color-secondary mb-2">Theme</span>
            <ThemeSwitcher compact={false} />
          </div>
          <Link
            href={BOOK_LESSON_HREF}
            onClick={closeMobileMenu}
            className="p-button cta-accent w-full no-underline text-center"
            style={{ color: "white" }}
          >
            Book Lesson
          </Link>
        </div>
      </Sidebar>
    </>
  );
}
