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

export const THEMA_IDS = [
  'pc-grundlagen',
  'office',
  'internet',
  'iphone',
  'familie',
  'alltag',
  'sicherheit',
  'bedienhilfen',
  'ki',
  'probleme',
] as const;
export type ThemaId = (typeof THEMA_IDS)[number];

export interface Thema {
  id: ThemaId;
  titel: string;
  kurz: string;
  einleitung: string;
  icon: string;
  /** false: erscheint nicht als Kachel auf der Startseite (z. B. der Problemlöser, der einen eigenen Bereich hat) */
  kachel?: boolean;
}

/** Reihenfolge = Reihenfolge der Kacheln auf der Startseite (höchstens 9 Kacheln, drei Reihen zu je drei). */
export const THEMEN: Thema[] = [
  {
    id: 'pc-grundlagen',
    titel: 'PC-Grundlagen',
    kurz: 'Maus, Tastatur, Drucken, Scannen',
    einleitung:
      'Hier lernen Sie die Grundlagen am Computer: Maus, Tastatur und Fenster, dazu Drucken und Scannen. Fangen Sie oben an. Jede Anleitung dauert nur wenige Minuten.',
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
    titel: 'iPhone und WhatsApp',
    kurz: 'Notruf, Nachrichten, Sprachnachrichten',
    einleitung:
      'Hier finden Sie Anleitungen für Ihr iPhone: den Notruf und WhatsApp mit Fotos, Sprachnachrichten und weitergeleiteten Nachrichten. Videoanrufe und Fotos haben ein eigenes Thema.',
    icon: 'smartphone',
  },
  {
    id: 'familie',
    titel: 'Fotos und Videoanrufe',
    kurz: 'Familie per Video sehen, Fotos ordnen',
    einleitung:
      'Hier lernen Sie, wie Sie Ihre Familie per Video sehen, mit WhatsApp, FaceTime oder Zoom. Außerdem: Fotos auf dem iPhone ansehen und ordnen und auf den Computer holen.',
    icon: 'camera',
  },
  {
    id: 'alltag',
    titel: 'Online-Alltag',
    kurz: 'Bank, Arzttermin, Bahn, Einkaufen',
    einleitung:
      'Vieles geht heute bequem im Internet: Überweisungen, Arzttermine, Fahrkarten und Einkäufe. Hier lernen Sie, wie das geht und worauf Sie achten müssen.',
    icon: 'shopping-cart',
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
    id: 'bedienhilfen',
    titel: 'Besser sehen und hören',
    kurz: 'Größere Schrift, Lupe, Vorlesen, Diktieren',
    einleitung:
      'Computer und iPhone können sich Ihnen anpassen: größere Schrift, eine Lupe, Texte vorlesen lassen oder sprechen statt tippen. Probieren Sie aus, was Ihnen hilft.',
    icon: 'eye',
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
