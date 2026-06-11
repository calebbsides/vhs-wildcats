import { content } from "./content"
import type { Game, GameResult } from "./types"

/**
 * Builds the strict Game[] the app uses from the friendly entries in content.ts.
 * Editors only touch content.ts — this file does the conversion.
 */

/**
 * US Eastern UTC offset for a given YYYY-MM-DD, accounting for daylight saving.
 * EDT (-04:00) roughly mid-March → early-November; EST (-05:00) otherwise.
 * Good enough for a Friday-night football schedule (kickoffs are never near
 * the 2 a.m. DST switch).
 */
function easternOffset(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number)
  const date = new Date(Date.UTC(y, m - 1, d))

  // Second Sunday in March → first Sunday in November = EDT.
  const dstStart = nthSunday(y, 2, 2) // March, 2nd Sunday
  const dstEnd = nthSunday(y, 10, 1) // November, 1st Sunday
  const t = date.getTime()
  return t >= dstStart && t < dstEnd ? "-04:00" : "-05:00"
}

function nthSunday(year: number, monthIndex: number, n: number): number {
  const first = new Date(Date.UTC(year, monthIndex, 1))
  const firstSundayDate = 1 + ((7 - first.getUTCDay()) % 7)
  return Date.UTC(year, monthIndex, firstSundayDate + (n - 1) * 7)
}

/** Parse "8:00 PM" → { hour24, minute }. Falls back to 19:00 if unparseable/TBD. */
function parseTime(time: string): { hour: number; minute: number } {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return { hour: 19, minute: 0 }
  let hour = Number(match[1]) % 12
  if (match[3].toUpperCase() === "PM") hour += 12
  return { hour, minute: Number(match[2]) }
}

function slugify(opponent: string): string {
  return opponent
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

type ScheduleEntry = {
  opponent: string
  date: string
  time: string
  where: "home" | "away" | "neutral"
  venue: string
  label?: string
  scrimmage?: boolean
  result?: { wildcats: number; opponent: number; recap?: string }
}

export const schedule: Game[] = content.schedule.map((raw) => {
  const g = raw as ScheduleEntry
  const { hour, minute } = parseTime(g.time)
  const hh = String(hour).padStart(2, "0")
  const mm = String(minute).padStart(2, "0")
  const kickoff = `${g.date}T${hh}:${mm}:00${easternOffset(g.date)}`

  const game: Game = {
    id: `${g.date}-${slugify(g.opponent)}`,
    opponent: g.opponent,
    kickoff,
    location: g.where,
    venue: g.venue,
  }
  if (g.label) game.note = g.label
  if (g.scrimmage) game.isScrimmage = true

  if (g.result) {
    const r = g.result
    const outcome: GameResult =
      r.wildcats > r.opponent ? "W" : r.wildcats < r.opponent ? "L" : "T"
    game.result = {
      outcome,
      wildcatsScore: r.wildcats,
      opponentScore: r.opponent,
      ...(r.recap ? { recap: r.recap } : {}),
    }
  }

  return game
})
