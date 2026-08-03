"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import type { Locale } from "@/i18n";
import { baseUrl } from "@/data/site";

const modernPaths = new Set(["/", "/expertise", "/investors", "/history", "/contact", "/legal", "/privacy", "/cookies", "/brand-assets-review"]);
const nav = {
  en: [["Home", "/"], ["Expertise", "/expertise"], ["Investors", "/investors"], ["History", "/history"], ["Let's Talk", "/contact"]],
  nl: [["Home", "/nl"], ["Expertise", "/nl/expertise"], ["Investeerders", "/nl/investors"], ["Geschiedenis", "/nl/history"], ["Contact", "/nl/contact"]],
} as const;

function equivalentPath(pathname: string, locale: Locale) {
  const basePath = pathname === "/nl" ? "/" : pathname.replace(/^\/nl(?=\/)/, "");
  if (!modernPaths.has(basePath)) return locale === "nl" ? "/nl" : "/";
  return locale === "nl" ? (basePath === "/" ? "/nl" : `/nl${basePath}`) : basePath;
}

function LanguageLinks({ locale, pathname }: { locale: Locale; pathname: string }) {
  const searchParams = useSearchParams();
  const query = pathname.endsWith("/contact") ? searchParams.toString() : "";
  const href = (target: Locale) => `${equivalentPath(pathname, target)}${query ? `?${query}` : ""}`;
  return (
    <div className="language-switcher" aria-label={locale === "nl" ? "Taal kiezen" : "Choose language"}>
      <a href={href("en")} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
      <a href={href("nl")} hrefLang="nl-NL" lang="nl-NL" aria-current={locale === "nl" ? "page" : undefined}>NL</a>
    </div>
  );
}

function ModernHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  const labels = locale === "nl"
    ? { navigation: "Bedrijfsnavigatie", open: "Bedrijfsnavigatie openen", close: "Bedrijfsnavigatie sluiten", mobile: "Mobiele bedrijfsnavigatie" }
    : { navigation: "Company navigation", open: "Open company navigation", close: "Close company navigation", mobile: "Company mobile navigation" };
  return (
    <header className="company-header">
      <div className="company-header-inner">
        <Link className="company-brand" href={locale === "nl" ? "/nl" : "/"} aria-label={locale === "nl" ? "Bear Grid homepagina" : "Bear Grid home"}>
          <Image className="company-logo-horizontal" src="/brand/bear-grid-logo-horizontal.svg" alt="" aria-hidden="true" width={920} height={256} priority unoptimized />
          <Image className="company-logo-mark" src="/brand/bear-grid-mark.svg" alt="" aria-hidden="true" width={256} height={256} priority unoptimized />
          <span className="sr-only">{locale === "nl" ? "Bear Grid homepagina" : "Bear Grid home"}</span>
        </Link>
        <nav className="company-nav" aria-label={labels.navigation}>{nav[locale].map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={label}>{label}</Link>)}</nav>
        <LanguageLinks locale={locale} pathname={pathname} />
        <button className="company-menu-button" type="button" aria-label={open ? labels.close : labels.open} aria-expanded={open} aria-controls="company-mobile-nav" onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
      {open ? <nav className="company-mobile-nav" id="company-mobile-nav" aria-label={labels.mobile}>{nav[locale].map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>)}<LanguageLinks locale={locale} pathname={pathname} /></nav> : null}
    </header>
  );
}

