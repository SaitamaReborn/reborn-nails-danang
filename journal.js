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
  slug: "nails-that-last-a-da-nang-beach-week",
  title: "Salt, sand and sunscreen · which nails survive a Da Nang beach week",
  desc: "Gel, BIAB or GelX for a beach holiday in Da Nang · what actually makes a set lift, which system fits your trip length, and when in the trip to book it.",
  date: "2026-09-07",
  cat: "Guides",
  read: 6,
  hero: "hand.jpg",
  tldr: [
    "The sea does not ruin manicures · unsealed edges do. What fails first is the free edge, not the colour.",
    "Trip under a week: gel polish at 200K. One to three weeks with daily swimming: BIAB at 300K, or GelX at 280K if you want length.",
    "Book nails in the first 48 hours of the trip, not the last. One broken tip is 55K and ten minutes · a rushed full set the night before a flight is neither.",
    "Feet take more beach damage than hands. Gel on toes is 180K, and the 65-minute Deep Care pedicure at 450K is built for what sand and sandals do to heels."
  ],
  body: [
    { h: "Start with the length of the trip, not the length of the nails",
      p: ["The question we hear at the desk is <em>how long does this last</em>. The useful question is how long you are here. A set that is right for five days in a beachfront hotel is the wrong set for three weeks of working from An Thuong cafés, and both are wrong for someone who has just moved to Da Nang and will be back next month anyway.",
          "So the honest steering is short. Under a week: gel polish, 200K, and spend the difference on art rather than on structure you will not be around to use. One to three weeks: builder gel or GelX, because you want something that can take a knock on day nine without needing you to find a salon in Hoi An. Living here: whatever suits your nails, on a cycle · that is a different conversation, and it usually ends with builder gel and a refill every few weeks.",
          "Nobody needs extensions simply because they are on holiday. Length is a look, not a durability feature · and on a beach trip it is often the opposite of one."] },
    { h: "What the beach actually does to a set",
      p: ["Sand is an abrasive. Dig your hands into it, walk it into your sandals, rinse it off under a cold beach shower, and it spends the week working at every seam it can find. The seam it finds first is the free edge · the thin line where the gel stops and your nail keeps going.",
          "Sunscreen, body oil and hair oil do the rest. None of them attack cured gel; they simply travel. If the edge was capped properly, they sit on the surface and wash off. If it was not, they creep underneath, and four days later a corner lifts and you decide the sea did it. It did not. A set that peels on day four in Da Nang would have peeled on day six at home, just less dramatically.",
          "Add the ordinary friction of a trip · dragging a suitcase, gripping scooter handlebars, opening things, hands wet three or four times a day between pool, shower and iced coffee · and you can see why application matters more than product here. Prep, cuticle work, a properly sealed edge and a shape that is not fighting your own nail: that is the whole difference between a set that comes home with you and a set you pick at on the flight. It is also why a cheap set plus two repairs costs more than a good one."] },
    { h: "Gel polish, BIAB, GelX · three answers to three trips",
      p: ["<strong>Gel polish · 200K.</strong> Colour with a mirror finish that holds 2–3 weeks, applied on your own nail with no added thickness. It is the right default for most beach weeks. If your nails are thin or soft and you plan to swim every day, ask for a hard gel strengthening layer under it, from 60K · it costs less than a repair. Want protection without colour, which is what a lot of male guests and a lot of pool weeks actually call for? Base and top coat alone is 100K. Full menu on the <a href=\"/services/gel-nails/\">gel nails page</a>.",
          "<strong>BIAB · 300K.</strong> Builder in a bottle: a soakable gel that adds real thickness across your own nail, so it flexes less and chips less. This is the pick if your nails bend, split or break in ordinary life, and it removes without wrecking the nail plate. Sculpted builder gel on natural nails is 400K, a refill is 380K, and removal is 90K. Short extensions start at 500K if you do want a little length. It is all on the <a href=\"/services/biab-builder-gel/\">BIAB and builder gel page</a>.",
          "<strong>GelX · 280K.</strong> Full-cover soft gel extensions that give instant length and stay light, typically 3–4 weeks. This is the holiday set: it photographs beautifully and it is kind to the nail underneath. Keep the length sensible if you are on a scooter or handling luggage · almond and short-oval survive a week here far better than a long square. Details on the <a href=\"/services/gelx-extensions/\">GelX page</a>.",
          "Art does not change how long a set lasts. Length does. A full cat-eye or chrome set is 180K, ombré or French 220K, hand-painted work runs 15K–100K per nail, and none of that makes the set weaker · so if you want the trip on your hands, get the art and keep the tips short."] },
    { h: "The feet take the real beating",
      p: ["This is the part visitors underestimate. On a Da Nang trip you are barefoot on hot sand, in sandals all day, in salt water and then pool water, and walking far more than you do at home · the Marble Mountains, the night market, a full day in Hoi An. Heels go dry and rough within days, and no amount of hotel body lotion fixes what needs buffing.",
          "The pedicure menu is a time ladder. Soft Touch is 40 minutes at 250K and is a proper tidy-up. The Relaxing Ritual is 55 minutes at 380K. Deep Care · 65 minutes, 450K · is the best seller and the one to pick mid-trip, because it includes foot steaming, exfoliation and an intensive heel treatment rather than just a shape and a colour. The Reborn Signature runs 75 minutes at 590K, and hot stones are an 80K add-on. The full sequence is on the <a href=\"/services/spa-pedicure/\">spa pedicure page</a>.",
          "Gel on toes is 180K and it is the best-value colour in the salon on a long trip: toenails grow slowly, so the same product that gives you two or three weeks on your hands comfortably outlasts the holiday down there. And if you are booking beach-week admin in one go, waxing sits in a private room on the same floor · underarms 120K, half legs 250K, full legs 480K.",
          "One piece of sequencing: book the pedicure after your big walking day, not before. Deep Care on the evening you come back from the Marble Mountains is a different experience from Deep Care on the morning you set out."] },
    { h: "When to book it, and what to say when you sit down",
      p: ["Go early in the trip. Day one or day two means you get the whole holiday out of the set, and it means that if something does lift on day eight you are still here to have it fixed · a single tip repair or extension is 55K and takes about ten minutes. Leaving nails to the last evening is how people end up choosing between dinner and a set that will not be fully cured before a 6 AM taxi.",
          "Plan the exit too. If you are wearing extensions home, come back for proper removal rather than peeling on the plane: gel colour removal is 60K, press-on removal 70K, builder gel removal 90K. That is fifteen minutes that saves you two months of thin, tender nails.",
          "Tell your technician three things before they start: how many days you have left, whether you will be in the sea or a pool every day, and whether you ride a scooter. Those three answers change the shape, the length and whether we put a strengthening layer underneath. Ask for shorter than you think · you can always go long the week you get home.",
          "We are open daily 9 AM to 8 PM and take walk-ins, though late afternoon fills first. A gel manicure is about 45 minutes, a full builder gel set around 80, and a pedicure ritual 40 to 75 depending which one you take. Every tool is sterilised before it touches you and files and buffers are single-use · that matters more, not less, on skin that has been in salt water and sun all week. English and Vietnamese are spoken on the floor and the printed menu is translated into 20 languages. We are at 56 Châu Thị Vĩnh Tế, 880 m from My Khe Beach · a 10–12 minute walk · and here are the <a href=\"https://www.google.com/maps/dir/?api=1&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4\" rel=\"noopener\">directions</a>."] }
  ],
  faq: [
    ["How long do gel nails last on a beach holiday?", "Gel polish keeps its mirror shine for 2–3 weeks and GelX extensions typically run 3–4 weeks, and a beach week does not shorten that much on its own. What shortens it is a free edge that was never properly capped: sand, sunscreen and body oil travel under any unsealed seam and lift a corner within days. Prep and edge sealing matter more than which product you choose."],
    ["Gel, BIAB or GelX for a two-week trip in Vietnam?", "For two weeks with daily swimming, BIAB at 300K is the safest pick · it is a soakable builder gel that adds thickness across your own nail so it flexes and chips less, and it comes off without damaging the nail plate. Choose GelX at 280K instead if you want instant length for the trip; it lasts 3–4 weeks and stays light. Plain gel polish at 200K is enough for a trip under a week, ideally with a hard gel strengthening layer from 60K if your nails are soft."],
    ["Will swimming in the sea or the pool ruin my manicure?", "No. Cured gel is not damaged by salt water or chlorine. The damage comes from what swimming days involve · sand working at the edges, sunscreen and oils creeping under any seam that was not sealed, and hands going wet and dry several times a day. A well-applied set handles all of it. If you are swimming daily, ask for a shorter length and a strengthening layer underneath rather than a different colour."],
    ["Can you fix one broken nail while I am travelling?", "Yes. A single tip repair or extension is 55K and takes about ten minutes, and we take walk-ins daily from 9 AM to 8 PM · you do not need to have had the original set done with us. If a whole set has lifted, removal is 60K for gel colour, 70K for press-ons and 90K for builder gel, and we can rebuild the same day if there is a chair free."]
  ]
},
{
  slug: "vietnamese-hair-wash-vs-korean-head-spa",
  title: "Vietnamese hair wash vs Korean head spa · the real difference",
  desc: "Vietnamese herbal hair wash or Korean head spa in Da Nang · what each tradition does, what our 19-step ritual includes, and how to choose by the clock.",
  date: "2026-08-11",
  cat: "Rituals",
  read: 6,
  hero: "chand.jpg",
  tldr: [
    "A Vietnamese hair wash is massage-led · long hands-on time on scalp, neck and shoulders. A Korean head spa is scalp-led · exfoliate, steam, treat, in that order.",
    "Reborn runs the blend: Vietnamese herbal washing sequenced the Korean way. Rituals go from 120K for 25 minutes to 850K for 105.",
    "First visit, no strong preference: the 80-minute Reborn Signature at 500K · nineteen steps, and about 25 of those minutes are facial work.",
    "Walk in for the short wash. Book ahead for anything over an hour, especially late afternoon."
  ],
  body: [
    { h: "Two traditions, one reclining chair",
      p: ["Walk a few streets in the beach quarter and you will pass a sign for <em>gội đầu dưỡng sinh</em> · a Vietnamese herbal hair wash · and, a few doors down, a salon advertising a Korean head spa. From the pavement they look identical: you lie back, someone washes your hair, you leave calmer than you arrived.",
          "They are not the same treatment, and the difference is what decides whether you should book 25 minutes or 95. The Vietnamese wash is massage-led. The Korean head spa is scalp-led. Most menus in Da Nang are one, the other, or an honest blend of both · and knowing which you are buying is most of the decision."] },
    { h: "The Vietnamese hair wash: the massage is the point",
      p: ["In Vietnam, the hair wash is an everyday errand, not an event. You lie back on a bed with a basin behind your head, your hair is shampooed twice, and then somebody spends a long stretch of time on your scalp, temples, neck, shoulders and arms. The washing is almost the excuse. The hands are the product.",
          "The herbal side is older than shampoo. The tradition leans on soap pod, pomelo peel, lemongrass and ginger · plants used for hair long before anything came in a bottle · and that is still the character of the local product lines. What it does not include is diagnosis. Nobody is inspecting your scalp under a camera, and at the neighbourhood end of the market you often leave with hair still damp.",
          "If your neck and shoulders are the part that hurts · after a night flight, or a week of scooter traffic and a laptop · this is the tradition to ask for by name."] },
    { h: "The Korean head spa: the scalp is the point",
      p: ["Korea took the same act and reframed it as skin care for the head. The order stops being arbitrary and starts being the method: scalp exfoliation first to lift sebum and product build-up, then steam to soften and open, then a treatment or mask that can actually reach something, then massage to move blood and lymph, then a proper dry.",
          "The room changes with it · lower light, one guest at a time, less conversation. And in Seoul or Tokyo this sits on the menu as a premium spa item, priced like one. The technique travelled to Vietnam considerably faster than the price did, which is the whole reason head spa has become one of the treatments visitors to Da Nang book twice in the same trip."] },
    { h: "What we actually run at Reborn",
      p: ["Our head spa is the blend, and we would rather be specific about it than let you guess. Fiona learned nails and hair care at home in Vietnam, then spent time watching how studios in Paris worked, and built this room around Korean and Japanese sequencing with Vietnamese herbal washing at the centre. The full ladder of rituals is on the <a href=\"/services/head-spa-hair-wash/\">head spa page</a>.",
          "The 80-minute Reborn Signature at 500K is nineteen steps in four movements. The first ten minutes are a warm herbal foot soak, tea, and the lights coming down. Minutes 10 to 35 are the face: cleansing, gentle exfoliation, a quartz-stone meridian massage, herbal steam, mask. Minutes 35 to 60 are scalp and hair · scalp exfoliation, a double herbal wash, steam again, a nourishing hair mask. Then neck and shoulders, hand massage and a warm compress until minute 72, and the last eight minutes are blow-dry, hair oil, fresh fruit and one more cup of tea.",
          "The part that surprises people is the face. A quarter of an hour and more of facial work inside something called a hair wash is not the Vietnamese tradition · that is the Korean influence, and it is the reason guests come out looking different rather than just feeling different."] },
    { h: "Choose by the clock, not by the headline price",
      p: ["The menu is a time ladder, and the honest way to read it is to decide how long you can lie still. Basic hair wash is 25 minutes at 120K. Relax Ritual is 45 minutes at 250K, Deep Relax 60 minutes at 380K, Warm Stone Escape 70 minutes at 450K. The Reborn Signature is 80 minutes at 500K and is what most people book first. Above that: Carbony Skin Detox at 75 minutes and 600K, the Ultimate Ritual at 95 minutes and 750K, and Luxury Skin Recovery at 105 minutes and 850K.",
          "Some practical steering. If you have a gap between hotel checkout and a flight, take the 45-minute Relax Ritual and do not rush a longer one. If you have had beach days and your scalp feels heavy or flaky, weight your choice towards the longer rituals · they simply contain more scalp work. And if it is genuinely your neck, shoulders or feet that are complaining rather than your head, a 30-minute foot and calf massage at 190K or hot-stone work across face, neck and shoulders at 120K may serve you better than any hair wash. Those sit on the <a href=\"/services/massage/\">massage page</a>."] },
    { h: "Things worth knowing before you lie down",
      p: ["Come with your hair as it is · there is no reason to pre-wash. You will leave with it clean, dried and oiled, but a head spa is not a blow-out; if you need hair styled for an evening, plan that separately.",
          "The longer rituals open with facial cleansing, so arrive expecting your makeup to come off and bring what you need to put it back on. Tell your therapist early if you want lighter or firmer pressure · on the scalp especially, preferences vary enormously and nobody can guess yours.",
          "Every tool that touches you is sterilised, and files and buffers are single-use. We are open daily from 9 AM to 8 PM, English and Vietnamese are spoken on the floor, and the printed menu is translated into 20 languages. The short wash takes walk-ins comfortably. For anything over an hour, message ahead · late afternoon fills up first."] }
  ],
  faq: [
    ["What is a Vietnamese hair wash (gội đầu dưỡng sinh)?", "It is a hair wash built around massage rather than around cleaning. You lie back on a bed with a basin behind your head, your hair is shampooed twice with herbal shampoo, and a therapist then works your scalp, temples, neck, shoulders and arms for a long stretch. At Reborn it runs from 120K for a 25-minute basic wash up to 850K for the 105-minute Luxury Skin Recovery ritual."],
    ["What is the difference between a Vietnamese hair wash and a Korean head spa?", "The Vietnamese hair wash is massage-led: the value is in the hands-on time across scalp, neck and shoulders, and the herbal tradition behind the products. The Korean head spa is scalp-led and follows a fixed order · exfoliation, steam, treatment, massage, dry · treating the scalp as skin rather than as a surface to clean. Reborn runs the two combined, with Vietnamese herbal washing sequenced the Korean way."],
    ["How long should I book for a head spa in Da Nang?", "Eighty minutes is the sweet spot for a first visit · that is the Reborn Signature at 500K, nineteen steps including facial care, scalp exfoliation, herbal steam and a neck and shoulder release. If you are short on time, the 45-minute Relax Ritual at 250K keeps the wash and the massage and drops the facial work. Under 30 minutes you are getting a good wash, not a ritual."],
    ["Will my hair be dried afterwards, or do I leave wet?", "Dried. The Reborn Signature finishes with a blow-dry and hair oil in its last eight minutes, and the other full rituals end the same way. It is a clean, smooth finish rather than a styled blow-out · if you need your hair set for an event that evening, treat that as a separate appointment."]
  ]
},
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
