# Digital-Helfer

Digitaler Helfer am PC für ältere Menschen: eine ruhige, übersichtliche Seite mit Anleitungen
für PC, Word und Excel, iPhone, Fotos und Videoanrufe, Online-Alltag, Sicherheit, Bedienhilfen und Künstliche Intelligenz.
Dazu gibt es eine Übungsecke (`/ueben/`) und ein kleines Lexikon (`/glossar/`). Alle Texte sind in einfacher Sprache und in Sie-Form.

Gebaut mit [Astro](https://astro.build) (statische Seite), Suche mit [Pagefind](https://pagefind.app).

## Loslegen

```bash
npm install
npm run dev      # Vorschau während der Arbeit: http://localhost:4321/Digital-Helfer/
npm run build    # fertige Seite in dist/ bauen, inklusive Suchindex
npm run preview  # gebaute Seite ansehen (nur hier funktioniert die Suche)
```

Benötigt Node.js 22.23 oder neuer.

## Wichtige Einstellungen

Alles Wichtige steht in [`src/config.ts`](src/config.ts):

- **Telefonnummer und WhatsApp** für die Hilfe-Seite. Aktuell ist **keine Nummer** eingetragen;
  dann zeigt die Hilfe-Seite keine Knöpfe zum Anrufen und für WhatsApp.
- **`NICHT_INDEXIEREN`**: Solange die Seite nur für die Familie ist, sollen Suchmaschinen sie nicht aufnehmen.
- **Themen** (Titel, Kurzbeschreibung, Symbol) für die Startseite. Höchstens 9 Kacheln (3 × 3).

> Achtung: Ist das Repository öffentlich, ist auch die eingetragene Telefonnummer öffentlich sichtbar.

## Eine neue Anleitung schreiben

Jede Anleitung ist eine Markdown-Datei in `src/content/lektionen/<thema>/`. Der Dateiname wird zur Adresse
(`word/brief.md` → `/word/brief/`). Kopfdaten:

```yaml
---
titel: Wie kopiere ich einen Text?        # als Frage oder Aufgabe
thema: pc-grundlagen                     # pc-grundlagen | office | internet | iphone | familie | alltag | sicherheit | bedienhilfen | ki | probleme
nummer: 4                                # Reihenfolge im Thema
niveau: Einsteiger                       # oder Fortgeschritten
gruppe: Word                             # optional: Abschnitt auf der Themenseite
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

Jede Änderung in `main` wird automatisch auf GitHub Pages veröffentlicht
(Workflow `.github/workflows/deploy.yml`). Die Adresse ist
**https://seb-nsu.github.io/Digital-Helfer/**.

Einmalig einschalten: im Repository unter **Settings → Pages** bei **Source** „GitHub Actions“ wählen.

> Die Seite ist dann öffentlich erreichbar. Suchmaschinen sind über `NICHT_INDEXIEREN` in `src/config.ts` ausgesperrt.

### Am PC der Eltern einrichten

1. **Startseite im Browser (Edge):** Einstellungen → „Start, Startseite und neue Tabs“ → „Diese Seiten öffnen“ →
   „Neue Seite hinzufügen“ → Adresse oben einfügen.
2. **Symbol auf dem Desktop:** Seite in Edge öffnen → Menü „…“ → „Weitere Tools“ → „Verknüpfung erstellen“
   (oder rechte Maustaste auf den Desktop → „Neu“ → „Verknüpfung“ → Adresse einfügen → Name „Digital-Helfer“).
3. Auf dem iPhone: Seite in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

Lokal lässt sich der Basis-Pfad beim Bauen mit `BASE_PATH` ändern, die Domain mit `SITE_URL`.
