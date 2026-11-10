import { getCollection, type CollectionEntry } from 'astro:content';

type Lektion = CollectionEntry<'lektionen'>;

/** Ein Abschnitt auf der Themenseite, z. B. „Word“ oder „Excel“. Ohne Gruppen gibt es genau einen Abschnitt ohne Titel. */
export interface Abschnitt {
  titel: string;
  lektionen: Lektion[];
}

/**
 * Teilt die Anleitungen eines Themas in Abschnitte, so wie sie auf der Themenseite stehen.
 * Themen-, Gesamt- und Anleitungsseite nutzen dieselbe Einteilung. So stimmen Nummern und „Nächste Anleitung“ überall überein.
 */
export function abschnitteVon(lektionen: Lektion[]): Abschnitt[] {
  const sortiert = [...lektionen].sort((a, b) => a.data.nummer - b.data.nummer);

  // Doppelte Nummern würden die Reihenfolge zufällig machen. Lieber gleich beim Bauen melden.
  const gesehen = new Map<number, string>();
  for (const l of sortiert) {
    const vorher = gesehen.get(l.data.nummer);
    if (vorher) throw new Error(`Doppelte nummer ${l.data.nummer} im Thema ${l.data.thema}: ${vorher} und ${l.id}`);
    gesehen.set(l.data.nummer, l.id);
  }

  if (!sortiert.some((l) => l.data.gruppe)) return [{ titel: '', lektionen: sortiert }];

  const map = new Map<string, Lektion[]>();
  for (const l of sortiert) {
    const g = l.data.gruppe ?? 'Weitere Anleitungen';
    map.set(g, [...(map.get(g) ?? []), l]);
  }
  return [...map].map(([titel, ls]) => ({ titel, lektionen: ls }));
}

export async function abschnitteFuerThema(thema: string): Promise<Abschnitt[]> {
  return abschnitteVon(await getCollection('lektionen', (l) => l.data.thema === thema));
}
