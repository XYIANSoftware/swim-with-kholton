import { Header, Footer } from "@/components/layout";
import {
  ABOUT_HEADLINE,
  ABOUT_BIO,
  CREDENTIALS,
  PHILOSOPHY_PILLARS,
  WHAT_TO_EXPECT,
} from "@/constants/about";

export default function AboutPage() {
  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <main className="section flex-grow-1">
        <div className="container">
          <h1 className="m-0 mb-4 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            {ABOUT_HEADLINE}
          </h1>

          <div className="flex flex-column md:flex-row gap-4 mb-5">
            <div
              className="w-full md:w-20rem h-20rem border-round flex-shrink-0"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--surface-border)",
              }}
            />
            <div>
              <p className="m-0 mb-4 text-lg" style={{ color: "var(--text-color)" }}>
                {ABOUT_BIO}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {CREDENTIALS.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 border-round text-sm font-medium"
                    style={{
                      background: "var(--highlight-bg)",
                      color: "var(--text-color)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h2 className="m-0 mb-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Coaching philosophy
          </h2>
          <div className="grid gap-3 md:grid-cols-3 mb-5">
            {PHILOSOPHY_PILLARS.map((p, i) => (
              <div
                key={i}
                className="p-3 border-round surface-card border-1 surface-border"
                style={{ borderColor: "var(--surface-border)" }}
              >
                <h3 className="m-0 mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="m-0 text-sm text-color-secondary">{p.body}</p>
              </div>
            ))}
          </div>

          <h2 className="m-0 mb-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            What to expect
          </h2>
          <ul className="m-0 pl-4 text-color-secondary">
            {WHAT_TO_EXPECT.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
