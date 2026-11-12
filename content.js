/* =====================================================================
   INHALTE DEINER WEBSITE
   Hier änderst du alle Texte, Projekte und Bilder.
   Das Layout (style.css, app.js) musst du dafür nicht anfassen.

   Regeln:
   - Texte stehen in "Anführungszeichen". Ein " im Text als \" schreiben.
   - Nach jedem Eintrag ein Komma, wie in den Beispielen.
   - Bilder in den Ordner "bilder/<slug>/" legen und hier eintragen,
     z. B. "bilder/waeschetrockner/01.jpg". Das erste Bild ist das
     Titelbild auf der Startseite.
   - Fehlt ein Bild oder ist die Liste leer, erscheint ein grauer Platzhalter.

   Mehr Möglichkeiten pro Eintrag in "images" (statt nur dem Pfad):
     { src: "bilder/x/01.jpg", wide: true }        → Bild über beide Spalten (Querformat)
     { src: "bilder/x/film.mp4", wide: true }      → Video mit Pause, Vollbild, Ton
     { src: "bilder/x/02.jpg", caption: "Modell 1:20" } → Bildunterschrift darunter
     { slides: ["bilder/x/03.jpg", "bilder/x/04.jpg"], wide: true } → Diashow mit Punkten
         (Klick links/rechts im Bild blättert, Klick in die Mitte vergrößert)
     { src: "bilder/x/plakat.jpg", plakat: true }   → beim Vergrößern in voller Breite, scrollbar

   Vergrößern per Klick: Liegt im Unterordner "gross/" eine Datei mit
   gleichem Namen (z. B. bilder/x/gross/01.jpg), wird diese hochauflösende
   Fassung gezeigt. Sonst das normale Bild.
   cover: "bilder/x/titel.jpg"  → eigenes Titelbild für die Startseite (optional)
   credits: [["Rolle", "Name"], ...] → Credits auf der Projektseite
   ===================================================================== */

window.SITE = {
  name: "Kilian Ritter",
  tagline: "Innenarchitektur & Design",
  email: "ritter.kilian@icloud.com",
  instagram: { handle: "@ritter__studio", url: "https://www.instagram.com/ritter__studio/" },
  year: 2026
};

/* Großes Fenster beim Klick auf deinen Namen oben links.
   statement: großer Einleitungssatz oben im Fenster.
   sections: Abschnitte wie bei „Über mich“ (text oder items). */
window.INTRO = {
  statement: "Ich entwerfe Räume und die Dinge, die in ihnen stehen: mit Blick auf den Alltag, das Licht und das Material.",
  sections: [
    {
      title: "Profil",
      text: "Kilian Ritter, Innenarchitektur & Design. Dieses Portfolio zeigt ausgewählte Entwürfe, Objekte und Recherchen."
    },
    {
      title: "Standort",
      items: ["Rosenheim", "Deutschland"]
    }
  ]
  /* Kontakt und der Link zur Übersicht werden automatisch ergänzt. */
};

/* Über mich: jeder Abschnitt hat eine Überschrift und entweder
   einen Text (text) oder eine Liste (items). */
window.ABOUT = [
  {
    title: "Information",
    text: "Ich bin Kilian Ritter und studiere Innenarchitektur an der TH Rosenheim. Mich interessiert, wie ein Raum sich anfühlt, wie ein Objekt im Alltag benutzt wird und welches Material beides trägt."
  },
  {
    title: "Schwerpunkte",
    items: ["Innenarchitektur", "Gastronomie & Wohnen", "Produkt- und Möbeldesign", "Materialrecherche", "Visualisierung & Fotografie"]
  },
  {
    title: "Werkzeuge",
    items: ["Rhino", "Archicad", "Affinity", "Blender"]
  }
  /* Kontakt wird automatisch aus SITE oben ergänzt. */
];

/* Impressum: öffnet sich über die Pill „Impressum“ im Footer.
   Aufbau wie beim Datenschutz darunter. */
