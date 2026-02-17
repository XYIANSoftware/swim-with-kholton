export const metadata = {
  title: "Privacy Policy | Kholton Swim Coaching",
  description: "Privacy policy for Kholton Swim Coaching.",
};

export default function PrivacyPage() {
  return (
    <section className="container container-narrow">
          <h1 className="m-0 mb-2 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Privacy Policy
          </h1>
          <p className="m-0 mb-4 text-sm" style={{ color: "var(--text-color-secondary)" }}>
            Last updated: February 2026
          </p>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Information we collect
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              We collect information you provide when you contact us or book a lesson, such as name, email, phone number, and any details you share about your swimming goals or scheduling preferences.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              How we use it
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              We use this information to schedule and deliver lessons, communicate with you about your sessions, and improve our coaching services. We do not sell your information to third parties.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Cookies and tracking
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              This site may use basic cookies or similar technologies for functionality (e.g. theme preference). We keep tracking to a minimum. If we add analytics later, we will describe them here.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>
              Contact
            </h2>
            <p className="m-0" style={{ color: "var(--text-color-secondary)" }}>
              For privacy-related questions, contact us at the email or phone number listed in the footer.
            </p>
          </section>
    </section>
  );
}
