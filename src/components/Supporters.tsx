import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { sponsors, donors, tdClub, type Donor, type Sponsor } from "@/data"

type Item =
  | { kind: "sponsor"; data: Sponsor }
  | { kind: "donor"; data: Donor }

function SponsorChip({ sponsor }: { sponsor: Sponsor }) {
  const content = sponsor.logo ? (
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      loading="lazy"
      className="h-10 w-auto object-contain"
    />
  ) : (
    <span className="font-display text-lg font-bold text-foreground">{sponsor.name}</span>
  )

  const inner = (
    <div className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-6 transition-colors hover:border-wildcat-gold/50">
      {content}
    </div>
  )

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noreferrer" aria-label={sponsor.name}>
      {inner}
    </a>
  ) : (
    inner
  )
}

function DonorChip({ donor }: { donor: Donor }) {
  return (
    <div className="flex h-16 items-center gap-2 rounded-xl border border-border bg-card px-6">
      <Heart className="h-4 w-4 shrink-0 text-gold" />
      <span className="whitespace-nowrap font-medium text-foreground">{donor.name}</span>
    </div>
  )
}

function Row({ items, ariaHidden }: { items: Item[]; ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-4 px-2" aria-hidden={ariaHidden}>
      {items.map((item, i) =>
        item.kind === "sponsor" ? (
          <SponsorChip key={`s-${i}`} sponsor={item.data} />
        ) : (
          <DonorChip key={`d-${i}`} donor={item.data} />
        )
      )}
    </div>
  )
}

export function Supporters() {
  // One combined marquee: sponsors first, then donors.
  const items: Item[] = [
    ...sponsors.map((data) => ({ kind: "sponsor" as const, data })),
    ...donors.map((data) => ({ kind: "donor" as const, data })),
  ]

  if (items.length === 0) return null

  // Slow the scroll down as the list grows so it stays readable.
  const duration = Math.max(30, items.length * 4)

  // Donations go to the TD Club's PayPal; fall back to the TD Club section.
  const donateUrl = tdClub.payment.paypalUsername
    ? `https://www.paypal.me/${tdClub.payment.paypalUsername}`
    : "#tdclub"
  const donateExternal = donateUrl.startsWith("http")

  return (
    <div className="space-y-6">
      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {/* Two identical rows; the track translates -50% for a seamless loop.
            Pauses on hover and for users who prefer reduced motion. */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          <Row items={items} />
          <Row items={items} ariaHidden />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button asChild size="lg" className="px-10 text-base">
          <a
            href={donateUrl}
            {...(donateExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </a>
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Every gift supports Valdosta Wildcats football.
        </p>
      </div>
    </div>
  )
}
