export type FormKind = "contact" | "jobs";

export type SitePage = {
  slug: string;
  sourceUrl: string;
  title: string;
  navTitle: string;
  description: string;
  eyebrow?: string;
  heroTitle: string;
  heroText?: string;
  heroImage?: string;
  heroImageAlt?: string;
  sections: Array<{
    title?: string;
    kicker?: string;
    body?: string[];
    bullets?: string[];
    cards?: Array<{ title: string; body: string }>;
    image?: string;
    imageAlt?: string;
    cta?: { label: string; href: string };
  }>;
  form?: FormKind;
};

export const baseUrl = "https://beargridsolutions.com";

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "WHAT WE DO", href: "/sectors" },
  {
    label: "SOLUTIONS",
    href: "/solutions",
    children: [
      { label: "Bear Device", href: "/bear-grid-device" },
      { label: "Bear Grid Platform", href: "/copy-of-bear-device" },
      { label: "AI Interface", href: "/copy-of-bear-grid-platform" },
    ],
  },
  {
    label: "USE CASES",
    href: "/#use-cases",
    children: [
      { label: "ASP Bear Grid", href: "/coming-soon-03" },
      { label: "BG Smart Tower Security Solution", href: "/copy-of-asp-bear-grid" },
    ],
  },
  {
    label: "ABOUT US",
    href: "/about",
    children: [
      { label: "NEWS", href: "/news" },
      { label: "JOBS and OPPORTUNITIES", href: "/jobs" },
    ],
  },
  { label: "GET IN TOUCH", href: "/contacts" },
];

export const productCards = [
  {
    title: "Bear Grid device",
    body: "Portable system of seismic signal classification with easy to use interface",
    href: "/bear-grid-device",
    image: "/icons/audio-wave.png",
  },
  {
    title: "Bear Grid Platform",
    body: "Adaptive and adjustable engineering solution for real-time seismological data acquiring.",
    href: "/copy-of-bear-device",
    tag: "GPS",
  },
  {
    title: "Artificial Intelligence Interface",
    body: "Adjustable AI solution for seismological data classification",
    href: "/copy-of-bear-grid-platform",
  },
];

