import Link from "next/link";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { PACKAGES } from "@/constants/packages";

export function PackageCardsSection() {
  return (
    <section className="section" style={{ background: "var(--page-background)" }}>
      <div className="container">
        <h2 className="m-0 mb-4 text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          Packages
        </h2>
        <p className="m-0 mb-4 text-color-secondary" style={{ color: "var(--text-color-secondary)", maxWidth: "40rem" }}>
          Choose the option that fits your goals. All sessions are one-on-one unless noted.
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {PACKAGES.slice(0, 3).map((pkg) => {
            const footer = (
              <Link href="/packages" className="block w-full">
                <Button label="Choose Package" className="w-full" />
              </Link>
            );
            return (
              <Card
                key={pkg.id}
                title={pkg.name}
                subTitle={pkg.forWho}
                footer={footer}
                className="shadow-2 h-full flex flex-column"
              >
                <ul className="m-0 mb-3 pl-3 text-sm list-disc">
                  {pkg.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="m-0 text-sm text-color-secondary">
                  <strong>Duration:</strong> {pkg.duration} · <strong>Price:</strong> {pkg.price}
                </p>
              </Card>
            );
          })}
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
