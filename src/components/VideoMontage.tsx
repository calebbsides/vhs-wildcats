import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

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
  const scroller = useRef<HTMLDivElement>(null)

  if (videos.length === 0) return null
  const [featured, ...rest] = videos

  function scrollBy(direction: 1 | -1) {
    const el = scroller.current
    if (!el) return
    // Scroll by roughly one card-and-a-half so a new clip always comes into view.
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <div className="space-y-8">
      {/* Featured video — large and centered */}
      <div className="mx-auto max-w-4xl">
        <VideoCard clip={featured} featured />
      </div>

      {rest.length > 0 && (
        <div className="relative">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              More Highlights
            </h3>
            {rest.length > 1 && (
              <div className="hidden gap-2 sm:flex">
                <button
                  onClick={() => scrollBy(-1)}
                  aria-label="Scroll left"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-wildcat-gold/50 hover:text-gold"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  aria-label="Scroll right"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-wildcat-gold/50 hover:text-gold"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {rest.map((clip) => (
              <div
                key={clip.id}
                className="w-[80%] shrink-0 snap-start sm:w-[45%] lg:w-[30%]"
              >
                <VideoCard clip={clip} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
