import { PlansGrid } from './plans-grid'
import { Reveal } from './reveal'
import { en } from '@/lib/i18n/dicts'
import type { Dict } from '@/lib/i18n/en'

export function PricingSection({ as: H = 'h2', id = 'plans', t = en.plans }: { as?: 'h1' | 'h2'; id?: string; t?: Dict['plans'] }) {
  return (
    <section id={id} className="bg-ink pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-sky-300">{t.eyebrow}</p>
          <H className="mt-3 text-3xl font-bold !text-white sm:text-4xl">{t.title}</H>
          <p className="mt-4 text-slate-300">{t.intro}</p>
        </Reveal>
        <PlansGrid t={t} />
      </div>
    </section>
  )
}
