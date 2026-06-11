import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { Countdown } from "@/components/Countdown"
import { Scoreboard } from "@/components/Scoreboard"
import { VideoMontage } from "@/components/VideoMontage"
import { Roster } from "@/components/Roster"
import { SocialFeed } from "@/components/SocialFeed"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="next-game"
          eyebrow="Mark Your Calendar"
          title="Countdown to Kickoff"
          description="The clock is ticking down to the next time the Cats take the field."
        >
          <div className="mx-auto max-w-4xl">
            <Countdown />
          </div>
        </Section>

        <Section
          id="scores"
          eyebrow="On the Field"
          title="The Scoreboard"
          description="Every result and what's still ahead this season."
          className="bg-wildcat-charcoal/30"
        >
          <Scoreboard />
        </Section>

        <Section
          id="video"
          eyebrow="Film Room"
          title="Video Montage"
          description="Relive the biggest plays and the loudest Friday nights."
        >
          <VideoMontage />
        </Section>

        <Section
          id="roster"
          eyebrow="The Squad"
          title="Meet the Wildcats"
          description="The players carrying on the Winnersville tradition."
          className="bg-wildcat-charcoal/30"
        >
          <Roster />
        </Section>

        <Section
          id="social"
          eyebrow="Stay Connected"
          title="From the Pride"
          description="The latest from our official channels."
        >
          <SocialFeed />
        </Section>

        <Section id="newsletter" title="Join the Wildcats Faithful" className="bg-wildcat-charcoal/30">
          <div className="mx-auto max-w-3xl">
            <NewsletterSignup />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
