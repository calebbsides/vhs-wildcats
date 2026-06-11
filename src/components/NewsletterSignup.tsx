import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { site } from "@/data"

/**
 * Posts the email to whatever you configured in site.newsletterActionUrl.
 *
 * Works out of the box with:
 *  - Buttondown:  set newsletterActionUrl to your embed-subscribe endpoint.
 *  - Mailchimp:   set it to your list-manage subscribe/post URL (the field is
 *                 named "EMAIL" in Mailchimp, which is what we send below).
 *
 * Because these are external services with no CORS for JSON responses, we POST
 * with `no-cors` and optimistically show success. The provider sends the real
 * confirmation email. If no URL is configured, we link to email instead.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")
  const configured = Boolean(site.newsletterActionUrl)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !configured) return
    setStatus("loading")
    try {
      const body = new FormData()
      // Send both common field names so this works for Buttondown & Mailchimp.
      body.append("email", email)
      body.append("EMAIL", email)
      await fetch(site.newsletterActionUrl, {
        method: "POST",
        mode: "no-cors",
        body,
      })
    } catch {
      /* no-cors hides the response; we proceed optimistically */
    }
    setStatus("done")
    setEmail("")
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-wildcat-gold/20 bg-card p-8 sm:p-12">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-wildcat-gold/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full gold-gradient">
          <Mail className="h-6 w-6 text-wildcat-black" />
        </span>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Never Miss a Friday Night</h2>
        <p className="mt-3 text-muted-foreground">
          Get game reminders, score recaps, and Wildcats news delivered straight
          to your inbox. Free, and we'll never spam you.
        </p>

        {status === "done" ? (
          <div className="mt-8 flex items-center justify-center gap-2 rounded-lg border border-green-600/30 bg-green-600/10 px-4 py-4 text-green-400">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">You're on the list! Check your inbox to confirm.</span>
          </div>
        ) : configured ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="lg" disabled={status === "loading"}>
              {status === "loading" ? "Joining…" : "Sign Up"}
            </Button>
          </form>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-wildcat-gold/30 bg-background/40 p-5 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Newsletter not connected yet.</p>
            <p className="mt-1">
              Add your Mailchimp or Buttondown form URL in{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">src/data/site.ts</code>{" "}
              to turn this on. Until then, fans can{" "}
              <a className="text-gold underline" href={`mailto:${site.contactEmail}`}>
                email us
              </a>{" "}
              to subscribe.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
