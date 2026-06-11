import type { Game } from "./types"

/**
 * The official 2026 Valdosta Wildcats schedule (from the TD Club membership card).
 *
 * Confirmed details: all games are Fridays with 8:00 PM kickoff. Region games
 * (Colquitt, Camden, Lowndes, Richmond Hill) are marked with note "Region".
 *
 * Time zone offsets for 2026 Eastern: -04:00 (EDT) through Oct 31, then
 * -05:00 (EST) from Nov 1 onward.
 *
 * Add a `result` block once a game is played; leave it off for upcoming games.
 * The "next game" = the earliest game whose kickoff is in the future.
 * `isScrimmage: true` keeps a game off the W/L record (the Aug 7 scrimmage).
 */
export const schedule: Game[] = [
  {
    id: "2026-vs-worth-scrimmage",
    opponent: "Worth County",
    kickoff: "2026-08-07T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Scrimmage",
    isScrimmage: true,
  },
  {
    id: "2026-at-jones-co",
    opponent: "Jones County",
    kickoff: "2026-08-21T20:00:00-04:00",
    location: "away",
    venue: "Gray, GA",
  },
  {
    id: "2026-vs-howard",
    opponent: "Howard",
    kickoff: "2026-08-28T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-vs-bradwell",
    opponent: "Bradwell Institute",
    kickoff: "2026-09-04T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-vs-kipp-atlanta",
    opponent: "KIPP Atlanta Collegiate",
    kickoff: "2026-09-11T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Homecoming",
  },
  {
    id: "2026-vs-stockbridge",
    opponent: "Stockbridge",
    kickoff: "2026-09-25T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-vs-booker",
    opponent: "Booker High (Sarasota, FL)",
    kickoff: "2026-10-02T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
  },
  {
    id: "2026-at-colquitt",
    opponent: "Colquitt County",
    kickoff: "2026-10-16T20:00:00-04:00",
    location: "away",
    venue: "Mack Tharpe Stadium",
    note: "Region",
  },
  {
    id: "2026-vs-camden",
    opponent: "Camden County",
    kickoff: "2026-10-23T20:00:00-04:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Region",
  },
  {
    id: "2026-at-lowndes",
    opponent: "Lowndes County",
    kickoff: "2026-10-30T20:00:00-04:00",
    location: "away",
    venue: "Martin Stadium",
    note: "Winnersville Classic",
  },
  {
    id: "2026-vs-richmond-hill",
    opponent: "Richmond Hill",
    kickoff: "2026-11-06T20:00:00-05:00",
    location: "home",
    venue: "Cleveland Field at Bazemore-Hyder Stadium",
    note: "Senior Night",
  },
]
