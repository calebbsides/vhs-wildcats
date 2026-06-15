import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

import { videos, type VideoClip } from "@/data"

function thumb(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}

function ThumbCard({
  clip,
  active,
  onSelect,
}: {
  clip: VideoClip
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={`group relative w-full overflow-hidden rounded-xl border bg-card text-left transition-all aspect-video ${
        active
          ? "border-wildcat-gold ring-2 ring-wildcat-gold/40"
          : "border-border hover:border-wildcat-gold/50"
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
        <span className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient shadow-lg transition group-hover:scale-110">
          <Play className="h-5 w-5 translate-x-0.5 fill-wildcat-black text-wildcat-black" />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {clip.date && (
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            {clip.date}
          </span>
        )}
        <h3 className="text-base font-bold">{clip.title}</h3>
      </div>
    </button>
  )
}

export function VideoMontage() {
  const scroller = useRef<HTMLDivElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  // Only load/autoplay the player once it has scrolled into view.
  useEffect(() => {
    const el = playerRef.current
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (videos.length === 0) return null

  // The featured (top) video defaults to the first clip and autoplays muted.
  // Once a viewer clicks any clip, that one takes over the main player with sound.
  const active = videos.find((v) => v.id === activeId) ?? videos[0]
  const userSelected = activeId !== null
  const rest = videos.filter((v) => v.id !== active.id)

  // autoplay=1 always; mute the initial auto-load so browsers allow it, but
  // play with sound once the viewer has actively chosen a clip.
  const embedSrc =
    `https://www.youtube.com/embed/${active.youtubeId}` +
    `?autoplay=1&mute=${userSelected ? 0 : 1}&rel=0`

  function scrollBy(direction: 1 | -1) {
    const el = scroller.current
    if (!el) return
    // Scroll by roughly one card-and-a-half so a new clip always comes into view.
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <div className="space-y-8">
      {/* Main player — autoplays, swaps when a thumbnail is clicked */}
      <div ref={playerRef} className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative aspect-video w-full">
            {visible ? (
              <iframe
                key={active.id + String(userSelected)}
                className="h-full w-full"
                src={embedSrc}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={thumb(active.youtubeId)}
                alt={active.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
          <div className="p-4">
            {active.date && (
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {active.date}
              </span>
            )}
            <h3 className="text-xl font-bold sm:text-2xl">{active.title}</h3>
          </div>
        </div>
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
                <ThumbCard
                  clip={clip}
                  active={false}
                  onSelect={() => {
                    setActiveId(clip.id)
                    setVisible(true)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
