/* Reborn Nails & Retreat · static site generator (zero deps)
   node build.js  → outputs into ./docs (GitHub Pages source)
   Drip publishing: core pages at launch, then DRIP_PER_DAY location pages/day,
   deterministic order (md5 salt), sitemap lists ONLY published pages. */
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {BIZ,SERVICES,REVIEWS,SOCIAL,REELS,RITUALS,WORKS,LOCATIONS,HUBS}=require('./data.js');
const {JOURNAL}=fs.existsSync('./journal.js')?require('./journal.js'):{JOURNAL:[]};

/* Custom domain (Porkbun, bought 2026-08-05). With a CNAME file GitHub Pages
   serves the repo at the domain ROOT, so BASE is empty — not /reborn-nails-danang. */
const DOMAIN="rebornnaildanang.com";
const SITE="https://"+DOMAIN;
const BASE="";
const LAUNCH=new Date("2026-07-24T00:00:00Z");
const DRIP_PER_DAY=4;
const SALT="reborn-dn-2026"; // NEVER change (drip order stability)
const NOW=process.env.BUILD_DATE?new Date(process.env.BUILD_DATE):new Date();
/* gsc-meta.txt: one Search Console verification token per line. Several are kept
   at once so the old github.io property stays verified while the custom domain
   property is being set up. */
const GSC_METAS=fs.existsSync('./gsc-meta.txt')
  ?fs.readFileSync('./gsc-meta.txt','utf8').split('\n').map(s=>s.trim()).filter(s=>s&&!s.startsWith('#'))
  :[];
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
fs.cpSync('./assets',OUT+'/assets',{recursive:true});

/* Google's favicon crawler falls back to /favicon.ico and ignores data: URIs,
   so the icons have to be real files at the document root. */
if(fs.existsSync('./assets/favicon'))
  for(const f of fs.readdirSync('./assets/favicon'))
    fs.copyFileSync('./assets/favicon/'+f,OUT+'/'+f);
