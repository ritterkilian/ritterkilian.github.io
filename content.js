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
    text: "Ich bin Kilian Ritter und studiere Innenarchitektur an der Technischen Hochschule Rosenheim. Mich interessiert, wie ein Raum sich anfühlt, wie ein Objekt im Alltag benutzt wird und welches Material beides trägt."
  },
  {
    title: "Schwerpunkte",
    items: ["Innenarchitektur & Raumentwurf", "Möbel- und Objektdesign", "Modellbau", "Konstruktion & Holzbau", "Visualisierung & Darstellung"]
  },
  {
    title: "Werkzeuge",
    items: ["Rhino", "Archicad", "Blender", "Affinity"]
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
const TEAM_LUISA = "Kilian Ritter | Luisa Oberndorfer";
const SOMMERAUSSTELLUNG = "Ausgestellt auf der Sommerausstellung 2026 der Technischen Hochschule Rosenheim.";

window.PROJECTS = [
  /* ---------- 2. Semester, Sommersemester 2026 ---------- */
  {
    slug: "papavero",
    title: "Papavero – Rome Rain Rooms",
    context: "Entwurf Raum 2",
    category: "Installation, öffentlicher Raum",
    year: "2026",
    text: [
      "Papavero ist eine öffentliche Installation auf der Piazza Navona in Rom, die Regenwasser sammelt und speichert. Ihre Form ist der Mohnblume entlehnt: Die organische Gestalt wird zu einer skulpturalen Struktur, die für die Zerbrechlichkeit und die Widerstandskraft der Natur steht und Wasser als gemeinsame, kostbare Ressource sichtbar macht.",
      "Die Piazza liegt auf dem antiken Stadion des Domitian, seit Jahrhunderten prägt Wasser ihre Identität, allen voran Berninis Vierströmebrunnen. Die drei Meter hohe Installation steht bewusst auf der Achse der bestehenden Brunnen und ordnet sich dem monumentalen Maßstab des Platzes unter.",
      "Der weite Trichter leitet das Regenwasser in einen wassergefüllten Sitzsack, der sich unter dem Gewicht der Besucher verformt und das Wasser körperlich erfahrbar macht. Ist er voll, fließt das überschüssige Wasser durch das zentrale Überlaufrohr unter der Plattform ab und der Kreislauf beginnt von vorn. Bei schönem Wetter lädt der Sitzsack zum Verweilen ein.",
      SOMMERAUSSTELLUNG
    ],
    credits: [["Betreuung", ["Prof. Denise Dih", "Prof. Dipl.-Ing. Bernd Meinlschmidt"]], ["Team", TEAM_LUISA]],
    cover: "bilder/papavero/titel-weissmodell.jpg",
    images: [
      { src: "bilder/papavero/01.jpg", wide: true, caption: "Papavero bei Sonne" },
      { src: "bilder/papavero/02.jpg", caption: "Papavero bei Regen" },
      { src: "bilder/papavero/perspektive.jpg", caption: "Perspektive" },
      { src: "bilder/papavero/grundriss.jpg", caption: "Grundriss | M 1:25" },
      { src: "bilder/papavero/schnitt-aa.jpg", caption: "Schnitt A-A | M 1:25" },
      { src: "bilder/papavero/wasser-1.jpg", caption: "Wasserdiagramm: Sammeln und Nutzen" },
      { src: "bilder/papavero/wasser-2.jpg", caption: "Wasserdiagramm: Überlauf und Ablauf" },
      { src: "bilder/papavero/rom.jpg", caption: "Rom | M 1:5000" },
      { src: "bilder/papavero/piazza.jpg", caption: "Piazza Navona | M 1:1000" },
      { src: "bilder/papavero/plakat-1.jpg", caption: "Plakat, Seite 1", plakat: true },
      { src: "bilder/papavero/plakat-2.jpg", caption: "Plakat, Seite 2", plakat: true }
    ]
  },
  {
    slug: "gegensaetzlich",
    title: "Gegensätzlich",
    context: "Kommunikation und Komposition",
    category: "Raum, Darstellung",
    year: "2026",
    text: [
      "Der Entwurf entwickelt sich aus dem Adjektiv „gegensätzlich“. Im Erdgeschoss entsteht eine enge, dunkle und beklemmende Raumwirkung, die durch geringe Öffnungen sowie eine labyrinthartige Struktur verstärkt wird. Die Atmosphäre wirkt introvertiert, massiv und schützend. Die Wegeführung ist bewusst zurückhaltend gestaltet und erzeugt ein Gefühl von Orientierungssuche sowie räumlicher Verdichtung.",
      "Im Obergeschoss öffnet sich der Raum zu einer hellen, weiten und lichtdurchfluteten Ebene. Großzügige Öffnungen ermöglichen weite Ausblicke und lassen Tageslicht tief in den Raum eindringen. Die zuvor spürbare Schwere löst sich auf und wird durch ein Gefühl von Freiheit, Leichtigkeit und Offenheit ersetzt. Die fließende Verbindung von Innen- und Außenraum lässt Weite erleben und schafft eine besondere räumliche Atmosphäre.",
      SOMMERAUSSTELLUNG
    ],
    credits: [["Betreuung", "Wolfgang Jäger"], ["Entwurf und Plakat", "Kilian Ritter"]],
    cover: "bilder/gegensaetzlich/titel.jpg",
    images: [
      /* Alles aus Plakat 7 (KOKO/Abgabe Plakat/Plakat-7.pdf) */
      { src: "bilder/gegensaetzlich/plakat.jpg", wide: true, caption: "Plakat", plakat: true },
      { src: "bilder/gegensaetzlich/aufbau.gif", wide: true, caption: "Animation: Aufbau des Entwurfs" },
      { src: "bilder/gegensaetzlich/grundriss-eg.jpg", caption: "Grundriss EG | M 1:100" },
      { src: "bilder/gegensaetzlich/grundriss-og.jpg", caption: "Grundriss OG | M 1:100" },
      { src: "bilder/gegensaetzlich/schnitt-aa.jpg", caption: "Schnitt A-A | M 1:100" },
      { src: "bilder/gegensaetzlich/schnitt-bb.jpg", caption: "Schnitt B-B | M 1:100" },
      { src: "bilder/gegensaetzlich/suedansicht.jpg", wide: true, caption: "Südansicht | M 1:100" },
      { src: "bilder/gegensaetzlich/01.jpg", wide: true, caption: "Ausblick in die Ferne" },
      { src: "bilder/gegensaetzlich/02.jpg", wide: true, caption: "Innenansicht Labyrinth" },
      { src: "bilder/gegensaetzlich/03.jpg", wide: true, caption: "Blick vom Podest aus dem Dachfenster" },
      { src: "bilder/gegensaetzlich/04.jpg", wide: true, caption: "Blick ins Erdgeschoss" },
      { src: "bilder/gegensaetzlich/05.jpg", wide: true, caption: "Erdgeschoss" },
      { src: "bilder/gegensaetzlich/positionsplan.jpg", wide: true, caption: "Positionsplan | M 1:500" }
    ]
  },
  {
    slug: "vau2",
    title: "VAU2 – Tischbock",
    context: "Design 2",
    category: "Möbeldesign, Objekt",
    year: "2026",
    text: [
      "VAU2 ist ein Tischbock aus einem durchgehenden Rundrohr: gebogen, gekreuzt und durch seine Geometrie stabilisiert. Ein eingebautes Seil steift den Bock zusätzlich aus, steckbare Endkappen schließen die Rohrenden.",
      "Aus der Analyse bestehender Konstruktionen entstanden Vormodelle mit Fokus auf Flatpack und Seilen, dann ein Modell im Maßstab 1:1. Für den finalen Tischbock wurden die Rundrohre gebogen, abgelängt, verbunden und lackiert. Das Farbportfolio reicht von Fernblau über Terrakotta, Salbeigrün und Violett bis Kalkweiß.",
      SOMMERAUSSTELLUNG
    ],
    credits: [["Betreuung", "Prof. Anette Ponholzer"], ["Team", TEAM]],
    cover: "bilder/vau2/titel.jpg",
    images: [
      /* Booklet-Folien 1 (Deckblatt), 11, 12, 17, 18, 19, 28, 29, 32, 35, 37; Animation und Rendering aus Tischbock1.3dm (Blender) */
      /* Reihenfolge: Finales Modell, Animation, Rendering, Bemaßung und Detail, Skizze Endkappe, Rhino-Modell, Bilder, Vormodelle */
      { src: "bilder/vau2/p28.jpg", wide: true, caption: "Finales Modell" },
      { src: "bilder/vau2/flatpack.mp4", wide: true, caption: "Animation: Zusammenklappen zum Flatpack" },
      { src: "bilder/vau2/rendering-blender.jpg", wide: true, caption: "Rendering des finalen Modells" },
      { src: "bilder/vau2/zeichnung.jpg", wide: true, caption: "Bemaßung Tischbock" },
      { src: "bilder/vau2/p19.jpg", wide: true, caption: "Detail: Verbindung der zwei Rohre" },
      { src: "bilder/vau2/skizze.jpg", wide: true, caption: "Skizze und Bemaßung der Endkappe" },
      { src: "bilder/vau2/rendering-1.jpg", wide: true, caption: "Rhino-Modell" },
      { src: "bilder/vau2/p29.jpg", caption: "Lackierter Tischbock, Verbindungsdetail" },
      { src: "bilder/vau2/p32a.jpg", caption: "Finales Modell" },
      { src: "bilder/vau2/p32b.jpg", caption: "Finales Modell" },
      { src: "bilder/vau2/p35a.jpg", caption: "Detail" },
      { src: "bilder/vau2/p35b.jpg", caption: "Detail" },
      { src: "bilder/vau2/p35c.jpg", caption: "Detail" },
      { src: "bilder/vau2/p11a.jpg", caption: "Vormodell mit Funktion, Fokus auf Flatpack" },
      { src: "bilder/vau2/p11b.jpg", caption: "Bau des Vormodells mit Funktion" },
      { src: "bilder/vau2/p12.jpg", wide: true, caption: "Großes Modell zur Überprüfung der Stabilität" }
    ]
  },
  {
    slug: "wasserwacht",
    title: "Wasserwacht Salus",
    context: "Baukonstruktion 2",
    category: "Holzbau, Konstruktion",
    year: "2026",
    text: [
      "Ein Neubau für die Wasserwacht am Tachinger See. Der Entwurf orientiert sich an der Brücke eines Schiffes: Die markanten schrägen Fenster des Überwachungsraums im Obergeschoss greifen deren Formensprache auf, stellen den Bezug zum Wasser her und ermöglichen eine weite, klare Sicht auf den Schwimmbereich, genau dort, wo sie gebraucht wird.",
      "Das Gebäude steht als Holzbau auf Betonstützen. So werden Funktion und Gestaltung verbunden und die zentrale Aufgabe der Wasserwacht, die Überwachung und Sicherheit der Badegäste, architektonisch sichtbar.",
      "Im Entwurfsprozess wurde von einer Träger-Balken-Konstruktion auf eine Massivholzdecke umgestellt, um eine ruhigere und klarere Deckenkonstruktion zu erhalten. Die Massivholzdecke ermöglicht größere Spannweiten bei geringer Konstruktionshöhe, verbessert die räumliche Wirkung und sorgt gleichzeitig für eine hochwertige, sichtbare Holzoberfläche. Dadurch werden Konstruktion, Gestaltung und Materialität zu einem stimmigen Gesamtkonzept verbunden."
    ],
    credits: [["Betreuung", "Frau Körner"], ["Team", TEAM_LUISA]],
    cover: "bilder/wasserwacht/titel.jpg",
    images: [
      /* Abgabe 09.07.26, Seiten 1, 3, 9–13, 19–24, 29, 32, 34, 37 */
      { src: "bilder/wasserwacht/p01.jpg", wide: true, caption: "Perspektive" },
      { src: "bilder/wasserwacht/p03.jpg", wide: true, caption: "Lageplan | M 1:500" },
      { src: "bilder/wasserwacht/p09.jpg", wide: true, caption: "Ostansicht | M 1:50" },
      { src: "bilder/wasserwacht/p10.jpg", wide: true, caption: "Westansicht | M 1:50" },
      { src: "bilder/wasserwacht/p11.jpg", wide: true, caption: "Konstruktionsraster" },
      { src: "bilder/wasserwacht/p12.jpg", wide: true, caption: "Konstruktionsraster" },
      { src: "bilder/wasserwacht/p13.jpg", wide: true, caption: "Konstruktionsraster" },
      { src: "bilder/wasserwacht/p19.jpg", wide: true, caption: "Grundriss EG | M 1:50" },
      { src: "bilder/wasserwacht/p20.jpg", wide: true, caption: "Grundriss OG | M 1:50" },
      { src: "bilder/wasserwacht/p21.jpg", wide: true, caption: "Schnitt A-A | M 1:50" },
      { src: "bilder/wasserwacht/p22.jpg", wide: true, caption: "Schnitt B-B | M 1:50" },
      { src: "bilder/wasserwacht/p23.jpg", wide: true, caption: "Wandaufbau Fassade, Dreitafelprojektion | M 1:10" },
      { src: "bilder/wasserwacht/p24.jpg", wide: true, caption: "Fenster, Dreitafelprojektion | M 1:10" },
      { src: "bilder/wasserwacht/p29.jpg", wide: true, caption: "Detail Fassadenschnitt | M 1:10" },
      { src: "bilder/wasserwacht/p32.jpg", wide: true, caption: "Explosionszeichnung Tragwerk" },
      { src: "bilder/wasserwacht/p34.jpg", wide: true, caption: "Konstruktionsmodell" },
      { src: "bilder/wasserwacht/p37.jpg", wide: true, caption: "Konstruktionsmodell" }
    ]
  },
  /* ---------- 1. Semester, Wintersemester 2025/26 ---------- */
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
      { src: "bilder/axxi-raumexperiment/axxi-360.mp4", wide: true, caption: "360°-Ansicht, Weißmodell" },
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
      /* Nur Booklet-Folien 14, 15, 16, 17, 18, 6 und das Plakat, keine Fotos von Personen; 360°-Fahrt und Weißmodell aus Freischwinger .obj (Blender) */
      { src: "bilder/freilieger/10.jpg", wide: true, caption: "Rendering mit Bio-Composite" },
      { src: "bilder/freilieger/freilieger-360.mp4", wide: true, caption: "360°-Ansicht, Weißmodell" },
      { src: "bilder/freilieger/weissmodell.jpg", wide: true, caption: "Weißmodell" },
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
    cover: "bilder/bio-strukturen/titel.jpg",
    images: [
      { src: "bilder/bio-strukturen/01-breit.jpg", wide: true },
      { src: "bilder/bio-strukturen/artischocke-360.mp4", wide: true, caption: "360°-Ansicht, Weißmodell" },
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
      "Bauaufnahme einer viertelgewendelten Massivtreppe im T-Gebäude der Technischen Hochschule Rosenheim, zwischen erstem und zweitem Obergeschoss: Terrazzostufen, ein anthrazitfarbenes Podest, ein schwarzer Handlauf.",
      "Vom Schwarzplan über Freihandskizzen und Aufmaß bis zu Grundriss, Schnitten und Wandabwicklungen, alle von Hand gezeichnet."
    ],
    credits: [["Betreuung", "Prof. Ulrike Förschler"], ["Team", TEAM]],
    cover: "bilder/treppenschau/titel.jpg",
    images: [
      /* Booklet-Folien 6–16 */
      { src: "bilder/treppenschau/p06.jpg", wide: true, caption: "Schwarzplan | M 1:2000" },
      { src: "bilder/treppenschau/p07.jpg", wide: true, caption: "Lageplan | M 1:500" },
      { src: "bilder/treppenschau/p08.jpg", wide: true, caption: "Skizze Nordansicht" },
      { src: "bilder/treppenschau/p09.jpg", wide: true, caption: "Skizze Ostansicht" },
      { src: "bilder/treppenschau/p10.jpg", wide: true, caption: "Nordansicht mit Verortung der Treppe" },
      { src: "bilder/treppenschau/p11.jpg", wide: true, caption: "Ostansicht mit Verortung der Treppe" },
      { src: "bilder/treppenschau/p12a.jpg", caption: "Aufmaß, Skizze freihand" },
      { src: "bilder/treppenschau/p12b.jpg", caption: "Aufmaß, Skizze freihand" },
      { src: "bilder/treppenschau/p13a.jpg", caption: "Aufmaß, Skizze freihand" },
      { src: "bilder/treppenschau/p13b.jpg", caption: "Aufmaß, Skizze freihand" },
      { src: "bilder/treppenschau/p14.jpg", wide: true, caption: "Grundriss | M 1:20" },
      { src: "bilder/treppenschau/p15.jpg", wide: true, caption: "Schnitt A-A | M 1:20" },
      { src: "bilder/treppenschau/p16.jpg", wide: true, caption: "Schnitt B-B | M 1:20" }
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
