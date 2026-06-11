import type { Coach } from "./types"

/**
 * SAMPLE coaching staff — replace with the real staff. The coach with
 * isHead: true is featured first and larger in the UI.
 */
export const coaches: Coach[] = [
  { name: "Coach Last Name", title: "Head Coach", isHead: true, units: ["Program"] },
  { name: "Coach Name", title: "Offensive Coordinator", units: ["Offense", "Quarterbacks"] },
  { name: "Coach Name", title: "Defensive Coordinator", units: ["Defense", "Linebackers"] },
  { name: "Coach Name", title: "Special Teams Coordinator", units: ["Special Teams"] },
  { name: "Coach Name", title: "Wide Receivers", units: ["Offense"] },
  { name: "Coach Name", title: "Offensive Line", units: ["Offense"] },
  { name: "Coach Name", title: "Defensive Backs", units: ["Defense"] },
  { name: "Coach Name", title: "Strength & Conditioning" },
]
