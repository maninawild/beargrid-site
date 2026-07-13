import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm, JobForm } from "@/components/Forms";
import { Hero, Sections } from "@/components/PageSections";
import { baseUrl, getPageBySlug, publicPages } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publicPages.filter((page) => page.slug).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {};
  }

  const path = `/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: "BearGrid Solutions",
      title: page.title,
      description: page.description,
      url: new URL(path, baseUrl).toString(),
      images: [page.heroImage ?? "/media/bear-grid-system.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.heroImage ?? "/media/bear-grid-system.png"],
    },
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Hero page={page} />
      <Sections page={page} />
      {page.form ? (
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            {page.form === "jobs" ? <JobForm /> : <ContactForm compact={page.slug === "contacts"} />}
          </div>
        </section>
      ) : null}
    </>
  );
}
