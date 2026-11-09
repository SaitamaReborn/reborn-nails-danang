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
    "slug": "two-treatments-one-visit-da-nang",
    "title": "Two treatments, one visit · how to time nails, pedicure and head spa together",
    "desc": "Stacking treatments in one Da Nang salon visit · real chair times for gel, pedicure rituals and head spa, what can run in parallel, and what the pairs cost.",
    "date": "2026-11-09",
    "cat": "Guides",
    "read": 7,
    "hero": "footbath.jpg",
    "tldr": [
      "Chair time is longer than people plan for. A gel manicure is about 45 minutes, pedicure rituals run 40 to 75, head spa rituals 25 to 105. Nails plus the 65-minute Deep Care is close to two hours.",
      "Two technicians can work on you at once, so the clock is often shorter than the sum. The bill is not: working in parallel buys time, never a discount.",
      "The pairing we do most is gel polish at 200K with the Deep Care pedicure at 450K, so 650K. Swap in the 80-minute Signature head spa at 500K and it is 700K for roughly the same stretch of afternoon.",
      "Message ahead with two numbers, how many people and how many hours you have. Late afternoon fills first, and a stacked visit needs more than one free chair."
    ],
    "body": [
      {
        "h": "Nobody budgets enough minutes",
        "p": [
          "The plan usually arrives at the desk already half-formed. Nails and a hair wash, and we have to be at dinner in An Thuong by seven. That instinct is right: keeping nails, feet and a head spa room on one floor exists so that a single stop can do two jobs. Where it goes wrong is the arithmetic.",
          "This is the clock before anything gets combined. A gel manicure takes about 45 minutes, and a full builder gel set around 80. Pedicures are sold by length: 40 minutes for Soft Touch, 55 for the Relaxing Ritual, 65 for Deep Care, 75 for the Reborn Signature. Head spa runs from a 25-minute basic wash up to 105 minutes for Luxury Skin Recovery, and the 80-minute Signature sits in the middle of that ladder. Foot and calf massage is 15 or 30 minutes. The facial massage add-on is 15.",
          "Combine two of those and the total runs longer than the sentence that described it. Nails and a hair wash sound like an hour. But if the wash you pictured was the 80-minute Signature and the nails meant a builder gel set, you have just described two hours and forty minutes in a chair. Guests who walk out of a salon frustrated nearly always booked by name rather than by minutes."
        ]
      },
      {
        "h": "What can run at the same time",
        "p": [
          "Two technicians can work on you at the same time. Before you plan an afternoon here, that is the most useful thing to know, since it changes the shape of what fits. One takes your nails while another handles the head, neck or feet, and reception sets the order when you arrive. Plenty of our regulars use the salon no other way. Add-ons that slot in beside something longer are listed on the <a href=\"/services/massage/\">massage page</a>.",
          "The clock shrinks. The bill does not. Parallel work is two pairs of hands for the same money as one pair twice over, so nothing comes off the total, and that is worth saying plainly before anyone hopes otherwise.",
          "Your hands set the limit on what can overlap. Anything that needs them free has to take its turn, including steps buried inside treatments you would not file under hand care. The 80-minute Signature head spa puts a hand massage and a warm compress between minutes 60 and 72, and that stretch cannot happen while somebody is painting your nails. Feet are far more cooperative. A pedicure ritual and a manicure sit together without argument, and the herbal soak that opens Deep Care is ten minutes in which nothing at all is being asked of your fingers."
        ]
      },
      {
        "h": "Three timetables that work",
        "p": [
          "<strong>About an hour.</strong> A single treatment with a short add-on beats two half-measures. Pair the 45-minute Relax Ritual at 250K with a 15-minute foot and calf massage at 100K: that comes to 350K and lands inside the hour. A gel manicure at 200K fits with time to spare. What does not fit is a pedicure ritual plus anything else, so do not try to buy one.",
          "<strong>Two hours.</strong> The sweet spot, and the combination we run most often: gel polish at 200K with the 65-minute Deep Care pedicure at 450K, 650K for the two. One after the other that is 110 minutes. With two technicians free it comes closer to the length of the pedicure on its own. Trade the pedicure for the 80-minute Signature head spa at 500K and you are at 700K across much the same slice of the day. Both are on the <a href=\"/services/spa-pedicure/\">spa pedicure menu</a> and the <a href=\"/services/head-spa-hair-wash/\">head spa page</a>.",
          "<strong>A half day.</strong> Head spa, feet and hands together, which is what gets booked before a wedding in Hoi An or on the one slow day of a trip. The Signature head spa at 500K, Deep Care at 450K and gel polish at 200K is 1,150K and 190 minutes added end to end. Give it three and a half hours and treat the finish as the end of the plan rather than the start of the next one. Waxing can ride along in the same visit, in the private treatment room: underarms 120K, half legs 250K, full legs 480K.",
          "Nail art is the line that stretches every timetable. A full cat eye or chrome set is 180K and ombré or a French tip is 220K, and because those are finishes rather than drawings they add no painted minutes per nail. Hand-painted work is 15K to 100K a nail, where per-nail pricing means per-nail time: three painted fingers take three times as long as one. If the design matters more than the schedule, send the reference before the day so the diary can hold it. The full list sits on the <a href=\"/services/nail-art/\">nail art page</a>."
        ]
      },
      {
        "h": "The order to ask for",
        "p": [
          "Even when the minutes are identical, order changes how a stacked visit feels. Ask for the wet, oiled and reclining parts first, and save your hands for last. The longer head spa rituals open with facial cleansing and close with hair oil and a blow-dry. None of that is improved by nails finished twenty minutes earlier.",
          "Feet before hands, on the same logic. Working sandals back on over fresh gel toes is a small feat of contortion, and it is a great deal easier when your fingers are not also freshly done. Gel polish for toes is 180K if you want colour down there that outlasts the trip, and hot stones are an 80K add-on to any pedicure.",
          "What quietly eats an afternoon is whatever you walked in wearing. A set that must come off first costs time and money before your appointment starts: gel colour removal is 60K, press-on removal 70K, builder gel removal 90K. Mention it at booking and it fits into the slot instead of into your dinner reservation. A single broken tip is a lighter matter, 55K and about ten minutes, and the original set does not need to have been ours. The structure options behind all of this are on the <a href=\"/services/gel-nails/\">gel nails page</a>."
        ]
      },
      {
        "h": "Two people, one appointment",
        "p": [
          "Most stacked visits are two people rather than one. Couples and friends are seated side by side, and groups are welcome: message us on Instagram or walk in and ask what is free.",
          "The pattern that works best is a swap. One of you starts in the head spa room while the other is at the nail table, then you change over, and you both finish close to together instead of one of you waiting an hour with a phone. It takes one message to arrange and it is the difference between a shared afternoon and a queue.",
          "Head spa is unisex. It is popular with male travellers after a beach day or a round of golf, which tends to surprise anyone who had written the whole place off as not for them. The menu is never the limit. What matters is how many technicians are free in the hour you picked. If four people want pedicures at five in the afternoon, that is a message for the day before, not a question for the door."
        ]
      },
      {
        "h": "Booking a stacked visit, and finding us",
        "p": [
          "Tell us three things and the sequencing sorts itself out: how many of you there are, how long you have, and what you want done. WhatsApp, Instagram and the telephone all reach the same floor, and a message the day before is enough for almost anything on the menu.",
          "Walk-ins are welcome every day from 9 AM to 8 PM whenever a chair is free, and a single gel colour rarely waits. Two or three treatments back to back is a bigger ask, especially later on, because late afternoon is the first part of the day to fill. Every price is on the iPad menu in 20 languages, and your technician totals the whole visit before anything starts. That is the moment to drop an add-on, rather than meeting it at the till.",
          "Each tool is sterilised before it touches you, and files and buffers are single-use. Staff on the floor speak English and Vietnamese. You'll find us at 56 Châu Thị Vĩnh Tế in the An Thuong quarter, 880 m from My Khe Beach (a ten to twelve minute walk), and <a href=\"https://www.google.com/maps/dir/?api=1&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4\" rel=\"noopener\">directions are here</a>."
        ]
      }
    ],
    "faq": [
      [
        "Can I get my nails and my feet done at the same time?",
        "Yes. Two technicians can work on you at the same time, one at your hands and the other at your feet, head or neck, and reception sets the order when you arrive. A manicure and a pedicure ritual overlap easily: gel polish is 200K and the 65-minute Deep Care pedicure is 450K, so the pair costs 650K whether they run together or one after another. Parallel work saves time. It does not save money. What cannot overlap is any treatment step that needs your hands free, like the hand massage inside the 80-minute Signature head spa."
      ],
      [
        "How long should I set aside for a manicure and a head spa in one visit?",
        "The safe figure is around two hours. A gel manicure takes roughly 45 minutes, while the head spa rituals range from 25 minutes for a basic wash at 120K to 105 minutes for Luxury Skin Recovery at 850K. Most guests book the 80-minute Reborn Signature at 500K first. Nails plus the Signature come to 125 minutes end to end, less when two technicians are free. With only an hour, take the 45-minute Relax Ritual at 250K and save the nails for another day."
      ],
      [
        "Can two of us book treatments side by side in Da Nang?",
        "Yes. Couples and friends sit side by side, and groups are welcome if they message ahead on WhatsApp or Instagram. Most pairs prefer a swap: one starts in the head spa room while the other has nails, then you trade places and finish at about the same time. What limits it is how many technicians are free. For three or more people, or for anything in the late afternoon, send a message the day before instead of walking in."
      ],
      [
        "What order should I do my treatments in?",
        "Wet and reclining first, hands last. The longer head spa rituals begin with facial cleansing and end with hair oil and a blow-dry, so they are better done before your nails are finished rather than after. Feet before hands too, because getting sandals back on over fresh gel toes is easier when your fingers are dry. If you are wearing a set that has to come off, say so when you book: gel colour removal is 60K, press-on removal 70K and builder gel removal 90K, and that time belongs in the appointment rather than on top of it."
      ]
    ]
  },
{
    "slug": "nail-art-da-nang-bringing-a-photo",
    "title": "Bringing a photo · how nail art is priced and briefed in Da Nang",
    "desc": "Nail art in Da Nang · how full-set and per-nail prices add up, how to brief a design from a saved photo, and what the artwork adds to your appointment time.",
    "date": "2026-11-02",
    "cat": "Guides",
    "read": 6,
    "hero": "polish.jpg",
    "tldr": [
      "Two pricing logics sit on the same list. Full-set finishes cover all ten nails for one price, cat eye or chrome at 180K, ombré or French at 220K. Anything hand-made is per nail, from 15K for a line to 100K for a miniature.",
      "Bring the photo, then say which part of it made you save it: the colour, the finish or the painted detail. That sentence shapes the set more than the picture does.",
      "A realistic holiday total: gel polish at 200K with painted accents on two nails works out between 230K and 400K, totalled at the table before anything is painted.",
      "Art does not make a set chip sooner. Length and anything sculpted do the catching, so keep 3D work to one or two nails if you are on a scooter all week."
    ],
    "body": [
      {
        "h": "Everybody arrives with a screenshot",
        "p": [
          "Most nail art appointments here begin with a phone flipped around on the desk. That is the right approach. Our artists work from references every day, so bring any photo or Pinterest save and we will recreate or adapt it. Whether you leave with the thing in the picture comes down to the half-minute of talking after the phone comes out.",
          "A saved photo is several decisions bundled into one image. There is a colour, a length, a shape, a finish, and some amount of painted detail, and each of those is priced and timed separately. A few of them belong to the hands in the photo rather than to yours. Long square tips look different on narrow nail beds, fine detail needs surface area to sit on, and a chrome that reads silver in one photo reads grey on another hand. An artist can tell you which parts will travel across, but only once they know which part you came for.",
          "So say it plainly. I want that colour. I want the little flowers. I want it to look like that chrome. If the answer is the chrome, you are in full-set territory and you have nearly finished choosing. If it is the flowers, the real question is how many nails get them, and that is where the money goes."
        ]
      },
      {
        "h": "Two prices on the same menu",
        "p": [
          "The art list reads as confusing the first time because two different pricing logics sit on it together. Knowing which one your design falls into makes the whole thing legible.",
          "The full-set lines cover all ten nails for a single price. A cat eye or chrome set is 180K. Ombré or a French tip is 220K. These are finishes rather than drawings: the effect comes out of the product and the way it is laid down, so there is no reason to charge by the nail.",
          "All hand-made work is priced per nail, and the ranges are wide because the work is. Stickers cost 10K to 40K, hand-painted designs 15K to 100K, pearls, charms and glitter 20K to 80K, 3D gel flowers 40K to 70K and 3D chrome art 40K to 80K. Fifteen thousand gets you a line or a dot. A hundred thousand pays for a small painting that keeps an artist busy for a while.",
          "Those per-nail prices sit on top of a base set, and the base is where you pick structure instead of decoration. Gel polish in a full colour is 200K. Skittle nails, a different colour on every finger, are 250K and need no painting at all. GelX extensions are 280K, BIAB 300K, classic polish 100K. The full list is on the <a href=\"/services/nail-art/\">nail art page</a>, and your technician totals your particular set on the iPad menu before anything is painted. That is the moment to change your mind, rather than at the till."
        ]
      },
      {
        "h": "Where to put the money",
        "p": [
          "If you already have a number in your head, here is roughly what it buys in this salon.",
          "Under 300K: gel polish at 200K with stickers or a fine painted line on two nails, which lands between 220K and 280K. It is the most common holiday set we do, and it photographs better than people expect it to.",
          "Between 300K and 400K: a chrome or cat-eye set at 180K with hand-painted accents on two nails, so 210K to 380K depending on what those accents are. Or ombré across all ten at 220K, which involves no painting and still looks like a decision was made.",
          "Above 500K: extensions carrying real artwork. GelX at 280K or sculpted builder gel at 400K, plus per-nail work on three or four fingers. This is the set people book for a wedding in Hoi An or for photographs, and it is the one to arrange several days ahead rather than on the morning.",
          "Here is one piece of steering that will save you money. Ten busy nails rarely look better than two. Most sets on our own card are a clean base with one or two worked nails: hand-painted florals with charms on a couple of fingers, a soft French with painted flowers, a milky white almond set with the detail kept to the accent. Put the spending into two nails and do it properly there."
        ]
      },
      {
        "h": "What a design does to the clock",
        "p": [
          "A gel manicure takes about 45 minutes. A full builder gel set is around 80. Hand-painted work is added on top of that, and the arithmetic is the obvious kind: three painted nails take three times as long as one.",
          "That has consequences for how you book. A plain colour can walk in on most days. A design wants a message first, with the photo attached, so we can put enough time in the diary and the right artist in the chair. Late afternoon is the first part of the day to go.",
          "Then there is the set you are already wearing. If you arrive in something that needs taking off, that is time and money before your appointment has started: gel colour removal is 60K, press-on removal 70K, builder gel removal 90K. Mention it when you message and we will build it into the slot.",
          "Keep heavy art off the last evening of a trip. Detailed work is a long sitting, and the night before an early taxi is the worst hour of a holiday to spend in a chair."
        ]
      },
      {
        "h": "What a design has to survive here",
        "p": [
          "Art itself does not shorten a manicure. Paint, chrome, foils and stickers all sit under the top coat, so they go when the set goes and not before. What catches on things is length, and anything that stands proud of the nail surface.",
          "That deserves a minute of thought in this city, since a week in Da Nang means scooter handlebars, a suitcase, sand and a cold beach shower. Charms, pearls and 3D flowers sit above the surface, and sooner or later they will find the inside of a pocket. Most guests limit them to one or two nails and leave the rest flat, which also happens to be how they look best. Keep the length sensible as well: an almond or a short oval takes a beach week here far better than a long square does.",
          "Should something break, a single tip repair is 55K and takes roughly ten minutes, and the set need not have been done with us. On a long trip toes are the quiet value, because toenails grow slowly and gel polish on them is 180K. The structure options behind all this are on the <a href=\"/services/gelx-extensions/\">GelX page</a> and the <a href=\"/services/biab-builder-gel/\">BIAB and builder gel page</a>."
        ]
      },
      {
        "h": "Booking a design, and finding us",
        "p": [
          "Send the reference when you message rather than saving it for the day itself. A photo in advance lets us set aside the time the design actually needs and check that the charms or the chrome you are after are in the drawer. WhatsApp and Instagram both work, and so does the telephone.",
          "We are at 56 Châu Thị Vĩnh Tế in the An Thuong quarter, 880 m from My Khe Beach, which is a walk of ten to twelve minutes. <a href=\"https://www.google.com/maps/dir/?api=1&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4\" rel=\"noopener\">Directions are here</a>. Opening hours are 9 AM to 8 PM every day, and walk-ins are welcome any time a chair is free.",
          "English and Vietnamese are spoken on the floor and the iPad menu runs in 20 languages, which matters when a design is far easier to point at than to describe. Every tool is sterilised before it touches you and files and buffers are single-use. If you are unsure whether your own nails can carry what is in the photo, send it over and ask. We would rather tell you a week early than at the table."
        ]
      }
    ],
    "faq": [
      [
        "How much does a full set with nail art cost in Da Nang?",
        "That depends on which of the two pricing logics your design falls under. At Reborn, a full-set finish covers all ten nails at one price: cat eye or chrome is 180K, ombré or French 220K. Hand-made work is charged per nail over a base set, with stickers at 10K-40K, hand-painted designs 15K-100K, pearls, charms and glitter 20K-80K, 3D gel flowers 40K-70K and 3D chrome art 40K-80K. A typical holiday set, gel polish at 200K with painted accents on two nails, comes to between 230K and 400K. Your technician totals it before starting and never afterwards."
      ],
      [
        "Can a nail salon copy a design from a photo?",
        "Yes. Bring any photo or Pinterest reference, and our artists will recreate or adapt it. Adapt is usually the honest word, as a saved image carries the length, the shape and the nail beds of whoever was in it. Let your technician know which part of the picture you actually want, whether that is the colour, the finish or the painted detail. They will build the set around that part and tell you beforehand which elements will not translate onto your hands."
      ],
      [
        "How long does a nail art appointment take?",
        "A gel manicure takes about 45 minutes and a full builder gel set around 80. Hand-painted work is added on top, roughly in proportion to how many nails are involved. Two accent nails add a little, while artwork across eight nails is a long sitting. If you come in wearing an old set, allow for removal too, at 60K for gel colour, 70K for press-ons and 90K for builder gel. For anything detailed, send the photo ahead, since late afternoon slots fill first."
      ],
      [
        "Does nail art make a manicure chip sooner?",
        "No. Paint, chrome, foils and stickers sit under the top coat and come off when the set does rather than before it. What shortens a set is a free edge that was never sealed properly. What catches on clothes and bags is length, and sculpted work that stands above the nail surface. If you are riding a scooter, handling luggage or spending the week in the sea, keep the length short and the 3D elements to one or two nails. A single tip repair is 55K if one does break."
      ]
    ]
  },
{
    "slug": "is-it-safe-nail-salon-hygiene-da-nang",
    "title": "Is it safe? · how to read a Da Nang nail salon's hygiene before you sit down",
    "desc": "Nail and pedicure hygiene in Da Nang · which tools must be single-use, why a UV box is not a steriliser, and the two questions to ask before you sit down.",
    "date": "2026-10-26",
    "cat": "Guides",
    "read": 6,
    "hero": "tray.jpg",
    "tldr": [
      "Two checks settle most of it, and both happen while you are still standing. Files, buffers and wooden sticks should come out of a sealed packet in front of you. Metal tools should arrive in a pouch, sterilised by heat.",
      "A UV cabinet is a storage box with a lamp in it. If that is the answer you get to how the metal is sterilised, it is not an answer.",
      "Feet carry more risk than hands. Prefer a basin that gets emptied and wiped between guests over a jetted whirlpool tub, and do not shave your legs on the day of a pedicure.",
      "At Reborn, files and buffers are single-use and every tool is sterilised in a medical steriliser before it touches you. Ask to see it. Nobody minds."
    ],
    "body": [
      {
        "h": "The question people ask sideways",
        "p": [
          "The question usually comes softened. Guests ask if we are busy, or which products we use, when what they really want to know is whether they will catch something off a pedicure bowl. Ask it flat. It is a fair question, and this city gives you cause to ask it: nail salons here range from a plastic stool on a pavement to a resort spa charging four times the going rate, and the price on the menu tells you very little about the hygiene. We have covered <a href=\"/journal/nail-salon-prices-da-nang-2026/\">what things actually cost here</a> before. The cheapest set and the most expensive room can fail the same checks.",
          "The checks are short. Three things settle it, and you can see all of them before committing to anything: whether the porous tools get opened in front of you, how the metal ones are sterilised, and what happens to the water between one pair of feet and the next. The chairs, the flowers and the welcome tea are all comfort, a real thing to pay for but a separate purchase from safety."
        ]
      },
      {
        "h": "Porous or metal · the only distinction that matters",
        "p": [
          "Split the tray into two piles, because the halves obey completely different rules. The porous pile is files, buffers, wooden cuticle sticks, pumice, sponges, toe separators. These materials absorb. You cannot clean them, because whatever you want gone has sunk into the material rather than sitting on top of it. There is one acceptable handling of this pile, single-use, and one way to verify it, which is seeing the packet opened. At Reborn files and buffers are single-use, opened at the table.",
          "The metal pile holds cuticle nippers, pushers, clippers, scissors and tweezers. They are non-porous, so they really can be cleaned and reused for years. Sterilising means a scrub first and then heat, usually under pressure. At Reborn every tool is sterilised in a medical steriliser before it touches you, and what a guest can check at any salon is a sealed pouch opened at the table.",
          "That brings us to the blue-lit glass box sitting on so many counters in this city. A UV cabinet is no steriliser: it is a storage container with a lamp inside. Ultraviolet light does not get inside the hinge of a cuticle nipper, which is exactly where anything that survives does its surviving, and actual exposure times fall nowhere near what disinfection requires. Tidy and sterile are different words."
        ]
      },
      {
        "h": "Feet carry more risk than hands",
        "p": [
          "Risk does not fall evenly across the two halves of the menu. The infection outbreaks actually documented in nail salons came from pedicures, not manicures, and they usually followed the same route: water left standing in the pipework of a jetted whirlpool footbath. A pipe is not a surface. Nobody wipes its inside between guests, and that is how the more impressive-looking tub turns out to be the less careful choice.",
          "So in a pedicure room, look at the bowl rather than at the chair. A basin emptied, wiped and refilled while you watch beats an elaborate jetted tub. Our rituals run 40 to 75 minutes and open with a warm herbal foot bath: Soft Touch at 250K, the Relaxing Ritual 55 minutes at 380K, Deep Care 65 minutes at 450K, the Reborn Signature 75 minutes at 590K. Deep Care is the one most people book, and the one with foot steaming, exfoliation and intensive heel work in it. The ladder sits on the <a href=\"/services/spa-pedicure/\">spa pedicure page</a>.",
          "One rule here is yours rather than ours. Do not shave your legs on the day of a pedicure. Shaving leaves micro-abrasions you cannot see, and a long warm soak is the one moment you would rather have unbroken skin. Give it a day either side, and do not stack waxing and a pedicure on the same legs in the same hour. Our <a href=\"/services/waxing/\">waxing</a> runs 90K to 480K in a private room, and the preparation is the reverse of what people assume: hair grown to about 5 mm, razor left alone."
        ]
      },
      {
        "h": "What a careful technician will refuse to do",
        "p": [
          "Being told no is the signal most guests misread as bad service, and it is usually the clearest evidence you are in the right place. A technician should decline to cut your cuticles. The eponychium, the band of living skin at the base of the nail, is a seal. Cut it away and you have opened the gap it existed to close, and the swollen, tender sides a week later get blamed on the gel rather than on the scissors. Pushing it back gently and lifting off dead tissue is the job.",
          "They should also refuse to paint over a nail that looks infected. A nail that is thickened, yellowing, crumbling at the edge or lifting off its bed needs a doctor, and three weeks of colour on top only hides it while whatever is underneath keeps going. The answer is the same for an angry ingrown toenail, broken skin or a wart. None of it is salon work. A salon willing to take it on has shown you what it will do to the person after you.",
          "The last one to watch is the drill. An electric file has a proper place in removal and in work on builder gel. Run across the surface of your own nail by somebody in a hurry, it thins the plate and leaves faint pale rings you can see through. If you are in builder gel or BIAB, removal should be a soak and a light file rather than a grind: builder gel removal is 90K, gel colour removal 60K, press-on removal 70K, and the whole reason to pay for it is the nail plate underneath. That menu is on the <a href=\"/services/biab-builder-gel/\">BIAB and builder gel page</a>."
        ]
      },
      {
        "h": "The hygiene step almost everybody skips",
        "p": [
          "There is a pattern specific to long trips, and it produces more nail trouble here than any dirty tool does. Someone arrives having worn the same set for five weeks, because they were travelling, and somewhere in week three a corner lifted. That gap is the whole problem: a lifted edge over a warm, slightly damp nail is the one genuinely common complaint we see, and it starts as a green or grey patch rather than as anything that hurts.",
          "That has two consequences. First, do not pick or peel a set off, however satisfying the first corner feels. Peeling pulls away layers of your own nail plate and leaves you thin and tender for a couple of months. Proper removal costs 60K for gel colour plus ten minutes of someone else's time, and we do not rip or force an old layer off.",
          "The second is that a lift mid-trip wants dealing with now rather than at the airport. A single tip repair is 55K and about ten minutes, and you do not need to have had the original set done with us. And if your nails are soft to begin with, a hard gel strengthening layer from 60K under gel polish at 200K does more across a three-week trip than anything stronger laid on top. The <a href=\"/services/gel-nails/\">gel nails page</a> has the list."
        ]
      },
      {
        "h": "Two questions, and how to find us",
        "p": [
          "Anywhere in this city, two questions at the desk will settle it. Are the files new, and how do you sterilise the metal tools. You are listening for specifics rather than reassurance: a packet opened, a pouch, heat. Vague and cheerful is a no. A salon doing this properly tends to be pleased you asked.",
          "For the record, here are our answers: files and buffers are single-use, every tool goes through a medical steriliser before it touches you, and reception will show you the machine. Staff on the floor speak English and Vietnamese, and the iPad menu comes in 20 languages, which helps when you are trying to describe a nail that is doing something strange.",
          "You will find us at 56 Châu Thị Vĩnh Tế in the An Thuong quarter, 880 m from My Khe Beach, open every day from 9 AM to 8 PM, and the <a href=\"https://www.google.com/maps/dir/?api=1&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4\" rel=\"noopener\">directions are here</a>. Walk-ins are fine if a chair is free. Longer rituals are better booked ahead, since late afternoon slots go first. If you are unsure whether something on a nail or a foot is for a salon or a doctor, send a photo on WhatsApp first. We will give you an honest answer, even when that answer is that we should not touch it."
        ]
      }
    ],
    "faq": [
      [
        "Is it safe to get your nails done in Vietnam?",
        "Yes, with the caveat that applies in every country: it depends on the salon rather than on the border. Two checks cover most of the risk. Porous tools · files, buffers, wooden sticks, pumice · must come out of a sealed packet in front of you, because porous materials absorb and cannot be cleaned afterwards. Metal tools · nippers, pushers, clippers · must be scrubbed and then sterilised with heat, not simply parked in a UV cabinet, which is a storage box with a lamp in it. At Reborn, files and buffers are single-use and every tool is sterilised in a medical steriliser before it touches you. Ask the same two questions at any salon in Da Nang; one that is doing it properly will answer specifically rather than generally."
      ],
      [
        "Can you get a fungal or bacterial infection from a pedicure?",
        "It can happen, though not often, and the risk sits in two places you can identify rather than everywhere at once. Standing water is the first: the infection outbreaks documented in nail salons trace back to jetted whirlpool footbaths, where water stays inside pipework nobody can wipe between guests. Whichever looks more expensive, a plain basin emptied and wiped in front of you is the safer setup. Broken skin is the second, which is why you should not shave your legs on the day of a pedicure. A nail that is already thickened, yellow or crumbling is a job for a doctor, and a salon should refuse to polish over it instead of hiding it for three weeks."
      ],
      [
        "Does a UV sterilising box actually sterilise nail tools?",
        "No. That glass-fronted, blue-lit cabinet on many salon counters is a storage container with an ultraviolet lamp in it. Its light does not get into the hinges and joints of a cuticle nipper, exactly where contamination survives, and real-world exposure times come nowhere close to what disinfection would need even on a flat, exposed surface. Sterilising metal tools takes a scrub and then heat, usually under pressure; what a guest can verify is a sealed pouch opened at the table. When a salon answers the sterilisation question by pointing at the blue box, you have your answer."
      ],
      [
        "Should I bring my own tools to a nail salon?",
        "You can, and a few regulars here do keep a personal kit, though it solves a smaller problem than people expect. The porous items are where the real risk lives, and any salon worth sitting down in already opens those fresh for every guest, so your own file changes nothing. The metal tools are the ones worth a question, and the answer you want names heat rather than a cabinet. If you do bring your own, hand them over at the start rather than halfway through, and expect them to be wiped before use. Otherwise, two questions asked at the desk will do more for you than anything you can pack."
      ]
    ]
  },
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