fs.writeFileSync(OUT+'/site.webmanifest',JSON.stringify({
  name:'Reborn Nails & Retreat',short_name:'Reborn',start_url:'/',display:'standalone',
  background_color:'#2A1F15',theme_color:'#2A1F15',
  icons:[{src:'/icon-192.png',sizes:'192x192',type:'image/png'},
         {src:'/icon-512.png',sizes:'512x512',type:'image/png'},
         {src:'/icon-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]
},null,2));

/* ---------- layout ---------- */
const head=(t,d,url,extra='')=>`<!doctype html><html lang="${extra.includes('lang-override')?'':'en'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t}</title>
<meta name="description" content="${d}">
<link rel="canonical" href="${url}">
${GSC_METAS.map(t=>`<meta name="google-site-verification" content="${t}">`).join('\n')}
<meta property="og:title" content="${t}"><meta property="og:description" content="${d}">
<meta property="og:image" content="${SITE}/assets/og.jpg"><meta property="og:type" content="website"><meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${BASE}/favicon.ico" sizes="48x48">
<link rel="icon" href="${BASE}/favicon-32.png" type="image/png" sizes="32x32">
<link rel="icon" href="${BASE}/favicon-16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="${BASE}/apple-touch-icon.png">
<link rel="manifest" href="${BASE}/site.webmanifest">
<meta name="theme-color" content="#2A1F15">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400..700&family=Prata&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${BASE}/assets/style.css">
${GA_ID?`<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${GA_ID}');</script>`:''}
${extra}
</head><body>`;

const promoBar=()=>`<div class="pbar"><div class="wrap pbin">
<span class="pbtag">First visit</span>
<span class="pbtxt">${BIZ.promo.line} Use code <button class="pbcode" data-code="${BIZ.promo.code}" title="Tap to copy">${BIZ.promo.code}</button></span>
</div></div>`;
const promoCard=()=>`<section class="promosec"><div class="wrap"><div class="promo">
<div class="pleft"><p class="tag">Website exclusive</p>
 <h2>${BIZ.promo.pct}% off your first visit</h2>
 <p class="ptxt">${BIZ.promo.terms}</p></div>
<div class="pright">
 <button class="pcode" data-code="${BIZ.promo.code}"><span>Tap to copy</span><b>${BIZ.promo.code}</b></button>
 <a class="cta" href="${BIZ.directions}" rel="noopener">Get directions</a>
</div></div></div></section>`;
const nav=(active='')=>`${promoBar()}<header class="nav"><div class="wrap navin">
<a class="logo" href="${BASE}/"><img src="${BASE}/assets/logo.webp" alt="Reborn Nails & Retreat logo" width="96" height="73" style="width:96px;height:auto"></a>
<nav class="navlinks">
<a href="${BASE}/#services"${active=='s'?' class="on"':''}>Services & Prices</a>
<a href="${BASE}/da-nang/">Near you in Da Nang</a>
${JOURNAL.length?`<a href="${BASE}/journal/"${active=='j'?' class="on"':''}>Journal</a>`:''}
<a href="${BASE}/#reviews">Reviews</a>
<a href="${BASE}/#find-us">Find us</a>
</nav>
<details class="langdd"><summary>EN</summary><nav>
<a href="${BASE}/">English</a><a href="${BASE}/ko/">한국어</a><a href="${BASE}/ja/">日本語</a><a href="${BASE}/zh/">中文</a><a href="${BASE}/ru/">Русский</a><a href="${BASE}/vi/">Tiếng Việt</a>
</nav></details>
<a class="tel" href="tel:${BIZ.phoneRaw}" aria-label="Call the salon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg><b>${BIZ.phone}</b></a>
<a class="cta small" href="${BIZ.directions}" rel="noopener">Directions</a>
</div>
</header>`;

const footer=()=>`<footer class="foot"><div class="wrap">
<img src="${BASE}/assets/logo_light.webp" alt="" width="150" height="115" class="flogo" loading="lazy">
<p class="fnap"><strong>${BIZ.name}</strong> · ${BIZ.street}, ${BIZ.ward}, ${BIZ.city} ${BIZ.zip}, Vietnam<br>
${BIZ.hoursHuman} · <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a> · <a href="${BIZ.whatsapp}" rel="noopener">WhatsApp</a> · ★ ${BIZ.rating} on <a href="${BIZ.maps}" rel="noopener">Google Maps</a></p>
<p class="fsoc"><a href="${BIZ.instagram}" rel="noopener">Instagram</a> · <a href="${BIZ.tiktok}" rel="noopener">TikTok</a> · <a href="${BIZ.facebook}" rel="noopener">Facebook</a> · <a href="${BIZ.tripadvisor}" rel="noopener">TripAdvisor</a> · <a href="${BIZ.review}" rel="noopener">Leave a review</a></p>
<nav class="fnav"><a href="${BASE}/">Home</a>${SERVICES.map(s=>` · <a href="${BASE}/services/${s.slug}/">${s.short}</a>`).join('')} · <a href="${BASE}/da-nang/">Da Nang areas</a></nav>
<p class="fcopy">© ${NOW.getUTCFullYear()} ${BIZ.name} · premium nail salon, spa pedicure, head spa & waxing in Da Nang.</p>
</div></footer>
<script>document.addEventListener('click',e=>{const n=e.target.closest('.rnav');if(n){const t=document.getElementById('reelTrack');
 t.scrollBy({left:(+n.dataset.dir)*(t.querySelector('.reel').offsetWidth+16)*2,behavior:'smooth'});return;}});
document.addEventListener('click',e=>{const b=e.target.closest('[data-code]');if(!b)return;
 const c=b.dataset.code;const done=()=>{const o=b.textContent;b.classList.add('copied');
  if(b.classList.contains('pcode')){b.querySelector('span').textContent='Copied ✓';setTimeout(()=>b.querySelector('span').textContent='Tap to copy',1800);}
  else{b.textContent='Copied ✓';setTimeout(()=>{b.textContent=o;b.classList.remove('copied')},1800);}};
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(c).then(done,done);}
 else{const t=document.createElement('textarea');t.value=c;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(x){}t.remove();done();}
});</script>
<div class="fab" id="fab">
 <a class="fabbtn wa" href="${BIZ.whatsapp}" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4.3-.4.7-1.3.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.2 3.9 1.1 1.9 2.6 3.4 4.6 4.4 1.6.8 2.4.8 3.2.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/></svg><em>WhatsApp</em></a>
 <a class="fabbtn ph" href="tel:${BIZ.phoneRaw}" aria-label="Call"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg><em>Call</em></a>
 <a class="fabbtn ig" href="${BIZ.instagram}" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" stroke="none"/></svg><em>Instagram</em></a>
 <a class="fabbtn za" href="https://zalo.me/84788668588" rel="noopener" aria-label="Zalo"><span>Zalo</span><em>Zalo</em></a>
 <a class="fabbtn ms" href="https://m.me/61589196314835" rel="noopener" aria-label="Messenger"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.4 5.5 3.7 7.2V22l3.4-1.9c.9.3 1.9.4 2.9.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1.1 12.4-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 4.9-2.7-5.4 5.8z"/></svg><em>Messenger</em></a>
</div>
<script>document.querySelectorAll('.rvid').forEach(w=>{const v=w.querySelector('video');w.addEventListener('click',()=>{if(v.paused){document.querySelectorAll('.rvid video').forEach(o=>{if(o!==v){o.pause();o.parentElement.classList.remove('playing')}});v.muted=false;v.play();w.classList.add('playing');}else{v.pause();w.classList.remove('playing');}});});</script><script>if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});document.querySelectorAll('.card,.rev,.soc,.ptable,.answer,.faq details').forEach(el=>{el.classList.add('rv');io.observe(el)})}</script></body></html>`;

const stars=`<span class="stars">★★★★★</span>`;
const FIVE=REVIEWS.filter(r=>r.s===5);
const reviewCards=(n=6)=>`<div class="revrow">${FIVE.slice(0,n).map(r=>`
<figure class="rev">
 <header class="rvh">
  ${r.a?`<img class="rva" src="${BASE}/assets/${r.a}" alt="" loading="lazy" width="44" height="44">`:'<span class="rva ph"></span>'}
  <div><b>${r.n}</b><span class="rvm">${'★'.repeat(r.s)}${'☆'.repeat(5-r.s)} · ${r.w}</span></div>
  <svg class="rvg" viewBox="0 0 24 24" aria-label="Google review"><path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.4-.2-2H12v3.9h6c-.1 1-.8 2.5-2.2 3.5l3.4 2.6c2-1.8 3.3-4.6 3.3-8z"/><path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.4-2.6c-.9.6-2.2 1.1-3.8 1.1-2.9 0-5.4-1.9-6.3-4.6l-3.5 2.7C4 20.1 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.7 14.3c-.2-.7-.4-1.4-.4-2.3s.1-1.6.4-2.3L2.2 7C1.4 8.5 1 10.2 1 12s.4 3.5 1.2 5z"/><path fill="#EA4335" d="M12 4.8c2 0 3.4.9 4.2 1.6l3-2.9C17.4 1.8 14.9.8 12 .8 7.7.8 4 3.7 2.2 7l3.5 2.7C6.6 6.9 9.1 4.8 12 4.8z"/></svg>
 </header>
 <blockquote>${r.t}</blockquote>
 ${r.p&&r.p.length?`<div class="rvp">${r.p.map(p=>`<a href="${BASE}/assets/${p}" target="_blank" rel="noopener"><img src="${BASE}/assets/${p}" alt="Photo by ${r.n} at ${BIZ.name}" loading="lazy"></a>`).join('')}</div>`:''}
</figure>`).join('')}</div>
<p class="revmore">Every review above is a real Google review. Read all <strong>${BIZ.ratingCount}+ (★ ${BIZ.rating})</strong> on <a href="${BIZ.maps}" rel="noopener">Google Maps</a>.</p>`;

const mapBlock=(from='')=>`<section class="mapsec" id="find-us"><div class="wrap">
<p class="tag">Visit us</p><h2>Five minutes from My Khe Beach</h2>
<p class="addr"><strong>${BIZ.street}, ${BIZ.ward}, ${BIZ.city}</strong> · ${BIZ.hoursHuman} · <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a></p>
<div class="mapframe"><iframe src="https://www.google.com/maps?q=Reborn+Nails+%26+Retreat,+56+Ch%C3%A2u+Th%E1%BB%8B+V%C4%A9nh+T%E1%BA%BF,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed" width="100%" height="380" style="border:0" loading="lazy" title="Map to Reborn Nails & Retreat Da Nang" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<p class="mapbtns"><a class="cta" href="${from||BIZ.directions}" rel="noopener">Get directions on Google Maps</a>
<a class="ghost" href="${BIZ.whatsapp}" rel="noopener">Book on WhatsApp</a>\n<a class="ghost" href="${BIZ.instagram}" rel="noopener">Instagram DM</a>
<a class="ghost" href="tel:${BIZ.phoneRaw}">Call ${BIZ.phone}</a></p>
</div></section>`;

const MARKET={
 'head-spa-hair-wash':{title:'What a Vietnamese hair wash really costs in Da Nang',
  intro:'Prices around My Khe Beach in 2026, from budget shampoo bars to hotel-style spas · and where Reborn sits.',
  rows:[['Quick neighbourhood wash · 30–45 min','160K – 250K','Shampoo, short massage, blow-dry'],
        ['Tourist-area spa · 45–60 min','300K – 500K','Wash, massage, sometimes a face mask'],
        ['Hotel-style herbal spa · 60–90 min','550K – 900K','Herbal wash, longer massage, tea'],
        ['<b>Reborn Basic · 25 min</b>','<b>120K</b>','Double herbal wash, scalp massage, blow-dry, hair oil'],
        ['<b>Reborn Signature · 80 min</b>','<b>500K</b>','<b>19 steps</b>: facial care, quartz-stone massage, scalp exfoliation, herbal steam, hair mask, snack'],
        ['<b>Reborn Ultimate · 95 min</b>','<b>750K</b>','21 steps with hot stones, hyaluronic infusion and bio-light']],
  note:'Market figures are indicative ranges published by Da Nang spa guides in 2026; our own prices are the ones printed in the salon.'},
 'foot-massage':{title:'What a foot massage costs in Da Nang',
  intro:'What you can expect to pay near My Khe Beach · and what is included at Reborn.',
  rows:[['Street-side foot massage · 60 min','200K – 350K','Massage only, shared room'],
        ['Beach-area spa · 60 min','400K – 600K','Massage, tea, private room (tourist areas charge 10–30% more)'],
        ['<b>Reborn foot &amp; calf massage · 15 min</b>','<b>100K</b>','On a cream leather armchair in the Foot Therapy lounge'],
        ['<b>Reborn foot &amp; calf massage · 30 min</b>','<b>190K</b>','With a warm herbal soak first'],
        ['<b>Reborn Deep Care ritual · 65 min</b>','<b>450K</b>','12 steps: soak, heel therapy, exfoliation, mask, massage, warm towel, fruit']],
  note:'Market figures are indicative ranges published by Da Nang spa guides in 2026.'}
};
const marketBlock=slug=>{const m=MARKET[slug];if(!m)return '';
 return `<section class="market"><div class="wrap"><p class="tag">Price check</p><h2>${m.title}</h2>
 <p class="secsub">${m.intro}</p>
 <div class="tblwrap"><table class="mkt"><thead><tr><th>What you get</th><th>Price</th><th>Included</th></tr></thead><tbody>
 ${m.rows.map(r=>`<tr class="${r[0].includes('<b>')?'us':''}"><td>${r[0]}</td><td class="p">${r[1]}</td><td class="inc">${r[2]}</td></tr>`).join('')}
 </tbody></table></div><p class="mktnote">${m.note}</p></div></section>`;};
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
.langdd{position:relative}
.langdd summary{list-style:none;cursor:pointer;border:1px solid rgba(122,74,43,.4);border-radius:999px;padding:9px 16px;font-size:12px;font-weight:700;letter-spacing:.14em;color:var(--brand);display:flex;align-items:center;gap:7px}
.langdd summary::-webkit-details-marker{display:none}
.langdd summary::after{content:"";width:7px;height:7px;border-right:1.5px solid var(--brand);border-bottom:1.5px solid var(--brand);transform:rotate(45deg) translateY(-2px)}
.langdd[open] summary::after{transform:rotate(-135deg) translateY(-2px)}
.langdd nav{position:absolute;top:calc(100% + 10px);right:0;background:var(--panel);border:1px solid var(--line);border-radius:16px;box-shadow:0 18px 44px rgba(90,60,30,.18);padding:8px;min-width:170px;display:flex;flex-direction:column;z-index:60}
.langdd nav a{padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:600;font-size:15px}
.langdd nav a:hover{background:var(--paper)}
.cta{display:inline-block;background:var(--brand);color:#FBF3E6;border-radius:999px;padding:15px 30px;font-weight:700;font-size:13px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none}
.cta.gold{background:linear-gradient(135deg,#CBA35A,#A9812F);color:#2A1F0C}.cta.small{padding:10px 18px;font-size:11.5px}
.ghost{display:inline-block;border:1px solid rgba(122,74,43,.45);border-radius:999px;padding:14px 28px;font-weight:700;font-size:13px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;color:var(--brand);background:transparent}
.hero{position:relative;overflow:hidden;text-align:center;padding:46px 22px 40px}
.hero .flor{position:absolute;pointer-events:none;width:min(300px,32vw)}.flor.tl{top:-6px;left:-6px}.flor.tr{top:-6px;right:-6px}
.hero .hwrap{position:relative;max-width:900px;margin:0 auto}
.hero .hlogo{width:170px;margin:0 auto 6px}
.tag{font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:var(--accent);font-weight:700}
.sub{font-size:19px;color:var(--ink2);max-width:640px;margin:14px auto}
.badges{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:18px 0;font-size:14.5px;font-weight:600;color:var(--brand)}
.badges span{background:var(--panel);border:1px solid var(--line);border-radius:999px;padding:8px 16px}
.stars{color:var(--gold);letter-spacing:2px}
.heromedia{overflow:hidden;box-shadow:0 18px 50px rgba(90,60,30,.16);margin-top:30px}
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
.reelgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(206px,1fr));gap:16px;margin-top:26px}
.reel{margin:0;background:var(--panel);border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(90,60,30,.08)}
.rvid{position:relative;aspect-ratio:9/16;background:#1c130b;cursor:pointer;overflow:hidden}
.rvid video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.rplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.rplay::before{content:"";width:54px;height:54px;border-radius:50%;background-color:rgba(253,251,245,.9);background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 6.5v11l9-5.5z' fill='%237A4A2B'/></svg>");background-position:center;background-size:26px;background-repeat:no-repeat;box-shadow:0 8px 24px rgba(30,18,8,.35);transition:transform .2s ease}
.rvid:hover .rplay::before{transform:scale(1.08)}
.rvid.playing .rplay{display:none}
.rtag{position:absolute;top:12px;left:12px;z-index:2;background:linear-gradient(135deg,#CBA35A,#A9812F);color:#2A1F0C;border-radius:999px;padding:6px 13px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.reel figcaption{padding:12px 15px;font-size:13px;font-weight:600;color:var(--ink2)}
.reel figcaption a{white-space:nowrap}
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
.foot{background:#3B2C1E;color:#E8DCC8;padding:50px 0 40px;text-align:center;border-top:1px solid rgba(212,175,115,.35)}
.foot a{color:#E4C98C}.flogo{opacity:.95}
.fnap{margin:14px 0}.fnav{font-size:14px;margin:12px 0}.fcopy{font-size:12.5px;opacity:.7}
.hublist{columns:3;column-gap:26px;margin-top:20px}
.hublist a{display:block;padding:7px 0;text-decoration:none;font-weight:600;border-bottom:1px dashed var(--line)}
@media(max-width:760px){.hublist{columns:1}.navlinks{display:none}}
.answer{background:var(--panel);border-inline-start:4px solid var(--gold);border-radius:14px;padding:16px 20px;margin:20px 0;font-size:17px}

/* elegance pass */
.rv{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.8,.3,1)}
.rv.vis{opacity:1;transform:none}
.card{transition:transform .25s ease,box-shadow .25s ease}
.card:hover{transform:translateY(-4px);box-shadow:0 24px 54px rgba(90,60,30,.17)}
.card img{transition:transform .7s cubic-bezier(.2,.7,.3,1)}
.card:hover img{transform:scale(1.045)}
.cta,.ghost{transition:transform .15s ease,filter .2s ease}
.cta:hover{filter:brightness(1.07)}.cta:active,.ghost:active{transform:scale(.97)}
.ghost:hover{background:#F8F3E7}
.navlinks a{position:relative}
.navlinks a::after{content:"";position:absolute;left:0;right:100%;bottom:-4px;height:1.5px;background:var(--gold);transition:right .25s ease}
.navlinks a:hover::after{right:0}
section .wrap>.tag{display:block;text-align:center}
section .wrap>h2{text-align:center;position:relative;padding-bottom:18px;margin-top:6px}
section .wrap>h2::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:70px;height:1px;background:var(--gold);box-shadow:0 4px 0 rgba(176,138,62,.45)}
.secsub{text-align:center;color:var(--ink2);max-width:560px;margin:14px auto 0}
.hero h1+.sub{font-size:19px}
.badgeline{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink2);margin:22px 0 4px}
.badgeline i{color:var(--gold);font-style:normal;margin:0 10px;font-size:10px;vertical-align:2px}
.menuCard{border:1.5px solid var(--brand);border-radius:24px;background:var(--panel);padding:30px 34px;position:relative;box-shadow:0 14px 40px rgba(90,60,30,.08);max-width:760px}
.menuCard::after{content:"";position:absolute;inset:7px;border:1px solid var(--line);border-radius:18px;pointer-events:none}
.prow{display:flex;align-items:baseline;gap:12px;padding:9px 0;font-weight:600;font-size:16.5px}
.prow i{flex:1;border-bottom:1.5px dotted rgba(122,74,43,.35);transform:translateY(-4px)}
.prow b{font-family:var(--serif);font-size:20px;color:var(--brand);white-space:nowrap;font-weight:400}
.menuScroll{display:flex;gap:20px;overflow-x:auto;padding:22px 4px 12px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}
.menuPage{flex:0 0 min(340px,78vw);scroll-snap-align:center;border:1.5px solid var(--brand);border-radius:18px;overflow:hidden;background:var(--panel);padding:8px;box-shadow:0 14px 40px rgba(90,60,30,.12);transition:transform .3s ease}
.menuPage:hover{transform:translateY(-6px)}
.menuPage img{display:block;border-radius:12px}
.gallerysec{padding-top:10px}
.gal{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
.gal img{width:100%;height:280px;object-fit:cover;border-radius:18px;box-shadow:0 10px 30px rgba(90,60,30,.1);transition:transform .5s ease}
.gal img:hover{transform:scale(1.025)}
@media(max-width:760px){.gal{grid-template-columns:repeat(2,1fr)}.gal img{height:180px}}
.heromedia{border:1.5px solid var(--brand);padding:11px;background:var(--panel);border-radius:230px 230px 26px 26px;position:relative}
.heromedia::after{content:"";position:absolute;inset:6px;border:1px solid var(--line);border-radius:222px 222px 20px 20px;pointer-events:none}
.heromedia video,.heromedia img{border-radius:218px 218px 15px 15px;width:100%;height:clamp(320px,52vw,520px);object-fit:cover}
.rev blockquote::before{content:"“";font-family:var(--serif);font-size:44px;color:var(--gold);line-height:0;display:block;margin:16px 0 4px}
.soc{transition:transform .25s ease}.soc:hover{transform:translateY(-4px)}
.soc .st{transition:background .3s}.soc:hover .st{background:linear-gradient(180deg,transparent 6%,rgba(30,18,8,.9))}
.answer strong{color:var(--brand2)}
::selection{background:#E4D2A8}
/* floating contact widget */
.fab{position:fixed;right:20px;bottom:20px;z-index:90;display:flex;flex-direction:column;align-items:flex-end;gap:12px}


.fabbtn em{position:absolute;right:54px;background:#3B2C1E;color:#F6EEDD;font-style:normal;font-size:12.5px;font-weight:700;padding:6px 12px;border-radius:999px;white-space:nowrap;opacity:0;transform:translateX(6px);transition:.2s ease;pointer-events:none}
.fabbtn:hover em{opacity:1;transform:none}
.fabbtn{position:relative;width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 8px 22px rgba(40,25,10,.28);text-decoration:none;transition:transform .18s ease}
.fabbtn:hover{transform:scale(1.08)}
.fabbtn svg{width:24px;height:24px}
.fabbtn.wa{background:#25D366}.fabbtn.ph{background:var(--brand2)}
.fabbtn.ig{background:radial-gradient(circle at 30% 110%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285AEB 90%)}
.fabbtn.za{background:#0068FF;font-weight:800;font-size:13.5px;letter-spacing:.02em}
.fabbtn.ms{background:linear-gradient(45deg,#0698FA,#A10EEB,#FF5297)}
@media(max-width:760px){.fab{right:14px;bottom:14px}}


/* ================= EDITORIAL LAYER ================= */
body{background:var(--paper)}
body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.5;mix-blend-mode:multiply;
 background-image:radial-gradient(circle at 20% 30%,rgba(122,74,43,.05),transparent 60%),radial-gradient(circle at 82% 12%,rgba(176,138,62,.05),transparent 55%)}
.wrap,.nav,.foot,section{position:relative;z-index:2}

/* · cinematic hero · */
.chero{position:relative;min-height:calc(100svh - 116px);display:flex;flex-direction:column;align-items:center;justify-content:center;
 text-align:center;overflow:hidden;padding:14px 22px 18px;color:#FCF7EC;isolation:isolate}
.chero .cbg{position:absolute;inset:0;z-index:-2}
.chero .cbg video{width:100%;height:100%;object-fit:cover;transform:scale(1.03)}
.chero .cveil{position:absolute;inset:0;background:
 radial-gradient(115% 75% at 50% 44%,rgba(22,13,6,.5) 0%,rgba(22,13,6,.8) 58%,rgba(22,13,6,.95) 100%),
 linear-gradient(180deg,rgba(22,13,6,.9) 0%,rgba(22,13,6,.6) 26%,rgba(22,13,6,.68) 60%,rgba(22,13,6,.95) 100%)}
.chero .cgrain{position:absolute;inset:0;opacity:.45;mix-blend-mode:soft-light;
 background-image:radial-gradient(rgba(255,255,255,.16) .5px,transparent .5px);background-size:3px 3px}
.chero .flor{position:absolute;z-index:-1;width:min(200px,17vw);opacity:.2;mix-blend-mode:screen}
.chero .flor.tl{top:-14px;left:-20px}.chero .flor.tr{top:-14px;right:-20px}
.cin{max-width:900px;animation:cIn 1.1s cubic-bezier(.2,.8,.25,1) both}
@keyframes cIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
.clogo{width:clamp(96px,13vh,150px);margin:0 auto clamp(8px,1.5vh,14px);filter:drop-shadow(0 4px 18px rgba(20,10,4,.45))}
.ceyebrow{font-size:clamp(10px,1.4vh,12px);letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:#E9CFA4;margin:0 0 clamp(6px,1.1vh,10px)}
.ctitle{font-family:var(--serif);font-weight:400;color:#FFF9EF;font-size:clamp(27px,min(4.05vw,5.2vh),52px);line-height:1.08;margin:0;
 text-shadow:0 4px 40px rgba(30,16,6,.5)}
.ctitle span{display:block}
.ctitle em{display:block;font-style:italic;color:#EBC98F;font-size:.66em;margin-top:.34em;letter-spacing:.005em}
.ctitle span,.ctitle em{animation:cLine 1.15s cubic-bezier(.2,.8,.25,1) both}
.ctitle span:nth-child(2){animation-delay:.12s}.ctitle em{animation-delay:.24s}
@keyframes cLine{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
.csub{font-size:clamp(13.5px,1.95vh,16.5px);line-height:1.45;color:rgba(255,247,235,.9);max-width:700px;margin:clamp(9px,1.6vh,15px) auto 0}
.csub b{color:#EBC98F}
.cbtns{display:flex;gap:11px;justify-content:center;flex-wrap:wrap;margin-top:clamp(12px,2.2vh,22px)}
.ghost.light{border-color:rgba(255,247,235,.5);color:#FCF7EC;background:transparent}
.ghost.light:hover{background:rgba(255,247,235,.12)}
.cfacts{position:relative;display:flex;gap:11px;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:clamp(12px,2.4vh,24px);
 font-size:clamp(9px,1.3vh,11.5px);letter-spacing:.15em;text-transform:uppercase;color:rgba(255,247,235,.72);font-weight:600}
.cfacts i{width:4px;height:4px;border-radius:50%;background:#C9A15C;display:inline-block}
@media (prefers-reduced-motion:reduce){.cin,.ctitle span,.ctitle em{animation:none}}
.nav{background:rgba(246,241,231,.9)}

/* · dark ritual chapter · */
.ritual{background:#2A1D12;color:#F1E4CE;padding:74px 0 78px;position:relative;overflow:hidden}
.ritual::before,.ritual::after{content:"";position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,161,92,.55),transparent)}
.ritual::before{top:0}.ritual::after{bottom:0}
.ritual h2.light{color:#FFF6E7}.ritual .tag.light{color:#D9B478;text-align:center;display:block}
.ritual h2.light::after{background:#C9A15C;box-shadow:none}
.secsub.light{color:rgba(241,228,206,.72)}
.ritgrid{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:34px}
.rit{background:rgba(255,247,235,.045);border:1px solid rgba(201,161,92,.28);border-radius:24px;overflow:hidden;display:flex;flex-direction:column}
.rit>img{width:100%;height:210px;object-fit:cover;opacity:.92}
.ritb{padding:24px 26px 26px}
.rit h3{font-family:var(--serif);font-weight:400;color:#FFF6E7;font-size:27px;margin:0 0 6px}
.ritmeta{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#D9B478;font-weight:700;margin:0 0 12px}
.ritin{color:rgba(241,228,206,.78);font-size:15px;margin:0 0 20px}
.rittl{list-style:none;margin:0;padding:0 0 0 22px;border-left:1px solid rgba(201,161,92,.3);counter-reset:m}
.rittl li{position:relative;padding:0 0 20px;counter-increment:m}
.rittl li:last-child{padding-bottom:6px}
.rittl li::before{content:counter(m);position:absolute;left:-33px;top:-2px;width:22px;height:22px;border-radius:50%;
 background:#2A1D12;border:1px solid rgba(201,161,92,.55);color:#D9B478;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center}
.rittl b{display:block;color:#FFF6E7;font-size:16.5px;font-weight:700;letter-spacing:.01em}
.rittl span{display:block;color:rgba(241,228,206,.72);font-size:14px;margin-top:2px}
.rittl time{display:block;color:#D9B478;font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin-top:5px;font-weight:700}
.ritlink{display:inline-block;margin-top:16px;color:#EBC98F;font-weight:700;font-size:14.5px;text-decoration:none;border-bottom:1px solid rgba(235,201,143,.4);padding-bottom:2px}

/* · visit finder · */
.finder{background:linear-gradient(180deg,var(--panel),var(--paper))}
.fbox{max-width:760px;margin:26px auto 0}
#fq{width:100%;font:inherit;font-size:18px;padding:18px 22px;border-radius:999px;border:1.5px solid var(--linestrong);
 background:var(--panel);color:var(--ink);box-shadow:0 10px 30px rgba(90,60,30,.07)}
#fq:focus{outline:none;border-color:var(--gold);box-shadow:0 10px 34px rgba(176,138,62,.18)}
.fchips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:14px}
.fchip{font:inherit;font-size:13.5px;font-weight:600;padding:9px 15px;border-radius:999px;border:1px solid var(--line);
 background:var(--panel);color:var(--brand);cursor:pointer}
.fchip em{font-style:normal;color:var(--ink2);font-weight:600}
.fchip:hover{border-color:var(--gold)}
.fout:empty{display:none}
.fcard{margin-top:22px;background:var(--panel);border:1.5px solid var(--brand);border-radius:26px;padding:26px 30px;
 display:grid;grid-template-columns:auto auto 1fr;gap:26px;align-items:center;box-shadow:0 16px 44px rgba(90,60,30,.12);
 animation:fIn .45s cubic-bezier(.2,.8,.3,1) both}
@keyframes fIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.fnum b,.fway b{display:block;font-family:var(--serif);font-weight:400;font-size:38px;color:var(--brand);line-height:1}
.fnum span,.fway span{display:block;font-size:13px;color:var(--ink2);margin-top:6px;max-width:200px}
.fway{padding-left:26px;border-left:1px solid var(--line)}
.fway b{font-size:30px}
.fcta{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
.hintline{text-align:center;color:var(--ink2);font-size:14px;margin-top:22px}
@media(max-width:860px){
 .ritgrid{grid-template-columns:1fr}
 .fcard{grid-template-columns:1fr;text-align:center;gap:18px}
 .fway{padding-left:0;border-left:none;border-top:1px solid var(--line);padding-top:18px}
 .fnum span,.fway span{max-width:none}
 .fcta{justify-content:center}
 .chero{min-height:88vh;padding-top:78px}
 .cfacts{padding-top:34px;font-size:10.5px;gap:9px}
}

/* · market price table · */
.market{background:linear-gradient(180deg,var(--paper),var(--panel))}
.mkt{width:100%;border-collapse:collapse;font-size:15px;background:var(--panel);min-width:640px}
.mkt th{text-align:left;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink2);font-weight:700;
 padding:14px 18px;border-bottom:1px solid var(--linestrong)}
.mkt td{padding:15px 18px;border-bottom:1px solid var(--line);vertical-align:top}
.mkt td.p{font-family:var(--serif);font-size:19px;color:var(--brand);white-space:nowrap}
.mkt td.inc{color:var(--ink2);font-size:14px}
.mkt tr.us{background:linear-gradient(90deg,rgba(176,138,62,.1),rgba(176,138,62,.03))}
.mkt tr.us td{border-bottom-color:rgba(176,138,62,.3)}
.mkt tr.us td.p{color:var(--brand2)}
.mkt tr:last-child td{border-bottom:none}
.mktnote{font-size:12.5px;color:var(--ink2);margin-top:14px;text-align:center;font-style:italic}
.tblwrap{overflow-x:auto;border:1.5px solid var(--brand);border-radius:22px;box-shadow:0 14px 40px rgba(90,60,30,.1);margin-top:26px}

/* · trust bar · */
.trustbar{background:var(--panel);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:26px 0}
.tbrow{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;text-align:center}
.tbit b{display:block;font-family:var(--serif);font-weight:400;font-size:26px;color:var(--brand);line-height:1.1}
.tbit span{display:block;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2);font-weight:600;margin-top:6px}
@media(max-width:760px){.tbrow{grid-template-columns:repeat(2,1fr);gap:18px}}

/* · promo · */
.pbar{background:linear-gradient(90deg,#7A4A2B,#A9812F 45%,#7A4A2B);color:#FFF7E9;font-size:13.5px}
.pbin{display:flex;align-items:center;justify-content:center;gap:10px;padding:9px 22px;flex-wrap:wrap;text-align:center}
.pbtag{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:800;background:rgba(255,247,233,.16);
 padding:4px 10px;border-radius:999px}
.pbtxt{font-weight:600}
.pbcode{font:inherit;font-weight:800;letter-spacing:.06em;color:#2A1F0C;background:#F1DCA9;border:none;
 padding:4px 11px;border-radius:999px;cursor:pointer}
.pbcode:hover{background:#FBEFC9}
.promosec{padding:38px 0}
.promo{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center;background:var(--panel);
 border:1.5px solid var(--gold);border-radius:28px;padding:30px 34px;position:relative;overflow:hidden;
 box-shadow:0 16px 46px rgba(90,60,30,.1)}
.promo::before{content:"";position:absolute;inset:8px;border:1px solid rgba(176,138,62,.28);border-radius:20px;pointer-events:none}
.promo h2{margin:6px 0 8px;text-align:left;padding-bottom:0}
.promo h2::after{display:none}
.ptxt{color:var(--ink2);font-size:14.5px;max-width:520px;margin:0}
.pright{display:flex;flex-direction:column;gap:12px;align-items:stretch;min-width:230px}
.pcode{font:inherit;cursor:pointer;background:linear-gradient(135deg,#FBF4E2,#F4E4BE);border:1.5px dashed var(--gold);
 border-radius:18px;padding:14px 22px;text-align:center;color:var(--brand2)}
.pcode span{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink2);font-weight:700}
.pcode b{display:block;font-family:var(--serif);font-weight:400;font-size:27px;letter-spacing:.01em;margin-top:3px}
.pcode.copied{border-style:solid;border-color:#5F6B3F}
@media(max-width:760px){.promo{grid-template-columns:1fr;padding:24px}.promo h2{text-align:center}.ptxt{text-align:center}
 .pbin{font-size:12.5px;gap:7px;padding:8px 14px}.pbtag{display:none}}

.tel{display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:var(--brand);font-size:14px;font-weight:700;
 border:1px solid var(--line);border-radius:999px;padding:9px 15px;background:var(--panel);white-space:nowrap}
.tel svg{width:17px;height:17px}
.tel:hover{border-color:var(--gold)}
@media(max-width:980px){.tel b{display:none}.tel{padding:9px 11px}}
.flogo{width:150px;height:auto}
.clogo{image-rendering:auto}

/* · founder story · */
.story{background:var(--panel);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.stgrid{display:grid;grid-template-columns:minmax(280px,38%) 1fr;gap:44px;align-items:center}
.stimg{margin:0;position:relative}
.stimg img{width:100%;border-radius:220px 220px 22px 22px;border:1.5px solid var(--brand);padding:9px;background:var(--panel)}
.stimg figcaption{text-align:center;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink2);font-weight:700;margin-top:12px}
.sttxt h2{text-align:left;padding-bottom:14px}
.sttxt h2::after{left:0;transform:none}
.sttxt p{font-size:16.5px;line-height:1.62;color:var(--ink)}
.sttxt .tag{text-align:left}
.stq{font-family:var(--serif);font-size:23px;color:var(--brand);border-left:2px solid var(--gold);margin:22px 0;padding:2px 0 2px 20px;line-height:1.35}
.stsmall{font-size:14px!important;color:var(--ink2)!important}
.stteam{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px}
.stteam img{width:100%;height:340px;object-fit:cover;object-position:50% 30%;border-radius:20px}
@media(max-width:860px){.stgrid{grid-template-columns:1fr;gap:26px}.stteam{grid-template-columns:1fr}.stteam img{height:260px}}

/* · nav refinement · */
.nav{background:rgba(246,241,231,.92);border-bottom:1px solid rgba(122,74,43,.1)}
.navin{padding:12px 22px;gap:26px}
.navlinks{gap:26px;font-size:14.5px;font-weight:600;letter-spacing:.01em}
.navlinks a{color:var(--ink);opacity:.86}
.navlinks a:hover{opacity:1}
.logo img{transition:transform .3s ease}
.logo:hover img{transform:scale(1.04)}
.langdd summary{font-size:11.5px;padding:8px 14px;letter-spacing:.16em;border-color:rgba(122,74,43,.28)}
.cta.small{padding:11px 20px;font-size:11.5px}

/* · answer block, less template-like · */
.answer{background:transparent;border:none;border-radius:0;padding:0 0 0 24px;position:relative;font-size:18px;line-height:1.6;
 color:var(--ink);max-width:780px;margin:26px auto 0}
.answer::before{content:"";position:absolute;left:0;top:6px;bottom:6px;width:2px;background:linear-gradient(180deg,var(--gold),rgba(176,138,62,.15))}

/* · promo code button · */
.pcode{display:flex;flex-direction:column;align-items:center;gap:2px;line-height:1.15}
.pbcode{line-height:1.2}

/* real google reviews */
.revrow{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:18px;margin-top:24px;align-items:start}
.rev{background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:18px 20px 16px;margin:0}
.rvh{display:flex;align-items:center;gap:11px;margin-bottom:11px}
.rvh>div{min-width:0}
.rvh b{display:block;font-size:15.5px;font-weight:700;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rva{width:44px;height:44px;border-radius:50%;object-fit:cover;flex:none;background:#EDE4D6}
.rvm{display:block;font-size:12.5px;color:var(--gold);font-weight:600;letter-spacing:.03em}
.rvg{width:20px;height:20px;min-width:20px;margin-inline-start:auto;flex:none}
.rev blockquote{margin:0;font-size:14.8px;line-height:1.52;color:var(--ink)}
.rev blockquote::before{content:none}
.rvp{display:flex;gap:7px;margin-top:12px}
.rvp a{flex:1;min-width:0;display:block}
.rvp img{width:100%;height:92px;object-fit:cover;border-radius:12px;transition:transform .3s ease;display:block}
.rvp a:hover img{transform:scale(1.04)}

/* portfolio */
.works{background:var(--paper)}
.wgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin-top:26px}
.wk{margin:0;position:relative;border-radius:18px;overflow:hidden;background:var(--panel);box-shadow:0 10px 28px rgba(90,60,30,.09)}
.wk img{width:100%;height:270px;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.2,.7,.3,1)}
.wk:hover img{transform:scale(1.05)}
.wk figcaption{position:absolute;left:0;right:0;bottom:0;padding:26px 14px 11px;color:#FFF6E8;font-size:13px;font-weight:600;
 background:linear-gradient(180deg,transparent,rgba(30,18,8,.82))}
@media(max-width:600px){.wk img{height:210px}}
/* · general polish · */
h2{letter-spacing:-.01em}
.card h3{font-family:var(--serif);font-weight:400;font-size:23px}
.card .cp{font-size:15px;letter-spacing:.01em}
.gal img{height:300px}
.mapsec{background:var(--panel)}

/* ===== final overrides ===== */
.reelwrap{position:relative;margin-top:26px}
.reelgrid{display:flex!important;grid-template-columns:none!important;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;
 scroll-behavior:smooth;padding:4px 2px 10px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.reelgrid::-webkit-scrollbar{display:none}
.reelgrid>.reel{flex:0 0 clamp(190px,20vw,236px);scroll-snap-align:start}
.rnav{position:absolute;top:34%;z-index:4;width:46px;height:46px;border-radius:50%;border:1px solid var(--line);
 background:rgba(253,251,245,.97);color:var(--brand);font-size:26px;line-height:1;cursor:pointer;
 box-shadow:0 10px 26px rgba(90,60,30,.18);display:flex;align-items:center;justify-content:center}
.rnav.prev{left:-16px}.rnav.next{right:-16px}
.rnav:hover{background:#fff;border-color:var(--gold)}
@media(max-width:900px){.rnav{display:none}}
`);

