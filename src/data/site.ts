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

export const baseUrl = "https://beargrid-site.vercel.app";

export const navItems = [
  { label: "HOME", href: "/history/original-platform/home" },
  { label: "WHAT WE DO", href: "/history/original-platform/use-cases" },
  {
    label: "SOLUTIONS",
    href: "/history/original-platform/solutions",
    children: [
      { label: "Bear Device", href: "/history/original-platform/bear-device" },
      { label: "Bear Grid Platform", href: "/history/original-platform/bear-grid-platform" },
      { label: "AI Interface", href: "/history/original-platform/ai-interface" },
    ],
  },
  {
    label: "USE CASES",
    href: "/history/original-platform/use-cases",
    children: [
      { label: "ASP Bear Grid", href: "/history/original-platform/coming-soon-03" },
      { label: "BG Smart Tower Security Solution", href: "/history/original-platform/copy-of-asp-bear-grid" },
    ],
  },
  {
    label: "ABOUT US",
    href: "/history/original-platform/about",
    children: [
      { label: "HISTORY", href: "/history/original-platform/history" },
      { label: "NEWS", href: "/history/original-platform/news" },
      { label: "JOBS and OPPORTUNITIES", href: "/history/original-platform/jobs" },
    ],
  },
  { label: "GET IN TOUCH", href: "/contact" },
];

export const legacyHomePage: SitePage = {
  slug: "home",
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
      cta: {
        label: "LEARN MORE ABOUT BEAR GRID SOLUTIONS",
        href: "/history/original-platform/solutions",
      },
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
};

export const productCards = [
  {
    title: "Bear Grid device",
    body: "Portable seismic-signal classification system with a desktop and mobile interface.",
    href: "/history/original-platform/bear-device",
    image: "/icons/audio-wave.png",
  },
  {
    title: "Bear Grid Platform",
    body: "Sensor and data-acquisition infrastructure for real-time seismic monitoring.",
    href: "/history/original-platform/bear-grid-platform",
    tag: "GPS",
  },
  {
    title: "Artificial Intelligence Interface",
    body: "Machine-learning interface for classifying and interpreting seismic signals.",
    href: "/history/original-platform/ai-interface",
  },
];

