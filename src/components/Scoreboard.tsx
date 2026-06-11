import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gamesByDate, getPlayedGames, type Game } from "@/data"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

function ResultRow({ game }: { game: Game }) {
  const r = game.result!
  const variant = r.outcome === "W" ? "win" : r.outcome === "L" ? "loss" : "tie"
  const isAway = game.location === "away"
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex items-center gap-4 p-4">
        <Badge variant={variant} className="h-9 w-9 justify-center text-base">
          {r.outcome}
        </Badge>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">
            {isAway ? "at " : "vs "}
            {game.opponent}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatDate(game.kickoff)} · {game.location === "home" ? "Home" : game.location === "away" ? "Away" : "Neutral"}
          </p>
          {r.recap && (
            <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{r.recap}</p>
          )}
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-bold tabular-nums">
            {r.wildcatsScore}
            <span className="mx-1 text-muted-foreground">–</span>
            {r.opponentScore}
          </p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Final</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ScheduleRow({ game }: { game: Game }) {
  const date = new Date(game.kickoff)
  const isAway = game.location === "away"
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-14 shrink-0 text-center">
          <p className="font-display text-lg font-bold leading-none">{date.getDate()}</p>
          <p className="text-xs uppercase text-muted-foreground">
            {date.toLocaleDateString("en-US", { month: "short" })}
          </p>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">
            {isAway ? "at " : "vs "}
            {game.opponent}
          </p>
          <p className="text-xs text-muted-foreground">
            {date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })} · {game.venue}
          </p>
        </div>
        {game.result ? (
          <Badge variant={game.result.outcome === "W" ? "win" : game.result.outcome === "L" ? "loss" : "tie"}>
            {game.result.outcome} {game.result.wildcatsScore}–{game.result.opponentScore}
          </Badge>
        ) : (
          <Badge variant="outline">Upcoming</Badge>
        )}
      </CardContent>
    </Card>
  )
}

export function Scoreboard() {
  const played = getPlayedGames()

  return (
    <Tabs defaultValue="results" className="w-full">
      <div className="flex justify-center">
        <TabsList>
          <TabsTrigger value="results">Recent Results</TabsTrigger>
          <TabsTrigger value="schedule">Full Schedule</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="results">
        {played.length === 0 ? (
          <p className="py-10 text-center text-muted-foreground">
            No games played yet — the season is just getting started.
          </p>
        ) : (
          <div className="mx-auto grid max-w-2xl gap-3">
            {played.map((g) => (
              <ResultRow key={g.id} game={g} />
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="schedule">
        <div className="mx-auto grid max-w-2xl gap-3">
          {gamesByDate.map((g) => (
            <ScheduleRow key={g.id} game={g} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
