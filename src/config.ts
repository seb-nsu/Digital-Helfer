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

export type ThemaId = 'pc-grundlagen' | 'office' | 'internet' | 'iphone' | 'sicherheit' | 'ki' | 'probleme';

export interface Thema {
  id: ThemaId;
  titel: string;
  kurz: string;
  einleitung: string;
  icon: string;
  /** false: erscheint nicht als Kachel auf der Startseite (z. B. der Problemlöser, der einen eigenen Bereich hat) */
  kachel?: boolean;
}

/** Reihenfolge = Reihenfolge der Kacheln auf der Startseite (höchstens 6 Kacheln). */
export const THEMEN: Thema[] = [
  {
    id: 'pc-grundlagen',
    titel: 'PC-Grundlagen',
    kurz: 'Maus, Tastatur, Fenster, Kopieren',
    einleitung:
      'Hier lernen Sie die Grundlagen am Computer. Fangen Sie oben an. Jede Anleitung dauert nur wenige Minuten.',
    icon: 'monitor',
  },
  {
    id: 'office',
    titel: 'Word und Excel',
    kurz: 'Briefe schreiben, Listen anlegen',
    einleitung:
      'Mit Word schreiben Sie Briefe und andere Texte. Mit Excel legen Sie Listen und Tabellen an, und Excel rechnet für Sie.',
    icon: 'file-text',
  },
  {
    id: 'internet',
    titel: 'E-Mail und Internet',
    kurz: 'E-Mails, Fotos verschicken, Tabs',
    einleitung:
      'Hier lernen Sie, wie Sie E-Mails lesen und schreiben, Anhänge öffnen und Fotos verschicken. Und wie Sie im Internet mehrere Seiten gleichzeitig öffnen.',
    icon: 'mail',
  },
  {
    id: 'iphone',
    titel: 'iPhone',
    kurz: 'Schrift, WhatsApp, Fotos, Spotify',
    einleitung:
      'Hier finden Sie Anleitungen für Ihr iPhone: größere Schrift, Fotos per WhatsApp verschicken, Fotos auf den Computer holen, den Notruf und Musik mit Spotify.',
    icon: 'smartphone',
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
    id: 'probleme',
    titel: 'Hilfe bei Problemen',
    kurz: 'Schnelle Lösungen für häufige Probleme',
    einleitung:
      'Etwas funktioniert nicht? Hier finden Sie die häufigsten Probleme und was Sie selbst tun können. Probieren Sie die Schritte der Reihe nach aus.',
    icon: 'wrench',
    kachel: false,
  },
];

export function themaById(id: string) {
  return THEMEN.find((t) => t.id === id);
}
