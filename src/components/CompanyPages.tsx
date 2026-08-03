import { CompanyHomeTemplate, Eyebrow, ServiceGridTemplate, type CompanyContent } from "@/components/CompanyPageTemplate";

export const services = [
  {
    number: "01",
    title: "Strategy & Complex Problem Solving",
    body: "For leaders facing a difficult business, technology or execution problem. We find the real constraint, set priorities and produce a plan your team can use.",
  },
  {
    number: "02",
    title: "Sales Systems",
    body: "For SMEs and technology companies that need a repeatable way to sell. We sharpen the offer and design the process, tools and measures needed to run it.",
  },
  {
    number: "03",
    title: "AI Automation",
    body: "For teams losing time to repetitive work. We select practical tools, connect them to existing workflows and deliver automation that people can maintain.",
  },
  {
    number: "04",
    title: "Digital Products & Websites",
    body: "For companies that need a better website, internal tool or customer platform. We design and build a clear, fast product tied to a business result.",
  },
  {
    number: "05",
    title: "Executive Advisory",
    body: "For leadership teams making an important product or business decision. We provide direct analysis, challenge weak assumptions and help execute the decision.",
  },
  {
    number: "06",
    title: "Venture Team Assembly",
    body: "For investors and organisations with a strong idea but no delivery team. We define the roles and assemble experienced people to validate and build it.",
  },
];

export const rAndDServices = [
  {
    number: "01",
    title: "Technology Assessment",
    body: "An independent review for teams or investors who need to decide whether a technology is feasible and ready for its next commitment. Bear Grid examines the evidence, architecture, technical risks and delivery dependencies, then provides findings and recommended next checks.",
  },
  {
    number: "02",
    title: "R&D Strategy",
    body: "A decision-led plan for founders and innovation teams that need to turn an uncertain technical objective into a workable programme. Bear Grid defines priorities, validation milestones, resource needs and decision gates, then delivers a roadmap the team can execute.",
  },
  {
    number: "03",
    title: "Venture Validation",
    body: "A focused examination of an early-stage venture before significant time or capital is committed. Bear Grid tests the technical, product and execution assumptions, identifies evidence gaps and delivers a clear view of what should be validated, changed or stopped.",
  },
  {
    number: "04",
    title: "Innovation Partnerships",
    body: "Structured support for companies and institutions that need external capabilities to move an innovation project forward. Bear Grid clarifies the objective, partner roles, contributions and governance, then provides a practical collaboration plan.",
  },
];

const problems = [
  "Manual work is consuming time that should be spent serving customers.",
  "Sales depend on individual effort instead of a system the team can run.",
  "A website, platform or internal tool is not doing the job it was built for.",
  "An important business or technology decision needs a clear owner and better evidence.",
];

const process = [
  ["Understand", "Get to the facts, the constraint and the result that matters."],
  ["Design", "Choose the simplest workable approach and define the job."],
  ["Build", "Work with your team to produce, test and improve the solution."],
  ["Deliver", "Hand over a working result, clear ownership and the next steps."],
];

const audiences = [
  "SMEs",
  "Technology companies",
  "Industrial companies",
  "Scale-ups",
  "Corporate teams",
  "Founders",
  "Investors and private investors",
];

const faqs = [
  {
    question: "What can Bear Grid take on?",
    answer: "A defined problem, a complete build or hands-on support to a leadership team. Typical work covers strategy, sales systems, automation, websites, platforms and venture execution.",
  },
  {
    question: "Do you only advise?",
    answer: "No. We advise when a decision needs to be made and build when the answer needs to become a working system, product or process.",
  },
  {
    question: "How does a project start?",
    answer: "Send a short enquiry. We review it, ask any necessary questions and propose a clear first piece of work. If we are not the right fit, we will say so.",
  },
];

export const companyContent: CompanyContent = {
  locale: "en",
  services,
  rAndDServices,
  problems,
  process: process as [string, string][],
  audiences,
  faqs,
  labels: {
    consultancy: "NETHERLANDS-BASED INDEPENDENT R&D CONSULTANCY",
    verbs: "Solve · Build · Improve · Deliver",
    headline: "Independent R&D consultancy for difficult technology and venture decisions.",
    introduction: "Bear Grid helps founders, innovation teams, investors and institutions assess technology, shape R&D strategy, validate ventures and build effective partnerships. We turn unclear problems into decisions, plans, systems and products.",
    contact: "Let's Talk",
    positioning: "Positioning", strategy: "Strategy", execution: "Execution", answers: "Straight answers",
    problemsEyebrow: "01 / PROBLEMS WE SOLVE", problemsTitle: "Fix what is slowing the business down.",
    servicesEyebrow: "02 / CORE SERVICES", servicesTitle: "Practical help. Clear deliverables.",
    processEyebrow: "03 / HOW WE WORK", processTitle: "Small teams. Direct work. No theatre.",
    audienceEyebrow: "04 / WHO WE WORK WITH", audienceTitle: "Companies and people responsible for getting difficult work done.",
    methodEyebrow: "05 / HOW WE THINK", methodTitle: "Senior people. Useful work.",
    methodBody: "We combine engineering judgement, commercial experience and hands-on delivery. We work directly with decision-makers, keep teams small and leave behind something usable: a plan, a system, a product or a decision.",
    historyBody: "Bear Grid began as a deep-tech company in 2019. That operating experience now informs our work as an independent engineering and business consultancy.",
    historyLink: "Read the company history",
    ecosystemEyebrow: "06 / ECOSYSTEM & COMMUNITY", ecosystemTitle: "Part of the Dutch technology and founder community.",
    ecosystemBody: "Organisations and communities connected to the people and projects around our work.",
    ecosystemNote: "Shown as ecosystem and community connections only; inclusion does not imply endorsement or investment.",
    faqEyebrow: "07 / FREQUENTLY ASKED", faqTitle: "Before we begin.",
    finalEyebrow: "HAVE A PROBLEM WORTH SOLVING?", finalTitle: "Tell us what is stuck. We'll tell you if we can help.",
    serviceCta: "Let's Talk", visit: "Visit",
  },
};

export { Eyebrow };
export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return <ServiceGridTemplate content={companyContent} compact={compact} />;
}
export function CompanyHome() {
  return <CompanyHomeTemplate content={companyContent} />;
}
