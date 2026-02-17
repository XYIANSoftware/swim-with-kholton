import { TRUST_ITEMS } from "@/constants/copy";

export function TrustStrip() {
  return (
    <section className="py-4 px-3" style={{ background: "var(--surface-section)", borderTop: "1px solid var(--surface-border)", borderBottom: "1px solid var(--surface-border)" }}>
      <div className="container flex flex-wrap justify-content-center gap-3 md:gap-4">
        {TRUST_ITEMS.map(({ icon, label }) => (
          <div
            key={label}
            className="flex align-items-center gap-2 px-3 py-2 border-round"
            style={{ color: "var(--text-color-secondary)" }}
          >
            <i className={`pi ${icon} text-xl`} style={{ color: "var(--primary-color)" }} />
            <span className="font-medium text-sm md:text-base">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
