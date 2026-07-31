import Image from "next/image";
import Link from "next/link";
import { productCards, type SitePage } from "@/data/site";

const sectorImages = [
  "/media/wix/sector-home.jpg",
  "/media/wix/sector-environment.jpg",
  "/media/wix/sector-geology.jpg",
  "/media/wix/sector-estates.jpg",
  "/media/wix/sector-transport.jpg",
  "/media/wix/sector-border.jpg",
  "/media/wix/sector-farms.jpg",
  "/media/wix/sector-business.jpg",
  "/media/wix/sector-strategic.jpg",
];

const exactImages: Record<string, Record<number, string>> = {
  solutions: { 0: "/media/wix/solutions-exact.png" },
  "copy-of-bear-device": { 0: "/media/wix/platform-sensor-exact.png" },
  "coming-soon-03": { 0: "/media/wix/asp-security-exact.jpg" },
};

export function Hero({ page }: { page: SitePage }) {
  if (page.slug === "") {
    return (
      <section className="home-hero" aria-label="WHAT SOUND LOOKS LIKE">
        <div className="parallax-image" />
        <div className="hero-copy">
          <span className="hero-eyebrow">To know</span>
          <h1><span>WHAT SOUND</span><span>LOOKS LIKE</span></h1>
        </div>
      </section>
    );
  }
  return null;
}

export function ProductGrid() {
  return (
    <div className="product-grid">
      {productCards.map((product, index) => (
        <Link href={product.href} className={`product product-${index + 1}`} key={product.href}>
          {product.image ? <Image src={product.image} alt="" width={96} height={54} /> : <span className="product-symbol">{product.tag ?? "AI"}</span>}
          <h3>{product.title}</h3>
          <p>{product.body}</p>
          <span className="read-more">READ MORE &gt;</span>
        </Link>
      ))}
    </div>
  );
}

function HomeSections({ page }: { page: SitePage }) {
  const [intro, partners] = page.sections;
  return (
    <main className="home-main">
      <section className="home-intro">
        <h2>{intro.title}</h2>
        {intro.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Image src="/media/bear-grid-system.png" alt={intro.imageAlt ?? ""} width={695} height={514} />
        {intro.cta ? <Link className="outline-button" href={intro.cta.href}>{intro.cta.label}</Link> : null}
      </section>
      <section className="partners">
        <h2>{partners.title}</h2>
        <div>
          {partners.cards?.map((card) => (
            <Image key={card.title} src={card.body} alt={card.title} width={359} height={119} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Sectors({ page }: { page: SitePage }) {
  const section = page.sections[0];
  return (
    <main className="content-page sectors-page">
      <h1>{page.heroTitle}</h1>
      {page.heroText ? <p className="lead">{page.heroText}</p> : null}
      {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <div className="sector-grid">
        {section.cards?.map((card, index) => (
          <div className="sector-card" key={card.title}>
            <Image src={sectorImages[index]} alt="" fill sizes="307px" />
            <strong>{card.title}</strong>
            <span>{card.body}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

function DevicePage({ page }: { page: SitePage }) {
  const first = page.sections[0];
  const second = page.sections[1];
  return (
    <main className="content-page device-page">
      <h1>{page.heroTitle}</h1>
      {first.body?.slice(0, 4).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <Image className="wide-natural" src="/media/wix/device-sound-icons.png" alt="Sound classification icons" width={809} height={134} />
      {first.body?.slice(4).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <p>BEAR DEVICE is user-friendly device designed for:</p>
      <ul>{first.bullets?.map((item) => <li key={item}>{item}</li>)}</ul>
      {second.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <ul>{second.bullets?.map((item) => <li key={item}>{item}</li>)}</ul>
      <Image className="wide-natural" src="/media/wix/device-classification.png" alt="Sound and security classification diagram" width={827} height={601} />
      <Image className="device-natural" src="/media/wix/device-mobile.png" alt="Bear Grid Device mobile alert screen" width={709} height={863} />
      <Image className="device-natural" src="/media/wix/device-capabilities.png" alt="Bear Grid Device capabilities" width={714} height={537} />
      <h2 className="products-title">OTHER PRODUCTS</h2>
      <ProductGrid />
    </main>
  );
}

function StandardPage({ page }: { page: SitePage }) {
  return (
    <main className={`content-page page-${page.slug}`}>
      <h1>{page.heroTitle}</h1>
      {page.heroText ? <p className="lead">{page.heroText}</p> : null}
      {page.sections.map((section, index) => (
        <section className="plain-section" key={`${page.slug}-${index}`}>
          {section.title ? <h2>{section.title}</h2> : null}
          {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          {section.image || exactImages[page.slug]?.[index] ? (
            <Image
              className="section-natural"
              src={exactImages[page.slug]?.[index] ?? section.image!}
              alt={section.imageAlt ?? ""}
              width={page.slug === "solutions" ? 790 : 505}
              height={page.slug === "solutions" ? 593 : 505}
            />
          ) : null}
          {section.cards ? (
            <div className="text-grid">
              {section.cards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          ) : null}
          {section.cta ? <Link className="outline-button" href={section.cta.href}>{section.cta.label}</Link> : null}
          {section.title === "PRODUCTS" || section.title === "OTHER PRODUCTS" ? <ProductGrid /> : null}
        </section>
      ))}
    </main>
  );
}

export function Sections({ page }: { page: SitePage }) {
  if (page.slug === "") return <HomeSections page={page} />;
  if (page.slug === "sectors") return <Sectors page={page} />;
  if (page.slug === "bear-grid-device") return <DevicePage page={page} />;
  return <StandardPage page={page} />;
}
