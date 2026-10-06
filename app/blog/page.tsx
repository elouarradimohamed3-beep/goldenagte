import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { POSTS } from '@/lib/posts'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'IPTV guides and articles',
  description: 'Guides on how IPTV works, how to set it up on your devices, internet speeds and how to choose a service in the USA.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-36 pb-16">
      <h1 className="text-center text-4xl font-bold">IPTV guides and articles</h1>
      <p className="mt-3 text-center text-slate-500">Practical answers on setup, speed and choosing a service.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 100}>
            <Link href={`/blog/${p.slug}`} className="card-hover glass spot group flex h-full flex-col rounded-3xl p-7">
              <p className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })} · {p.readMinutes} min read</p>
              <h2 className="mt-3 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{p.description}</p>
              <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand">Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
