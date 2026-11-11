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
    text: "Ich bin Kilian Ritter und entwerfe Räume und die Dinge, die in ihnen stehen. Mich interessiert, wie ein Objekt im Alltag benutzt wird, wie ein Raum sich anfühlt und welches Material beides trägt."
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
   slug = Adresse der Projektseite (nur a–z, 0–9 und -). */
window.PROJECTS = [
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
