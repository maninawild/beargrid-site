# Bear Grid topical authority map

Updated: 1 August 2026
Scope: current Bear Grid company, venture/technology decision support, and the archived original sensing platform.

## Authority position

Bear Grid should own the intersection of three entities:

1. Technology assessment: deciding whether a technology is feasible, evidence-backed and ready for implementation or investment.
2. Venture validation: deciding whether a problem, market, proposition and business model justify further commitment.
3. Partnership development: converting complementary capabilities into a governed, measurable collaboration.

The differentiating topic is **decision evidence**: the minimum reliable technical, commercial and execution evidence required before a team commits more resources.

## Commercial topic map

| Commercial topic | Searcher problem | Primary page | Conversion | Supporting cluster |
|---|---|---|---|---|
| Technology and AI assessment | “Is this feasible, safe and worth implementing?” | `/#expertise` | Discuss a technology decision | Feasibility, readiness, risk, evidence, build/buy/partner |
| Venture and market validation | “Should we invest, build, launch or stop?” | `/#expertise` | Discuss a venture | Problem validation, demand, pricing, business model, validation gates |
| Partnership development | “Who should we work with, and how?” | `/#expertise` | Discuss a partnership | Partner fit, mutual value, governance, pilots, institutional collaboration |
| Business advisory | “How do we make a high-consequence growth decision?” | `/contact` | Submit an advisory enquiry | Decision framing, risk registers, market entry, prioritisation |
| Technology projects | “How do we de-risk implementation?” | `/contact` | Submit a technology-project enquiry | Requirements, feasibility, vendor evaluation, implementation gates |
| Venture collaboration | “How can Bear Grid help shape this venture?” | `/contact` | Submit a venture-collaboration enquiry | Venture thesis, validation plan, operating model, milestones |
| Investment opportunities | “What evidence should support an investment decision?” | `/contact` | Submit an investment enquiry | Technical diligence, commercial diligence, evidence quality, risk |
| Original Bear Grid platform | “What did Bear Grid build, and is it relevant now?” | `/history/original-platform` | Discuss the original platform | Seismic sensing, signal classification, perimeter monitoring, IoT integration |

## Informational clusters

### Cluster A — Technology assessment

- Pillar: Technology assessment framework.
- Supporting topics: feasibility study, technical readiness, AI readiness, evidence quality, technology risk register, architecture review, build-vs-buy-vs-partner, vendor evaluation, prototype-to-production, technical due diligence.
- Required entity links: technology assessment → decision evidence → validation gate → `/contact`.

### Cluster B — Venture validation

- Pillar: Venture validation framework.
- Supporting topics: problem validation, customer evidence, market validation, willingness to pay, business-model assumptions, validation experiments, early-stage metrics, product-market-fit evidence, stop criteria, validation roadmap.
- Required entity links: venture validation → commercial validation → decision evidence → `/contact`.

### Cluster C — Partnership development

- Pillar: Partnership development process.
- Supporting topics: partner-fit criteria, mutual-value hypothesis, pilot design, partnership governance, university collaboration, corporate-startup collaboration, investor/operator alignment, memoranda of understanding, partnership metrics, failed-partnership warning signs.
- Required entity links: partnership development → validation gate → `/contact`.

### Cluster D — Decision systems

- Pillar: Evidence before commitment methodology.
- Supporting topics: decision framing, assumption mapping, evidence hierarchy, decision logs, stage gates, risk-adjusted prioritisation, go/change/stop criteria, uncertainty management.
- Canonical reference: `/insights#methodology`.

### Cluster E — Original sensing platform

- Pillar: Original Bear Grid platform archive.
- Supporting topics: seismic sensing definition, ground-activity classification, sensor fusion, perimeter monitoring, real-time seismic acquisition, sensor deployment, IoT security integration, archived product lessons.
- Required links: `/history`, `/history/original-platform`, relevant archived product page, `/contact` with “Original Bear Grid Platform”.

## Insights architecture

### Categories

1. Technology Assessment
2. Venture Validation
3. Partnership Development
4. Decision Methods
5. Original Platform Research

Each article receives exactly one primary category. Cross-topic discovery is handled with tags, not duplicate categories.

### Controlled tags

- Audience: `founders`, `companies`, `investors`, `institutions`, `product-leaders`, `innovation-teams`.
- Decision: `build`, `buy`, `partner`, `invest`, `launch`, `pause`, `stop`.
- Evidence: `technical-feasibility`, `customer-evidence`, `market-evidence`, `operational-risk`, `commercial-model`.
- Stage: `idea`, `validation`, `pilot`, `implementation`, `scale`.
- Heritage: `seismic-sensing`, `signal-classification`, `perimeter-monitoring`, `iot-security`.

Do not create synonyms as separate tags. Maintain this vocabulary centrally.

### URL model

- Hub: `/insights`
- Future article: `/insights/{descriptive-slug}`
- Categories and tags are navigation/filter metadata, not indexable thin pages until each has at least five substantial articles and a unique introduction.

### Internal linking rules

1. Every article links once, contextually, to its assigned commercial page within the first 40% of the article.
2. Every article links to one Insights definition using exact or close-match terminology.
3. Every article links to two supporting articles: one prerequisite and one next-stage topic.
4. Original-platform articles link to `/history` and one specific archived product page.
5. Commercial pages link back only to the strongest pillar or methodology page; avoid article lists on conversion-critical sections.
6. Use descriptive anchors. Never use “click here”, repeated exact-match anchors, or links unrelated to the surrounding claim.
7. No article should be more than three internal clicks from `/insights`.
8. Orphan check is mandatory before publication.

### Related articles logic

Rank candidates using:

1. Same primary category: +4
2. Shared decision tag: +3
3. Shared stage tag: +2
4. Same audience: +1
5. Already linked in body: exclude
6. Same primary keyword intent: exclude to prevent cannibalisation

Display three: the highest-scoring prerequisite, an adjacent perspective, and a next-stage action.

### Next reading logic

- Definition article → framework article → checklist/template article → commercial page.
- Early-stage question → validation method → evidence standard → decision gate.
- Technical topic → commercial implication → partnership/implementation path.
- Original-platform topic → relevant product archive → history overview → contact.

The final “Next reading” item should move the reader one decision closer, not simply repeat the same subject.

## Publication quality gate

Every published article must include:

- One-sentence direct answer below the H1.
- A 40–80 word extractable summary.
- Original definition when a core term is introduced.
- Named author with verifiable biography and relevant experience.
- Published and updated dates.
- Method, evidence basis, limitations and sources.
- At least one original table, decision framework, checklist or worked example.
- Article or TechArticle schema, BreadcrumbList schema and matching visible breadcrumbs.
- One commercial link, three contextual internal links and a next-reading module.
- A specific CTA matching intent.

## Measurement

- Authority: non-brand impressions and citations for cluster terms.
- Quality: assisted conversions, qualified contact starts, article-to-commercial click rate.
- AI search: cited URLs, answer-engine referral sessions, query/entity coverage.
- Architecture: orphan pages, crawl depth, internal PageRank distribution, cannibalisation pairs.
- Freshness: articles reviewed within 12 months; commercial facts reviewed within 90 days.
