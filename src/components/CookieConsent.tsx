"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n";

type Consent = "essential" | "all";
const STORAGE_KEY = "bear-grid-cookie-consent";

export function CookieConsent({ locale = "en" }: { locale?: Locale }) {
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
      <button className="cookie-settings-button" type="button" onClick={() => setOpen(true)} aria-label={locale === "nl" ? "Cookie-instellingen openen" : "Open cookie settings"}>
        {locale === "nl" ? "Cookie-instellingen" : "Cookie settings"}
      </button>
      {open ? (
        <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
          <div>
            <p className="company-eyebrow">{locale === "nl" ? "COOKIEVOORKEUREN" : "COOKIE PREFERENCES"}</p>
            <h2 id="cookie-title">{locale === "nl" ? "Uw privacykeuzes" : "Your privacy choices"}</h2>
            <p>
              {locale === "nl" ? <>We gebruiken essentiële opslag om uw keuze te onthouden. Optionele analyses worden alleen na toestemming ingeschakeld. Lees ons <Link href="/nl/cookies">cookiebeleid</Link>.</> : <>We use essential storage to remember your choice. Optional analytics will only be enabled after consent. Read our <Link href="/cookies">Cookie Policy</Link>.</>}
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => save("essential")}>{locale === "nl" ? "Optionele cookies weigeren" : "Reject optional cookies"}</button>
            <button className="primary" type="button" onClick={() => save("all")}>{locale === "nl" ? "Alles accepteren" : "Accept all"}</button>
          </div>
        </section>
      ) : null}
      <span className="sr-only" aria-live="polite">{consent ? (locale === "nl" ? `Cookievoorkeur: ${consent}` : `Cookie preference: ${consent}`) : ""}</span>
    </>
  );
}
