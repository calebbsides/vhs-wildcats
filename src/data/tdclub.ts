import type { TdClubConfig } from "./types"

/**
 * Valdosta Touchdown (TD) Club membership & parking. Source: official 2026
 * TD Club flyer. Update prices, perks, and the deadline each year.
 */
export const tdClub: TdClubConfig = {
  year: "2026",
  deadline: "July 1",
  tiers: [
    {
      id: "family",
      name: "Family Membership",
      price: 50,
      description: "Membership for up to 5 people in the same household.",
    },
    {
      id: "b-parking",
      name: "B Parking",
      price: 100,
      description: "First come, first serve.",
    },
    {
      id: "a-parking",
      name: "A Parking",
      price: 200,
      description: "Premium lot parking.",
      soldOut: true,
      note: "Sold out — only those with passes last year are eligible.",
    },
    {
      id: "silver",
      name: "Silver Membership",
      price: 250,
      description: "Membership, B Parking, 1 season seat.",
      perks: ["Membership", "B Parking", "1 season seat"],
    },
    {
      id: "gold",
      name: "Gold Membership",
      price: 500,
      description: "Membership, B Parking, 2 season seats.",
      perks: ["Membership", "B Parking", "2 season seats"],
      featured: true,
    },
    {
      id: "platinum",
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
    cashApp: "$ValdostaTDclub",
    venmo: "@ValdostaTouchdown-Club",
    // If/when there's a direct PayPal.me or website join link, add it here.
    paypalUrl: "https://www.valdostawildcats.com",
  },
  mailingAddress: "P.O. Box 794, Valdosta, GA 31603",
  helpEmail: "hlpye@outlook.com",
  helpPhone: "229-343-8907",
  paymentInstructions:
    "Submit payment and include your NAME and the ADDRESS to mail your passes to in the notes.",
}
