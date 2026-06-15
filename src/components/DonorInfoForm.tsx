import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { site } from "@/data"

export type DonorInfo = {
  name: string
  email: string
  address: string
}

/**
 * Collects the donor's name, email, and mailing address. We require this before
 * revealing any payment method so every gift can be acknowledged and receipted.
 *
 * On submit the details are emailed to the club via Web3Forms (same access key as
 * the Contact form, set in src/data/content.ts → contact). `onSubmit` is only
 * called (advancing to the payment step) once that send succeeds. If no key is
 * configured we skip the send and advance anyway, so the flow still works locally.
 */
export function DonorInfoForm({ onSubmit }: { onSubmit: (info: DonorInfo) => void }) {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [submitting, setSubmitting] = React.useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting) return

    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      address: address.trim(),
    }

    if (!trimmed.name || !trimmed.email || !trimmed.address) {
      setError("Please fill in your name, email, and mailing address.")
      return
    }
    // Basic shape check so we don't capture obviously invalid emails.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      setError("Please enter a valid email address.")
      return
    }

    setError(null)

    // No key configured (e.g. local dev) — skip the send so the flow still works.
    if (!site.web3formsAccessKey) {
      onSubmit(trimmed)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          subject: "New Wildcats donor",
          from_name: "VHS Wildcats Donations",
          name: trimmed.name,
          email: trimmed.email,
          address: trimmed.address,
        }),
      })
      const data = (await res.json()) as { success?: boolean }
      if (!res.ok || !data.success) {
        throw new Error("submit failed")
      }
      onSubmit(trimmed)
    } catch {
      setError("Something went wrong sending your info. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-md gap-4">
      <p className="text-sm text-muted-foreground">
        Tell us where to send your receipt and acknowledgment, then we'll show you how to give.
      </p>

      <div className="grid gap-1.5">
        <label htmlFor="donor-name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Full Name
        </label>
        <Input
          id="donor-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          required
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="donor-email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Email
        </label>
        <Input
          id="donor-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          required
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="donor-address" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Mailing Address
        </label>
        <Input
          id="donor-address"
          name="address"
          autoComplete="street-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Main St, Valdosta, GA 31601"
          required
        />
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}

      <Button type="submit" size="lg" className="mt-1" disabled={submitting}>
        {submitting ? "Sending…" : "Continue to Payment"}
      </Button>
    </form>
  )
}
