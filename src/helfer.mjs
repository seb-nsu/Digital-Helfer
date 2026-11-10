/**
 * Name und Telefonnummer der Hilfsperson.
 *
 * Diese Angaben stehen absichtlich NICHT im Repository, damit es öffentlich sein kann.
 * Sie kommen beim Bauen aus Umgebungsvariablen:
 *
 *   HELFER_NAME              z. B. Anna
 *   HELFER_TELEFON           internationales Format ohne Leerzeichen, z. B. +491701234567
 *   HELFER_TELEFON_ANZEIGE   so, wie die Nummer auf der Seite steht, z. B. 0170 1234567
 *   HELFER_WHATSAPP          nur Ziffern mit Ländervorwahl, ohne +, z. B. 491701234567
 *
 * Auf GitHub trägt man sie unter Settings → Secrets and variables → Actions → Variables ein.
 * Lokal z. B.: HELFER_NAME=Anna npm run dev
 *
 * Ohne Name steht auf der Seite „Ihre Vertrauensperson“.
 */
const env = globalThis.process?.env ?? {};
const name = (env.HELFER_NAME ?? '').trim();

export const HELFER = {
  /** Name im Nominativ/Akkusativ: „… hilft Ihnen gern“, „Fragen Sie …“ */
  name: name || 'Ihre Vertrauensperson',
  /** Name im Dativ: „mit …“, „Schicken Sie … ein Foto“ */
  nameDativ: name || 'Ihrer Vertrauensperson',
  telefon: (env.HELFER_TELEFON ?? '').trim(),
  telefonAnzeige: (env.HELFER_TELEFON_ANZEIGE ?? env.HELFER_TELEFON ?? '').trim(),
  whatsapp: (env.HELFER_WHATSAPP ?? '').trim(),
};

const htmlSicher = (text) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

/**
 * Ersetzt im fertigen HTML einer Anleitung {{helfer}} und {{helfer-dativ}}
 * durch den Namen der Hilfsperson.
 */
export function helferEinsetzen(html) {
  return html
    .replaceAll('{{helfer-dativ}}', htmlSicher(HELFER.nameDativ))
    .replaceAll('{{helfer}}', htmlSicher(HELFER.name));
}
