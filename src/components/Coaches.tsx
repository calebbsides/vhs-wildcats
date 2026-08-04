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
  const hasPhoto = !!coach.photo

  if (coach.isHead && hasPhoto) {
    return (
      <Card className="group overflow-hidden transition-all hover:border-wildcat-gold/50 sm:col-span-2 lg:col-span-3">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          <div className="h-80 w-full overflow-hidden bg-wildcat-charcoal/50 lg:h-auto lg:w-1/3">
            <img
              src={coach.photo}
              alt={coach.name}
              className="h-full w-full object-contain"
            />
          </div>
          <CardContent className="flex flex-col justify-center gap-4 p-6 lg:w-2/3 lg:p-8">
            <Badge className="w-fit uppercase">Head Coach</Badge>
            <div>
              <p className="text-2xl font-semibold">{coach.name}</p>
              <p className="mt-1 text-lg text-muted-foreground">{coach.title}</p>
            </div>
            {coach.bio && (
              <p className="text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
            )}
            {coach.units && coach.units.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {coach.units.map((u) => (
                  <Badge key={u} variant="secondary">
                    {u}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden transition-all hover:border-wildcat-gold/50">
      {hasPhoto ? (
        <div className="flex gap-4 p-4">
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-wildcat-charcoal/50">
            <img
              src={coach.photo}
              alt={coach.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{coach.name}</p>
            <p className="text-sm text-muted-foreground">{coach.title}</p>
            {coach.units && coach.units.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {coach.units.map((u) => (
                  <Badge key={u} variant="secondary">
                    {u}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <CardContent className="flex items-start gap-4 p-4 sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wildcat-charcoal font-display font-bold text-gold-gradient">
            {initials(coach.name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">{coach.name}</p>
            <p className="text-sm text-muted-foreground">{coach.title}</p>
            {coach.units && coach.units.length > 0 && (
              <div className="mt-2 hidden flex-wrap gap-1 sm:flex">
                {coach.units.map((u) => (
                  <Badge key={u} variant="secondary">
                    {u}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      )}
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
