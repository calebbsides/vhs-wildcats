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
    contactEmail: "valdostatouchdownclub@gmail.com",
    // The team's official Facebook page (the only social account we link to).
    facebookUrl: "https://www.facebook.com/24VHSFootball",
  },

  /* -------------------------------------------------------------------------
   *  CONTACT FORM
   *  The "Contact Us" section uses Web3Forms (free) to deliver messages to the
   *  team's inbox — no server required. To turn it on:
   *    1. Go to https://web3forms.com, enter the contactEmail above, and click
   *       "Create Access Key". They email you a key (a long code like
   *       "a1b2c3d4-...").
   *    2. Paste that key between the quotes below and redeploy.
   *  Leave "" until you have a key — the form then falls back to opening the
   *  visitor's email app instead.
   * ---------------------------------------------------------------------- */
  contact: {
    web3formsAccessKey: "88d798cc-74e9-4cf1-818c-c9d06e24236b",
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
      result: { wildcats: 45, opponent: 7, recap: "Valdosta High School hosted Worth County High School in a preseason football scrimmage on Friday, August 7, 2026, at Bazemore-Hyder Stadium. The matchup gave both programs an early opportunity to evaluate players, test schemes, and build game-ready chemistry before the regular season. Kickoff was scheduled for 8:00 p.m., with the Wildcats welcoming the Rams to one of Georgia high school football’s most historic venues." },
    },
    {
      opponent: "Jones County",
      date: "2026-08-21",
      time: "8:00 PM",
      where: "away",
      venue: "Gray, GA",
      result: { wildcats: 52, opponent: 14, recap: "Valdosta opened the 2026 football season in emphatic fashion Friday night, rolling past Jones County 52–14 on the road. The Wildcats’ offense set the tone early and maintained control throughout, turning the season opener into a decisive statement win against a Greyhounds team coming off a six-win season." },
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
     { number: 0, name: "Bralyn Bennett", position: "OLB, DE", grade: "SR", heightIn: 74, weightLb: 225 },
     { number: 1, name: "Jamarian Mingo", position: "WR,CB", grade: "SR", heightIn: 74, weightLb: 180 },
     { number: 2, name: "Lamar Thomas Jr.", position: "QB", grade: "SO", heightIn: 70, weightLb: 190 },
     { number: 2, name: "Ladarrius McIntyre", position: "DB,SS", grade: "SR", heightIn: 73, weightLb: 175 },
     { number: 3, name: "Chris Daniels", position: "ATH", grade: "SR", heightIn: 68, weightLb: 155 },
     { number: 4, name: "Marquis Fennell", position: "RB, WR", grade: "SR", heightIn: 69, weightLb: 180 },
     { number: 5, name: "Ja'Davious Lemene", position: "LB", grade: "SR", heightIn: 74, weightLb: 225 },
     { number: 5, name: "Deron Foster", position: "RB", grade: "SR", heightIn: 69, weightLb: 185 },
     { number: 6, name: "Ky'rei Turner", position: "TE", grade: "SO", heightIn: 75, weightLb: 240 },
     { number: 7, name: "Jahtavis Dennard", position: "FS, SS", grade: "SO", heightIn: 72, weightLb: 143 },
     { number: 7, name: "Quincy Hunt", position: "RB, DB", grade: "SO", heightIn: 70, weightLb: 180 },
     { number: 8, name: "AJ Hill", position: "DB", grade: "SR", heightIn: 73, weightLb: 180 },
     { number: 8, name: "Kamari Dawson", position: "WR", grade: "SR", heightIn: 73, weightLb: 180 },
     { number: 9, name: "Kaden Holmes", position: "DL", grade: "SR", heightIn: 73, weightLb: 230 },
     { number: 10, name: "William Moseley", position: "LS, P", grade: "SR", heightIn: 72, weightLb: 180 },
     { number: 10, name: "Jordin Foster", position: "DL", grade: "JR", heightIn: 71, weightLb: 255 },
     { number: 11, name: "Tripp Perry", position: "QB", grade: "SR", heightIn: 73, weightLb: 180 },
     { number: 11, name: "Brennan Lampkin", position: "DL", grade: "SO", heightIn: 70, weightLb: 280 },
     { number: 12, name: "Alanns Garcia", position: "K", grade: "SO" },
     { number: 12, name: "Jeffrey Blue", position: "DB", grade: "SR", heightIn: 70, weightLb: 155 },
     { number: 13, name: "Dayquan Duncan", position: "FS, SS", grade: "JR", heightIn: 70, weightLb: 165 },
     { number: 13, name: "Parks Broadfoot", position: "QB", grade: "SO", heightIn: 70, weightLb: 175 }, 
     { number: 14, name: "Kendall McCormick", position: "WR, DB", grade: "JR", heightIn: 68, weightLb: 150 },
     { number: 15, name: "Standley Jean", position: "WR", grade: "JR", heightIn: 70, weightLb: 180 },
     { number: 16, name: "Le'Antwon Harrell", position: "WR", grade: "SR", heightIn: 74, weightLb: 170 },
     { number: 17, name: "Octavious Dubose", position: "WR", grade: "SO", heightIn: 65, weightLb: 125 },
     { number: 17, name: "Brandon Rayford", position: "DT, TE", grade: "SR", heightIn: 71, weightLb: 265 },
     { number: 18, name: "Braylon Cox", position: "WR", grade: "SO", heightIn: 71, weightLb: 160 },
     { number: 19, name: "Dashun Core", position: "LB", grade: "SO", heightIn: 73, weightLb: 180 },
     { number: 20, name: "Jamari Smith", position: "LB", grade: "JR", heightIn: 68, weightLb: 190 },
     { number: 21, name: "Miguel Henson", position: "DB", grade: "SO", heightIn: 72, weightLb: 170 },
     { number: 22, name: "Trenton McCoy", position: "WR", grade: "SO", heightIn: 71, weightLb: 165 },
     { number: 22, name: "Micah Robinson", position: "DB", grade: "JR", heightIn: 74, weightLb: 155 },
     { number: 24, name: "Ar'zarie Thomas", position: "LB", grade: "SO", heightIn: 72, weightLb: 195 },
     { number: 25, name: "Fredrick Poole", position: "LB", grade: "SO", heightIn: 74, weightLb: 195 },
     { number: 26, name: "Isaiah Langston", position: "LB", grade: "SO", heightIn: 69, weightLb: 180 },
     { number: 27, name: "Kyle Way", position: "DB", grade: "SR", heightIn: 69, weightLb: 150 },
     { number: 28, name: "Jah'tavis Dennard", position: "ATH", grade: "SO", heightIn: 70, weightLb: 150 },
     { number: 29, name: "Rod Ford", position: "DB, FS", grade: "SR", heightIn: 67, weightLb: 155 },
     { number: 30, name: "Lajavion Jones", position: "WR", grade: "SO", heightIn: 67, weightLb: 135 },
     { number: 31, name: "Caden Baker", position: "DB, WR", grade: "SO", heightIn: 66, weightLb: 140 },
     { number: 32, name: "Malachi Goldwire", position: "DB", grade: "JR", heightIn: 74, weightLb: 170 },
     { number: 32, name: "Brinson Sligh", position: "RB", grade: "JR", heightIn: 70, weightLb: 165 },
     { number: 33, name: "Nahki Keeley", position: "DB", grade: "SO", heightIn: 67, weightLb: 135 },
     { number: 34, name: "Jasean Abbott", position: "RB", grade: "JR", heightIn: 70, weightLb: 170 },
     { number: 35, name: "Cedric Bell", position: "DB", grade: "JR", heightIn: 70, weightLb: 150 },
     { number: 36, name: "Jermaine Holmes", position: "ATH", grade: "SO" },
     { number: 38, name: "Cameron Belzes", position: "DB", grade: "SO", heightIn: 66, weightLb: 130 },
     { number: 40, name: "Kalen Hose", position: "LB", grade: "JR", heightIn: 68, weightLb: 150 },
     { number: 41, name: "Seth Davis", position: "ATH", grade: "JR", heightIn: 68, weightLb: 155 },
     { number: 42, name: "Kayden Curtis", position: "LB", grade: "JR", heightIn: 67, weightLb: 150 },
     { number: 43, name: "Zacarias Richardson", position: "LB", grade: "SO", heightIn: 63, weightLb: 120 },
     { number: 44, name: "Mahryon Bruce", position: "RB", grade: "JR", heightIn: 69, weightLb: 175 },
     { number: 45, name: "Keleon Harrell", position: "DB", grade: "SO", heightIn: 66, weightLb: 155 },
     { number: 46, name: "Donaldson Demarriae", position: "ATH", grade: "SO", heightIn: 70, weightLb: 180 },
     { number: 47, name: "Keaton Brown", position: "DB", grade: "SR", heightIn: 67, weightLb: 140 },
     { number: 48, name: "Javon Miller", position: "RB", grade: "JR", heightIn: 65, weightLb: 120 },
     { number: 49, name: "Jake Dorsey", position: "WR", grade: "JR", heightIn: 67, weightLb: 150 },
     { number: 50, name: "Ahmad Thomas", position: "OL", grade: "SO", heightIn: 66, weightLb: 155 },
     { number: 55, name: "Jarius Knight", position: "DL", grade: "SR", heightIn: 71, weightLb: 260 },
     { number: 55, name: "Brody Cox", position: "OL", grade: "FR", heightIn: 71, weightLb: 240 },
     { number: 56, name: "Steven Floyd", position: "LB", grade: "SO", heightIn: 67, weightLb: 180 },
     { number: 58, name: "Dominique Corbett", position: "LB", grade: "JR", heightIn: 66, weightLb: 1605 },
     { number: 59, name: "Brandon Meriweather", position: "G,C", grade: "JR", heightIn: 67, weightLb: 175 },
     { number: 59, name: "Daeveon Miller", position: "LB", grade: "SR", heightIn: 69, weightLb: 190 },
     { number: 59, name: "Antwane McNeal", position: "LB", grade: "SR", heightIn: 68, weightLb: 175 },
     { number: 60, name: "Brandon Merriweather", position: "OL", grade: "SR", heightIn: 67, weightLb: 175 },
     { number: 61, name: "Donte Henry", position: "OL", grade: "SO", heightIn: 66, weightLb: 200 },
     { number: 62, name: "Tremayne Miley", position: "OL", grade: "SR", heightIn: 72, weightLb: 280 },
     { number: 63, name: "Demerio Thomas", position: "OL", grade: "SO", heightIn: 69, weightLb: 225 },
     { number: 65, name: "Cayden Armour", position: "OL", grade: "SR", heightIn: 70, weightLb: 280 },
     { number: 66, name: "Caleb Davis", position: "DL", grade: "SO", heightIn: 68, weightLb: 260 },
     { number: 67, name: "Jeremiah Moseley", position: "DL", grade: "SO", heightIn: 68, weightLb: 220 },
     { number: 68, name: "Elijah Boyd", position: "OL", grade: "SR", heightIn: 70, weightLb: 215 },
     { number: 70, name: "Tyler Richardson", position: "OL,T", grade: "SR", heightIn: 70, weightLb: 300 },
     { number: 71, name: "Brice Cooper", position: "TE,OL", grade: "SR", heightIn: 74, weightLb: 235 },
     { number: 72, name: "Jaiden White", position: "OL", grade: "SO", heightIn: 73, weightLb: 260 },
     { number: 74, name: "Adron Thomas", position: "OL", grade: "SR", heightIn: 76, weightLb: 320 },
     { number: 77, name: "Jah'khias Neloms", position: "OL", grade: "SR", heightIn: 73, weightLb: 300 },
     { number: 78, name: "Caden Burroughs", position: "DL", grade: "SR", heightIn: 71, weightLb: 250 },
     { number: 79, name: "Austin Spray", position: "OL", grade: "SR", heightIn: 73, weightLb: 285 },
    // { number: 80, name: "Michael Harp", position: "WR", grade: "SO" },
    // { number: 80, name: "Jelani Ellis", position: "DB", grade: "SO", heightIn: 68, weightLb: 132 },
    // { number: 82, name: "Torrey Leggett III", position: "WR", grade: "JR", heightIn: 68, weightLb: 150 },
   //  { number: 83, name: "Tallen Tarpley", position: "WR", grade: "SO", heightIn: 69, weightLb: 140 },
   //  { number: 85, name: "Aiden Earle", position: "DB", grade: "SO", heightIn: 66, weightLb: 115 },
   //  { number: 87, name: "Kei'mon McGhee", position: "WR", grade: "SO", heightIn: 68, weightLb: 160 },
   //  { number: 88, name: "Bryson Johnson", position: "K", grade: "JR", heightIn: 69, weightLb: 175 },
   //  { number: 89, name: "Montanez Arnold", position: "WR", grade: "SO", heightIn: 67, weightLb: 130 },
   //  { number: 90, name: "Lawson Waldrep", position: "K", grade: "JR", heightIn: 68, weightLb: 180 },
   //  { number: 91, name: "Daylan Brinson", position: "DL", grade: "SO", heightIn: 70, weightLb: 245 },
   //  { number: 92, name: "Aden Gloster", position: "DL, TE", grade: "SR", heightIn: 69, weightLb: 220 },
   //  { number: 93, name: "Corey Sims, Jr.", position: "DL", grade: "JR", heightIn: 70, weightLb: 275 },
   //  { number: 95, name: "Alans Garcia", position: "K", grade: "SO", heightIn: 64, weightLb: 135 },
   //  { number: 95, name: "Arjay Burnett", position: "DL", grade: "SO", heightIn: 70, weightLb: 195 },
   //  { number: 98, name: "Elijah O'Neil", position: "DL", grade: "SO", heightIn: 67, weightLb: 350 },
   //  { number: 99, name: "Kieran Johnson", position: "DL", grade: "SR", heightIn: 76, weightLb: 300 },
   //  { number: 00, name: "Blake Givens", position: "OL", grade: "S0", heightIn: 65, weightLb: 170 },
   //  { number: 00, name: "Imarion Drayton", position: "TE", grade: "FR", heightIn: 76, weightLb: 235 },
  //   { number: 72, name: "Devin Pratt", position: "DL", grade: "SR", heightIn: 75, weightLb: 275 },
  //   { number: 88, name: "Xavier Greene", position: "TE", grade: "SO", heightIn: 77, weightLb: 230 },
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
      units: ["D.A.T.E."],
      photo: "/coaches/felton2.jpeg",
      bio: "Leading the most storied program in high school football — 976-265-34 all-time (.779) with 6 national, 24 state, and 43 region championships since 1913.",
    },
    { name: "J.T. Black", title: "Assistant Head Coach", units: ["Offensive Line"], photo: "/coaches/black.jpeg" },
    { name: "Keith Barefield", title: "Offensive Coordinator", units: ["Quarterbacks"], photo: "/coaches/barefield.jpeg" },
    { name: "LaBrandon Hudson", title: "Defensive Coordinator", units: ["Safties"], photo: "/coaches/hudson.jpeg" },
    { name: "Jay Rome", title: "Co-Offensive Coordinator", units: ["Wide Receivers"], photo: "/coaches/rome.jpeg" },
    { name: "Daniel Brinson", title: "Offensive Line", units: ["Offensive Line"], photo: "/coaches/brinson.jpeg" },
    { name: "Chris Anderson", title: "Special Teams Coordinator", units: ["Running Backs"], photo: "/coaches/anderson.jpeg" },
    { name: "Andrew Christie", title: "Strength & Conditioning Coordinator", units: ["Outside Line Backers"], photo: "/coaches/christie.jpeg" },
    { name: "Taurean Batten", title: "Defensive Line", units: ["Defensive Line"], photo: "/coaches/batten.jpeg" },
    { name: "Tomarcio Reese", title: "Asst. Strength & Conditioning Coordinator", units: ["Inside Line Backers"], photo: "/coaches/reese.jpeg" },
    { name: "Earl Chaptman", title: "Tight Ends", units: ["Tight Ends"], photo: "/coaches/chaptman.jpeg" },
    { name: "Christian Tutt", title: "Cornerbacks", units: ["Cornerbacks"], photo: "/coaches/tutt.jpeg" },
    { name: "Antonio Foster", title: "9th Grade Head Coach", photo: "/coaches/foster.jpeg" },
    { name: "Jahlil Taylor", title: "9th Grade Defensive Line", photo: "/coaches/taylor.jpeg" },
    { name: "Brandon Bennett", title: "9th Grade Offensive Line", photo: "/coaches/bennett.jpeg" },
    { name: "Carter Brogdan", title: "9th Grade Quarterbacks", photo: "/coaches/brogdan.jpeg" },
    { name: "Andrel Lane", title: "9th Grade Defensive Backs", photo: "/coaches/lane.jpeg" },
    { name: "Clay Brindger", title: "Director of Football Operations", photo: "/coaches/brindger.jpeg" },
    { name: "Ben Sigers", title: "Athletic Trainer", photo: "/coaches/sigers.jpeg" },
    { name: "Justin Crenshaw", title: "Team Chaplain", photo: "/coaches/crenshaw.jpeg" },
    { name: "Justin Henderson Carter", title: "Head Coach Assistant", photo: "/coaches/carter.JPG" },
    { name: "Tracy Jackson", title: "Executive Assistant, Athletics", photo: "/coaches/jackson.jpeg" },
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
    { title: "Helmets", youtubeId: "McgeO63fWC0", date: "June 2026" },
    { title: "Playoff", youtubeId: "P6tY_iVZ0Pk", date: "June 2026" },
    { title: "Our Standard", youtubeId: "UVkthyDByNY", date: "June 2026" },
    { title: "Week 2", youtubeId: "XyNhVi-Uhtw", date: "June 2026" },
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

    /* -----------------------------------------------------------------------
     *  BOARD MEMBERS
     *  The Touchdown Club's board / officers. One block per member:
     *    name  : member's name.                                  (required)
     *    title : role, e.g. "President", "Treasurer".            (required)
     *    email : optional contact email shown on the card.
     *
     *  ⚠️ The entries below are PLACEHOLDERS — replace with the real board.
     * -------------------------------------------------------------------- */
    board: [
      { name: "Marcy Reagin", title: "President" },
      { name: "Randy Steedley", title: "Vice President" },
      { name: "Heather Pye", title: "Secretary" },
      //{ name: "Board Member", title: "Treasurer" },
      { name: "Charles McCann", title: "Feed the Cats" },
      { name: "Danny Heard", title: "Feed the Cats" },
      { name: "AC Braswell", title: "Board Member" },
      { name: "Anthony Courson", title: "Board Member" },
      { name: "David Berry", title: "Board Member" },
      { name: "David Pipkin", title: "Board Member" },
      { name: "Doug McQuaig", title: "Board Member" },
      { name: "Drew Pipkin", title: "Board Member" },
      { name: "Jeff Gurley", title: "Board Member" },
      { name: "Johnny Holcombe", title: "Board Member" },
      { name: "Kevin Bussey", title: "Board Member" },
      { name: "Randall Reddish", title: "Board Member" },
      { name: "Ron Reagin", title: "Board Member" },
      { name: "Scott Doner", title: "Board Member" },
      { name: "Tanner Harrington", title: "Board Member" },
      { name: "Tullis Beasley", title: "Board Member" },
      { name: "William Southall", title: "Board Member" },
      { name: "Willie Newberry", title: "Board Member" },
      { name: "Stephen Sandbach", title: "Board Member" },
      { name: "Richard Welch", title: "Board Member" },
    ],

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
    helpEmail: "valdostatouchdownclub@gmail.com",
    helpPhone: "",
    paymentInstructions:
      "Submit payment and include your NAME and the ADDRESS to mail your passes to in the notes.",
  },
} as const
