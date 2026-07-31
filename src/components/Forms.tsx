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
    <form onSubmit={onSubmit} className="grid gap-4 wix-form" noValidate>
      {!compact ? <h2 className="text-3xl font-semibold text-neutral-950">Reach us now</h2> : null}
      <p className="text-sm leading-6 text-neutral-600">Sign up to learn more</p>
      <input required name="name" placeholder="Name" />
      <input required type="email" name="email" placeholder="Email" />
      <input required name="subject" placeholder="Subject" />
      <textarea required name="message" placeholder="Message" rows={5} />
      <button
        type="submit"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Sending..." : compact ? "Send" : "Get in touch"}
      </button>
      {state.message ? (
        <p className="text-sm" role="status">
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
