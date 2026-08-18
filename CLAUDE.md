# CLAUDE.md

Guidance for Claude Code working on BizGrants Consulting content: this
marketing site, and the EDM campaign copy that links into it.

## EDM copy rules (standing, apply to every campaign)

Ryan has corrected each of these at least once. Treat them as defaults, not
suggestions.

### Content

- **Do NOT include a "before you commit anything" / "do not sign a contract,
  raise a purchase order, or pay a consultant before your Letter of Offer"
  block.** Ryan does not want this in campaign emails, permanently. It belongs
  in a scoping call, not in cold outreach. Removed on request 17 Aug 2026.
- **No em-dashes or en-dashes anywhere.** Use commas, full stops, or `&middot;`.
- **Every figure hedged**: "up to", "indicatively up to". Never a bare promise.
- **Never imply BizGrants is a government agency** or speaks for one. It is a
  private consultancy and is not the approving authority.
- **Career Conversion Programmes are attributed to "SWDA".**
- **Never name programme partners** (ASME, SHRM, SBF, SNEF, WAF, AutomationSG,
  Lithan, LHUB, QED, AAMS). Say "a licensed job redesign consultant" or "an
  appointed consultancy panel".
- **Keep the compliance line**: "Indicative figures under prevailing WSG and
  EWTP terms (2026). All funding is subject to approval."
- **Single CTA**: `https://calendarsync.app/availability/bizgrants`. Confirmed
  working: 129 bookings on that slug, the bare form (no `www.`) is the one every
  email click uses. The website itself links the `www.` form; both reach it.
- **Cold outreach.** Never claim a prior relationship.

### The scheme distinction, which marketing copy keeps getting wrong

- **WDG(JR+) funds the job.** A project cost grant, indicatively up to 70% for
  SMEs, capped **per enterprise** at indicatively up to S$150,000. It does NOT
  pay wages.
- **CCP salary support funds the person.** Indicatively up to 90% of salary,
  capped at indicatively up to S$7,500 a month, for up to **three months** for an
  existing employee being reskilled, so indicatively up to about **S$22,500 per
  staff member**. Six months and ~S$45,000 is the **new hire** figure, not the
  existing-staff one.
- **SFEC offsets out-of-pocket cost.** Up to S$10,000 per **company**, one-off.
  It does not scale with headcount, so no SFEC sentence should ever end in "per
  staff", and spending it does not "unlock" salary support.
- Never state an SFEC expiry date. The site gives only the bare month
  "November", with no day or year, and warns on its own page that the dates have
  been revised more than once. Point readers at their own portal balance instead.

### HTML mechanics (each of these broke a live send)

- **Never write the closing body tag as literal text**, including inside CSS or
  HTML comments. The platform injects the mailbox signature, unsubscribe footer
  and tracking pixel at the LAST occurrence; a mention in a comment used to
  swallow all three silently. Fixed in bizgrants-crm `lib/html-inject.ts`, but
  the body still must contain exactly one.
- **Include the `body > div` rule** that constrains the platform-appended
  signature and unsubscribe footer to the 600px column. Without it they render
  full-bleed and flush left, outside the card.
- **No signature block in the body.** The sending mailbox's own signature is
  appended at send time. Use `{{sender_name}}` where the copy must name the
  sender, so it follows whoever actually sends.
- Tokens available: `{{first_name}}`, `{{company_name}}`, `{{sender_name}}`.

### Before shipping any campaign

Render the assembled email through the real send path (body, then mailbox
signature, then unsubscribe footer) for at least two senders including an empty
first name, screenshot desktop and mobile, and check: zero unresolved `{{ }}`,
exactly one closing body tag, no em-dashes, every link resolving to a real file
on disk.
