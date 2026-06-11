import { Facebook, Mail } from "lucide-react"

import { site, tdClub } from "@/data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-wildcat-black/60">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Valdosta Wildcats"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <span className="font-display text-lg font-bold">{site.teamName}</span>
          </a>

          <div className="flex items-center gap-5">
            {site.social.facebook && (
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-gold">
                <Facebook className="h-5 w-5" />
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
