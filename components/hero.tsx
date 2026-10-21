import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Counter } from './counter'
import { TrialButton } from './trial-button'
import { rich } from '@/lib/i18n/rich'
import type { Dict } from '@/lib/i18n/en'

export function Hero({ t, home = '/' }: { t: Pick<Dict, 'hero' | 'stats'>; home?: string }) {
  const { hero, stats } = t
  const link = (href: string, text: string) => <Link href={href} className="text-zinc-50 underline decoration-brand/60 underline-offset-4 transition-colors hover:text-brand">{text}</Link>
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <Image src="/images/family-living-room.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[70%_center] opacity-55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/20 rtl:bg-gradient-to-l" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pt-40 pb-20 sm:pt-48 sm:pb-28">
        <div className="fade-up-stagger max-w-2xl">
          <p className="eyebrow">{hero.badge}</p>
          <h1 className="mt-7 text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem]">{hero.h1}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-300">{rich(hero.p, { sub: link('/iptv-subscription', hero.sub), prem: link('/iptv-premium', hero.prem), usa: link('/iptv-usa', hero.usa) })}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={`${home === '/' ? '' : home}/#plans`.replace('//', '/')} className="press group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-ink transition-colors hover:bg-[#d8b33a]">{hero.subscribe} <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" /></Link>
            <TrialButton label={hero.trial} className="press rounded-full border border-white/25 px-8 py-4 font-medium text-zinc-100 transition-colors hover:border-brand hover:text-brand" />
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-400">
            {hero.checks.map((c) => <li key={c} className="flex items-center gap-2.5"><span className="size-1.5 rounded-full bg-brand" />{c}</li>)}
          </ul>
        </div>
      </div>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 border-t hairline lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-4 py-8 text-center ${i ? 'lg:border-s hairline' : ''}`}>
            <dt className="font-display text-4xl text-zinc-50 sm:text-5xl" dir="ltr"><Counter to={s.to} suffix={s.suffix} /></dt>
            <dd className="mt-2 text-xs tracking-[.2em] text-zinc-500 uppercase">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
