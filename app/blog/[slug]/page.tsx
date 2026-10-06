import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS, getPost } from '@/lib/posts'
import { SITE, waLink } from '@/lib/site'

export const dynamicParams = false
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date },
  }
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.date, dateModified: post.date, mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: SITE.name }, publisher: { '@type': 'Organization', name: SITE.name },
  }
  return (
    <article className="mx-auto max-w-3xl px-4 pt-36 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Link href="/blog" className="text-sm text-brand">← All articles</Link>
      <h1 className="mt-4 text-4xl font-bold leading-tight">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">{new Date(post.date).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })} · {post.readMinutes} min read</p>
      <p className="mt-6 text-lg text-slate-600">{post.description}</p>
      {post.sections.map((s) => (
        <section key={s.h} className="mt-10">
          <h2 className="text-2xl font-semibold">{s.h}</h2>
          <div className="mt-3 space-y-4 text-slate-600">{s.p.map((t) => <p key={t}>{t}</p>)}</div>
        </section>
      ))}
      <div className="glass mt-14 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to try it?</h2>
        <p className="mt-2 text-slate-500">Plans from $20 a month with a 7-day refund.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/#plans" className="rounded-lg bg-brand px-6 py-3 font-semibold text-white">See plans</Link>
          <a href={waLink(`Hi! I read "${post.title}" and have a question`)} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-brand/40 px-6 py-3 font-semibold text-brand">Ask on WhatsApp</a>
        </div>
      </div>
    </article>
  )
}
