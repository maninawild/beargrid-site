import { CompanyHomeTemplate, Eyebrow, ServiceGridTemplate, type CompanyContent } from "@/components/CompanyPageTemplate";

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

export const companyContent: CompanyContent = {
  locale: "nl",
  services,
  rAndDServices,
  problems,
  process: process as [string, string][],
  audiences,
  faqs,
  labels: {
    consultancy: "IN NEDERLAND GEVESTIGD ONAFHANKELIJK R&D-ADVIESBUREAU",
    verbs: "Oplossen · Bouwen · Verbeteren · Opleveren",
    headline: "Onafhankelijk R&D-adviesbureau voor complexe technologie- en ondernemingsbeslissingen.",
    introduction: "Bear Grid helpt oprichters, innovatieteams, investeerders en instellingen bij technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en effectieve innovatiepartnerschappen. We zetten onduidelijke vraagstukken om in besluiten, plannen, systemen en producten.",
    contact: "Neem contact op",
    positioning: "Positionering", strategy: "Strategie", execution: "Uitvoering", answers: "Duidelijke antwoorden",
    problemsEyebrow: "01 / VRAAGSTUKKEN DIE WE OPLOSSEN", problemsTitle: "Pak aan wat de organisatie vertraagt.",
    servicesEyebrow: "02 / KERNDIENSTEN", servicesTitle: "Praktische hulp. Duidelijke resultaten.",
    processEyebrow: "03 / ONZE WERKWIJZE", processTitle: "Kleine teams. Direct samenwerken. Geen omwegen.",
    audienceEyebrow: "04 / VOOR WIE WE WERKEN", audienceTitle: "Organisaties en mensen die verantwoordelijk zijn voor lastig werk.",
    methodEyebrow: "05 / HOE WE DENKEN", methodTitle: "Ervaren mensen. Werk dat bruikbaar is.",
    methodBody: "We combineren technisch inzicht, commerciële ervaring en praktische uitvoering. We werken rechtstreeks met beslissers, houden teams klein en laten iets bruikbaars achter: een plan, systeem, product of besluit.",
    historyBody: "Bear Grid begon in 2019 als deeptechbedrijf. Die praktijkervaring vormt nu de basis voor ons werk als onafhankelijk R&D-adviesbureau.",
    historyLink: "Lees de geschiedenis van het bedrijf",
    ecosystemEyebrow: "06 / ECOSYSTEEM & NETWERK", ecosystemTitle: "Onderdeel van het Nederlandse technologie- en ondernemersnetwerk.",
    ecosystemBody: "Organisaties en netwerken die verbonden zijn met de mensen en projecten rondom ons werk.",
    ecosystemNote: "Deze organisaties worden uitsluitend getoond als onderdeel van ons ecosysteem en netwerk; vermelding betekent geen aanbeveling of investering.",
    faqEyebrow: "07 / VEELGESTELDE VRAGEN", faqTitle: "Voordat we beginnen.",
    finalEyebrow: "EEN VRAAGSTUK DAT HET OPLOSSEN WAARD IS?", finalTitle: "Vertel ons waar het vastloopt. Wij zeggen eerlijk of we kunnen helpen.",
    serviceCta: "Neem contact op", visit: "Bezoek de website van",
  },
};

export { Eyebrow };
export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return <ServiceGridTemplate content={companyContent} compact={compact} />;
}
export function CompanyHome() {
  return <CompanyHomeTemplate content={companyContent} />;
}
