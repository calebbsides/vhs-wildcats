/**
 * Shared types for all Wildcats content. Edit the actual data in the JSON-style
 * files under src/data/ — these interfaces just keep them honest at build time.
 */

export type GameResult = "W" | "L" | "T"

export interface Game {
  /** Unique id, e.g. "2025-vs-lowndes" */
  id: string
  /** Opponent school name, e.g. "Lowndes Vikings" */
  opponent: string
  /** ISO 8601 kickoff time WITH timezone offset, e.g. "2025-08-22T19:30:00-04:00" */
  kickoff: string
  /** "home" | "away" | "neutral" */
  location: "home" | "away" | "neutral"
  /** Venue name shown on the card, e.g. "Cleveland Field at Bazemore-Hyder Stadium" */
  venue: string
  /** Optional label shown as a badge, e.g. "Homecoming", "Senior Night". */
  note?: string
  /** Preseason scrimmage — excluded from the W/L record and ticket links. */
  isScrimmage?: boolean
  /** Optional: ticket / livestream link */
  ticketsUrl?: string
  /** Result info, present only once the game has been played */
  result?: {
    outcome: GameResult
    wildcatsScore: number
    opponentScore: number
    /** Optional one-line recap shown on the scoreboard */
    recap?: string
  }
}

export interface Player {
  number: number
  name: string
  position: string
  /** "FR" | "SO" | "JR" | "SR" */
  grade: "FR" | "SO" | "JR" | "SR"
  heightInches?: number
  weightLbs?: number
}

export interface Coach {
  name: string
  /** Role, e.g. "Head Coach", "Offensive Coordinator", "Defensive Line" */
  title: string
  /** True for the head coach — gets featured styling. */
  isHead?: boolean
  /** Optional units coached, e.g. ["Offense", "Quarterbacks"] */
  units?: string[]
}

export interface VideoClip {
  id: string
  title: string
  /** YouTube video ID (the part after v=) */
  youtubeId: string
  /** Optional date label, e.g. "Sep 2025" */
  date?: string
}

export interface SocialPost {
  id: string
  platform: "x" | "instagram" | "facebook"
  author: string
  handle: string
  body: string
  /** Human date label, e.g. "2 days ago" */
  date: string
  url: string
}

export interface MembershipTier {
  id: string
  name: string
  /** Price in whole dollars. */
  price: number
  /** Short description of what's included. */
  description: string
  /** Bullet list of perks shown on the card. */
  perks?: string[]
  /** Marks the most popular / recommended tier for highlight styling. */
  featured?: boolean
  /** True if this tier is sold out / unavailable. */
  soldOut?: boolean
  /** Optional note, e.g. eligibility rules. */
  note?: string
}

export interface TdClubConfig {
  /** Section heading year, e.g. "2026". */
  year: string
  /** Membership deadline, human label e.g. "July 1". */
  deadline: string
  tiers: MembershipTier[]
  payment: {
    paypalEmail?: string
    cashApp?: string
    venmo?: string
    /** Direct PayPal join link if available. */
    paypalUrl?: string
  }
  mailingAddress: string
  /** Help contact line shown at the bottom of the section. */
  helpEmail?: string
  helpPhone?: string
  /** What to include with payment (e.g. name + address in the notes). */
  paymentInstructions?: string
}

export interface SiteConfig {
  teamName: string
  shortName: string
  tagline: string
  season: string
  record: { wins: number; losses: number; ties: number }
  social: {
    x?: string
    instagram?: string
    facebook?: string
    youtube?: string
  }
  contactEmail: string
  /** Newsletter provider embed/action URL — see NewsletterSignup component */
  newsletterActionUrl: string
  /**
   * The team's main GoFan ticket store URL (sells tickets for all home games).
   * Leave "" until you have the link — the Tickets section shows a "coming soon"
   * state. Per-game links can still be set via each game's `ticketsUrl`.
   */
  ticketsUrl: string
}
