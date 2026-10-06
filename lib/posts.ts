import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { classify, type PillarKey } from './seo'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  readMinutes: number
  cover?: string
  sort: string
  pillar: PillarKey
  noindex: boolean
  seoTitle: string
}
export type Post = PostMeta & { body: string }

const DIR = path.join(process.cwd(), 'content', 'blog')
const SUFFIX = ' | Golden Gate IPTV'

/** Title tag of at most 60 characters: add the brand only if it fits, otherwise cut at a natural break. */
export function seoTitle(title: string): string {
  const t = title.replace(/\s+/g, ' ').trim()
  if (t.length + SUFFIX.length <= 60) return t + SUFFIX
  if (t.length <= 60) return t
  const cut = t.slice(0, 60)
  const sep = Math.max(cut.lastIndexOf(': '), cut.lastIndexOf(' – '), cut.lastIndexOf(' - '), cut.lastIndexOf(' | '))
  if (sep >= 30) return cut.slice(0, sep)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,:;–-]+$/, '')
}
let cache: Post[] | null = null

function load(): Post[] {
  if (cache) return cache
  cache = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'))
      return {
        slug: String(data.slug ?? f.replace(/\.md$/, '')),
        title: String(data.title),
        description: String(data.description ?? ''),
        date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
        readMinutes: Number(data.readMinutes ?? 5),
        cover: data.cover ? String(data.cover) : undefined,
        sort: String(data.sort ?? data.date),
        noindex: data.noindex === true,
        seoTitle: seoTitle(String(data.title)),
        pillar: (data.pillar as PillarKey) ?? classify(String(data.title), String(data.slug ?? f.replace(/\.md$/, ''))),
        body: content,
      }
    })
    .sort((a, b) => (a.sort < b.sort ? 1 : -1))
  return cache
}

export const getPosts = (): PostMeta[] => load().map(({ body: _body, ...meta }) => meta)
export const getPost = (slug: string) => load().find((p) => p.slug === slug)
export const getIndexable = (): PostMeta[] => getPosts().filter((p) => !p.noindex)
export const getByPillar = (key: PillarKey): PostMeta[] => getIndexable().filter((p) => p.pillar === key)
export const getRelated = (slug: string, n = 6): PostMeta[] => {
  const all = load()
  const me = all.find((p) => p.slug === slug)
  if (!me) return []
  return all.filter((p) => p.pillar === me.pillar && p.slug !== slug && !p.noindex).slice(0, n).map(({ body: _body, ...meta }) => meta)
}
