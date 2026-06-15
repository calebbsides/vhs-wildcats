import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/data"
import { cn } from "@/lib/utils"

const links = [
  { href: "#next-game", label: "Next Game" },
  { href: "#scores", label: "Scores" },
  { href: "#tickets", label: "Tickets" },
  { href: "#tdclub", label: "TD Club" },
  { href: "#board", label: "Board" },
  { href: "#feed-the-cats", label: "Feed the Cats" },
  { href: "#supporters", label: "Sponsors" },
  { href: "#video", label: "Video" },
  { href: "#roster", label: "Roster" },
  { href: "#coaches", label: "Coaches" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Valdosta Wildcats"
            className="h-10 w-auto"
            width={40}
            height={40}
          />
          <span className="font-display text-base font-bold tracking-tight xs:text-lg">
            {site.teamName}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden xs:inline-flex">
            <a href="#tickets">Tickets</a>
          </Button>
          <div className="relative">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {open && (
              <>
                {/* Click-away backdrop so the menu closes on an outside click. */}
                <div
                  className="fixed inset-0 -z-10"
                  onClick={() => setOpen(false)}
                  aria-hidden
                />
                {/* Anchored directly below the button, right edges aligned. */}
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-md">
                  <div className="flex flex-col gap-1">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
