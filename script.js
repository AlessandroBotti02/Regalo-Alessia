/* =========================================================
   ✏️  PERSONALIZZA QUI  (è l'unica parte da modificare)
   ========================================================= */
const CONFIG = {
  // Scritta che appare dopo le candeline: "Buon compleanno, <nome>"
  nome: "amore",

  // La firma in fondo alla lettera (allineata a destra)
  firma: "Ti amo",

  // La lettera: un paragrafo per riga, ogni riga tra virgolette e con la virgola finale.
  lettera: [
    "Buon compleanno Gigia,",
    "Ormai abbiamo passato tanti compleanni insieme e non vedo l’ora di passarne altrettanti. Nell’ultimo anno abbiamo affrontato tante cose, forse è stato uno degli anni più difficili.",
    "Sono veramente felice di aver risolto ma sono ancora più felice di sapere come è andata, non ti nascondo di aver avuto paura e provato anche rabbia per tutto quello che è successo e che ci siamo detti, ma c’è una cosa che mi ha sempre convinto: molte volte basta guardarci e tutto il resto si annulla, si resetta.",
    "Mi basta un tuo sorriso per farmi passare la rabbia, mi basta un tuo ciao per sollevarmi la giornata. Sono felice di come abbiamo affrontato tutto nel bene e nel male perché ci ha cambiati, migliorati e resi ancora più uniti. Anche tutti i momenti brutti, in cui eravamo distanti penso che ci abbiano forgiato e fatto capire quanto l’altra persona vale per noi.",
    "Mi manchi e vorrei essere più presente, in un anno o poco più ci siamo dovuti adattare a un nuovo mondo, ci vediamo di meno e dobbiamo sempre trovare momenti o buchi per vederci, volevo farti sapere che se non ti mando un messaggio o non ci sentiamo comunque io ti penso sempre, sei sempre nella mia testa. Quando ho una brutta giornata e sono impegnato tra mille cose basta pensarti per farmi lavorare sereno e migliorare.",
    "Sei la persona migliore che ci sia, mi hai reso e mi rendi tutti i giorni un uomo migliore.",
  ],

  // Canzone (MP3): parte subito dopo i coriandoli delle candeline. Lascia "" se non c'è.
  musica: "",         // es. "musica/canzone.mp3"
  musicaDa: 0,        // da che secondo far partire la canzone (es. 45 = dal ritornello)
  musicaLoop: true,   // true = ricomincia quando finisce, false = si ferma

  // Effetto sonoro dei coriandoli
  suonoFesta: "suoni/festa.mp3",

  // Messaggio segreto: si sblocca toccando 5 volte il cuore finale
  segreto: "Lo sapevo che l'avresti trovato. Ti amo più di quanto riesca a scrivere. Il 6 novembre, la prima sera, sulla terrazza: ho ancora una cosa da dirti. ♥",

  // Frase finale (puoi usare <em>…</em> per il corsivo dorato)
  finale: "Ci vediamo il <em>6 novembre</em>.<br>Porta la sciarpa,<br>al resto penso io.",

  // Data/ora di partenza per il countdown
  partenza: "2026-11-06T15:00:00",
};

/* =========================================================
   ITINERARIO (dal programma già pianificato)
   ========================================================= */
