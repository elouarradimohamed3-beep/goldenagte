import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  readMinutes: number
  cover?: string
  sort: string
}
export type Post = PostMeta & { body: string }

const DIR = path.join(process.cwd(), 'content', 'blog')
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
        body: content,
      }
    })
    .sort((a, b) => (a.sort < b.sort ? 1 : -1))
  return cache
}

export const getPosts = (): PostMeta[] => load().map(({ body: _body, ...meta }) => meta)
export const getPost = (slug: string) => load().find((p) => p.slug === slug)
export const getRelated = (slug: string, n = 3): PostMeta[] => {
  const all = load()
  const i = all.findIndex((p) => p.slug === slug)
  const pick = [1, 2, 3, -1, -2].map((d) => all[i + d]).filter(Boolean).slice(0, n)
  return pick.map(({ body: _body, ...meta }) => meta)
}
