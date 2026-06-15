import { content } from "./content"
import type { BoardMember, MembershipTier, TdClubConfig } from "./types"

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/** Assembles the TD Club config from content.ts (auto-generates tier ids). */
export const tdClub: TdClubConfig = {
  year: content.team.season,
  deadline: content.tdClub.deadline,
  tiers: content.tdClub.tiers.map((raw): MembershipTier => {
    const t = raw as {
      name: string
      price: number
      description: string
      perks?: readonly string[]
      featured?: boolean
      soldOut?: boolean
      note?: string
    }
    return {
      id: slugify(t.name),
      name: t.name,
      price: t.price,
      description: t.description,
      ...(t.perks ? { perks: [...t.perks] } : {}),
      ...(t.featured ? { featured: true } : {}),
      ...(t.soldOut ? { soldOut: true } : {}),
      ...(t.note ? { note: t.note } : {}),
    }
  }),
  payment: {
    paypalEmail: content.tdClub.payment.paypalEmail,
    paypalUsername: content.tdClub.payment.paypalUsername,
    cashApp: content.tdClub.payment.cashApp,
    venmo: content.tdClub.payment.venmo,
  },
  mailingAddress: content.tdClub.mailingAddress,
  helpEmail: content.tdClub.helpEmail,
  helpPhone: content.tdClub.helpPhone,
  paymentInstructions: content.tdClub.paymentInstructions,
}

/** The TD Club board members from content.ts. */
export const board: BoardMember[] = content.tdClub.board.map((raw): BoardMember => {
  const m = raw as { name: string; title: string; email?: string }
  return {
    name: m.name,
    title: m.title,
    ...(m.email ? { email: m.email } : {}),
  }
})
