import type { SearchParamsPromise } from "@/types/next";

export const metadata = {
  title: "Terms of Use | Kholton Swim Coaching",
  description: "Terms of use for Kholton Swim Coaching.",
};

type TermsPageProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  searchParams?: SearchParamsPromise;
}>;

export default async function TermsPage({ params, searchParams }: TermsPageProps) {
  await Promise.all([params ?? Promise.resolve({}), searchParams ?? Promise.resolve({})]);
  return (
    <section className="container container-narrow">
          <h1 className="m-0 mb-2 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Terms of Use
          </h1>
          <p className="m-0 mb-4 text-sm" style={{ color: "var(--text-color-secondary)" }}>
            Last updated: February 2026
          </p>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Acceptance
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              By using this website or booking a lesson, you agree to these terms. If you do not agree, please do not use the site or our services.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Services
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              Kholton Swim Coaching provides swim instruction and related coaching. Scheduling, pricing, and policies (e.g. cancellations) will be communicated when you book or as described on the site.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              User conduct
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              You agree to provide accurate information when contacting us or booking, and to follow any safety or facility rules that apply during lessons.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Limitation of liability
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              Swimming involves inherent risk. Participation is at your own risk. To the extent permitted by law, we are not liable for injury, loss, or damage arising from your use of our services or this website.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Changes
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              We may update these terms from time to time. The “Last updated” date at the top will change when we do. Continued use of the site or services after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Contact
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              For questions about these terms, contact us at the email or phone number listed in the footer.
            </p>
          </section>
    </section>
  );
}
