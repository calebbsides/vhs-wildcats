import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Countdown } from "@/components/Countdown"
import { getRecord, site } from "@/data"

export function Hero() {
  const record = getRecord()
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-20"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, hsl(45 75% 52% / 0.14), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container py-12 text-center sm:py-16">
        <Badge variant="outline" className="mb-5 px-4 py-1 text-sm uppercase tracking-widest">
          {site.tagline} · {site.season} Season
        </Badge>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-6xl">
          <span className="text-gold-gradient">Valdosta</span> Wildcats Football
        </h1>

        {/* The live countdown is the centerpiece of the page. */}
        <div id="next-game" className="mx-auto mt-10 max-w-4xl scroll-mt-24">
          <Countdown />
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 xs:flex-row xs:items-center xs:gap-4">
          <Button asChild size="lg">
            <a href="#scores">Latest Scores</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#tdclub">Join the TD Club</a>
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-6 rounded-full border border-border bg-card/60 px-6 py-3 backdrop-blur">
          <div className="text-center">
            <p className="font-display text-2xl font-bold tabular-nums text-gold sm:text-3xl">
              {record.wins}-{record.losses}
              {record.ties ? `-${record.ties}` : ""}
            </p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {site.season} Record
            </p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="text-center">
            <p className="font-display text-2xl font-bold tabular-nums text-gold sm:text-3xl">6</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              National Titles
            </p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="text-center">
            <p className="font-display text-2xl font-bold tabular-nums text-gold sm:text-3xl">24</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              State Titles
            </p>
          </div>
          <div className="hidden h-10 w-px bg-border sm:block" />
          <div className="hidden text-center sm:block">
            <p className="font-display text-2xl font-bold tabular-nums text-gold sm:text-3xl">976</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              All-Time Wins
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
