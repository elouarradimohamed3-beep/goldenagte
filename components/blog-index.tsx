'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import type { PostMeta } from '@/lib/posts'
import { CLUSTER_LABEL, clusterHref, type PillarKey } from '@/lib/seo'

const PAGE = 12

export function BlogIndex({ posts }: { posts: PostMeta[] }) {
  const [q, setQ] = useState('')
  const [shown, setShown] = useState(PAGE)
  const [cluster, setCluster] = useState<PillarKey | 'all'>('all')
  const list = useMemo(() => {
    const t = q.trim().toLowerCase()
    return posts.filter((p) => (cluster === 'all' || p.pillar === cluster) && (!t || (p.title + ' ' + p.description).toLowerCase().includes(t)))
  }, [q, cluster, posts])
  const keys: PillarKey[] = ['subscription', 'service', 'usa', 'premium']
  return (
    <>
      <div className="relative mx-auto mt-8 max-w-xl">
        <Search size={18} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
        <input value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE) }} placeholder={`Search ${posts.length} articles`} aria-label="Search articles"
          className="w-full rounded-lg border border-slate-300 bg-white py-3 pr-4 pl-11 outline-none transition-colors focus:border-brand" />
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {(['all', ...keys] as const).map((k) => (
          <button key={k} onClick={() => { setCluster(k); setShown(PAGE) }} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${cluster === k ? 'border-brand bg-brand text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-brand'}`}>
            {k === 'all' ? 'All guides' : CLUSTER_LABEL[k]} <span className="opacity-60">({k === 'all' ? posts.length : posts.filter((p) => p.pillar === k).length})</span>
          </button>
        ))}
      </div>
      {cluster !== 'all' && <p className="mt-3 text-center text-sm"><Link href={clusterHref(cluster)} className="font-semibold text-brand">Read the complete {CLUSTER_LABEL[cluster]} guide →</Link></p>}
      <p className="mt-4 text-center text-sm text-slate-500">{list.length} {list.length === 1 ? 'article' : 'articles'}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, shown).map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover glass group flex flex-col overflow-hidden rounded-2xl">
            {p.cover ? <Image src={p.cover} alt={p.title} width={600} height={340} className="aspect-[16/9] w-full object-cover" /> : <div className="aspect-[16/9] w-full bg-gradient-to-br from-ink to-navy" />}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })} · {p.readMinutes} min read</p>
              <h2 className="mt-2 text-lg leading-snug font-semibold">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{p.description}</p>
              <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-brand">Read article <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></span>
            </div>
          </Link>
        ))}
      </div>
      {shown < list.length && (
        <div className="mt-10 text-center"><button onClick={() => setShown(shown + PAGE)} className="rounded-lg border border-brand px-8 py-3 font-semibold text-brand transition-colors hover:bg-brand hover:text-white">Load more articles</button></div>
      )}
      {list.length === 0 && <p className="mt-12 text-center text-slate-500">No articles match your search.</p>}
    </>
  )
}
