import { useState } from "react"
import { Play } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { videos, type VideoClip } from "@/data"

function thumb(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}

function VideoCard({ clip, featured = false }: { clip: VideoClip; featured?: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={`group relative w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-wildcat-gold/50 ${
            featured ? "aspect-video" : "aspect-video"
          }`}
        >
          <img
            src={thumb(clip.youtubeId)}
            alt={clip.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full gold-gradient shadow-lg transition group-hover:scale-110">
              <Play className="h-6 w-6 translate-x-0.5 fill-wildcat-black text-wildcat-black" />
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {clip.date && (
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {clip.date}
              </span>
            )}
            <h3 className={`font-bold ${featured ? "text-xl sm:text-2xl" : "text-base"}`}>
              {clip.title}
            </h3>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>{clip.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full p-4 pt-2">
          {open && (
            <iframe
              className="h-full w-full rounded-lg"
              src={`https://www.youtube.com/embed/${clip.youtubeId}?autoplay=1`}
              title={clip.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function VideoMontage() {
  if (videos.length === 0) return null
  const [featured, ...rest] = videos
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <VideoCard clip={featured} featured />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
        {rest.slice(0, 3).map((clip) => (
          <VideoCard key={clip.id} clip={clip} />
        ))}
      </div>
    </div>
  )
}
