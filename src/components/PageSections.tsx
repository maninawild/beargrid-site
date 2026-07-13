import Image from "next/image";
import Link from "next/link";
import { productCards, type SitePage } from "@/data/site";

function isImagePath(value: string) {
  return value.startsWith("/");
}

export function Hero({ page }: { page: SitePage }) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {page.heroImage ? (
        <Image
          src={page.heroImage}
          alt={page.heroImageAlt ?? ""}
          fill
          priority={page.slug === ""}
          className="object-cover opacity-45"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#0a0a0a,#181818_45%,#5a0f12)]" />
      )}
      <div className="relative mx-auto min-h-[420px] max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {page.eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-300">{page.eyebrow}</p> : null}
          <h1 className="text-balance text-5xl font-semibold leading-tight tracking-normal sm:text-6xl lg:text-7xl">
            {page.heroTitle}
          </h1>
          {page.heroText ? <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-100 sm:text-xl">{page.heroText}</p> : null}
        </div>
      </div>
    </section>
  );
}

export function ProductGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {productCards.map((product) => (
        <Link
          key={product.href}
          href={product.href}
          className="group flex min-h-64 flex-col justify-between border border-neutral-200 bg-white p-6 transition hover:border-red-700 hover:shadow-lg"
        >
          <div>
            {product.image ? <Image src={product.image} alt="" width={96} height={52} className="mb-8 h-14 w-auto object-contain" /> : null}
            {product.tag ? <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-red-700">{product.tag}</p> : null}
            <h3 className="text-2xl font-semibold leading-tight text-neutral-950">{product.title}</h3>
            <p className="mt-4 text-sm leading-6 text-neutral-600">{product.body}</p>
          </div>
          <span className="mt-8 text-sm font-semibold tracking-[0.12em] text-red-700 group-hover:text-red-900">Read More &gt;</span>
        </Link>
      ))}
    </div>
  );
}

export function Sections({ page }: { page: SitePage }) {
  return (
    <main>
      {page.sections.map((section, index) => (
        <section key={`${page.slug}-${index}`} className={index % 2 ? "bg-neutral-50" : "bg-white"}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            {section.title ? (
              <h2 className="mb-8 text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">{section.title}</h2>
            ) : null}
            {section.kicker ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">{section.kicker}</p> : null}

            <div className={section.image || section.cards ? "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : ""}>
              <div>
                {section.body ? (
                  <div className="grid gap-5 text-base leading-8 text-neutral-700">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-7 grid gap-3 text-base leading-7 text-neutral-700 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 text-red-700">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.cta ? (
                  <Link
                    href={section.cta.href}
                    className="mt-8 inline-flex min-h-12 items-center justify-center bg-red-700 px-6 text-sm font-semibold tracking-[0.12em] text-white transition hover:bg-red-800"
                  >
                    {section.cta.label}
                  </Link>
                ) : null}
              </div>

              {section.image ? (
                <div className="relative min-h-72 overflow-hidden border border-neutral-200 bg-neutral-100">
                  <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-contain p-4" sizes="(min-width: 1024px) 45vw, 100vw" />
                </div>
              ) : null}

              {section.cards ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.cards.map((card) =>
                    isImagePath(card.body) ? (
                      <div key={card.title} className="flex min-h-36 items-center justify-center border border-neutral-200 bg-white p-6">
                        <Image src={card.body} alt={card.title} width={260} height={160} className="h-auto max-h-32 w-auto object-contain" />
                      </div>
                    ) : (
                      <div key={card.title} className="border border-neutral-200 bg-white p-6">
                        <h3 className="text-lg font-semibold text-neutral-950">{card.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-neutral-600">{card.body}</p>
                      </div>
                    ),
                  )}
                </div>
              ) : null}
            </div>

            {section.title === "PRODUCTS" || section.title === "OTHER PRODUCTS" ? (
              <div className="mt-2">
                <ProductGrid />
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </main>
  );
}
