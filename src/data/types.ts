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
}
