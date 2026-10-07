import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getByPillar } from '@/lib/posts'
import { CLUSTER_LABEL, clusterHref, type PillarKey } from '@/lib/seo'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PillarLinks } from '@/components/pillar-links'
import { CtaBand } from '@/components/cta-band'

const KEYS: PillarKey[] = ['service', 'subscription', 'usa', 'premium']
const INTRO: Record<PillarKey, string> = {
  service: 'Guides on how an IPTV service works, how to choose a reliable one and how to set it up on your devices.',
  subscription: 'Guides on IPTV subscription prices, plan lengths and how to buy safely.',
  usa: 'Guides for watching IPTV in the United States: devices, internet speeds, state guides and setup.',
  premium: 'Guides on premium IPTV: 4K quality, multiple screens, stability and what to look for.',
}

export const dynamicParams = false
export const generateStaticParams = () => KEYS.map((cluster) => ({ cluster }))

export async function generateMetadata({ params }: { params: Promise<{ cluster: string }> }): Promise<Metadata> {
  const k = (await params).cluster as PillarKey
  if (!KEYS.includes(k)) return {}
  const label = CLUSTER_LABEL[k]
  return {
    title: { absolute: `${label} Guides and Articles | Golden Gate IPTV` },
    description: `${INTRO[k]} ${getByPillar(k).length} in-depth articles.`.slice(0, 155),
    alternates: { canonical: `/blog/topic/${k}` },
    openGraph: { images: ['/opengraph-image'] },
  }
}

export default async function Topic({ params }: { params: Promise<{ cluster: string }> }) {
  const k = (await params).cluster as PillarKey
  if (!KEYS.includes(k)) notFound()
  const label = CLUSTER_LABEL[k]
  const posts = getByPillar(k)
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-28 pb-12">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: label, href: `/blog/topic/${k}` }]} />
        <h1 className="text-3xl font-bold sm:text-4xl">{label} guides and articles</h1>
        <p className="mt-3 text-slate-600">{INTRO[k]} Start with our complete <Link href={clusterHref(k)} className="font-semibold text-brand hover:underline">{label.toLowerCase()} guide</Link>.</p>
        <ul className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block px-5 py-4 transition-colors hover:bg-slate-50">
                <span className="font-semibold text-ink">{p.title}</span>
                <span className="mt-1 block text-sm text-slate-500">{p.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <nav aria-label="Topics" className="mt-8 flex flex-wrap gap-2 text-sm">
          {KEYS.filter((x) => x !== k).map((x) => <Link key={x} href={`/blog/topic/${x}`} className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition-colors hover:border-brand hover:text-brand">{CLUSTER_LABEL[x]} guides</Link>)}
        </nav>
      </div>
      <PillarLinks />
      <CtaBand />
    </>
  )
}
