# GateVerse CRM review (7 November 2026)

The review was read-only, run on a copy of the source; nothing in the project was changed.

On that copy:
- `vitest`: 100 tests passed, 2 skipped.
- `tsc --noEmit`: clean.

**Verdict:** the engineering is solid: auth, CSP, server-side role checks, transactions, i18n, tests. The real gaps are business fit:
- Prices don't match today's packages.
- The old domain is still in client messages.
- Outbound prospecting isn't supported.
- Leads only arrive by copy-paste.
- Nothing reminds you unless the app is open.

## What exists

| Area | What's there |
|---|---|
| Stack | Next.js 15, React 19, Drizzle. Postgres on Neon in production, PGlite locally. Deployed on Vercel (fra1). Migrations run on `vercel-build`. |
| Auth | scrypt passwords and DB sessions (token stored hashed, 30 days). Login rate limit of 5 per email and 20 per IP per 15 min. Roles: admin, sales, engineer; engineers can't see money. Every action calls `requireUser`, and `dealForUser` checks ownership. |
| Security headers | Nonce-based CSP, frame-ancestors none, HSTS, noindex. CSV-injection guard on exports. |
| Entities | `users`, `sessions`, `login_attempts`, `options` (types/sources/districts with score points), `packages`, `clients` (unique phone/email, opt-out, stats token), `properties`, `deals` (9 stages), `activities`, `payments`, `subscriptions` (hosting), `tours`, `tour_stats` (written by gateverse.net), `message_templates`, `campaigns`, `campaign_recipients`. |
| Screens | Today, Pipeline (kanban), Clients (filters, Excel export/import with dedupe), Deal page, Calendar (shoots), Renewals (MRR/churn), Payments, Reports + CSV, Playbook, Campaigns (WhatsApp queue via wa.me, SMTP email batches), Settings, Users, Account. |
| Deal page | Touch log with a required next step, objection replies, WhatsApp quote, discount cap of 10% for sales, shoot booking, delivery, NPS, referral, lost reasons. |
| Integrations | wa.me links only (no API). SMTP email. Tour buttons and stats shared with newbranding through the same DB, plus a secret client stats link. |
| i18n | Arabic/English UI. Client-facing texts are always Arabic. |

## Weaknesses

