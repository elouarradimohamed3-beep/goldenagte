import type { Metadata } from 'next'
import Link from 'next/link'
import { CLUSTER_LABEL } from '@/lib/seo'
import { getPosts } from '@/lib/posts'
import { BlogIndex } from '@/components/blog-index'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PillarLinks } from '@/components/pillar-links'

export const metadata: Metadata = {
  title: 'IPTV Guides: Service, Subscription, Premium and USA Articles',
  description: 'Read 120+ IPTV guides: how an IPTV service works, IPTV subscription prices, premium IPTV, IPTV in the USA, device setup and troubleshooting.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  const posts = getPosts()
  return (
    <>
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
      <h1 className="text-center text-4xl font-bold">IPTV guides and articles</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Practical guides on how IPTV works, how to set it up on your devices, what it costs and how to fix common problems.</p>
      <BlogIndex posts={posts} />
      <nav aria-label="Browse by topic" className="mt-10 flex flex-wrap justify-center gap-2 text-sm">
        {(['service', 'subscription', 'usa', 'premium'] as const).map((k) => <Link key={k} href={`/blog/topic/${k}`} className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition-colors hover:border-brand hover:text-brand">Browse {CLUSTER_LABEL[k]} guides</Link>)}
      </nav>
    </div>
    <PillarLinks title="Start with a complete guide" />
    </>
  )
}
