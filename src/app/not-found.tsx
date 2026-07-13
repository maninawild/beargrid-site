import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-normal text-neutral-950">Page not found</h1>
      <p className="mt-5 text-base leading-7 text-neutral-600">The page you are looking for is not part of the Bear Grid rebuild.</p>
      <Link className="mt-8 inline-flex min-h-12 items-center justify-center bg-red-700 px-6 text-sm font-semibold tracking-[0.12em] text-white" href="/">
        Back to Home
      </Link>
    </main>
  );
}
