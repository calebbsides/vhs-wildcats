import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { roster, type Player } from "@/data"

function height(inches?: number) {
  if (!inches) return "—"
  return `${Math.floor(inches / 12)}'${inches % 12}"`
}

function PlayerCard({ player }: { player: Player }) {
  return (
    <Card className="group overflow-hidden transition-all hover:border-wildcat-gold/50">
      <CardContent className="flex items-center gap-4 p-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wildcat-charcoal font-display text-xl font-bold text-gold-gradient">
          {player.number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{player.name}</p>
          <p className="text-xs text-muted-foreground">
            {height(player.heightInches)} · {player.weightLbs ?? "—"} lbs
          </p>
        </div>
        <div className="text-right">
          <Badge variant="secondary">{player.position}</Badge>
          <p className="mt-1 text-xs text-muted-foreground">{player.grade}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Roster() {
  const sorted = [...roster].sort((a, b) => a.number - b.number)
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((p) => (
        <PlayerCard key={p.number} player={p} />
      ))}
    </div>
  )
}
