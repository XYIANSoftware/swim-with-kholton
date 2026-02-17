import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { PACKAGES } from "@/constants/packages";
import { BOOK_LESSON_HREF } from "@/constants/nav";

export default function PackagesPage() {
  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <main className="section flex-grow-1">
        <div className="container">
          <h1 className="m-0 mb-2 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Packages
          </h1>
          <p className="m-0 mb-4 text-color-secondary" style={{ maxWidth: "40rem" }}>
            Choose the option that fits your goals. Prices and availability depend on location and schedule — we’ll confirm when you book.
          </p>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.id} className="shadow-2 h-full">
                <div className="flex flex-column h-full">
                  <h2 className="m-0 mb-2 text-xl font-semibold">{pkg.name}</h2>
                  <p className="m-0 mb-3 text-sm text-color-secondary">{pkg.forWho}</p>
                  <ul className="m-0 mb-3 pl-3 text-sm">
                    {pkg.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="m-0 mb-3 text-sm">
                    <strong>Duration:</strong> {pkg.duration}
                    <br />
                    <strong>Price:</strong> {pkg.price}
                  </p>
                  <Link href={BOOK_LESSON_HREF} className="mt-auto">
                    <Button label="Choose Package" className="w-full" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-4 p-3 border-round surface-ground border-1 surface-border" style={{ borderColor: "var(--surface-border)" }}>
            <h3 className="m-0 mb-2 text-lg font-semibold">Policies (placeholder)</h3>
            <p className="m-0 text-sm text-color-secondary">
              Cancellations and weather: we’ll share full details when you book. Generally, we ask for 24 hours notice for changes and will reschedule when the pool or conditions aren’t safe.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