/* ---------- home ---------- */
const svcCards=SERVICES.map(s=>`<a class="card" href="${BASE}/services/${s.slug}/"><img src="${BASE}/assets/${s.img}" alt="${s.name} at Reborn Nails & Retreat Da Nang" loading="lazy"><div class="cb"><h3>${s.name}</h3><div class="cd">${s.desc}</div><div class="cp">${s.prices[0][0]} · ${s.prices[0][1]} · full menu →</div></div></a>`).join('');
const socCards=SOCIAL.map(s=>`<a class="soc" href="${s.url}" rel="noopener" target="_blank"><img src="${BASE}/assets/${s.img}" alt="" loading="lazy"><span class="badge">${s.type}</span><span class="st"><b>${s.label}</b><span>${s.t}</span></span></a>`).join('');

const homeHtml=head(
 `Nail Salon & Head Spa in Da Nang · ${BIZ.name} · ★4.9`,
 `Premium nail salon near My Khe Beach: gel nails from 200K, BIAB, GelX, nail art, spa pedicure, Vietnamese head spa & waxing. ★4.9 on Google (150+ reviews). Open daily 9–20, walk-ins welcome.`,
 SITE+"/",
 HUBS.map(h=>`<link rel="alternate" hreflang="${h.code==='zh'?'zh-Hans':h.code}" href="${SITE}/${h.dir}/">`).join('')+`<link rel="alternate" hreflang="en" href="${SITE}/"><link rel="alternate" hreflang="x-default" href="${SITE}/">`)
