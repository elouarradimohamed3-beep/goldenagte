import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Layers, Library, Workflow } from 'lucide-react'
import { RESELLER_FAQ, RESELLER_INCLUDES, RESELLER_PACKAGES, RESELLER_STEPS, RESELLER_WHY, waLink } from '@/lib/site'
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

      <Section id="packages" tone="soft" eyebrow="Credit packages" title="Choose your reseller package" intro="Buy credits in bulk and sell subscriptions at the price you choose.">
        <div className="grid gap-6 md:grid-cols-3">
          {RESELLER_PACKAGES.map((p, i) => (
            <Reveal key={p.credits} delay={i * 100} className="h-full">
              <div className={`card-hover relative flex h-full flex-col rounded-3xl bg-white p-7 ${i === 1 ? 'glow-border' : 'glass spot'}`}>
                <h3 className="text-lg font-semibold">{p.credits} credits</h3>
                <p className="mt-4 flex items-start gap-1 text-ink"><span className="mt-2 text-xl text-slate-500">$</span><span className="font-display text-5xl font-extrabold">{p.price}</span></p>
                <ul className="my-6 space-y-2.5 text-sm text-slate-600">
                  {RESELLER_INCLUDES.map((x) => <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{x}</li>)}
                </ul>
                <a href={waLink(`goldengateiptv.com - Reseller ${p.credits} Credits - ${p.price} USD`)} target="_blank" rel="noopener noreferrer" className={`mt-auto rounded-full py-3 text-center font-semibold transition ${i === 1 ? 'bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark' : 'bg-brand-soft text-brand hover:bg-brand hover:text-white'}`}>Buy now</a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

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
