import { content } from "./content"
import type { Coach } from "./types"

type CoachEntry = {
  name: string
  title: string
  head?: boolean
  units?: readonly string[]
  bio?: string
}

/** Maps the friendly coach entries in content.ts to the app's Coach type. */
export const coaches: Coach[] = content.coaches.map((raw) => {
  const c = raw as CoachEntry
  return {
    name: c.name,
    title: c.title,
    ...(c.head ? { isHead: true } : {}),
    ...(c.units ? { units: [...c.units] } : {}),
    ...(c.bio ? { bio: c.bio } : {}),
  }
})
