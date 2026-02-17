import Link from "next/link";
import { Button } from "primereact/button";

export default function NotFound() {
  return (
    <section
      className="section flex flex-column align-items-center justify-content-center w-full"
      style={{
        background: "var(--page-background)",
        minHeight: "min(60vh, 500px)",
      }}
    >
      <div className="flex flex-column align-items-center text-center px-3" style={{ maxWidth: "32rem", width: "100%" }}>
        <p
          className="m-0 mb-2 text-6xl font-bold"
          style={{ color: "var(--primary-color)", letterSpacing: "0.02em" }}
        >
          404
        </p>
        <h1
          className="m-0 mb-3 text-3xl md:text-4xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Page not found
        </h1>
        <p className="m-0 mb-4 text-color-secondary">
          The page you’re looking for doesn’t exist or may have been moved. Head back to the home page to find your way.
        </p>
        <Link href="/">
          <Button label="Back to Home" icon="pi pi-home" iconPos="left" className="cta-accent" />
        </Link>
      </div>
    </section>
  );
}
