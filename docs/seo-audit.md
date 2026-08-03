# Bear Grid technical SEO and AI-search audit

Access date: 3 August 2026

This is the durable audit index. Detailed baseline findings are in [seo-audit-before.md](./seo-audit-before.md), implemented and verified changes are in [seo-audit-after.md](./seo-audit-after.md), route intent is in [search-intent-map.md](./search-intent-map.md), and owner setup is in [webmaster-and-indexnow-setup.md](./webmaster-and-indexnow-setup.md).

## Official guidance reviewed

### Google

- [Search Essentials](https://developers.google.com/search/docs/essentials)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [SEO for developers](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [AI features and the website](https://developers.google.com/search/docs/appearance/ai-features)
- [Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Images](https://developers.google.com/search/docs/appearance/google-images)
- [Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks)

Applied interpretation: make canonical public pages crawlable, server-render the primary answer, use descriptive links, keep structured data consistent with visible content and avoid duplicate URLs. Google says no special AI schema, AI markup or machine-readable AI file is needed for AI Overviews or AI Mode.

### Microsoft Bing and IndexNow

- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Bing Webmaster Tools and sitemap workflow](https://blogs.bing.com/webmaster/June-2025/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility)
- [IndexNow in Bing Webmaster Tools](https://www.bing.com/webmasters/help/indexnow-0z209wby)
- [IndexNow protocol](https://www.indexnow.org/documentation)
- [Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)

Applied interpretation: keep sitemap URLs canonical and current, eliminate duplicate/redirected sitemap entries, allow Bingbot, and provide a manual deployment-time IndexNow path rather than pinging on requests.

### AI-search crawlers

- [OpenAI publishers and developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Anthropic crawler guidance](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)

Applied interpretation: allow OAI-SearchBot and PerplexityBot for search discovery, keep the requested ClaudeBot access, and test actual HTTP access rather than assuming robots permission is sufficient.

## Training-crawler policy

The pre-audit wildcard policy allowed GPTBot, Google-Extended, CCBot and other unspecified crawlers. This task does not change that policy. These agents are deliberately not presented as search-discovery agents in the dedicated crawler group. Any allow/block change for model-training crawlers requires explicit owner approval.

## Entity standard

Primary public entity name: **Bear Grid**

Canonical description: **Bear Grid is a Netherlands-based independent R&D consultancy founded in 2019.**

Historical `BearGrid Solutions` wording may remain only where it is part of preserved archive source context. No unverified address, registration, VAT, telephone or social-profile data is added.
