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
    "slug": "which-head-spa-for-your-scalp",
    "title": "Oily, flaky or just tired · which head spa your scalp actually needs",
    "desc": "Oily, flaky or just tense · how to pick a head spa ritual in Da Nang by what your scalp is doing, where the minutes go in each, and what one visit cannot fix.",
    "date": "2026-10-19",
    "cat": "Rituals",
    "read": 6,
    "hero": "room.jpg",
    "tldr": [
      "Match the ritual to what your scalp is doing. Heavy and oily: buy exfoliation and steam. Tight and flaky: buy moisture and lighter hands. Fine, while you are exhausted: buy massage minutes.",
      "Oily or product-heavy after beach days: the 80-minute Reborn Signature at 500K, or the 75-minute Carbony Skin Detox at 600K, which is the cleansing-weighted one.",
      "Flaky from sun, salt and air conditioning: Warm Stone Escape, 70 minutes, 450K, and ask for the exfoliation step to be lightened.",
      "A head spa clears build-up and loosens your neck. It does not treat dandruff, a sore scalp or hair loss. That is a doctor, not a salon."
    ],
    "body": [
      {
        "h": "Three different scalps walk through the door",
        "p": [
          "Nearly everyone who books a head spa with us describes what they want in the same way, which means they do not describe it at all. They ask for the eighty-minute one, or for whatever their friend had. Most of the time that is fine, since the rituals overlap a lot. Things go less well when a person with a sun-tight, flaking scalp books the deep cleanse, or when someone carrying a week of sunscreen and sea salt picks the shortest wash and walks out wondering why their roots still feel coated.",
          "So before the menu, a question. What is your scalp doing right now? In Da Nang the answers cluster into three. It is heavy and oily, usually after beach days, humidity and whatever you have been spraying on your hair. It is tight and flaky, from sun, salt water and nights under air conditioning. Or it is perfectly fine and you are the one who is wrecked, in which case the scalp is simply the most comfortable place to be worked on for an hour.",
          "All the rituals on our ladder include washing and massage. As the minutes climb, what changes is where they land: on the scalp, on the face, on your neck and shoulders, or on steam and masks. Once you read the menu like that, choosing is easy. You'll find the full ladder, with times and prices, on the <a href=\"/services/head-spa-hair-wash/\">head spa page</a>."
        ]
      },
      {
        "h": "Heavy and oily · buy cleansing time",
        "p": [
          "One pass will not lift sebum, and product is harder still. Sunscreen creeps into the hairline, dry shampoo builds up, salt water dries into the whole mix, and a quick hotel wash usually shifts it all around instead of removing it. From roughly day three of a beach holiday on, it is the scalp we see most often in this quarter.",
          "The 25-minute basic hair wash at 120K is a good wash with a good massage, and that is the whole of it. There is no exfoliation and no steam, so if your roots feel coated you will walk out feeling pleasant and still coated. The cleansing sequence proper lives in the 80-minute Reborn Signature at 500K. Minutes 35 to 60 of that ritual are scalp exfoliation, a double herbal wash, herbal steam and a nourishing hair mask, in that order, because each step is what lets the next one reach anything.",
          "Above it sits the Carbony Skin Detox at 75 minutes and 600K. Carbonated water has been used for scalp cleansing in Korean and Japanese salons for years, and on our menu this is the cleansing-weighted ritual rather than the relaxation-weighted one. It is also the one where asking beats guessing. Tell reception what your scalp is doing and have someone walk you through what those 75 minutes contain before you commit to them.",
          "One practical note. Do not wash your hair before you come. People do it out of politeness, and it costs them the first fifteen minutes of their own treatment."
        ]
      },
      {
        "h": "Tight and flaky · buy moisture, not friction",
        "p": [
          "The instinct when skin flakes is to scrub it off, and after four days of sun and sea that instinct is wrong. What you usually have is a barrier that has dried out and started shedding. Exfoliate it harder and you get a cleaner, angrier scalp.",
          "Weight the choice towards warmth and moisture instead. Warm Stone Escape runs 70 minutes at 450K and the Deep Relax Ritual 60 minutes at 380K. At the top of the ladder, the Reborn Ultimate Ritual is 95 minutes at 750K and Luxury Skin Recovery 105 minutes at 850K; in both, the extra time goes into masks, steam and hands rather than into anything abrasive.",
          "Then say it out loud when you lie down. Pressure preference on a scalp varies more than anywhere else on the body and nobody can read yours from the outside. If you want the exfoliation lightened or skipped, that is a normal request and the start of the ritual is the moment to make it.",
          "A line worth drawing clearly, though. If the flaking is persistent, if your scalp itches constantly, or if there are sore or weeping patches, that belongs to a dermatologist. A head spa is hygiene and comfort. It is not a treatment for a skin condition, and any salon telling you otherwise is selling."
        ]
      },
      {
        "h": "Scalp fine, you are not · buy massage minutes",
        "p": [
          "A fair share of head spa bookings have nothing to do with hair. Night flights, scooter traffic, a laptop at a cafe table, three weeks of unfamiliar pillows. The scalp is fine. The jaw, neck and shoulders are the problem, and a head spa is simply the pleasantest way to get at them.",
          "For that, the 45-minute Relax Ritual at 250K is the efficient pick. It keeps the washing and the massage and leaves out the facial work, which is where the longer rituals spend most of their extra time. Neck and shoulder massage is included in every head spa ritual on the menu, so there is nothing to add on.",
          "When the tension sits lower down, put the money somewhere else. Hot stone therapy across face, neck and shoulders costs 120K. There is a facial massage add-on at 90K for 15 minutes. A focused foot and calf massage is 100K for 15 minutes or 190K for 30, and every spa pedicure ritual from 250K up already includes it. You'll find these on the <a href=\"/services/massage/\">massage page</a> and the <a href=\"/services/spa-pedicure/\">spa pedicure page</a>; on a really tired day, one of them may do more for you than any hair wash."
        ]
      },
      {
        "h": "What one visit changes, and for how long",
        "p": [
          "This is worth being clear-eyed about, since it decides whether you book once or twice. Once a proper cleansing ritual is done, the build-up is gone and for a few days your hair sits differently: lighter at the root, faster to dry, slower to turn greasy by evening. Most people sleep unusually well that night too, probably more because of eighty minutes of lying still than because of anything we put on their head.",
          "What one visit will not do is change your hair type, thicken it, or make a scalp condition disappear. We make no claim that a ritual regrows hair. If you live here and come monthly, what you are buying is consistent cleanliness and an hour in which nobody can reach you, and that is a sensible thing to buy on purpose.",
          "Two visits inside one trip is common, and the usual pattern is worth copying: a longer ritual early, when you have just come off a flight with everything from home still in your hair, then a shorter wash near the end once the beach days have happened. Remember that the longer rituals open with facial cleansing, so your makeup is coming off. Bring what you need to put it back."
        ]
      },
      {
        "h": "Booking it, and getting here",
        "p": [
          "You'll find us at 56 Châu Thị Vĩnh Tế in the An Thuong quarter, 880 m from My Khe Beach, so roughly ten to twelve minutes on foot from the sand. <a href=\"https://www.google.com/maps/dir/?api=1&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4\" rel=\"noopener\">Directions are here</a>. The salon is open daily from 9 AM to 8 PM.",
          "The 25-minute wash takes walk-ins comfortably. For anything over an hour we recommend reserving, because the salon is often full and late afternoon is the first part of the day to go. Message us on WhatsApp or call, and say which ritual you are after and roughly what your scalp is doing. It means we can put the right therapist in the chair instead of the next free one.",
          "Every tool is sterilised before it touches you, and files and buffers are single-use. English and Vietnamese are spoken on the floor and the iPad menu runs in 20 languages, which matters more than it sounds when you are trying to describe a scalp. Every full ritual finishes with a blow-dry and hair oil, so put the head spa before dinner rather than after it."
        ]
      }
    ],
    "faq": [
      [
        "Which head spa should I choose if my scalp is oily?",
        "Pick a ritual with a cleansing sequence in it rather than the shortest wash. At Reborn the 80-minute Reborn Signature at 500K includes scalp exfoliation, a double herbal wash, herbal steam and a hair mask between minutes 35 and 60, and the Carbony Skin Detox at 75 minutes and 600K is the most cleansing-weighted ritual on the menu. The 25-minute basic wash at 120K is a good wash and a good massage, but it has no exfoliation or steam step, so roots that feel coated after beach days will still feel coated. Come with your hair unwashed."
      ],
      [
        "Does a head spa help with dandruff or hair loss?",
        "It helps with build-up, not with conditions. Sebum, sunscreen and product come off in a cleansing ritual, and for a while a clean scalp usually flakes and itches less. None of that is a treatment for seborrhoeic dermatitis, psoriasis or hair loss, and we will not pretend otherwise. See a doctor if the flaking persists, if your scalp itches all the time or has sore patches, or if you are suddenly shedding hair. A head spa is for cleanliness, comfort and the neck and shoulder release that comes with it."
      ],
      [
        "What is a carbonated or CO₂ head spa?",
        "A head spa that uses carbonated water during the washing stage. Korean and Japanese salons have used it for years as the deep-cleansing option, and the reason to choose it is a scalp heavy with sebum or product rather than one that feels dry and tight. At Reborn it is on the menu as Carbony Skin Detox, 75 minutes, 600K. Ask reception to take you through what those 75 minutes contain before booking, rather than choosing on the name alone."
      ],
      [
        "How often should you get a head spa?",
        "You don't need to keep to a schedule. Visitors often do two in one trip: a longer ritual when they arrive, then a shorter wash towards the end, once sunscreen and sea salt have built up. People living in Da Nang tend to settle at about once a month. After a cleansing ritual, the change in how your hair sits lasts a few days, so coming regularly buys consistency, not anything cumulative. From 120K for 25 minutes up to 850K for 105, the frequency here usually comes down to your time rather than your budget."
      ]
    ]
  },
{
    "slug": "da-nang-rainy-season-what-to-book",
    "title": "Rainy season in Da Nang · what to book when the beach shuts",
    "desc": "October to December rain in Da Nang · what it does to a beach plan, which treatments fit the gap you actually have, and how to sequence a washed-out day.",
    "date": "2026-10-12",
    "cat": "Guides",
    "read": 6,
    "hero": "interior.jpg",
    "tldr": [
      "Da Nang rain comes in short, heavy episodes, mostly from October to December. Mornings are often fine; afternoons are where plans fall apart.",
      "Book by the size of the gap you have. Under an hour: the 45-minute Relax Ritual at 250K. Two hours free: the 80-minute Reborn Signature head spa at 500K.",
      "A full washed-out day works sequenced · nails on one hand while a second therapist works your scalp or feet. Ask at reception and we will stack it.",
      "Rain does not touch cured gel, because gel sets under an LED lamp rather than in the air. Classic polish at 100K is the one that dries slowly in humidity."
    ],
    "body": [
      {
        "h": "The rain here is not a drizzle",
        "p": [
          "If you are in Da Nang in October, November or early December, chances are you have already met it. Clear sky over breakfast, a wall of water by two in the afternoon, a street that turns briefly into a shallow river, then sun once more by six. These weeks bring most of the city's rain for the year. It usually arrives in short, violent episodes instead of as a grey damp that lasts all day.",
          "So a beach plan becomes unreliable rather than cancelled, and that is a different problem to solve. Mornings are often bright and good for swimming. The afternoons are the gamble. Once the lifeguards put red flags out on My Khe, swimming is closed whether or not it happens to be raining at that minute, something plenty of visitors learn while standing confused on the sand in sunshine.",
          "So the question in the rainy season is rarely <em>what shall we do today</em>. It is what to do with the two or three hours that just opened up unexpectedly, in the quarter you are already standing in, without getting back on a scooter."
        ]
      },
      {
        "h": "Book by the size of the gap, not by the headline",
        "p": [
          "Our head spa menu works as a time ladder, and when it rains that is exactly how to read it. A basic hair wash takes 25 minutes at 120K. Relax Ritual runs 45 minutes at 250K, Deep Relax 60 minutes at 380K, and Warm Stone Escape 70 minutes at 450K. The Reborn Signature is 80 minutes at 500K. Higher up sit Carbony Skin Detox at 75 minutes and 600K, the Ultimate Ritual at 95 minutes and 750K, and Luxury Skin Recovery at 105 minutes and 850K. You can see the whole ladder on the <a href=\"/services/head-spa-hair-wash/\">head spa page</a>.",
          "If the sky opened while you were walking back from lunch and a dinner reservation is waiting, take the 45-minute Relax Ritual and do not try to squeeze in a longer one. When the afternoon is clearly a write-off, the 80-minute Signature is the one most people go for first, and nineteen steps is a genuinely good way to spend a storm. If you came in off the beach with sand in your scalp and a sunburn, lean towards the longer rituals, since the extra minutes in those go into scalp work.",
          "Pedicures follow the same logic. Soft Touch takes 40 minutes at 250K, the Relaxing Ritual 55 minutes at 380K, Deep Care 65 minutes at 450K, and the Reborn Signature 75 minutes at 590K. Hot stones are an 80K add-on, a reasonable thing to want after being damp since lunchtime. Each one's sequence is set out on the <a href=\"/services/spa-pedicure/\">spa pedicure page</a>."
        ]
      },
      {
        "h": "A washed-out day, sequenced",
        "p": [
          "A typhoon day or a solid afternoon of rain is the one time when it makes sense to stack treatments instead of choosing one. Most of our guests use us in parallel: one technician does your nails while another works on your scalp, neck or feet. Let reception know how much time you have, and we will sequence it rather than running everything end to end.",
          "Here is a rough shape for three hours. Gel polish at 200K takes about 45 minutes, and the Deep Care pedicure at 450K takes 65. Slot the head spa in the middle and the window is full, with no dead time to sit through. If you would rather have length for the rest of the trip, a GelX full set is 280K, BIAB is 300K, and a full builder gel set runs around 80 minutes (the <a href=\"/services/gel-nails/\">gel nails page</a> has the full breakdown).",
          "Rain is also the right moment for whatever you keep putting off on good weather days. Waxing takes place in a private room on the same floor: upper lip 90K, underarms 120K, half legs 250K, full legs 480K. A focused foot and calf massage costs 100K for 15 minutes or 190K for 30, and hot stone therapy over face, neck and shoulders is 120K. You will find those on the <a href=\"/services/massage/\">massage page</a>. None of them needs the weather to cooperate.",
          "One honest caveat about stacking. Four hours in a chair is longer than it sounds, and a ritual you are impatient to finish is a wasted ritual. Two treatments and a pot of tea beats four and a clock-watch."
        ]
      },
      {
        "h": "What rain actually does to nails and feet",
        "p": [
          "On the hands, less than people expect. Gel cures under an LED lamp instead of drying in the air, so humidity gets no say in whether a set sets properly. Walk out of a gel manicure into a downpour and nothing happens. Classic polish at 100K is the one product that genuinely cares: it air-dries, and on a wet Da Nang afternoon it does so slowly. When you need colour before an evening out in this season, gel at 200K is the practical answer, not the upsell.",
          "The rain does reach the edges, just as the sea does. On rainy-season days your hands go wet and dry four or five times between the shower, the storm and the iced coffee, and water will travel underneath any seam that was not properly capped. That comes down to application, not weather. It is why we put our time into prep and into sealing the free edge rather than into getting you out of the chair faster.",
          "Feet are where this season is actually felt. Wet sandals all day soften the skin, and soft skin rubs rather than resists · which is how people end up with sore spots and rough heels in the middle of a holiday in which they have barely walked on sand. Deep Care at 450K includes foot steaming, exfoliation and an intensive heel treatment, which is the part that matters here rather than the colour. Gel polish for toes is 180K and comfortably outlasts a two-week trip, since toenails grow slowly.",
          "If you will be back out in wet shoes afterwards, ask for a shorter shape than you planned. Length and damp footwear are a poor combination, and a single tip repair is 55K that you did not need to spend."
        ]
      },
      {
        "h": "Getting here when the street is a river",
        "p": [
          "You will find us at 56 Châu Thị Vĩnh Tế, in the An Thuong quarter, 880 m from My Khe Beach. In normal weather that is a 10 to 12 minute walk. In a real downpour it is a bad idea, and a Grab or taxi from almost any hotel in the beach quarter takes a few minutes and costs very little. The streets here drain quickly once the heaviest part has passed, so if you are soaked already, waiting twenty minutes often beats paying for the car. The <a href=\"https://www.google.com/maps/dir/?api=1&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4\" rel=\"noopener\">directions</a> are here.",
          "Two points on timing. On every wet afternoon, plenty of people in this quarter get the same idea at the same hour. Walk-ins are taken daily from 9 AM to 8 PM and we will always try to seat you, but late afternoon fills first in dry weather, and a storm brings that forward: a message sent ahead is the difference between a chair and a wait. Second, the rituals end with a blow-dry and hair oil, so think about the walk home. A head spa is a poor last stop before stepping into rain, and a good last stop before dinner.",
          "Bring a bag for wet things, and tell your therapist early whether you want lighter or firmer pressure, especially on the scalp. Every tool is sterilised before it touches you and files and buffers are single-use. English and Vietnamese are spoken on the floor, and the printed menu is translated into 20 languages."
        ]
      }
    ],
    "faq": [
      [
        "What is there to do in Da Nang when it rains?",
        "Here the rain tends to come in short, heavy bursts rather than all day, so the useful plan is something indoors that fills two or three hours close to where you are staying. In the beach quarter, that means museums and cafés downtown, the malls, or a spa afternoon. At Reborn, head spa rituals run 25 to 105 minutes (120K to 850K) and spa pedicure rituals 40 to 75 minutes (250K to 590K); we take walk-ins every day from 9 AM to 8 PM, 880 m from My Khe Beach."
      ],
      [
        "Does rain or humidity ruin a fresh gel manicure?",
        "No. Gel cures under an LED lamp instead of drying in the air, so you can step straight from a gel set into a downpour and nothing will happen to it. Classic polish at 100K is another matter: it air-dries, which takes noticeably longer in high humidity. In this season, if you need colour the same evening, gel polish at 200K is the better choice. An unsealed free edge, on the other hand, does shorten any set, because it lets water creep underneath whatever the weather."
      ],
      [
        "Is October a bad month to visit Da Nang?",
        "It is the wet half of the year, and swimming at My Khe becomes unreliable · red flags go up on rough days and typhoons pass through. But the rain is concentrated in short episodes, mornings are often clear, the city is far less crowded than in summer, and everything indoors is unaffected. If you are planning an October or November trip, keep your beach plans loose and keep a wet-afternoon list ready rather than writing the trip off."
      ],
      [
        "Do I need to book ahead on a rainy day?",
        "It helps more than it does on any other day. Walk-ins are welcome daily from 9 AM to 8 PM, but a wet afternoon sends many people in the same quarter looking for the same two or three hours indoors, and late afternoon is the first slot to go. If you want a specific ritual, especially anything longer than an hour, message us on WhatsApp or call ahead. For a quick gel colour, just turning up usually works."
      ]
    ]
  },
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
