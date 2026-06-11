import type { SocialPost, VideoClip } from "./types"

/**
 * Video montage clips. Use real YouTube video IDs (the string after `v=`).
 * The first clip is treated as the featured montage.
 */
export const videos: VideoClip[] = [
  { id: "v1", title: "2025 Season Hype", youtubeId: "dQw4w9WgXcQ", date: "Aug 2025" },
  { id: "v2", title: "Winnersville Classic Highlights", youtubeId: "dQw4w9WgXcQ", date: "Aug 2025" },
  { id: "v3", title: "Friday Night Under the Lights", youtubeId: "dQw4w9WgXcQ", date: "Sep 2025" },
  { id: "v4", title: "Defense Sets the Tone", youtubeId: "dQw4w9WgXcQ", date: "Sep 2025" },
]

/**
 * Manually curated social posts. A true live feed needs paid APIs / embeds;
 * for a static site, hand-picking the best posts is reliable and free.
 * To embed real posts instead, swap these cards for platform embed iframes.
 */
export const socialPosts: SocialPost[] = [
  {
    id: "s1",
    platform: "x",
    author: "Valdosta Football",
    handle: "@ValdostaFB",
    body: "WILDCATS WIN! 🐾 Black and gold takes the Winnersville Classic 21-17. What a night in front of the home crowd. #Winnersville",
    date: "2 days ago",
    url: "https://x.com/ValdostaFB",
  },
  {
    id: "s2",
    platform: "instagram",
    author: "Valdosta Wildcats",
    handle: "@valdostawildcatsfootball",
    body: "Pads are popping. One week until we're back under the lights. 🏈🔥",
    date: "5 days ago",
    url: "https://instagram.com/valdostawildcatsfootball",
  },
  {
    id: "s3",
    platform: "facebook",
    author: "Valdosta Wildcats Football",
    handle: "Valdosta Wildcats Football",
    body: "Senior Night tickets are now available online. Let's pack the stadium and send our seniors out right!",
    date: "1 week ago",
    url: "https://facebook.com/ValdostaWildcatsFootball",
  },
]
