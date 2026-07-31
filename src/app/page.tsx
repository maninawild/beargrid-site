import type { Metadata } from "next";
import { CompanyHome } from "@/components/CompanyPages";

export const metadata: Metadata = {
  title: "Bear Grid | Technology, Venture Building and Business Strategy",
  description: "Bear Grid helps founders, companies and institutions turn complex technology and business questions into practical decisions, partnerships and working products.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <CompanyHome />;
}
