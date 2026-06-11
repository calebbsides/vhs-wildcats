import { Ticket, CalendarDays, CalendarPlus, MapPin, ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getUpcomingGames, site, type Game } from "@/data"
import { downloadIcs } from "@/lib/ics"

function GameTicketRow({ game }: { game: Game }) {
  const date = new Date(game.kickoff)
  const isAway = game.location === "away"

  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
        <div className="w-14 shrink-0 text-center">
          <p className="font-display text-lg font-bold leading-none">{date.getDate()}</p>
          <p className="text-xs uppercase text-muted-foreground">
            {date.toLocaleDateString("en-US", { month: "short" })}
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold">
              {isAway ? "at " : "vs "}
              {game.opponent}
            </p>
            <Badge variant={game.location === "home" ? "default" : "secondary"}>
              {game.location === "home" ? "Home" : game.location === "away" ? "Away" : "Neutral"}
            </Badge>
            {game.note && <Badge variant="outline">{game.note}</Badge>}
          </div>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {date.toLocaleDateString("en-US", { weekday: "short" })} ·{" "}
              {date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {game.venue}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:shrink-0 sm:self-center">
          {game.isScrimmage && <Badge variant="secondary">Scrimmage</Badge>}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 shrink-0 text-muted-foreground hover:text-gold"
            title="Add this game to your calendar"
            aria-label={`Add ${game.opponent} game to calendar`}
            onClick={() => downloadIcs([game], `wildcats-vs-${game.id}`)}
          >
            <CalendarPlus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Tickets() {
  const upcoming = getUpcomingGames()
  const hasStore = Boolean(site.ticketsUrl)

  return (
    <div className="space-y-8">
      {/* Primary GoFan call-to-action */}
      <Card className="relative overflow-hidden border-wildcat-gold/20">
        <div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-wildcat-gold/10 blur-3xl"
          aria-hidden
        />
        <CardContent className="relative flex flex-col items-center gap-4 p-8 text-center sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient">
            <Ticket className="h-6 w-6 text-wildcat-black" />
          </span>
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Get Your Tickets on GoFan</h3>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              All Wildcats home games sell tickets through GoFan — fast, mobile,
              and cashless at the gate. Buy ahead and skip the line on game day.
            </p>
          </div>

          {hasStore ? (
            <Button asChild size="lg">
              <a href={site.ticketsUrl} target="_blank" rel="noreferrer">
                <Ticket className="h-5 w-5" />
                Buy Wildcats Tickets
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ) : (
            <div className="rounded-lg border border-dashed border-wildcat-gold/30 bg-background/40 px-5 py-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Ticket link coming soon.</p>
              <p className="mt-1">
                The GoFan store link will appear here once it's available. Add it to{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">site.ticketsUrl</code>{" "}
                in <code className="rounded bg-muted px-1 py-0.5 text-xs">src/data/site.ts</code>.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upcoming games list */}
      {upcoming.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Upcoming Games
          </h3>
          <div className="grid gap-3">
            {upcoming.map((g) => (
              <GameTicketRow key={g.id} game={g} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
