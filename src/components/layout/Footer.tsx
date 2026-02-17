import Link from "next/link";
import { SITE_NAME } from "@/constants";
import { FooterNavSpeedDial } from "./FooterNavSpeedDial";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top container">
        <div className="site-footer__contact">
          <div className="site-footer__title">{SITE_NAME}</div>
          <p className="site-footer__contact-line">
            Email: placeholder@example.com · Phone: (placeholder)
          </p>
        </div>
        <FooterNavSpeedDial />
      </div>
      <div className="site-footer__bottom container">
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          {" · "}
          <Link href="/privacy" className="site-footer__link">Privacy</Link>
          {" · "}
          <Link href="/terms" className="site-footer__link">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
