"use client";

import "./PackageCardsSection.scss";
import Link from "next/link";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { PACKAGES } from "@/constants/packages";
import type { PackageOption } from "@/constants/packages";

const responsiveOptions: CarouselResponsiveOption[] = [
  { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
  { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
  { breakpoint: "767px", numVisible: 2, numScroll: 1 },
  { breakpoint: "575px", numVisible: 1, numScroll: 1 },
];

export function PackageCardsSection() {
  const itemTemplate = (pkg: PackageOption) => {
    const footer = (
      <Link href="/packages" className="block w-full">
        <Button label="Choose Package" className="w-full" />
      </Link>
    );
    return (
      <div className="packages-carousel__item">
        <Card
          title={pkg.name}
          subTitle={pkg.forWho}
          footer={footer}
          className="packages-carousel__card shadow-2"
        >
          <div className="flex flex-wrap gap-2 mb-2">
            {pkg.level && (
              <Tag value={pkg.level} severity={pkg.levelSeverity} rounded />
            )}
            <Tag value={pkg.duration} severity="secondary" rounded />
            <Tag value={pkg.price} severity="secondary" rounded />
          </div>
          <ul className="m-0 pl-3 text-sm list-disc">
            {pkg.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Card>
      </div>
    );
  };

  return (
    <section className="section" style={{ background: "var(--page-background)" }}>
      <div className="container">
        <h2 className="m-0 mb-4 text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          Packages
        </h2>
        <p
          className="m-0 mb-4 text-color-secondary"
          style={{ color: "var(--text-color-secondary)", maxWidth: "40rem" }}
        >
          Choose the option that fits your goals. All sessions are one-on-one unless noted.
        </p>
        <div className="card packages-carousel">
          <Carousel
            value={[...PACKAGES]}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={itemTemplate}
            circular
            autoplayInterval={4000}
          />
        </div>
        <div className="mt-3 flex justify-content-center">
          <Link href="/packages" className="p-button p-button-outlined no-underline">
            View all packages
          </Link>
        </div>
      </div>
    </section>
  );
}