const GIORNI = [
  {
    data: "Venerdì 6 novembre",
    titolo: "Arrivo & Como città",
    icona: "🏛️",
    tappe: [
      { quando: "Pomeriggio", cosa: "Check-in a Carate Urio",
        dettaglio: "Lasciamo le valigie a LaCasetta, un primo sguardo al lago dalla terrazza, e poi giù verso Como." },
      { quando: "Pomeriggio", cosa: "Duomo & centro storico murato",
        dettaglio: "Il Duomo di Como e una passeggiata dentro le mura. Se piove, ci rifugiamo tra negozi e caffè." },
      { quando: "Sera", cosa: "Cena in osteria comasca",
        dettaglio: "Piatti d'autunno: polenta, pizzocheri, brasato. E un bicchiere di rosso." },
    ],
  },
  {
    data: "Sabato 7 novembre",
    titolo: "Il centro lago in battello",
    icona: "⛴️",
    tappe: [
      { quando: "Mattina", cosa: "In battello fino a Bellagio",
        dettaglio: "Lasciamo l'auto e ci muoviamo sull'acqua. Vicoli acciottolati e atmosfera intima, senza la folla dell'estate." },
      { quando: "Pomeriggio", cosa: "Varenna · Villa Cipressi",
        dettaglio: "Traghetto per Varenna e il giardino botanico di Villa Cipressi, affacciato sul lago.",
        link: { url: "https://www.holidoit.com/e/ingresso-al-giardino-botanico-di-villa-cipressi-a-varenna?sV=1531", label: "Ingresso al giardino" } },
    ],
  },
  {
    data: "Domenica 8 novembre",
    titolo: "Viste dall'alto o dall'acqua",
    icona: "🏔️",
    opzioni: [
      { label: "☀️ Se è terso", tappe: [
        { quando: "Mattina", cosa: "Funicolare per Brunate",
          dettaglio: "Saliamo con la storica funicolare da Como per vedere le Alpi innevate dall'alto.",
          link: { url: "https://www.funicolarecomo.it/", label: "Orari funicolare" } },
      ] },
      { label: "🌧️ Se piove", tappe: [
        { quando: "Mattina", cosa: "Barca d'epoca, coperta e riscaldata",
          dettaglio: "Navighiamo davanti alle ville, compresa quella di George Clooney a Laglio, restando al caldo.",
          link: { url: "https://www.tripadvisor.com/AttractionProductHighlight-g187835-d32789285-Lake_Como_Private_Classic_Boat_Experience_from_Como-Como_Lake_Como_Lombardy.html", label: "Il tour in barca" } },
      ] },
    ],
  },
];

// Punti sulla mappa stilizzata (day: 0 = casa)
const PINS = [
  { nome: "Varenna",       x: 200, y: 146, day: 2, anchor: "start",  dx: 10,  dy: 4 },
  { nome: "Bellagio",      x: 172, y: 200, day: 2, anchor: "middle", dx: 0,   dy: 20 },
  { nome: "Laglio",        x: 108, y: 244, day: 3, anchor: "end",    dx: -10, dy: 4 },
  { nome: "Carate Urio ♥", x: 84,  y: 280, day: 0, anchor: "end",    dx: -10, dy: 4 },
  { nome: "Como",          x: 58,  y: 320, day: 1, anchor: "end",    dx: -10, dy: 4 },
  { nome: "Brunate",       x: 86,  y: 334, day: 3, anchor: "start",  dx: 10,  dy: 4 },
];
const DAY_COLORS = ["#8e2f3a", "#d8b77a", "#c96b6b", "#2f6f8f"];

/* =========================================================
   Da qui in giù non serve toccare nulla
   ========================================================= */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
const $ = (s) => document.querySelector(s);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function show(id, scroll = true) {
  const el = document.getElementById(id);
  el.hidden = false;
  observeReveals(el);
  if (scroll) requestAnimationFrame(() => el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }));
}

/* ---------- Comparsa allo scroll ---------- */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.15 })
  : null;
function observeReveals(root) {
  root.querySelectorAll(".reveal").forEach((el) => io ? io.observe(el) : el.classList.add("in"));
}

