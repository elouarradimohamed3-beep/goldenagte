import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Counter } from './counter'
import { DeviceMockup } from './device-mockup'
import { rich } from '@/lib/i18n/rich'
import type { Dict } from '@/lib/i18n/en'

export function Hero({ t, home = '/' }: { t: Pick<Dict, 'hero' | 'stats'>; home?: string }) {
  const { hero, stats } = t
  const link = (href: string, text: string) => <Link href={href} className="font-semibold text-brand hover:underline">{text}</Link>
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 pt-32 pb-16 sm:pt-40">
      <div className="bg-dots absolute inset-0 -z-10" />
      <div className="orb absolute -top-24 start-[8%] -z-10 size-96 rounded-full bg-blue-300/30 blur-[100px]" />
      <div className="orb absolute top-40 end-[4%] -z-10 size-96 rounded-full bg-indigo-300/30 blur-[110px]" style={{ animationDelay: '-8s' }} />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="fade-up-stagger">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">{hero.badge}</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">{hero.h1}</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">{rich(hero.p, { sub: link('/iptv-subscription', hero.sub), prem: link('/iptv-premium', hero.prem), usa: link('/iptv-usa', hero.usa) })}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`${home === '/' ? '' : home}/#plans`.replace('//', '/')} className="btn-shine pulse-ring press group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark">{hero.subscribe} <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" /></Link>
            <Link href="/trial" className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:border-brand hover:text-brand">{hero.trial}</Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {hero.checks.map((c) => <li key={c} className="flex items-center gap-2"><Check size={16} className="text-brand" />{c}</li>)}
          </ul>
        </div>
        <div className="pop-in pb-10" dir="ltr" style={{ animationDelay: '.3s' }}><DeviceMockup /></div>
      </div>

      <dl className="mx-auto mt-20 grid max-w-6xl grid-cols-2 divide-slate-200 rounded-2xl border border-slate-200 bg-white lg:grid-cols-4 lg:divide-x rtl:lg:divide-x-reverse">
        {stats.map((s) => (
          <div key={s.label} className="lift p-6 text-center">
            <dt className="text-3xl font-bold text-ink sm:text-4xl" dir="ltr"><Counter to={s.to} suffix={s.suffix} /></dt>
            <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
