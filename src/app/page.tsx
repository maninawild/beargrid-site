import type { Metadata } from "next";
import { CompanyHome } from "@/components/CompanyPages";

export const metadata: Metadata = {
  title: "Bear Grid | Technology, Strategy & Venture Building",
  description: "Bear Grid helps founders, companies and institutions turn complex technology and business questions into practical decisions, partnerships and working products.",
};

export default function Home() {
  return <CompanyHome />;
}
