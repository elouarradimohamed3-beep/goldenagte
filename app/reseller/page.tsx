import type { Metadata } from 'next'
import { PillarLinks } from '@/components/pillar-links'
import Image from 'next/image'
import { Check, Layers, Library, Workflow } from 'lucide-react'
import { SITE, RESELLER_FAQ, RESELLER_INCLUDES, RESELLER_PACKAGES, RESELLER_STEPS, RESELLER_WHY, waLink } from '@/lib/site'
import { Price, OtherCurrencies } from '@/components/price'
import { OrderLink } from '@/components/order-link'
import { CurrencySwitcher } from '@/components/currency-switcher'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: { absolute: 'IPTV Reseller Program: Buy Credits, Sell Subscriptions' },
  description: 'Become an IPTV reseller in the USA, Canada and the UK. Buy credits from $329, get your own panel and sell IPTV subscriptions with 24/7 support.',
  alternates: { canonical: '/reseller' },
}

const WHY_ICONS = [Layers, Library, Workflow]
const START = waLink(`Hi! I need more info about the reseller program on ${SITE.host}`)

export default function Reseller() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 pt-32 pb-16 sm:pt-40">
        <div className="bg-dots absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-6xl">Best IPTV reseller in the <span className="text-brand">USA, CA and UK</span></h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">Become an IPTV reseller today. Earn real profit with a turnkey solution: premium content, strong margins and no technical hassle. Join resellers building a business with us.</p>
            <a href={START} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-lg bg-brand px-8 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark">Start your IPTV business</a>
          </div>
          <Reveal from="right"><Image src="/images/reseller-office.webp" alt="A smiling entrepreneur on a phone call at a desk with a customer dashboard on screen" width={1408} height={768} priority className="mx-auto w-full max-w-xl rounded-2xl object-cover shadow-2xl" /></Reveal>
        </div>
      </section>

      <section id="packages" className="bg-ink py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-sky-300">Credit packages</p>
            <h2 className="mt-3 text-3xl font-bold !text-white sm:text-4xl">Choose your reseller package</h2>
            <p className="mt-4 text-slate-300">Buy credits in bulk and sell subscriptions at the price you choose.</p>
            <div className="mt-6"><CurrencySwitcher tone="dark" note /></div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {RESELLER_PACKAGES.map((p, i) => (
              <Reveal key={p.credits} delay={i * 80} className="h-full">
                <div className={`relative flex h-full flex-col rounded-2xl bg-white p-7 text-slate-600 shadow-sm transition-shadow hover:shadow-xl ${i === 1 ? 'ring-2 ring-brand' : 'ring-1 ring-slate-200'}`}>
                  {i === 1 && <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Most popular</span>}
                  <h3 className="text-lg font-semibold text-ink">{p.credits} credits</h3>
                  <div className="mt-4 text-ink"><Price usd={p.price} /></div>
                  <p className="mt-1"><OtherCurrencies usd={p.price} /></p>
                  <hr className="my-6 border-slate-200" />
                  <ul className="mb-8 flex-1 space-y-3 text-sm">
                    {RESELLER_INCLUDES.map((x) => <li key={x} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{x}</li>)}
                  </ul>
                  <OrderLink order={`${SITE.host} - Reseller ${p.credits} Credits - ${p.price} USD`} usd={p.price} className={`rounded-lg py-3 text-center font-semibold transition-colors ${i === 1 ? 'bg-brand text-white hover:bg-brand-dark' : 'border border-brand text-brand hover:bg-brand hover:text-white'}`}>Subscribe now</OrderLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Why us" title="Why choose our IPTV reseller program?" intro="A profitable reseller opportunity with strong margins, 24/7 support and modern technology.">
        <div className="grid gap-5 md:grid-cols-3">
          {RESELLER_WHY.map((w, i) => { const I = WHY_ICONS[i]; return (
            <Reveal key={w.title} delay={i * 100}>
              <div className="lift glass spot group h-full rounded-2xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"><I size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.body}</p>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section tone="soft" eyebrow="How it works" title="How our IPTV reseller program works">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="left"><Image src="/images/reseller-diagram.webp" alt="Illustration of the reseller flow: customer orders online, credits move to the reseller, and the service is delivered" width={1024} height={1024} className="mx-auto w-full max-w-md rounded-2xl shadow-xl" /></Reveal>
          <div className="space-y-6">
            {RESELLER_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-lg font-bold text-white">{i + 1}</span>
                  <div><h3 className="text-lg font-semibold">{s.title}</h3><p className="mt-1 text-slate-600">{s.body}</p></div>
                </div>
              </Reveal>
            ))}
            <a href={START} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-brand px-8 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark">Get started now</a>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="IPTV reseller FAQ: everything you need to know before getting started">
        <FaqList items={RESELLER_FAQ} />
      </Section>

      <PillarLinks />
      <CtaBand />
    </>
  )
}
