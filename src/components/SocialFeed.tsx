import { Facebook, Instagram, ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { socialPosts, site, type SocialPost } from "@/data"

/** Lucide has no X/Twitter glyph; small inline mark. */
function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const iconFor = {
  x: XMark,
  instagram: Instagram,
  facebook: Facebook,
}

function PostCard({ post }: { post: SocialPost }) {
  const Icon = iconFor[post.platform]
  return (
    <a href={post.url} target="_blank" rel="noreferrer" className="group block">
      <Card className="h-full transition-all group-hover:border-wildcat-gold/50">
        <CardContent className="flex h-full flex-col p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-gold">
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{post.author}</p>
              <p className="truncate text-xs text-muted-foreground">{post.handle}</p>
            </div>
            <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
          </div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">{post.body}</p>
          <p className="mt-4 text-xs text-muted-foreground">{post.date}</p>
        </CardContent>
      </Card>
    </a>
  )
}

export function SocialFeed() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socialPosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {site.social.x && (
          <a href={site.social.x} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
            <XMark className="h-4 w-4" /> Follow on X
          </a>
        )}
        {site.social.instagram && (
          <a href={site.social.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        )}
        {site.social.facebook && (
          <a href={site.social.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        )}
      </div>
    </div>
  )
}