/* ---------- Coriandoli ---------- */
const confetti = (() => {
  const c = $("#confetti"), ctx = c.getContext("2d");
  let parts = [], raf = null;
  const colors = ["#d8b77a", "#ecd6a4", "#c96b6b", "#8e2f3a", "#f6efe3"];
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = innerWidth * dpr; c.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener("resize", resize); resize();
  function burst(n = 120, originY = 0.35) {
    if (reduceMotion) n = 25;
    for (let i = 0; i < n; i++) {
      parts.push({
        x: innerWidth / 2 + (Math.random() - 0.5) * 60,
        y: innerHeight * originY,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 11 - 4,
        r: Math.random() * 6 + 5,
        rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
        heart: Math.random() < 0.35,
        color: colors[(Math.random() * colors.length) | 0],
        life: 0,
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.y < innerHeight + 40 && p.life < 260);
    for (const p of parts) {
      p.life++; p.vy += 0.28; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.color;
      if (p.heart) { ctx.font = `${p.r * 2.4}px serif`; ctx.fillText("♥", -p.r, p.r); }
      else ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
      ctx.restore();
    }
    raf = parts.length ? requestAnimationFrame(tick) : (ctx.clearRect(0, 0, innerWidth, innerHeight), null);
  }
  return burst;
})();

/* ---------- Audio: effetto festa + canzone ----------
   I telefoni fanno partire l'audio solo dopo un tocco: al primo tocco sul
   gratta e vinci "sblocchiamo" i suoni, poi possono partire da soli. */
const sound = (() => {
  const song = $("#music"), btn = $("#music-btn");
  const sfx = CONFIG.suonoFesta ? new Audio(CONFIG.suonoFesta) : null;
  let unlocked = false, songStarted = false, fadeTimer = null;
  if (sfx) sfx.preload = "auto";
  if (CONFIG.musica) { song.src = CONFIG.musica; song.loop = CONFIG.musicaLoop; song.preload = "auto"; }

  function unlock() {
    if (unlocked) return; unlocked = true;
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) {}
    [sfx, CONFIG.musica ? song : null].filter(Boolean).forEach((a) => {
      a.muted = true;
      const p = a.play();
      const reset = () => { a.pause(); a.currentTime = 0; a.muted = false; };
      p && p.then ? p.then(reset).catch(() => { a.muted = false; }) : reset();
    });
  }

  function fadeTo(target, ms) {        // su iPhone il volume è fisso: lì la dissolvenza viene ignorata
    clearInterval(fadeTimer);
    const start = song.volume, steps = Math.max(1, Math.round(ms / 50));
    let i = 0;
    fadeTimer = setInterval(() => {
      i++; song.volume = Math.min(1, Math.max(0, start + (target - start) * (i / steps)));
      if (i >= steps) clearInterval(fadeTimer);
    }, 50);
  }

  function festa(vol = 1) {
    if (!sfx) return;
    sfx.currentTime = 0; sfx.volume = vol;
    sfx.play().catch(() => {});
    if (songStarted && !song.paused) {        // abbassa un attimo la canzone
      fadeTo(0.25, 200);
      setTimeout(() => fadeTo(0.8, 1200), 1800);
    }
  }

  function startSong() {
    if (!CONFIG.musica || songStarted) return; songStarted = true;
    song.currentTime = CONFIG.musicaDa || 0;
    song.volume = 0;
    song.play().then(() => {
      fadeTo(0.8, 2500);
      btn.hidden = false; btn.classList.add("playing");
    }).catch(() => { btn.hidden = false; btn.classList.add("muted"); });
  }

  btn.addEventListener("click", () => {
    if (song.paused) { song.volume = 0.8; song.play(); btn.classList.add("playing"); btn.classList.remove("muted"); }
    else { song.pause(); btn.classList.remove("playing"); btn.classList.add("muted"); }
  });

  return { unlock, festa, startSong };
})();

/* ---------- 1. Gratta e vinci ---------- */
function initScratch() {
  const wrap = $("#scratch"), canvas = $("#scratch-canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  let w, h, dpr, drawing = false, last = null, touched = false, done = false, moves = 0;

  function paint() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = wrap.getBoundingClientRect(); w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#a67c45"); g.addColorStop(0.45, "#ecd6a4"); g.addColorStop(0.55, "#e2c48a"); g.addColorStop(1, "#9c733e");
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 160; i++) {           // brillantini
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }
    ctx.fillStyle = "rgba(70,45,15,.75)"; ctx.textAlign = "center";
    ctx.font = `600 ${Math.round(w / 11)}px "Cormorant Garamond", Georgia, serif`;
    ctx.fillText("Gratta qui", w / 2, h / 2);
    ctx.font = `500 ${Math.round(w / 24)}px Inter, sans-serif`;
    ctx.fillText("♥   ♥   ♥", w / 2, h / 2 + w / 12);
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(36, w / 8);
  }

  const pos = (e) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  function stroke(a, b) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }

  function cleared() {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clear = 0, total = 0;
    for (let i = 3; i < data.length; i += 4 * 24) { total++; if (data[i] === 0) clear++; }
    return clear / total;
  }
  function check() { if (!done && cleared() > 0.5) win(); }

  function win() {
    if (done) return; done = true;
    const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? Math.min(ms, 300) : ms));
    canvas.classList.add("cleared");
    $("#scratch-hint").hidden = true; $("#scratch-skip").hidden = true;
    if (navigator.vibrate) navigator.vibrate(30);

    (async () => {
      await wait(1500);                           // si vede la torta con le candeline accese
      $("#cake").classList.add("out");            // soffio: le candeline si spengono
      wrap.classList.add("dark");
      if (navigator.vibrate) navigator.vibrate([20, 30, 20]);
      await wait(1100);
      showGreeting();                             // "Buon compleanno, amore" lettera per lettera
      await wait(500);
      confetti(160, 0.4);
      sound.festa();
      await wait(900);
      sound.startSong();                          // parte la canzone
      await wait(1700);
      show("lettera");                            // scorre da solo fino alla busta
    })();
  }

  function showGreeting() {
    const el = $("#greeting");
    el.setAttribute("aria-label", `Buon compleanno, ${CONFIG.nome}`);
    let i = 0;
    [["l1", "Buon compleanno,"], ["l2", CONFIG.nome]].forEach(([cls, txt]) => {
      const line = document.createElement("span");
      line.className = `line ${cls}`;
      [...txt].forEach((c) => {
        const ch = document.createElement("span");
        ch.className = "ch";
        ch.textContent = c === " " ? "\u00A0" : c;
        ch.style.animationDelay = `${(i++) * 0.05 + (cls === "l2" ? 0.25 : 0)}s`;
        line.appendChild(ch);
      });
      el.appendChild(line);
    });
    el.hidden = false;
  }

  canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    drawing = true; touched = true; last = pos(e);
    canvas.setPointerCapture?.(e.pointerId);
    stroke(last, { x: last.x + 0.1, y: last.y });
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drawing) return;
    const p = pos(e); stroke(last, p); last = p;
    if (++moves % 10 === 0) check();
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((ev) =>
    canvas.addEventListener(ev, () => { if (drawing) { drawing = false; check(); } }));
  // Sblocco audio: sui touch vale il "dito alzato", non il "dito appoggiato"
  ["pointerup", "touchend", "click"].forEach((ev) => canvas.addEventListener(ev, sound.unlock));

  // Ridisegna solo se non ha ancora iniziato a grattare
  addEventListener("resize", () => { if (!touched) paint(); });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(paint);
  paint();

  // Piano B: dopo 12 secondi compare "Non riesci? Tocca qui"
  setTimeout(() => { if (!done) $("#scratch-skip").hidden = false; }, 12000);
  $("#scratch-skip").addEventListener("click", () => { sound.unlock(); win(); });
}