+nav()
+`<div class="chero">
 <div class="cbg"><video autoplay muted loop playsinline poster="${BASE}/assets/nails.jpg" src="${BASE}/assets/hero_loop.mp4"></video><span class="cveil"></span><span class="cgrain"></span></div>
 <img class="flor tl" src="${BASE}/assets/flor_tl.webp" alt=""><img class="flor tr" src="${BASE}/assets/flor_tr.webp" alt="">
 <div class="cin">
  <img class="clogo" src="${BASE}/assets/logo_light.webp" alt="${BIZ.name}" width="150">
  <p class="ceyebrow">Nails · Spa Pedicure · Head Spa · Massage</p>
  <h1 class="ctitle"><span>Paris standards,</span><span>Vietnamese prices.</span><em>Da Nang's 4.9★ nail &amp; head spa</em></h1>
  <p class="csub">Fiona trained in Vietnam, studied the craft in Paris, and brought that standard back to 56 Châu Thị Vĩnh Tế, five minutes from My Khe Beach.<br>${stars} <b>${BIZ.rating}</b> from ${BIZ.ratingCount}+ Google reviews · sterilised single-use tools · English spoken, menu in 20 languages.</p>
  <div class="cbtns"><a class="cta gold" href="${BIZ.directions}" rel="noopener">Get directions</a><a class="ghost light" href="#services">Menu &amp; prices</a></div>
 </div>
 <div class="cfacts"><span>Gel from 200K</span><i></i><span>Head spa 120–850K</span><i></i><span>Pedicure rituals 250–590K</span><i></i><span>Open daily 9–20</span></div>
</div>
<section class="trustbar"><div class="wrap"><div class="tbrow">
 <div class="tbit"><b>★ ${BIZ.rating}</b><span>${BIZ.ratingCount}+ Google reviews</span></div>
 <div class="tbit"><b>19 steps</b><span>in our signature ritual</span></div>
 <div class="tbit"><b>English spoken</b><span>menu in 20 languages, no mix-ups</span></div>
 <div class="tbit"><b>European</b><span>hygiene standard, single-use files</span></div>
</div></div></section>
<section id="reviews"><div class="wrap"><p class="tag">Guest love</p><h2>★ ${BIZ.rating} from ${BIZ.ratingCount}+ Google reviews</h2>${reviewCards(9)}</div></section>
<section class="works"><div class="wrap"><p class="tag">Fresh from the salon</p><h2>Sets we finished this month</h2>
<p class="secsub">Every photo below was taken at 56 Châu Thị Vĩnh Tế, on our guests' own hands. No stock images, no filters.</p>
<div class="wgrid">${WORKS.map(w=>`<figure class="wk"><img src="${BASE}/assets/${w.f}" alt="${w.c} at ${BIZ.name} Da Nang" loading="lazy"><figcaption>${w.c}</figcaption></figure>`).join('')}</div>
<p class="hintline">More every week on <a href="${BIZ.instagram}" rel="noopener">Instagram</a>.</p>
</div></section>
<section class="gallerysec"><div class="wrap"><p class="tag">The salon</p><h2>Step inside Reborn</h2>
<div class="gal">${['salon','arch','interior','refined','chand','tray'].map((g,i)=>`<img src="${BASE}/assets/${g}.jpg" alt="${BIZ.name} salon Da Nang · ${['reception','foot therapy lounge','interior','refined touch room','cherry blossom chandelier','spa ingredients'][i]}" loading="lazy">`).join('')}</div></div></section>
<section class="story"><div class="wrap">
<div class="stgrid">
 <div class="stimg"><img src="${BASE}/assets/founder.jpg" alt="${BIZ.owner}, founder of ${BIZ.name}, on opening day" loading="lazy">
  <figcaption>${BIZ.owner}, on opening day</figcaption></div>
 <div class="sttxt">
  <p class="tag">Who we are</p>
  <h2>${BIZ.story.title}</h2>
  <p>${BIZ.story.p1}</p>
  <p>${BIZ.story.p2}</p>
  <blockquote class="stq">“${BIZ.story.quote}”</blockquote>
  <p class="stsmall">${BIZ.story.p3}</p>
 </div>
</div>
<div class="stteam"><img src="${BASE}/assets/team.jpg" alt="The ${BIZ.name} team on opening day" loading="lazy"><img src="${BASE}/assets/opening.jpg" alt="Opening day at ${BIZ.name} Da Nang" loading="lazy"></div>
</div></section>
<section class="ritual"><div class="wrap">
<p class="tag light">The Reborn way</p><h2 class="light">Every treatment here is a ritual</h2>
<p class="secsub light">Not a chair and a bottle of polish · a sequence, timed, in a room built to make you forget the street outside.</p>
<div class="ritgrid">${RITUALS.map(r=>`<article class="rit">
  <img src="${BASE}/assets/${r.img}" alt="${r.name} at ${BIZ.name}" loading="lazy">
  <div class="ritb">
   <h3>${r.name}</h3>
   <p class="ritmeta">${r.mins} minutes · ${r.price} · ${r.moves.length} movements</p>
   <p class="ritin">${r.intro}</p>
   <ol class="rittl">${r.moves.map(m=>`<li><b>${m[0]}</b><span>${m[1]}</span><time>${m[2]}</time></li>`).join('')}</ol>
   <a class="ritlink" href="${BASE}/services/${r.slug}/">See the full ${r.slug==='spa-pedicure'?'pedicure':'head spa'} menu →</a>
  </div></article>`).join('')}</div>
</div></section>

<section id="services"><div class="wrap"><p class="tag">Menu & prices</p><h2>Services at Reborn · full price list</h2>
<p class="sub" style="margin-left:0;text-align:left">Prices in thousand Vietnamese đồng: 100K = 100,000 ₫ ≈ $4. No hidden fees · the menu below is exactly what you pay in the salon.</p>
<div class="grid">${svcCards}</div></div></section>
${promoCard()}
<section id="menu"><div class="wrap"><p class="tag">The menu</p><h2>Our menu, exactly as in the salon</h2>
<p class="secsub">Swipe through the printed pages · what you see is what you pay.</p>
<div class="menuScroll">${[1,2,3,4,5].map(i=>`<a href="${BASE}/assets/menu-${i}.jpg" target="_blank" rel="noopener" class="menuPage"><img src="${BASE}/assets/menu-${i}.jpg" alt="Reborn Nails & Retreat menu · page ${i}" loading="lazy"></a>`).join('')}</div></div></section>
<section class="finder" id="finder"><div class="wrap">
<p class="tag">Plan your visit</p><h2>Where are you staying?</h2>
<p class="secsub">Pick your hotel, beach or landmark · we will tell you exactly how far the salon is and open the route for you.</p>
<div class="fbox">
 <input id="fq" type="search" autocomplete="off" placeholder="Start typing: My Khe, Hyatt, An Thuong, airport…" aria-label="Your hotel or landmark in Da Nang">
 <div id="fchips" class="fchips"></div>
 <div id="fout" class="fout" aria-live="polite"></div>
</div>
<p class="hintline">Staying somewhere else? <a href="${BASE}/da-nang/">See every area of Da Nang →</a></p>
</div></section>

<section><div class="wrap"><p class="tag">As seen on social</p><h2>Watch the experience</h2>
<p class="secsub">Straight from the salon floor · tap a reel for sound, or open it on Instagram.</p>
<div class="reelwrap"><button class="rnav prev" data-dir="-1" aria-label="Previous">‹</button><button class="rnav next" data-dir="1" aria-label="Next">›</button>
<div class="reelgrid" id="reelTrack">${REELS.map(r=>`<figure class="reel"><div class="rvid"><video muted loop playsinline preload="none" poster="${BASE}/assets/${r.v}.jpg" src="${BASE}/assets/${r.v}.mp4"></video><span class="rplay"></span></div><figcaption>${r.t} · <a href="https://www.instagram.com/p/${r.c}/" rel="noopener" target="_blank">Instagram ↗</a></figcaption></figure>`).join('')}</div></div>
<div class="socrow" style="margin-top:26px">${socCards}</div></div></section>
${mapBlock()}
<section><div class="wrap"><p class="tag">Good to know</p><h2>Frequently asked questions</h2>
<div class="answer"><strong>${BIZ.name}</strong> is a premium nail salon and head spa at ${BIZ.street}, Da Nang · a 5-minute walk from My Khe Beach in the An Thuong quarter. It is rated ${BIZ.rating}★ from ${BIZ.ratingCount}+ Google reviews, open every day 9:00–20:00, and welcomes walk-ins.</div>
${faqHtml([
 ["Do I need to book?","No · walk-ins are welcome every day from 9 AM to 8 PM. To reserve a specific time, message us on Instagram @reborn_nailsnretreat or call "+BIZ.phone+"."],
 ["How much does a manicure cost in Da Nang?","At Reborn: classic manicure 70K, gel polish 200K, BIAB 300K, GelX extensions 280K. A full cat-eye or chrome nail-art set is 180K. That is roughly a third of typical prices in Korea, Japan, Australia or Europe."],
 ["Do the staff speak English?","Yes. Sương and the team look after you in English and Vietnamese, and the printed menu is translated into 20 languages (Korean, Japanese, Chinese, Russian, French, Spanish and more), so nothing gets misunderstood and you get exactly the treatment you asked for."],
 ["Is it hygienic?","We hold ourselves to European salon standards, which is not the norm everywhere in Da Nang. Every metal tool goes through a medical steriliser before it touches you, files and buffers are single-use and thrown away in front of you, and the steriliser sits in the open so you can watch it work."],
 ["Where exactly is the salon?","56 Châu Thị Vĩnh Tế, Ngũ Hành Sơn · in the An Thuong tourist quarter, 400 m from My Khe Beach. Open the map above or tap Get Directions."],
 ["Is there a discount if I come from this website?","Yes. Show the code "+BIZ.promo.code+" at reception on your first visit and you get "+BIZ.promo.pct+"% off the service menu. One use per guest, not combinable with other offers."],
 ["Can I pay by card?","Yes · cards and cash (VND) are both accepted."]])}
</div></section>`
+`<script>
const RB_LOC=${JSON.stringify(LOCATIONS.map(l=>{const d=dist(BIZ,l);return {n:l.name,s:publishedLocs.some(p=>p.slug===l.slug)?l.slug:'',d:km(d),w:walkMin(d),g:grabMin(d),near:d<=1.6?1:0};}))};
const RB_POP=['My Khe Beach','An Thuong Tourist Area','Marble Mountains','Da Nang Airport (DAD)','Hoi An'];
(function(){
 const q=document.getElementById('fq'),chips=document.getElementById('fchips'),out=document.getElementById('fout');
 if(!q)return;
 const dir=n=>'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(n+' Da Nang')+'&destination=Reborn+Nails+%26+Retreat+Da+Nang&destination_place_id=ChIJ4S2_LGIXQjER5UUCohuc8V4';
 function card(l){
  out.innerHTML='<div class="fcard"><div class="fnum"><b>'+l.d+'</b><span>from '+l.n+'</span></div>'+
   '<div class="fway">'+(l.near?'<b>'+l.w+' min</b> on foot':'<b>'+l.g+' min</b> by Grab')+'<span>'+(l.near?'an easy stroll through An Thuong':'about '+Math.max(30,Math.round(l.g*3.5))+'K by Grab')+'</span></div>'+
   '<div class="fcta"><a class="cta gold" target="_blank" rel="noopener" href="'+dir(l.n)+'">Open the route</a>'+
   (l.s?'<a class="ghost" href="${BASE}/nail-salon/'+l.s+'/">What to book from '+l.n+'</a>':'')+'</div></div>';
 }
 function paint(list){
  chips.innerHTML=list.slice(0,6).map((l,i)=>'<button class="fchip" data-i="'+RB_LOC.indexOf(l)+'">'+l.n+' <em>'+l.d+'</em></button>').join('');
 }
 chips.addEventListener('click',e=>{const b=e.target.closest('.fchip');if(!b)return;const l=RB_LOC[+b.dataset.i];q.value=l.n;card(l);paint([l]);});
 q.addEventListener('input',()=>{
  const v=q.value.trim().toLowerCase();
  if(!v){paint(RB_POP.map(n=>RB_LOC.find(l=>l.n===n)).filter(Boolean));out.innerHTML='';return;}
  const m=RB_LOC.filter(l=>l.n.toLowerCase().includes(v));
  paint(m); if(m.length===1)card(m[0]); else out.innerHTML='';
 });
 paint(RB_POP.map(n=>RB_LOC.find(l=>l.n===n)).filter(Boolean));
})();
</script>`
+ld({...bizLd(),"@id":SITE+"/#salon","review":REVIEWS.filter(r=>r.s===5).slice(0,6).map(r=>({"@type":"Review","author":{"@type":"Person","name":r.n},"reviewRating":{"@type":"Rating","ratingValue":r.s,"bestRating":5},"reviewBody":r.t}))})
+ld({"@context":"https://schema.org",...faqLd([
 ["Do I need to book at Reborn Nails & Retreat?","No · walk-ins are welcome every day 9:00–20:00. Booking is possible via Instagram DM @reborn_nailsnretreat or by phone "+BIZ.phone+"."],
 ["How much does a manicure cost in Da Nang?","At Reborn Nails & Retreat: manicure 70K, gel polish 200K, BIAB 300K, GelX 280K, full nail-art sets from 180K (thousand VND)."],
 ["Where is Reborn Nails & Retreat located?","56 Châu Thị Vĩnh Tế, Ngũ Hành Sơn, Da Nang · a 5-minute walk from My Khe Beach."],
 ["Is there a website discount at Reborn Nails & Retreat?","Yes · first-time guests who mention the code "+BIZ.promo.code+" at reception get "+BIZ.promo.pct+"% off the service menu."]])})
