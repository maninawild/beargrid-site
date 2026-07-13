import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white text-neutral-950">
      <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-8 px-5 py-12">
        <Link
          href="#top"
          className="inline-flex h-10 w-[142px] items-center justify-center border border-neutral-300 text-xs text-neutral-950 transition hover:bg-neutral-100"
        >
          Back to Top
        </Link>
        <div className="flex items-center gap-3">
          <Image src="/logos/bear-grid-logo.png" alt="Bear Grid logo" width={52} height={45} className="h-auto w-[52px]" style={{ height: "auto" }} />
          <span className="text-lg font-bold tracking-normal">BEAR GRID</span>
        </div>
        <a className="text-sm text-neutral-700 hover:text-neutral-950" href="mailto:office@beargridsolutions.com">
          office@beargridsolutions.com
        </a>
      </div>
      <div className="px-4 py-5 text-center text-xs text-neutral-500">
        © 2020 BEAR GRID INC.
      </div>
    </footer>
  );
}
