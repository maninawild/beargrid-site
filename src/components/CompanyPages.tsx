import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    number: "01",
    title: "Strategie & complexe vraagstukken",
    body: "Voor leiders met een lastig bedrijfs-, technologie- of uitvoeringsvraagstuk. We brengen de werkelijke belemmering in kaart, stellen prioriteiten en leveren een plan waarmee uw team verder kan.",
  },
  {
    number: "02",
    title: "Verkoopsystemen",
    body: "Voor mkb-bedrijven en technologiebedrijven die een herhaalbaar verkoopproces nodig hebben. We scherpen het aanbod aan en ontwerpen het proces, de hulpmiddelen en de meetpunten om dit goed uit te voeren.",
  },
  {
    number: "03",
    title: "AI-automatisering",
    body: "Voor teams die tijd verliezen aan repetitief werk. We selecteren praktische hulpmiddelen, koppelen die aan bestaande werkprocessen en leveren automatisering die het team zelf kan beheren.",
  },
  {
    number: "04",
    title: "Digitale producten & websites",
    body: "Voor bedrijven die een betere website, interne tool of klantomgeving nodig hebben. We ontwerpen en bouwen een helder, snel product dat bijdraagt aan een concreet bedrijfsresultaat.",
  },
  {
    number: "05",
    title: "Advies aan directie en bestuur",
    body: "Voor managementteams die een belangrijke product- of bedrijfsbeslissing nemen. We leveren een directe analyse, toetsen zwakke aannames en helpen de gekozen koers uit te voeren.",
  },
  {
    number: "06",
    title: "Samenstellen van ventureteams",
    body: "Voor investeerders en organisaties met een sterk idee, maar zonder uitvoeringsteam. We bepalen de benodigde rollen en brengen ervaren mensen samen om het concept te valideren en te bouwen.",
  },
];

export const rAndDServices = [
  {
    number: "01",
    title: "Technologiebeoordeling",
    body: "Een onafhankelijke beoordeling voor teams of investeerders die willen weten of een technologie haalbaar is en klaar is voor een volgende investering. Bear Grid onderzoekt het bewijs, de architectuur, technische risico’s en afhankelijkheden in de uitvoering en levert bevindingen en aanbevolen vervolgstappen.",
  },
  {
    number: "02",
    title: "R&D-strategie",
    body: "Een besluitgericht plan voor oprichters en innovatieteams die een onzeker technisch doel willen omzetten in een uitvoerbaar programma. Bear Grid bepaalt prioriteiten, validatiemijlpalen, benodigde middelen en beslismomenten en levert een roadmap die het team kan uitvoeren.",
  },
  {
    number: "03",
    title: "Validatie van nieuwe ondernemingen",
    body: "Een gerichte beoordeling van een onderneming in een vroege fase, voordat er veel tijd of kapitaal wordt ingezet. Bear Grid toetst technische, product- en uitvoeringsaannames, brengt ontbrekend bewijs in kaart en maakt duidelijk wat gevalideerd, aangepast of stopgezet moet worden.",
  },
  {
    number: "04",
    title: "Innovatiepartnerschappen",
    body: "Gestructureerde ondersteuning voor bedrijven en instellingen die externe expertise nodig hebben om een innovatieproject verder te brengen. Bear Grid verduidelijkt het doel, de rollen, bijdragen en governance en levert een praktisch samenwerkingsplan.",
  },
];

const problems = [
  "Handmatig werk kost tijd die aan klanten besteed zou moeten worden.",
  "Verkoop leunt op individuele inspanning in plaats van op een proces dat het team kan uitvoeren.",
  "Een website, platform of interne tool doet niet waarvoor die is gebouwd.",
  "Een belangrijke bedrijfs- of technologiebeslissing vraagt om duidelijk eigenaarschap en beter bewijs.",
];

