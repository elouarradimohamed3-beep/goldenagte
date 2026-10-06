import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts, getRelated, getByPillar } from '@/lib/posts'
import { CLUSTER_LABEL, PILLARS, clusterHref, quickLinks } from '@/lib/seo'
import { SITE, waLink } from '@/lib/site'
import { Markdown } from '@/components/markdown'
import { Toc } from '@/components/toc'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'

export const dynamicParams = false
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  const long = post.title.length > 48
  return {
    title: long ? { absolute: post.title } : post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date, modifiedTime: post.date, images: post.cover ? [post.cover] : undefined },
  }
}

/** Split the markdown after its first plain-text paragraph so a hub link can sit in the intro. */
function splitIntro(body: string): [string, string] {
  const parts = body.split(/\n{2,}/)
  const i = parts.findIndex((p) => p.length > 60 && !/^(#|!|\||-|\*|>|\d+\.)/.test(p.trim()))
  if (i < 0) return [body, '']
  return [parts.slice(0, i + 1).join('\n\n'), parts.slice(i + 1).join('\n\n')]
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  const related = getRelated(post.slug, 6)
  const hub = clusterHref(post.pillar)
  const hubLabel = CLUSTER_LABEL[post.pillar]
  const total = getByPillar(post.pillar).length
  const [intro, rest] = splitIntro(post.body)
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.date, dateModified: post.date, mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    image: post.cover ? `${SITE.url}${post.cover}` : undefined, articleSection: hubLabel, isPartOf: { '@type': 'WebPage', url: `${SITE.url}${hub}` },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url }, publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/images/logo.png` } },
  }
  return (
    <article className="mx-auto max-w-3xl px-4 pt-28 pb-16">
      <JsonLd data={ld} />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />
      <Link href={hub} className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">{hubLabel}</Link>
      <h1 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">Updated {new Date(post.date).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })} · {post.readMinutes} min read · By the {SITE.name} team</p>
      <div className="mt-6"><Toc body={post.body} /></div>
      <div className="mt-8">
        <Markdown fallbackAlt={post.title}>{intro}</Markdown>
        <div className="my-6 rounded-xl border-l-4 border-brand bg-brand-soft p-4 text-sm text-slate-700">
          <Markdown>{quickLinks(post.pillar)}</Markdown>
        </div>
        {rest && <Markdown fallbackAlt={post.title}>{rest}</Markdown>}
      </div>

      <div className="mt-14 rounded-2xl bg-ink p-8 text-center">
        <h2 className="text-2xl font-bold !text-white">Ready to try an IPTV subscription?</h2>
        <p className="mt-2 text-slate-300">Plans from $20 a month with a 7-day refund.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/#plans" className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">See plans</Link>
          <a href={waLink(`Hi! I read "${post.title}" and have a question`)} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">Ask on WhatsApp</a>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold">More {hubLabel.toLowerCase()} guides</h2>
          <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
            {related.map((r) => <li key={r.slug}><Link href={`/blog/${r.slug}`} className="block px-5 py-4 font-medium text-ink transition-colors hover:bg-slate-50 hover:text-brand">{r.title}</Link></li>)}
          </ul>
          <p className="mt-4 text-sm"><Link href={hub} className="font-semibold text-brand">See all {total} {hubLabel.toLowerCase()} guides →</Link></p>
        </section>
      )}

      <nav aria-label="IPTV guides" className="mt-10 flex flex-wrap gap-2 text-sm">
        <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition-colors hover:border-brand hover:text-brand">IPTV service</Link>
        {PILLARS.map((p) => <Link key={p.slug} href={`/${p.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition-colors hover:border-brand hover:text-brand">{p.label}</Link>)}
      </nav>
    </article>
  )
}
