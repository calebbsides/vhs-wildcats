import { content } from "./content"
import type { Player } from "./types"

type RosterEntry = {
  number: number
  name: string
  position: string
  grade: string
  heightIn?: number
  weightLb?: number
}

/** Maps the friendly roster entries in content.ts to the app's Player type. */
export const roster: Player[] = content.roster.map((raw) => {
  const p = raw as RosterEntry
  return {
    number: p.number,
    name: p.name,
    position: p.position,
    grade: p.grade as Player["grade"],
    ...(p.heightIn ? { heightInches: p.heightIn } : {}),
    ...(p.weightLb ? { weightLbs: p.weightLb } : {}),
  }
})
