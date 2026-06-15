import { schedule } from "./schedule"
import type { Game } from "./types"

export { content } from "./content"
export { site } from "./site"
export { schedule } from "./schedule"
export { roster } from "./roster"
export { coaches } from "./coaches"
export { tdClub, board } from "./tdclub"
export { sponsors, donors } from "./supporters"
export { videos } from "./media"
export * from "./types"

/** Games sorted chronologically by kickoff. */
export const gamesByDate: Game[] = [...schedule].sort(
  (a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime()
)

/** The next upcoming game relative to `now` (defaults to current time). */
export function getNextGame(now: Date = new Date()): Game | undefined {
  return gamesByDate.find((g) => new Date(g.kickoff).getTime() > now.getTime())
}

/** Most recently played game (has a result and is in the past). */
export function getLastPlayedGame(now: Date = new Date()): Game | undefined {
  return [...gamesByDate]
    .reverse()
    .find((g) => g.result && new Date(g.kickoff).getTime() <= now.getTime())
}

/** All played games, most recent first. */
export function getPlayedGames(): Game[] {
  return [...gamesByDate].reverse().filter((g) => g.result)
}

/** Upcoming games (kickoff in the future), soonest first. */
export function getUpcomingGames(now: Date = new Date()): Game[] {
  return gamesByDate.filter((g) => new Date(g.kickoff).getTime() > now.getTime())
}

/**
 * Win-loss-tie record computed from results — no need to hand-maintain it.
 * Scrimmages are excluded since they don't count toward the official record.
 */
export function getRecord(): { wins: number; losses: number; ties: number } {
  return schedule.reduce(
    (acc, g) => {
      if (!g.result || g.isScrimmage) return acc
      if (g.result.outcome === "W") acc.wins += 1
      else if (g.result.outcome === "L") acc.losses += 1
      else acc.ties += 1
      return acc
    },
    { wins: 0, losses: 0, ties: 0 }
  )
}
