import { HOW_IT_WORKS_STEPS } from "@/constants/copy";

export function HowItWorksSection() {
  return (
    <section className="section" style={{ background: "var(--surface-section)" }}>
      <div className="container">
        <h2 className="m-0 mb-4 text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          How it works
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 stagger-children">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div
              key={i}
              className="p-3 border-round surface-card border-1 surface-border"
              style={{ borderColor: "var(--surface-border)" }}
            >
              <span
                className="inline-flex align-items-center justify-content-center border-circle w-2rem h-2rem font-bold mb-2"
                style={{ background: "var(--primary-color)", color: "var(--primary-color-text)" }}
              >
                {i + 1}
              </span>
              <h3 className="m-0 mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="m-0 text-sm text-color-secondary">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
