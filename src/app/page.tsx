import { ContactForm } from "@/components/Forms";
import { Hero, Sections } from "@/components/PageSections";
import { pages } from "@/data/site";

export default function Home() {
  const page = pages.home;

  return (
    <>
      <Hero page={page} />
      <Sections page={page} />
      <section id="use-cases" className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">Adaptive security and smart tower solutions</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300">
              The original Bear Grid site presents ASP Bear Grid and BG Smart Tower Security Solution as dedicated use cases.
            </p>
          </div>
          <div className="border border-white/10 bg-white p-6 text-neutral-950">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
