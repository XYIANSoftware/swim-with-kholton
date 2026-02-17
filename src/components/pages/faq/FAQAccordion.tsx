"use client";

import { Accordion, AccordionTab } from "primereact/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion multiple>
      {items.map((item, i) => (
        <AccordionTab key={i} header={item.question}>
          <p className="m-0">{item.answer}</p>
        </AccordionTab>
      ))}
    </Accordion>
  );
}