export const pages: Record<string, SitePage> = {
  home: {
    slug: "",
    sourceUrl: "https://beargrid.wixsite.com/mysite",
    title: "Original Bear Grid Sensing Platform",
    navTitle: "HOME",
    description:
      "Archive of the original Bear Grid seismic sensing, monitoring and security platform.",
    eyebrow: "To know",
    heroTitle: "WHAT SOUND LOOKS LIKE",
    heroText:
      "The original Bear Grid platform combined seismic sensors, signal classification and monitoring interfaces for security and research applications.",
    heroImage: "/media/hero-sound-wave.jpg",
    heroImageAlt: "Abstract sound wave landscape used on the original Bear Grid home page.",
    sections: [
      {
        title: "WHAT IS BEAR GRID?",
        body: [
          "Bear Grid began as a deep-tech startup developing seismic sensing and signal-classification systems for security, surveillance and research.",
          "This archive preserves the original platform, product concepts, technical diagrams and use cases.",
        ],
        image: "/media/bear-grid-system.png",
        imageAlt: "Bear Grid system overview diagram from the original Wix site.",
        cta: { label: "Explore the original solutions", href: "/history/original-platform/solutions" },
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
    title: "Seismic Monitoring Use Cases | Original Bear Grid",
    navTitle: "WHAT WE DO",
    description:
      "Archived use cases for the original Bear Grid seismic sensing and ground-activity monitoring platform.",
    heroTitle: "SEISMIC MONITORING USE CASES",
    heroText: "The original platform was designed to detect and classify ground activity where visible monitoring was limited or unsuitable.",
    sections: [
      {
        body: [
          "Seismic sensors record ground vibration and can operate without a visible line of sight. Bear Grid explored this capability for perimeter monitoring, environmental research, geological work and infrastructure security.",
          "The platform was conceived as a data layer that could connect with cameras, control systems and other monitoring equipment.",
        ],
        cards: [
          { title: "Home Security", body: "Ground-activity detection around homes and outdoor areas" },
          { title: "Environmental Monitoring", body: "Research tools for recording animal movement" },
          { title: "Geological Exploration", body: "Distributed sensors for seismic data collection" },
          { title: "Private Estates", body: "Perimeter and access monitoring for private land" },
          { title: "Transport and Smart Mobility", body: "Traffic monitoring and cargo protection" },
          { title: "Law Enforcement & Border Security", body: "Ground-activity monitoring for controlled perimeters" },
          { title: "Farms", body: "Access, perimeter and motion control" },
          { title: "Business", body: "Measurement systems and applied signal-classification research" },
          { title: "Critical Infrastructure", body: "Integrated perimeter monitoring and detection" },
        ],
      },
    ],
  },
  solutions: {
    slug: "solutions",
    sourceUrl: "https://beargrid.wixsite.com/mysite/solutions",
    title: "Seismic Sensing Solutions | Original Bear Grid",
    navTitle: "SOLUTIONS",
    description:
      "Archived Bear Grid products for seismic data acquisition, signal classification and perimeter monitoring.",
    heroTitle: "ORIGINAL BEAR GRID SOLUTIONS",
    heroText:
      "The original product family combined seismic sensors, data acquisition and machine-learning classification.",
    sections: [
      {
        body: [
          "The platform was designed to collect sensor data in real time and present classified events through a monitoring interface.",
          "Its modular structure supported research, perimeter security and integration with other monitoring systems.",
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
      "Archived specifications for Bear Device, a portable seismic-signal classification and perimeter-monitoring prototype.",
    heroTitle: "BEAR DEVICE",
    heroImage: "/media/bear-device-interface-wide.png",
    heroImageAlt: "Bear Device interface screenshot from the original site.",
    sections: [
      {
        body: [
          "Bear Device was a portable prototype for detecting and classifying ground activity around farms, yards and industrial sites.",
          "The concept paired a desktop or mobile interface with seismic sensors and a local processing unit.",
          "The prototype kit comprised three sensors, one processing unit and the monitoring interface. It could operate independently or connect to a broader security system.",
          "Sensors were intended for placement along a perimeter or within a monitored area.",
        ],
        bullets: [
          "Simple installation",
          "Low-maintenance sensor architecture",
          "Integration with existing monitoring systems",
          "Prototype classification accuracy reported by the original team: 97%",
          "Perimeter security and surveillance applications",
          "Potential use in homes, farms and property-management systems",
          "Configurable for industrial and infrastructure monitoring",
        ],
      },
      {
        body: [
          "The interface was designed to convert seismic signals into readable event classifications and alerts.",
          "The original concept explored continuous outdoor monitoring for homes, farms and controlled perimeters.",
          "The proposed classification output included:",
        ],
        bullets: [
          "Estimated number of people",
          "Type of activity",
          "Approximate location and movement speed",
          "Animal activity",
          "Vehicle type and movement",
        ],
        image: "/media/bear-device-interface-map.png",
        imageAlt: "Bear Device map and signal interface screenshot.",
      },
      {
        body: [
          "The goal was to give security teams a continuously updated view of perimeter activity and additional context for prioritising alerts.",
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
      "Archived overview of the Bear Grid Platform for real-time seismic data acquisition and geological research.",
    heroTitle: "BEAR GRID PLATFORM",
    heroText:
      "A modular sensor and data-acquisition platform developed for real-time seismic monitoring.",
    sections: [
      {
        body: [
          "The original platform was designed to simplify seismic data collection for geological research.",
          "Its sensor architecture focused on rapid setup, real-time access and adaptation to different field objectives.",
        ],
        image: "/media/platform-sensors.png",
        imageAlt: "Bear Grid Platform sensor diagram from the original site.",
      },
      {
        title: "Core Platform Features",
        bullets: [
          "Real-time data acquisition and installation verification",
          "Configuration for different geological research objectives",
          "Low power consumption",
          "Low maintenance costs",
          "Reduced cabling requirements",
          "Maintenance-free operation",
          "Integration with external systems",
        ],
      },
      { title: "OTHER PRODUCTS" },
    ],
  },
  "copy-of-bear-grid-platform": {
    slug: "copy-of-bear-grid-platform",
    sourceUrl: "https://beargrid.wixsite.com/mysite/copy-of-bear-grid-platform",
    title: "Seismic Classification Interface | Original Bear Grid",
    navTitle: "AI Interface",
    description:
      "Archived Bear Grid research on machine-learning classification and analysis of seismic sensor data.",
    heroTitle: "SEISMIC CLASSIFICATION INTERFACE",
    heroText:
      "A research interface for adapting seismic-data collection and classification to specific monitoring objectives.",
    sections: [
      {
        body: [
          "The data-acquisition platform was designed for configuration around specific research or monitoring requirements.",
          "The archived development approach combined field experiments, machine-learning classification and analysis of sensor datasets.",
          "Potential applications included new monitoring products, research tools and integrations built on the original sensing platform.",
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
      "An archived software concept for connecting cameras, seismic sensors and other IoT security devices through one interface.",
    heroImage: "/media/asp-iot-security.jpg",
    heroImageAlt: "IoT security image used on the ASP Bear Grid page.",
    sections: [
      {
        body: [
          "Adaptive Security Platform Bear Grid was a software concept for connecting cameras, seismic sensors and other IoT devices to on-premises or cloud applications.",
          "The concept explored root-of-trust integration and a single monitoring interface for enrolled devices.",
          "The proposed product focused on three capabilities:",
        ],
        cards: [
          { title: "Device onboarding", body: "Enrol and monitor supported devices from one interface." },
          { title: "Root-of-trust integration", body: "Connect device identity and security controls to the wider monitoring system." },
          { title: "Operational simplicity", body: "Provide OEMs, integrators and operators with a consistent management view." },
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
      "An archived mobile-outpost concept combining cameras and ground sensors for perimeter monitoring.",
    sections: [
      {
        body: [
          "The Bear Grid Smart Tower Security Solution (BG STS) was designed for construction sites, property and controlled perimeters.",
          "The concept paired 360-degree and thermal cameras with a distributed grid of seismic sensors.",
          "Sensor events were intended to direct cameras toward activity and help operators prioritise alerts.",
          "The original design proposed multiple power configurations and modular installation at the monitored site.",
        ],
        cards: [
          { title: "On-site assembly", body: "A modular kit intended for assembly at the deployment location." },
          { title: "Low-power sensing", body: "Autonomous seismic sensors designed to limit continuous camera operation." },
          { title: "Planned maintenance", body: "The original concept proposed six-month maintenance intervals." },
          { title: "Privacy-aware configuration", body: "Camera selection and deployment could be configured around applicable privacy requirements." },
          { title: "Alert prioritisation", body: "Sensor classification was intended to give operators more context before review." },
        ],
      },
      {
        title: "SPECIFICATIONS",
        bullets: [
          "One thermal/optical turret camera with analytics",
          "Six to 36 seismic sensors connected to the tower",
          "Scenario-prediction software concept",
          "Intrusion and crime detection",
          "Power options: solar, wind, battery, hydrogen or mains power",
          "Original target consumption: 0.2 kWh",
        ],
      },
    ],
    form: "contact",
  },
  about: {
    slug: "about",
    sourceUrl: "https://beargrid.wixsite.com/mysite/about",
    title: "Original Bear Grid Team | Company Archive",
    navTitle: "ABOUT US",
    description:
      "Archived overview of the engineering disciplines behind the original Bear Grid sensing platform.",
    eyebrow: "Meet The Team",
    heroTitle: "WHO WE ARE?",
    heroText:
      "The original Bear Grid team researched seismic sensing and signal classification for security and monitoring systems.",
    sections: [
      {
        body: [
          "The original team brought together machine-learning, signal-processing, acoustics and hardware engineering.",
          "Its work focused on converting ground vibration into useful classifications for security and monitoring.",
          "This page is retained as an archive of the original startup team and development programme.",
        ],
      },
      {
        title: "ORIGINAL PRODUCT DISCIPLINES",
        bullets: ["Hardware Engineer", "Full Stack Developer", "Algorithms Engineer", "Seismologist Consultant"],
        cta: { label: "Discuss the original platform", href: "/contact" },
      },
    ],
  },
  news: {
    slug: "news",
    sourceUrl: "https://beargrid.wixsite.com/mysite/news",
    title: "Bear Grid Startup News Archive",
    navTitle: "NEWS",
    description: "Dated milestones from the original Bear Grid startup and sensing-platform development.",
    heroTitle: "Original Bear Grid News Archive",
    sections: [
      {
        cards: [
          {
            title: "2021 May.",
            body: "Bear Grid joined the YES!Delft Accelerator Validation Lab in Delft, the Netherlands.",
          },
          {
            title: "2020 October.",
            body: "The first Bear Grid Device prototype was completed and prepared for field testing.",
          },
        ],
      },
    ],
  },
  jobs: {
    slug: "jobs",
    sourceUrl: "https://beargrid.wixsite.com/mysite/jobs",
    title: "Original Bear Grid Opportunities Archive",
    navTitle: "JOBS and OPPORTUNITIES",
    description: "Archived roles and collaboration opportunities from the original Bear Grid startup.",
    heroTitle: "Original opportunities archive",
    heroText:
      "This page preserves roles and collaborations advertised by the original Bear Grid startup.",
    sections: [
      {
        body: [
          "These listings are historical and may no longer be open.",
          "Current employment, research and venture-collaboration enquiries can be submitted through the shared application form below.",
        ],
      },
      {
        title: "CURRENT OPENINGS",
        cards: [
          {
            title: "SMM Manager Intern",
            body: "Archived part-time role covering social media, content, listings and crowdfunding support. Originally listed at 10–15 hours per week, remote or in the Hague region.",
          },
          {
            title: "Marketing Research Specialist",
            body: "Archived role covering market research, growth opportunities and brand awareness in the Netherlands.",
          },
          {
            title: "Administrative Support Intern",
            body: "Archived part-time remote role supporting meetings, documents, enquiries and general administration.",
          },
        ],
      },
      {
        title: "How to Apply",
        body: [
          "Use the form below for current employment or collaboration enquiries.",
        ],
      },
    ],
    form: "jobs",
  },
  history: {
    slug: "history",
    sourceUrl: "https://beargrid.wixsite.com/mysite",
    title: "HISTORY | BearGrid Solutions",
    navTitle: "HISTORY",
    description:
      "The story of Bear Grid, from a microseismic security startup founded in Israel to a Netherlands-based company supporting founders and new ventures.",
    heroTitle: "HISTORY",
    heroText: "From sensing technology to founder support.",
    sections: [
      {
        body: [
          "Bear Grid was founded in Israel in 2019 as a technology startup developing smart microseismic sensors for security systems.",
          "In 2020, the founders considered Canada, the Netherlands, Denmark and the United Kingdom as the company’s future base. The Netherlands was selected, and Bear Grid has operated there since 2021.",
          "After joining the YES!Delft accelerator, the startup assembled a unique database of footstep patterns and developed the Bear Grid Device.",
          "In 2023, the company had not found its ideal product-market fit. In 2024, Bear Grid changed its purpose completely and began focusing on helping founders and supporting new ventures.",
        ],
      },
    ],
  },
  contacts: {
    slug: "contacts",
    sourceUrl: "https://beargrid.wixsite.com/mysite/contacts",
    title: "GET IN TOUCH | BearGrid Solutions",
    navTitle: "GET IN TOUCH",
    description: "Contact Bear Grid through the shared application form or WhatsApp.",
    heroTitle: "CONTACT US",
    heroText: "Interested in Bear Grid’s original platform or exploring a new collaboration?",
    sections: [
      {
        body: ["Use the shared application form below or write to Bear Grid on WhatsApp."],
      },
    ],
    form: "contact",
  },
};

export const publicPages = Object.values(pages);

export function getPageBySlug(slug: string) {
  return publicPages.find((page) => page.slug === slug);
}
