import { COACHING_FOCUS_ITEMS } from "@/constants/copy";

export function CoachingFocusSection() {
  return (
    <section className="section" style={{ background: "var(--page-background)" }}>
      <div className="container">
        <h2 className="m-0 mb-4 text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          What we work on
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {COACHING_FOCUS_ITEMS.map((item, i) => (
            <div
              key={i}
              className="p-3 border-round surface-card border-1 surface-border"
              style={{ borderColor: "var(--surface-border)" }}
            >
              <i className={`pi ${item.icon} text-2xl mb-2`} style={{ color: "var(--primary-color)" }} />
              <h3 className="m-0 mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="m-0 text-sm text-color-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
