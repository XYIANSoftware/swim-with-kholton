import { Card } from "primereact/card";
import { TESTIMONIALS } from "@/constants/copy";

export function TestimonialsSection() {
  return (
    <section className="section" style={{ background: "var(--surface-section)" }}>
      <div className="container">
        <h2 className="m-0 mb-4 text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          What people say
        </h2>
        <div className="grid gap-3 md:grid-cols-3 stagger-children">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="shadow-1">
              <p className="m-0 mb-2 text-color-secondary" style={{ fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
              <p className="m-0 text-sm font-medium">{t.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
