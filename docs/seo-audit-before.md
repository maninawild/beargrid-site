# Bear Grid SEO, AI-search and crawler audit — before

Access date: 3 August 2026  
Production reviewed: <https://beargridsolutions.com>  
Production commit reviewed: `e40878a`

## Scope and method

The audit compared the Next.js source with server-rendered production HTML, response headers, crawler-user-agent responses, sitemap entries, robots rules, structured data, internal links, images, metadata and responsive test coverage.

Current official guidance was reviewed before code changes. Recommendations below use primary sources only:

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google developer SEO guide](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Google generative-AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google structured-data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google crawlable links guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google image guidance](https://developers.google.com/search/docs/appearance/google-images)
- [Google sitelinks guidance](https://developers.google.com/search/docs/appearance/sitelinks)
- [Bing Webmaster guidance and tools](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Bing IndexNow guidance](https://www.bing.com/webmasters/help/indexnow-0z209wby)
- [Bing AI Performance announcement](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [OpenAI publishers and developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Anthropic crawler guidance](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)

Google explicitly says that normal SEO fundamentals apply to AI features and that no special AI schema, AI markup or machine-readable AI file is required. This audit therefore does not recommend speculative schema or an `llms.txt` expansion for Google.

## Baseline production findings

- All canonical public sitemap URLs returned `200`.
- Every sitemap URL exposed a matching production-domain canonical.
- Googlebot, Bingbot, Applebot, OAI-SearchBot, PerplexityBot and ClaudeBot received `200` for the tested public routes, robots and sitemap.
- The apex HTTP URL and the `www` host redirected once to the HTTPS non-`www` production origin.
- Trailing-slash variants redirected once to the canonical non-trailing-slash URL.
- Query parameters on indexable routes retained the clean route canonical.
- No rendered major page, canonical, Open Graph URL or sitemap entry referenced the Vercel domain.
- Major pages had one H1 and server-rendered primary text.
- The internal brand-review route was `noindex` and absent from the sitemap.

## Ranked issues

### Critical

1. **Visible positioning and declared entity/service data diverge.**  
   The global description and `/expertise` metadata describe Bear Grid as an independent R&D consultancy offering technology assessment, R&D strategy, venture validation and innovation partnerships. The homepage H1 and visible service grid instead lead with generic engineering/business problem solving and do not define those four services. This weakens entity understanding and makes extracted answers less reliable.

2. **Structured service data is partly disconnected and not consistently identified.**  
   Homepage service nodes create repeated inline Organization objects instead of referring to the stable Organization `@id`. The ProfessionalService node is modelled as a provider-backed service even though `ProfessionalService` represents a business type. Service nodes lack stable IDs.

### High

3. **The investor page does not directly answer the assessment intent.**  
   `/investors` mainly describes selected venture introductions. It does not clearly state when Bear Grid provides independent technology or venture assessment, what is examined, or what the investor receives.

4. **The homepage answer is not direct enough.**  
   The H1 does not identify Bear Grid or its primary category. The Netherlands base is not stated near the top.

5. **Robots rules do not explicitly exclude the internal review route.**  
   `/brand-assets-review` is correctly `noindex`, but robots currently allows crawling it. The API is blocked.

6. **Sitemap annotations are overly generic.**  
   All current-company URLs use the same manually entered `lastModified`, all archive URLs use another shared date, and ranking-oriented `priority`/`changeFrequency` values add no reliable signal. Dates should be maintained as content dates and the non-essential ranking fields removed.

### Medium

7. **Entity wording varies in archived metadata.**  
   Historical data uses `BearGrid Solutions` and `Bear Grid Solutions`. Historical titles may remain in preserved archive content, but current `siteName`, publisher and provider values should consistently use `Bear Grid`.

8. **Requested policy aliases return 404.**  
   `/privacy` and `/cookies` are not canonical routes; the canonical pages are `/privacy-policy` and `/cookie-policy`. Permanent one-hop aliases would recover likely user/bookmark variants without creating duplicates.

9. **Social image selection is generic.**  
   Major pages currently use one existing approved `/og.png`. Page-specific approved technical assets exist only in the review asset set and have not been activated. They will not be activated in this audit without explicit owner approval.

10. **Verified corporate details are incomplete.**  
    The site has no verified public registration number, VAT number, street address, telephone number or official social profiles. No values will be invented. Owner verification is required before adding them.

## Exact implementation scope

- `src/app/layout.tsx`: connected Organization/WebSite graph and stable image identity.
- `src/app/page.tsx`: metadata alignment and connected Service structured data.
- `src/components/CompanyPages.tsx`: direct homepage answer.
- `src/app/expertise/page.tsx`: concise visible definitions of the four declared R&D services.
- `src/app/investors/page.tsx`: directly answer investor assessment intent and define output.
- `src/app/history/page.tsx`: consistent entity statement near the top.
- `src/app/robots.ts`: intentionally expose search crawlers and exclude internal/API paths without changing training-crawler policy.
- `src/app/sitemap.ts`: canonical-only entries and maintained content dates without ranking fields.
- `src/app/[slug]/page.tsx`: current public entity naming in metadata.
- `next.config.ts`: one-hop policy aliases.
- `tests/site-parity.spec.ts`: assertions for answerability, crawler policy, sitemap and structured-data identity.
- `docs/search-intent-map.md`: distinct route intent map.
- `docs/seo-audit-after.md`: completed-change and verification record.

## Out of scope without owner access or approval

- Changing GPTBot, Google-Extended, CCBot or other training-specific crawler policy.
- Activating the reviewed brand/social asset set.
- Claiming Google Search Console, Bing Webmaster Tools, Bing AI Performance or IndexNow account connection.
- Adding unverified corporate identity details.
- Creating generic articles or a large Insights section.