const process = [
  ["Begrijpen", "Breng de feiten, de belemmering en het gewenste resultaat scherp in beeld."],
  ["Ontwerpen", "Kies de eenvoudigste werkbare aanpak en baken het werk af."],
  ["Bouwen", "Werk met uw team aan de oplossing, test deze en verbeter waar nodig."],
  ["Opleveren", "Draag een werkend resultaat, duidelijk eigenaarschap en concrete vervolgstappen over."],
];

const audiences = [
  "Mkb-bedrijven",
  "Technologiebedrijven",
  "Industriële bedrijven",
  "Scale-ups",
  "Teams binnen grotere organisaties",
  "Oprichters",
  "Professionele en particuliere investeerders",
];

const faqs = [
  {
    question: "Waarvoor kunt u Bear Grid inschakelen?",
    answer: "Voor een afgebakend vraagstuk, een volledig ontwikkeltraject of praktische ondersteuning van een managementteam. Veelvoorkomend werk omvat strategie, verkoopsystemen, automatisering, websites, platforms en de uitvoering van nieuwe ondernemingen.",
  },
  {
    question: "Geeft Bear Grid alleen advies?",
    answer: "Nee. We adviseren wanneer er een besluit nodig is en bouwen wanneer het antwoord een werkend systeem, product of proces moet worden.",
  },
  {
    question: "Hoe start een project?",
    answer: "Stuur een korte aanvraag. We beoordelen die, stellen waar nodig aanvullende vragen en doen een voorstel voor een duidelijke eerste opdracht. Als we niet de juiste partij zijn, zeggen we dat.",
  },
];

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="company-eyebrow">{children}</p>;
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {services.map((service) => (
        <article key={service.number}>
          <span>{service.number}</span>
          <h3>{service.title}</h3>
          <p>{service.body}</p>
          <Link className="service-cta" href={`/contact?service=${encodeURIComponent(service.title)}`}>
            Neem contact op <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CompanyHome() {
  return (
    <main className="company-main">
      <section className="new-hero">
        <div className="new-hero-top">
          <Eyebrow>IN NEDERLAND GEVESTIGD ONAFHANKELIJK R&amp;D-ADVIESBUREAU</Eyebrow>
          <span>Oplossen · Bouwen · Verbeteren · Opleveren</span>
        </div>
        <div className="new-hero-copy">
          <h1>Onafhankelijk R&amp;D-adviesbureau voor complexe technologie- en ondernemingsbeslissingen.</h1>
          <div>
            <p>Bear Grid helpt oprichters, innovatieteams, investeerders en instellingen bij technologiebeoordeling, R&amp;D-strategie, validatie van nieuwe ondernemingen en effectieve innovatiepartnerschappen. We zetten onduidelijke vraagstukken om in besluiten, plannen, systemen en producten.</p>
            <div className="company-actions">
              <Link className="company-button dark" href="/contact">Neem contact op</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="positioning-strip" aria-label="Positionering">
        <strong>Strategie</strong>
        <span>Engineering</span>
        <span>Uitvoering</span>
        <span>Duidelijke antwoorden</span>
      </section>

      <section className="company-section home-problems">
        <div className="section-heading">
          <Eyebrow>01 / VRAAGSTUKKEN DIE WE OPLOSSEN</Eyebrow>
          <h2>Pak aan wat de organisatie vertraagt.</h2>
        </div>
        <div className="problem-list">
          {problems.map((problem, index) => (
            <article key={problem}>
              <span>0{index + 1}</span>
              <p>{problem}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-section home-services" id="expertise">
        <div className="section-heading">
          <Eyebrow>02 / KERNDIENSTEN</Eyebrow>
          <h2>Praktische hulp. Duidelijke resultaten.</h2>
        </div>
        <ServiceGrid compact />
      </section>

      <section className="dark-section">
        <div className="section-heading">
          <Eyebrow>03 / ONZE WERKWIJZE</Eyebrow>
          <h2>Kleine teams. Direct samenwerken. Geen omwegen.</h2>
        </div>
        <ol className="process-grid">
          {process.map(([title, body], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="company-section audience-section">
        <div className="section-heading">
          <Eyebrow>04 / VOOR WIE WE WERKEN</Eyebrow>
          <h2>Organisaties en mensen die verantwoordelijk zijn voor lastig werk.</h2>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => <span key={audience}>{audience}</span>)}
        </div>
      </section>

      <section className="method-section">
        <Eyebrow>05 / HOE WE DENKEN</Eyebrow>
        <div>
          <h2>Ervaren mensen. Werk dat bruikbaar is.</h2>
          <p>We combineren technisch inzicht, commerciële ervaring en praktische uitvoering. We werken rechtstreeks met beslissers, houden teams klein en laten iets bruikbaars achter: een plan, systeem, product of besluit.</p>
          <p>Bear Grid begon in 2019 als deeptechbedrijf. Die praktijkervaring vormt nu de basis voor ons werk als onafhankelijk R&amp;D-adviesbureau.</p>
          <Link className="text-link" href="/history">Lees de geschiedenis van het bedrijf →</Link>
        </div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="section-heading">
          <Eyebrow>06 / ECOSYSTEEM &amp; NETWERK</Eyebrow>
          <div>
            <h2 id="ecosystem-title">Onderdeel van het Nederlandse technologie- en ondernemersnetwerk.</h2>
            <p>Organisaties en netwerken die verbonden zijn met de mensen en projecten rondom ons werk.</p>
          </div>
        </div>
        <div className="ecosystem-grid">
          <a className="ecosystem-mark" href="https://yesdelft.com/" target="_blank" rel="noopener noreferrer" aria-label="Bezoek de website van YES!Delft">
            <Image src="/logos/yesdelft-logo.png" alt="YES!Delft" width={450} height={104} />
          </a>
          <a className="ecosystem-mark" href="https://www.inspirexchange.nl/" target="_blank" rel="noopener noreferrer" aria-label="Bezoek de website van InspireXChange">
            <Image src="/logos/inspirexchange.png" alt="InspireXChange" width={500} height={360} />
          </a>
          <a className="ecosystem-mark" href="https://platformzero.co/" target="_blank" rel="noopener noreferrer" aria-label="Bezoek de website van Platform Zero">
            <Image src="/logos/platform-zero.png" alt="Platform Zero" width={500} height={500} />
          </a>
          <a className="ecosystem-mark" href="https://www.dhi-architecture.com/" target="_blank" rel="noopener noreferrer" aria-label="Bezoek de website van Design Hub International">
            <Image src="/logos/dhi-logo.png" alt="Design Hub International" width={699} height={264} />
          </a>
          <a className="ecosystem-mark" href="https://www.krewcommunity.com/" target="_blank" rel="noopener noreferrer" aria-label="Bezoek de website van KREW Community">
            <Image src="/logos/krew-logo.png" alt="KREW Community" width={398} height={162} />
          </a>
          <a className="ecosystem-mark" href="https://hub.localie.co/" target="_blank" rel="noopener noreferrer" aria-label="Bezoek de website van Localie Hub">
            <Image src="/logos/localie-hub.png" alt="Localie Hub" width={900} height={360} />
          </a>
        </div>
        <p className="ecosystem-note">Deze organisaties worden uitsluitend getoond als onderdeel van ons ecosysteem en netwerk; vermelding betekent geen aanbeveling of investering.</p>
      </section>

      <section className="company-section faq-section">
        <div className="section-heading">
          <Eyebrow>07 / VEELGESTELDE VRAGEN</Eyebrow>
          <h2>Voordat we beginnen.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <Eyebrow>EEN VRAAGSTUK DAT HET OPLOSSEN WAARD IS?</Eyebrow>
        <h2>Vertel ons waar het vastloopt. Wij zeggen eerlijk of we kunnen helpen.</h2>
        <div className="company-actions">
          <Link className="company-button light" href="/contact">Neem contact op</Link>
        </div>
      </section>
    </main>
  );
}
