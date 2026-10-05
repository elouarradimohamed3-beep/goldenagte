import Link from 'next/link'
import { DEVICES, FAQ, FEATURE_ARTICLES, INFRA, LONG_ARTICLES, WHY } from '@/lib/site'
import { PlansGrid } from '@/components/plans-grid'
import { Section } from '@/components/section'

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">Best IPTV service provider in the USA: <span className="text-gold">stream live TV online</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Plans start at only $20 a month. Cancel any time.</p>
        <div className="mt-8"><Link href="#plans" className="rounded-full bg-gold px-6 py-3 font-semibold text-black hover:bg-gold-dark">Subscribe now</Link></div>
        <p className="mt-8 text-sm text-white/50">Supports all devices: {DEVICES.join(' · ')}</p>
      </section>

      <Section id="plans" title="Choose your IPTV subscription plan"><PlansGrid /></Section>

      <Section title="Why choose us">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-panel p-6">
              <h3 className="font-semibold text-gold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="#plans" className="rounded-full bg-gold px-6 py-3 font-semibold text-black">Subscribe now</Link></div>
      </Section>

      <Section title="How an IPTV service provider works">
        <div className="grid gap-4 sm:grid-cols-2">
          {INFRA.map((a) => (
            <article key={a.title} className="rounded-2xl border border-white/10 bg-panel p-6">
              <h3 className="font-semibold text-gold">{a.title}</h3>
              <p className="mt-2 text-sm text-white/70">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="What you get">
        <div className="grid gap-4 lg:grid-cols-3">
          {FEATURE_ARTICLES.map((a) => (
            <article key={a.n} className="rounded-2xl border border-white/10 bg-panel p-6">
              <h3 className="font-semibold"><span className="text-gold">{a.n}.</span> {a.title}</h3>
              <p className="mt-2 text-sm text-white/70">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {LONG_ARTICLES.map((a) => (
        <Section key={a.title} title={a.title}>
          <article className="mx-auto max-w-3xl space-y-4 text-white/75">
            {a.body.map((p) => <p key={p}>{p}</p>)}
            <div className="pt-2 text-center"><Link href="#plans" className="rounded-full bg-gold px-6 py-3 font-semibold text-black">Sign up now</Link></div>
          </article>
        </Section>
      ))}

      <Section title="Frequently asked questions about IPTV subscriptions">
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="rounded-xl border border-white/10 bg-panel p-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  )
}
