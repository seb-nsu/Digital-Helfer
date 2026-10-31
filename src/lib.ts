/** Baut einen Link innerhalb der Seite, passend zum Basis-Pfad (z. B. /digital-helfer/). */
export function url(pfad = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pfad.replace(/^\//, '');
  return `${base}/${rest}`;
}

export function minuten(n: number): string {
  return n === 1 ? 'ca. 1 Minute' : `ca. ${n} Minuten`;
}
