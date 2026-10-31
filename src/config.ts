/**
 * Zentrale Einstellungen des Digital-Helfers.
 * Hier tragen Sie Namen und Telefonnummer der Hilfsperson ein.
 */
export const HILFE = {
  /** Wer hilft, wenn etwas nicht klappt? */
  name: 'Sebastian',
  /**
   * Telefonnummer im internationalen Format, ohne Leerzeichen, z. B. '+491701234567'.
   * Leer lassen: Dann zeigt die Hilfe-Seite keine Knöpfe zum Anrufen und für WhatsApp.
   * Achtung: Die Seite ist öffentlich. Eine eingetragene Nummer kann jeder sehen.
   */
  telefon: '',
  /** Gleiche Nummer so, wie sie auf der Seite angezeigt wird, z. B. '0170 1234567'. */
  telefonAnzeige: '',
  /** Nummer für WhatsApp: nur Ziffern, mit Ländervorwahl, ohne + (z. B. '491701234567'). */
  whatsapp: '',
};

/** Ist eine Telefonnummer eingetragen? */
export const MIT_NUMMER = HILFE.telefon !== '';

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
    kurz: 'E-Mails, Spotify, YouTube',
    einleitung:
      'Hier lernen Sie, wie Sie E-Mails lesen und schreiben, Anhänge öffnen und Fotos verschicken. Außerdem: mehrere Internetseiten gleichzeitig öffnen, Musik hören mit Spotify und Videos schauen auf YouTube.',
    icon: 'mail',
  },
  {
    id: 'iphone',
    titel: 'iPhone',
    kurz: 'Fotos, WhatsApp, Schrift, Notruf',
    einleitung:
      'Hier finden Sie Anleitungen für Ihr iPhone: größere Schrift, der Notruf, Ihre Fotos ansehen und ordnen sowie Nachrichten, Fotos und Videoanrufe mit WhatsApp.',
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
