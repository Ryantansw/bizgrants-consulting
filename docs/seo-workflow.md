# SEO Automation Workflow

A 30-task workflow for the ongoing SEO maintenance of [bizgrants.consulting](https://bizgrants.consulting), a static HTML site hosted on GitHub Pages.

**Last run:** 2026-05-04 (task 3)

Tasks are atomic: each one has a single, completable definition of done. Run through them in order on a quarterly cadence, or pick individual tasks ad-hoc when a specific area needs attention.

## How to use this file

- Tick a box once the task's definition of done is met. Leave a brief note (date, finding, fix) under the task if useful.
- Each task is scoped so it can be completed in a single sitting. Anything larger should be split.
- For audit/verification tasks, "done" means a passing report; for fix tasks, "done" means a commit on `main`.

---

## Full site audit

- [x] **1. Run the full SEO audit.** Invoke `/seo audit https://bizgrants.consulting`. Capture the SEO Health Score and the per-category breakdown (Technical, Content, On-Page, Schema, Performance, AI Search, Images). Compare against the previous audit run. _(2026-05-04: SEO Health Score **91/100**, up from 88 on 2026-04-28. Per category: Technical 95, Content 91, On-Page 91, Schema 96, Performance 80 (no measurement infra), AI Search/GEO 93, Images 90. Progression: 59 → 79 → 88 → 91.)_
- [x] **2. Verify all sitemap URLs return HTTP 200.** Crawl every URL listed in `sitemap.xml`. Report any 4xx/5xx responses or unexpected redirect chains. Fix or remove broken entries. _(2026-05-04: crawled all 37 URLs in sitemap.xml; 0 problems. Every URL returned HTTP 200 with no redirects.)_
- [x] **3. Audit indexability directives.** Walk every page; confirm `<meta name="robots">` has `index,follow` (no accidental `noindex`), and confirm `robots.txt` allows the major search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot). _(2026-05-04: all production `*/index.html` pages have `index,follow`. Intentional `noindex` on redirect stubs (`<slug>.html`), `/404.html`, `/thank-you/index.html`, and `/jdreview/` utility pages, which is correct behavior. `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot. `/jdreview/` disallowed intentionally. Sitemap reference present.)_

## Metadata optimization

- [ ] **4. Audit `<title>` tags sitewide.** Each title should be under 60 characters, include the primary keyword for the page, and follow the convention `<Page descriptor> | BizGrants` or `... | BizGrants Consulting`. Flag and rewrite any that are over length, generic, or missing brand suffix.
- [ ] **5. Audit `<meta name="description">` sitewide.** Each description should be 140 to 160 characters, contain at least one target keyword, and end with a soft call to action. Flag any that are duplicated across pages.
- [ ] **6. Verify Open Graph and Twitter Card metadata on every page.** Each page must have: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` (set to `en_SG`), `og:site_name`, plus the equivalent `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. Fill any gaps.
- [ ] **7. Confirm each page uses its own per-page OG card.** Every page should reference `/images/og/<slug>.png` rather than the homepage logo. Generate any missing card via the Civic Brief OG generator and wire the meta tag.

## Schema markup

- [ ] **8. Validate Organization JSON-LD on every page that defines it.** Required fields: `@id`, `name`, `legalName: BizGrants Consulting Pte. Ltd.`, `url`, `logo`, `description`, `foundingDate`, `knowsAbout`, `knowsLanguage`, `sameAs`. Run all blocks through Schema.org validator and Google Rich Results Test.
- [ ] **9. Validate LocalBusiness / ProfessionalService JSON-LD.** Required fields: `@id`, `name`, `legalName`, `address`, `geo`, `telephone`, `email`, `openingHoursSpecification`, `contactPoint`, `hasMap` (canonical Google Business Profile URL), `paymentAccepted`, `currenciesAccepted: SGD`, `priceRange`, `areaServed`. Confirm consistency across the 12 pages that define the entity.
- [ ] **10. Validate BreadcrumbList JSON-LD on every subdirectory page.** Confirm `position` numbering is correct, `item` URLs are absolute HTTPS URLs, and the breadcrumb structure matches the visible nav breadcrumb on the page.
- [ ] **11. Validate FAQPage JSON-LD against visible prose.** For every blog article and pillar guide that has visible Q&A, confirm the schema's `Question.name` and `Answer.text` exactly match the rendered prose. Resync any drift.
- [ ] **12. Validate BlogPosting and Article JSON-LD.** On every blog article and case study, confirm `headline` is under 110 characters, `wordCount` matches the actual rendered word count, `datePublished` and `dateModified` are valid ISO 8601 dates, and `image` references a real per-page asset.

## Content optimization for existing pages

- [ ] **13. Audit heading hierarchy on every page.** Confirm exactly one `<h1>` per page and a logical `<h2>` / `<h3>` structure with no skipped levels. Fix any pages that wrap multiple H1s or rely on H3 directly under H1.
- [ ] **14. Audit `<img alt>` text sitewide.** Every `<img>` should have descriptive alt text. Replace any empty or missing alts. Decorative-only images should use `alt=""` explicitly.
- [ ] **15. Sweep for em-dashes sitewide.** Replace any `—` (U+2014) or `&mdash;` with commas, colons, or periods per the project style rule. En-dashes for ranges (e.g. `2023&ndash;2026`) are fine.
- [ ] **16. Audit internal-link density on every blog article.** Each article body must contain at least one inline link to a pillar guide and at least one to a relevant case study. Add missing links where natural.
- [ ] **17. Verify blog article word counts.** Every article body should be 1,200 words or more. Where the rendered count differs from the schema-asserted `wordCount`, recount and resync the schema.

## New content targeting SME grants keywords (Singapore and Southeast Asia)

- [ ] **18. Publish "SkillsFuture Enterprise Credit (SFEC) Guide for Singapore SMEs".** Long-form blog article (≥ 1,500 words) targeting the keyword *SkillsFuture Enterprise Credit*. Cover eligibility, $10,000 credit mechanic, qualifying activities, claim process. Include FAQ section, BlogPosting + BreadcrumbList + FAQPage schema, per-page OG card.
- [ ] **19. Publish "Productivity Solutions Grant (PSG) for Singapore SMEs".** Long-form blog article (≥ 1,500 words) targeting *Productivity Solutions Grant Singapore*. Cover supported solution categories, IMDA-pre-approved vendors, application flow. Same schema set as task 18.
- [ ] **20. Publish "Enterprise Development Grant (EDG) Application Guide".** Long-form blog article (≥ 1,500 words) targeting *Enterprise Development Grant Singapore*. Cover the three pillars (Core Capabilities, Innovation, Market Access), funding caps, project scoping. Same schema set.
- [ ] **21. Publish "Mid-Career Pathways Programme (MCPP) vs CCP for Singapore Employers".** Comparison-style blog article (≥ 1,200 words) targeting *Mid-Career Pathways Programme employer*. Position MCPP for shorter attachments, CCP for longer redesigned roles. Internal-link from the existing CCP hiring grants article.
- [ ] **22. Publish a regional pillar: "Workforce Funding for Southeast Asian Companies Expanding into Singapore".** Pillar page (≥ 1,500 words) targeting *Singapore regional HQ workforce funding*. Cover CCP, Job Redesign Grant, and SkillsFuture options for regional HQ formation. Place at `/regional-hq-workforce-funding/`.
- [ ] **23. Publish a sectoral pillar: "CCP for Healthcare and Clinical Roles in Singapore".** Pillar page (≥ 1,200 words) targeting *CCP healthcare Singapore*. Cover OJT design for clinical, allied health, and healthcare admin roles. Place at `/ccp-healthcare/`. Cross-link from the existing pillar grid.

## Competitor analysis

- [ ] **24. Identify the top 5 organic competitors.** Run SERP analysis for *CCP advisory Singapore*, *Career Conversion Programme consultant Singapore*, *Job Redesign Grant consultant*, and *Workforce Singapore advisory*. Document the consistent competitors that rank in the top 10 for two or more of these queries.
- [ ] **25. Audit each competitor's SEO profile.** For each of the 5 competitors, document: average word count per page, schema types in use, top organic keywords, referring domain count, and notable on-page patterns.
- [ ] **26. Build a content-gap map.** Identify topics that 3 or more competitors cover but BizGrants does not, ranked by combined search volume. Prioritise the top 3 gaps for the next quarter's new content.

## Sitemap

- [ ] **27. Verify `sitemap.xml` is complete and current.** Confirm every indexable page is listed, all `<lastmod>` dates reflect actual change dates, and `robots.txt` includes a `Sitemap:` directive pointing at the canonical sitemap URL.

## Broken-link check

- [ ] **28. Run a sitewide broken-link crawl.** Use a crawler to scan all internal and outbound links across the site. Fix any internal 404s. For outbound 404s, decide per-link whether to remove, replace, or wayback. Re-test until clean.

## Core Web Vitals

- [ ] **29. Connect Google Search Console and PageSpeed Insights API.** Verify GSC ownership of `bizgrants.consulting`. Pull CrUX field data for LCP, INP, and CLS across the home, pillar, blog post, and case study templates. Record baseline metrics.
- [ ] **30. Resolve any CWV opportunities flagged by PageSpeed Insights.** Walk through the Opportunities and Diagnostics list for each template. Ship fixes (image dimensions, lazy-loading, render-blocking resources, font preloads, etc.) and document the before/after CrUX deltas after the next 28-day window closes.

---

## Notes for whoever picks this up next

- **GitHub Pages public exposure:** This file lives at `docs/seo-workflow.md` in the repo root and will be publicly accessible at `https://bizgrants.consulting/docs/seo-workflow.md` unless the repo's GitHub Pages settings exclude it. If that's not desired, move to a `_internal/` directory or add a `.gitignore` rule.
- **Style rules in effect** (project memory): no em-dashes, no Ryan Tan personal references, no UEN display. New content drafted under tasks 18 to 23 must follow these rules.
- **Design system in effect:** Civic Brief editorial. Bricolage Grotesque + Hanken Grotesk + JetBrains Mono. OKLCH tokens. Hairline rules. New pillar pages should match the existing pillar template at `/wsg-career-conversion-programme/`.
- **Schema canonical reference:** the homepage `index.html` is the source of truth for Organization and LocalBusiness JSON-LD. New pages that use `@id` references should also define the entities locally so cross-page references resolve.
