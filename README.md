# Digital-Helfer

Digitaler Helfer am PC für ältere Menschen: eine ruhige, übersichtliche Seite mit Anleitungen
für PC, Word, Sicherheit und Künstliche Intelligenz. Alle Texte sind in einfacher Sprache und in Sie-Form.

Gebaut mit [Astro](https://astro.build) (statische Seite), Suche mit [Pagefind](https://pagefind.app).

## Loslegen

```bash
npm install
npm run dev      # Vorschau während der Arbeit: http://localhost:4321/digital-helfer/
npm run build    # fertige Seite in dist/ bauen, inklusive Suchindex
npm run preview  # gebaute Seite ansehen (nur hier funktioniert die Suche)
```

Benötigt Node.js 22.23 oder neuer.

## Wichtige Einstellungen

Alles Wichtige steht in [`src/config.ts`](src/config.ts):

- **Telefonnummer und WhatsApp** für den Hilfe-Knopf. Aktuell ist ein **Platzhalter** eingetragen.
  Solange das so ist, zeigt die Hilfe-Seite einen gelben Hinweis.
- **`NICHT_INDEXIEREN`**: Solange die Seite nur für die Familie ist, sollen Suchmaschinen sie nicht aufnehmen.
- **Themen** (Titel, Kurzbeschreibung, Symbol) für die Startseite.

> Achtung: Ist das Repository öffentlich, ist auch die eingetragene Telefonnummer öffentlich sichtbar.

## Eine neue Anleitung schreiben

Jede Anleitung ist eine Markdown-Datei in `src/content/lektionen/<thema>/`. Der Dateiname wird zur Adresse
(`word/brief.md` → `/word/brief/`). Kopfdaten:

```yaml
---
titel: Wie kopiere ich einen Text?        # als Frage oder Aufgabe
thema: pc-grundlagen                     # pc-grundlagen | word | excel | sicherheit | ki
nummer: 4                                # Reihenfolge im Thema
niveau: Einsteiger                       # oder Fortgeschritten
dauer: 6                                 # Minuten
darum: Ein bis zwei Sätze, worum es geht.
brauchen:
  - einen Text, zum Beispiel in Word
suchwoerter: [kopieren, Strg C, doppeln]  # Alltagswörter für die Suche
---
```

Aufbau des Textes:

- `## Überschrift` gliedert die Anleitung.
- **Nummerierte Listen** (`1.`, `2.` …) werden automatisch zu Schritt-Karten.
- `> **Gut zu wissen:** …` wird zu einem blauen Hinweis-Kasten.
- `<div class="warnung">` … `</div>` (mit Leerzeilen davor und danach) wird zu einem Warn-Kasten.
- Tasten schreiben Sie als `<kbd>Strg</kbd> + <kbd>C</kbd>`.
- Bildschirmfotos legen Sie neben die Datei und binden sie mit `![Beschreibung](./bild.png)` in einen Schritt ein.
- Links ins Glossar: `[Browser](../../glossar/#browser)`, zu einer anderen Anleitung: `[Text](../rueckgaengig/)`.
- Jede Anleitung endet mit `## Jetzt Sie!` und, wenn sinnvoll, `## Hat nicht geklappt?`.

Fachwörter für die Seite „Wörter erklärt“ stehen in `src/content/glossar.yaml`.

## Veröffentlichen

Die Seite ist komplett statisch: Der Inhalt von `dist/` kann auf jeden Webspace, zu GitHub Pages, Netlify o. Ä.
Der Basis-Pfad ist standardmäßig `/digital-helfer/` und lässt sich beim Bauen mit `BASE_PATH` ändern,
die Domain mit `SITE_URL`.
