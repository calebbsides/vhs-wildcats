import { UtensilsCrossed } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { DonateButton } from "@/components/DonateButton"
import { content } from "@/data"

export function FeedTheCats() {
  const paragraphs = content.feedTheCats.paragraphs

  return (
    <div className="mx-auto max-w-3xl">
      <Card className="relative overflow-hidden border-wildcat-gold/20">
        <div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-wildcat-gold/10 blur-3xl"
          aria-hidden
        />
        <CardContent className="relative p-6 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full gold-gradient">
              <UtensilsCrossed className="h-7 w-7 text-wildcat-black" />
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Touchdown Club Initiative
            </p>
          </div>

          <div className="mt-6 space-y-5 leading-relaxed text-foreground/90">
            {paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "text-lg" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <DonateButton label="Support Feed the Cats" title="Support Feed the Cats" />
            <p className="text-center text-sm text-muted-foreground">
              Help fuel the Wildcats on and off the field.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
