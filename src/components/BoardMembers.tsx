import { Card, CardContent } from "@/components/ui/card"
import { board, type BoardMember } from "@/data"

/** Initials for the avatar fallback, e.g. "Jane Doe" -> "JD". */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function BoardCard({ member }: { member: BoardMember }) {
  return (
    <Card className="group overflow-hidden transition-all hover:border-wildcat-gold/50">
      <CardContent className="flex items-center gap-4 p-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wildcat-charcoal text-lg font-display font-bold text-gold-gradient">
          {initials(member.name)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{member.name}</p>
          <p className="text-sm text-muted-foreground">{member.title}</p>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="mt-1 inline-block truncate text-sm text-wildcat-gold hover:underline"
            >
              {member.email}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function BoardMembers() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {board.map((m) => (
        <BoardCard key={`${m.name}-${m.title}`} member={m} />
      ))}
    </div>
  )
}
