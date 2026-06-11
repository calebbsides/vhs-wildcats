import { Check, CalendarClock, Mail, MessageSquare } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { tdClub, type MembershipTier } from "@/data"

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
}

/** Small SVG marks for the payment methods (lucide has no brand glyphs). */
function CashAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.3 2c1.6 0 3.2.6 4.4 1.6l.2.2-1.8 1.9-.2-.2a4.6 4.6 0 0 0-2.9-1c-1 0-1.8.4-1.8 1.2 0 .8.8 1.1 2.5 1.7 2.3.8 4.2 1.8 4.2 4.2 0 2.4-1.8 3.8-4.2 4.1l-.2 1.9a.6.6 0 0 1-.6.5h-1.6a.4.4 0 0 1-.4-.5l.2-1.9A6.7 6.7 0 0 1 7 15.7l-.2-.2 1.9-1.9.2.2c.9.8 2 1.3 3.2 1.3 1.3 0 2.1-.5 2.1-1.3 0-.8-.7-1.1-2.6-1.8-2-.7-4-1.7-4-4 0-2.3 1.7-3.7 4-4l.2-1.8a.6.6 0 0 1 .6-.5h1.6a.4.4 0 0 1 .4.5L14.4 4Z" />
    </svg>
  )
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
  const { tiers, payment, deadline, mailingAddress, helpEmail, helpPhone, paymentInstructions } =
    tdClub

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

      {/* How to join / payment */}
      <Card className="border-wildcat-gold/20">
        <CardContent className="p-6 sm:p-8">
          <h3 className="text-center text-xl font-bold sm:text-2xl">How to Join</h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            {paymentInstructions}
          </p>

          <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            {payment.paypalEmail && (
              <PaymentRow
                label="PayPal"
                value={payment.paypalEmail}
                icon={<span className="font-bold italic text-[#0070ba]">P</span>}
              />
            )}
            {payment.cashApp && (
              <PaymentRow
                label="Cash App"
                value={payment.cashApp}
                href={`https://cash.app/${payment.cashApp}`}
                icon={<CashAppMark className="h-4 w-4 text-[#00d632]" />}
              />
            )}
            {payment.venmo && (
              <PaymentRow
                label="Venmo"
                value={payment.venmo}
                href={`https://venmo.com/${payment.venmo.replace(/^@/, "")}`}
                icon={<span className="font-bold text-[#008cff]">V</span>}
              />
            )}
            <PaymentRow
              label="Mail a Check"
              value={mailingAddress}
              icon={<Mail className="h-4 w-4 text-gold" />}
            />
          </div>

          {payment.paypalUrl && (
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg">
                <a href={payment.paypalUrl} target="_blank" rel="noreferrer">
                  Join Online
                </a>
              </Button>
            </div>
          )}

          {(helpEmail || helpPhone) && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
              {helpEmail && (
                <a
                  href={`mailto:${helpEmail}`}
                  className="inline-flex items-center gap-1.5 hover:text-gold"
                >
                  <Mail className="h-4 w-4" /> {helpEmail}
                </a>
              )}
              {helpPhone && (
                <a
                  href={`sms:${helpPhone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-1.5 hover:text-gold"
                >
                  <MessageSquare className="h-4 w-4" /> Text {helpPhone}
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function PaymentRow({
  label,
  value,
  href,
  icon,
}: {
  label: string
  value: string
  href?: string
  icon: React.ReactNode
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-background/40 p-3 transition-colors group-hover:border-wildcat-gold/40">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      {inner}
    </a>
  ) : (
    <div className="group">{inner}</div>
  )
}
