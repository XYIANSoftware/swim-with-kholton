import { Accordion, AccordionTab } from "primereact/accordion";
import { FAQ_PREVIEW_ITEMS } from "@/constants/copy";
import type { SearchParamsPromise } from "@/types/next";

const EXTRA_FAQ = [
  {
    question: "Pool or location requirements?",
    answer: "We work at pools that are convenient for you, or we can suggest options in your area. Safety and access are our priority.",
  },
  {
    question: "How quickly will I improve?",
    answer: "It depends on your starting point and how often you swim. Most people notice clearer technique and more confidence within a few sessions. We’ll set realistic goals together.",
  },
];

type FAQPageProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  searchParams?: SearchParamsPromise;
}>;

export default async function FAQPage(props: FAQPageProps) {
  await Promise.all([
    props.params ?? Promise.resolve({}),
    props.searchParams ?? Promise.resolve({}),
  ]);
  const allFaq = [...FAQ_PREVIEW_ITEMS, ...EXTRA_FAQ];
  return (
    <section className="container container-narrow">
          <h1 className="m-0 mb-4 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            FAQ
          </h1>
          <Accordion multiple>
            {allFaq.map((item, i) => (
              <AccordionTab key={i} header={item.question}>
                <p className="m-0">{item.answer}</p>
              </AccordionTab>
            ))}
          </Accordion>
    </section>
  );
}
