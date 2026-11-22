/* =====================================================================
   Kilian Ritter · Portfolio – Seitenlogik
   Baut Header, Startseite und Projektseiten aus content.js.
   Normalerweise musst du hier nichts ändern.
   ===================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  const ABOUT = window.ABOUT || [];
  const PROJECTS = (window.PROJECTS || []).filter(p => p && p.slug && p.title);

  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isVideo = src => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(src || "");

  const ANGLES = ["150deg", "200deg", "120deg", "180deg", "165deg", "135deg"];

  /* ---------- Medien ---------- */
  function placeholder(n, k) {
    return `<div class="ph" style="--a:${ANGLES[k % ANGLES.length]}"></div>`;  // leer: beim Laden steht nichts in der Fläche
  }

  // Ein einzelnes Bild oder Video in einer Kachel. Liegt über einem Platzhalter,
  // damit bei einer fehlenden Datei nur der graue Platzhalter bleibt.
  function source(src, alt, n, k, lazy) {
    const ph = placeholder(n, k);
    if (!src) return ph;
    if (isVideo(src)) {
      return `${ph}<video src="${esc(src)}" muted loop playsinline autoplay preload="metadata" onerror="this.remove()"></video>
        <div class="vctl" aria-label="Videosteuerung">
          <button type="button" data-v="play" aria-label="Pause">${ICON.pause}</button>
          <button type="button" data-v="full" aria-label="Vollbild">${ICON.full}</button>
        </div>`;
    }
    return `${ph}<img src="${esc(src)}" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : ""} decoding="async" class="loading" onload="this.classList.remove('loading')" onerror="this.remove()">`;
  }

  const ICON = {
    pause: `<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="2.6" height="10" fill="currentColor"/><rect x="9.4" y="3" width="2.6" height="10" fill="currentColor"/></svg>`,
    play: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3l8 5-8 5z" fill="currentColor"/></svg>`,
    full: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 6V2.5H6M10 2.5h3.5V6M13.5 10v3.5H10M6 13.5H2.5V10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
    muted: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 6h2.5l3.5-3v10l-3.5-3H2.5z" fill="currentColor"/></svg>`,
    sound: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 6h2.5l3.5-3v10l-3.5-3H2.5z" fill="currentColor"/><path d="M11 5.5a3.5 3.5 0 010 5M12.8 3.8a6 6 0 010 8.4" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>`
  };

  // Ein Eintrag aus "images" in einheitliche Form bringen.
  function normalize(item) {
    if (typeof item === "string") return { src: item };
    return item || {};
  }

  // Liste der Einträge einer Projektseite (echte Bilder oder Platzhalter).
  function items(p) {
    const list = (p.images || []).map(normalize).filter(x => x.src || x.slides);
    if (list.length) return list;
    const n = p.placeholders || 4;
    // Platzhalter: erster Eintrag breit, damit man das Format sieht.
    return Array.from({ length: n }, (_, i) => ({ placeholder: true, wide: i === 0 }));
  }

  // Titelbild für die Startseite: "cover" oder erstes Bild des Projekts.
  function coverSrc(p) {
    if (p.cover) return p.cover;
    const first = (p.images || []).map(normalize)[0];
    if (!first) return "";
    return first.src || (first.slides && first.slides[0]) || "";
  }

  function mediaItem(p, it, i, pi) {
    const alt = it.alt || `${p.title}, Bild ${i + 1}`;
    let inner;
    if (it.slides && it.slides.length) {
      inner = `<div class="slides" data-i="0">
          ${it.slides.map((s, k) => `<div class="slide${k === 0 ? " on" : ""}">${source(s, `${alt}, ${k + 1}`, i + 1, pi + i + k, i > 1)}</div>`).join("")}
        </div>
        ${it.slides.length > 1 ? `<div class="dots">${it.slides.map((_, k) => `<button type="button" class="dot${k === 0 ? " on" : ""}" data-k="${k}" aria-label="Bild ${k + 1}"></button>`).join("")}</div>` : ""}`;
    } else {
      inner = source(it.placeholder ? "" : it.src, alt, i + 1, pi + i, i > 1);
    }
    return `
      <figure class="item${it.wide ? " wide" : ""}"${it.plakat ? ' data-plakat="1"' : ""}>
        <div class="tile">${inner}</div>
        ${it.caption ? `<figcaption>${esc(it.caption)}</figcaption>` : ""}
      </figure>`;
  }

  /* ---------- Impressum / Datenschutz ---------- */
  function legalPanel(id, label, P) {
    if (!P || !Array.isArray(P.sections)) return "";
    const sections = P.sections.map(s => `
      <section>
        <div class="label">${esc(s.title)}</div>
        ${(s.text || []).map(t => `<p>${esc(t)}</p>`).join("")}
        ${s.lines ? `<p>${s.lines.map(esc).join("<br>")}</p>` : ""}
      </section>`).join("");
    return `
      <div class="drop drop--up">
        <button class="pill" id="btn-${id}" aria-expanded="false" aria-controls="panel-${id}">
          <span>${esc(label)}</span><span class="arr" aria-hidden="true"></span>
        </button>
        <div class="panel glass panel--legal" id="panel-${id}" hidden>
          <section><div class="caps">${esc(P.title)}</div></section>
          ${sections}
        </div>
      </div>`;
  }
  function legal() {
    return `
      <div class="legal">
        ${legalPanel("imprint", "Impressum", window.IMPRINT)}
        ${legalPanel("privacy", "Datenschutz", window.PRIVACY)}
      </div>`;
  }

  /* Großes Fenster mit Name, Einleitung, Profil, Kontakt.
     Öffnet über den Namen oben links und über © unten links. */
  function introPanel(id) {
    const INTRO = window.INTRO || {};
    const sections = (INTRO.sections || []).map(s => `
      <section>
        <div class="label">${esc(s.title)}</div>
        ${s.text ? `<p>${esc(s.text)}</p>` : ""}
        ${s.items ? `<ul>${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
      </section>`).join("");
    return `
        <div class="panel glass panel--intro" id="${id}" hidden>
          <section>
            <div class="caps">${esc(SITE.name)}</div>
            ${INTRO.statement ? `<p class="statement">${esc(INTRO.statement)}</p>` : ""}
          </section>
          <div class="intro-cols">
            ${sections}
            <section>
              <div class="label">Kontakt</div>
              <ul>
                <li><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
                <li><a href="${esc(SITE.instagram && SITE.instagram.url)}" target="_blank" rel="noopener">Instagram | ${esc(SITE.instagram && SITE.instagram.handle)}</a></li>
              </ul>
            </section>
            <section>
              <div class="label">Seiten</div>
              <ul>
                <li><a href="#">Übersicht</a></li>
                <li><a href="#" data-open="btn-work">Arbeiten</a></li>
                <li><a href="#" data-open="btn-about">Über mich</a></li>
              </ul>
            </section>
          </div>
        </div>`;
  }

  function footer() {
    return `
    <footer class="site-footer grid">
      <div class="drop drop--up drop--copy">
        <button class="pill pill--copy" id="btn-intro-foot" aria-expanded="false" aria-controls="panel-intro-foot">
          <span>© ${esc(SITE.year)} ${esc(SITE.name)}</span><span class="arr" aria-hidden="true"></span>
        </button>
        ${introPanel("panel-intro-foot")}
      </div>
      <a class="pill" href="mailto:${esc(SITE.email)}"><span>${esc(SITE.email)}</span><span class="arr" aria-hidden="true"></span></a>
      <a class="pill" href="${esc(SITE.instagram && SITE.instagram.url)}" target="_blank" rel="noopener"><span>Instagram</span><span class="arr" aria-hidden="true"></span></a>
      ${legal()}
    </footer>`;
  }

  /* ---------- Header ---------- */
  function renderHeader() {
    const workRows = PROJECTS.map((p, i) => `
      <a class="wt-row" role="row" href="#${esc(p.slug)}">
        <span role="cell" class="wt-num">${String(i + 1).padStart(2, "0")}</span>
        <span role="cell" class="wt-title">${esc(p.title)}</span>
        <span role="cell" class="wt-cat">${esc(p.category)}</span>
        <span role="cell" class="wt-year">${esc(p.year)}</span>
      </a>`).join("");

    const aboutSections = ABOUT.map(s => `
      <section>
        <div class="label">${esc(s.title)}</div>
        ${s.text ? `<p>${esc(s.text)}</p>` : ""}
        ${s.items ? `<ul>${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
      </section>`).join("");

    $("#header").innerHTML = `
      <div class="drop drop--name">
        <button class="pill glass pill--name" id="btn-intro" aria-expanded="false" aria-controls="panel-intro">
          <span class="caps home-link" data-home role="link" aria-label="Zur Übersicht">${esc(SITE.name)}</span>
          <span class="name-right"><span class="tagline">${esc(SITE.tagline)}</span><span class="arr arr--down" aria-hidden="true"></span></span>
        </button>
        ${introPanel("panel-intro")}
      </div>
      <div class="drop">
        <button class="pill glass" id="btn-work" aria-expanded="false" aria-controls="panel-work">
          <span>Arbeiten</span><span class="arr arr--down" aria-hidden="true"></span>
        </button>
        <div class="panel glass panel--work" id="panel-work" hidden>
          <div class="work-table" role="table" aria-label="Projekte">
            <div class="wt-row wt-head" role="row">
              <span role="columnheader">#</span>
              <span role="columnheader">Titel</span>
              <span role="columnheader">Kategorie</span>
              <span role="columnheader">Jahr</span>
            </div>
            ${workRows}
          </div>
        </div>
      </div>
      <div class="drop">
        <button class="pill glass" id="btn-about" aria-expanded="false" aria-controls="panel-about">
          <span>Über mich</span><span class="arr arr--down" aria-hidden="true"></span>
        </button>
        <div class="panel glass" id="panel-about" hidden>
          ${aboutSections}
          <section>
            <div class="label">Kontakt</div>
            <ul>
              <li><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
              <li><a href="${esc(SITE.instagram && SITE.instagram.url)}" target="_blank" rel="noopener">Instagram | ${esc(SITE.instagram && SITE.instagram.handle)}</a></li>
            </ul>
          </section>
        </div>
      </div>`;
  }

  /* ---------- Ansichten ---------- */
  function overview() {
    document.title = `${SITE.name} · ${SITE.tagline}`;
    return `
    <div class="grid index">
      ${PROJECTS.map((p, pi) => `
        <div class="cell">
          <a class="tile" href="#${esc(p.slug)}" aria-label="${esc(p.title)}">
            ${source(coverSrc(p), p.title, 1, pi, pi > 7)}
            <span class="pill hover"><span>${esc(p.title)}</span></span>
          </a>
          <a class="tile-cap" href="#${esc(p.slug)}" tabindex="-1" aria-hidden="true">${esc(p.title)}</a>
        </div>`).join("")}
    </div>
    ${footer()}`;
  }

  // Key/Value-Liste für die Info-Karte
  function kv(rows) {
    return `<dl class="kv">${rows.filter(r => r && r[1]).map(([k, v]) =>
      // Liste (z. B. Team): ein Name pro Zeile
      `<dt>${esc(k)}:</dt><dd>${Array.isArray(v) ? v.map(esc).join("<br>") : esc(v)}</dd>`).join("")}</dl>`;
  }

  function project(p) {
    const pi = PROJECTS.indexOf(p);
    document.title = `${p.title} · ${SITE.name}`;
    const text = Array.isArray(p.text) ? p.text : [p.text].filter(Boolean);
    const credits = Array.isArray(p.credits) ? p.credits : (p.credits ? [["Credits", p.credits]] : []);
    return `
    <div class="grid project">
      <aside class="side">
        <div class="side-bar">
          <div class="pill pill--title"><span>${esc(p.title)}</span></div>
          <a class="pill" href="#"><span>Zurück zur Übersicht</span><span class="arr arr--back" aria-hidden="true"></span></a>
        </div>
        <div class="panel info-card">
          <section>
            <div class="label rule">Information</div>
            ${kv([["Kontext", p.context], ["Kategorie", p.category], ["Jahr", p.year], ...(p.info || [])])}
          </section>
          ${text.length ? `<section>
            <div class="label rule">Beschreibung</div>
            ${text.map(t => `<p>${esc(t).replace(/\n/g, "<br>")}</p>`).join("")}
          </section>` : ""}
          ${credits.length ? `<section>
            <div class="label rule">Credits</div>
            ${kv(credits)}
          </section>` : ""}
        </div>
      </aside>
      <div class="media">
        ${items(p).map((it, i) => mediaItem(p, it, i, pi)).join("")}
      </div>
    </div>
    ${footer()}`;
  }

  /* ---------- Verhalten auf der Projektseite ---------- */
  let slideTimer = null;
  function setSlide(box, k) {
    const slides = box.querySelectorAll(".slide");
    const dots = box.parentElement.querySelectorAll(".dot");
    k = (k + slides.length) % slides.length;
    slides.forEach((s, j) => s.classList.toggle("on", j === k));
    dots.forEach((d, j) => d.classList.toggle("on", j === k));
    box.dataset.i = k;
  }
  function startSlides() {
    clearInterval(slideTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    slideTimer = setInterval(() => {
      document.querySelectorAll(".slides").forEach(box => {
        if (box.querySelectorAll(".slide").length > 1) setSlide(box, +box.dataset.i + 1);
      });
    }, 4500);
  }

  function onMediaClick(e) {
    const dot = e.target.closest(".dot");
    if (dot) {
      setSlide(dot.closest(".tile").querySelector(".slides"), +dot.dataset.k);
      startSlides();
      return true;
    }
    const b = e.target.closest(".vctl button");
    if (!b) return false;
    const v = b.closest(".tile").querySelector(".slide.on video, :scope > video");
    if (!v) return true;
    if (b.dataset.v === "play") {
      if (v.paused) { v.play().catch(() => {}); b.innerHTML = ICON.pause; b.setAttribute("aria-label", "Pause"); }
      else { v.pause(); b.innerHTML = ICON.play; b.setAttribute("aria-label", "Abspielen"); }
    } else if (b.dataset.v === "mute") {
      v.muted = !v.muted;
      b.innerHTML = v.muted ? ICON.muted : ICON.sound;
      b.setAttribute("aria-label", v.muted ? "Ton an" : "Ton aus");
    } else if (b.dataset.v === "full") {
      // Vollbild: Video wächst wie die Bilder auf Bildschirmgröße, Scrollen/Klick/Esc macht es wieder klein
      openZoom(v);
    }
    return true;
  }

  // Beim Scrollen: Titel-Pill und „Zurück“ bleiben oben und ersetzen die Namens-Pill.
  function updateStuck() {
    const bar = $(".side-bar");
    if (!bar) { document.body.classList.remove("side-stuck"); return; }
    const top = parseFloat(getComputedStyle(bar.parentElement).top) || 10;
    document.body.classList.toggle("side-stuck", bar.getBoundingClientRect().top <= top + 1);
  }

  function render() {
    const slug = decodeURIComponent(location.hash.slice(1));
    const p = PROJECTS.find(x => x.slug === slug);
    const view = $("#view");
    view.innerHTML = p ? project(p) : overview();
    document.body.classList.toggle("is-project", !!p);
    view.classList.remove("enter"); void view.offsetWidth; view.classList.add("enter");
    closeAll();
    window.scrollTo(0, 0);
    updateStuck();
    startSlides();
  }

  /* ---------- Dropdowns ---------- */
  /* Gilt für alle Menüs: Arbeiten, Über mich, Impressum, Datenschutz. */
  function closeAll(exceptBtn) {
    document.querySelectorAll(".drop > button[aria-controls]").forEach(btn => {
      if (btn === exceptBtn) return;
      btn.setAttribute("aria-expanded", "false");
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (panel) panel.hidden = true;
    });
  }
  /* ---------- Bild vergrößern und Diashow blättern ---------- */
  /* Klick auf ein Projektbild: Es wächst aus seiner Kachel auf Bildschirmgröße
     und lädt dabei die hochauflösende Fassung aus "gross/". Erneuter Klick,
     Esc oder deutliches Scrollen lässt es in die Kachel zurückschrumpfen.
     Diashow: Klick ins linke/rechte Drittel blättert (auch vergrößert),
     Klick in die Mitte vergrößert bzw. schließt. Pfeiltasten blättern. */
  let zoom = null;
  const calm = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const largeSrc = src => src.replace(/([^/]+)$/, "gross/$1");
  const zoneOf = (e, el) => {
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
    return x < 1 / 3 ? -1 : x > 2 / 3 ? 1 : 0;
  };
  const shownImg = tile => tile.querySelector(".slide.on img") || tile.querySelector(":scope > img");

  function tileRect(img) {
    const tile = img.closest(".tile"), r = tile.getBoundingClientRect();
    return { left: r.left, top: r.top, width: r.width, height: r.height,
      radius: parseFloat(getComputedStyle(tile).borderTopLeftRadius) || 0 };
  }
  // Zielgröße: ganz sichtbar im Fenster; Plakate in voller Breite (scrollbar).
  function bigRect(ratio, plakat) {
    const vw = window.innerWidth, vh = window.innerHeight, m = vw <= 760 ? 12 : 32;
    let w = vw - 2 * m, h = w / ratio;
    if (plakat) {
      // Querformat-Plakate über die ganze Bildschirmbreite, Hochformat höchstens 1200 px breit.
      if (ratio <= 1) w = Math.min(w, 1200);
      h = w / ratio;
      const top = h < vh - 2 * m ? (vh - h) / 2 : m;
      return { left: (vw - w) / 2, top, width: w, height: h, radius: 14 };
    }
    if (h > vh - 2 * m) { h = vh - 2 * m; w = h * ratio; }
    return { left: (vw - w) / 2, top: (vh - h) / 2, width: w, height: h, radius: 14 };
  }
  const css = r => ({ left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px", borderRadius: r.radius + "px" });
  function place(el, r) { Object.assign(el.style, css(r)); }
  function morph(el, from, to, ms, done) {
    place(el, to);
    if (calm()) { if (done) done(); return; }
    const a = el.animate([css(from), css(to)], { duration: ms, easing: "cubic-bezier(.2,.7,.2,1)" });
    if (done) a.onfinish = done;
  }

  // Hochauflösende Fassung laden; danach auf deren Seitenverhältnis aufziehen.
  function loadLarge(z, img) {
    const want = largeSrc(img.getAttribute("src"));
    const hi = new Image();
    hi.onload = () => {
      if (zoom !== z || z.img !== img) return;
      z.big.src = want;
      const from = { ...z.rect }, to = bigRect(hi.naturalWidth / hi.naturalHeight, z.plakat);
      z.rect = to;
      if (z.plakat) z.box.style.setProperty("--end", to.top + to.height + "px");
      morph(z.big, from, to, 300);
    };
    hi.src = want;
  }

  function openZoom(img) {
    if (zoom) return;
    clearInterval(slideTimer);
    const fig = img.closest(".item");
    const plakat = !!(fig && fig.dataset.plakat);
    const box = document.createElement("div");
    box.className = "zoom" + (plakat ? " zoom--plakat" : "");
    box.setAttribute("role", "dialog");
    // Videos (z. B. 360°-Ansicht) werden genauso vergrößert wie Bilder.
    const isVideo = img.tagName === "VIDEO";
    box.setAttribute("aria-label", isVideo ? "Video vergrößert" : "Bild vergrößert");
    let big;
    if (isVideo) {
      big = document.createElement("video");
      Object.assign(big, { src: img.currentSrc || img.src, muted: true, loop: true, playsInline: true, autoplay: true });
      big.setAttribute("playsinline", "");
      big.currentTime = img.currentTime;
      big.play().catch(() => {});
    } else {
      big = new Image();
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
    }
    box.appendChild(big);
    document.body.appendChild(box);
    img.style.visibility = "hidden";
    const slides = img.closest(".slides");
    const ratio = isVideo ? (img.videoWidth / img.videoHeight || 1.6) : img.naturalWidth / img.naturalHeight;
    const rect = bigRect(ratio, plakat);
    if (plakat) {
      box.style.setProperty("--end", rect.top + rect.height + "px");
      // Plakat: Am Ende (oder ganz oben) weiterscrollen schließt das Plakat,
      // man ist wieder bei den Bildern, wie bei den anderen vergrößerten Bildern.
      let push = 0, touchY = null;
      const atEdge = dy => dy > 0
        ? box.scrollTop + box.clientHeight >= box.scrollHeight - 2
        : box.scrollTop <= 0;
      box.addEventListener("wheel", e => {
        if (atEdge(e.deltaY)) { push += Math.abs(e.deltaY); if (push > 120) closeZoom(); }
        else push = 0;
      }, { passive: true });
      box.addEventListener("touchstart", e => { touchY = e.touches[0].clientY; }, { passive: true });
      box.addEventListener("touchmove", e => {
        if (touchY === null) return;
        const dy = touchY - e.touches[0].clientY;
        if (Math.abs(dy) > 60 && atEdge(dy)) { touchY = null; closeZoom(); }
      }, { passive: true });
    }
    zoom = { img, box, big, rect, plakat, slides: slides && slides.querySelectorAll(".slide").length > 1 ? slides : null, y: window.scrollY };
    if (!calm()) box.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease" });
    morph(big, tileRect(img), rect, 380);
    if (!isVideo) loadLarge(zoom, img);
  }

  function closeZoom() {
    if (!zoom) return;
    const { img, box, big } = zoom;
    zoom = null;
    const done = () => { box.remove(); img.style.visibility = ""; startSlides(); };
    if (calm() || !img.isConnected) return done();
    // Aktuelle Lage (auch bei gescrolltem Plakat) als Startpunkt nehmen.
    const r = big.getBoundingClientRect();
    big.style.position = "fixed";
    const from = { left: r.left, top: r.top, width: r.width, height: r.height, radius: 14 };
    box.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: "ease", fill: "forwards" });
    big.animate([css(from), css(tileRect(img))], { duration: 320, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" }).onfinish = done;
  }

  // Diashow um einen Schritt weiter (dir = -1 / +1), in der Kachel und im Zoom.
  function stepSlides(slides, dir) {
    setSlide(slides, +slides.dataset.i + dir);
    if (!zoom || zoom.slides !== slides) { startSlides(); return; }
    const img = shownImg(slides.closest(".tile"));
    zoom.img.style.visibility = "";
    img.style.visibility = "hidden";
    zoom.img = img;
    zoom.big.src = img.currentSrc || img.src;
    loadLarge(zoom, img);
  }

  function onZoomClick(e) {
    if (zoom) {
      if (zoom.slides && e.target === zoom.big) {
        const z = zoneOf(e, zoom.big);
        if (z) { stepSlides(zoom.slides, z); return true; }
      }
      closeZoom();
      return true;
    }
    const tile = e.target.closest(".media .tile");
    if (!tile) return false;
    const slides = tile.querySelector(".slides");
    if (slides && slides.querySelectorAll(".slide").length > 1) {
      const z = zoneOf(e, tile);
      if (z) { stepSlides(slides, z); return true; }
    }
    const vid = tile.querySelector(":scope > video");
    if (vid) { if (vid.readyState >= 1) openZoom(vid); return true; }
    const img = shownImg(tile);
    if (!img || !img.complete || !img.naturalWidth) return false;
    openZoom(img);
    return true;
  }

  // Mauszeiger zeigt, was ein Klick tut: zurück, vor, vergrößern, schließen.
  function onZoneHover(e) {
    const el = zoom ? (zoom.slides && e.target === zoom.big ? zoom.big : null) : e.target.closest(".media .tile");
    document.querySelectorAll("[data-zone]").forEach(x => { if (x !== el) delete x.dataset.zone; });
    if (!el) return;
    const multi = zoom ? true : !!(el.querySelector(".slides") && el.querySelectorAll(".slide").length > 1);
    const z = multi ? zoneOf(e, el) : 0;
    el.dataset.zone = z < 0 ? "prev" : z > 0 ? "next" : "mid";
  }

  function bindEvents() {
    document.addEventListener("click", e => {
      if (onMediaClick(e)) return;
      if (onZoomClick(e)) return;
      // Klick auf den Namen oben links: zurück zur Übersicht.
      // Tagline und Pfeil daneben öffnen weiterhin das große Fenster.
      if (e.target.closest("[data-home]")) {
        e.preventDefault();
        closeAll();
        if (location.hash && location.hash !== "#") location.hash = "";
        else window.scrollTo({ top: 0, behavior: calm() ? "auto" : "smooth" });
        return;
      }
      const btn = e.target.closest(".drop > button[aria-controls]");
      if (btn) {
        const open = btn.getAttribute("aria-expanded") === "true";
        closeAll(btn);
        btn.setAttribute("aria-expanded", String(!open));
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        if (panel) { panel.hidden = open; if (!open) panel.scrollTop = 0; }
        return;
      }
      if (e.target.closest(".drop > .panel")) {
        const jump = e.target.closest("a[data-open]");
        if (jump) {
          e.preventDefault();
          closeAll();
          const target = document.getElementById(jump.dataset.open);
          if (target) setTimeout(() => target.click(), 0);
          return;
        }
        if (e.target.closest("a[href^='#']")) closeAll();
        return;
      }
      closeAll();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { closeZoom(); closeAll(); }
      if (zoom && zoom.slides && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        stepSlides(zoom.slides, e.key === "ArrowLeft" ? -1 : 1);
      }
    });
    document.addEventListener("mousemove", onZoneHover, { passive: true });
    // Großes Namensfenster: Scrollen (Mausrad, Trackpad, Wischen) schließt es,
    // dann sind die Arbeiten wieder zu sehen. Ist das Fenster selbst länger als
    // der Bildschirm, scrollt erst sein Inhalt; am Ende schließt es.
    const introOpen = () => !!document.querySelector('.drop > button[aria-expanded="true"][aria-controls^="panel-intro"]');
    const panelScrolls = (el, dy) => {
      const panel = el.closest && el.closest(".drop > .panel");
      if (!panel || panel.scrollHeight <= panel.clientHeight + 1) return false;
      return dy < 0 ? panel.scrollTop > 0 : panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1;
    };
    // Vergrößertes Bild/Video: jede Scrollbewegung (Mausrad, Trackpad, Wischen) macht es
    // wieder klein, auch ganz unten auf der Seite, wo die Seite selbst nicht mehr scrollt.
    let zoomPush = 0, zoomOf = null;
    window.addEventListener("wheel", e => {
      if (!zoom || zoom.plakat) return;
      if (zoomOf !== zoom) { zoomOf = zoom; zoomPush = 0; }
      zoomPush += Math.abs(e.deltaY) + Math.abs(e.deltaX);
      if (zoomPush > 60) closeZoom();
    }, { passive: true });
    let zoomTouchY = null;
    window.addEventListener("touchstart", e => { zoomTouchY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener("touchmove", e => {
      if (!zoom || zoom.plakat || zoomTouchY === null) return;
      if (Math.abs(zoomTouchY - e.touches[0].clientY) > 40) { zoomTouchY = null; closeZoom(); }
    }, { passive: true });
    window.addEventListener("wheel", e => {
      if (!introOpen() || Math.abs(e.deltaY) < 4) return;
      if (!panelScrolls(e.target, e.deltaY)) closeAll();
    }, { passive: true });
    let touchY = null;
    window.addEventListener("touchstart", e => { touchY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener("touchmove", e => {
      if (!introOpen() || touchY === null) return;
      const dy = touchY - e.touches[0].clientY;
      if (Math.abs(dy) > 24 && !panelScrolls(e.target, dy)) { closeAll(); touchY = null; }
    }, { passive: true });
    // Erst bei deutlichem Weiterscrollen schließen, nicht bei kleinen Layout-Sprüngen.
    let introY = null;
    window.addEventListener("scroll", () => {
      updateStuck();
      if (zoom && Math.abs(window.scrollY - zoom.y) > 80) closeZoom();
      if (!introOpen()) { introY = null; return; }
      if (introY === null) introY = window.scrollY;
      else if (Math.abs(window.scrollY - introY) > 40) closeAll();
    }, { passive: true });
    window.addEventListener("resize", () => { updateStuck(); closeZoom(); });
    window.addEventListener("hashchange", closeZoom);
  }

  /* ---------- Start ---------- */
  renderHeader();
  bindEvents();
  window.addEventListener("hashchange", render);
  render();
})();
