import { CalendarDays, MapPin, Ticket } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getNextGame } from "@/data"
import { useCountdown } from "@/hooks/useCountdown"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center sm:flex-none">
      <div className="flex w-full items-center justify-center rounded-lg border border-wildcat-gold/30 bg-wildcat-charcoal px-1 py-3 shadow-inner sm:w-auto sm:min-w-[88px] sm:px-5 sm:py-6">
        <span className="font-display text-3xl font-bold tabular-nums text-gold-gradient xs:text-4xl sm:text-6xl">
          {pad(value)}
        </span>
      </div>
      <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const game = getNextGame()
  const time = useCountdown(game?.kickoff)

  if (!game || !time) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <h3 className="text-2xl font-bold">Season complete</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for riding with the Cats. Check back for next year's schedule.
        </p>
      </div>
    )
  }

  const kickoff = new Date(game.kickoff)
  const dateLabel = kickoff.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
  const timeLabel = kickoff.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  })
  const locationLabel =
    game.location === "home" ? "HOME" : game.location === "away" ? "AWAY" : "NEUTRAL"

  return (
    <div className="relative overflow-hidden rounded-2xl border border-wildcat-gold/20 bg-card p-4 shadow-xl xs:p-6 sm:p-10">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <Badge variant="outline" className="uppercase">
            Next Game
          </Badge>
          <Badge variant={game.location === "home" ? "default" : "secondary"}>
            {locationLabel}
          </Badge>
        </div>

        <h2 className="mt-4 text-center text-2xl font-bold xs:text-3xl sm:text-5xl">
          <span className="text-muted-foreground">Wildcats</span>{" "}
          <span className="text-gold">vs</span>{" "}
          <span>{game.opponent}</span>
        </h2>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-gold" />
            {dateLabel} · {timeLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-gold" />
            {game.venue}
          </span>
        </div>

        {time.isComplete ? (
          <p className="mt-8 text-center font-display text-3xl font-bold text-gold animate-pulse-gold">
            IT'S GAME TIME 🐾
          </p>
        ) : (
          <div className="mt-8 flex items-start justify-center gap-1.5 xs:gap-2 sm:gap-4">
            <Unit value={time.days} label="Days" />
            <span className="hidden pt-3 font-display text-3xl text-wildcat-gold/40 sm:block sm:pt-5 sm:text-5xl">:</span>
            <Unit value={time.hours} label="Hours" />
            <span className="hidden pt-3 font-display text-3xl text-wildcat-gold/40 sm:block sm:pt-5 sm:text-5xl">:</span>
            <Unit value={time.minutes} label="Min" />
            <span className="hidden pt-3 font-display text-3xl text-wildcat-gold/40 sm:block sm:pt-5 sm:text-5xl">:</span>
            <Unit value={time.seconds} label="Sec" />
          </div>
        )}

        {game.ticketsUrl && (
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <a href={game.ticketsUrl} target="_blank" rel="noreferrer">
                <Ticket className="h-5 w-5" />
                Get Tickets
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
