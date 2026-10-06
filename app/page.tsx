import { Activity, Cable, Cpu, Globe2, Headphones, MonitorSmartphone, Server, Tv2, Zap, Layers, Film, Gauge, Smartphone, Rewind } from 'lucide-react'
import { Check, X as XIcon, Trophy, Newspaper, Clapperboard, Popcorn, Baby, Mountain, Music2, Languages } from 'lucide-react'
import { FAQ, PLAN_TIERS, SITE, COMPARE, FEATURE_ARTICLES, GENRES, INFRA, LONG_ARTICLES, STEPS, WHY } from '@/lib/site'
import Image from 'next/image'
import { Hero } from '@/components/hero'
import { PlansGrid } from '@/components/plans-grid'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'

const WHY_ICONS = [Zap, MonitorSmartphone, Tv2, Server, Headphones, Gauge]
const INFRA_ICONS = [Server, Activity, Globe2, Cpu]
const FEAT_ICONS = [Gauge, Layers, Film]
const GENRE_ICONS = [Trophy, Newspaper, Clapperboard, Popcorn, Baby, Mountain, Music2, Languages]
const LONG_ICONS = [Smartphone, Tv2, Rewind]

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

      <section className="mx-auto mt-4 max-w-4xl px-4">
        <Reveal>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gold">Supports all devices</p>
          <div className="rounded-3xl bg-white p-5 shadow-2xl shadow-gold/10">
            <Image src="/images/devices.webp" alt="Supported devices: iPhone, iPad, Mac, Android, Windows, Chrome, MAG, Roku, Samsung Smart TV, LG Smart TV and Linux" width={946} height={142} className="mx-auto h-auto w-full" />
          </div>
        </Reveal>
      </section>

      <Section id="plans" eyebrow="Pricing" title="Choose your IPTV subscription plan" intro="Every plan includes the full channel and on-demand library, free updates and a 7-day refund.">
        <PlansGrid />
      </Section>

      <Section eyebrow="Why us" title="No more buffering, no more freezing">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((f, i) => { const I = WHY_ICONS[i]; return (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card-hover glass spot group h-full rounded-3xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-gold/15 text-gold transition group-hover:scale-110 group-hover:bg-gold group-hover:text-black"><I size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.body}</p>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow="Get started" title="Watching in three simple steps">
        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="absolute top-8 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-gold/0 via-gold to-gold/0 md:block" />
          {STEPS.map((st, i) => (
            <Reveal key={st.title} delay={i * 120}>
              <div className="relative text-center">
                <span className="animate-pulse-ring mx-auto grid size-16 place-items-center rounded-full bg-gold text-2xl font-extrabold text-black">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{st.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-white/60">{st.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Content" title="Something for everyone in the house" intro="Live channels and on-demand titles, organized by genre so you find what you want fast.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GENRES.map((g, i) => { const I = GENRE_ICONS[i]; return (
            <Reveal key={g.name} delay={(i % 4) * 80}>
              <div className="card-hover glass spot group h-full rounded-3xl p-6">
                <I className="text-gold transition group-hover:scale-125 group-hover:-rotate-6" size={30} />
                <h3 className="mt-4 font-semibold">{g.name}</h3>
                <p className="mt-1 text-sm text-white/55">{g.body}</p>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow="Behind the screen" title="How an IPTV service provider works" intro="Four building blocks decide whether your stream is smooth or stuttering.">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent md:left-1/2" />
          {INFRA.map((a, i) => { const I = INFRA_ICONS[i]; const right = i % 2 === 1; return (
            <Reveal key={a.title} from={right ? 'right' : 'left'} className={`relative mb-10 pl-16 md:w-1/2 md:pl-0 ${right ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
              <span className={`animate-pulse-ring absolute top-5 left-0 grid size-12 place-items-center rounded-full bg-gold text-black ${right ? 'md:left-[-1.5rem]' : 'md:left-auto md:right-[-1.5rem]'}`}><I size={20} /></span>
              <article className="card-hover glass spot rounded-3xl p-7">
                <p className="text-xs font-bold tracking-widest text-gold">STEP {i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{a.body}</p>
              </article>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow="What you get" title="Built for the way you watch">
        <div className="grid gap-5 lg:grid-cols-3">
          {FEATURE_ARTICLES.map((a, i) => { const I = FEAT_ICONS[i]; return (
            <Reveal key={a.n} delay={i * 100}>
              <article className="card-hover spot relative h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-panel to-ink p-8">
                <span className="absolute -top-4 right-4 text-[7rem] font-black leading-none text-white/[0.04]">{a.n}</span>
                <I className="text-gold" size={28} />
                <h3 className="mt-5 text-xl font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{a.body}</p>
              </article>
            </Reveal>
          )})}
        </div>
      </Section>

      <section className="mx-auto mt-28 max-w-6xl space-y-24 px-4">
        {LONG_ARTICLES.map((a, i) => { const I = LONG_ICONS[i]; const flip = i % 2 === 1; return (
          <div key={a.title} className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <Reveal from={flip ? 'right' : 'left'}>
              <h2 className="text-3xl font-bold">{a.title}</h2>
              <div className="mt-5 space-y-4 text-white/65">{a.body.map((p) => <p key={p}>{p}</p>)}</div>
              <a href="#plans" className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:bg-gold-dark">Sign up now</a>
            </Reveal>
            <Reveal from={flip ? 'left' : 'right'} delay={120}>
              {i === 0 ? (
                <div className="animate-float relative overflow-hidden rounded-3xl border border-line">
                  <Image src="/images/family-tv.webp" alt="Two children watching live TV together in the living room" width={500} height={500} className="aspect-[4/3] w-full object-cover" />
                </div>
              ) : (
                <div className="glass animate-float relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl" style={{ animationDelay: `${-i * 2}s` }}>
                  <div className="animate-drift absolute size-60 rounded-full bg-gold/25 blur-[80px]" />
                  <I className="relative text-gold" size={96} strokeWidth={1.2} />
                </div>
              )}
            </Reveal>
          </div>
        )})}
      </section>

      <Section eyebrow="Customers" title="Our happy clients" intro="Messages from customers who contacted us on WhatsApp.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="card-hover overflow-hidden rounded-2xl border border-line bg-white">
                <Image src={`/images/chat-${n}.webp`} alt={`Customer WhatsApp conversation ${n}`} width={569} height={1011} className="h-auto w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Compare" title="Why people leave cable">
        <Reveal>
          <div className="glass mx-auto max-w-4xl overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-white/5 text-sm font-semibold"><span className="p-4" /><span className="p-4 text-white/60">Traditional cable</span><span className="p-4 text-gold">Golden Gate IPTV</span></div>
            {COMPARE.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-[1fr_1fr_1fr] border-t border-line text-sm transition hover:bg-white/[0.03]">
                <span className="p-4 font-medium">{k}</span>
                <span className="flex gap-2 p-4 text-white/55"><XIcon size={16} className="mt-0.5 shrink-0 text-red-400" />{a}</span>
                <span className="flex gap-2 p-4"><Check size={16} className="mt-0.5 shrink-0 text-emerald-400" />{b}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions about IPTV subscriptions">
        <FaqList />
      </Section>

      <CtaBand />
    </>
  )
}
