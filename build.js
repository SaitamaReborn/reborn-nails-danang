/* Reborn Nails & Retreat — static site generator (zero deps)
   node build.js  → outputs into ./docs (GitHub Pages source)
   Drip publishing: core pages at launch, then DRIP_PER_DAY location pages/day,
   deterministic order (md5 salt), sitemap lists ONLY published pages. */
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {BIZ,SERVICES,REVIEWS,SOCIAL,LOCATIONS,HUBS}=require('./data.js');

const SITE="https://saitamareborn.github.io/reborn-nails-danang";
const BASE="/reborn-nails-danang";
const LAUNCH=new Date("2026-07-24T00:00:00Z");
const DRIP_PER_DAY=4;
const SALT="reborn-dn-2026"; // NEVER change (drip order stability)
const NOW=process.env.BUILD_DATE?new Date(process.env.BUILD_DATE):new Date();
const GSC_META=fs.existsSync('./gsc-meta.txt')?fs.readFileSync('./gsc-meta.txt','utf8').trim():'';
const GA_ID=fs.existsSync('./ga-id.txt')?fs.readFileSync('./ga-id.txt','utf8').trim():'';

const md5=s=>crypto.createHash('md5').update(s).digest('hex');
const hashN=(s,n)=>parseInt(md5(SALT+s).slice(0,8),16)%n;
const R=6371;
const dist=(a,b)=>{const dLa=(b.lat-a.lat)*Math.PI/180,dLo=(b.lng-a.lng)*Math.PI/180;
 const x=Math.sin(dLa/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLo/2)**2;
 return 2*R*Math.asin(Math.sqrt(x));};
const km=d=>d<1?`${Math.round(d*100)*10} m`:`${d.toFixed(1).replace('.0','')} km`;
const walkMin=d=>Math.max(2,Math.round(d/4.5*60));
const grabMin=d=>Math.max(3,Math.round(d/22*60)+2);

const daysSince=Math.floor((NOW-LAUNCH)/86400000);
const dripOrder=[...LOCATIONS].sort((a,b)=>md5(SALT+a.slug).localeCompare(md5(SALT+b.slug)));
const publishedLocs=daysSince<0?[]:dripOrder.slice(0,Math.max(0,(daysSince+1)*DRIP_PER_DAY));
const pubDate=slug=>{const i=dripOrder.findIndex(l=>l.slug===slug);const d=new Date(LAUNCH);d.setUTCDate(d.getUTCDate()+Math.floor(i/DRIP_PER_DAY));return d.toISOString().slice(0,10);};

const OUT='./docs';
fs.rmSync(OUT,{recursive:true,force:true});
fs.mkdirSync(OUT+'/assets',{recursive:true});
for(const f of fs.readdirSync('./assets'))fs.copyFileSync('./assets/'+f,OUT+'/assets/'+f);

