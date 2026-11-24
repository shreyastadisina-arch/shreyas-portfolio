document.documentElement.classList.add('js');

/* =====================================================================
   CONFIG — edit everything here
   ===================================================================== */
const CONFIG = {
  email: "",            // e.g. "you@example.com"
  formEndpoint: "",     // e.g. "https://formspree.io/f/xxxxxxx"
  linkedin: "https://www.linkedin.com/in/shreyas-tadisina/",
  github: "https://github.com/shreyastadisina-arch",
  accentOracle: "https://v0-accent-oracle.vercel.app",

  traits: [
    ["⚡","Enthusiastic about technology and emerging innovations."],
    ["🔍","Curious about how technologies, software and machines work internally."],
    ["📚","A deep knowledge seeker who explores concepts beyond surface-level explanations."],
    ["📷","Interested in photography and visual creativity."],
    ["🛠️","Enjoys building websites and experimenting with software."],
    ["🚀","Interested in entrepreneurship, startups and understanding markets."],
    ["💡","Likes spotting everyday problems and thinking about practical solutions."],
    ["🤝","Interested in meeting creative people and collaborating on meaningful ideas."],
    ["🧭","Enjoys exploring different domains instead of limiting learning to one specialization."]
  ],

  pillars: [
    ["Curiosity","I enjoy understanding how things work."],
    ["Creativity","I like exploring different approaches to problems."],
    ["Innovation","I enjoy thinking about products that solve everyday challenges."],
    ["Exploration","I'm open to learning different technologies."],
    ["Impact","I want to create something useful for society."]
  ],

  timeline: [
    { when:"Present", now:true, title:"B.Tech — Computer Science & Engineering",
      text:"Vidya Jyothi Institute of Technology, Hyderabad · Second Year · Section CSE-D." },
    { when:"Academic achievement", title:"First-semester CGPA: 8.48",
      text:"A strong start to the degree, with a solid base in programming and core computer science." },
    { when:"Areas of academic learning", title:"Building the technical foundation",
      text:"Coursework and self-driven learning across the areas below.",
      chips:["Programming in C, Python & Java","Object-Oriented Programming","Data Structures & Algorithms","Database Management Systems","Operating Systems","Computer Organization & Architecture","Environmental Science","Innovation & Entrepreneurship"] },
    { when:"Beyond the classroom", title:"Learning by doing",
      text:"A Python data-analysis internship learning experience, a Smart India Hackathon problem statement, a live web project, and several product concepts in planning." },
    { when:"Always", title:"Still learning",
      text:"Continuing to learn, experiment and grow — with the direction set, and the destination open." }
  ],

  /* level: exp = hands-on practice · found = academic foundation · explore = currently exploring */
  skills: [
    { icon:"</>", title:"Programming Languages", desc:"Languages I write in.",
      items:[["C","found"],["Python","exp"],["Java (academic learning)","found"]] },
    { icon:"🌐", title:"Web Development", desc:"Interfaces I build and experiment with.",
      items:[["Website development","exp"],["Frontend development fundamentals","found"],["Building & experimenting with web interfaces","exp"]] },
    { icon:"🧠", title:"Computer Science Fundamentals", desc:"Core concepts from my degree.",
      items:[["Object-Oriented Programming","found"],["Data Structures","found"],["Database Management Systems","found"],["Operating Systems","found"],["Computer Networks fundamentals","found"]] },
    { icon:"🔭", title:"Emerging Technology Interests", desc:"Areas I'm exploring — not claiming expertise.",
      items:[["Artificial Intelligence","explore"],["AI agents","explore"],["Quantum Computing","explore"],["Internet of Things","explore"],["Automation","explore"],["Software architecture","explore"]] },
    { icon:"🎨", title:"Creative Skills", desc:"How I express ideas visually.",
      items:[["Photography","exp"],["Poster designing","exp"],["Creative thinking","exp"],["Presentation design","exp"]] }
  ],

  interests: [
    ["Artificial Intelligence & AI agents","I want to understand how intelligent systems learn and act, and how AI agents could quietly take everyday digital chores off people's hands — an idea that sits behind Nova Desk AI."],
    ["Software development","Turning an idea into something that runs is the part I enjoy most. I keep building websites and small experiments to sharpen the basics."],
    ["Quantum Computing","A completely different way of thinking about computation. I'm at the curious-reader stage and enjoy learning how it differs from classical computing."],
    ["Internet of Things","Software that touches the physical world is fascinating — everyday objects becoming connected and responsive."],
    ["Automation","Repetitive tasks are an opportunity. Automation is a recurring theme in my ideas, from file organization to complaint tracking."],
    ["Product development","Moving from a problem statement to requirements, then a prototype. I'm practising this with my PRD-stage concepts."],
    ["Entrepreneurship","Understanding how startups find problems, understand customers and reach a market — and how to build with that mindset."],
    ["Photography","Framing the world, noticing light and details. It trains the same attention I try to bring to design and code."],
    ["Emerging technologies","I like keeping an eye on what's new and asking what real problem each new technology could actually solve."]
  ],

  projects: [
    { id:"01", title:"Accent Oracle", category:"Web Development / Personal Project",
      status:["live","Live"], featured:true, image:"",   // image: "images/accent-oracle.png"
      summary:"Accent Oracle is one of my portfolio projects — a web project I've built and published online.",
      problem:null, solution:null, features:null, philosophy:null,
      tech:null,
      links:[["View live demo", "https://v0-accent-oracle.vercel.app", true]] },

    { id:"02", title:"Nova Desk AI", category:"Artificial Intelligence / Desktop Software / Automation",
      status:["concept","Concept"],
      summary:"A personal AI desktop assistant concept that makes computer usage more organized, efficient and personalized.",
      vision:"Create an intelligent digital agent that makes computer usage more organized, efficient and personalized.",
      problem:"People accumulate unnecessary files, disorganized downloads, duplicated documents and cluttered email storage. Finding important information becomes harder over time.",
      solution:"An AI-powered desktop application that understands the user's file-organization preferences and helps manage digital clutter.",
      features:["Intelligent file organization","Automatic file categorization","Personalized folder management","Custom drive and folder preferences","Intelligent file renaming","Download management","Gmail storage and clutter management concepts","User-specific learning and personalization","Privacy-focused file access and permissions"],
      workflow:{ intro:"A user assigns drives or folders to categories:", list:["C: — Downloads and applications","D: — Educational materials","E: — Photos","F: — Entertainment"],
        after:"When a download finishes, the assistant identifies its category and suggests the right destination. For educational documents, it can suggest meaningful filenames that make future searching easier." },
      philosophy:"The assistant works for the individual user, learns their preferences locally where possible, and respects their privacy. It should not unnecessarily access personal files or emails.",
      tech:null, statusNote:"Concept development and product planning — a product vision under development, not a completed application.",
      links:[] },

    { id:"03", title:"One Dashboard for Complaints", category:"Hackathon / AI-Enabled Governance / Problem Solving",
      status:["proto","Prototype in progress"],
      summary:"A Smart India Hackathon solution: one place to see complaints, their progress, and the cases that overlap across grievance systems.",
      context:"Smart India Hackathon (SIH) — Problem Statement SIH 26264: One Dashboard for Complaints (AICTE RB + PGRC).",
      problem:"Educational institutions may have complaints registered across multiple grievance platforms. Tracking the responsible authority, status, deadlines and overlapping cases becomes difficult.",
      solution:"A centralized dashboard that gives visibility into complaints and their progress.",
      features:["Unified complaint dashboard","Complaint status tracking","Assigned authority and responsible handler","Next-action visibility","SLA deadline monitoring and alerts","Potential duplicate or overlapping complaint detection","Coordination alerts when similar cases appear in both RB and PGRC systems","Warning: “Potential Overlapping Cases – Coordination Required”"],
      innovation:"Detecting potentially related complaints even when their wording or case numbers differ.",
      philosophy:"An example of my interest in solving institutional and administrative problems using technology.",
      tech:null, statusNote:"Hackathon idea, solution design and prototype development.",
      links:[] },

    { id:"04", title:"Laundry Service Startup Platform", category:"Startup Concept / Marketplace / Product Design",
      status:["concept","Concept · PRD planning"],
      summary:"A proposed digital platform connecting customers with nearby local laundry service providers.",
      problem:"Customers struggle to find reliable nearby laundry providers, compare services, communicate instructions and track orders. Local laundry businesses need better digital visibility and an organized way to manage orders.",
      solution:"A marketplace with a structured order-management system that supports local providers instead of bypassing them.",
      customer:["Customer registration and login","Profile and location management","Discovery of nearby laundry providers","Service selection, including dry cleaning","Special garment instructions","Order placement and payment options","Order tracking","Notifications when orders are ready","Garment counting and verification at handover","Customer reviews and ratings"],
      provider:["Provider registration","Business genuineness verification","Community membership","Language preferences","Order management dashboard","Customer ratings and provider ratings","Delivery options that can improve provider visibility"],
      delivery:"Explore part-time delivery partners available during morning and evening windows, alongside potential integration with established delivery services.",
      philosophy:"Build a platform that supports local businesses instead of unnecessarily bypassing them, and protect the relationship between customers and providers through a structured order-management system.",
      tech:null, statusNote:"Startup concept and Product Requirements Document (PRD) planning.",
      links:[] },

    { id:"05", title:"Python Data Analysis Internship", category:"Python / Data Analytics / Internship Learning",
      status:["learn","Learning experience"],
      summary:"A practical learning experience in Python and data analysis through an internship program.",
      meta:[["Project workspace","Project-1-Data-Analysis"],["Repository","QSkill-Python-Internship"]],
      problem:null, solution:null, features:null, philosophy:null,
      tech:["Python","Data analysis"],
      links:[["My GitHub profile", "https://github.com/shreyastadisina-arch", false]] }
  ],

  gallery: [   // add src: "images/your-image.jpg" when you have an image to feature
    { title:"Photography", note:"Add an image in images/", src:"" },
    { title:"Photography", note:"Add an image in images/", src:"" },
    { title:"Photography", note:"Add an image in images/", src:"" },
    { title:"Poster design", note:"Add an image in images/", src:"" },
    { title:"Photography", note:"Add an image in images/", src:"" },
    { title:"Presentation design", note:"Add an image in images/", src:"" },
    { title:"Photography", note:"Add an image in images/", src:"" },
    { title:"Photography", note:"Add an image in images/", src:"" }
  ],

  practice: [
    ["📷","Photography","Seeing light, framing and detail — one of my favourite ways to slow down and notice the world."],
    ["🎞️","Visual storytelling","Making a single image or a short sequence say something without needing many words."],
    ["🖼️","Poster creation","Poster-making competitions taught me to balance message, layout and impact."],
    ["📊","Creative presentation design","Turning ideas into clear, engaging slides that people actually want to look at."],
    ["✨","Design & aesthetics","Exploring how typography, colour and space change how something feels."],
    ["🔗","Technology × creativity","Thinking about how creative thinking and technology can strengthen each other."]
  ],

  questions: [
    "How startups identify problems.",
    "How businesses understand customers.",
    "How ideas become products.",
    "How markets work.",
    "How MVPs and prototypes are developed.",
    "How technology can solve everyday problems.",
    "How creative people collaborate to build something meaningful."
  ]
};