+footer();
fs.writeFileSync(OUT+'/index.html',homeHtml);

/* ---------- service pages ---------- */
for(const s of SERVICES){
 const url=`${SITE}/services/${s.slug}/`;
 const others=SERVICES.filter(x=>x.slug!==s.slug).slice(0,3);
 const TITLES={'head-spa-hair-wash':['Hair Wash & Head Spa in Da Nang · 120K–850K · '+BIZ.short+' ★4.9','Vietnamese hair wash & Korean head spa near My Khe Beach: 25 to 105 minutes, 120K–850K. Signature ritual 500K, 19 steps. ★4.9 Google, walk-ins daily 9–20.'],
 'foot-massage':['Foot Massage in Da Nang · from 100K · Foot Therapy at '+BIZ.short,'Foot & calf massage from 100K in our Foot Therapy lounge near My Khe Beach, or a full spa pedicure ritual from 250K. ★4.9 Google, walk-ins daily 9–20.'],
 'massage':['Massage in Da Nang · hot stone, foot & shoulder · '+BIZ.short,'Massage at a ★4.9 nail & head-spa retreat near My Khe Beach: foot & calf from 100K, hot stones 80K, neck and shoulder in every ritual. Walk-ins daily 9–20.'],
 'spa-pedicure':['Spa Pedicure in Da Nang · rituals 250K–590K · '+BIZ.short+' ★4.9','Herbal foot soak, heel therapy, hot stones and warm towels on cream leather armchairs. Deep Care 450K (65 min). ★4.9 Google, walk-ins daily 9–20.']};
 const T=TITLES[s.slug];
 const html=head(T?T[0]:`${s.name} in Da Nang · prices & menu · ${BIZ.short} ★4.9`,
  T?T[1]:`${s.desc} Full ${s.short.toLowerCase()} price list at ${BIZ.name}, 5 min from My Khe Beach. ★4.9 Google rating, walk-ins daily 9–20.`,url)
 +nav('s')
 +`<div class="wrap"><p class="crumb"><a href="${BASE}/">Home</a> › <a href="${BASE}/#services">Services</a> › ${s.short}</p></div>
<div class="hero"><div class="hwrap">
<p class="tag">${BIZ.short} · Da Nang</p><h1>${s.name} in Da Nang</h1>
<p class="sub">${s.desc}</p>
<div class="btnrow"><a class="cta gold" href="${BIZ.directions}" rel="noopener">Directions</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Book on Instagram</a></div>
<div class="heromedia">${s.vsrc?`<video autoplay muted loop playsinline poster="${BASE}/assets/${s.img}" src="${BASE}/assets/${s.vsrc}.mp4" title="${s.name} at Reborn Da Nang"></video>`:`<img src="${BASE}/assets/${s.img}" alt="${s.name}, ${BIZ.name} Da Nang">`}</div>
</div></div>
<section><div class="wrap"><h2>${s.short} price list</h2>
<div class="answer">${s.name} at ${BIZ.name} costs <strong>${s.prices[0][1]}</strong> for ${s.prices[0][0].toLowerCase()} (thousand VND · 100K ≈ $4). ${BIZ.hoursHuman}, walk-ins welcome.</div>
<div class="menuCard">${s.prices.map(p=>`<div class="prow"><span>${p[0]}</span><i></i><b>${p[1]}</b></div>`).join('')}</div></div></section>
${marketBlock(s.slug)}
${promoCard()}
<section><div class="wrap"><h2>Why guests choose Reborn for ${s.short.toLowerCase()}</h2>${reviewCards(3)}</div></section>
<section><div class="wrap"><h2>${s.short} · FAQ</h2>${faqHtml(s.faq)}</div></section>
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
 (l)=>`${l.name} to fresh gel nails in ${'{T}'} · this is Da Nang's favourite self-care stop.`,
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
  [`How far is Reborn Nails & Retreat from ${l.name}?`,`${BIZ.name} is about ${km(d)} from ${l.name}${near?` · roughly a ${w}-minute walk`:` · around ${g} minutes by Grab or taxi`}. The address is ${BIZ.street}, ${BIZ.ward}, Da Nang.`],
  [`Do I need a booking if I come from ${l.name}?`,`No · walk-ins are welcome every day from 9 AM to 8 PM. For a guaranteed slot, message Instagram @reborn_nailsnretreat before you leave ${l.name}.`],
  [`What should I try?`,`Guests coming from ${l.name} love the ${sPick[0].short} (${sPick[0].prices[0][1]}) and the Deep Care spa pedicure (450K, 65 min) · Reborn's best seller.`]];
 const html=head(`Nail Salon near ${l.name} · ${km(d)} away · ${BIZ.short} ★4.9`,
  `The closest top-rated nail salon & head spa to ${l.name}: ${BIZ.name}, ${km(d)} away (${T}). Gel nails 200K, pedicure rituals, ★4.9 on Google. Open daily 9–20.`,url)
 +nav()
 +`<div class="wrap"><p class="crumb"><a href="${BASE}/">Home</a> › <a href="${BASE}/da-nang/">Da Nang</a> › ${l.name}</p></div>
<div class="hero"><div class="hwrap">
<p class="tag">Nail salon near ${l.name}</p>
<h1>Nail salon near ${l.name}, Da Nang</h1>
<p class="sub">${intro}</p>
<p class="badgeline">${km(d)} from ${l.name} <i>✦</i> ${near?`${w} min walk`:`${g} min by Grab`} <i>✦</i> ★ ${BIZ.rating} · ${BIZ.ratingCount}+ reviews <i>✦</i> Daily 9:00–20:00</p>
<div class="btnrow"><a class="cta gold" href="${dirUrl}" rel="noopener">Directions from ${l.name}</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Book on Instagram</a></div>
<div class="heromedia"><img src="${BASE}/assets/${['salon','arch','interior','refined'][hashN(l.slug+'i',4)]}.jpg" alt="${BIZ.name} · nail salon near ${l.name} Da Nang" loading="lazy"></div>
</div></div>
<section><div class="wrap">
<div class="answer">The closest highly-rated nail salon to <strong>${l.name}</strong>${l.vi?` (${l.vi})`:''} is <strong>${BIZ.name}</strong>, ${km(d)} away at ${BIZ.street} in the An Thuong beach quarter${near?` · about ${w} minutes on foot`:` · about ${g} minutes by Grab (≈${Math.max(1,Math.round(d*0.9))}0K)`}. It is rated ★${BIZ.rating} from ${BIZ.ratingCount}+ Google reviews and specialises in gel nails, BIAB, spa pedicures, Vietnamese head-spa rituals and waxing.</div>
<h2>Perfect after ${l.blurb||'a day at '+l.name}</h2>
<p>${l.kind==='hotel'?`Treat yourself without leaving the neighbourhood: from ${l.name} it is ${near?`an easy ${w}-minute stroll`:`a quick ${g}-minute Grab ride`} to the salon · ideal before dinner in An Thuong or a sunset walk on My Khe Beach.`:l.kind==='transport'?`Landing or leaving via ${l.name}? A fresh set or a head-spa ritual fits neatly around your schedule · the salon is ${g} minutes away and no booking is needed.`:`After exploring ${l.name}, swap crowds for a cream-leather armchair, a herbal foot soak and the quiet of Reborn's An Thuong salon, ${near?`${w} minutes on foot`:`${g} minutes by Grab`} away.`}</p>
<h2>Most-loved services (${new Intl.DateTimeFormat('en',{year:'numeric'}).format(NOW)} prices)</h2>
<div class="grid">${sPick.map(o=>`<a class="card" href="${BASE}/services/${o.slug}/"><img src="${BASE}/assets/${o.img}" alt="${o.name} near ${l.name}" loading="lazy"><div class="cb"><h3>${o.name}</h3><div class="cd">${o.desc}</div><div class="cp">${o.prices[0][0]} · ${o.prices[0][1]}</div></div></a>`).join('')}</div>
<p style="margin-top:14px"><a href="${BASE}/#services">See the full menu & price list →</a></p>
</div></section>
<section><div class="wrap"><h2>What travellers say</h2>${reviewCards(3)}</div></section>
${promoCard()}
<section><div class="wrap"><h2>FAQ · coming from ${l.name}</h2>${faqHtml(faq)}</div></section>
${mapBlock(dirUrl)}`
 +ld({"@context":"https://schema.org",...bizLd({"areaServed":{"@type":"Place","name":l.name+", Da Nang"}})})
 +ld({"@context":"https://schema.org",...faqLd(faq)})
 +ld({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":SITE+"/"},{"@type":"ListItem","position":2,"name":"Da Nang","item":SITE+"/da-nang/"},{"@type":"ListItem","position":3,"name":l.name,"item":url}]})
 +footer();
 fs.mkdirSync(`${OUT}/nail-salon/${l.slug}`,{recursive:true});
 fs.writeFileSync(`${OUT}/nail-salon/${l.slug}/index.html`,html);
}

/* ---------- hub ---------- */
const hubHtml=head(`Nail salon near you in Da Nang · every beach, hotel & landmark · ${BIZ.short}`,
 `Find the walking or Grab time from your Da Nang hotel, beach or landmark to ${BIZ.name} (★4.9) · My Khe, An Thuong, Marble Mountains, Non Nuoc resorts and more.`,SITE+"/da-nang/")
+nav()
+`<div class="hero"><div class="hwrap"><p class="tag">Wherever you stay</p><h1>A ★4.9 nail salon near you in Da Nang</h1>
<p class="sub">Pick where you are · we tell you exactly how far the salon is, how to get there and what to try.</p></div></div>
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
<div class="btnrow"><a class="cta gold" href="${BIZ.directions}" rel="noopener">${h.cta}</a><a class="ghost" href="${BIZ.instagram}" rel="noopener">Instagram DM</a></div>
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
/* ---- Journal (weekly articles) · only entries dated today or earlier go live ---- */
const TODAY=NOW.toISOString().slice(0,10);
const posts=JOURNAL.filter(a=>a.date<=TODAY).sort((a,b)=>b.date.localeCompare(a.date));
const human=d=>new Date(d+'T00:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
if(posts.length){
 fs.mkdirSync(OUT+'/journal',{recursive:true});
 const hubUrl=SITE+'/journal/';
 fs.writeFileSync(OUT+'/journal/index.html',
  head('Journal · nail care & Da Nang guides | '+BIZ.name,'Straight answers on nail care, prices and what to expect in Da Nang · written by the team at '+BIZ.name+'.',hubUrl)
  +ld({"@context":"https://schema.org","@type":"Blog","name":BIZ.name+" Journal","url":hubUrl,
       "publisher":{"@id":SITE+"/#salon"},
       "blogPost":posts.map(a=>({"@type":"BlogPosting","headline":a.title,"datePublished":a.date,"url":`${SITE}/journal/${a.slug}/`}))})
  +nav('j')
  +`<div class="hero"><div class="hwrap"><h1>The Reborn Journal</h1><p class="sub">Honest answers about nails, prices and treatments in Da Nang · no filler.</p></div></div>
<section class="wrap" style="padding:48px 0"><div class="ritgrid">${posts.map(a=>`<article class="rit">
 <a href="${BASE}/journal/${a.slug}/"><img src="${BASE}/assets/${a.hero}" alt="${a.title}" loading="lazy" style="width:100%;height:200px;object-fit:cover;border-radius:12px"></a>
 <div><p class="tag">${a.cat} · ${a.read} min read</p>
 <h3><a href="${BASE}/journal/${a.slug}/">${a.title}</a></h3>
 <p>${a.desc}</p>
 <p class="tag">${human(a.date)}</p></div></article>`).join('')}</div></section>`
  +promoCard()+footer());

 posts.forEach(a=>{
  const url=`${SITE}/journal/${a.slug}/`;
  fs.mkdirSync(`${OUT}/journal/${a.slug}`,{recursive:true});
  fs.writeFileSync(`${OUT}/journal/${a.slug}/index.html`,
   head(a.title+' | '+BIZ.name,a.desc,url)
   +ld({"@context":"https://schema.org","@type":"BlogPosting","headline":a.title,"description":a.desc,
        "datePublished":a.date,"dateModified":a.date,"mainEntityOfPage":url,
        "image":`${SITE}/assets/${a.hero}`,
        "author":{"@type":"Organization","name":BIZ.name,"url":SITE+'/'},
        "publisher":{"@id":SITE+"/#salon","@type":"NailSalon","name":BIZ.name,
          "address":{"@type":"PostalAddress","streetAddress":BIZ.street,"addressLocality":BIZ.city,"addressCountry":"VN"}}})
   +(a.faq&&a.faq.length?ld({"@context":"https://schema.org","@type":"FAQPage","mainEntity":a.faq.map(([q,ans])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":ans}}))}):'')
   +nav('j')
   +`<div class="hero"><div class="hwrap">
<p class="tag"><a href="${BASE}/journal/">Journal</a> · ${a.cat} · ${a.read} min read</p>
<h1>${a.title}</h1><p class="sub">${a.desc}</p>
<p class="tag">Published ${human(a.date)}</p></div></div>
<section class="wrap" style="padding:40px 0;max-width:760px">
<div class="promo" style="margin-bottom:32px"><div class="pleft"><p class="tag">In short</p>
<ul>${a.tldr.map(t=>`<li>${t}</li>`).join('')}</ul></div></div>
${a.body.map(s=>`<h2>${s.h}</h2>${s.p.map(p=>`<p>${p}</p>`).join('')}`).join('')}
${a.faq&&a.faq.length?`<h2>Frequently asked</h2>${a.faq.map(([q,ans])=>`<h3>${q}</h3><p>${ans}</p>`).join('')}`:''}
<p style="margin-top:36px"><a class="cta" href="${BIZ.directions}" rel="noopener">Find the salon</a>
 <a class="cta" href="${BIZ.whatsapp}" rel="noopener">Message us on WhatsApp</a></p>
</section>`
   +promoCard()+footer());
 });
}

fs.writeFileSync(OUT+'/404.html',head('Page not found · '+BIZ.name,'This page is being polished. Meanwhile · our full menu awaits.',SITE+'/')+nav()+`<div class="hero"><div class="hwrap"><h1>This page is still being polished 💅</h1><p class="sub">Meanwhile, the whole menu is one tap away.</p><div class="btnrow"><a class="cta" href="${BASE}/">Back to the salon</a></div></div></div>`+footer());
fs.writeFileSync(OUT+'/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(OUT+'/llms.txt',`# ${BIZ.name}
> Premium nail salon, spa pedicure, Vietnamese head spa & waxing in Da Nang, Vietnam. ★${BIZ.rating} from ${BIZ.ratingCount}+ Google reviews. 5-minute walk from My Khe Beach.

Address: ${BIZ.street}, ${BIZ.ward}, ${BIZ.city} ${BIZ.zip}, Vietnam
Hours: daily 09:00–20:00 · Walk-ins welcome · Phone: ${BIZ.phone}
Languages: ${BIZ.langs}
Google Maps: ${BIZ.mapsCid}
Instagram: ${BIZ.instagram}

## Offer
- First-time guests from the website: ${BIZ.promo.pct}% off with code ${BIZ.promo.code} (show it at reception)

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
 ...publishedLocs.map(l=>({u:`${SITE}/nail-salon/${l.slug}/`,d:pubDate(l.slug),p:'0.6'})),
 ...(posts.length?[{u:SITE+'/journal/',d:posts[0].date,p:'0.7'}]:[]),
 ...posts.map(a=>({u:`${SITE}/journal/${a.slug}/`,d:a.date,p:'0.7'}))
];
fs.writeFileSync(OUT+'/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x=>` <url><loc>${x.u}</loc><lastmod>${x.d}</lastmod><priority>${x.p}</priority></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(OUT+'/.nojekyll','');
fs.writeFileSync(OUT+'/CNAME',DOMAIN+'\n'); // custom domain — regenerated every build
console.log(`Built ${urls.length} indexed pages (${publishedLocs.length}/${LOCATIONS.length} locations published, day ${daysSince}).`);
