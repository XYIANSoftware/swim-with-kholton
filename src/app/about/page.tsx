"use client";

import { useRef } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { Header, Footer } from "@/components/layout";
import {
  ABOUT_HEADLINE,
  ABOUT_BIO,
  CREDENTIALS,
  PHILOSOPHY_PILLARS,
  WHAT_TO_EXPECT,
} from "@/constants/about";

export default function AboutPage() {
  const stepperRef = useRef<any>(null);

  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <main className="section flex-grow-1">
        <div className="container">
          <h1 className="m-0 mb-4 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            {ABOUT_HEADLINE}
          </h1>

          <div className="card mb-5">
            <TabView>
              <TabPanel header="About">
                <div className="flex flex-column md:flex-row gap-4">
                  <div
                    className="w-full md:w-20rem h-20rem border-round flex-shrink-0"
                    style={{
                      background: "var(--surface-ground)",
                      border: "1px solid var(--surface-border)",
                    }}
                  />
                  <div>
                    <p className="m-0 mb-4 text-lg" style={{ color: "var(--text-color)" }}>
                      {ABOUT_BIO}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
              </TabPanel>
              <TabPanel header="Coaching philosophy">
                <div className="grid gap-3 md:grid-cols-3">
                  {PHILOSOPHY_PILLARS.map((p, i) => (
                    <div
                      key={i}
                      className="p-3 border-round"
                      style={{
                        background: "var(--surface-card)",
                        border: "1px solid var(--surface-border)",
                      }}
                    >
                      <h3 className="m-0 mb-2 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                        {p.title}
                      </h3>
                      <p className="m-0 text-sm text-color-secondary">{p.body}</p>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </TabView>
          </div>

          <h2 className="m-0 mb-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            What to expect
          </h2>
        </div>

        <div className="stepper-banner">
          <div className="card flex justify-content-center stepper-wrapper">
            <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }} headerPosition="bottom">
              <StepperPanel header="Check-in">
                <div className="flex flex-column h-12rem">
                  <p className="m-0 flex-auto flex align-items-center" style={{ color: "var(--stepper-text)" }}>{WHAT_TO_EXPECT[0]}</p>
                </div>
                <div className="flex pt-4 justify-content-end">
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={() => stepperRef.current?.nextCallback()}
                  />
                </div>
              </StepperPanel>
              <StepperPanel header="Session">
                <div className="flex flex-column h-12rem">
                  <p className="m-0 flex-auto flex align-items-center" style={{ color: "var(--stepper-text)" }}>{WHAT_TO_EXPECT[1]}</p>
                </div>
                <div className="flex pt-4 justify-content-between">
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current?.prevCallback()}
                  />
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={() => stepperRef.current?.nextCallback()}
                  />
                </div>
              </StepperPanel>
              <StepperPanel header="Takeaways">
                <div className="flex flex-column h-12rem">
                  <p className="m-0 flex-auto flex align-items-center" style={{ color: "var(--stepper-text)" }}>{WHAT_TO_EXPECT[2]}</p>
                </div>
                <div className="flex pt-4 justify-content-start">
                  <Button
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    onClick={() => stepperRef.current?.prevCallback()}
                  />
                </div>
              </StepperPanel>
            </Stepper>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
