import { useState } from "react"
import { Mail, CheckCircle2, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { site } from "@/data"

type Status = "idle" | "loading" | "done" | "error"

/**
 * Contact form. When a Web3Forms access key is configured (site.web3formsAccessKey),
 * submissions are POSTed to Web3Forms, which emails them to the team — no backend
 * required. If no key is set, we fall back to opening the visitor's email client
 * with a pre-filled mailto: message.
 *
 * Get a free key at https://web3forms.com (see src/data/content.ts → contact).
 */
export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const accessKey = site.web3formsAccessKey

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !message) return

    // No backend configured — hand off to the visitor's email client.
    if (!accessKey) {
      const subject = `Wildcats website message from ${name}`
      const body = `${message}\n\n— ${name}\n${email}`
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Wildcats website message from ${name}`,
          name,
          email,
          message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("done")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-wildcat-gold/20 bg-card p-8 sm:p-12">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-wildcat-gold/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full gold-gradient">
            <Mail className="h-6 w-6 text-wildcat-black" />
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground">
            Questions about the program, tickets, or sponsorship? Send us a
            message and we'll get back to you.
          </p>
        </div>

        {status === "done" ? (
          <div className="mt-8 flex items-center justify-center gap-2 rounded-lg border border-green-600/30 bg-green-600/10 px-4 py-4 text-green-400">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">Thanks! Your message has been sent.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <Input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              required
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-red-600/30 bg-red-600/10 px-3 py-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>
                  Something went wrong. Please try again, or email us at{" "}
                  <a className="underline" href={`mailto:${site.contactEmail}`}>
                    {site.contactEmail}
                  </a>
                  .
                </span>
              </div>
            )}

            <Button type="submit" size="lg" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
