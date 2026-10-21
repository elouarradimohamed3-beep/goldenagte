import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Counter } from './counter'
import { DeviceMockup } from './device-mockup'
import { TrialButton } from './trial-button'
import { rich } from '@/lib/i18n/rich'
import type { Dict } from '@/lib/i18n/en'

export function Hero({ t, home = '/' }: { t: Pick<Dict, 'hero' | 'stats'>; home?: string }) {
  const { hero, stats } = t
  const link = (href: string, text: string) => <Link href={href} className="font-semibold text-accent hover:underline">{text}</Link>
  return (
    <section className="relative isolate overflow-hidden px-4 pt-32 pb-16 sm:pt-40">
      <div className="bg-grid-neon absolute inset-0 -z-10" />
      <div className="orb absolute -top-32 start-[-10%] -z-10 size-[34rem] rounded-full bg-[#e11d48]/25 blur-[120px]" />
      <div className="orb absolute top-24 end-[-8%] -z-10 size-[32rem] rounded-full bg-[#7c3aed]/25 blur-[120px]" style={{ animationDelay: '-8s' }} />
      <div className="orb absolute bottom-[-10rem] start-[30%] -z-10 size-[28rem] rounded-full bg-[#22d3ee]/15 blur-[120px]" style={{ animationDelay: '-4s' }} />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="fade-up-stagger">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 backdrop-blur"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_#22d3ee]" />{hero.badge}</p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{hero.h1}</h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-300">{rich(hero.p, { sub: link('/iptv-subscription', hero.sub), prem: link('/iptv-premium', hero.prem), usa: link('/iptv-usa', hero.usa) })}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`${home === '/' ? '' : home}/#plans`.replace('//', '/')} className="btn-shine press group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white">{hero.subscribe} <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" /></Link>
            <TrialButton label={hero.trial} className="press rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-bold text-white backdrop-blur transition-colors hover:border-accent hover:text-accent" />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            {hero.checks.map((c) => <li key={c} className="flex items-center gap-2"><Check size={16} className="text-accent" />{c}</li>)}
          </ul>
        </div>
        <div className="pop-in pb-10" dir="ltr" style={{ animationDelay: '.3s' }}><DeviceMockup /></div>
      </div>

      <dl className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="lift glass rounded-2xl p-6 text-center">
            <dt className="font-display text-3xl font-extrabold sm:text-4xl" dir="ltr"><span className="text-gradient-neon"><Counter to={s.to} suffix={s.suffix} /></span></dt>
            <dd className="mt-1 text-sm text-zinc-400">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