export const pages: Record<string, SitePage> = {
  home: {
    slug: "",
    sourceUrl: "https://beargrid.wixsite.com/mysite",
    title: "Smart Sensors | Bear Grid Solutions",
    navTitle: "HOME",
    description:
      "Bear Grid Labs is team researching and developing solutions for security and surveillance systems based on sound, tone and noise AI classification. We making a security systems smart, effective and low-cost.",
    eyebrow: "To know",
    heroTitle: "WHAT SOUND LOOKS LIKE",
    heroText:
      "Bear Grid is a Start Up Research Lab developing technical solutions for security, surveillance and drilling systems based on Artificial Intelligence Algorithms that classify sounds and seismic activity.",
    heroImage: "/media/hero-sound-wave.jpg",
    heroImageAlt: "Abstract sound wave landscape used on the original Bear Grid home page.",
    sections: [
      {
        title: "WHAT IS BEAR GRID?",
        body: [
          "Bear Grid is a Start Up Research Lab developing technical solutions for security, surveillance and drilling systems based on Artificial Intelligence Algorithms that classify sounds and seismic activity.",
          "Real time Seismic Data acquisition system is a universal solution.",
        ],
        image: "/media/bear-grid-system.png",
        imageAlt: "Bear Grid system overview diagram from the original Wix site.",
        cta: { label: "LEARN MORE ABOUT BEAR GRID SOLUTIONS", href: "/solutions" },
      },
      {
        title: "PARTNERS",
        cards: [
          { title: "AccountNL.com", body: "/logos/accountnl-logo.png" },
          { title: "YES!DELFT", body: "/logos/yesdelft-logo.png" },
          { title: "KREW", body: "/logos/krew-logo.png" },
          { title: "Partner logo", body: "/logos/id-kzglfmw-logo.png" },
        ],
      },
    ],
  },
  sectors: {
    slug: "sectors",
    sourceUrl: "https://beargrid.wixsite.com/mysite/sectors",
    title: "WHAT WE DO | BearGrid Solutions",
    navTitle: "WHAT WE DO",
    description:
      "Artificial Intelligence and seismological sensor solutions for on-ground activity monitoring, security, surveillance, and research applications.",
    heroTitle: "CUTTING OFF SECURITY RISKS",
    heroText: "Artificial Intelligence solutions can succeed where others have failed.",
    sections: [
      {
        body: [
          "Our company provides AI solutions and engineered systems with seismological sensors tailored for on-ground activity monitoring cutting off the risks of intrusions and harmful intentions.",
          "The system is completely concealed and hidden unlike traditional security solutions. It could be integrated to variety of smart solutions, including smart homes, smart cities and other systems as well as complex manufacturing solutions for space, environmental and energy applications.",
          "Our technologies helps to cover vulnerabilities and significantly cut the costs for area monitoring and safety systems. We open a new opportunities for smart and complex systems to apply for the various fields.",
        ],
        cards: [
          { title: "Home Security", body: "Ultimate protection guaranteed" },
          { title: "Environmental Monitoring", body: "Research tools to monitor animals activity" },
          { title: "Geological Exploration", body: "Special sensors for detailed Data gathering" },
          { title: "Private Estates", body: "Private areas and estates solutions" },
          { title: "Transport and Smart Mobility", body: "Traffic monitoring and cargo protection" },
          { title: "Law Enforcement & Border Security", body: "Intrusions protections and border monitoring equipment" },
          { title: "Farms", body: "Access, perimeter and motion control" },
          { title: "Business", body: "Measurement systems and R&D for optimal AI solutions" },
          { title: "Strategic Objects", body: "Integrated systems of perimeter monitoring and detection" },
        ],
      },
    ],
  },
  solutions: {
    slug: "solutions",
    sourceUrl: "https://beargrid.wixsite.com/mysite/solutions",
    title: "SOLUTIONS | BearGrid Solutions",
    navTitle: "SOLUTIONS",
    description:
      "Bear Grid technical solutions for security, surveillance, quality control, and seismic Artificial Intelligence classification.",
    heroTitle: "OUR SOLUTIONS",
    heroText:
      "BEAR TECHNOLOGY is AI seismic classification security system for home, backyard, farm and residence appliance and for other outdoor areas requiring quality surveillance.",
    sections: [
      {
        body: [
          "With specially tailored platform it is required easy installation and data requisition from the security sensors and devices.",
          "It is universal and adjustable for any purposes to control, monitor and manage physical objects on the property area.",
          "BEAR GRID is developing technical solutions for security, surveillance and quality control management systems based on seismic Artificial Intelligence classification.",
        ],
        image: "/media/solutions-diagram.png",
        imageAlt: "Bear Grid solutions technical diagram from the original site.",
      },
      { title: "PRODUCTS" },
    ],
  },
  "bear-grid-device": {
    slug: "bear-grid-device",
    sourceUrl: "https://beargrid.wixsite.com/mysite/bear-grid-device",
    title: "Bear Device | BearGrid Solutions",
    navTitle: "Bear Device",
    description:
      "Bear Device is a portable system of property intruder classification with special software and simple interface.",
    heroTitle: "BEAR DEVICE",
    heroImage: "/media/bear-device-interface-wide.png",
    heroImageAlt: "Bear Device interface screenshot from the original site.",
    sections: [
      {
        body: [
          "Bear Device is a portable system of property intruder classification. It is a gadget with special software that is designed to discover and to inform about any possible hazards for property and security of an estate such as farm, backyard, plant area etc.",
          "Simple interface of the Bear Device could be installed as an application to the PC or smartphone and ensure security.",
          "User can add security kit into his security ecosystem as independent part or we can help to customize and build in the Device into entire system.",
          "As a DIY kit Bear Device is easy to install and to use. It contains three sensors, one main processing unit and interface. Sensors could be installed manually everywhere in the secure line or inside the area.",
          "We offer cutting edge technology packed in one simple product that can be integrated in existing home security systems as a solid addition which increases flexibility and reliability of the entire system.",
        ],
        bullets: [
          "Simple installation",
          "Cheap maintenance, price cheaper than competitors",
          "Easy integration with existing home security systems",
          "High accuracy alerts - 97%",
          "Complex solutions for perimeter security and surveillance",
          "Wide usage (Smart home, internet of things, property security or farm management system)",
          "Customization of the technology for the security needs of plants, power stations and other infrastructure objects",
        ],
      },
      {
        body: [
          "BEAR GRID AI solution packed in user-friendly interface that could be easily integrated with those that already in use.",
          "Our seismic classification security system was developed for home, backyard, farm and residence appliance and showed high efficiency predicting hazards and decreasing number of false alerts. AI interface can be used for any outdoor areas requiring quality 24/7 surveillance.",
          "While applying in defense, the AI will provide a security team with:",
        ],
        bullets: [
          "quantity of people",
          "kind of their activities",
          "their real time location and moving speed",
          "animals quantity and type",
          "transports type, approximate weight and quantity",
        ],
        image: "/media/bear-device-interface-map.png",
        imageAlt: "Bear Device map and signal interface screenshot.",
      },
      {
        body: [
          "A security team would be able to have a constantly updating status report about all of the activity on the perimeter and not to respond in full force to one person who really didn't want to cause any trouble",
        ],
        cards: [
          { title: "Mobile screen", body: "/media/bear-device-mobile-screen.png" },
          { title: "Dashboard", body: "/media/bear-device-dashboard.png" },
        ],
      },
      { title: "OTHER PRODUCTS" },
    ],
  },
  "copy-of-bear-device": {
    slug: "copy-of-bear-device",
    sourceUrl: "https://beargrid.wixsite.com/mysite/copy-of-bear-device",
    title: "Bear Grid Platform | BearGrid Solutions",
    navTitle: "Bear Grid Platform",
    description:
      "Bear Grid Platform is an adaptive and adjustable engineering solution for real-time seismological data acquisition.",
    heroTitle: "BEAR GRID PLATFORM",
    heroText:
      "Bear Grid Platform is an adaptive and adjustable engineering solution for real-time seismological data acquisition.",
    sections: [
      {
        body: [
          "It is specifically designed for geological exploration research to decrease expenses and simplify geological exploration process.",
          "The platform provides easy and low cost adaptive access to seismological data.",
        ],
        image: "/media/platform-sensors.png",
        imageAlt: "Bear Grid Platform sensor diagram from the original site.",
      },
      {
        title: "Core Platform Features",
        bullets: [
          "Easy installation consisting instant verification: no need to wait to get the data, real-time data acquisition",
          "Adjustability to the goals of the geological exploration research",
          "Low power consumption",
          "Low maintenance costs",
          "Low quantity of cables required",
          "Maintenance-free operation",
          "Easily integrated with other systems",
        ],
      },
      { title: "OTHER PRODUCTS" },
    ],
  },
  "copy-of-bear-grid-platform": {
    slug: "copy-of-bear-grid-platform",
    sourceUrl: "https://beargrid.wixsite.com/mysite/copy-of-bear-grid-platform",
    title: "AI Interface | BearGrid Solutions",
    navTitle: "AI Interface",
    description:
      "Bear Grid research and development for seismic analyses based systems, machine learning algorithms, and Big Data analysis.",
    heroTitle: "RESEARCH AND DEVELOPMENT",
    heroText:
      "Bear Grid formed by a group of engineers and devoted to solve and overcome technical complications of modern seismic analyses based systems.",
    sections: [
      {
        body: [
          "Bear Grid data acquisition platform can be adapted for specific customer requirements.",
          "We can help to create new technology, products, services, or systems based on our technical solutions.",
          "There are numbers of methods that we can implement using our platform, including machine learning algorithms, Big Data analysis and experiments on the site with specific research objectives.",
          "Our R&D team is inspirit for the new challenges!",
        ],
      },
      { title: "OTHER PRODUCTS" },
    ],
  },
  "coming-soon-03": {
    slug: "coming-soon-03",
    sourceUrl: "https://beargrid.wixsite.com/mysite/coming-soon-03",
    title: "ASP Bear Grid | BearGrid Solutions",
    navTitle: "ASP Bear Grid",
    description:
      "The Adaptive Security Platform Bear Grid is a software-based IoT home security integration platform.",
    heroTitle: "Adaptive Security Platform Bear Grid",
    heroText:
      "The Adaptive Security Platform Bear Grid is universal IoT security platform that works with any root-of-trust (RoT) for easy-to-use for scalable end-to-end security.",
    heroImage: "/media/asp-iot-security.jpg",
    heroImageAlt: "IoT security image used on the ASP Bear Grid page.",
    sections: [
      {
        body: [
          "The Adaptive Security Platform Bear Grid is shareware software-based IoT home security integration platform that securely connects cameras, seismic sensors and any other possible IoT devices to server-hosted apps on-premises or in the cloud.",
          "ASP Bear Grid uses advanced techniques to integrate with any root-of-trust for end-to-end security across every IoT device turning it into one easy to use and interpret interface.",
          "Unlike other IoT security platforms whose vulnerabilities make scaling a risk ASP Bear Grid provides the following features:",
        ],
        cards: [
          { title: "Short deployment stages for all devices", body: "Users can simply onboard and monitor devices using a single Interface. The solution is unique and easy appliable." },
          { title: "Simple root-of-trust integration", body: "It is usually takes other IoT software platforms a lot of efforts to integrate with a given root-of-trust. ASP Bear Grid combine secured integration and simple RoT connections to thousands of devices to servers in minutes." },
          { title: "No complexity", body: "Everybody can easily manage their IoT environment: OEMs, system integrators and even end-users with zero experience." },
        ],
      },
    ],
    form: "contact",
  },
  "copy-of-asp-bear-grid": {
    slug: "copy-of-asp-bear-grid",
    sourceUrl: "https://beargrid.wixsite.com/mysite/copy-of-asp-bear-grid",
    title: "BG Smart Tower Security Solution | BearGrid Solutions",
    navTitle: "BG Smart Tower Security Solution",
    description:
      "Bear Grid Smart Tower Security Solution is a mobile and autonomous outpost platform for perimeter security.",
    heroTitle: "BG Smart Tower Security solution",
    heroText:
      "The Bear Grid Smart Tower Security Solution is mobile and autonomous outpost platform that overbear all of the knowable vulnerabilities of the existing Security Tower Solutions such as energy inefficiency, costly maintenance, deep human surveillance involvement, false alerts etc.",
    sections: [
      {
        body: [
          "The Bear Grid Smart Tower Security Solution (BG STS) is a reliable, cost-effective smart security solution designed specifically for high-tech security companies keeping an eye on construction projects, property, and perimeter security.",
          "Mobile BG STS is suited for any possible scenario and provides the most reliable data with no false alerts. All of the top-edge technologies such as high-definition images and thermal scanning functionality comes to end when there is a cat or power outage. We equipped our BG STS with not just all top-edge 360 cameras, but also a grid of autonomous smart seismical sensors around.",
          "Now all the cameras know the time and the exact point to watch the event, making the solution 70% more energy-effective and service low-costly.",
          "AI seismic solution determining the object helps to prioritize the alert. Seismic sensors paired with cameras provide a full real-time picture of the area leaving no space to mistake or false alerts.",
        ],
        cards: [
          { title: "Quick installation", body: "BG STS provides as a DIY kit and can be assembled at the site. The solution is easy appliable" },
          { title: "Low power consumption", body: "Using autonomous smart seismic sensors with no wires allows to save 70% energy compared for traditional security solutions" },
          { title: "Cheap upkeep and maintenance", body: "BG STS is reliable and require a maintenance human check-up not often then a 6 months" },
          { title: "Fully GDPR compliant", body: "BG STS could be equipped with GDPR complaint cameras paired with autonomous smart seismic sensors" },
          { title: "Lowest false alerts", body: "No operator attention needed until there a real alert" },
        ],
      },
      {
        title: "SPECIFICATIONS",
        bullets: [
          "1 thermal/optical turret analytics cameras detecting all types of intrusions in all weather conditions",
          "From to 6 up to 36 smart seismical sensors connected to the tower enabling provide a clear picture",
          "Scenario's prediction systems",
          "Intrusion and crime detection",
          "Power options: Green (Solar/Wind/Battery), Yellow (Solar/Wind/Hydrogen), Red - Mains Power (110v or 240v)",
          "Low consumption - 0.2 kWh",
        ],
      },
    ],
    form: "contact",
  },
  about: {
    slug: "about",
    sourceUrl: "https://beargrid.wixsite.com/mysite/about",
    title: "ABOUT US | BearGrid Solutions",
    navTitle: "ABOUT US",
    description:
      "Bear Grid Inc is an international company researching and developing technical solutions for security and surveillance systems.",
    eyebrow: "Meet The Team",
    heroTitle: "WHO WE ARE?",
    heroText:
      "Bear Grid Inc is international company researching and developing technical solutions for security and surveillance systems based on sound, tone and noise Artificial Intelligence classification.",
    sections: [
      {
        body: [
          "Our team includes AI and sound engineers, algorithm engineers, physics of sound consultants and hardware genius team.",
          "We aim to change the perception of home security systems, making them smarter.",
          "Currently we are looking for partners, investors and expertise who will help us to validate our technical findings!",
        ],
      },
      {
        title: "WHO ELSE IS WORKING ON BEAR GRID PRODUCT DEVELOPMENT?",
        bullets: ["Hardware Engineer", "Full Stack Developer", "Algorithms Engineer", "Seismologist Consultant"],
        cta: { label: "CONTACT US", href: "/contacts" },
      },
    ],
  },
  news: {
    slug: "news",
    sourceUrl: "https://beargrid.wixsite.com/mysite/news",
    title: "NEWS | BearGrid Solutions",
    navTitle: "NEWS",
    description: "Bear Grid company news and product milestones.",
    heroTitle: "Bear Grid News",
    sections: [
      {
        cards: [
          {
            title: "2021 May.",
            body: "We are glad to share that our team are now participating YES!DELFT Accelerator Validation Lab at Delft, Netherlands. News will follow soon.",
          },
          {
            title: "2020 October.",
            body: "We are glad to present our first product accomplishment! The first Bear Grid Device development is completed and ready to be tested on the ground. All the technical parameters you can find below.",
          },
        ],
      },
    ],
  },
  jobs: {
    slug: "jobs",
    sourceUrl: "https://beargrid.wixsite.com/mysite/jobs",
    title: "JOBS and OPPORTUNITIES | BearGrid Solutions",
    navTitle: "JOBS and OPPORTUNITIES",
    description: "Work, study, and collaboration opportunities with Bear Grid.",
    heroTitle: "Work and study with us!",
    heroText:
      "We are in constant search of possible collaborations with talented teams, research institutions, security companies and start ups working to shape the future of the security.",
    sections: [
      {
        body: [
          "We are working on a multiple projects simultaneously in an agile mode and looking for like-minded people.",
          "Also, our growing team is open for any passionate professionals / researches / interns. We offer opportunities to join our projects and researches remotely / on the site. We provide real opportunities to grow together.",
          "If you are excited about edged tech, start up consultancy, AI, security and research or just want to be involved at the real tech playground, shoot us your CV via form below.",
        ],
      },
      {
        title: "CURRENT OPENINGS",
        cards: [
          {
            title: "SMM Manager Intern!",
            body: "Create and manage our social media presence; craft captivating posts and engaging content; maintain catalogues and professional platform listings; launch and oversee crowd-funding and investing campaigns; be a self-organized dynamo who gets things done. 40-60 hours per month, 10-15 hours per week. Fully remote or join us in the vibrant Den Haag Region, NL.",
          },
          {
            title: "Marketing Research Specialist",
            body: "Research our niche, drive growth, and research requirements for brand awareness in the Netherlands. Skills: market research, analytical skills, communication and collaboration, project management, technical skills.",
          },
          {
            title: "Administrative Support Intern",
            body: "Location: Remote, CET time preferred, part-time. Languages: English required; Dutch, Russian, Ukrainian, Hebrew are bonuses. Support meetings, documents, account managers, email inquiries, and general office tasks.",
          },
        ],
      },
      {
        title: "How to Apply",
        body: [
          "Shoot us your proposal even you are not sure it is for you, let's check it out!",
          "Please, apply via the form below.",
        ],
      },
    ],
    form: "jobs",
  },
  contacts: {
    slug: "contacts",
    sourceUrl: "https://beargrid.wixsite.com/mysite/contacts",
    title: "GET IN TOUCH | BearGrid Solutions",
    navTitle: "GET IN TOUCH",
    description: "Contact Bear Grid Solutions at office@beargridsolutions.com.",
    heroTitle: "CONTACT US",
    heroText: "Interested in a solutions of Bear Grid? Experience a challenge that needs being solved? E-mail us now.",
    sections: [
      {
        body: ["office@beargridsolutions.com"],
      },
    ],
    form: "contact",
  },
};

export const publicPages = Object.values(pages);

export function getPageBySlug(slug: string) {
  return publicPages.find((page) => page.slug === slug);
}
