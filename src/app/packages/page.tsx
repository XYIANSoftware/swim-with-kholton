"use client";

import { use, useState } from "react";
import Link from "next/link";
import { TrustStrip } from "@/components/pages/home";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { PACKAGES } from "@/constants/packages";
import type { PackageOption } from "@/constants/packages";
import { BOOK_LESSON_HREF } from "@/constants/nav";
import { EMPTY_PARAMS_PROMISE, EMPTY_SEARCH_PARAMS_PROMISE, type SearchParamsPromise } from "@/types/next";

/** Package list as used by DataView (e.g. from API/JSON); source: constants/packages.ts */
const packageList: PackageOption[] = [...PACKAGES];

/** Single package card (PrimeReact Card). Used in grid layout. */
function PackageCard({ pkg }: { pkg: PackageOption }) {
  const footer = (
    <Link href={BOOK_LESSON_HREF} className="block w-full">
      <Button label="Choose Package" className="w-full" />
    </Link>
  );
  return (
    <Card title={pkg.name} subTitle={pkg.forWho} footer={footer} className="shadow-2 h-full flex flex-column">
      <div className="flex flex-wrap gap-2 mb-3">
        {pkg.level && <Tag value={pkg.level} severity={pkg.levelSeverity} rounded />}
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

/** Compact list row (PrimeReact DataView list style): dense row, thin divider, action on right. */
function PackageListRow({ pkg }: { pkg: PackageOption }) {
  return (
    <div className="packages-page-list-row flex flex-column sm:flex-row sm:align-items-center gap-2 py-3 px-3 sm:px-4">
      <div className="flex flex-column gap-0 flex-1 min-w-0">
        <span className="font-semibold text-base" style={{ color: "var(--text-color)" }}>
          {pkg.name}
        </span>
        <span className="text-sm text-color-secondary">{pkg.forWho}</span>
        <div className="flex flex-wrap gap-1 mt-1">
          {pkg.level && <Tag value={pkg.level} severity={pkg.levelSeverity} rounded className="packages-list-tag" />}
          <Tag value={pkg.duration} severity="secondary" rounded className="packages-list-tag" />
          <Tag value={pkg.price} severity="secondary" rounded className="packages-list-tag" />
        </div>
      </div>
      <div className="flex-shrink-0 sm:ml-2">
        <Link href={BOOK_LESSON_HREF}>
          <Button label="Choose" icon="pi pi-arrow-right" iconPos="right" className="p-button-sm" />
        </Link>
      </div>
    </div>
  );
}

type PackagesPageProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  searchParams?: SearchParamsPromise;
}>;

export default function PackagesPage({ params, searchParams }: PackagesPageProps) {
  use(params ?? EMPTY_PARAMS_PROMISE);
  use(searchParams ?? EMPTY_SEARCH_PARAMS_PROMISE);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const header = () => (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
        Options
      </span>
      <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value as "grid" | "list")} />
    </div>
  );

  const itemTemplate = (pkg: PackageOption, layoutMode: "grid" | "list") => {
    if (layoutMode === "list") {
      return (
        <div key={pkg.id} className="col-12">
          <PackageListRow pkg={pkg} />
        </div>
      );
    }
    return (
      <div key={pkg.id} className="col-12 md:col-6 lg:col-4 p-2">
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

        <div className="packages-dataview-wrap">
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
        </div>

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
