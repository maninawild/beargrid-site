"use client";

import { FormEvent, useRef, useState } from "react";

type State = { status: "idle" | "loading" | "success" | "error"; message: string };

export function ContactForm({ initialNeed = "" }: { initialNeed?: string }) {
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
      startedAt,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Controleer het formulier en probeer het opnieuw.");
      setState({ status: "success", message: data.message || "Bedankt. Uw projectgegevens zijn verzonden." });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "We konden uw bericht niet verzenden. Probeer het opnieuw." });
      sending.current = false;
    }
  }

  if (state.status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span>Bericht ontvangen</span>
        <h2>Bedankt.</h2>
        <p>We hebben uw aanvraag ontvangen en nemen binnenkort contact met u op.</p>
        <a className="text-link" href="https://wa.me/message/4OIGQ3FHUZQSD1" target="_blank" rel="noreferrer">
          Stuur ons een bericht via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form" aria-describedby="contact-form-note">
      <p id="contact-form-note">Zeven korte vragen. Alle velden zijn verplicht.</p>
      <label>
        Naam
        <input required name="name" autoComplete="name" maxLength={120} />
      </label>
      <label>
        Bedrijf
        <input required name="company" autoComplete="organization" maxLength={160} />
      </label>
      <label>
        Waarmee kunnen we u helpen?
        <select required name="need" value={need} onChange={(event) => setNeed(event.target.value)}>
          <option value="">Maak een keuze</option>
          <option>Technologiebeoordeling</option>
          <option>R&amp;D-strategie</option>
          <option>Validatie van nieuwe ondernemingen</option>
          <option>Innovatiepartnerschappen</option>
          <option>Strategie &amp; complexe vraagstukken</option>
          <option>Verkoopsystemen</option>
          <option>AI-automatisering</option>
          <option>Digitale producten &amp; websites</option>
          <option>Advies aan directie en bestuur</option>
          <option>Samenstellen van ventureteams</option>
          <option>Anders</option>
        </select>
      </label>
      <label>
        Beschrijf uw vraagstuk
        <textarea required name="message" rows={5} minLength={20} maxLength={2000} />
      </label>
      <label>
        Budget
        <select required name="budget" defaultValue="">
          <option value="" disabled>Maak een keuze</option>
          <option>&lt; €5k</option>
          <option>€5–20k</option>
          <option>€20–100k</option>
          <option>€100k+</option>
          <option>Nog niet bepaald</option>
        </select>
      </label>
      <label>
        Gewenste planning
        <input required name="timeline" maxLength={160} placeholder="Bijvoorbeeld: binnen 6 weken" />
      </label>
      <label>
        E-mailadres
        <input required type="email" name="email" autoComplete="email" maxLength={200} />
      </label>
      <label className="form-trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Bezig met verzenden…" : "Aanvraag verzenden"}
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
