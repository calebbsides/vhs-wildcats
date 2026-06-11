import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getRecord, site } from "@/data"

export function Hero() {
  const record = getRecord()
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-grid"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, hsl(45 72% 52% / 0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container py-24 text-center">
        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm uppercase tracking-widest">
          {site.tagline} · {site.season} Season
        </Badge>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
          <span className="text-gold-gradient">Valdosta</span>
          <br />
          Wildcats Football
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          The home of black and gold. Live game countdowns, scores, highlights,
          and everything from the most storied program in the country.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#next-game">See the Next Game</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#scores">Latest Scores</a>
          </Button>
        </div>

        <div className="mt-12 inline-flex items-center gap-6 rounded-full border border-border bg-card/60 px-6 py-3 backdrop-blur">
          <div className="text-center">
            <p className="font-display text-3xl font-bold tabular-nums text-gold">
              {record.wins}-{record.losses}
              {record.ties ? `-${record.ties}` : ""}
            </p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {site.season} Record
            </p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold tabular-nums text-gold">24</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              State Titles
            </p>
          </div>
          <div className="hidden h-10 w-px bg-border sm:block" />
          <div className="hidden text-center sm:block">
            <p className="font-display text-3xl font-bold tabular-nums text-gold">900+</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              All-Time Wins
            </p>
          </div>
        </div>
      </div>

      <a
        href="#next-game"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition hover:text-gold"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  )
}
