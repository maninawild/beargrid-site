"use client";

import { FormEvent, useState } from "react";

type State = { status: "idle" | "loading" | "success" | "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle", message: "" });
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState({ status: "loading", message: "" });
    const params = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "intent"]
        .map((key) => [key, params.get(key)?.slice(0, 200)])
        .filter((entry): entry is [string, string] => Boolean(entry[1])),
    );
    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      ...attribution,
      startedAt,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Please check the form and try again.");
      form.reset();
      setState({ status: "success", message: data.message || "Thank you. Your project details have been sent." });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "We could not send your message. Please try again." });
    }
  }

  if (state.status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span>Message received</span>
        <h2>Thank you.</h2>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form" aria-describedby="contact-form-note">
      <p id="contact-form-note">All fields are required.</p>
      <label>
        Name
        <input required name="name" autoComplete="name" maxLength={120} />
      </label>
      <label>
        Company
        <input required name="company" autoComplete="organization" maxLength={160} />
      </label>
      <label>
        Email
        <input required type="email" name="email" autoComplete="email" maxLength={200} />
      </label>
      <label>
        Short project description
        <textarea required name="message" rows={5} minLength={20} maxLength={2000} />
      </label>
      <label className="form-trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Sending…" : "Submit project details"}
      </button>
      {state.status === "error" ? (
        <p className="form-error" role="alert">{state.message}</p>
      ) : null}
    </form>
  );
}

export function JobForm() {
  return <ContactForm />;
}
