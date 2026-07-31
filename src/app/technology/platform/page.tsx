import type { Metadata } from "next";
import { Hero, Sections } from "@/components/PageSections";
import { pages } from "@/data/site";

export const metadata: Metadata = {
  title: "Original Technology Platform | Bear Grid",
  description: "The original Bear Grid AI-enabled sensing, security and monitoring technology platform.",
};

export default function OriginalPlatformPage() {
  const page = pages.home;
  return (
    <>
      <Hero page={page} />
      <Sections page={page} />
    </>
  );
}
