import { Mail, MessageSquare } from "lucide-react"

import { tdClub } from "@/data"

/** Cash App glyph (lucide has no brand marks). */
function CashAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.3 2c1.6 0 3.2.6 4.4 1.6l.2.2-1.8 1.9-.2-.2a4.6 4.6 0 0 0-2.9-1c-1 0-1.8.4-1.8 1.2 0 .8.8 1.1 2.5 1.7 2.3.8 4.2 1.8 4.2 4.2 0 2.4-1.8 3.8-4.2 4.1l-.2 1.9a.6.6 0 0 1-.6.5h-1.6a.4.4 0 0 1-.4-.5l.2-1.9A6.7 6.7 0 0 1 7 15.7l-.2-.2 1.9-1.9.2.2c.9.8 2 1.3 3.2 1.3 1.3 0 2.1-.5 2.1-1.3 0-.8-.7-1.1-2.6-1.8-2-.7-4-1.7-4-4 0-2.3 1.7-3.7 4-4l.2-1.8a.6.6 0 0 1 .6-.5h1.6a.4.4 0 0 1 .4.5L14.4 4Z" />
    </svg>
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

/**
 * The four ways to pay/donate (PayPal, Cash App, Venmo, Mail a Check) plus the
 * payment instructions and help contacts. Shared by the TD Club section and the
 * Donate modal so there's one source of truth.
 */
export function PaymentMethods({ showInstructions = true }: { showInstructions?: boolean }) {
  const { payment, mailingAddress, helpEmail, helpPhone, paymentInstructions } = tdClub

  return (
    <div>
      {showInstructions && paymentInstructions && (
        <p className="mx-auto mb-5 max-w-xl text-center text-sm text-muted-foreground">
          {paymentInstructions}
        </p>
      )}

      <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
        {(payment.paypalUsername || payment.paypalEmail) && (
          <PaymentRow
            label="PayPal"
            value={payment.paypalUsername ? `@${payment.paypalUsername}` : payment.paypalEmail!}
            href={
              payment.paypalUsername
                ? `https://www.paypal.me/${payment.paypalUsername}`
                : undefined
            }
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
    </div>
  )
}
