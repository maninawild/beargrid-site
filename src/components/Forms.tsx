"use client";

import { FormEvent, useState } from "react";

type State = { status: "idle" | "loading" | "success" | "error"; message: string };

async function submitForm(endpoint: string, form: HTMLFormElement) {
  const payload = Object.fromEntries(new FormData(form).entries());
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await response.json()) as { message?: string };
  if (!response.ok) {
    throw new Error(data.message || "Please check the form and try again.");
  }
  return data.message || "Thank you. We will be in touch soon.";
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>({ status: "idle", message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState({ status: "loading", message: "" });
    try {
      const message = await submitForm("/api/contact", form);
      form.reset();
      setState({ status: "success", message });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 wix-form contact-application" aria-describedby="contact-form-help">
      {!compact ? <h2 className="text-3xl font-semibold text-neutral-950">Contact / Application</h2> : null}
      <p id="contact-form-help" className="form-help">Required fields are marked with an asterisk.</p>
      <label>Name *<input required name="name" autoComplete="name" /></label>
      <label>Company / Organization <span>(optional)</span><input name="company" autoComplete="organization" /></label>
      <label>Email *<input required type="email" name="email" autoComplete="email" /></label>
      <label>Phone / WhatsApp <span>(optional)</span><input name="phone" autoComplete="tel" /></label>
      <label>What would you like to discuss? *<textarea required name="message" rows={5} /></label>
      <label>Area of interest *
        <select required name="interest" defaultValue="">
          <option value="" disabled>Select an area</option>
          <option>Business Advisory</option>
          <option>Technology Project</option>
          <option>Partnership</option>
          <option>Venture Collaboration</option>
          <option>Investment Opportunity</option>
          <option>Original Bear Grid Platform</option>
          <option>Other</option>
        </select>
      </label>
      <label className="consent-row"><input required type="checkbox" name="consent" value="yes" /> I consent to Bear Grid using these details to respond to my enquiry. *</label>
      <button
        type="submit"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Sending..." : "Send application"}
      </button>
      {state.message ? (
        <p className="text-sm" role="status" aria-live="polite">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

export function JobForm() {
  const [state, setState] = useState<State>({ status: "idle", message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ status: "loading", message: "" });
    try {
      const message = await submitForm("/api/jobs", form);
      form.reset();
      setState({ status: "success", message });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 wix-form" noValidate>
      <h2 className="text-3xl font-semibold text-neutral-950">Come Work With Us</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="firstName" placeholder="First Name" />
        <input required name="lastName" placeholder="Last Name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="email" name="email" placeholder="Email" />
        <input required name="phone" placeholder="Phone" />
      </div>
      <input required name="profile" placeholder="Link to CV/LinkedIn" />
      <select required name="position" defaultValue="">
        <option value="" disabled>
          Choose an option
        </option>
        <option>SMM Manager Intern</option>
        <option>Marketing Research Specialist</option>
        <option>Administrative Support Intern</option>
        <option>Other collaboration</option>
      </select>
      <button
        type="submit"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Sending..." : "Apply"}
      </button>
      {state.message ? (
        <p className="text-sm" role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
