import { PlansGrid } from './plans-grid'
import { Reveal } from './reveal'

export function PricingSection({ as: H = 'h2', id = 'plans' }: { as?: 'h1' | 'h2'; id?: string }) {
  return (
    <section id={id} className="bg-ink pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-sky-300">Pricing</p>
          <H className="mt-3 text-3xl font-bold !text-white sm:text-4xl">Choose your IPTV subscription plan</H>
          <p className="mt-4 text-slate-300">Every plan includes the full channel and on-demand library, free updates and a 7-day refund.</p>
        </Reveal>
        <PlansGrid />
      </div>
    </section>
  )
}
