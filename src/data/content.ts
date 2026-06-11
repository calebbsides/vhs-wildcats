/* ===========================================================================
 *  VALDOSTA WILDCATS — SITE CONTENT
 * ===========================================================================
 *
 *  👋 START HERE. This is the ONE file you edit to keep the website current.
 *  Everything that changes during the season lives here: the schedule, scores,
 *  roster, coaches, videos, donors, sponsors, ticket links, and membership info.
 *
 *  HOW TO EDIT — the rules (please read once):
 *
 *   1. Only change text BETWEEN the "quotation marks".  Example:
 *          name: "Howard"        ✅  change Howard to a new name
 *          name:                 ❌  don't touch the word before the colon
 *
 *   2. Keep every comma. Each line inside { } or [ ] ends with a comma.
 *          { number: 7, name: "Jaylen Smith", position: "QB", grade: "SR" },
 *                                                                         ↑ keep it
 *
 *   3. To ADD an entry, copy a whole existing line (or { ... } block),
 *      paste it right below, and change the values.
 *
 *   4. To REMOVE an entry, delete its whole line or { ... } block
 *      (including its trailing comma).
 *
 *   5. true / false and plain numbers are NOT in quotes. Leave them as-is
 *      unless you're flipping a true/false or changing a price/number.
 *
 *   6. After editing, save the file and redeploy (or ask your developer to).
 *      If you make a typo, the site build will fail loudly instead of going
 *      live broken — that's a safety net, not a bug.
 *
 *  Each section below has its own comment explaining what it controls.
 * ======================================================================== */

