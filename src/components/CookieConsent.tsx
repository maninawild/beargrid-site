"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = "essential" | "all";
const STORAGE_KEY = "bear-grid-cookie-consent";

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    setConsent(stored);
    setOpen(!stored);
  }, []);

  function save(value: Consent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setOpen(false);
    window.dispatchEvent(new CustomEvent("bear-grid-cookie-consent", { detail: value }));
  }

  return (
    <>
      <button className="cookie-settings-button" type="button" onClick={() => setOpen(true)} aria-label="Open cookie settings">
        Cookie settings
      </button>
      {open ? (
        <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
          <div>
            <p className="company-eyebrow">COOKIE PREFERENCES</p>
            <h2 id="cookie-title">Your privacy choices</h2>
            <p>
              We use essential storage to remember your choice. Optional analytics will only be enabled after consent. Read our <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => save("essential")}>Essential only</button>
            <button className="primary" type="button" onClick={() => save("all")}>Accept optional cookies</button>
          </div>
        </section>
      ) : null}
      <span className="sr-only" aria-live="polite">{consent ? `Cookie preference: ${consent}` : ""}</span>
    </>
  );
}
