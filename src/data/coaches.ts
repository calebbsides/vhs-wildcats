import type { Coach } from "./types"

/**
 * Coaching staff. Head coach (Shelton Felton) is confirmed; the assistants
 * below are placeholders — replace "Coach Name" with the real staff.
 * The coach with isHead: true is featured first and larger in the UI.
 */
export const coaches: Coach[] = [
  {
    name: "Shelton Felton",
    title: "Head Coach",
    isHead: true,
    units: ["Program"],
    bio: "Leading the most storied program in high school football — 976-265-34 all-time (.779) with 6 national, 24 state, and 43 region championships since 1913.",
  },
  { name: "Coach Name", title: "Offensive Coordinator", units: ["Offense", "Quarterbacks"] },
  { name: "Coach Name", title: "Defensive Coordinator", units: ["Defense", "Linebackers"] },
  { name: "Coach Name", title: "Special Teams Coordinator", units: ["Special Teams"] },
  { name: "Coach Name", title: "Wide Receivers", units: ["Offense"] },
  { name: "Coach Name", title: "Offensive Line", units: ["Offense"] },
  { name: "Coach Name", title: "Defensive Backs", units: ["Defense"] },
  { name: "Coach Name", title: "Strength & Conditioning" },
]
