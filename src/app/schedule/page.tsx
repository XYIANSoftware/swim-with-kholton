import type { SearchParamsPromise } from "@/types/next";

export const metadata = {
  title: "Schedule | Kholton Swim Coaching",
  description: "Book a lesson with Kholton.",
};

type SchedulePageProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  searchParams?: SearchParamsPromise;
}>;

export default async function SchedulePage(props: SchedulePageProps) {
  await Promise.all([
    props.params ?? Promise.resolve({}),
    props.searchParams ?? Promise.resolve({}),
  ]);
  return (
    <section className="container">
      <h1 className="m-0 mb-3 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
        Schedule
      </h1>
      <p className="m-0 text-color-secondary" style={{ color: "var(--text-color-secondary)" }}>
        Calendly goes here.
      </p>
    </section>
  );
}