window.IMPRINT = {
  title: "Impressum",
  sections: [
    {
      title: "Angaben gemäß § 5 DDG",
      lines: ["Kilian Ritter", "Äußere Münchener Straße 21", "83026 Rosenheim", "Deutschland"]
    },
    {
      title: "Kontakt",
      lines: ["Telefon: +49 172 6881671", "E-Mail: ritter.kilian@icloud.com"]
    },
    {
      title: "Verantwortlich für den Inhalt",
      text: ["Kilian Ritter (Anschrift wie oben)"]
    },
    {
      title: "Haftung für Inhalte",
      text: ["Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen."]
    },
    {
      title: "Haftung für Links",
      text: ["Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich."]
    },
    {
      title: "Urheberrecht",
      text: ["Alle auf dieser Website gezeigten Arbeiten, Texte und Abbildungen unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von Kilian Ritter."]
    }
  ]
};

/* Datenschutz: öffnet sich über die Pill „Datenschutz“ im Footer.
   Jeder Abschnitt: Überschrift (title) und Absätze (text).
   lines: Zeilen ohne Abstand, z. B. für die Adresse. */
window.PRIVACY = {
  title: "Datenschutzerklärung",
  sections: [
    {
      title: "1. Allgemeines",
      text: ["Der Schutz personenbezogener Daten ist mir wichtig. Diese Website ist eine rein statische Portfolio-Website. Sie verwendet keine Cookies, keine Analyse- oder Tracking-Dienste und bindet keine externen Schriftarten oder Skripte ein."]
    },
    {
      title: "2. Verantwortlicher",
      lines: ["Kilian Ritter", "Äußere Münchener Straße 21", "83026 Rosenheim", "E-Mail: ritter.kilian@icloud.com"]
    },
    {
      title: "3. Hosting / Server-Logfiles",
      text: [
        "Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.",
        "Beim Aufruf der Website erfasst GitHub automatisch technische Zugriffsdaten in sogenannten Server-Logfiles, insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs sowie den Browsertyp. GitHub speichert diese Daten nach eigenen Angaben zu Sicherheitszwecken. Sie dienen der Sicherstellung eines störungsfreien und sicheren Betriebs und werden von mir nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung dieser Website.",
        "Dabei können Daten in die USA übermittelt werden. GitHub stützt solche Übermittlungen nach eigenen Angaben auf das EU-U.S. Data Privacy Framework sowie auf Standardvertragsklauseln der EU-Kommission. Weitere Informationen enthält die Datenschutzerklärung von GitHub: docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
      ]
    },
    {
      title: "4. Kontaktaufnahme per E-Mail",
      text: ["Wenn Sie mich per E-Mail kontaktieren, verwende ich die übermittelten Daten (E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Ich gebe sie nicht ohne Ihre Einwilligung weiter und lösche sie, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen."]
    },
    {
      title: "5. Externe Links",
      text: ["Diese Website verlinkt auf Instagram. Der Link ist ein einfacher Verweis; beim bloßen Aufruf dieser Website werden keine Daten an Instagram übertragen. Erst wenn Sie den Link anklicken, verlassen Sie diese Website. Dann gelten die Datenschutzbestimmungen der Meta Platforms Ireland Ltd., Merrion Road, Dublin 4, D04 X2K5, Irland."]
    },
    {
      title: "6. Ihre Rechte",
      text: [
        "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20) Ihrer personenbezogenen Daten.",
        "Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, können Sie ihr aus Gründen, die sich aus Ihrer besonderen Situation ergeben, widersprechen (Art. 21 DSGVO).",
        "Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), zum Beispiel beim Bayerischen Landesamt für Datenschutzaufsicht in Ansbach."
      ]
    }
  ]
};

/* Projekte: Reihenfolge = Reihenfolge auf der Startseite.
   slug = Adresse der Projektseite (nur a–z, 0–9 und -).
   Die Bilder liegen in bilder/<slug>/ und sind schon passend zugeschnitten:
   normale Bilder 4:5, breite Bilder (wide) 8:5. */
/* Team: Namen immer mit " | " trennen, Kilian Ritter zuerst. */
const TEAM = "Kilian Ritter | Pascal Ristl";

