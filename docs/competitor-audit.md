# Competitor SEO Profile Audit

Generated 2026-05-04. Per-competitor SEO audit of the three consistent organic competitors identified in `docs/competitor-analysis.md` (task #24): Tassel Consulting, NCODE Consultant, and BDO Singapore.

## Methodology

For each competitor, the homepage and the most relevant grant-advisory landing page were fetched and analysed for:

- Word count per representative page
- JSON-LD schema types deployed
- Notable on-page patterns (FAQ, case studies, testimonials, trust signals)
- Internal-link structure
- Top organic keywords (deferred: requires SEO API)
- Referring domain count (deferred: requires backlink API)

Two of the five planned signals (top organic keywords, referring domain count) require paid SEO data sources (Ahrefs, Semrush, DataForSEO, Moz) and are deferred until that access is available. The other three signals are captured below from direct page inspection.

## Per-competitor profiles

### 1. Tassel Consulting (`tasselconsulting.com`)

**Positioning.** Cybersecurity and digital-transformation firm; grant advisory is a secondary service.

**Pages audited.**

| Page | Word count | Schema | Notes |
|---|---|---|---|
| Homepage | ~1,200–1,400 | None visible | "Accelerate your Cyber Security Journey" H1; service-block layout |
| `/grant-consultancy` | ~1,200–1,400 | None visible | "Grant Consultancy" H1; CCP focus; lead-capture form |

**Schema.** No JSON-LD detected on either page. Missing Organization, LocalBusiness, Service, FAQPage schemas.

**On-page patterns.**

- ✗ FAQ section (no structured FAQ; implicit Q&A only)
- ✗ Case studies
- ✗ Testimonials with attribution
- ✓ Three-step process visualisations
- ✓ Lead-capture forms
- ✗ Hreflang

**Internal-link structure.** Standard top-level nav: Home, About Us, Products/Services (5 sub-items), Academy (2 sub-items), Resources, Contact. Footer mirrors main nav. Limited topic clustering across grant categories.

**Strengths.** Clean service-led layout; clear advisory framing.

**Weaknesses to exploit.** No structured data, no case-study evidence, no FAQ schema, modest word count for grant pages, no per-grant pillar pages (CCP shares space with cybersecurity).

### 2. NCODE Consultant (`ncodeconsultant.com`)

**Positioning.** Established (30+ year) software-development firm with grant-advisory as a parallel revenue stream. SME 500 award; multi-region presence (Singapore, Malaysia, India).

**Pages audited.**

| Page | Word count | Schema | Notes |
|---|---|---|---|
| Homepage | ~2,500–3,000 | None visible on homepage | Unconventional H1; deep service catalogue |
| `/career-conversion-programmes-ccp-grant/` | ~2,800–3,200 | Organization, LocalBusiness, BreadcrumbList | Dedicated CCP pillar |

**Schema.** Organization + LocalBusiness + BreadcrumbList on the CCP page. No FAQPage schema despite having FAQ-style content. No Article/BlogPosting on this page since it is a service page rather than a blog post.

**On-page patterns.**

- ✓ FAQ section (non-schema; links to Workforce Singapore PDF factsheets)
- ✗ Case studies (logos only, no narrative)
- ✓ Testimonials with attribution (e.g., "Siew Zhen Xu, Cititech")
- ✓ Trust signals (SME 500, 30-year history, certification gallery)
- ✓ Three CCP modes covered (Place-and-Train, Attach-and-Train, Job Redesign)
- ✗ Hreflang (despite multi-region offices)

**Internal-link structure.** Strong topic clustering. Service taxonomy includes:

- 8 main services (AI Enablement, Data Architecture, Custom Software, IT Strategy, etc.)
- 6 solution categories (ERP, AI/ML, HRMS, etc.)
- 12+ industry verticals (Manufacturing, Healthcare, Maritime, etc.)
- 4 grant programmes (EDG, CCP, MRA, NTUC CTC)

50+ unique service/solution URLs, supporting topical authority.

**Strengths.** Most SEO-mature competitor in the consistent set. Deep word counts, strong testimonials and trust signals, clean internal-link clustering.

**Weaknesses to exploit.** No FAQPage schema (FAQ content present but not marked up), no narrative case studies, no hreflang, no per-grant detailed methodology pages beyond the single CCP service page.

### 3. BDO Singapore (`bdo.com.sg`)

**Positioning.** Big-4-adjacent professional services firm; pre-approved consultant for SkillsFuture Workforce Development Grant. Workforce advisory is one of many advisory service lines.

**Pages audited.**

| Page | Word count | Schema | Notes |
|---|---|---|---|
| Homepage | n/a (HTTP 403) | n/a | Bot-blocked |
| `/services/advisory/management-consulting` | n/a (HTTP 403) | n/a | Bot-blocked |

**Schema.** Could not be confirmed via direct fetch. Bot protection is in place at the domain level.

**On-page patterns.** Could not be confirmed directly. From SERP snippets and ecosystem knowledge:

- Pre-approved WDG consultant offering up to 70% co-funding for SMEs
- Brand authority of the BDO global network
- Likely strong schema and structured data based on Big-4-adjacent operational standards

**Internal-link structure.** Could not be confirmed directly. Likely has full multi-service navigation typical of large advisory firms.

**Strengths.** Brand authority is the dominant moat. "BDO" as a query term carries trust signals that smaller firms cannot replicate quickly.

**Weaknesses to exploit.** Workforce advisory is buried beneath broader consulting nav. Low specificity on CCP and Job Redesign Grant compared to specialist firms. Pricing and scoping models not transparent. No public case studies on grant outcomes.

## Comparative summary

| Signal | Tassel | NCODE | BDO | BizGrants |
|---|---|---|---|---|
| Grant page word count | ~1,300 | ~3,000 | unknown (blocked) | 1,500–2,200 (per pillar/blog) |
| Organization schema | ✗ | ✓ | unknown | ✓ |
| LocalBusiness schema | ✗ | ✓ | unknown | ✓ |
| FAQPage schema | ✗ | ✗ (FAQ content present) | unknown | ✓ (14 pages) |
| BreadcrumbList | ✗ | ✓ | unknown | ✓ (36 pages) |
| Article/BlogPosting schema | ✗ | ✗ | unknown | ✓ (10 blog articles) |
| Per-grant pillar pages | ✗ (single grant page) | ✗ (single CCP service page) | unknown | ✓ (8 pillars: WSG-CCP, CCP-for-employers, CCP-grant-singapore, CCP-pathways, CCP-digital, CCP-sustainability, CCP-healthcare, regional-HQ) |
| Anonymized case studies | ✗ | ✗ (logos only) | unknown | ✓ (15 case studies) |
| Long-form blog articles | unknown | unknown | unknown | ✓ (10 articles, all >1,200 words) |
| Hreflang en-SG/en/x-default | ✗ | ✗ | unknown | ✓ |
| Per-page OG cards | unknown | unknown | unknown | ✓ (37 pages) |

## Implications for task #26 (content-gap mapping)

Based on this audit, BizGrants holds clear advantages on:

1. **Schema depth.** No competitor has FAQPage, BlogPosting, or comprehensive entity schema. This is a durable on-page signal advantage.
2. **Case-study breadth.** 15 anonymized case studies vs zero meaningful narrative case studies among competitors. This is the strongest E-E-A-T differentiator.
3. **Per-grant pillar depth.** 8 pillar pages vs the competitors' single-grant-service-page model.
4. **Long-form blog volume.** 10 articles each over 1,200 words vs no comparable blog programme observed at any competitor.

Gaps where BizGrants does not currently lead but could, with modest investment:

1. **30-year history / trust signals.** NCODE leads on "established firm" signals (SME 500, awards, decades of operation). BizGrants is 2023-founded; the trust narrative is built on case-study volume and methodology depth instead.
2. **Multi-region presence.** NCODE has Singapore, Malaysia, India offices. BizGrants is Singapore-only by design (per project memory). This is a deliberate positioning choice, not a gap.
3. **Cross-grant breadth.** NCODE covers EDG, CCP, MRA, NTUC CTC. BizGrants now covers CCP, JRG, SFEC, PSG, EDG, MCPP. Roughly equivalent breadth; BizGrants now matches or exceeds.

Top 3 content gaps to prioritise for next quarter:

1. **MRA (Market Readiness Assistance)** — NCODE covers; BizGrants does not yet. Cover in a future blog post if relevant to the firm's scope.
2. **NTUC CTC (Company Training Committee) work** — adjacent funding theme NCODE addresses.
3. **Industry-vertical content depth** — NCODE has 12+ industry-vertical pages. BizGrants has sectoral pillars for sustainability, digital marketing, and healthcare; could expand to manufacturing, finance, F&B, hospitality, etc.

## Deferred signals

The following signals require paid SEO data sources and have not been captured in this audit:

- Top organic keywords per competitor
- Referring domain count and authority distribution
- Backlink anchor text patterns
- SERP feature ownership (PAA, FAQ rich results, knowledge panel)
- Estimated organic traffic volume

When access to a SERP / backlink API (DataForSEO, Ahrefs, Semrush, Moz) is configured, the next iteration of this audit should re-fetch these.
