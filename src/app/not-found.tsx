import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Bear Grid",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-normal text-neutral-950">Pagina niet gevonden</h1>
      <p className="mt-5 text-base leading-7 text-neutral-600">De opgevraagde pagina bestaat niet of is verplaatst.</p>
      <Link className="mt-8 inline-flex min-h-12 items-center justify-center bg-black px-6 text-sm font-semibold tracking-[0.12em] text-white" href="/">
        Terug naar Home
      </Link>
    </main>
  );
}
