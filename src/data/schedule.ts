import type { Game } from "./types"

/**
 * The 2025 schedule. SAMPLE DATA — verify dates/opponents against the official
 * GHSA schedule before going live.
 *
 * Rules the site relies on:
 *  - kickoff MUST be ISO 8601 with a timezone offset (-04:00 EDT / -05:00 EST).
 *  - Add a `result` block once a game is played; leave it off for upcoming games.
 *  - The "next game" = the earliest game whose kickoff is in the future.
 *
 * To add this week's result: find the game, add a `result` object, redeploy.
 */
export const schedule: Game[] = [
  {
    id: "2025-vs-creekside",
    opponent: "Creekside Seminoles",
    kickoff: "2025-08-22T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    result: {
      outcome: "W",
      wildcatsScore: 35,
      opponentScore: 14,
      recap: "Cats open the season strong behind a dominant second half.",
    },
  },
  {
    id: "2025-at-lowndes",
    opponent: "Lowndes Vikings",
    kickoff: "2025-08-29T19:30:00-04:00",
    location: "away",
    venue: "Martin Stadium",
    result: {
      outcome: "W",
      wildcatsScore: 21,
      opponentScore: 17,
      recap: "The Winnersville Classic stays in black and gold.",
    },
  },
  {
    id: "2025-vs-tift",
    opponent: "Tift County Blue Devils",
    kickoff: "2025-09-05T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    result: {
      outcome: "L",
      wildcatsScore: 24,
      opponentScore: 28,
      recap: "A late drive falls short on the road to a region rival.",
    },
  },
  {
    id: "2025-at-colquitt",
    opponent: "Colquitt County Packers",
    kickoff: "2025-09-19T19:30:00-04:00",
    location: "away",
    venue: "Mack Tharpe Stadium",
    ticketsUrl: "https://gofan.co/",
  },
  {
    id: "2025-vs-camden",
    opponent: "Camden County Wildcats",
    kickoff: "2025-09-26T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    ticketsUrl: "https://gofan.co/",
  },
  {
    id: "2025-at-richmond-hill",
    opponent: "Richmond Hill Wildcats",
    kickoff: "2025-10-03T19:30:00-04:00",
    location: "away",
    venue: "Richmond Hill Stadium",
  },
  {
    id: "2025-vs-coffee",
    opponent: "Coffee Trojans",
    kickoff: "2025-10-17T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2025-at-brunswick",
    opponent: "Brunswick Pirates",
    kickoff: "2025-10-24T19:30:00-04:00",
    location: "away",
    venue: "Glynn County Stadium",
  },
  {
    id: "2025-vs-ware",
    opponent: "Ware County Gators",
    kickoff: "2025-11-07T19:30:00-05:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
]
