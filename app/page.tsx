import { Activity, Cable, Cpu, Globe2, Headphones, MonitorSmartphone, Server, Tv2, Zap, Layers, Film, Gauge, Smartphone, Rewind } from 'lucide-react'
import { FEATURE_ARTICLES, INFRA, LONG_ARTICLES, WHY } from '@/lib/site'
import { Hero } from '@/components/hero'
import { PlansGrid } from '@/components/plans-grid'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'

const WHY_ICONS = [Zap, MonitorSmartphone, Tv2, Server, Headphones, Gauge]
const INFRA_ICONS = [Server, Activity, Globe2, Cpu]
const FEAT_ICONS = [Gauge, Layers, Film]
const LONG_ICONS = [Smartphone, Tv2, Rewind]

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="plans" eyebrow="Pricing" title="Choose your IPTV subscription plan" intro="Every plan includes the full channel and on-demand library, free updates and a 7-day refund.">
        <PlansGrid />
      </Section>

      <Section eyebrow="Why us" title="No more buffering, no more freezing">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((f, i) => { const I = WHY_ICONS[i]; return (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card-hover glass group h-full rounded-3xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-gold/15 text-gold transition group-hover:scale-110 group-hover:bg-gold group-hover:text-black"><I size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.body}</p>
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
              <article className="card-hover glass rounded-3xl p-7">
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
              <article className="card-hover relative h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-panel to-ink p-8">
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
              <div className="glass animate-float relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl" style={{ animationDelay: `${-i * 2}s` }}>
                <div className="animate-drift absolute size-60 rounded-full bg-gold/25 blur-[80px]" />
                <I className="relative text-gold" size={96} strokeWidth={1.2} />
              </div>
            </Reveal>
          </div>
        )})}
      </section>

      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions about IPTV subscriptions">
        <FaqList />
      </Section>

      <CtaBand />
    </>
  )
}
