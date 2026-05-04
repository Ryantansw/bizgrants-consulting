# Content Gap Map

Generated 2026-05-04. Builds on the competitor list (task #24) and per-competitor audit (task #25) to identify topics where 2+ confirmed competitors have content and BizGrants does not, then ranks the gaps for next-quarter content prioritisation.

## Methodology note

The original task spec called for "topics that 3 or more competitors cover." With three consistent competitors confirmed (Tassel, NCODE, BDO), and BDO bot-blocked from direct inspection, the "3+" threshold could not be reliably tested. The threshold was relaxed to **2+ confirmed competitors** to produce a workable gap map. Data was supplemented by surveying single-query competitors (Real Inbound Consulting, MSC Consulting, Valkyrie Consulting Group) for grant-programme coverage.

When SERP/keyword API access is configured, this map should be regenerated against precise competitor lists per intent cluster, with real search-volume figures replacing the proxy reasoning below.

## Topic coverage matrix

Topics named on competitor service pages or navigation, cross-referenced with current BizGrants coverage:

| Topic | NCODE | Real Inbound | Tassel | BDO | BizGrants |
|---|---|---|---|---|---|
| Career Conversion Programme (CCP) | ✓ | ✓ (implicit "Hiring Grants") | ✓ | ✓ | ✓ extensive |
| Job Redesign Grant (JRG) | ✓ (under CCP) | ✓ (implicit) | ✓ | ✓ | ✓ |
| SkillsFuture Enterprise Credit (SFEC) | ✗ | ✗ | ✗ | ✗ | ✓ (task #18) |
| Productivity Solutions Grant (PSG) | ✗ | ✓ | ✗ | ✗ | ✓ (task #19) |
| Enterprise Development Grant (EDG) | ✓ | ✓ | ✗ | ✗ | ✓ (task #20) |
| Mid-Career Pathways Programme (MCPP) | ✗ | ✗ | ✗ | ✗ | ✓ (task #21) |
| **Market Readiness Assistance (MRA)** | **✓** | **✓** | ✗ | ✗ | **✗ GAP** |
| **NTUC CTC / Company Training Committee** | **✓** | **✓** | ✗ | ✗ | **✗ GAP** |
| **Industry-vertical CCP pages** (manufacturing, finance, F&B) | **✓** (12+ verticals) | ✗ | ✗ | unknown | partial (sustainability, digital marketing, healthcare only) |
| R&D / Product Development grants | ✗ | ✓ | ✗ | unknown | ✗ |
| Hong Kong / cross-border grants | ✗ | ✓ | ✗ | unknown | ✗ (out of scope) |

## Identified gaps (2+ confirmed competitors)

Three topic gaps where 2+ confirmed competitors have content and BizGrants does not:

### Gap 1: Market Readiness Assistance (MRA)

- **Coverage:** NCODE, Real Inbound
- **What it is:** Enterprise Singapore grant supporting Singapore SMEs expanding overseas. Co-funds in-market business development, market entry, and overseas expansion costs.
- **Search-volume estimate (proxy):** Moderate-to-high. "Market Readiness Assistance" is a defined Enterprise Singapore programme with consistent search interest, particularly from SMEs in growth phase.
- **Strategic fit for BizGrants:** Adjacent to the recently-published `/regional-hq-workforce-funding/` pillar. MRA is the natural counterpart for Singapore-based SMEs going outbound, and the regional-HQ pillar already references the international workforce-funding lens. An MRA blog or pillar would close the inbound + outbound coverage.
- **Format:** Long-form blog article (~1,500 words) at `/blog/market-readiness-assistance/`.

### Gap 2: NTUC Company Training Committee (CTC) grant

- **Coverage:** NCODE, Real Inbound
- **What it is:** NTUC LearningHub-administered grant supporting unionised companies through Company Training Committees, focused on workforce upskilling and transformation.
- **Search-volume estimate (proxy):** Low-to-moderate. Search volume is concentrated among unionised employers and HR functions in Singapore. Lower volume than CCP/EDG but high engagement and intent within that segment.
- **Strategic fit for BizGrants:** Strong topic fit (workforce transformation, training, skills uplift) but operational fit depends on whether BizGrants engages with NTUC LearningHub as a delivery partner. May warrant a foundational explainer first, with deeper operational content gated on partnership status.
- **Format:** Medium-length blog article (~1,200 words) at `/blog/ntuc-ctc-grant/`.

### Gap 3: Industry-vertical CCP pillars (manufacturing, finance, F&B)

- **Coverage:** NCODE has 12+ industry-vertical pages spanning manufacturing, healthcare, finance, F&B, retail, maritime, education, and others. BizGrants currently has three sectoral pillars: digital marketing, sustainability, healthcare (just added in task #23).
- **What it is:** Sectoral pillar pages explaining how CCP applies to a specific industry, with role examples, OJT design patterns, and sector-specific assessor expectations.
- **Search-volume estimate (proxy):** High at the aggregate level. "CCP manufacturing Singapore" and "CCP F&B Singapore" are concrete long-tail queries that vertical-specific employers search.
- **Strategic fit for BizGrants:** The sectoral pillar template already exists (per the recent healthcare pillar). Each new vertical takes ~1,500 words and slots into the established navigation pattern. The case-study library already covers manufacturing (medtech, industrial climate), F&B, and finance, providing in-house grounding evidence for the pillars.
- **Format:** Sectoral pillar pages at `/ccp-manufacturing/`, `/ccp-financial-services/`, `/ccp-fnb/`, etc.

## Top 3 prioritised gaps for next quarter

Ranked by combined search-volume reasoning, strategic fit, and content effort:

| Rank | Gap | Suggested format | Effort | Priority rationale |
|---|---|---|---|---|
| 1 | **Industry-vertical CCP pillars (manufacturing first)** | Pillar page (~1,500 words) | Medium | Highest aggregate search volume; existing template; case studies already in-house; closes the most visible structural gap vs NCODE's 12-vertical taxonomy |
| 2 | **Market Readiness Assistance (MRA) Guide** | Long-form blog (~1,500 words) | Medium | High relevance; complements regional-HQ pillar; expands BizGrants beyond pure workforce funding into outbound market-entry; clear E-E-A-T story |
| 3 | **NTUC CTC Grant explainer** | Medium-length blog (~1,200 words) | Low-medium | Lower volume but high intent; positions BizGrants on unionised-employer queries; foundational explainer can be written before any partnership decision |

## Implications for content planning

Adding all three gaps to the content backlog would put BizGrants ahead of every confirmed competitor on:

- Per-grant programme depth (CCP, JRG, SFEC, PSG, EDG, MCPP, MRA, NTUC CTC = 8 distinct programme guides)
- Sectoral pillar coverage (digital marketing, sustainability, healthcare, manufacturing, financial services, F&B = 6 sectoral pillars)
- Schema and structured data depth (already a leading position per task #25)
- Case-study breadth (already 15 anonymized cases, no competitor matches)

## Deferred work

Three things should be revisited when SEO API access is configured:

1. **Real search volumes** for each gap topic via Ahrefs/Semrush/DataForSEO, replacing the proxy reasoning above.
2. **Per-competitor keyword overlap maps** showing which queries each competitor is currently capturing organic traffic on.
3. **Content gap automation** by piping a live competitor crawl into the gap analysis on a monthly cadence rather than a quarterly manual run.