window.PROJECTS = [
  {
    slug: "axxi-raumexperiment",
    title: "AXXI – Raumexperiment",
    context: "Entwurf Raum 1",
    category: "Innenraum, Entwurf",
    year: "2025/26",
    text: [
      "AXXI untersucht kreatives Arbeiten als räumlichen Prozess zwischen Austausch, Rückzug und Bewegung. Entlang eines zentralen Durchgangs reihen sich offene und konzentrierte Arbeitsformen: Büro, Café, Meetingpoint und Thinktank.",
      "Ausgangspunkt war das Gemälde „A XXI“ von László Moholy-Nagy. Aus der Analyse seiner Diagonalen, Winkel, Kreise und Farbtemperaturen entstand erst ein Relief und daraus der Raum. Form follows feeling."
    ],
    credits: [["Betreuung", "Prof. Dipl.-Ing. Bernd Meinlschmidt"], ["Team", TEAM]],
    cover: "bilder/axxi-raumexperiment/titel.jpg",
    images: [
      { src: "bilder/axxi-raumexperiment/01.jpg", wide: true, caption: "Weißmodell" },
      { src: "bilder/axxi-raumexperiment/02.jpg", caption: "László Moholy-Nagy, A XXI, 1925" },
      { src: "bilder/axxi-raumexperiment/03.jpg", caption: "Relief nach dem Original" },
      { src: "bilder/axxi-raumexperiment/06.jpg", caption: "Plakat", plakat: true },
      { src: "bilder/axxi-raumexperiment/05.jpg", caption: "Finales Modell | M 1:100" },
      { src: "bilder/axxi-raumexperiment/07.jpg", wide: true, caption: "Weißmodell, Draufsicht" },
      { src: "bilder/axxi-raumexperiment/zonen.jpg", wide: true, caption: "Nutzung: Büro, Café, Meetingpoint, Thinktank, Durchgang, kreatives Arbeiten" },
      { src: "bilder/axxi-raumexperiment/grundriss-eg.jpg", wide: true, caption: "Grundriss EG | M 1:100" },
      { src: "bilder/axxi-raumexperiment/grundriss-og.jpg", wide: true, caption: "Grundriss OG | M 1:100" },
      { src: "bilder/axxi-raumexperiment/08.jpg", wide: true, caption: "Schnitt A-A | M 1:100" },
      { src: "bilder/axxi-raumexperiment/09.jpg", wide: true, caption: "Überblick aus dem Bürobereich" },
      { src: "bilder/axxi-raumexperiment/10.jpg", wide: true, caption: "Kontext: Einbauten im Bestand" },
      { src: "bilder/axxi-raumexperiment/cafe.jpg", wide: true, caption: "Rendering: Blickbeziehung in den Café-Bereich" },
      { src: "bilder/axxi-raumexperiment/sonnenverlauf.jpg", wide: true, caption: "Sonnenverlauf" },
      { src: "bilder/axxi-raumexperiment/lichtstimmung.jpg", wide: true, caption: "Lichtsimulation verschiedener Sonnenstände" }
    ]
  },
  {
    slug: "naturblock",
    title: "Naturblock",
    context: "Modellbau",
    category: "Architektur, Modell 1:100",
    year: "2025/26",
    text: [
      "Ein brutalistischer Monolith, bewusst als Fremdkörper in die Landschaft gesetzt und doch mit dem Hang verzahnt. Der Sockel liegt im Gelände, der obere Baukörper kragt weit aus und öffnet sich mit raumhohen Verglasungen zum Panorama.",
      "Das Modell ist aus Finnpappe gebaut, die im Maßstab 1:100 wie Sichtbeton wirkt. Das Gelände ist ein Schichtmodell, die Verglasung aus Vivak, die Bäume sind getrocknete Disteln. Farbe setzen nur Figuren, Auto und Pool."
    ],
    credits: [["Betreuung", "Dipl.-Ing. Jonas Kessler"], ["Team", TEAM]],
    cover: "bilder/naturblock/titel.jpg",
    images: [
      { src: "bilder/naturblock/01.jpg", wide: true },
      "bilder/naturblock/02.jpg",
      "bilder/naturblock/03.jpg",
      { src: "bilder/naturblock/04.jpg", wide: true },
      { src: "bilder/naturblock/05.jpg", caption: "Geländeplan, Schichtmodell | M 1:100" },
      "bilder/naturblock/06.jpg"
    ]
  },
  {
    slug: "freilieger",
    title: "Der Freilieger",
    context: "Design 1",
    category: "Möbeldesign, Objekt",
    year: "2025/26",
    text: [
      "Eine Transformation des Thonet-Freischwingers S32. Das Prinzip des Freischwingens wird isoliert und das Gestell selbst zur Liege: ein monolithischer Körper aus einem Material, der die typischen Radien des Klassikers aufnimmt.",
      "Material\nNachhaltige Faserverbundwerkstoffe auf Basis von Naturfasern wie Hanf oder Flachs kombinieren hohe strukturelle Leistungsfähigkeit mit ökologischen Vorteilen. Ihre Funktion beruht auf dem Zusammenspiel von zugfesten Fasern und einer formgebenden Matrix aus Harz, die Druckkräfte aufnimmt und die Fasern fixiert. Durch gezielte Faserorientierung entsteht eine hohe Stabilität bei minimalem Gewicht, während die natürliche Zellstruktur der Fasern Schwingungen effektiv dämpft.",
      "Moderne biobasierte Epoxidharze sowie thermoplastische Systeme verbessern die Nachhaltigkeitsbilanz erheblich, da sie den Einsatz fossiler Rohstoffe reduzieren und teilweise recyclingfähig sind. Die Herstellung erfolgt über textile Vorverarbeitung der Fasern und formgebende Verfahren wie Vakuuminfusion oder Prepreg-Pressen, gefolgt von einer energieeffizienten Aushärtung.",
      "Naturfaser-Composites weisen einen günstigen CO₂-Fußabdruck auf, da die Pflanzen während ihres Wachstums CO₂ binden, ressourcenschonend angebaut werden können und regionale Wertschöpfung ermöglichen. In Kombination mit zeitgemäßen Fertigungstechnologien entstehen so innovative, leichte und nachhaltige Materialien, die sich besonders für zukunftsorientierte Anwendungen in Architektur und Möbeldesign eignen."
    ],
    /* Bei vielen Teammitgliedern: Liste statt Text, dann steht jeder Name in einer eigenen Zeile */
    credits: [["Betreuung", "Dipl. Des. Simone Raus"], ["Team", ["Kilian Ritter", "Pascal Ristl", "Clemens Sammer", "Julius Polonius"]]],
    cover: "bilder/freilieger/titel.jpg",
    images: [
      /* Nur Booklet-Folien 14, 15, 16, 17, 18, 6 und das Plakat, keine Fotos von Personen */
      { src: "bilder/freilieger/10.jpg", wide: true, caption: "Rendering mit Bio-Composite" },
      { src: "bilder/freilieger/02.jpg", wide: true, caption: "Dreitafelprojektion und Isometrie" },
      { src: "bilder/freilieger/skizzen.jpg", wide: true, caption: "Skizzengetriebener Entwurfsprozess" },
      { src: "bilder/freilieger/12.jpg", caption: "Rendering Innenraum" },
      { src: "bilder/freilieger/13.jpg", caption: "Plakat", plakat: true },
      { src: "bilder/freilieger/11.jpg", wide: true, caption: "Rendering Außenbereich" },
      { src: "bilder/freilieger/material.jpg", wide: true, caption: "Material" }
    ]
  },
  {
    slug: "bio-strukturen",
    title: "Bio-Strukturen",
    context: "Baukonstruktion 1",
    category: "Strukturstudie, Modell",
    year: "2025/26",
    text: [
      "Wie baut die Natur? Am Beispiel einer Artischocke: sehen, messen, verstehen, umsetzen, anwenden. Zeichnungen der Frucht im Ganzen und im Schnitt führen zu einem Raster ihrer Schuppen.",
      "Daraus entstand ein Steckmodell. Lamellen greifen in eine radial geschlitzte Basisscheibe und bauen die Form Schicht für Schicht wieder auf."
    ],
    credits: [["Betreuung", "Prof. Ulrike Förschler"], ["Team", TEAM]],
    cover: "bilder/bio-strukturen/01.jpg",
    images: [
      { src: "bilder/bio-strukturen/01-breit.jpg", wide: true },
      { src: "bilder/bio-strukturen/02.jpg", caption: "Sehen" },
      { src: "bilder/bio-strukturen/03.jpg", caption: "Sehen" },
      { src: "bilder/bio-strukturen/04.jpg", caption: "Sehen, Schnitt" },
      { src: "bilder/bio-strukturen/04b.jpg", caption: "Sehen, Schnitt" },
      { src: "bilder/bio-strukturen/05.jpg", caption: "Messen" },
      { src: "bilder/bio-strukturen/06.jpg", caption: "Messen" },
      { src: "bilder/bio-strukturen/geometrisierter-schnitt.jpg", wide: true, caption: "Geometrisierter Schnitt" },
      { src: "bilder/bio-strukturen/07.jpg", wide: true, caption: "Umsetzen" },
      { src: "bilder/bio-strukturen/08.jpg", caption: "Basisscheibe" },
      "bilder/bio-strukturen/09.jpg",
      "bilder/bio-strukturen/10.jpg",
      { src: "bilder/bio-strukturen/11.jpg", caption: "Anwenden" }
    ]
  },
  {
    slug: "treppenschau",
    title: "Treppenschau",
    context: "Baukonstruktion 1",
    category: "Bauaufnahme, Zeichnung",
    year: "2025/26",
    text: [
      "Bauaufnahme einer viertelgewendelten Massivtreppe im T-Gebäude der TH Rosenheim, zwischen erstem und zweitem Obergeschoss: Terrazzostufen, ein anthrazitfarbenes Podest, ein schwarzer Handlauf.",
      "Vom Schwarzplan über Freihandskizzen und Aufmaß bis zu Grundriss, Schnitten und Wandabwicklungen im Maßstab 1:20, alle von Hand gezeichnet."
    ],
    credits: [["Betreuung", "Prof. Ulrike Förschler"], ["Team", TEAM]],
    cover: "bilder/treppenschau/02.jpg",
    images: [
      { src: "bilder/treppenschau/01.jpg", wide: true, caption: "T-Gebäude, TH Rosenheim" },
      "bilder/treppenschau/02.jpg",
      "bilder/treppenschau/03.jpg",
      "bilder/treppenschau/04.jpg",
      "bilder/treppenschau/05.jpg",
      { src: "bilder/treppenschau/06.jpg", wide: true, caption: "Schwarzplan | M 1:2000" },
      { src: "bilder/treppenschau/07.jpg", caption: "Aufmaß, Freihandskizze" },
      { src: "bilder/treppenschau/08.jpg", caption: "Aufmaß, Freihandskizze" },
      { src: "bilder/treppenschau/09.jpg", wide: true, caption: "Grundriss | M 1:20" },
      { src: "bilder/treppenschau/10.jpg", wide: true, caption: "Schnitt B-B | M 1:20" }
    ]
  }
];

