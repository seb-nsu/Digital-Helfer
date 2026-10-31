/**
 * Zentrale Einstellungen des Digital-Helfers.
 * Hier tragen Sie Namen und Telefonnummer der Hilfsperson ein.
 */
export const HILFE = {
  /** Wer hilft, wenn etwas nicht klappt? */
  name: 'Sebastian',
  /**
   * Telefonnummer im internationalen Format, ohne Leerzeichen.
   * PLATZHALTER: bitte durch die echte Nummer ersetzen, z. B. '+491701234567'.
   */
  telefon: '+490000000000',
  /** Gleiche Nummer so, wie sie auf der Seite angezeigt wird. */
  telefonAnzeige: '0000 0000000',
  /** Nummer für WhatsApp: nur Ziffern, mit Ländervorwahl, ohne + (z. B. '491701234567'). */
  whatsapp: '490000000000',
};

/** Ist noch die Platzhalter-Nummer eingetragen? Dann zeigt die Hilfe-Seite einen Hinweis. */
export const NUMMER_IST_PLATZHALTER = HILFE.telefon === '+490000000000';

/**
 * Solange die Seite nur für die Familie gedacht ist, sollen Suchmaschinen sie nicht aufnehmen.
 * Für eine öffentliche Version auf false setzen.
 */
export const NICHT_INDEXIEREN = true;

export type ThemaId = 'pc-grundlagen' | 'word' | 'excel' | 'sicherheit' | 'ki' | 'unterhaltung';

export const THEMEN: {
  id: ThemaId;
  titel: string;
  kurz: string;
  einleitung: string;
  icon: string;
}[] = [
  {
    id: 'pc-grundlagen',
    titel: 'PC-Grundlagen',
    kurz: 'Maus, Tastatur, Fenster und Tabs',
    einleitung:
      'Hier lernen Sie die Grundlagen am Computer. Fangen Sie oben an. Jede Anleitung dauert nur wenige Minuten.',
    icon: 'monitor',
  },
  {
    id: 'word',
    titel: 'Word',
    kurz: 'Briefe und Texte schreiben',
    einleitung:
      'Mit dem Programm Word schreiben Sie Briefe, Einladungen und andere Texte. Hier sehen Sie, wie das geht.',
    icon: 'file-text',
  },
  {
    id: 'excel',
    titel: 'Excel',
    kurz: 'Listen und Tabellen',
    einleitung:
      'Mit dem Programm Excel legen Sie Listen und Tabellen an, zum Beispiel für Geburtstage oder Ihr Haushaltsbuch. Excel kann auch für Sie rechnen.',
    icon: 'sheet',
  },
  {
    id: 'sicherheit',
    titel: 'Sicherheit',
    kurz: 'Betrug erkennen, sicher bleiben',
    einleitung:
      'Betrüger versuchen es per E-Mail, SMS und Telefon. Hier lernen Sie die Tricks kennen. So fallen Sie nicht darauf herein.',
    icon: 'shield-check',
  },
  {
    id: 'ki',
    titel: 'Künstliche Intelligenz',
    kurz: 'Google-Suche mit KI und Gemini',
    einleitung:
      'Künstliche Intelligenz, kurz KI, beantwortet Fragen in ganzen Sätzen. Hier lernen Sie die KI in der Google-Suche und den Assistenten Gemini kennen.',
    icon: 'sparkles',
  },
  {
    id: 'unterhaltung',
    titel: 'Musik und Unterhaltung',
    kurz: 'Spotify: Lieder und Playlists',
    einleitung:
      'Mit Spotify hören Sie fast jedes Lied, das es gibt. Hier lernen Sie, wie Sie Lieder finden und eigene Listen mit Ihren Lieblingsliedern anlegen.',
    icon: 'music',
  },
];

export function themaById(id: string) {
  return THEMEN.find((t) => t.id === id);
}
