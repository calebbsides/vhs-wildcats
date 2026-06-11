import type { Game } from "./types"

/**
 * The official 2026 Valdosta Wildcats schedule (from the team flyer).
 *
 * Rules the site relies on:
 *  - kickoff MUST be ISO 8601 with a timezone offset. 2026 Eastern offsets:
 *    -04:00 (EDT) through Oct 31, then -05:00 (EST) from Nov 1 onward.
 *  - Kickoff times were NOT on the flyer — all set to a typical 7:30 PM ET.
 *    Update any that differ once confirmed.
 *  - Add a `result` block once a game is played; leave it off for upcoming games.
 *  - The "next game" = the earliest game whose kickoff is in the future.
 *  - `isScrimmage: true` keeps a game off the W/L record (e.g. the Aug 7 scrimmage).
 *
 * To add a result: find the game, add a `result` object, redeploy.
 */
export const schedule: Game[] = [
  {
    id: "2026-vs-worth-scrimmage",
    opponent: "Worth County",
    kickoff: "2026-08-07T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Scrimmage",
    isScrimmage: true,
  },
  {
    id: "2026-at-jones-co",
    opponent: "Jones County",
    kickoff: "2026-08-21T19:30:00-04:00",
    location: "away",
    venue: "Jones County High School",
  },
  {
    id: "2026-vs-howard",
    opponent: "Howard",
    kickoff: "2026-08-28T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-vs-bradwell",
    opponent: "Bradwell Institute",
    kickoff: "2026-09-04T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-vs-kipp-atlanta",
    opponent: "KIPP Atlanta Collegiate",
    kickoff: "2026-09-11T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Homecoming",
  },
  {
    id: "2026-vs-stockbridge",
    opponent: "Stockbridge",
    kickoff: "2026-09-25T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-vs-booker",
    opponent: "Booker High",
    kickoff: "2026-10-02T19:30:00-04:00",
    location: "neutral",
    venue: "Sarasota, FL",
  },
  {
    id: "2026-at-colquitt",
    opponent: "Colquitt County",
    kickoff: "2026-10-16T19:30:00-04:00",
    location: "away",
    venue: "Mack Tharpe Stadium",
  },
  {
    id: "2026-vs-camden",
    opponent: "Camden County",
    kickoff: "2026-10-23T19:30:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-at-lowndes",
    opponent: "Lowndes County",
    kickoff: "2026-10-30T19:30:00-04:00",
    location: "away",
    venue: "Martin Stadium",
    note: "Winnersville Classic",
  },
  {
    id: "2026-vs-richmond-hill",
    opponent: "Richmond Hill",
    kickoff: "2026-11-06T19:30:00-05:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Senior Night",
  },
]
