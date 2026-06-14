import { content } from "./content"
import type { SiteConfig } from "./types"

/** Top-level site settings, assembled from content.ts. */
export const site: SiteConfig = {
  teamName: "Valdosta Wildcats",
  shortName: "Wildcats",
  tagline: "Winnersville, USA",
  season: content.team.season,
  // Record is computed from game results (see getRecord in index.ts); this is
  // just a placeholder default.
  record: { wins: 0, losses: 0, ties: 0 },
  social: {
    facebook: content.team.facebookUrl,
  },
  contactEmail: content.team.contactEmail,
  web3formsAccessKey: content.contact.web3formsAccessKey,
  ticketsUrl: content.tickets.gofanUrl,
}
