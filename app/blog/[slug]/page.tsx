import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts, getRelated } from '@/lib/posts'
import { SITE, waLink } from '@/lib/site'
import { Markdown } from '@/components/markdown'

export const dynamicParams = false
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date, images: post.cover ? [post.cover] : undefined },
  }
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  const related = getRelated(post.slug)
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.date, dateModified: post.date, mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    image: post.cover ? `${SITE.url}${post.cover}` : undefined,
    author: { '@type': 'Organization', name: SITE.name }, publisher: { '@type': 'Organization', name: SITE.name },
  }
  return (
    <article className="mx-auto max-w-3xl px-4 pt-36 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Link href="/blog" className="text-sm font-medium text-brand">← All articles</Link>
      <h1 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">{new Date(post.date).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })} · {post.readMinutes} min read</p>
      <div className="mt-8"><Markdown>{post.body}</Markdown></div>

      <div className="mt-14 rounded-2xl bg-ink p-8 text-center">
        <h2 className="text-2xl font-bold !text-white">Ready to try it?</h2>
        <p className="mt-2 text-slate-300">Plans from $20 a month with a 7-day refund.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/#plans" className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">See plans</Link>
          <a href={waLink(`Hi! I read "${post.title}" and have a question`)} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">Ask on WhatsApp</a>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold">More guides</h2>
          <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
            {related.map((r) => <li key={r.slug}><Link href={`/blog/${r.slug}`} className="block px-5 py-4 font-medium text-ink transition-colors hover:bg-slate-50 hover:text-brand">{r.title}</Link></li>)}
          </ul>
        </section>
      )}
    </article>
  )
}
