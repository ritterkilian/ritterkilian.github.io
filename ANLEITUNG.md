# Deine Portfolio-Website

Die Website besteht aus wenigen Dateien in diesem Ordner `website`:

| Datei | Wofür | Musst du ändern? |
|---|---|---|
| `content.js` | Alle Texte, Projekte, Bilder, E-Mail, Instagram | **Ja, nur hier** |
| `bilder/` | Deine Bilder, ein Unterordner pro Projekt | Ja, Bilder hineinlegen |
| `index.html` | Grundgerüst der Seite | Nein |
| `style.css` | Gestaltung (Raster, Pills, Schrift) | Nein |
| `app.js` | Baut die Seiten zusammen | Nein |

## Ansehen auf deinem Mac

Doppelklick auf `index.html`. Die Seite öffnet sich im Browser, auch ohne Internet.
Nach jeder Änderung in `content.js` einfach im Browser neu laden (⌘R).

## Texte ändern

`content.js` mit TextEdit öffnen (Rechtsklick → Öffnen mit → TextEdit).
Falls TextEdit Formatierungen anzeigt: Menü **Format → In reinen Text umwandeln**.
Noch angenehmer ist ein Code-Editor wie Visual Studio Code (kostenlos).

Wichtig beim Bearbeiten:
- Texte stehen immer in `"Anführungszeichen"`.
- Zwischen Einträgen steht ein Komma.
- Wenn nach einer Änderung die Seite leer bleibt, fehlt meist ein Komma oder ein Anführungszeichen.

## Bilder einsetzen

1. Bilder exportieren: **JPG, lange Seite etwa 2000 px, unter 500 KB**.
   Im Mac-Programm Vorschau: Ablage → Exportieren → JPEG, Qualität etwa in der Mitte.
2. Dateien einfach durchnummerieren, ohne Leerzeichen und Umlaute: `01.jpg`, `02.jpg` …
3. In den passenden Ordner legen, z. B. `bilder/waeschetrockner/`.
4. In `content.js` beim Projekt eintragen:

   ```js
   images: [
     "bilder/waeschetrockner/01.jpg",
     "bilder/waeschetrockner/02.jpg",
     "bilder/waeschetrockner/03.jpg"
   ],
   ```

Das **erste Bild** ist das Titelbild auf der Startseite. Bilder werden automatisch auf 4:5 (Hochformat) zugeschnitten und gerundet.
Solange `images` leer ist, siehst du graue Platzhalter. Ihre Anzahl stellt `placeholders` ein.

Auf der Projektseite stehen die Bilder zweispaltig rechts. Statt nur des Pfads kannst du einem Eintrag Extras geben:

```js
images: [
  { src: "bilder/waeschetrockner/01.jpg", wide: true },                 // über beide Spalten, Querformat 8:5
  "bilder/waeschetrockner/02.jpg",                                       // normal, Hochformat 4:5
  { src: "bilder/waeschetrockner/03.jpg", caption: "Modell 1:20" },     // mit Bildunterschrift
  { src: "bilder/waeschetrockner/film.mp4", wide: true },               // Video mit Pause, Vollbild, Ton
  { slides: ["bilder/waeschetrockner/04.jpg", "bilder/waeschetrockner/05.jpg"], wide: true } // Diashow mit Punkten
],
cover: "bilder/waeschetrockner/titel.jpg",   // optional: eigenes Titelbild für die Startseite
```

Videos am besten als **MP4**, kurz und ohne Ton, unter etwa 20 MB. Sie laufen stumm in Schleife.

## Neues Projekt hinzufügen

In `content.js` einen kompletten Projekt-Block `{ … },` kopieren, direkt dahinter einfügen und anpassen.
- `slug` muss eindeutig sein und darf nur a–z, 0–9 und `-` enthalten, z. B. `wohnung-altbau`.
- Ordner `bilder/wohnung-altbau/` anlegen und die Bilder hineinlegen.

Menü „Arbeiten“, Startseiten-Kachel und Projektseite entstehen automatisch.
Die Reihenfolge in `content.js` ist die Reihenfolge auf der Website.

## Online stellen mit GitHub Pages (kostenlos)

Die Datenschutzerklärung nennt GitHub Pages als Hoster. Wenn du einmal wechselst, muss Abschnitt 3 in `PRIVACY` (content.js) angepasst werden.

### Einmalig einrichten

1. **Konto anlegen** auf github.com. Der Benutzername steht später in der Adresse,
   z. B. `ritter-studio` → `ritter-studio.github.io`.
2. **Repository anlegen:** oben rechts **+** → **New repository**.
   - Repository name: genau `DEINNAME.github.io` (dein Benutzername, alles klein), z. B. `ritter-studio.github.io`
   - **Public** auswählen (für kostenloses GitHub Pages nötig).
   - **Create repository**.
3. **Dateien hochladen:** Auf der neuen Seite den Link **uploading an existing file** anklicken.
   - Im Finder den Ordner `website` öffnen, **alles darin markieren** (⌘A) und ins Browserfenster ziehen.
     Wichtig: den *Inhalt* hochladen, nicht den Ordner `website` selbst. `index.html` muss ganz oben liegen.
   - Unten **Commit changes** klicken.
4. **Pages einschalten:** im Repository **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, Ordner **/ (root)** → **Save**.
5. Nach 1–2 Minuten ist die Seite online unter `https://DEINNAME.github.io`.
   Auf derselben Seite **Enforce HTTPS** anhaken, falls das Häkchen nicht schon gesetzt ist.

Gut zu wissen: Weil das Repository öffentlich ist, kann jeder die Dateien auf GitHub ansehen. Das ist dasselbe, was auf der Website steht. Trag also nichts in die Dateien ein, was nicht öffentlich sein soll.

### Aktualisieren

- **Im Browser:** im Repository **Add file → Upload files**, die geänderten Dateien hineinziehen (gleiche Namen werden ersetzt) → **Commit changes**. Neue Bilder samt Ordner `bilder/...` genauso hochziehen.
- **Bequemer bei vielen Änderungen:** die kostenlose App **GitHub Desktop**. Repository einmal klonen, Website-Dateien dort hineinkopieren, dann nur noch **Commit** und **Push origin** klicken.

Nach jedem Hochladen dauert es etwa 1 Minute, bis die Änderung online ist. Im Browser eventuell mit ⌘⇧R neu laden.

Grenzen beim Hochladen im Browser: höchstens 100 Dateien auf einmal und 25 MB pro Datei. Mit Bildern unter 500 KB bist du weit darunter.

### Eigene Domain (optional)

1. Domain kaufen, z. B. `kilianritter.de` bei INWX, Strato oder IONOS (ca. 5–15 € im Jahr).
2. In GitHub **Settings → Pages → Custom domain** die Domain eintragen → **Save**.
3. Beim Domain-Anbieter die DNS-Einträge setzen, die GitHub in der Hilfe nennt („Managing a custom domain for your GitHub Pages site“): vier `A`-Einträge für die Hauptdomain und ein `CNAME` für `www` auf `DEINNAME.github.io`.
4. Wenn die Domain verbunden ist, **Enforce HTTPS** anhaken.
