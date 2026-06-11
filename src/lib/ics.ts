import type { Game } from "@/data"

/**
 * Builds downloadable .ics (iCalendar) files from games — no backend needed.
 * Works with Apple Calendar, Google Calendar, and Outlook.
 */

const PRODID = "-//Valdosta Wildcats Fan Site//Schedule//EN"
/** Football games run ~3 hours; used to compute each event's end time. */
const GAME_DURATION_MS = 3 * 60 * 60 * 1000

/** Format a Date as an iCal UTC timestamp: 20260807T233000Z */
function toIcsUtc(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")
}

/** Escape text per RFC 5545 (commas, semicolons, backslashes, newlines). */
function escapeText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n")
}

/** Fold lines longer than 75 octets per spec (continuation lines start with a space). */
function foldLine(line: string): string {
  if (line.length <= 75) return line
  const chunks: string[] = []
  let remaining = line
  chunks.push(remaining.slice(0, 75))
  remaining = remaining.slice(75)
  while (remaining.length > 74) {
    chunks.push(" " + remaining.slice(0, 74))
    remaining = remaining.slice(74)
  }
  if (remaining.length) chunks.push(" " + remaining)
  return chunks.join("\r\n")
}

function summaryFor(game: Game): string {
  const vs = game.location === "away" ? "at" : "vs"
  const base = `Wildcats ${vs} ${game.opponent}`
  return game.note ? `${base} (${game.note})` : base
}

function descriptionFor(game: Game): string {
  const parts: string[] = []
  const loc =
    game.location === "home" ? "Home game" : game.location === "away" ? "Away game" : "Neutral site"
  parts.push(loc + ".")
  if (game.note) parts.push(game.note + ".")
  if (game.ticketsUrl) parts.push(`Tickets: ${game.ticketsUrl}`)
  parts.push("Go Cats!")
  return parts.join(" ")
}

function eventLines(game: Game, stamp: string): string[] {
  const start = new Date(game.kickoff)
  const end = new Date(start.getTime() + GAME_DURATION_MS)
  return [
    "BEGIN:VEVENT",
    `UID:${game.id}@valdostawildcats`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${toIcsUtc(start)}`,
    `DTEND:${toIcsUtc(end)}`,
    `SUMMARY:${escapeText(summaryFor(game))}`,
    `DESCRIPTION:${escapeText(descriptionFor(game))}`,
    `LOCATION:${escapeText(game.venue)}`,
    "END:VEVENT",
  ]
}

/**
 * Build a full VCALENDAR string for one or more games.
 * `stampIso` is passed in (don't call Date.now() at module load) so callers
 * control the DTSTAMP — defaults to "now" at call time.
 */
export function buildIcs(games: Game[], stampIso: string = new Date().toISOString()): string {
  const stamp = toIcsUtc(new Date(stampIso))
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:${PRODID}`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Valdosta Wildcats Football",
    ...games.flatMap((g) => eventLines(g, stamp)),
    "END:VCALENDAR",
  ]
  return lines.map(foldLine).join("\r\n")
}

/** Trigger a browser download of the given games as an .ics file. */
export function downloadIcs(games: Game[], filename: string): void {
  const ics = buildIcs(games)
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename.endsWith(".ics") ? filename : `${filename}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/**
 * Build a "Add to Google Calendar" URL for a single game (opens a prefilled
 * event in the browser — handy on desktop where .ics import is fiddly).
 */
export function googleCalendarUrl(game: Game): string {
  const start = new Date(game.kickoff)
  const end = new Date(start.getTime() + GAME_DURATION_MS)
  const fmt = (d: Date) => toIcsUtc(d)
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: summaryFor(game),
    dates: `${fmt(start)}/${fmt(end)}`,
    details: descriptionFor(game),
    location: game.venue,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