/* =====================================================================
   Helpers & icons
   ===================================================================== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ICON = {
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  gh:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
  li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>'
};

/* =====================================================================
   Render: traits, pillars, timeline
   ===================================================================== */
$('#traits').innerHTML = CONFIG.traits.map(([i,t]) =>
  `<div class="card trait hover reveal"><span class="ic" aria-hidden="true">${i}</span><p>${esc(t)}</p></div>`).join('');
$('#pillars').innerHTML = CONFIG.pillars.map(([h,p],i) =>
  `<div class="card pillar hover reveal"><span class="n">0${i+1}</span><h4>${esc(h)}</h4><p>${esc(p)}</p></div>`).join('');
$('#timeline').innerHTML = CONFIG.timeline.map(t =>
  `<div class="t-item reveal ${t.now?'now':''}"><div class="card hover"><div class="when">${esc(t.when)}</div><h4>${esc(t.title)}</h4><p>${esc(t.text)}</p>
   ${t.chips?`<div class="chips">${t.chips.map(c=>`<span class="chip">${esc(c)}</span>`).join('')}</div>`:''}</div></div>`).join('');

/* =====================================================================
   Skills with filters
   ===================================================================== */
$('#skillGrid').innerHTML = CONFIG.skills.map(s =>
  `<article class="card skill-card hover reveal"><h3><span class="ic" aria-hidden="true">${esc(s.icon)}</span>${esc(s.title)}</h3>
   <p class="desc">${esc(s.desc)}</p>
   <div class="tags">${s.items.map(([n,l]) => `<span class="tag ${l}" data-l="${l}"><i></i>${esc(n)}</span>`).join('')}</div></article>`).join('');
