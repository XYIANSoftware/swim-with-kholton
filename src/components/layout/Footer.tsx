import Link from "next/link";
import { NAV_LINKS, SITE_NAME, BOOK_LESSON_HREF } from "@/constants";

export function Footer() {
  return (
    <footer
      className="py-5 px-3 md:px-4 mt-auto"
      style={{
        background: "var(--surface-ground)",
        borderTop: "1px solid var(--surface-border)",
        color: "var(--text-color-secondary)",
      }}
    >
      <div className="container flex flex-column md:flex-row gap-4 md:gap-6 md:justify-content-between">
        <div>
          <div className="font-semibold mb-2" style={{ color: "var(--text-color)" }}>
            {SITE_NAME}
          </div>
          <p className="m-0 text-sm">Service area: Southern California (placeholder)</p>
        </div>
        <div className="flex flex-column gap-2">
          <span className="font-semibold text-sm" style={{ color: "var(--text-color)" }}>
            Links
          </span>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="no-underline text-sm"
              style={{ color: "var(--text-color-secondary)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href={BOOK_LESSON_HREF}
            className="no-underline text-sm font-medium mt-1"
            style={{ color: "var(--primary-color)" }}
          >
            Book Lesson
          </Link>
        </div>
        <div className="flex flex-column gap-2">
          <span className="font-semibold text-sm" style={{ color: "var(--text-color)" }}>
            Contact
          </span>
          <span className="text-sm">Email: placeholder@example.com</span>
          <span className="text-sm">Phone: (placeholder)</span>
        </div>
      </div>
      <div className="container mt-4 pt-3 text-sm border-top-1 surface-border">
        <p className="m-0">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
