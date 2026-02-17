"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Message } from "primereact/message";
import { BOOK_LESSON_HREF } from "@/constants/nav";

export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <main className="section flex-grow-1">
        <div className="container grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="m-0 mb-3 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Schedule & contact
            </h1>
            <p className="m-0 mb-4 text-color-secondary">
              Book a lesson or send an inquiry. We’ll get back to you quickly with availability and next steps.
            </p>
            <h2 className="m-0 mb-2 text-xl font-semibold">How scheduling works</h2>
            <ol className="m-0 mb-4 pl-4 text-color-secondary">
              <li className="mb-2">Choose your package (or tell us what you’re looking for).</li>
              <li className="mb-2">We’ll send a link to pick a time that works.</li>
              <li>Confirm and show up at the pool.</li>
            </ol>
            <div
              className="p-4 border-round surface-card border-1 surface-border flex align-items-center justify-content-center min-h-15rem"
              style={{ borderColor: "var(--surface-border)" }}
            >
              <p className="m-0 text-color-secondary text-center">
                Scheduling integration placeholder
                <br />
                <span className="text-sm">(e.g. Calendly embed or link)</span>
              </p>
            </div>
            <a href={BOOK_LESSON_HREF} className="no-underline mt-3 inline-block">
              <Button label="Book a lesson" className="cta-accent p-button-lg" />
            </a>
          </div>

          <div>
            <h2 className="m-0 mb-3 text-xl font-semibold">Send an inquiry</h2>
            <form
              className="flex flex-column gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <FloatLabel>
                <InputText id="name" className="w-full" />
                <label htmlFor="name">Name</label>
              </FloatLabel>
              <FloatLabel>
                <InputText id="email" type="email" className="w-full" />
                <label htmlFor="email">Email</label>
              </FloatLabel>
              <FloatLabel>
                <InputText id="message" className="w-full" />
                <label htmlFor="message">Message</label>
              </FloatLabel>
              <Button type="submit" label="Send" className="w-full" />
              {submitted && (
                <Message severity="success" text="Thanks! We’ll be in touch. (Form is placeholder — no backend yet.)" />
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
