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
- **TD Club** membership, parking, and tickets
- **Contact form** that emails the team directly
- **Facebook** link to the team page
- Black-and-gold Wildcats theme, fully responsive, dark by default

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

Requires Node 18+ (built and tested on Node 24).

## Editing content — one file, no real coding required

**Everything that changes during the season lives in a single file:
[`src/data/content.ts`](src/data/content.ts).** The schedule, scores, roster,
coaches, videos, donors, sponsors, ticket link, and TD Club
membership info are all there, each section clearly commented with what it does
and how to edit it. Open it and read the instructions at the top.

You do **not** edit anything else. After saving your changes, redeploy (see
below) and the site updates.

### A few quick examples

**Add a game score** — find the game in the `schedule` section and add a
`result` line to it:

```ts
result: { wildcats: 28, opponent: 21, recap: "Cats hold on late." },
```

The win/loss record, scoreboard, and "next game" countdown all update
automatically — you never hand-maintain the record. (`recap` is optional.)

**Add a player** — copy a line in the `roster` section, paste it below, and
change the number, name, position, and grade.

**Add a sponsor or donor** — add a line to the `sponsors` or `donors` section.

**Change kickoff times / dates** — just type a normal date (`"2026-09-26"`) and
time (`"8:00 PM"`). The site handles Eastern time and daylight saving for you —
no technical date formats needed.

> Tip: if you make a typo (e.g. forget a comma), the site **won't deploy
> broken** — the build fails and tells you something's wrong. That's a safety
> net. Fix the flagged line and redeploy.

## Contact form

The Contact section uses [Web3Forms](https://web3forms.com) (free) to deliver
messages straight to the team's inbox — no server required. To turn it on:

1. Go to [web3forms.com](https://web3forms.com), enter your `contactEmail`, and
   click **Create Access Key**. They email you a key.
2. Paste the key into the `contact` → `web3formsAccessKey` field in
   [`src/data/content.ts`](src/data/content.ts) and redeploy.

Until a key is set, the form falls back to opening the visitor's email client
with a pre-filled message to `contactEmail`.

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
