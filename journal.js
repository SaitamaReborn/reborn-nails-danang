/* Reborn Nails & Retreat · Journal (weekly SEO articles)
   Appended to by ~/.claude/reborn-weekly/run.sh — NEWEST FIRST.
   Every entry must keep this exact shape; build.js renders it as-is.

   {slug, title, desc, date:"YYYY-MM-DD", cat, read, hero, tldr:[], body:[{h,p:[]}], faq:[[q,a]]}
   - slug  : kebab-case, stable forever (it is the URL)
   - desc  : 150-160 chars, used as meta description
   - hero  : a filename that exists in ./assets (reuse an existing one)
   - tldr  : 3-4 short bullets, shown in a box at the top
   - body  : sections; h = H2 title, p = array of paragraphs (HTML allowed)
   - faq   : [question, answer] pairs → FAQPage schema
   Business rule: every article must serve a guest deciding where to book in Da Nang,
   and must link at least once to a service page or the directions link. */

const JOURNAL = [
{
  slug: "nail-salon-prices-da-nang-2026",
  title: "What a nail salon in Da Nang actually costs in 2026",
  desc: "Real prices for gel, BIAB, nail art, spa pedicures and head spa in Da Nang · what a fair rate looks like and what drives the final bill.",
  date: "2026-08-04",
  cat: "Guides",
  read: 6,
  hero: "nails.jpg",
  tldr: [
    "A gel manicure in Da Nang sits around 200K; beach-side salons charge 10–30% more than the suburbs.",
    "Extensions and builder gel (BIAB 300K, GelX 280K) cost more because of the product, not the labour.",
    "A spa pedicure ritual runs 250K–590K depending on length, not on how fancy the room looks.",
    "Ask what is included before you sit down · soak, cuticle care and removal are often billed separately elsewhere."
  ],
  body: [
    { h: "The short answer",
      p: ["A classic gel manicure in Da Nang costs about 200,000 VND · roughly eight US dollars. That figure holds across most of the city, and anything far above it should come with a clear reason: longer ritual time, imported product, or genuine nail art rather than a sticker.",
          "Prices climb near My Khe Beach and drop as you move inland. It is the same treatment; you are paying for the rent."] },
    { h: "Why extensions cost more",
      p: ["Builder gel and soft gel extensions are priced on product, not on time. BIAB at 300K and GelX at 280K use systems that are expensive per bottle and cannot be stretched thin without failing early.",
          "A set that lasts three weeks and comes off without damaging your nail plate is cheaper than a cheap set you pay to repair. Our full breakdown sits on the <a href=\"/services/gel-nails/\">gel nails page</a>."] },
    { h: "What should already be included",
      p: ["Soak, shaping, cuticle care and a top coat belong in the price you were quoted. So does the consultation where a technician tells you what your nails can actually take.",
          "Removal is the line to watch. Ask before you book · at Reborn, gel colour removal is 60K and it is stated up front, never discovered at the till."] },
    { h: "Spa pedicures are a different product",
      p: ["A spa pedicure is not a pedicure with extra steps · it is a 40 to 75 minute ritual with a herbal soak, heel work, massage and warm towels. Ours run from 250K for the 40-minute Soft Touch to 590K for the 75-minute Reborn Signature.",
          "Compare on minutes and on what happens in them, not on the headline number. See the <a href=\"/services/spa-pedicure/\">spa pedicure menu</a>."] },
    { h: "How to judge a salon in ninety seconds",
      p: ["Look for single-use files and a visible steriliser. Ask which gel brand they use; a salon that knows its product will answer instantly. Check that prices are posted, in writing, before the treatment starts.",
          "Everything else · the chairs, the lighting, the tea · is comfort. Those three things are safety."] }
  ],
  faq: [
    ["How much is a gel manicure in Da Nang?", "Around 200,000 VND (about $8) for gel polish in a full colour. At Reborn, gel polish is 200K, base and top coat only is 100K, and gel colour removal is 60K. Beach-side salons typically charge 10–30% more than salons further inland."],
    ["Is it cheaper to get your nails done in Da Nang than in Korea or Japan?", "Considerably. A head spa ritual that costs 120K–850K in Da Nang would run several times that in Seoul or Tokyo for a comparable length. The technique is the same; the cost base is not."],
    ["Should I tip at a nail salon in Da Nang?", "Tipping is not expected in Vietnam and no salon should pressure you. If a technician did careful work over a long ritual, a small tip is welcomed but never required."],
    ["Do I need to book ahead?", "For a quick gel colour you can usually walk in. For anything over an hour · spa pedicure rituals, head spa, or a full nail art set · book ahead, especially late afternoon. You can message us on WhatsApp or call the salon directly."]
  ]
}
];

module.exports = { JOURNAL };
