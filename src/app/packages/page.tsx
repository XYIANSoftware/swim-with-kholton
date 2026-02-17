"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { DataView } from "primereact/dataview";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { PACKAGES } from "@/constants/packages";
import type { PackageOption } from "@/constants/packages";
import { BOOK_LESSON_HREF } from "@/constants/nav";

/**
 * Single package card for DataView itemTemplate.
 * Styling uses theme CSS variables (see primereact.org/colors) and
 * uniform sizing classes from utilities (package-card-*).
 */
function PackageCard({ pkg }: { pkg: PackageOption }) {
  return (
    <Card className="package-card shadow-2 h-full">
      <div className="package-card-inner flex flex-column h-full">
        <h2 className="m-0 mb-2 text-xl font-semibold">{pkg.name}</h2>
        <p className="m-0 mb-3 text-sm text-color-secondary package-card-for">
          {pkg.forWho}
        </p>
        <ul className="m-0 mb-3 pl-3 text-sm package-card-benefits">
          {pkg.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="m-0 mb-3 text-sm package-card-meta">
          <strong>Duration:</strong> {pkg.duration}
          <br />
          <strong>Price:</strong> {pkg.price}
        </p>
        <Link href={BOOK_LESSON_HREF} className="mt-auto">
          <Button label="Choose Package" className="w-full" />
        </Link>
      </div>
    </Card>
  );
}

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

          {/* DataView grid: itemTemplate per Layout docs; PrimeFlex col classes define responsive columns (primereact.org/dataview/#layout). */}
          <DataView
            value={[...PACKAGES]}
            layout="grid"
            className="packages-dataview"
            pt={{
              grid: { className: "packages-dataview-grid" },
            }}
            itemTemplate={(pkg: PackageOption) => (
              <div className="col-12 md:col-6 lg:col-4">
                <PackageCard pkg={pkg} />
              </div>
            )}
          />

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
