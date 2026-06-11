import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

import { site, tdClub } from "@/data"

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-wildcat-black/60">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md gold-gradient font-display text-lg font-bold text-wildcat-black">
              V
            </span>
            <span className="font-display text-lg font-bold">{site.teamName}</span>
          </a>

          <div className="flex items-center gap-5">
            {site.social.x && (
              <a href={site.social.x} target="_blank" rel="noreferrer" aria-label="X" className="text-muted-foreground hover:text-gold">
                <XMark className="h-5 w-5" />
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {site.social.facebook && (
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {site.social.youtube && (
              <a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-gold">
                <Youtube className="h-5 w-5" />
              </a>
            )}
            <a href={`mailto:${site.contactEmail}`} aria-label="Email" className="text-muted-foreground hover:text-gold">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="max-w-md text-sm text-muted-foreground">
            The source of all things Valdosta High Wildcats football. Go Cats!
          </p>

          <p className="text-xs text-muted-foreground">
            Valdosta Touchdown Club · {tdClub.mailingAddress}
          </p>

          <p className="text-xs text-muted-foreground">
            © {site.season} {site.teamName} Fan Site. An unofficial fan project — not
            affiliated with Valdosta High School or the Valdosta City School District.
          </p>
        </div>
      </div>
    </footer>
  )
}