$$('.filter').forEach(b => b.addEventListener('click', () => {
  $$('.filter').forEach(x => x.setAttribute('aria-pressed', x === b));
  const f = b.dataset.f;
  $$('.tag').forEach(t => t.classList.toggle('dim', f !== 'all' && t.dataset.l !== f));
}));

/* Interests tabs */
const intList = $('#intList'), intPanel = $('#intPanel');
intList.innerHTML = CONFIG.interests.map(([n],i) =>
  `<button class="int-btn" role="tab" id="int-${i}" aria-selected="${i===0}" data-i="${i}">${esc(n)}</button>`).join('');
function showInterest(i){
  $$('.int-btn').forEach(b => b.setAttribute('aria-selected', b.dataset.i == i));
  const [n,d] = CONFIG.interests[i];
  intPanel.setAttribute('aria-labelledby','int-'+i);
  intPanel.innerHTML = `<h4>${esc(n)}</h4><p>${esc(d)}</p><span class="chip">Area of interest &amp; exploration</span>`;
}
intList.addEventListener('click', e => { const b = e.target.closest('.int-btn'); if(b) showInterest(b.dataset.i); });
showInterest(0);

/* =====================================================================
   Projects
   ===================================================================== */
const list = a => `<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
const block = (h,body) => body ? `<div class="d-block"><h5>${h}</h5>${body}</div>` : '';
function details(p){
  let h = '';
  if(p.context) h += block('Hackathon context', `<p>${esc(p.context)}</p>`);
  if(p.vision) h += block('Vision', `<p>${esc(p.vision)}</p>`);
  if(p.meta) h += block('Workspace', p.meta.map(([k,v])=>`<p><strong style="color:var(--text)">${esc(k)}:</strong> ${esc(v)}</p>`).join(''));
  if(p.problem) h += block('The problem', `<p>${esc(p.problem)}</p>`);
  if(p.solution) h += block('Proposed solution', `<p>${esc(p.solution)}</p>`);
  if(p.features) h += block('Key proposed features', list(p.features));
  if(p.customer) h += block('Proposed customer features', list(p.customer));
  if(p.provider) h += block('Provider features', list(p.provider));
  if(p.delivery) h += block('Delivery model', `<p>${esc(p.delivery)}</p>`);
  if(p.workflow) h += block('Example workflow', `<p>${esc(p.workflow.intro)}</p>${list(p.workflow.list)}<p style="margin-top:8px">${esc(p.workflow.after)}</p>`);
  if(p.innovation) h += block('The key innovation', `<p>${esc(p.innovation)}</p>`);
  if(p.philosophy) h += block('Product philosophy', `<p>${esc(p.philosophy)}</p>`);
  if(p.tech) h += block('Technologies', `<div class="tags">${p.tech.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>`);
  if(p.statusNote) h += block('Current status', `<p>${esc(p.statusNote)}</p>`);
  return h;
}
function preview(p){
  return `<div class="preview" aria-hidden="${p.image?'false':'true'}">
    ${p.image?`<img class="shot" src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">`:`
    <div class="browser"><div class="bar"><i></i><i></i><i></i><span>${esc(p.links[0]?p.links[0][1].replace('https://',''):'')}</span></div>
      <div class="scr"><div class="wave">${Array.from({length:26},(_,i)=>`<i style="height:${30+Math.abs(Math.sin(i*.7))*70}%"></i>`).join('')}</div>
        <div class="line w1"></div><div class="line w2"></div><div class="line w3"></div><div class="mock-btn"></div></div></div>
    <span class="pv-note">Illustrative preview</span>`}
  </div>`;
}
$('#projGrid').innerHTML = CONFIG.projects.map((p,i) => {
  const projectDetails = details(p);
  const links = p.links.map(([t,u,primary]) =>
    `<a class="btn ${primary?'btn-primary':'btn-ghost'} btn-sm" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)}${ICON.ext}</a>`).join('');
  return `<article class="card hover proj reveal ${p.featured?'featured':''}">
    ${p.featured?preview(p):''}
    <div class="proj-body">
      <div class="proj-top"><span class="proj-num">PROJECT ${p.id}</span><span class="badge b-${p.status[0]}">${esc(p.status[1])}</span></div>
      <span class="cat">${esc(p.category)}</span>
      <h3>${esc(p.title)}</h3>
      <p class="summary">${esc(p.summary)}</p>
      ${projectDetails ? `<div class="details" id="d${i}"><div><div class="d-grid">${projectDetails}</div></div></div>` : ''}
      <div class="proj-actions">
        ${links}
        ${projectDetails ? `<button class="btn btn-ghost btn-sm toggle" aria-expanded="false" aria-controls="d${i}" data-t="${i}"><span>View details</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg></button>` : ''}
      </div>
    </div></article>`;
}).join('');
$('#projGrid').addEventListener('click', e => {
  const b = e.target.closest('.toggle'); if(!b) return;
  const d = $('#d'+b.dataset.t), open = !d.classList.contains('open');
  d.classList.toggle('open', open);
  b.setAttribute('aria-expanded', open);
  b.firstElementChild.textContent = open ? 'Hide details' : 'View details';
  b.lastElementChild.style.transform = open ? 'rotate(180deg)' : '';
});

/* Beyond code */
$('#qGrid').innerHTML = CONFIG.questions.map((q,i) =>
  `<div class="card q hover reveal"><div class="n grad">0${i+1}</div><p>${esc(q)}</p></div>`).join('')
  + `<div class="card q hover reveal" style="display:grid;place-items:center;text-align:center"><p style="font-family:'Space Grotesk';font-size:1.05rem;color:var(--text)">“I want to understand how it all fits together.”</p></div>`;

/* Practice + contact links */
$('#practice').innerHTML = CONFIG.practice.map(([i,t,d]) =>
  `<div class="card hover reveal"><span class="ic" aria-hidden="true">${i}</span><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join('');
