import { useEffect, useState } from "react"

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  /** True once the target time has passed. */
  isComplete: boolean
}

function diff(target: number, now: number): TimeLeft {
  const delta = Math.max(0, target - now)
  const totalSeconds = Math.floor(delta / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isComplete: delta === 0,
  }
}

/**
 * Live ticking countdown to an ISO date string. Re-renders once per second.
 */
export function useCountdown(targetIso: string | undefined): TimeLeft | null {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!targetIso) return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [targetIso])

  if (!targetIso) return null
  return diff(new Date(targetIso).getTime(), now)
}