function ModernFooter({ locale }: { locale: Locale }) {
  const isNl = locale === "nl";
  return (
    <footer className="company-footer">
      <div><Link className="company-brand" href={isNl ? "/nl" : "/"} aria-label={isNl ? "Bear Grid homepagina" : "Bear Grid home"}><Image className="company-logo-horizontal" src="/brand/logo-light.svg" alt="" aria-hidden="true" width={920} height={256} unoptimized /><Image className="company-logo-mark" src="/brand/bear-grid-mark-inverse.svg" alt="" aria-hidden="true" width={256} height={256} unoptimized /><span className="sr-only">{isNl ? "Bear Grid homepagina" : "Bear Grid home"}</span></Link><p>{isNl ? "Strategie. Engineering. Uitvoering." : "Strategy. Engineering. Execution."}</p></div>
      <address className="footer-company-details">
        <strong>Bear Grid Holding B.V.</strong>
        <span>Galileistraat 33</span>
        <span>3029 AL Rotterdam</span>
        <span>The Netherlands</span>
        <span className="footer-registration"><span>KvK:</span> 83732373</span>
      </address>
      <div className="footer-links">
        <Link href={isNl ? "/nl/expertise" : "/expertise"}>Expertise</Link>
        <Link href={isNl ? "/nl/investors" : "/investors"}>{isNl ? "Investeerders" : "Investors"}</Link>
        <Link href={isNl ? "/nl/history" : "/history"}>{isNl ? "Geschiedenis" : "History"}</Link>
        <Link href="/history/original-platform">{isNl ? "Oorspronkelijk platform (Engels archief)" : "Original platform"}</Link>
        <Link href={isNl ? "/nl/contact" : "/contact"}>Contact</Link>
      </div>
      <div className="footer-legal">
        <span>{isNl ? "Juridisch" : "Legal"}</span>
        <Link href={isNl ? "/nl/legal" : "/legal"}>{isNl ? "Juridische informatie" : "Legal notice"}</Link>
        <Link href={isNl ? "/nl/privacy" : "/privacy"}>{isNl ? "Privacyverklaring" : "Privacy policy"}</Link>
        <Link href={isNl ? "/nl/cookies" : "/cookies"}>{isNl ? "Cookiebeleid" : "Cookie policy"}</Link>
        <LanguageLinks locale={locale} pathname={usePathname()} />
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale: Locale = pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "en";
  const basePath = locale === "nl" ? (pathname === "/nl" ? "/" : pathname.slice(3)) : pathname;
  if (modernPaths.has(basePath)) return <><OrganizationStructuredData locale={locale} /><ModernHeader locale={locale} /><div className="flex-1">{children}</div><ModernFooter locale={locale} /><CookieConsent locale={locale} /><WhatsAppButton locale={locale} /></>;
  return <div lang="en" className="contents"><div className="legacy-return"><Link href="/">Preserved original platform · Return to current Bear Grid</Link></div><Header /><div className="flex-1">{children}</div><Footer /><WhatsAppButton locale="en" /></div>;
}

function OrganizationStructuredData({ locale }: { locale: Locale }) {
  const language = locale === "nl" ? "nl-NL" : "en";
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Bear Grid", url: baseUrl, logo: { "@type": "ImageObject", "@id": `${baseUrl}/#logo`, url: `${baseUrl}/brand/bear-grid-logo-stacked.svg`, contentUrl: `${baseUrl}/brand/bear-grid-logo-stacked.svg`, width: 640, height: 430, caption: "Bear Grid" }, image: { "@id": `${baseUrl}/#logo` }, foundingDate: "2019", description: locale === "nl" ? "Bear Grid is een in Nederland gevestigd onafhankelijk R&D-adviesbureau, opgericht in 2019." : "Bear Grid is a Netherlands-based independent R&D consultancy founded in 2019.", knowsAbout: locale === "nl" ? ["Technologiebeoordeling", "R&D-strategie", "Validatie van nieuwe ondernemingen", "Innovatiepartnerschappen"] : ["Technology assessment", "R&D strategy", "Venture validation", "Innovation partnerships"], inLanguage: language }, { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "Bear Grid", url: baseUrl, publisher: { "@id": `${baseUrl}/#organization` }, inLanguage: language }] }).replace(/</g, "\\u003c") }} />;
}

function WhatsAppButton({ locale }: { locale: Locale }) {
  return <a className="whatsapp-float" href="https://wa.me/message/4OIGQ3FHUZQSD1" target="_blank" rel="noopener noreferrer" aria-label={locale === "nl" ? "Neem via WhatsApp contact op met Bear Grid" : "Contact Bear Grid on WhatsApp"}><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.6c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.9 1 1.1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-1.9-.9-3.2-1.7-4.5-3.9-.3-.6.3-.6.9-1.3.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3 .9 4.1.8.7-.1 1.9-.8 2.1-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" /></svg><span>WhatsApp</span></a>;
}
