import type { Metadata } from 'next'
import Link from 'next/link'
import { Baby, Clapperboard, Crown, ShieldCheck, Trophy, Gift } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About us: a trusted IPTV provider',
  description: 'Golden Gate IPTV delivers premium live TV and on-demand streaming with reliable servers, wide device support and 24/7 customer care.',
  alternates: { canonical: '/about' },
}

const PLANS = [
  { Icon: Baby, title: 'Family plan', body: 'Made for households with different tastes: several simultaneous connections and a full range of entertainment, from kids to movies.' },
  { Icon: Trophy, title: 'Sports coverage', body: 'Never miss a game, with international leagues, tournaments and big sporting events from around the world.' },
  { Icon: Clapperboard, title: 'Movies and series', body: 'Thousands of on-demand movies and series, from new releases to timeless classics, ready when you are.' },
  { Icon: Gift, title: 'Free trial', body: 'Try the service before you commit. Request a short trial and see the quality for yourself, with no commitment.' },
  { Icon: ShieldCheck, title: 'Money-back guarantee', body: 'Buy with confidence. If the service is not right for you, ask for a refund within the refund window.' },
  { Icon: Crown, title: '2-year plan', body: 'The biggest saving: our full lineup for two years at the lowest monthly price.' },
]

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-soft to-white px-4 pt-36 pb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">About us</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">A trusted IPTV provider</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Golden Gate IPTV delivers premium live TV and on-demand streaming to viewers in the USA and worldwide. We combine reliable technology, a wide channel and movie selection and friendly support, so watching is simple.</p>
        <Link href="/#plans" className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">See pricing</Link>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">Our journey towards premium entertainment</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="card-hover glass spot group h-full rounded-3xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"><Icon size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
