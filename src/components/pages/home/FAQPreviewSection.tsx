"use client";

import Link from "next/link";
import { Accordion, AccordionTab } from "primereact/accordion";
import { FAQ_PREVIEW_ITEMS } from "@/constants/copy";

export function FAQPreviewSection() {
  return (
    <section className="section faq-preview-section" style={{ background: "var(--page-background)" }}>
      <div className="container faq-preview-section__inner">
        <h2 className="m-0 mb-4 text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          Frequently asked
        </h2>
        <Accordion multiple className="section-fade-in">
          {FAQ_PREVIEW_ITEMS.map((item, i) => (
            <AccordionTab key={i} header={item.question}>
              <p className="m-0">{item.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
        <div className="mt-3">
          <Link href="/faq" className="p-button p-button-text no-underline">
            See full FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
}