/* ---------- 2. Lettera ---------- */
function initLetter() {
  const text = $("#letter-text");
  CONFIG.lettera.forEach((par, i) => {
    const p = document.createElement("p");
    p.textContent = par;
    p.style.animationDelay = `${0.6 + i * 0.7}s`;
    text.appendChild(p);
  });
  const sign = $("#letter-sign");
  sign.textContent = CONFIG.firma;
  const signDelay = 0.6 + CONFIG.lettera.length * 0.7;
  sign.style.animationDelay = `${signDelay}s`;

  const env = $("#envelope");
  const open = () => {
    if (env.classList.contains("open")) return;
    env.classList.remove("wiggle");
    env.classList.add("open");
    $("#click-here").hidden = true;
    if (navigator.vibrate) navigator.vibrate(25);
    setTimeout(() => {
      $("#letter").hidden = false;
      $("#letter").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      // a fine lettera: "Scorri giù" e si sblocca il viaggio
      setTimeout(() => {
        $("#letter-cue").hidden = false;
        $("#viaggio").hidden = false;
        observeReveals($("#viaggio"));
      }, (signDelay + 0.8) * 1000);
    }, 1100);
  };
  env.addEventListener("click", open);
  env.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });

  $("#letter-cue").addEventListener("click", (e) => { e.preventDefault(); show("viaggio"); });
}