/* ---------- layout ---------- */
const head=(t,d,url,extra='')=>`<!doctype html><html lang="${extra.includes('lang-override')?'':'en'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t}</title>
<meta name="description" content="${d}">
<link rel="canonical" href="${url}">
${GSC_META?`<meta name="google-site-verification" content="${GSC_META}">`:''}
<meta property="og:title" content="${t}"><meta property="og:description" content="${d}">
<meta property="og:image" content="${SITE}/assets/og.jpg"><meta property="og:type" content="website"><meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💅</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400..700&family=Prata&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${BASE}/assets/style.css">
${GA_ID?`<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${GA_ID}');</script>`:''}
${extra}
</head><body>`;

const nav=(active='')=>`<header class="nav"><div class="wrap navin">
<a class="logo" href="${BASE}/"><img src="${BASE}/assets/logo.webp" alt="Reborn Nails & Retreat logo" width="96" height="73"></a>
<nav class="navlinks">
<a href="${BASE}/#services"${active=='s'?' class="on"':''}>Services & Prices</a>
<a href="${BASE}/da-nang/">Near you in Da Nang</a>
<a href="${BASE}/#reviews">Reviews</a>
<a href="${BASE}/#find-us">Find us</a>
</nav>
<a class="cta small" href="${BIZ.directions}" rel="noopener">📍 Directions</a>
</div>
<div class="langbar wrap">🌍 <a href="${BASE}/">EN</a>${HUBS.map(h=>` · <a href="${BASE}/${h.dir}/">${h.flag} ${h.code.toUpperCase()}</a>`).join('')}<span class="langnote"> — ${BIZ.langs} spoken in salon</span></div>
</header>`;

const footer=()=>`<footer class="foot"><div class="wrap">
<img src="${BASE}/assets/logo.webp" alt="" width="120" height="92" class="flogo" loading="lazy">
<p class="fnap"><strong>${BIZ.name}</strong> · ${BIZ.street}, ${BIZ.ward}, ${BIZ.city} ${BIZ.zip}, Vietnam<br>
${BIZ.hoursHuman} · <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a> · ★ ${BIZ.rating} on <a href="${BIZ.maps}" rel="noopener">Google Maps</a></p>
<p class="fsoc"><a href="${BIZ.instagram}" rel="noopener">Instagram</a> · <a href="${BIZ.tiktok}" rel="noopener">TikTok</a> · <a href="${BIZ.facebook}" rel="noopener">Facebook</a> · <a href="${BIZ.tripadvisor}" rel="noopener">TripAdvisor</a> · <a href="${BIZ.review}" rel="noopener">Leave a review</a></p>
<nav class="fnav"><a href="${BASE}/">Home</a>${SERVICES.map(s=>` · <a href="${BASE}/services/${s.slug}/">${s.short}</a>`).join('')} · <a href="${BASE}/da-nang/">Da Nang areas</a></nav>
<p class="fcopy">© ${NOW.getUTCFullYear()} ${BIZ.name} — premium nail salon, spa pedicure, head spa & waxing in Da Nang.</p>
</div></footer></body></html>`;

const stars=`<span class="stars">★★★★★</span>`;
const reviewCards=(n=6)=>`<div class="revrow">${REVIEWS.slice(0,n).map(r=>`
<figure class="rev"><figcaption>${r.f} <strong>${r.n}</strong> ${stars}</figcaption><blockquote>${r.t}</blockquote><span class="rsvc">${r.svc}</span></figure>`).join('')}</div>
<p class="revmore">Read all <strong>${BIZ.ratingCount}+ reviews (★ ${BIZ.rating})</strong> on <a href="${BIZ.maps}" rel="noopener">Google Maps</a> or <a href="${BIZ.tripadvisor}" rel="noopener">TripAdvisor</a>.</p>`;

const mapBlock=(from='')=>`<section class="mapsec" id="find-us"><div class="wrap">
<h2>Find us — 5 minutes from My Khe Beach</h2>
<p class="addr"><strong>${BIZ.street}, ${BIZ.ward}, ${BIZ.city}</strong> · ${BIZ.hoursHuman} · <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a></p>
<div class="mapframe"><iframe src="https://www.google.com/maps?q=Reborn+Nails+%26+Retreat,+56+Ch%C3%A2u+Th%E1%BB%8B+V%C4%A9nh+T%E1%BA%BF,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed" width="100%" height="380" style="border:0" loading="lazy" title="Map to Reborn Nails & Retreat Da Nang" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<p class="mapbtns"><a class="cta" href="${from||BIZ.directions}" rel="noopener">Get directions on Google Maps</a>
<a class="ghost" href="${BIZ.instagram}" rel="noopener">Book by Instagram DM</a>
<a class="ghost" href="tel:${BIZ.phoneRaw}">Call ${BIZ.phone}</a></p>
</div></section>`;

const faqHtml=faq=>`<div class="faq">${faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
const faqLd=faq=>({"@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))});
const ld=o=>`<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const bizLd=(extra={})=>({"@context":"https://schema.org","@type":"NailSalon","name":BIZ.name,
 "image":SITE+"/assets/salon.jpg","url":SITE+"/","telephone":BIZ.phone,"priceRange":"₫₫",
 "address":{"@type":"PostalAddress","streetAddress":BIZ.street,"addressLocality":BIZ.city,"addressRegion":"Đà Nẵng","postalCode":BIZ.zip,"addressCountry":"VN"},
 "geo":{"@type":"GeoCoordinates","latitude":BIZ.lat,"longitude":BIZ.lng},
 "openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"09:00","closes":"20:00"},
 "aggregateRating":{"@type":"AggregateRating","ratingValue":BIZ.rating,"reviewCount":BIZ.ratingCount},
 "hasMap":BIZ.maps,"sameAs":[BIZ.instagram,BIZ.tiktok,BIZ.facebook,BIZ.tripadvisor,BIZ.maps],...extra});

/* ---------- CSS ---------- */
fs.writeFileSync(OUT+'/assets/style.css',`
:root{--paper:#F6F1E7;--panel:#FDFBF5;--ink:#3B2C1E;--ink2:#8A7763;--brand:#7A4A2B;--brand2:#54331B;--accent:#A82E2A;--gold:#B08A3E;--line:rgba(122,74,43,.16);--serif:"Bodoni 72",Didot,"Prata",serif;--sans:"Quicksand",ui-rounded,-apple-system,"Segoe UI",sans-serif}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased}
img{max-width:100%;height:auto}a{color:var(--brand)}h1,h2,h3{font-family:var(--serif);font-weight:400;color:var(--brand2);line-height:1.12;text-wrap:balance}
h1{font-size:clamp(34px,6vw,58px);margin:.2em 0}h2{font-size:clamp(27px,4vw,40px)}h3{font-size:22px}
.wrap{max-width:1140px;margin:0 auto;padding:0 22px}
.nav{position:sticky;top:0;background:rgba(246,241,231,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);z-index:50}
.navin{display:flex;align-items:center;gap:18px;padding:10px 22px}
.navlinks{display:flex;gap:20px;flex:1;flex-wrap:wrap;font-weight:600;font-size:15px}
.navlinks a{text-decoration:none}.navlinks a.on{color:var(--accent)}
.langbar{font-size:13px;color:var(--ink2);padding:0 22px 8px}.langbar a{text-decoration:none;font-weight:700}.langnote{opacity:.75}
.cta{display:inline-block;background:var(--brand);color:#FBF3E6;border-radius:14px;padding:13px 22px;font-weight:700;text-decoration:none}
.cta.gold{background:linear-gradient(135deg,#CBA35A,#A9812F);color:#2A1F0C}.cta.small{padding:9px 14px;font-size:14px}
.ghost{display:inline-block;border:1.5px solid rgba(122,74,43,.35);border-radius:14px;padding:12px 20px;font-weight:700;text-decoration:none;color:var(--brand);background:var(--panel)}
.hero{position:relative;overflow:hidden;text-align:center;padding:46px 22px 40px}
.hero .flor{position:absolute;pointer-events:none;width:min(300px,32vw)}.flor.tl{top:-6px;left:-6px}.flor.tr{top:-6px;right:-6px}
.hero .hwrap{position:relative;max-width:900px;margin:0 auto}
.hero .hlogo{width:170px;margin:0 auto 6px}
.tag{font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:var(--accent);font-weight:700}
.sub{font-size:19px;color:var(--ink2);max-width:640px;margin:14px auto}
.badges{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:18px 0;font-size:14.5px;font-weight:600;color:var(--brand)}
.badges span{background:var(--panel);border:1px solid var(--line);border-radius:999px;padding:8px 16px}
.stars{color:var(--gold);letter-spacing:2px}
.heromedia{border-radius:26px;overflow:hidden;box-shadow:0 18px 50px rgba(90,60,30,.16);margin-top:26px}
.heromedia video,.heromedia img{width:100%;display:block}
.btnrow{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px}
section{padding:52px 0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-top:26px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:22px;overflow:hidden;box-shadow:0 10px 30px rgba(90,60,30,.08);text-decoration:none;color:var(--ink);display:flex;flex-direction:column}
.card img{height:190px;object-fit:cover;width:100%}
.card .cb{padding:16px 18px 18px;display:flex;flex-direction:column;gap:6px;flex:1}
.card h3{margin:0}.card .cd{color:var(--ink2);font-size:14.5px;flex:1}
.card .cp{font-weight:800;color:var(--brand)}
.ptable{width:100%;border-collapse:collapse;background:var(--panel);border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(90,60,30,.08)}
.ptable td{padding:13px 18px;border-bottom:1px dashed var(--line);font-weight:600}
.ptable td:last-child{text-align:right;font-weight:800;color:var(--brand);white-space:nowrap}
.ptable tr:last-child td{border-bottom:none}
.revrow{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.rev{background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:18px 20px;margin:0}
.rev blockquote{margin:10px 0;font-size:15.5px}.rev figcaption{font-size:15px}
.rsvc{font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);font-weight:700}
.revmore{margin-top:18px;color:var(--ink2)}
.socrow{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin-top:24px}
.soc{position:relative;border-radius:20px;overflow:hidden;display:block;color:#fff;text-decoration:none;min-height:190px;background:#333}
.soc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.75}
.soc .st{position:relative;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;height:190px;background:linear-gradient(180deg,transparent 20%,rgba(30,18,8,.82))}
.soc b{font-size:16px}.soc span{font-size:13.5px;opacity:.92}
.soc .badge{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.92);color:#3B2C1E;border-radius:999px;padding:5px 12px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}
.mapsec{background:var(--panel);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.mapframe{border-radius:22px;overflow:hidden;box-shadow:0 10px 30px rgba(90,60,30,.1);margin:18px 0}
.mapbtns{display:flex;gap:12px;flex-wrap:wrap}
.faq{margin-top:20px}.faq details{background:var(--panel);border:1px solid var(--line);border-radius:16px;margin-bottom:10px;padding:4px 18px}
.faq summary{font-weight:700;padding:12px 0;cursor:pointer;color:var(--brand2)}
.faq p{margin:0 0 14px;color:var(--ink2)}
.crumb{font-size:13.5px;color:var(--ink2);padding-top:18px}.crumb a{text-decoration:none}
.locmeta{display:flex;gap:12px;flex-wrap:wrap;margin:16px 0;font-weight:700;font-size:15px}
.locmeta span{background:var(--panel);border:1px solid var(--line);border-radius:999px;padding:9px 16px}
.foot{background:#3B2C1E;color:#E8DCC8;padding:44px 0;text-align:center}
.foot a{color:#E4C98C}.flogo{filter:brightness(2.4) sepia(.3);opacity:.9}
.fnap{margin:14px 0}.fnav{font-size:14px;margin:12px 0}.fcopy{font-size:12.5px;opacity:.7}
.hublist{columns:3;column-gap:26px;margin-top:20px}
.hublist a{display:block;padding:7px 0;text-decoration:none;font-weight:600;border-bottom:1px dashed var(--line)}
@media(max-width:760px){.hublist{columns:1}.navlinks{display:none}}
.answer{background:var(--panel);border-inline-start:4px solid var(--gold);border-radius:14px;padding:16px 20px;margin:20px 0;font-size:17px}
`);

/* ---------- home ---------- */
const svcCards=SERVICES.map(s=>`<a class="card" href="${BASE}/services/${s.slug}/"><img src="${BASE}/assets/${s.img}" alt="${s.name} at Reborn Nails & Retreat Da Nang" loading="lazy"><div class="cb"><h3>${s.name}</h3><div class="cd">${s.desc}</div><div class="cp">${s.prices[0][0]} — ${s.prices[0][1]} · full menu →</div></div></a>`).join('');
const socCards=SOCIAL.map(s=>`<a class="soc" href="${s.url}" rel="noopener" target="_blank"><img src="${BASE}/assets/${s.img}" alt="" loading="lazy"><span class="badge">${s.type}</span><span class="st"><b>${s.label}</b><span>${s.t}</span></span></a>`).join('');

const homeHtml=head(
 `Nail Salon & Head Spa in Da Nang — ${BIZ.name} · ★4.9`,
 `Premium nail salon near My Khe Beach: gel nails from 200K, BIAB, GelX, nail art, spa pedicure, Vietnamese head spa & waxing. ★4.9 on Google (150+ reviews). Open daily 9–20, walk-ins welcome.`,
 SITE+"/",
 HUBS.map(h=>`<link rel="alternate" hreflang="${h.code==='zh'?'zh-Hans':h.code}" href="${SITE}/${h.dir}/">`).join('')+`<link rel="alternate" hreflang="en" href="${SITE}/"><link rel="alternate" hreflang="x-default" href="${SITE}/">`)
+nav()
+`<div class="hero"><img class="flor tl" src="${BASE}/assets/flor_tl.webp" alt=""><img class="flor tr" src="${BASE}/assets/flor_tr.webp" alt="">
<div class="hwrap">
<img class="hlogo" src="${BASE}/assets/logo.webp" alt="${BIZ.name}" width="170">
<p class="tag">Nails · Spa Pedicure · Head Spa · Waxing</p>
<h1>The nail salon Da Nang travellers fall in love with</h1>
<p class="sub">5 minutes from My Khe Beach. ${stars} <strong>${BIZ.rating} on Google</strong> · ${BIZ.ratingCount}+ reviews · sterilised single-use tools · ${BIZ.langs}.</p>
<div class="btnrow"><a class="cta gold" href="${BIZ.directions}" rel="noopener">📍 Get directions</a><a class="cta" href="#services">See services & prices</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Book on Instagram</a></div>
<div class="badges"><span>💅 Gel from 200K</span><span>🌿 Head spa from 120K</span><span>🦶 Pedicure rituals 250–590K</span><span>🧖 Open daily 9:00–20:00</span></div>
<div class="heromedia"><video autoplay muted loop playsinline poster="${BASE}/assets/nails.jpg" src="${BASE}/assets/vid_hero.mp4" title="Fresh gel nails at Reborn Da Nang"></video></div>
</div></div>
<section id="services"><div class="wrap"><p class="tag">Menu & prices</p><h2>Services at Reborn — full price list</h2>
<p class="sub" style="margin-left:0;text-align:left">Prices in thousand Vietnamese đồng: 100K = 100,000 ₫ ≈ $4. No hidden fees — the menu below is exactly what you pay in the salon.</p>
<div class="grid">${svcCards}</div></div></section>
<section id="reviews"><div class="wrap"><p class="tag">Guest love</p><h2>★ ${BIZ.rating} from ${BIZ.ratingCount}+ Google reviews</h2>${reviewCards(9)}</div></section>
<section><div class="wrap"><p class="tag">As seen on social</p><h2>TikTok & Instagram love Reborn</h2>
<p class="sub" style="margin-left:0;text-align:left">Follow the salon or watch creators' visits — real sets, real rituals, zero filters needed.</p>
<div class="socrow">${socCards}</div></div></section>
${mapBlock()}
<section><div class="wrap"><p class="tag">Good to know</p><h2>Frequently asked questions</h2>
<div class="answer"><strong>${BIZ.name}</strong> is a premium nail salon and head spa at ${BIZ.street}, Da Nang — a 5-minute walk from My Khe Beach in the An Thuong quarter. It is rated ${BIZ.rating}★ from ${BIZ.ratingCount}+ Google reviews, open every day 9:00–20:00, and welcomes walk-ins.</div>
${faqHtml([
 ["Do I need to book?","No — walk-ins are welcome every day from 9 AM to 8 PM. To reserve a specific time, message us on Instagram @reborn_nailsnretreat or call "+BIZ.phone+"."],
 ["How much does a manicure cost in Da Nang?","At Reborn: classic manicure 70K, gel polish 200K, BIAB 300K, GelX extensions 280K. A full cat-eye or chrome nail-art set is 180K. That is roughly a third of typical prices in Korea, Japan, Australia or Europe."],
 ["Do the staff speak English or Korean?","Yes — the team welcomes guests in English, Korean, Japanese, Russian, French, Spanish and Chinese, and the salon menu is multilingual."],
 ["Is it hygienic?","Every metal tool is sterilised in a medical steriliser before it touches you; files and buffers are single-use. You can see the steriliser working in the salon."],
 ["Where exactly is the salon?","56 Châu Thị Vĩnh Tế, Ngũ Hành Sơn — in the An Thuong tourist quarter, 400 m from My Khe Beach. Open the map above or tap Get Directions."],
 ["Can I pay by card?","Yes — cards and cash (VND) are both accepted."]])}
</div></section>`
+ld({...bizLd(),"@id":SITE+"/#salon"})
+ld({"@context":"https://schema.org",...faqLd([
 ["Do I need to book at Reborn Nails & Retreat?","No — walk-ins are welcome every day 9:00–20:00. Booking is possible via Instagram DM @reborn_nailsnretreat or by phone "+BIZ.phone+"."],
 ["How much does a manicure cost in Da Nang?","At Reborn Nails & Retreat: manicure 70K, gel polish 200K, BIAB 300K, GelX 280K, full nail-art sets from 180K (thousand VND)."],
 ["Where is Reborn Nails & Retreat located?","56 Châu Thị Vĩnh Tế, Ngũ Hành Sơn, Da Nang — a 5-minute walk from My Khe Beach."]])})
+footer();
fs.writeFileSync(OUT+'/index.html',homeHtml);

/* ---------- service pages ---------- */
for(const s of SERVICES){
 const url=`${SITE}/services/${s.slug}/`;
 const others=SERVICES.filter(x=>x.slug!==s.slug).slice(0,3);
 const html=head(`${s.name} in Da Nang — prices & menu · ${BIZ.short} ★4.9`,
  `${s.desc} Full ${s.short.toLowerCase()} price list at ${BIZ.name}, 5 min from My Khe Beach. ★4.9 Google rating, walk-ins daily 9–20.`,url)
 +nav('s')
 +`<div class="wrap"><p class="crumb"><a href="${BASE}/">Home</a> › <a href="${BASE}/#services">Services</a> › ${s.short}</p></div>
<div class="hero"><div class="hwrap">
<p class="tag">${BIZ.short} · Da Nang</p><h1>${s.name} in Da Nang</h1>
<p class="sub">${s.desc}</p>
<div class="btnrow"><a class="cta gold" href="${BIZ.directions}" rel="noopener">📍 Directions</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Book on Instagram</a></div>
<div class="heromedia">${s.vid?`<video autoplay muted loop playsinline poster="${BASE}/assets/${s.img}" src="${BASE}/assets/vid_hero.mp4" title="${s.name} at Reborn Da Nang"></video>`:`<img src="${BASE}/assets/${s.img}" alt="${s.name} — ${BIZ.name} Da Nang">`}</div>
</div></div>
<section><div class="wrap"><h2>${s.short} price list</h2>
<div class="answer">${s.name} at ${BIZ.name} costs <strong>${s.prices[0][1]}</strong> for ${s.prices[0][0].toLowerCase()} (thousand VND — 100K ≈ $4). ${BIZ.hoursHuman}, walk-ins welcome.</div>
<table class="ptable">${s.prices.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td></tr>`).join('')}</table></div></section>
<section><div class="wrap"><h2>Why guests choose Reborn for ${s.short.toLowerCase()}</h2>${reviewCards(3)}</div></section>
<section><div class="wrap"><h2>${s.short} — FAQ</h2>${faqHtml(s.faq)}</div></section>
${mapBlock()}
<section><div class="wrap"><h2>Also popular</h2><div class="grid">${others.map(o=>`<a class="card" href="${BASE}/services/${o.slug}/"><img src="${BASE}/assets/${o.img}" alt="${o.name}" loading="lazy"><div class="cb"><h3>${o.name}</h3><div class="cd">${o.desc}</div></div></a>`).join('')}</div></div></section>`
 +ld({"@context":"https://schema.org","@type":"Service","name":s.name,"provider":{"@id":SITE+"/#salon","@type":"NailSalon","name":BIZ.name,"address":{"@type":"PostalAddress","streetAddress":BIZ.street,"addressLocality":BIZ.city,"addressCountry":"VN"},"telephone":BIZ.phone},"areaServed":"Da Nang","url":url})
 +ld({"@context":"https://schema.org",...faqLd(s.faq)})
 +ld({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":SITE+"/"},{"@type":"ListItem","position":2,"name":s.name,"item":url}]})
 +footer();
 fs.mkdirSync(`${OUT}/services/${s.slug}`,{recursive:true});
 fs.writeFileSync(`${OUT}/services/${s.slug}/index.html`,html);
}

/* ---------- location pages (pSEO, dripped) ---------- */
const INTROS=[
 (l)=>`Staying near ${l.name}? The best-rated nail salon around is closer than you think.`,
 (l)=>`From ${l.name}, a ★${BIZ.rating} nail and head-spa ritual is only ${'{D}'} away.`,
 (l)=>`Here is exactly how to get perfect nails when you are at ${l.name}.`,
 (l)=>`${l.name} to fresh gel nails in ${'{T}'} — this is Da Nang's favourite self-care stop.`,
 (l)=>`Looking for a trusted manicure spot near ${l.name}? Travellers keep choosing the same address.`,
 (l)=>`Your ${l.name} day pairs perfectly with a spa pedicure just ${'{D}'} away.`];
for(const l of publishedLocs){
 const d=dist(BIZ,l),w=walkMin(d),g=grabMin(d),near=d<=1.6;
 const url=`${SITE}/nail-salon/${l.slug}/`;
 const T=near?`${w} min on foot`:`${g} min by Grab`;
 const intro=INTROS[hashN(l.slug,INTROS.length)](l).replace('{D}',km(d)).replace('{T}',T);
 const sPick=[SERVICES[hashN(l.slug+'a',4)],SERVICES[4+hashN(l.slug+'b',3)]];
 const dirUrl=`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(l.name+' Da Nang')}&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4`;
 const faq=[
  [`How far is Reborn Nails & Retreat from ${l.name}?`,`${BIZ.name} is about ${km(d)} from ${l.name}${near?` — roughly a ${w}-minute walk`:` — around ${g} minutes by Grab or taxi`}. The address is ${BIZ.street}, ${BIZ.ward}, Da Nang.`],
  [`Do I need a booking if I come from ${l.name}?`,`No — walk-ins are welcome every day from 9 AM to 8 PM. For a guaranteed slot, message Instagram @reborn_nailsnretreat before you leave ${l.name}.`],
  [`What should I try?`,`Guests coming from ${l.name} love the ${sPick[0].short} (${sPick[0].prices[0][1]}) and the Deep Care spa pedicure (450K, 65 min) — Reborn's best seller.`]];
 const html=head(`Nail Salon near ${l.name} — ${km(d)} away · ${BIZ.short} ★4.9`,
  `The closest top-rated nail salon & head spa to ${l.name}: ${BIZ.name}, ${km(d)} away (${T}). Gel nails 200K, pedicure rituals, ★4.9 on Google. Open daily 9–20.`,url)
 +nav()
 +`<div class="wrap"><p class="crumb"><a href="${BASE}/">Home</a> › <a href="${BASE}/da-nang/">Da Nang</a> › ${l.name}</p></div>
<div class="hero"><div class="hwrap">
<p class="tag">Nail salon near ${l.name}</p>
<h1>Nail salon near ${l.name}, Da Nang</h1>
<p class="sub">${intro}</p>
<div class="locmeta"><span>📍 ${km(d)} from ${l.name}</span><span>${near?`🚶 ${w} min walk`:`🚗 ${g} min by Grab`}</span><span>★ ${BIZ.rating} · ${BIZ.ratingCount}+ reviews</span><span>🕘 Daily 9:00–20:00</span></div>
<div class="btnrow"><a class="cta gold" href="${dirUrl}" rel="noopener">📍 Directions from ${l.name}</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Book on Instagram</a></div>
<div class="heromedia"><img src="${BASE}/assets/${['salon','arch','interior','refined'][hashN(l.slug+'i',4)]}.jpg" alt="${BIZ.name} — nail salon near ${l.name} Da Nang" loading="lazy"></div>
</div></div>
<section><div class="wrap">
<div class="answer">The closest highly-rated nail salon to <strong>${l.name}</strong>${l.vi?` (${l.vi})`:''} is <strong>${BIZ.name}</strong>, ${km(d)} away at ${BIZ.street} in the An Thuong beach quarter${near?` — about ${w} minutes on foot`:` — about ${g} minutes by Grab (≈${Math.max(1,Math.round(d*0.9))}0K)`}. It is rated ★${BIZ.rating} from ${BIZ.ratingCount}+ Google reviews and specialises in gel nails, BIAB, spa pedicures, Vietnamese head-spa rituals and waxing.</div>
<h2>Perfect after ${l.blurb||'a day at '+l.name}</h2>
<p>${l.kind==='hotel'?`Treat yourself without leaving the neighbourhood: from ${l.name} it is ${near?`an easy ${w}-minute stroll`:`a quick ${g}-minute Grab ride`} to the salon — ideal before dinner in An Thuong or a sunset walk on My Khe Beach.`:l.kind==='transport'?`Landing or leaving via ${l.name}? A fresh set or a head-spa ritual fits neatly around your schedule — the salon is ${g} minutes away and no booking is needed.`:`After exploring ${l.name}, swap crowds for a cream-leather armchair, a herbal foot soak and the quiet of Reborn's An Thuong salon, ${near?`${w} minutes on foot`:`${g} minutes by Grab`} away.`}</p>
<h2>Most-loved services (${new Intl.DateTimeFormat('en',{year:'numeric'}).format(NOW)} prices)</h2>
<div class="grid">${sPick.map(o=>`<a class="card" href="${BASE}/services/${o.slug}/"><img src="${BASE}/assets/${o.img}" alt="${o.name} near ${l.name}" loading="lazy"><div class="cb"><h3>${o.name}</h3><div class="cd">${o.desc}</div><div class="cp">${o.prices[0][0]} — ${o.prices[0][1]}</div></div></a>`).join('')}</div>
<p style="margin-top:14px"><a href="${BASE}/#services">See the full menu & price list →</a></p>
</div></section>
<section><div class="wrap"><h2>What travellers say</h2>${reviewCards(3)}</div></section>
<section><div class="wrap"><h2>FAQ — coming from ${l.name}</h2>${faqHtml(faq)}</div></section>
${mapBlock(dirUrl)}`
 +ld({"@context":"https://schema.org",...bizLd({"areaServed":{"@type":"Place","name":l.name+", Da Nang"}})})
 +ld({"@context":"https://schema.org",...faqLd(faq)})
 +ld({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":SITE+"/"},{"@type":"ListItem","position":2,"name":"Da Nang","item":SITE+"/da-nang/"},{"@type":"ListItem","position":3,"name":l.name,"item":url}]})
 +footer();
 fs.mkdirSync(`${OUT}/nail-salon/${l.slug}`,{recursive:true});
 fs.writeFileSync(`${OUT}/nail-salon/${l.slug}/index.html`,html);
}

/* ---------- hub ---------- */
const hubHtml=head(`Nail salon near you in Da Nang — every beach, hotel & landmark · ${BIZ.short}`,
 `Find the walking or Grab time from your Da Nang hotel, beach or landmark to ${BIZ.name} (★4.9) — My Khe, An Thuong, Marble Mountains, Non Nuoc resorts and more.`,SITE+"/da-nang/")
+nav()
+`<div class="hero"><div class="hwrap"><p class="tag">Wherever you stay</p><h1>A ★4.9 nail salon near you in Da Nang</h1>
<p class="sub">Pick where you are — we tell you exactly how far the salon is, how to get there and what to try.</p></div></div>
<section><div class="wrap">
${['beach','area','landmark','hotel','transport','street','town'].map(kind=>{
 const list=publishedLocs.filter(l=>l.kind===kind);if(!list.length)return '';
 const label={beach:'Beaches',area:'Neighbourhoods & districts',landmark:'Landmarks & markets',hotel:'Hotels & resorts',transport:'Airport & station',street:'Streets',town:'Day trips'}[kind];
 return `<h2>${label}</h2><div class="hublist">${list.map(l=>`<a href="${BASE}/nail-salon/${l.slug}/">${l.name} · ${km(dist(BIZ,l))}</a>`).join('')}</div>`;}).join('')}
</div></section>${mapBlock()}`
+ld({"@context":"https://schema.org",...bizLd()})
+footer();
fs.mkdirSync(OUT+'/da-nang',{recursive:true});
fs.writeFileSync(OUT+'/da-nang/index.html',hubHtml);

/* ---------- language hubs ---------- */
for(const h of HUBS){
 const url=`${SITE}/${h.dir}/`;
 const html=head(h.title,h.intro.slice(0,158),url,
  `<link rel="alternate" hreflang="en" href="${SITE}/">`+HUBS.map(x=>`<link rel="alternate" hreflang="${x.code==='zh'?'zh-Hans':x.code}" href="${SITE}/${x.dir}/">`).join('')+`<link rel="alternate" hreflang="x-default" href="${SITE}/"><!--lang-override-->`).replace('<html lang="">',`<html lang="${h.code==='zh'?'zh-Hans':h.code}">`)
 +nav()
 +`<div class="hero"><img class="flor tl" src="${BASE}/assets/flor_tl.webp" alt=""><img class="flor tr" src="${BASE}/assets/flor_tr.webp" alt="">
<div class="hwrap"><img class="hlogo" src="${BASE}/assets/logo.webp" alt="${BIZ.name}" width="170">
<h1>${h.h1}</h1><p class="sub">${h.intro}</p>
<div class="btnrow"><a class="cta gold" href="${BIZ.directions}" rel="noopener">📍 ${h.cta}</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Instagram DM</a></div>
<div class="heromedia"><video autoplay muted loop playsinline poster="${BASE}/assets/nails.jpg" src="${BASE}/assets/vid_hero.mp4"></video></div>
</div></div>
<section><div class="wrap"><ul style="font-size:18px;line-height:2">${h.points.map(p=>`<li>${p}</li>`).join('')}</ul>
<p><a class="cta" href="${BASE}/#services">Menu (EN) →</a></p></div></section>
<section><div class="wrap"><h2>${h.faqT}</h2>${faqHtml(h.faq)}</div></section>
${mapBlock()}`
 +ld({"@context":"https://schema.org",...bizLd()})
 +ld({"@context":"https://schema.org",...faqLd(h.faq)})
 +footer();
 fs.mkdirSync(`${OUT}/${h.dir}`,{recursive:true});
 fs.writeFileSync(`${OUT}/${h.dir}/index.html`,html);
}

/* ---------- 404 / robots / llms / sitemap ---------- */
fs.writeFileSync(OUT+'/404.html',head('Page not found — '+BIZ.name,'This page is being polished. Meanwhile — our full menu awaits.',SITE+'/')+nav()+`<div class="hero"><div class="hwrap"><h1>This page is still being polished 💅</h1><p class="sub">Meanwhile, the whole menu is one tap away.</p><div class="btnrow"><a class="cta" href="${BASE}/">Back to the salon</a></div></div></div>`+footer());
fs.writeFileSync(OUT+'/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(OUT+'/llms.txt',`# ${BIZ.name}
> Premium nail salon, spa pedicure, Vietnamese head spa & waxing in Da Nang, Vietnam. ★${BIZ.rating} from ${BIZ.ratingCount}+ Google reviews. 5-minute walk from My Khe Beach.

Address: ${BIZ.street}, ${BIZ.ward}, ${BIZ.city} ${BIZ.zip}, Vietnam
Hours: daily 09:00–20:00 · Walk-ins welcome · Phone: ${BIZ.phone}
Languages: ${BIZ.langs}
Google Maps: ${BIZ.mapsCid}
Instagram: ${BIZ.instagram}

## Prices (thousand VND, 100K ≈ $4)
- Gel polish 200K · BIAB 300K · GelX 280K · Manicure 70K
- Nail art: cat-eye/chrome full set 180K, ombré/French 220K, per-nail art 10K–100K
- Spa pedicure rituals 250K–590K (best seller: Deep Care 450K, 65 min)
- Head spa / Vietnamese hair wash 120K–850K (signature 500K, 80 min)
- Waxing 90K–480K

## Pages
- [Services & prices](${SITE}/#services)
- [Spa pedicure](${SITE}/services/spa-pedicure/)
- [Head spa & hair wash](${SITE}/services/head-spa-hair-wash/)
- [Gel nails](${SITE}/services/gel-nails/)
- [Nail art](${SITE}/services/nail-art/)
- [Locations across Da Nang](${SITE}/da-nang/)
`);
const urls=[
 {u:SITE+'/',d:NOW.toISOString().slice(0,10),p:'1.0'},
 {u:SITE+'/da-nang/',d:NOW.toISOString().slice(0,10),p:'0.8'},
 ...SERVICES.map(s=>({u:`${SITE}/services/${s.slug}/`,d:LAUNCH.toISOString().slice(0,10),p:'0.9'})),
 ...HUBS.map(h=>({u:`${SITE}/${h.dir}/`,d:LAUNCH.toISOString().slice(0,10),p:'0.8'})),
 ...publishedLocs.map(l=>({u:`${SITE}/nail-salon/${l.slug}/`,d:pubDate(l.slug),p:'0.6'}))
];
fs.writeFileSync(OUT+'/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x=>` <url><loc>${x.u}</loc><lastmod>${x.d}</lastmod><priority>${x.p}</priority></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(OUT+'/.nojekyll','');
console.log(`Built ${urls.length} indexed pages (${publishedLocs.length}/${LOCATIONS.length} locations published, day ${daysSince}).`);
