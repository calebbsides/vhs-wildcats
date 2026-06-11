import { content } from "./content"
import type { Donor, Sponsor } from "./types"

/** Sponsors & donors come straight from content.ts. */
export const sponsors: Sponsor[] = content.sponsors.map((s) => {
  const item = s as { name: string; logo?: string; url?: string }
  return {
    name: item.name,
    ...(item.logo ? { logo: item.logo } : {}),
    ...(item.url ? { url: item.url } : {}),
  }
})

export const donors: Donor[] = content.donors.map((d) => ({ name: d.name }))