/* ---------- 3. Biglietto + countdown + calendario ---------- */
function initTicket() {
  const t = $("#ticket");
  const flip = () => {
    if (t.classList.contains("flipped")) return;
    t.classList.add("flipped");
    $("#ticket-hint").hidden = true;
    setTimeout(() => {
      confetti(180, 0.4);
      sound.festa();
      if (navigator.vibrate) navigator.vibrate([40, 60, 40, 60, 80]);
      $("#after-ticket").hidden = false;
      $("#itinerario").hidden = false;
      observeReveals($("#itinerario"));
    }, 650);
  };
  t.addEventListener("click", flip);
  t.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });

  const target = new Date(CONFIG.partenza).getTime();
  const pad = (n) => String(n).padStart(2, "0");
  function tickCountdown() {
    let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    const m = Math.floor(s / 60); s %= 60;
    $("#cd-d").textContent = d; $("#cd-h").textContent = pad(h);
    $("#cd-m").textContent = pad(m); $("#cd-s").textContent = pad(s);
    if (target - Date.now() <= 0) $(".countdown-label").textContent = "Ci siamo! ♥";
  }
  tickCountdown(); setInterval(tickCountdown, 1000);

  $("#add-cal").addEventListener("click", () => {
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Per te//Lago di Como//IT", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:lago-di-como-20261106@perte",
      "DTSTAMP:20261009T000000Z",
      "DTSTART;VALUE=DATE:20261106",
      "DTEND;VALUE=DATE:20261109",
      "SUMMARY:♥ Lago di Como – noi due",
      "LOCATION:LaCasetta – Como Lakeview Terrace\\, Carate Urio (CO)",
      "DESCRIPTION:Ven: Como città e Duomo. Sab: battello per Bellagio e Varenna. Dom: Brunate o barca d'epoca.",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url; a.download = "lago-di-como.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  });
}

/* ---------- 4. Itinerario ---------- */
function stopsHTML(tappe) {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  return tappe.map((s) => `
    <li class="stop">
      <span class="stop-when">${esc(s.quando)}</span>
      <h4>${esc(s.cosa)}</h4>
      <p>${esc(s.dettaglio)}</p>
      ${s.link ? `<a class="stop-link" href="${esc(s.link.url)}" target="_blank" rel="noopener">${esc(s.link.label)} ↗</a>` : ""}
    </li>`).join("");
}

function initItinerary() {
  const root = $("#days");
  GIORNI.forEach((g, i) => {
    const day = document.createElement("article");
    day.className = "day reveal"; day.id = `day-${i + 1}`;
    day.innerHTML = `
      <header class="day-head">
        <span class="day-num">${i + 1}</span>
        <div><p class="day-date">${g.data}</p><h3>${g.titolo}</h3></div>
        <span class="day-icon" aria-hidden="true">${g.icona}</span>
      </header>`;
    const ol = document.createElement("ol"); ol.className = "timeline";

    if (g.opzioni) {
      const tog = document.createElement("div"); tog.className = "toggle"; tog.setAttribute("role", "group");
      g.opzioni.forEach((o, k) => {
        const b = document.createElement("button"); b.type = "button"; b.textContent = o.label;
        b.setAttribute("aria-pressed", k === 0 ? "true" : "false");
        b.addEventListener("click", () => {
          tog.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
          ol.classList.remove("swap"); void ol.offsetWidth; ol.classList.add("swap");
          ol.innerHTML = stopsHTML(o.tappe);
        });
        tog.appendChild(b);
      });
      day.appendChild(tog);
      ol.innerHTML = stopsHTML(g.opzioni[0].tappe);
    } else {
      ol.innerHTML = stopsHTML(g.tappe);
    }
    day.appendChild(ol);
    root.appendChild(day);
  });

  // Mappa
  const NS = "http://www.w3.org/2000/svg", pins = $("#map-pins");
  PINS.forEach((p) => {
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "pin" + (p.day === 0 ? " home" : ""));
    g.setAttribute("tabindex", "0");
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.setAttribute("r", p.day === 0 ? 8 : 6.5);
    c.setAttribute("fill", DAY_COLORS[p.day]);
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", p.x + p.dx); t.setAttribute("y", p.y + p.dy); t.setAttribute("text-anchor", p.anchor);
    t.textContent = p.nome;
    g.append(c, t);
    const go = () => document.getElementById(`day-${p.day || 1}`).scrollIntoView({ behavior: "smooth", block: "start" });
    g.addEventListener("click", go);
    g.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    pins.appendChild(g);
  });

  $("#to-end").addEventListener("click", () => show("finale"));
}

/* ---------- 5. Finale + easter egg ---------- */
function initFinale() {
  $("#finale-text").innerHTML = CONFIG.finale;
  const heart = $("#heart"), hint = $("#heart-hint");
  const msgs = ["", "ancora…", "ancora un po'…", "ci sei quasi…", "un'ultima volta ♥"];
  let taps = 0;
  heart.addEventListener("click", () => {
    if (taps >= 5) { confetti(60, 0.5); return; }
    taps++;
    heart.style.fontSize = `${4.5 + taps * 0.6}rem`;
    if (navigator.vibrate) navigator.vibrate(20);
    if (taps < 5) { hint.textContent = msgs[taps]; return; }
    hint.innerHTML = "&nbsp;";
    $("#secret").textContent = CONFIG.segreto;
    $("#secret").hidden = false;
    confetti(200, 0.5);
    sound.festa(0.7);
  });
  $("#restart").addEventListener("click", () => { window.scrollTo(0, 0); location.reload(); });
}

/* ---------- Avvio ---------- */
initScratch();
initLetter();
initTicket();
initItinerary();
initFinale();
observeReveals(document);
