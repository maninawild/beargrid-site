import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Page not found | Bear Grid",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NotFound() {
  const isNl = (await headers()).get("x-bear-grid-locale") === "nl-NL";
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-normal text-neutral-950">{isNl ? "Pagina niet gevonden" : "Page not found"}</h1>
      <p className="mt-5 text-base leading-7 text-neutral-600">{isNl ? "De opgevraagde pagina bestaat niet of is verplaatst." : "The requested page does not exist or has moved."}</p>
      <Link className="mt-8 inline-flex min-h-12 items-center justify-center bg-black px-6 text-sm font-semibold tracking-[0.12em] text-white" href={isNl ? "/nl" : "/"}>
        {isNl ? "Terug naar Home" : "Back to Home"}
      </Link>
    </main>
  );
}
