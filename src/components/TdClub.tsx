import { Check, CalendarClock } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DonateButton } from "@/components/DonateButton"
import { tdClub, type MembershipTier } from "@/data"

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
}

function TierCard({ tier }: { tier: MembershipTier }) {
  return (
    <Card
      className={`relative flex h-full flex-col overflow-hidden transition-all ${
        tier.featured
          ? "border-wildcat-gold ring-1 ring-wildcat-gold/40"
          : "hover:border-wildcat-gold/50"
      } ${tier.soldOut ? "opacity-70" : ""}`}
    >
      {tier.featured && (
        <div className="gold-gradient py-1 text-center text-xs font-bold uppercase tracking-widest text-wildcat-black">
          Most Popular
        </div>
      )}
      <CardContent className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-tight">{tier.name}</h3>
          {tier.soldOut && <Badge variant="loss">Sold Out</Badge>}
        </div>

        <p className="mt-2 font-display text-3xl font-bold text-gold-gradient">
          {money(tier.price)}
        </p>

        <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

        {tier.perks && tier.perks.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {tier.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        )}

        {tier.note && (
          <p className="mt-3 text-xs font-medium text-muted-foreground">{tier.note}</p>
        )}
      </CardContent>
    </Card>
  )
}

export function TdClub() {
  const { tiers, deadline } = tdClub

  return (
    <div className="space-y-8">
      {/* Deadline banner */}
      <div className="flex items-center justify-center gap-2 rounded-xl border border-wildcat-gold/30 bg-wildcat-gold/10 px-4 py-3 text-center">
        <CalendarClock className="h-5 w-5 shrink-0 text-gold" />
        <p className="text-sm font-semibold sm:text-base">
          Membership deadline: <span className="text-gold">{deadline}</span>
        </p>
      </div>

      {/* Tiers */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>

      {/* Join — opens the payment-methods modal */}
      <div className="flex flex-col items-center gap-2">
        <DonateButton label="Join Now" title="Join the TD Club" />
        <p className="text-center text-sm text-muted-foreground">
          Choose your tier above, then pick how you'd like to pay.
        </p>
      </div>
    </div>
  )
}