| Sev | Area | Evidence | Fix |
|---|---|---|---|
| **High** | Pricing out of sync | `lib/pricing.ts:7-12` uses 20 EGP/m², minimum 2,000, hosting 200/month per 200 m². `drizzle/0009_segment_packages.sql` has October's per-m² segments. The live site sells 950 / 1,950 / 2,950 / 4,950 by area with 1–4 free hosting months (`newbranding/lib/packages.ts:29-63`). | Add the 4 area packages as the default. Model "N free months then 100/month or 1,000/year" on `packages` and `subscriptions`. Update `segments.test.ts` so it compares against `newbranding/lib/packages.ts`. |
| **High** | Wrong domain in client messages | `lib/whatsapp.ts:32` sends `massah.tours/#portfolio` in the first reply. `lib/constants.ts:4` defaults to massah.tours. Also `lib/email.ts:45`, `app/(app)/playbook/page.tsx:28`, `scripts/seed.ts:149,245`. | Default to gateverse.net and make it required in env. Grep test for "massah". |
| **High** | Prospect lists can't be imported | `lib/phone.ts:18` rejects landlines (Alexandria 03…). The import accepts `.xlsx` only (`clients/import/ImportClient.tsx:62`). The Google Maps list (81 places, 20 landlines) won't load. | Store landlines in a separate `landline` field and allow `tel:` for them. Accept CSV, plus a header map for the leads CSV (name, phone, sector, area, Maps link, rating). |
| **High** | Outbound mixed with inbound | All clients enter deals at `new` (`db/schema.ts:29`). The Today page's 5-minute first-reply timer (`app/(app)/page.tsx:146`) would flag cold prospects as late inbound leads. | Add `lifecycle = prospect` (or a `prospect` stage) with its own cadence (day 0/2/7/14) and keep it off the reply timer. |
| **High** | Nothing alerts you | There are no cron jobs (`vercel.json`), no digest and no push. Follow-ups, renewals and late deliveries only show when someone opens the app. | Add a Vercel Cron daily 9 am digest (email, or a WhatsApp-to-self link) covering due follow-ups, renewals in the next 7 days and shoots tomorrow. Optional web push. |
| Medium | Leads come in by copy-paste | The calculator message is pasted by hand (`lib/calculator-message.ts`). There's no intake API and no UTM/fbclid/ttclid stored (grep finds nothing). | Add `POST /api/leads` (HMAC-signed) from the gateverse.net calculator/contact form. Store `utm_source/medium/campaign`, `fbclid`, `ttclid` and the landing page on the client and deal. |
| Medium | Tour stats can be inflated | `newbranding/app/api/track/route.ts:51` keys its rate limit on the first `x-forwarded-for` value, which is spoofable, and the limiter is in memory per instance (:14). Every page load counts as a view, with no per-visitor dedupe. These numbers are shown to clients and used in ads ("109 views"). | Use `x-real-ip`. Dedupe views with a daily hashed visitor cookie. Exclude bots by UA. Optionally exclude the owner's own views. |
| Medium | Kanban on mobile | `pipeline/Board.tsx:79-80` uses HTML5 `draggable`, which doesn't work on touch screens. | Add a stage dropdown or quick "next stage" buttons on cards, or use pointer events. |
| Medium | No 2FA | Admins see all PII and money; login is password only (`lib/auth.ts`). | Add TOTP for admins. |
| Medium | Backups | Everything depends on Neon's plan; there's no scheduled dump. | Add a weekly Cron `pg_dump`/Excel export to Drive or Blob, and check the Neon PITR window. |
| Medium | Quotes and invoices | The quote is WhatsApp text only. There's no numbered PDF quote or invoice, and no InstaPay/receipt link. | Add a PDF quote/receipt per deal with sequential numbers. |
| Low | Stale docs | `GO-TO-MARKET-ROADMAP.md` still says 2,000 EGP and 200/month. | Update it to the current packages. |
| Low | Tests | Tests are unit-level only. There are no tests for action authorization or the import flow, and no e2e test. | Add a Playwright smoke test (login, create lead, move stage) and authz tests for `dealForUser`. |
| Low | Sessions | The 30-day session has no idle timeout (`lib/auth.ts:16`). | Add a sliding 7-day idle limit. |

Things checked and found OK:
- No secrets in git; `.env*` is ignored. Only `.env.example` and `scripts/env.ts` (a loader) are tracked.
- PGlite isn't used in production (`scripts/migrate.ts:8` fails the build without `DATABASE_URL`).
- Server Actions are covered by Next's origin check, and the cookie is SameSite=Lax.
- Payments verify that the deal belongs to the client.

## Needed features

