import type { Metadata } from "next";
import Image from "next/image";
import styles from "./brand-assets-review.module.css";

export const metadata: Metadata = {
  title: "Approved Bear Grid Asset Review",
  description: "Review-only page for technical variants of the existing approved Bear Grid logo.",
  robots: { index: false, follow: false, nocache: true },
};

const base = "/brand-assets";

const files = [
  "bear-grid-logo-horizontal.svg",
  "bear-grid-logo-horizontal.png",
  "bear-grid-logo-mark.svg",
  "bear-grid-logo-mark.png",
  "bear-grid-logo-black.svg",
  "bear-grid-logo-black.png",
  "bear-grid-logo-white.svg",
  "bear-grid-logo-white.png",
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "icon.svg",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "maskable-icon-512.png",
  "og-default.png",
  "og-home.png",
  "og-expertise.png",
  "og-history.png",
  "og-investors.png",
  "og-contact.png",
  "twitter-default.png",
  "asset-manifest.json",
] as const;

const cards = [
  ["og-default.png", "Default · 1200×630"],
  ["og-home.png", "Home · 1200×630"],
  ["og-expertise.png", "Expertise · 1200×630"],
  ["og-history.png", "History · 1200×630"],
  ["og-investors.png", "Investors · 1200×630"],
  ["og-contact.png", "Contact · 1200×630"],
  ["twitter-default.png", "X / Twitter · 1200×600"],
] as const;

export default function BrandAssetsReviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p>BEAR GRID / APPROVED ASSET SYSTEM</p>
        <h1>Existing logo. Production-ready variants.</h1>
        <div>
          <p>
            Every asset below is derived from the approved 270×236 Bear Grid mark already used by the live website.
            Its silhouette, geometry and proportions are unchanged.
          </p>
          <strong>Review only · no new asset is active in production.</strong>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p>01 / SOURCE &amp; LOCKUPS</p>
          <h2>Approved mark and current word treatment</h2>
        </div>
        <div className={styles.sourceGrid}>
          <figure className={styles.checker}>
            <Image src={`${base}/bear-grid-logo-mark.png`} alt="Existing approved Bear Grid mark on transparency grid" width={270} height={236} />
            <figcaption>Transparent mark · unchanged geometry · 270×236</figcaption>
          </figure>
          <figure className={styles.light}>
            <Image src={`${base}/bear-grid-logo-horizontal.png`} alt="Bear Grid horizontal logo on a light background" width={1000} height={236} />
            <figcaption>Transparent horizontal lockup · 1000×236</figcaption>
          </figure>
          <figure className={styles.dark}>
            <Image src={`${base}/bear-grid-logo-white.png`} alt="Approved Bear Grid white mark on a dark background" width={270} height={236} />
            <figcaption>White technical variant · 270×236</figcaption>
          </figure>
          <figure className={styles.light}>
            <Image src={`${base}/bear-grid-logo-black.png`} alt="Approved Bear Grid black mark on a light background" width={270} height={236} />
            <figcaption>Black technical variant · 270×236</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p>02 / FAVICON &amp; BROWSER</p>
          <h2>Small-size legibility using the same mark</h2>
        </div>
        <div className={styles.faviconRow}>
          {[16, 32, 64, 128].map((size) => (
            <figure key={size}>
              <span>
                <Image src={`${base}/icon-512.png`} alt="" width={size} height={size} />
              </span>
              <figcaption>{size} px</figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.browser}>
          <div className={styles.chromeBar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.tab}>
            <Image src={`${base}/favicon-32x32.png`} alt="" width={22} height={22} />
            <span>Bear Grid | Independent R&amp;D Consultancy</span>
            <b>×</b>
          </div>
          <div className={styles.address}>beargridsolutions.com</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p>03 / MOBILE DEVICES</p>
          <h2>iOS, Android and maskable-safe exports</h2>
        </div>
        <div className={styles.deviceGrid}>
          <DevicePreview image="apple-touch-icon.png" label="iOS · 180×180" />
          <DevicePreview image="icon-192.png" label="Android · 192×192" />
          <DevicePreview image="icon-512.png" label="Android · 512×512" />
          <DevicePreview image="maskable-icon-512.png" label="Maskable · 512×512" round />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p>04 / MESSENGER &amp; NETWORK PREVIEWS</p>
          <h2>Minimal cards in the current website style</h2>
        </div>
        <div className={styles.previewGrid}>
          <div>
            <p className={styles.label}>WhatsApp / Telegram</p>
            <div className={styles.messageCard}>
              <Image src={`${base}/og-home.png`} alt="Bear Grid WhatsApp and Telegram link preview" width={1200} height={630} />
              <div>
                <strong>Bear Grid</strong>
                <span>Independent R&amp;D consultancy · Netherlands</span>
                <small>beargridsolutions.com</small>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.label}>LinkedIn / Slack / Discord</p>
            <div className={styles.messageCard}>
              <Image src={`${base}/og-expertise.png`} alt="Bear Grid LinkedIn link preview" width={1200} height={630} />
              <div>
                <strong>Expertise | Bear Grid</strong>
                <span>Technology assessment · R&amp;D strategy</span>
                <small>beargridsolutions.com</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p>05 / SOCIAL PREVIEW SET</p>
          <h2>Route-specific Open Graph and X cards</h2>
        </div>
        <div className={styles.cardGrid}>
          {cards.map(([file, label]) => (
            <figure key={file}>
              <a href={`${base}/${file}`} target="_blank" rel="noreferrer">
                <Image src={`${base}/${file}`} alt={`Bear Grid ${label} social preview`} width={1200} height={file.startsWith("twitter") ? 600 : 630} />
              </a>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p>06 / DIRECT DOWNLOADS</p>
          <h2>Complete technical export set</h2>
        </div>
        <div className={styles.fileGrid}>
          {files.map((file) => (
            <a href={`${base}/${file}`} target="_blank" rel="noreferrer" key={file}>
              <span>{file}</span>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function DevicePreview({ image, label, round = false }: { image: string; label: string; round?: boolean }) {
  return (
    <figure>
      <div className={styles.phone}>
        <span className={round ? styles.round : ""}>
          <Image src={`${base}/${image}`} alt={`Bear Grid ${label} icon preview`} width={512} height={512} />
        </span>
        <small>Bear Grid</small>
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
