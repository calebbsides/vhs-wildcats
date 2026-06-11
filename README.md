# Valdosta Wildcats Football 🐾

The source of all things Valdosta High Wildcats football — Winnersville, USA.

A fast, mostly-static fan site built with **React + Vite + TypeScript**, styled
with **Tailwind CSS** and **shadcn/ui** components. No backend, no database — all
content lives in editable files and the site deploys to a free CDN.

## Features

- **Live countdown** to the next game (auto-picks the next future kickoff)
- **Scoreboard** with recent results and the full season schedule
- **Video montage** with click-to-play YouTube highlights
- **Roster** of the current squad
- **Newsletter signup** (Mailchimp / Buttondown ready)
- **Social** cards linking to your X, Instagram, and Facebook
- Black-and-gold Wildcats theme, fully responsive, dark by default

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

Requires Node 18+ (built and tested on Node 24).

## Editing content — no code required

All content is in [`src/data/`](src/data/). Edit a file, save, redeploy.

| What you want to change            | File                         |
| ---------------------------------- | ---------------------------- |
| Team name, tagline, social links   | `src/data/site.ts`           |
| Schedule, scores, venues, tickets  | `src/data/schedule.ts`       |
| Roster                             | `src/data/roster.ts`         |
| Highlight videos & social posts    | `src/data/media.ts`          |

### Adding a game result

Find the game in `src/data/schedule.ts` and add a `result` block:

```ts
result: {
  outcome: "W",          // "W" | "L" | "T"
  wildcatsScore: 28,
  opponentScore: 21,
  recap: "Cats hold on late.",
},
```

The record in the hero, the scoreboard, and the "next game" countdown all update
automatically from the schedule — you never hand-maintain the win/loss record.

### Kickoff times

`kickoff` must be ISO 8601 **with a timezone offset**:

- `-04:00` during Eastern Daylight Time (spring/summer/early fall)
- `-05:00` during Eastern Standard Time (after the November time change)

Example: `"2025-09-26T19:30:00-04:00"`.

## Newsletter setup

Pick a free provider, then paste its form URL into `newsletterActionUrl` in
`src/data/site.ts`:

- **Buttondown** — Settings → Embedding → copy the `embed-subscribe` URL.
- **Mailchimp** — Audience → Signup forms → Embedded forms → copy the form
  `action` URL.

The signup form sends both `email` and `EMAIL` fields so it works with either.
Until a URL is set, the form shows a friendly "email us to subscribe" fallback.

## Deploying to Vercel (free)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), **Add New → Project**, import the repo.
3. Vercel auto-detects Vite — just click **Deploy**. (`vercel.json` is included.)
4. You get a free `*.vercel.app` URL immediately.

### Connecting your domain (when you have it)

In the Vercel project: **Settings → Domains → Add**, enter your domain, and follow
the DNS instructions (an `A`/`CNAME` record at your registrar). SSL is automatic
and free. This works the same whenever your domain access comes through.

> Netlify and Cloudflare Pages work just as well if you'd rather use those — the
> build command is `npm run build` and the output directory is `dist`.

## Disclaimer

Unofficial fan project. Sample roster, schedule, and videos are placeholders —
replace them with real data before going public. Not affiliated with Valdosta
High School or the Valdosta City School District.
