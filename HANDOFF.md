# New Delhi Dialogues - Handoff Notes

## Running locally
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values (see below)
3. `npm run dev`

## How the contact and event registration forms work

Both forms POST to Next.js API routes:
- `POST /api/contact` (used by `components/forms/ContactForm.tsx`)
- `POST /api/event-register` (used by `components/forms/InlineRegisterForm.tsx`, appears on multiple event pages)

Each route does ONE of two things, depending on configuration:

**Option A - Forward to your own backend (recommended if you already have one)**
Set `FASTIFY_API_URL` in `.env.local` to your server's base URL. The route
will POST the submission to `{FASTIFY_API_URL}/api/contact` or
`{FASTIFY_API_URL}/api/event-register` and return whatever your server
responds with. No other code changes needed.

**Option B - Built-in handling (works out of the box, no separate backend needed)**
If `FASTIFY_API_URL` is not set, each submission is:
1. Appended to a local file (`submissions/contact.jsonl` or
   `submissions/event-register.jsonl`) as a permanent backup
2. Emailed via SMTP to the address in `CONTACT_RECIPIENT_EMAIL` /
   `EVENT_REGISTER_RECIPIENT_EMAIL`

If SMTP isn't configured yet, the email step is skipped (logged as a
warning) but the submission is still saved to disk - nothing is lost.

## Environment variables

See `.env.example` for the full list with comments. The two required
groups are mutually exclusive - use ONE:

| Goal | Variables to set |
|---|---|
| Use your own backend | `FASTIFY_API_URL` only |
| Use built-in email + storage | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_RECIPIENT_EMAIL`, `EVENT_REGISTER_RECIPIENT_EMAIL` |

### Getting SMTP credentials quickly
- **Gmail**: enable 2-Step Verification on the account, then generate an
  "App Password" at myaccount.google.com/apppasswords. Use that as
  `SMTP_PASS` (not the normal account password). `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`.
- **Outlook/Office365**: `SMTP_HOST=smtp.office365.com`, `SMTP_PORT=587`,
  use the account's normal login (or an app password if MFA is enabled).
- **Any other provider**: use whatever SMTP host/port/credentials they issue.

## Deployment note

This app is intended to run on a persistent server or VM (not
serverless). The local-file backup (`submissions/*.jsonl`) requires a
persistent filesystem - on serverless platforms (Vercel, Netlify
Functions, AWS Lambda, etc.) the filesystem resets between requests
and that backup would silently stop working, though email would
still function if SMTP is configured.

## Project structure quick reference
- `app/` - Next.js App Router pages
- `components/` - React components, organized by domain (layout, ui, events, media, forms, speakers, timeline, carousel)
- `data/` - Local TypeScript data files (speakers, events, articles, podcasts, vlogs, team) - the content model
- `lib/content.ts` - all data-fetching functions; pages call these, never `data/*` directly
- `lib/mailer.ts` / `lib/submissions.ts` - form-handling logic described above
- `styles/tokens.css` - all design tokens (colors, fonts, spacing) as CSS custom properties

## Known placeholder content still needing real data before launch
- `data/speakers.ts` - every speaker's `topic`, `date`, `organisation`, and `location` field is a TODO placeholder. Names and photos are real; session details are not yet filled in.
- `data/team.ts` - team member names/bios are placeholders (`[Founder / Director Name]`, etc.)
- `data/articles.ts` - articles have excerpts only; full article body text is not yet written (see `app/media/articles/[slug]/page.tsx`)
- Press/media mentions in `data/articles.ts` (`pressMentions`) are placeholder entries
