"use client";

import { FormEvent, useRef, useState } from "react";
import type { Locale } from "@/i18n";

type State = { status: "idle" | "loading" | "success" | "error"; message: string };

const options = {
  en: ["Technology Assessment", "R&D Strategy", "Venture Validation", "Innovation Partnerships", "Strategy & Complex Problem Solving", "Sales Systems", "AI Automation", "Digital Products & Websites", "Executive Advisory", "Venture Team Assembly", "Other"],
  nl: ["Technologiebeoordeling", "R&D-strategie", "Validatie van nieuwe ondernemingen", "Innovatiepartnerschappen", "Strategie & complexe vraagstukken", "Verkoopsystemen", "AI-automatisering", "Digitale producten & websites", "Advies aan directie en bestuur", "Samenstellen van ventureteams", "Anders"],
};

export function ContactForm({ initialNeed = "", locale = "en" }: { initialNeed?: string; locale?: Locale }) {
  const isNl = locale === "nl";
  const [state, setState] = useState<State>({ status: "idle", message: "" });
  const [startedAt] = useState(() => Date.now());
  const sending = useRef(false);
  const [need, setNeed] = useState(initialNeed);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    sending.current = true;
    setState({ status: "loading", message: "" });
    const params = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "intent", "service"]
        .map((key) => [key, params.get(key)?.slice(0, 200)])
        .filter((entry): entry is [string, string] => Boolean(entry[1])),
    );
    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      ...attribution,
      locale,
      startedAt,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || (isNl ? "Controleer het formulier en probeer het opnieuw." : "Please check the form and try again."));
      setState({ status: "success", message: data.message || (isNl ? "Bedankt. Uw projectgegevens zijn verzonden." : "Thank you. Your project details have been sent.") });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : (isNl ? "We konden uw bericht niet verzenden. Probeer het opnieuw." : "We could not send your message. Please try again.") });
      sending.current = false;
    }
  }

  if (state.status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span>{isNl ? "Bericht ontvangen" : "Message received"}</span>
        <h2>{isNl ? "Bedankt." : "Thank you."}</h2>
        <p>{isNl ? "We hebben uw aanvraag ontvangen en nemen binnenkort contact met u op." : "We have received your enquiry and will contact you shortly."}</p>
        <a className="text-link" href="https://wa.me/message/4OIGQ3FHUZQSD1" target="_blank" rel="noreferrer">
          {isNl ? "Stuur ons een bericht via WhatsApp" : "Message us on WhatsApp"}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form" aria-describedby="contact-form-note">
      <p id="contact-form-note">{isNl ? "Zeven korte vragen. Alle velden zijn verplicht." : "Seven short questions. All fields are required."}</p>
      <label>
        {isNl ? "Naam" : "Name"}
        <input required name="name" autoComplete="name" maxLength={120} />
      </label>
      <label>
        {isNl ? "Bedrijf" : "Company"}
        <input required name="company" autoComplete="organization" maxLength={160} />
      </label>
      <label>
        {isNl ? "Waarmee kunnen we u helpen?" : "What do you need help with?"}
        <select required name="need" value={need} onChange={(event) => setNeed(event.target.value)}>
          <option value="">{isNl ? "Maak een keuze" : "Select one"}</option>
          {options[locale].map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label>
        {isNl ? "Beschrijf uw vraagstuk" : "Describe your challenge"}
        <textarea required name="message" rows={5} minLength={20} maxLength={2000} />
      </label>
      <label>
        Budget
        <select required name="budget" defaultValue="">
          <option value="" disabled>{isNl ? "Maak een keuze" : "Select one"}</option>
          <option>&lt; €5k</option>
          <option>€5–20k</option>
          <option>€20–100k</option>
          <option>€100k+</option>
          <option>{isNl ? "Nog niet bepaald" : "Not sure"}</option>
        </select>
      </label>
      <label>
        {isNl ? "Gewenste planning" : "Desired timeline"}
        <input required name="timeline" maxLength={160} placeholder={isNl ? "Bijvoorbeeld: binnen 6 weken" : "For example: within 6 weeks"} />
      </label>
      <label>
        {isNl ? "E-mailadres" : "Email"}
        <input required type="email" name="email" autoComplete="email" maxLength={200} />
      </label>
      <label className="form-trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={state.status === "loading"}>
        {state.status === "loading" ? (isNl ? "Bezig met verzenden…" : "Sending…") : (isNl ? "Aanvraag verzenden" : "Send enquiry")}
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
