import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPillarPage } from '@/lib/pillars'
import { getByPillar } from '@/lib/posts'
import { PILLARS, pillarBySlug } from '@/lib/seo'
import { SITE } from '@/lib/site'
import { Markdown } from '@/components/markdown'
import { Toc } from '@/components/toc'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { FaqList } from '@/components/faq'
import { PillarLinks } from '@/components/pillar-links'
import { CtaBand } from '@/components/cta-band'

export const dynamicParams = false
export const generateStaticParams = () => PILLARS.map((p) => ({ pillar: p.slug }))

export async function generateMetadata({ params }: { params: Promise<{ pillar: string }> }): Promise<Metadata> {
  const page = getPillarPage((await params).pillar)
  if (!page) return {}
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { type: 'article', title: page.title, description: page.description, modifiedTime: page.updated, images: ['/opengraph-image'] },
  }
}

export default async function PillarPageRoute({ params }: { params: Promise<{ pillar: string }> }) {
  const slug = (await params).pillar
  const page = getPillarPage(slug)
  const pillar = pillarBySlug(slug)
  if (!page || !pillar) notFound()
  const guides = getByPillar(pillar.key)
  const [before, rest] = page.body.split(/\n## Frequently asked questions\n/)
  const [faqIntro, after] = (rest ?? '').split(/\n## Next steps\n/)
  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'Article', headline: page.h1, description: page.description,
      datePublished: page.updated, dateModified: page.updated, mainEntityOfPage: `${SITE.url}/${page.slug}`,
      author: { '@type': 'Organization', name: SITE.name }, publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/images/logo.png` } },
      about: pillar.keyword,
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ]
  return (
    <>
      <JsonLd data={ld} />
      <article className="mx-auto max-w-3xl px-4 pt-28 pb-12">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: pillar.label, href: `/${page.slug}` }]} />
        <h1 className="text-3xl leading-tight font-bold sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 text-sm text-slate-500">Updated {new Date(page.updated).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })} · By the {SITE.name} team</p>
        <div className="mt-6 rounded-xl border-l-4 border-brand bg-brand-soft p-5">
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">Quick answer</p>
          <p className="mt-2 text-ink">{page.answer}</p>
        </div>
        <div className="mt-6"><Toc body={page.body} /></div>
        <div className="mt-8"><Markdown fallbackAlt={page.h1}>{before}</Markdown></div>

        {page.faq.length > 0 && (
          <section className="mt-12">
            <h2 id="frequently-asked-questions" className="text-2xl font-bold">Frequently asked questions</h2>
            {faqIntro?.trim() && <div className="mt-3"><Markdown>{faqIntro.trim()}</Markdown></div>}
            <div className="mt-6"><FaqList items={page.faq} /></div>
          </section>
        )}
        {after && <div className="mt-12"><h2 id="next-steps" className="mb-4 text-2xl font-bold">Next steps</h2><Markdown>{after}</Markdown></div>}

        <section className="mt-14">
          <h2 className="text-2xl font-bold">All {pillar.label.toLowerCase()} guides</h2>
          <p className="mt-2 text-slate-600">{guides.length} in-depth articles on {pillar.keyword}.</p>
          <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {guides.map((g) => <li key={g.slug}><Link href={`/blog/${g.slug}`} className="text-sm text-slate-700 transition-colors hover:text-brand hover:underline">{g.title}</Link></li>)}
          </ul>
        </section>
      </article>
      <PillarLinks title="Keep reading" exclude={page.slug} />
      <CtaBand />
    </>
  )
}