/* Frühere Entwürfe von Projekten, die (noch) nicht auf der Website erscheinen.
   Zum Anzeigen einen Block nach oben in PROJECTS verschieben. */
window.PROJECTS_SPAETER = [
  {
    slug: "waeschetrockner",
    title: "Rollbarer Wäschetrockner",
    context: "Studienprojekt",
    category: "Produktdesign, Möbel",
    year: "2026",
    text: [
      "Ein Wäscheständer, der dorthin rollt, wo gerade Platz und Licht ist, und zusammengeklappt in einer Nische verschwindet.",
      "Das Projekt reicht von der Nutzungsstory über die Dimensionierung der Leinen bis zur Materialwahl."
    ],
    credits: [["Entwurf", "Kilian Ritter"], ["Modell", "Kilian Ritter"], ["Fotos", "Kilian Ritter"]],
    images: [],
    placeholders: 6
  },
  {
    slug: "raum-gastronomie",
    title: "Raum Gastronomie",
    context: "Fachentwurf",
    category: "Innenraum, Entwurf",
    year: "2026",
    text: [
      "Fachentwurf für einen gastronomischen Raum: Zonierung, Wegeführung von Gast und Personal, Licht und Akustik.",
      "Gezeigt werden Konzeptskizzen, Grundriss, Schnitte und Visualisierungen."
    ],
    credits: [["Entwurf", "Kilian Ritter"], ["Visualisierung", "Kilian Ritter"]],
    images: [],
    placeholders: 6
  },
  {
    slug: "materialstudien",
    title: "Materialstudien",
    context: "Recherche",
    category: "Material, Moodboard",
    year: "2026",
    text: [
      "Eine Sammlung von Oberflächen, Hölzern, Textilien und Metallen, zusammengestellt als Moodboard für den Wäschetrockner."
    ],
    credits: [["Recherche", "Kilian Ritter"]],
    images: [],
    placeholders: 3
  },
  {
    slug: "fotografie",
    title: "Fotografie",
    context: "Freie Arbeit",
    category: "Fotografie",
    year: "seit 2024",
    text: [
      "Architektur- und Alltagsbeobachtungen, fotografiert mit der Canon."
    ],
    credits: [["Fotos", "Kilian Ritter"]],
    images: [],
    placeholders: 6
  }
];
