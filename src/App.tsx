import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { Scoreboard } from "@/components/Scoreboard"
import { Tickets } from "@/components/Tickets"
import { VideoMontage } from "@/components/VideoMontage"
import { Roster } from "@/components/Roster"
import { Coaches } from "@/components/Coaches"
import { TdClub } from "@/components/TdClub"
import { SocialFeed } from "@/components/SocialFeed"
import { tdClub } from "@/data"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="scores"
          eyebrow="On the Field"
          title="Last Game & Scores"
          description="The latest result and everything still ahead this season."
          className="bg-wildcat-charcoal/30"
        >
          <Scoreboard />
        </Section>

        <Section
          id="tickets"
          eyebrow="Game Day"
          title="Buy Tickets"
          description="Grab your seats for every Friday night under the lights."
        >
          <Tickets />
        </Section>

        <Section
          id="video"
          eyebrow="Film Room"
          title="Video Montage"
          description="Relive the biggest plays and the loudest Friday nights."
          className="bg-wildcat-charcoal/30"
        >
          <VideoMontage />
        </Section>

        <Section
          id="tdclub"
          eyebrow="Touchdown Club"
          title={`${tdClub.year} Membership & Parking`}
          description="Join the Valdosta TD Club to support the program and lock in your season parking and seats."
        >
          <TdClub />
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
          id="coaches"
          eyebrow="The Sideline"
          title="Coaching Staff"
          description="The leaders steering the program week to week."
        >
          <Coaches />
        </Section>

        <Section
          id="social"
          eyebrow="Stay Connected"
          title="From the Pride"
          description="The latest from our official channels."
          className="bg-wildcat-charcoal/30"
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
