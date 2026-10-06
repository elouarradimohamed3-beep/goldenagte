import type { Metadata } from 'next'
import Image from 'next/image'
import { CircleCheck, Layers, Library, Workflow } from 'lucide-react'
import { RESELLER_FAQ, RESELLER_INCLUDES, RESELLER_PACKAGES, RESELLER_STEPS, RESELLER_WHY, waLink } from '@/lib/site'
import { AnimatedPrice } from '@/components/animated-price'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'IPTV reseller program',
  description: 'Become an IPTV reseller in the USA, Canada and the UK. Buy credits, get your own panel and sell subscriptions with 24/7 support.',
  alternates: { canonical: '/reseller' },
}

const WHY_ICONS = [Layers, Library, Workflow]
const START = waLink('Hi! I need more info about the reseller program on goldengateiptv.com')

export default function Reseller() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white px-4 pt-32 pb-16 sm:pt-40">
        <div className="bg-dots absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-6xl">Best IPTV reseller in the <span className="text-gradient">USA, CA and UK</span></h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">Become an IPTV reseller today. Earn real profit with a turnkey solution: premium content, strong margins and no technical hassle. Join resellers building a business with us.</p>
            <a href={START} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark">Start your IPTV business</a>
          </div>
          <Reveal from="right"><Image src="/images/reseller-office.webp" alt="A smiling entrepreneur on a phone call at a desk with a customer dashboard on screen" width={1408} height={768} priority className="mx-auto w-full max-w-xl rounded-3xl object-cover shadow-2xl" /></Reveal>
        </div>
      </section>

      <section id="packages" className="relative isolate overflow-hidden bg-black py-24 text-white">
        <div className="animate-drift absolute -top-32 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-neon/15 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-neon">Credit packages</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold !text-white sm:text-4xl">Choose your reseller package</h2>
            <p className="mt-4 text-white/70">Buy credits in bulk and sell subscriptions at the price you choose.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {RESELLER_PACKAGES.map((p, i) => (
              <Reveal key={p.credits} delay={i * 100} className="h-full">
                <div className={`neon-card plan-card flex h-full flex-col rounded-[2rem] transition duration-300 hover:-translate-y-2 ${i === 1 ? 'neon-hot' : ''}`}>
                  <div className="shine border-b border-white/15 px-7 pt-7 pb-6 text-center">
                    <h3 className="font-display text-xl font-bold !text-white">{p.credits} credits</h3>
                    <p className="mt-4 flex items-start justify-center gap-1"><span className="mt-2 text-xl font-bold text-white/80">$</span><span className="font-display text-6xl font-extrabold tabular-nums text-white"><AnimatedPrice value={p.price} /></span></p>
                  </div>
                  <ul className="flex-1 space-y-3 px-7 py-6 text-sm font-medium">
                    {RESELLER_INCLUDES.map((x, k) => <li key={x} className="feat flex items-center gap-2.5 border-b border-white/10 pb-3 last:border-0" style={{ ['--i' as string]: k }}><CircleCheck size={18} className="shrink-0 text-neon" />{x}</li>)}
                  </ul>
                  <div className="px-7 pb-7"><a href={waLink(`goldengateiptv.com - Reseller ${p.credits} Credits - ${p.price} USD`)} target="_blank" rel="noopener noreferrer" className="shine neon-btn block py-3.5 text-center font-extrabold transition hover:-translate-y-0.5">Subscribe now</a></div>
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
              <div className="card-hover glass spot group h-full rounded-3xl p-7">
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
          <Reveal from="left"><Image src="/images/reseller-diagram.webp" alt="Illustration of the reseller flow: customer orders online, credits move to the reseller, and the service is delivered" width={1024} height={1024} className="mx-auto w-full max-w-md rounded-3xl shadow-xl" /></Reveal>
          <div className="space-y-6">
            {RESELLER_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-fuchsia-500 font-display text-lg font-extrabold text-white shadow-lg shadow-brand/30">{i + 1}</span>
                  <div><h3 className="text-lg font-semibold">{s.title}</h3><p className="mt-1 text-slate-600">{s.body}</p></div>
                </div>
              </Reveal>
            ))}
            <a href={START} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">Get started now</a>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="IPTV reseller FAQ: everything you need to know before getting started">
        <FaqList items={RESELLER_FAQ} />
      </Section>

      <CtaBand />
    </>
  )
}
