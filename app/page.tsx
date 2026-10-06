import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, X as XIcon, Gauge, Headphones, Layers, Film, MonitorSmartphone, Newspaper, Popcorn, Baby, Clapperboard, Mountain, Music2, Languages, Server, Trophy, Tv2, Zap, Activity, Globe2, Cpu } from 'lucide-react'
import { COMPARE, FAQ, FEATURE_ARTICLES, GENRES, INFRA, PLAN_TIERS, SITE, STEPS, WHY } from '@/lib/site'
import { getPosts } from '@/lib/posts'
import { Hero } from '@/components/hero'
import { PricingSection } from '@/components/pricing-section'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { ExploreTabs } from '@/components/explore-tabs'

const WHY_ICONS = [Zap, MonitorSmartphone, Tv2, Server, Headphones, Gauge]
const INFRA_ICONS = [Server, Activity, Globe2, Cpu]
const GENRE_ICONS = [Trophy, Newspaper, Clapperboard, Popcorn, Baby, Mountain, Music2, Languages]
const FEAT_ICONS = [Gauge, Layers, Film]

const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: SITE.name, url: SITE.url, logo: `${SITE.url}/images/logo.png` },
    { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    {
      '@type': 'Product', name: `${SITE.name} subscription`, description: 'IPTV subscription with live TV and on-demand movies and series.',
      offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: 7, highPrice: 297, offerCount: PLAN_TIERS.flatMap((t) => t.plans).length },
    },
    { '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <Hero />

      <section className="px-4 pb-4">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-brand">Supports all devices</p>
          <div className="glass rounded-2xl p-5">
            <Image src="/images/devices.webp" alt="Supported devices: iPhone, iPad, Mac, Android, Windows, Chrome, MAG, Roku, Samsung Smart TV, LG Smart TV and Linux" width={946} height={142} className="mx-auto h-auto w-full" />
          </div>
        </Reveal>
      </section>

      <Section eyebrow="Why us" title="No more buffering, no more freezing">
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl">
              <Image src="/images/kids-tv.webp" alt="Two young children watching a cartoon on TV in their playroom" width={1408} height={768} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold !text-white sm:text-3xl">TV the whole family can share</h3>
                <p className="mt-2 max-w-md text-white/80">Kids, sports, news and movies on every screen in the house, with up to five screens at the same time.</p>
              </div>
            </div>
          </Reveal>
          {WHY.slice(0, 5).map((f, i) => { const I = WHY_ICONS[i]; return (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card-hover glass spot group h-full rounded-2xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"><I size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <PricingSection />

      <section className="relative isolate overflow-hidden">
        <Image src="/images/sports-family.webp" alt="A family laughing together on the sofa while watching live sports on a 4K TV" width={1408} height={768} className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent" />
        <Reveal className="mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <h2 className="max-w-xl text-3xl font-bold !text-white sm:text-5xl">Every game, every show, every room.</h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">Bring the whole family together with live sports, movies and kids&apos; shows in 4K, on as many as five screens at once.</p>
          <Link href="/#plans" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-brand shadow-xl transition ">See plans <ArrowRight size={18} /></Link>
        </Reveal>
      </section>

      <Section eyebrow="Get started" title="Watching in three simple steps">
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-8 right-[16%] left-[16%] hidden h-px border-t-2 border-dashed border-brand/30 md:block" />
          {STEPS.map((st, i) => (
            <Reveal key={st.title} delay={i * 120}>
              <div className="relative text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-ink text-xl font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{st.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-slate-600">{st.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Content" title="Something for everyone in the house" intro="Live channels and on-demand titles, organized by genre so you find what you want fast.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GENRES.map((g, i) => { const I = GENRE_ICONS[i]; return (
            <Reveal key={g.name} delay={(i % 4) * 80}>
              <div className="card-hover group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink p-6 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-ink" />
                <I className="absolute -right-3 -bottom-3 size-28 text-white/[.06]" strokeWidth={1.2} />
                <span className="relative grid size-11 place-items-center rounded-lg bg-white/10 text-sky-300"><I size={22} /></span>
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-lg font-semibold !text-white">{g.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{g.body}</p>
                </div>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow="Explore" title="Built for the way you watch">
        <ExploreTabs />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {FEATURE_ARTICLES.map((a, i) => { const I = FEAT_ICONS[i]; return (
            <Reveal key={a.n} delay={i * 100}>
              <article className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><I size={22} /></span>
                <div><h3 className="font-semibold">{a.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{a.body}</p></div>
              </article>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Behind the screen" title="How an IPTV service provider works" intro="Four building blocks decide whether your stream is smooth or stuttering.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INFRA.map((a, i) => { const I = INFRA_ICONS[i]; return (
            <Reveal key={a.title} delay={i * 90}>
              <article className="card-hover glass spot h-full rounded-2xl p-6">
                <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-xl bg-brand text-white"><I size={20} /></span><span className="text-3xl font-black text-slate-200">0{i + 1}</span></div>
                <h3 className="mt-4 font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
              </article>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow="Customers" title="Our happy clients" intro="Messages from customers who contacted us on WhatsApp.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <Image src={`/images/chat-${n}.webp`} alt={`Customer WhatsApp conversation ${n}`} width={569} height={1011} className="h-auto w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Compare" title="Why people leave cable">
        <Reveal>
          <div className="glass mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <div className="grid grid-cols-3 bg-slate-50 text-sm font-semibold"><span className="p-4" /><span className="p-4 text-slate-500">Traditional cable</span><span className="p-4 text-brand">Golden Gate IPTV</span></div>
            {COMPARE.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-3 border-t border-slate-100 text-sm transition-colors hover:bg-brand-soft/40">
                <span className="p-4 font-medium text-ink">{k}</span>
                <span className="flex gap-2 p-4 text-slate-500"><XIcon size={16} className="mt-0.5 shrink-0 text-red-400" />{a}</span>
                <span className="flex gap-2 p-4 text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />{b}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Guides" title="Learn more about IPTV">
        <div className="grid gap-5 md:grid-cols-3">
          {getPosts().slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link href={`/blog/${p.slug}`} className="card-hover glass spot group flex h-full flex-col rounded-2xl p-7">
                <p className="text-xs text-slate-500">{p.readMinutes} min read</p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand">Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="faq" tone="soft" eyebrow="FAQ" title="Frequently asked questions about IPTV subscriptions">
        <FaqList />
      </Section>

      <CtaBand />
    </>
  )
}
