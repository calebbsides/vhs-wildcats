import type { SiteConfig } from "./types"

/**
 * Top-level site settings. Update the record after each game, drop in your real
 * social handles, and paste your Mailchimp/Buttondown form action URL.
 */
export const site: SiteConfig = {
  teamName: "Valdosta Wildcats",
  shortName: "Wildcats",
  tagline: "Winnersville, USA",
  season: "2025",
  record: { wins: 0, losses: 0, ties: 0 },
  social: {
    x: "https://x.com/ValdostaFB",
    instagram: "https://instagram.com/valdostawildcatsfootball",
    facebook: "https://facebook.com/ValdostaWildcatsFootball",
    youtube: "https://youtube.com/@valdostawildcats",
  },
  contactEmail: "wildcats@example.com",
  // TODO: replace with your real Mailchimp/Buttondown form action URL.
  // Buttondown example: "https://buttondown.email/api/emails/embed-subscribe/your-handle"
  // Mailchimp example:  "https://yourlist.us21.list-manage.com/subscribe/post?u=XXXX&id=YYYY"
  newsletterActionUrl: "",
}