| Pri | Feature | Why / revenue | Effort | Files |
|---|---|---|---|---|
| Must | Current packages and the free-hosting-months model | Quotes and renewals must match the site. Hosting is the recurring revenue. | M | `lib/pricing.ts`, `lib/packages.ts`, `db/schema.ts` (packages.free_months, subscriptions.first_paid_at), migration, `deals/[id]/PricingForm.tsx`, `renewals/page.tsx`, tests |
| Must | Prospect import (CSV, Google Maps columns, landlines, dedupe by phone or Maps place) plus a prospect stage and cadence | The 81-lead list and future lists become a worked pipeline. | M | `lib/phone.ts`, `lib/client-sheet*.ts`, `clients/import/*`, `db/schema.ts` (landline, maps_url, rating, lifecycle), `app/(app)/page.tsx` |
| Must | Daily digest and reminders (Vercel Cron) | No forgotten follow-ups or renewals. Speed-to-lead is what wins deals. | S–M | `app/api/cron/digest/route.ts` (secret header), `vercel.json` crons, `lib/email.ts` |
| Must | Lead intake API plus attribution (UTM, fbclid/ttclid, landing page, source auto-set) | Shows which channel (TikTok, IG, Maps, WhatsApp) pays. Needed before spending on ads. | M | `app/api/leads/route.ts`, `db/schema.ts`, newbranding calculator/form, reports by source |
| Must | Fix the domain and templates; add per-sector WhatsApp templates | Wrong links lose trust. Sector scripts lift reply rates. | S | `lib/whatsapp.ts`, `lib/constants.ts`, `campaigns/templates` seed |
| Should | Mobile quick actions (stage buttons, one-tap WhatsApp/call, log touch) | A solo founder works from the phone. | S | `pipeline/Board.tsx`, deal and client pages |
| Should | PDF quote and receipt in EGP, numbered | Looks professional to companies and halls, and helps with payment follow-up. | M | new `lib/pdf`, deal page, payments |
| Should | Funnel dashboard: per-stage conversion, time in stage, revenue by source/sector, hosting MRR and upcoming renewals | Tells you where to focus outreach and which content/ads to repeat. | M | `reports/page.tsx`, `components/charts.tsx` |
| Should | Trustworthy stats (dedupe, bots, owner exclusion) plus a monthly stats message to clients | Proof drives renewals and referrals. A monthly "your tour got X views" message cuts churn. | S–M | `newbranding/app/api/track`, `lib/tour-stats.ts`, `lib/whatsapp.ts` |
| Should | Delivery SLA tracker (48 h from scan) with an alert | The 48 h promise is in the ads. | S | `app/(app)/page.tsx`, digest |
| Could | WhatsApp Business Cloud API (inbound auto-capture, template sends) | Removes copy-paste. Has per-conversation fees and needs Meta approval. | L | new integration |
| Could | Referral and broker-partner program tracking (codes, commissions) | Brokers bring repeat units. | M | clients/deals |
| Could | Admin TOTP 2FA, weekly backups | Security baseline. | S each | `lib/auth.ts`, cron |

## Suggested plan

1. **Week 1: stop the leaks.**
   - Domain fix.
   - Current packages and the free-months model.
   - Landline field and CSV prospect import with the prospect stage.
   - Daily digest cron.
2. **Weeks 2–3: grow and measure.**
   - Lead intake API from gateverse.net with UTM/click IDs.
   - Funnel and source dashboard.
   - Mobile quick actions.
   - Stats dedupe plus the monthly client stats message.
   - Delivery SLA alert.
3. **Weeks 4–6: polish and scale.**
   - PDF quotes and receipts.
   - TOTP for admins and weekly backups.
   - Referral/broker tracking.
   - Playwright smoke and authz tests.
   - Evaluate the WhatsApp Cloud API.

## Text slots for ChatGPT

Write these in Arabic (Egyptian, Alexandria tone) and paste them into `lib/i18n/messages/*` or the template seeds:
1. `lib/whatsapp.ts`:
   - firstReply, quote intro, followUp step 1/2/3, booking confirmation, delivery, npsAsk, referralAsk, renewal (7 days and 1 day before).
   - New: the monthly stats report.
2. New per-sector first-touch and follow-up templates for prospects: gym, coworking, event hall, real estate, café, clinic/spa, hotel.
3. Digest email: subject plus section titles (follow-ups due, renewals, shoots tomorrow, late deliveries).
4. PDF quote and receipt: header line, package descriptions, hosting terms (free months, then 100/month or 1,000/year), payment instructions (InstaPay/bank), footer.
5. Prospect-stage labels and the lost/not-now reasons shown in dropdowns (`lib/i18n/messages/labels.ts`).
6. Empty states and onboarding hints on the Today page and the Import page (`lib/i18n/messages/today.ts`, `clients.ts`).
7. Client stats page copy on gateverse.net `/stats/<token>`: title, what views and clicks mean, and the upsell line.
