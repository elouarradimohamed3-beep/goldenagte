import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Counter } from './counter'
import { DeviceMockup } from './device-mockup'

const STATS: [number, string, string][] = [[34000, '+', 'Live channels'], [130, 'K+', 'Movies and series'], [7, '-day', 'Refund window'], [24, '/7', 'Support']]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 pt-32 pb-16 sm:pt-40">
      <div className="bg-dots absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">Plans from $20 a month · cancel any time</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">The best IPTV service provider in the USA</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">Stream live TV, movies and series in HD and 4K on your Smart TV, Fire Stick, phone or computer. Get your login in minutes and watch on every screen you own.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#plans" className="group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark">Subscribe now <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" /></Link>
            <Link href="/free-trial" className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:border-brand hover:text-brand">Request a trial</Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {['7-day refund', 'Instant activation', '24/7 support'].map((t) => <li key={t} className="flex items-center gap-2"><Check size={16} className="text-brand" />{t}</li>)}
          </ul>
        </div>
        <div className="pb-10"><DeviceMockup /></div>
      </div>

      <dl className="mx-auto mt-20 grid max-w-6xl grid-cols-2 divide-slate-200 rounded-2xl border border-slate-200 bg-white lg:grid-cols-4 lg:divide-x">
        {STATS.map(([n, s, l]) => (
          <div key={l} className="p-6 text-center">
            <dt className="text-3xl font-bold text-ink sm:text-4xl"><Counter to={n} suffix={s} /></dt>
            <dd className="mt-1 text-sm text-slate-500">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
