# Bear Grid Wix Site Audit

Source website: https://beargrid.wixsite.com/mysite  
Fresh audit date: 2026-07-13  
Purpose: visual and functional parity audit for the independent Next.js rebuild.

## Audit Method

- Reopened the live Wix site rather than relying on the previous audit.
- Followed all visible internal navigation links.
- Captured/inspected source and local pages at:
  - 1440x900
  - 1280x800
  - 1024x768
  - 390x844
  - 375x812
- Compared header, hero, page structure, images, typography, forms, footer, and responsive behavior.

## Intentional Exclusion

The live Wix site includes a Wix platform advertisement banner: "This website was built on Wix. Create yours today." This is not Bear Grid brand content and is not reproduced in the independent rebuild.

## Public Pages

| Page | Wix URL | Rebuilt route | Source role |
| --- | --- | --- | --- |
| Home | `/mysite` | `/` | Main brand intro, carousel hero, product explanation, partners |
| What We Do | `/mysite/sectors` | `/sectors` | Sectors and security applications |
| Solutions | `/mysite/solutions` | `/solutions` | Main solution/product overview |
| Bear Device | `/mysite/bear-grid-device` | `/bear-grid-device` | Product detail |
| Bear Grid Platform | `/mysite/copy-of-bear-device` | `/copy-of-bear-device` | Product detail |
| AI Interface | `/mysite/copy-of-bear-grid-platform` | `/copy-of-bear-grid-platform` | R&D / AI interface |
| ASP Bear Grid | `/mysite/coming-soon-03` | `/coming-soon-03` | Use case with contact form |
| BG Smart Tower Security Solution | `/mysite/copy-of-asp-bear-grid` | `/copy-of-asp-bear-grid` | Use case with contact form |
| About Us | `/mysite/about` | `/about` | Company/team page |
| News | `/mysite/news` | `/news` | News entries |
| Jobs and Opportunities | `/mysite/jobs` | `/jobs` | Openings and application form |
| Get in Touch | `/mysite/contacts` | `/contacts` | Contact details and form |

## Header and Navigation

Source desktop behavior:

- Tall white header, approximately 129px excluding the Wix ad banner.
- Large Bear Grid bear logo, approximately 135x118.
- Brand text: "BEAR GRID", black, bold, about 22px.
- Navigation is black, bold, about 18px.
- Active item has a light beige background and a small downward triangle.
- Items visible: HOME, WHAT WE DO, SOLUTIONS, USE CASES, ABOUT US, GET IN TOUCH, More.
- Dropdowns exist for SOLUTIONS, USE CASES, ABOUT US.
- Header behaves as sticky/fixed in full-page screenshot stitching.

Rebuild status:

- Tall desktop header implemented.
- Large source logo restored on desktop.
- Active beige tab and triangle implemented.
- Nav links kept functional.
- Mobile uses an accessible menu button; source Wix mobile view appears to retain a desktop canvas/min-width behavior in the test browser, so the rebuild keeps a responsive mobile menu while preserving Bear Grid styling.

## Home Page

Source sections:

1. Header / navigation
2. Carousel hero
   - Height about 442px.
   - Aerial field image.
   - White arrow on left.
   - Slide dots at bottom right.
   - Black text plaques with white text:
     - "To know"
     - "WHAT SOUND"
     - "LOOKS LIKE"
   - Adjacent carousel slide visible off-canvas in DOM.
3. "WHAT IS BEAR GRID?"
   - Centered heading, about 29px bold.
   - Centered paragraph, about 24px.
   - Exact text preserved.
   - Diagram image, about 695x514 on desktop.
   - Outline button: "LEARN MORE ABOUT BEAR GRID SOLUTIONS".
4. "PARTNERS"
   - Centered heading, about 30px bold.
   - Two-column logo arrangement on desktop.
5. Footer/back-to-top area.

Rebuild changes applied:

- Removed generic "Use cases" contact band that was not present on the Wix homepage.
- Reworked hero into a source-like carousel presentation with black text plaques, arrow, dots, and aerial image.
- Reworked home intro into a centered Wix-like rhythm.
- Restored partner logo spacing and local images.
- Reworked footer away from the earlier dark generic footer.

## Other Pages

The non-home pages retain the rebuilt content structure from the first pass, with the shared header/footer now closer to Wix. Remaining visual differences are documented in `docs/visual-parity-report.md`.

## Forms

Forms found:

- Contact/use-case form:
  - Name
  - Email
  - Subject
  - Message
  - Submit button
  - Success state
- Jobs form:
  - First Name
  - Last Name
  - Email
  - Phone
  - Link to CV/LinkedIn
  - Position select
  - Submit button
  - Success state

No public Wix form recipient/destination was exposed. The rebuild keeps frontend validation and serverless endpoints but intentionally does not send or store submissions.

## External Links and Contact

- Contact email: `office@beargridsolutions.com`
- YES!DELFT reference appears on the News page.
- LinkedIn icon asset appears in source media, but no reliable public destination URL was exposed in the extracted HTML.

## Metadata

Home metadata from source:

- Title: `Smart Sensors | Bear Grid Solutions`
- Description: Bear Grid Labs security/surveillance/sound AI classification description.
- Open Graph site name: `BearGrid Solutions`
- Open Graph image: Bear Grid source image from Wix media.

Rebuild status:

- Per-page titles and descriptions are present.
- Canonical URLs are configured for the future `beargridsolutions.com` domain.
- Sitemap and robots routes exist.
