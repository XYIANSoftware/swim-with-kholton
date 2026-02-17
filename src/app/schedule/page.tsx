"use client";

import { useForm, Controller } from "react-hook-form";
import { Header, Footer } from "@/components/layout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Message } from "primereact/message";
import { BOOK_LESSON_HREF } from "@/constants/nav";

type InquiryFormValues = {
  name: string;
  email: string;
  message: string;
};

const defaultValues: InquiryFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function SchedulePage() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<InquiryFormValues>({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = () => {
    // Placeholder — no backend yet
  };

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
            <h2 id="inquiry-heading" className="m-0 mb-3 text-xl font-semibold">
              Send an inquiry
            </h2>
            <form
              className="flex flex-column gap-3"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-labelledby="inquiry-heading"
            >
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field, fieldState }) => {
                  const errorId = "name-error";
                  return (
                    <div className="flex flex-column gap-1">
                      <FloatLabel>
                        <InputText
                          id="name"
                          className={`w-full ${fieldState.invalid ? "p-invalid" : ""}`}
                          aria-invalid={!!fieldState.error}
                          aria-describedby={fieldState.error ? errorId : undefined}
                          {...field}
                        />
                        <label htmlFor="name">Name</label>
                      </FloatLabel>
                      {fieldState.error && (
                        <small id={errorId} className="p-error block" role="alert">
                          {fieldState.error.message}
                        </small>
                      )}
                    </div>
                  );
                }}
              />

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field, fieldState }) => {
                  const errorId = "email-error";
                  return (
                    <div className="flex flex-column gap-1">
                      <FloatLabel>
                        <InputText
                          id="email"
                          type="email"
                          autoComplete="email"
                          className={`w-full ${fieldState.invalid ? "p-invalid" : ""}`}
                          aria-invalid={!!fieldState.error}
                          aria-describedby={fieldState.error ? errorId : undefined}
                          {...field}
                        />
                        <label htmlFor="email">Email</label>
                      </FloatLabel>
                      {fieldState.error && (
                        <small id={errorId} className="p-error block" role="alert">
                          {fieldState.error.message}
                        </small>
                      )}
                    </div>
                  );
                }}
              />

              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field, fieldState }) => {
                  const errorId = "message-error";
                  return (
                    <div className="flex flex-column gap-1">
                      <FloatLabel>
                        <InputTextarea
                          id="message"
                          rows={4}
                          className={`w-full ${fieldState.invalid ? "p-invalid" : ""}`}
                          aria-invalid={!!fieldState.error}
                          aria-describedby={fieldState.error ? errorId : undefined}
                          {...field}
                        />
                        <label htmlFor="message">Message</label>
                      </FloatLabel>
                      {fieldState.error && (
                        <small id={errorId} className="p-error block" role="alert">
                          {fieldState.error.message}
                        </small>
                      )}
                    </div>
                  );
                }}
              />

              <Button type="submit" label="Send" className="w-full" aria-describedby={isSubmitSuccessful ? "submit-success" : undefined} />
              {isSubmitSuccessful && (
                <Message id="submit-success" severity="success" text="Thanks! We’ll be in touch. (Form is placeholder — no backend yet.)" role="status" />
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
