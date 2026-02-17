"use client";

import { useState } from "react";
import Link from "next/link";
import { TrustStrip } from "@/components/pages/home";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { PACKAGES } from "@/constants/packages";
import type { PackageOption } from "@/constants/packages";
import { BOOK_LESSON_HREF } from "@/constants/nav";

/** Package list as used by DataView (e.g. from API/JSON); source: constants/packages.ts */
const packageList: PackageOption[] = [...PACKAGES];

/**
 * Single package card (PrimeReact Card). Used in both grid and list layouts.
 */
function PackageCard({ pkg, compact = false }: { pkg: PackageOption; compact?: boolean }) {
  const footer = (
    <Link href={BOOK_LESSON_HREF} className="block w-full">
      <Button label="Choose Package" className="w-full" />
    </Link>
  );
  return (
    <Card
      title={pkg.name}
      subTitle={pkg.forWho}
      footer={footer}
      className={`shadow-2 h-full flex flex-column ${compact ? "packages-page-card-list" : ""}`}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {pkg.level && (
          <Tag value={pkg.level} severity={pkg.levelSeverity} rounded />
        )}
        <Tag value={pkg.duration} severity="secondary" rounded />
        <Tag value={pkg.price} severity="secondary" rounded />
      </div>
      <ul className="m-0 mb-3 pl-3 text-sm list-disc">
        {pkg.benefits.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}

export default function PackagesPage() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const header = () => (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
      <h2 className="m-0 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
        Options
      </h2>
      <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value as "grid" | "list")} />
    </div>
  );

  const itemTemplate = (pkg: PackageOption, layoutMode: "grid" | "list") => {
    if (layoutMode === "list") {
      return (
        <div className="col-12">
          <PackageCard pkg={pkg} compact />
        </div>
      );
    }
    return (
      <div className="col-12 md:col-6 lg:col-4">
        <PackageCard pkg={pkg} />
      </div>
    );
  };

  return (
    <section className="section" style={{ background: "var(--page-background)" }}>
      <div className="container">
        <h1 className="m-0 mb-2 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          Packages
        </h1>
        <p className="m-0 mb-4 text-color-secondary" style={{ maxWidth: "40rem" }}>
          Choose the option that fits your goals. Prices and availability depend on location and schedule — we’ll confirm when you book.
        </p>

        <TrustStrip />

        <DataView
          value={packageList}
          dataKey="id"
          layout={layout}
          header={header()}
          gutter
          itemTemplate={itemTemplate}
          pt={{
            grid: { className: "grid justify-content-center packages-page-dataview-grid" },
            content: { className: "packages-page-dataview-content" },
          }}
        />

        <div className="mt-4 p-3 border-round surface-ground border-1 surface-border" style={{ borderColor: "var(--surface-border)" }}>
          <h3 className="m-0 mb-2 text-lg font-semibold">Policies (placeholder)</h3>
          <p className="m-0 text-sm text-color-secondary">
            Cancellations and weather: we’ll share full details when you book. Generally, we ask for 24 hours notice for changes and will reschedule when the pool or conditions aren’t safe.
          </p>
        </div>
      </div>
    </section>
  );
}
