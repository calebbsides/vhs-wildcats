import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { coaches, type Coach } from "@/data"

/** Initials for the avatar fallback, e.g. "Coach Smith" -> "CS". */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <Card
      className={`group overflow-hidden transition-all hover:border-wildcat-gold/50 ${
        coach.isHead ? "border-wildcat-gold/40 sm:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <CardContent className="flex items-start gap-4 p-4 sm:items-center">
        <span
          className={`flex shrink-0 items-center justify-center rounded-lg bg-wildcat-charcoal font-display font-bold text-gold-gradient ${
            coach.isHead ? "h-16 w-16 text-2xl" : "h-12 w-12 text-lg"
          }`}
        >
          {initials(coach.name)}
        </span>
        <div className="min-w-0 flex-1">
          {coach.isHead && (
            <Badge className="mb-1 uppercase">Head Coach</Badge>
          )}
          <p className={`font-semibold ${coach.isHead ? "text-xl" : "truncate"}`}>
            {coach.name}
          </p>
          <p className="text-sm text-muted-foreground">{coach.title}</p>
          {coach.bio && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
          )}
        </div>
        {coach.units && coach.units.length > 0 && !coach.isHead && (
          <div className="hidden flex-wrap justify-end gap-1 sm:flex">
            {coach.units.map((u) => (
              <Badge key={u} variant="secondary">
                {u}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function Coaches() {
  // Head coach first, then the rest in their declared order.
  const sorted = [...coaches].sort(
    (a, b) => Number(Boolean(b.isHead)) - Number(Boolean(a.isHead))
  )
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((c) => (
        <CoachCard key={`${c.name}-${c.title}`} coach={c} />
      ))}
    </div>
  )
}
