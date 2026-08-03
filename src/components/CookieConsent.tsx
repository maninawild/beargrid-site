"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = "essential" | "all";
const STORAGE_KEY = "bear-grid-cookie-consent";

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
      setConsent(stored);
      setOpen(!stored);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function save(value: Consent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setOpen(false);
    window.dispatchEvent(new CustomEvent("bear-grid-cookie-consent", { detail: value }));
  }

  return (
    <>
      <button className="cookie-settings-button" type="button" onClick={() => setOpen(true)} aria-label="Cookie-instellingen openen">
        Cookie-instellingen
      </button>
      {open ? (
        <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
          <div>
            <p className="company-eyebrow">COOKIEVOORKEUREN</p>
            <h2 id="cookie-title">Uw privacykeuzes</h2>
            <p>
              We gebruiken essentiële opslag om uw keuze te onthouden. Optionele analyse wordt alleen na toestemming ingeschakeld. Lees ons <Link href="/cookie-policy">cookiebeleid</Link>.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => save("essential")}>Optionele cookies weigeren</button>
            <button className="primary" type="button" onClick={() => save("all")}>Alles accepteren</button>
          </div>
        </section>
      ) : null}
      <span className="sr-only" aria-live="polite">{consent ? `Cookievoorkeur: ${consent === "all" ? "alles geaccepteerd" : "alleen essentieel"}` : ""}</span>
    </>
  );
}
