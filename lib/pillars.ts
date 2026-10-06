import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type Faq = { q: string; a: string }
export type PillarPage = { slug: string; title: string; h1: string; description: string; answer: string; updated: string; faq: Faq[]; body: string }

const DIR = path.join(process.cwd(), 'content', 'pillars')

export function getPillarPage(slug: string): PillarPage | undefined {
  const file = path.join(DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return undefined
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated)
  return { slug, title: String(data.title), h1: String(data.h1), description: String(data.description), answer: String(data.answer), updated, faq: (data.faq ?? []) as Faq[], body: content }
}
