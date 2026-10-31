import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lektionen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lektionen' }),
  schema: z.object({
    /** Titel als Frage oder Aufgabe, z. B. „Wie kopiere ich einen Text?“ */
    titel: z.string(),
    thema: z.enum(['pc-grundlagen', 'word', 'sicherheit', 'ki']),
    /** Reihenfolge innerhalb des Themas */
    nummer: z.number(),
    niveau: z.enum(['Einsteiger', 'Fortgeschritten']).default('Einsteiger'),
    /** Dauer in Minuten */
    dauer: z.number(),
    /** „Darum geht es“: 1 bis 2 Sätze */
    darum: z.string(),
    /** „Das brauchen Sie“ */
    brauchen: z.array(z.string()).default([]),
    /** Alltagswörter, unter denen die Anleitung auch gefunden werden soll */
    suchwoerter: z.array(z.string()).default([]),
  }),
});

const glossar = defineCollection({
  loader: file('./src/content/glossar.yaml'),
  schema: z.object({
    wort: z.string(),
    erklaerung: z.string(),
  }),
});

export const collections = { lektionen, glossar };
