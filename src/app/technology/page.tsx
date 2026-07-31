import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Original Technology Platform | Bear Grid",
  description: "Bear Grid’s original AI-enabled sensing, monitoring and security platform, technical research and application archive.",
  alternates: { canonical: "/technology" },
};

const useCases = [
  ["Home Security", "Ultimate protection guaranteed", "/media/wix/sector-home.jpg"],
  ["Private Estates", "Private areas and estates solutions", "/media/wix/sector-estates.jpg"],
  ["Farms", "Access, perimeter and motion control", "/media/wix/sector-farms.jpg"],
  ["Environmental Monitoring", "Research tools to monitor animals activity", "/media/wix/sector-environment.jpg"],
  ["Transport and Smart Mobility", "Traffic monitoring and cargo protection", "/media/wix/sector-transport.jpg"],
  ["Law Enforcement & Border Security", "Intrusions protection and border monitoring equipment", "/media/wix/sector-border.jpg"],
] as const;

export default function TechnologyPage() {
  return (
    <main className="technology-archive">
      <section className="archive-hero">
        <p className="final-label">Original technology platform</p>
        <h1>AI-enabled sensing, monitoring and security systems.</h1>
        <p>Bear Grid’s original platform combines seismological sensors, real-time data acquisition and classification concepts for monitoring physical activity.</p>
        <div className="archive-links">
          <a href="#platform">Platform</a>
          <a href="#device">Bear Device</a>
          <a href="#applications">Applications</a>
        </div>
      </section>

      <section className="archive-section archive-solutions" id="platform">
        <div className="archive-copy">
          <p className="final-label">System overview</p>
          <h2>Bear Grid Platform</h2>
          <p>Bear Grid Platform is an adaptive and adjustable engineering solution for real-time seismological data acquisition.</p>
          <p>It is specifically designed for geological exploration research to decrease expenses and simplify the exploration process. The platform provides adaptive, low-cost access to seismological data.</p>
          <ul>
            <li>Real-time data acquisition and instant verification</li>
            <li>Adjustable to the goals of the research</li>
            <li>Low power consumption and maintenance</li>
            <li>Integration with other systems</li>
          </ul>
        </div>
        <Image src="/media/wix/solutions-exact.png" alt="Bear Grid sensing system installed around a property and agricultural area" width={790} height={593} sizes="(max-width: 900px) 100vw, 58vw" priority />
      </section>

      <section className="archive-section device-section" id="device">
        <div className="archive-copy">
          <p className="final-label">Portable classification system</p>
          <h2>Bear Device</h2>
          <p>Bear Device is a portable system of property intruder classification. It combines sensors, a main processing unit and an interface designed to discover and report possible hazards around farms, backyards and other secured areas.</p>
          <p>The interface can be installed on a computer or smartphone and integrated into a wider security system.</p>
        </div>
        <Image className="sound-strip" src="/media/wix/device-sound-icons.png" alt="Categories of sound detected by Bear Device" width={809} height={134} />
        <Image className="classification-image" src="/media/wix/device-classification.png" alt="Bear Device classification examples including animals, people, vehicles and other sounds" width={827} height={601} />
      </section>

      <section className="archive-split">
        <div>
          <p className="final-label">Sensor unit</p>
          <h2>Real-time acquisition</h2>
          <p>The original sensor platform was designed for simple installation, low power consumption and real-time seismological data processing.</p>
          <Image src="/media/wix/platform-sensor-exact.png" alt="Bear Grid sensor unit and monitoring interface diagram" width={359} height={332} />
        </div>
        <div>
          <p className="final-label">User interface</p>
          <h2>Clear activity alerts</h2>
          <p>Classification results were designed to be presented through a direct interface for monitoring and review.</p>
          <Image src="/media/wix/device-mobile.png" alt="Bear Grid mobile alert interface" width={709} height={863} />
        </div>
      </section>

      <section className="archive-applications" id="applications">
        <div className="archive-heading">
          <p className="final-label">Application concepts</p>
          <h2>Where the platform was designed to work.</h2>
        </div>
        <div className="archive-use-cases">
          {useCases.map(([title, body, image]) => (
            <article key={title}>
              <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <div><h3>{title}</h3><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-cta">
        <h2>Technology enquiries and collaboration</h2>
        <p>The original platform remains part of Bear Grid’s technology portfolio.</p>
        <Link className="final-button dark" href="/contact">Contact Bear Grid</Link>
      </section>
    </main>
  );
}
