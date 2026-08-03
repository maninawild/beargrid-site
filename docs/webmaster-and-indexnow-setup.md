# Webmaster and IndexNow setup

Access date: 3 August 2026

These steps require verified owner access. Repository readiness does not mean that any external account is connected.

## Google Search Console

- Add and verify the domain property for `beargridsolutions.com`.
- Submit `https://beargridsolutions.com/sitemap.xml`.
- Inspect `/`, `/expertise`, `/investors`, `/history` and `/contact`.
- Confirm selected canonical URLs match the site canonicals.
- Review Page indexing, Core Web Vitals, HTTPS, Enhancements and Generative AI performance when available.
- Request indexing only for materially created or updated public pages.

## Bing Webmaster Tools and AI Performance

- Add and verify `https://beargridsolutions.com`, or import the verified Search Console property.
- Submit `https://beargridsolutions.com/sitemap.xml`.
- Run URL Inspection and Site Scan for the five main routes.
- Confirm Bingbot is not blocked in the Robots.txt Tester.
- Review Search Performance and the AI Performance public-preview report for cited pages, citations and grounding queries.

## IndexNow

IndexNow notifies participating engines about changed URLs; it does not notify Google and does not guarantee indexing.

1. Generate a unique 8–128 character key containing letters, numbers or hyphens.
2. Store it as the `INDEXNOW_KEY` production environment variable in Vercel. Do not commit it.
3. Redeploy, then confirm `https://beargridsolutions.com/indexnow-key.txt` returns the exact key as plain text. This verification token is intentionally public as required by IndexNow.
4. Submit only canonical URLs that were added, materially updated or removed:

   ```text
   npm run indexnow -- / /expertise /investors
   ```

5. Record the submitted URLs, response (`200` or initial `202`) and date.
6. Review IndexNow reporting in Bing Webmaster Tools. Do not run the script on every page request or routine build.

Implementation:

- Verification endpoint: `src/app/indexnow-key.txt/route.ts`
- Manual submission command: `scripts/submit-indexnow.mjs`
- API key source: `INDEXNOW_KEY`
- API endpoint: `https://api.indexnow.org/indexnow`
- Key location: `https://beargridsolutions.com/indexnow-key.txt`

## Referral measurement

- In the analytics system, report sessions where source is `chatgpt.com`.
- OpenAI adds `utm_source=chatgpt.com` to ChatGPT search referral URLs.
- Keep consent controls unchanged; do not activate analytics before consent.
- Do not claim referral visibility until analytics access and collection are verified.

## Corporate entity details requiring verification

Before adding any of the following to visible pages or structured data, the owner should verify the exact public values:

- legal company name, if different from Bear Grid;
- Dutch registration number;
- VAT number;
- public business address;
- public telephone number;
- official social profiles.
