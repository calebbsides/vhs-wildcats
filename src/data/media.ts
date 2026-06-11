import { content } from "./content"
import type { VideoClip } from "./types"

type VideoEntry = { title: string; youtubeId: string; date?: string }

/** Maps the friendly video entries in content.ts to the app's VideoClip type. */
export const videos: VideoClip[] = content.videos.map((raw, i) => {
  const v = raw as VideoEntry
  return {
    id: `v${i + 1}`,
    title: v.title,
    youtubeId: v.youtubeId,
    ...(v.date ? { date: v.date } : {}),
  }
})