const contactLinks = [
  ['LinkedIn','shreyas-tadisina', CONFIG.linkedin, ICON.li],
  ['GitHub','shreyastadisina-arch', CONFIG.github, ICON.gh],
  ['Portfolio project','Accent Oracle', CONFIG.accentOracle, ICON.ext]
];
if(CONFIG.email) contactLinks.push(['Email', CONFIG.email, 'mailto:'+CONFIG.email, ICON.mail]);
$('#cLinks').innerHTML = contactLinks.map(([k,v,u,ic]) => {
  const inner = `<span class="ic">${ic}</span><div><small>${k}</small><span>${esc(v)}</span></div>`;
  return u ? `<a class="card hover c-link" href="${esc(u)}" ${u.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${inner}</a>`
           : `<div class="card c-link" style="opacity:.7">${inner}</div>`;
}).join('');
$('#yr').textContent = new Date().getFullYear();

/* =====================================================================
   Contact form
   ===================================================================== */
const form = $('#form'), status = $('#status');
function say(msg, cls){ status.textContent = msg; status.className = 'status ' + cls; }
form.addEventListener('submit', async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if(d._gotcha) return;
  if(!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim()){ say('Please fill in your name, a valid email and a message.', 'err'); return; }
  if(CONFIG.formEndpoint){
    const btn = $('#send'); btn.disabled = true; say('Sending…','info');
    try{
      const r = await fetch(CONFIG.formEndpoint, {method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(d)});
      if(!r.ok) throw 0;
      form.reset(); say('Thank you! Your message was sent — I’ll get back to you soon.','ok');
    }catch(_){ say('Something went wrong. Please try LinkedIn or GitHub instead.','err'); }
    btn.disabled = false;
  } else if(CONFIG.email){
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(d.subject||'Hello from your portfolio')}&body=${encodeURIComponent(d.message+'\n\n— '+d.name+' ('+d.email+')')}`;
    say('Opening your email app…','info');
  } else {
    say('The form isn’t connected yet — please reach out via LinkedIn or GitHub for now.','info');
  }
});

/* =====================================================================
   Navigation: scroll state, active link, mobile menu, progress, theme
   ===================================================================== */
const nav = $('#nav'), menu = $('#menu'), burger = $('#burger'), bar = $('#progress');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 20);
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
}, {passive:true});
burger.addEventListener('click', () => {
  const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o);
  burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu');
});
menu.addEventListener('click', e => { if(e.target.closest('a')){ menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });
const links = $$('.menu a');
const secObs = new IntersectionObserver(es => es.forEach(en => {
  if(en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+en.target.id));
}), {rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s => secObs.observe(s));

const root = document.documentElement, themeBtn = $('#themeBtn');
function setTheme(t){ root.dataset.theme = t; themeBtn.setAttribute('aria-label', t==='dark'?'Switch to light theme':'Switch to dark theme');
  $('meta[name="theme-color"]').content = t==='dark' ? '#0b0d12' : '#f6f7fb'; try{ localStorage.setItem('theme', t); }catch(_){} }
try{ const s = localStorage.getItem('theme'); if(s) setTheme(s); }catch(_){}
themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

/* Reveal on scroll */
const revObs = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); revObs.unobserve(en.target); } }), {threshold:.12});
$$('.reveal').forEach((el,i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; revObs.observe(el); });

/* =====================================================================
   Circular 3D gallery (vanilla port of the circular-gallery component)
   ===================================================================== */
(function(){
  const stage = $('#stage'), ring = $('#ring'), items = CONFIG.gallery, n = items.length;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hues = [220,262,190,300,205,250,175,280];
  const els = items.map((it,i) => {
    const h = hues[i % hues.length];
    const media = it.src
      ? `<img src="${esc(it.src)}" alt="${esc(it.title)}" loading="lazy" draggable="false">`
      : `<svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Add an image for ${esc(it.title)}">
          <defs><linearGradient id="pg${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h} 70% 38%)"/><stop offset="1" stop-color="hsl(${(h+50)%360} 70% 22%)"/></linearGradient></defs>
          <rect width="300" height="400" fill="url(#pg${i})"/>
          <g stroke="rgba(255,255,255,.14)" fill="none"><circle cx="150" cy="170" r="90"/><circle cx="150" cy="170" r="130"/></g>
          <g transform="translate(110 130) scale(3.3)" stroke="rgba(255,255,255,.85)" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></g>
          <text x="150" y="290" text-anchor="middle" fill="#fff" fill-opacity=".85" font-family="Inter,Arial" font-size="15" font-weight="600">ADD AN IMAGE</text></svg>`;
    const d = document.createElement('div');
    d.className = 'g-item'; d.setAttribute('role','group'); d.setAttribute('aria-label', it.title);
    d.innerHTML = `<div class="g-card">${media}<div class="g-cap"><h4>${esc(it.title)}</h4><p>${esc(it.note)}</p></div></div>`;
    ring.appendChild(d); return d;
  });
  let rot = 0, goal = null, drag = false, paused = reduced, lastX = 0, visible = false, radius = 500, raf;
  const step = 360 / n;
  function layout(){
    const w = innerWidth < 620 ? 190 : 250, h = w * 1.34;
    ring.style.width = w + 'px'; ring.style.height = h + 'px';
    ring.style.marginLeft = -w/2 + 'px'; ring.style.marginTop = -h/2 + 'px';
    radius = Math.max(260, (w/2) / Math.tan(Math.PI / n) * 1.28);
    els.forEach((el,i) => el.style.transform = `rotateY(${i*step}deg) translateZ(${radius}px)`);
  }
  function frame(){
    if(!visible){ raf = null; return; }
    if(!drag && !paused && goal === null) rot -= 0.12;
    if(goal !== null){ rot += (goal - rot) * 0.1; if(Math.abs(goal - rot) < .05){ rot = goal; goal = null; } }
    ring.style.transform = `translateZ(${-radius}px) rotateY(${rot}deg)`;
    const t = ((rot % 360) + 360) % 360;
    els.forEach((el,i) => {
      const rel = (i*step + t + 360) % 360, a = rel > 180 ? 360 - rel : rel;
      el.style.opacity = Math.max(.25, 1 - a / 150).toFixed(2);
    });
    raf = requestAnimationFrame(frame);
  }
  new IntersectionObserver(es => { visible = es[0].isIntersecting; if(visible && !raf) raf = requestAnimationFrame(frame); }, {threshold:.05}).observe(stage);
  addEventListener('resize', layout); layout();
  stage.addEventListener('pointerdown', e => { drag = true; goal = null; lastX = e.clientX; stage.classList.add('drag'); stage.setPointerCapture(e.pointerId); });
  stage.addEventListener('pointermove', e => { if(!drag) return; rot += (e.clientX - lastX) * .35; lastX = e.clientX; });
  const end = () => { drag = false; stage.classList.remove('drag'); };
  stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end);
  const go = dir => { goal = Math.round(rot / step) * step + dir * step; };
  $('#gPrev').addEventListener('click', () => go(1));
  $('#gNext').addEventListener('click', () => go(-1));
  stage.addEventListener('keydown', e => { if(e.key === 'ArrowLeft'){ go(1); e.preventDefault(); } if(e.key === 'ArrowRight'){ go(-1); e.preventDefault(); } });
  const pb = $('#gPause');
  pb.textContent = paused ? 'Resume rotation' : 'Pause rotation'; pb.setAttribute('aria-pressed', paused);
  pb.addEventListener('click', () => { paused = !paused; pb.textContent = paused ? 'Resume rotation' : 'Pause rotation'; pb.setAttribute('aria-pressed', paused); });
  stage.addEventListener('mouseenter', () => { stage._h = true; });
})();
