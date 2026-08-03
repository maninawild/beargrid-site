# Bear Grid SEO, AI-search and crawler audit — after

Access date: 3 August 2026

## Implemented changes

| Change | Reason | Official-guidance basis | Routes | Verification |
| --- | --- | --- | --- | --- |
| Reframed the homepage title, H1 and lead as a Netherlands-based independent R&D consultancy | Align visible positioning, metadata and extractable entity facts | Google Search Essentials; Google generative-AI guide | `/` | One H1; server-rendered answer; metadata/canonical test passed |
| Added concise definitions for technology assessment, R&D strategy, venture validation and innovation partnerships | State what each service is, who it is for, when it is useful, what is examined and what the client receives | Google people-first content guidance; Bing AI Performance clarity guidance | `/expertise` | Visible headings and direct-answer assertions passed |
| Made investor assessment the primary investor-page answer while preserving selected introductions and disclaimers | Separate investor intent from the homepage and make the decision support quotable | Google title/content clarity; Bing cited-content clarity | `/investors` | Unique title/H1; visible scope, output and limitations |
| Added the canonical Bear Grid entity sentence near the top of company history | Make founding date, location and current category extractable without removing the timeline | Google helpful-content and structured-data consistency guidance | `/history` | History narrative and links passed |
| Connected Service nodes to the stable Organization `@id`, added stable Service IDs and removed the incorrectly modelled ProfessionalService node | Eliminate duplicate Organization objects and make structured data match visible content | Google structured-data introduction; Next.js JSON-LD guide | `/`, `/expertise`, sitewide graph | JSON parsing and graph identity assertions passed |
| Expanded the Organization logo ImageObject with stable ID, dimensions and content URL | Improve local logo entity consistency without changing the approved identity | Google image and Organization data guidance | Sitewide | Local logo returned `200`; graph URL matched production |
| Standardised current metadata `siteName` as Bear Grid | Keep the public entity name consistent while preserving historical archive text | Google structured-data consistency guidance | Dynamic archived-source routes | Source scan and metadata tests passed |
| Added one-hop permanent aliases for `/privacy` and `/cookies` | Recover likely user/bookmark variants without indexing duplicate policy pages | Google redirect/canonical guidance; Next.js redirect guidance | `/privacy`, `/cookies` | Both returned `308` directly to canonical policy pages |
| Explicitly allowed relevant search crawlers and excluded API/review paths | Make crawler intent explicit and prevent internal review discovery | OpenAI, Perplexity and Anthropic crawler guidance; robots standard | `/robots.txt` | Googlebot, Bingbot, Applebot, OAI-SearchBot, PerplexityBot and ClaudeBot checks passed |
| Removed sitemap `priority` and `changeFrequency` values while retaining maintained content dates | Keep the sitemap canonical and factual without unsupported ranking hints | Google and Bing sitemap guidance | `/sitemap.xml` | 19/19 URLs returned `200`, canonical and indexable |
| Added opt-in IndexNow readiness using an environment key and manual canonical URL list | Notify participating engines only after a real public change; avoid per-request pings | IndexNow protocol and Bing guidance | `/indexnow-key.txt`, deployment workflow | Missing key safely returns `404`; no submission made without owner key |
| Removed redundant header-logo alt text while preserving the adjacent Bear Grid text alternative | Resolve the only Lighthouse accessibility issue without changing visuals | WCAG name/alt practice reflected in Lighthouse | Modern public pages | Accessibility increased from 99 to 100 |

## Crawler and indexation policy

- Search-discovery access is explicitly present for Googlebot, Bingbot, Applebot, OAI-SearchBot, PerplexityBot and the requested ClaudeBot.
- The wildcard rule continues the previous policy for unspecified crawlers.
- GPTBot, Google-Extended, CCBot and other training-related policy was not changed. Owner approval is still required.
- `/brand-assets-review` remains `noindex`, is omitted from the sitemap and is now excluded in robots.
- `/api/` remains excluded.
- No special AI schema or speculative markup was added.
- `llms.txt` was retained as a concise factual file; no claim is made that Google uses it.

## Local verification results

- `npm run lint`: passed
- `npm run build`: passed, 48 generated routes
- `npm run test`: 74/74 passed
- Sitemap: 19 unique canonical URLs; all returned `200`; no redirects or `noindex`
- Internal links: 44 unique local paths checked; no broken responses
- Images/resources: 203 local responses checked; no broken responses
- JSON-LD: every rendered payload parsed; stable Organization/provider references verified
- Crawler user agents: all required tested paths returned `200`
- Desktop/mobile QA: 390, 768, 1024 and 1440 widths passed without overflow, broken images or console errors in the Playwright suite

## Lighthouse

Local production build, Lighthouse 12.8.2:

| Route | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| `/` | 95 | 100 | 100 | 100 |
| `/expertise` | 97 | 100 | 100 | 100 |
| `/investors` | 96 | 100 | 100 | 100 |
| `/history` | 96 | 100 | 100 | 100 |
| `/contact` | 96 | 100 | 100 | 100 |

## Production verification

Initial implementation deployment: `dpl_EdFVxz9x68yKcqFkNMaSoBwPpayA` (`READY`)

- Major canonical routes returned `200` with one H1, unique title, matching canonical and Open Graph URL, absolute production Open Graph image and no Vercel-domain reference.
- `/privacy` and `/cookies` returned a single permanent redirect to their `200` canonical policy routes.
- All 19 sitemap URLs returned `200`, were self-canonical and indexable; no redirected, review or noindex route appeared.
- Googlebot, Bingbot, Applebot, OAI-SearchBot, PerplexityBot and ClaudeBot received `200` for `/`, `/expertise`, `/investors`, `/history`, `/robots.txt` and `/sitemap.xml`.
- Live internal-link and image scan rechecked 44 local paths and 203 image/resource responses with no failures.
- Browser QA found one H1, no broken images, no horizontal overflow and no Vercel references on the five main routes.
- `https://beargridsolutions.com/indexnow-key.txt` returned the intended `404` until the owner configures `INDEXNOW_KEY`; no IndexNow submission was falsely reported.

Production Lighthouse 12.8.2:

| Route | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| `/` | 98 | 100 | 100 | 100 |
| `/expertise` | 99 | 100 | 100 | 100 |
| `/investors` | 97 | 100 | 100 | 100 |
| `/history` | 97 | 100 | 100 | 100 |
| `/contact` | 98 | 100 | 100 | 100 |