export const content = {
  /* -------------------------------------------------------------------------
   *  TEAM & CONTACT
   *  Basic info used in a few places (footer, contact links, page year).
   * ---------------------------------------------------------------------- */
  team: {
    // The season year shown around the site, e.g. "2026".
    season: "2026",
    // Email people can use to contact the program.
    contactEmail: "hlpye@outlook.com",
    // The team's official Facebook page (the only social account we link to).
    facebookUrl: "https://www.facebook.com/24VHSFootball",
  },

  /* -------------------------------------------------------------------------
   *  TICKETS
   *  The GoFan link where fans buy tickets to home games.
   * ---------------------------------------------------------------------- */
  tickets: {
    // Paste the team's GoFan store URL. Leave "" to show a "coming soon" note.
    gofanUrl: "https://gofan.co/app/school/GA7328",
  },

  // Live-stream link (NFHS Network). Shows a "Watch Live" button on the
  // next-game countdown. Leave "" to hide that button.
  watchLiveUrl:
    "https://www.nfhsnetwork.com/schools/valdosta-high-school-valdosta-ga/football",

  /* -------------------------------------------------------------------------
   *  NEWSLETTER
   *  Where email sign-ups are sent. Leave "" until you have a provider; the
   *  form then shows a friendly "email us instead" message.
   * ---------------------------------------------------------------------- */
  newsletter: {
    // Mailchimp or Buttondown form action URL. Examples:
    //   Buttondown: "https://buttondown.email/api/emails/embed-subscribe/your-handle"
    //   Mailchimp:  "https://yourlist.us21.list-manage.com/subscribe/post?u=XXXX&id=YYYY"
    signupUrl: "",
  },

  /* -------------------------------------------------------------------------
   *  FEED THE CATS
   *  The "Feed the Cats" outreach blurb. Each "..." in the list is one
   *  paragraph. Edit the text between the quotes; add or remove paragraphs
   *  by adding/removing lines (keep the comma at the end of each).
   * ---------------------------------------------------------------------- */
  feedTheCats: {
    paragraphs: [
      "Feed the Cats is a Valdosta Wildcats Touchdown Club initiative dedicated to supporting the nutritional needs of Wildcat football players throughout the year. The program allows alumni, fans, families, and community partners to directly invest in the student-athlete experience by helping provide meals and support for the team.",
      "As Valdosta football has evolved, so have the needs of its student-athletes. Feed the Cats was created to give supporters a focused way to contribute to player wellness and development while continuing the Touchdown Club’s long-standing mission of supporting the Wildcat football program.",
      "Through volunteer efforts, community partnerships, and dedicated sponsorships, Feed the Cats helps ensure that Wildcat players have the resources needed to compete, learn, and represent Valdosta High School at the highest level. Today, Feed the Cats stands as another example of the community’s commitment to the tradition, excellence, and future of Valdosta football.",
    ],
  },

  /* -------------------------------------------------------------------------
   *  SCHEDULE & SCORES   ← edit this every week during the season
   *
   *  Each game is one { ... } block. Fields:
   *    opponent : the other team's name.            (required)
   *    date     : the game date as "YYYY-MM-DD".    (required)
   *    time     : kickoff like "8:00 PM". Use "TBD" if unknown.
   *    where    : "home", "away", or "neutral".     (required)
   *    venue    : stadium / location name.          (required)
   *    label    : optional badge, e.g. "Homecoming", "Senior Night", "Region".
   *    scrimmage: true only for preseason scrimmages (kept off the W/L record).
   *
   *  ➕ ADD A SCORE after a game is played:
   *     Every game already has a grey "result" line, turned off with two
   *     slashes (//) at the front. To post the final score:
   *
   *       1. Find the game and delete the "// " at the start of its result line:
   *
   *            // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
   *          becomes
   *               result: { wildcats: 28, opponent: 21, recap: "Cats hold on late." },
   *
   *       2. Change the two numbers: `wildcats` = our score, `opponent` = theirs.
   *       3. Change the recap text (or delete `, recap: "..."` to skip it).
   *       4. Keep the comma at the very end of the line.
   *
   *     The win/loss record, scoreboard, and "next game" update automatically.
   *     To hide a score again, just put the "// " back at the front of the line.
   *
   *  Note on times: the site shows them in Eastern time. Just type the local
   *  kickoff time (e.g. "8:00 PM") — the system handles the rest.
   * ---------------------------------------------------------------------- */
  schedule: [
    {
      opponent: "Worth County",
      date: "2026-08-07",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      label: "Scrimmage",
      scrimmage: true,
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Jones County",
      date: "2026-08-21",
      time: "8:00 PM",
      where: "away",
      venue: "Gray, GA",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Howard",
      date: "2026-08-28",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Bradwell Institute",
      date: "2026-09-04",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "KIPP Atlanta Collegiate",
      date: "2026-09-11",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      label: "Homecoming",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Stockbridge",
      date: "2026-09-25",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Booker High (Sarasota, FL)",
      date: "2026-10-02",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Colquitt County",
      date: "2026-10-16",
      time: "8:00 PM",
      where: "away",
      venue: "Mack Tharpe Stadium",
      label: "Region",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Camden County",
      date: "2026-10-23",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      label: "Region",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Lowndes County",
      date: "2026-10-30",
      time: "8:00 PM",
      where: "away",
      venue: "Martin Stadium",
      label: "Winnersville Classic",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
    {
      opponent: "Richmond Hill",
      date: "2026-11-06",
      time: "8:00 PM",
      where: "home",
      venue: "Cleveland Field at Bazemore-Hyder Stadium",
      label: "Senior Night",
      // result: { wildcats: 0, opponent: 0, recap: "Short game recap here." },
    },
  ],

  /* -------------------------------------------------------------------------
   *  ROSTER
   *
   *  One line per player:
   *    number   : jersey number.                    (required)
   *    name     : player name.                      (required)
   *    position : "QB", "RB", "WR", "LB", etc.      (required)
   *    grade    : "FR", "SO", "JR", or "SR".        (required)
   *    heightIn : height in TOTAL inches (e.g. 6'2" = 74). Optional.
   *    weightLb : weight in pounds. Optional.
   *
   *  ⚠️ The names below are PLACEHOLDERS — replace them with the real roster.
   * ---------------------------------------------------------------------- */
  roster: [
    { number: 1, name: "Marcus Bell", position: "WR", grade: "SR", heightIn: 72, weightLb: 180 },
    { number: 3, name: "Jaylen Carter", position: "QB", grade: "JR", heightIn: 74, weightLb: 195 },
    { number: 7, name: "Deon Hughes", position: "CB", grade: "SR", heightIn: 71, weightLb: 175 },
    { number: 11, name: "Tyree Sims", position: "WR", grade: "SO", heightIn: 70, weightLb: 165 },
    { number: 21, name: "Andre Wallace", position: "RB", grade: "SR", heightIn: 70, weightLb: 205 },
    { number: 24, name: "Chris Daniels", position: "S", grade: "JR", heightIn: 72, weightLb: 190 },
    { number: 32, name: "Malik Turner", position: "LB", grade: "SR", heightIn: 73, weightLb: 220 },
    { number: 44, name: "Brandon Lee", position: "LB", grade: "JR", heightIn: 72, weightLb: 225 },
    { number: 55, name: "Isaiah Ford", position: "OL", grade: "SR", heightIn: 76, weightLb: 285 },
    { number: 66, name: "Cam Roberts", position: "OL", grade: "JR", heightIn: 75, weightLb: 295 },
    { number: 72, name: "Devin Pratt", position: "DL", grade: "SR", heightIn: 75, weightLb: 275 },
    { number: 88, name: "Xavier Greene", position: "TE", grade: "SO", heightIn: 77, weightLb: 230 },
  ],

  /* -------------------------------------------------------------------------
   *  COACHES
   *
   *  One block per coach:
   *    name  : coach's name.                                  (required)
   *    title : role, e.g. "Head Coach", "Offensive Coordinator".  (required)
   *    head  : true for the HEAD coach only (gets the big featured card).
   *    units : optional tags shown on the card, e.g. ["Offense"].
   *    bio   : optional short paragraph (mainly for the head coach).
   *
   *  ⚠️ Only the head coach is confirmed; the assistants are PLACEHOLDERS.
   * ---------------------------------------------------------------------- */
  coaches: [
    {
      name: "Shelton Felton",
      title: "Head Coach",
      head: true,
      units: ["Program"],
      bio: "Leading the most storied program in high school football — 976-265-34 all-time (.779) with 6 national, 24 state, and 43 region championships since 1913.",
    },
    { name: "Coach Name", title: "Offensive Coordinator", units: ["Offense", "Quarterbacks"] },
    { name: "Coach Name", title: "Defensive Coordinator", units: ["Defense", "Linebackers"] },
    { name: "Coach Name", title: "Special Teams Coordinator", units: ["Special Teams"] },
    { name: "Coach Name", title: "Wide Receivers", units: ["Offense"] },
    { name: "Coach Name", title: "Offensive Line", units: ["Offense"] },
    { name: "Coach Name", title: "Defensive Backs", units: ["Defense"] },
    { name: "Coach Name", title: "Strength & Conditioning" },
  ],

  /* -------------------------------------------------------------------------
   *  VIDEOS (the film reel)
   *
   *  One line per video. The FIRST video is the big featured one at the top.
   *    title     : what the video is called.                 (required)
   *    youtubeId : the code after "v=" in a YouTube link.    (required)
   *                Example: for youtube.com/watch?v=AbC123xyz  → "AbC123xyz"
   *    date      : optional label like "Sep 2026".
   *
   *  ⚠️ The youtubeId below is a placeholder — replace with real video codes.
   * ---------------------------------------------------------------------- */
  videos: [
    { title: "2026 Season Hype", youtubeId: "dQw4w9WgXcQ", date: "Aug 2026" },
    { title: "Winnersville Classic Highlights", youtubeId: "dQw4w9WgXcQ", date: "Aug 2026" },
    { title: "Friday Night Under the Lights", youtubeId: "dQw4w9WgXcQ", date: "Sep 2026" },
    { title: "Defense Sets the Tone", youtubeId: "dQw4w9WgXcQ", date: "Sep 2026" },
  ],

  /* -------------------------------------------------------------------------
   *  DONORS & SPONSORS (the scrolling thank-you wall)
   *
   *  SPONSORS = businesses. One line each:
   *    name : company name.                                   (required)
   *    logo : optional image path. Put the image in the "public/sponsors"
   *           folder and write "/sponsors/filename.png". No logo = name shown.
   *    url  : optional company website link.
   *
   *  DONORS = individuals / families. Just a name each.
   *
   *  ⚠️ The entries below are PLACEHOLDERS — replace with real supporters.
   * ---------------------------------------------------------------------- */
  sponsors: [
    { name: "Sample Sponsor Co." },
    { name: "Winnersville Auto Group" },
    { name: "South Georgia Bank" },
    { name: "Azalea City Diner" },
    { name: "Lowndes Hardware" },
    { name: "Bazemore Insurance" },
  ],
  donors: [
    { name: "The Smith Family" },
    { name: "John & Jane Doe" },
    { name: "Coach B." },
    { name: "Class of 1998" },
    { name: "The Johnson Family" },
    { name: "A Proud Wildcat Fan" },
    { name: "The Williams Family" },
    { name: "Booster Club Member" },
  ],

  /* -------------------------------------------------------------------------
   *  TOUCHDOWN (TD) CLUB — membership, parking & payment
   *
   *  deadline : membership deadline shown in the banner, e.g. "July 1".
   *
   *  tiers : each membership/parking option. One block each:
   *    name        : tier name.                               (required)
   *    price       : dollar amount, NO "$" and NO commas (e.g. 1000). (required)
   *    description : what's included.                         (required)
   *    perks       : optional bullet list of perks.
   *    featured    : true to highlight ONE tier as "Most Popular".
   *    soldOut     : true to mark a tier sold out (greys it + badge).
   *    note        : optional small note under the card.
   *
   *  payment : how people pay. Update handles if they change.
   *  Donate / Pay buttons use the PayPal username below.
   * ---------------------------------------------------------------------- */
  tdClub: {
    deadline: "July 1",
    tiers: [
      {
        name: "Family Membership",
        price: 50,
        description: "Membership for up to 5 people in the same household.",
      },
      {
        name: "B Parking",
        price: 100,
        description: "First come, first serve.",
      },
      {
        name: "A Parking",
        price: 200,
        description: "Premium lot parking.",
        soldOut: true,
        note: "Sold out — only those with passes last year are eligible.",
      },
      {
        name: "Silver Membership",
        price: 250,
        description: "Membership, B Parking, 1 season seat.",
        perks: ["Membership", "B Parking", "1 season seat"],
      },
      {
        name: "Gold Membership",
        price: 500,
        description: "Membership, B Parking, 2 season seats.",
        perks: ["Membership", "B Parking", "2 season seats"],
        featured: true,
      },
      {
        name: "Platinum Membership",
        price: 1000,
        description:
          "Membership, A Parking (or B if A is full), 2 season seats, and weekly lunch with the coach!",
        perks: [
          "Membership",
          "A Parking (or B if A is full)",
          "2 season seats",
          "Weekly lunch with the coach",
        ],
      },
    ],
    payment: {
      paypalEmail: "valdostatouchdownclub@gmail.com",
      // PayPal.Me username WITHOUT the @ (used by the Donate & PayPal buttons).
      paypalUsername: "vhswildcatfootball",
      cashApp: "$ValdostaTDclub",
      venmo: "@ValdostaTouchdown-Club",
    },
    mailingAddress: "P.O. Box 794, Valdosta, GA 31603",
    helpEmail: "hlpye@outlook.com",
    helpPhone: "229-343-8907",
    paymentInstructions:
      "Submit payment and include your NAME and the ADDRESS to mail your passes to in the notes.",
  },
} as const
