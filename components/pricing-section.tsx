import { PlansGrid } from './plans-grid'
import { Reveal } from './reveal'

export function PricingSection({ as: H = 'h2', id = 'plans' }: { as?: 'h1' | 'h2'; id?: string }) {
  return (
    <section id={id} className="relative bg-slate-50 pb-24">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-brand via-violet-600 to-fuchsia-600 grad-anim px-4 pt-28 pb-44 text-center">
        <div className="bg-dots absolute inset-0 -z-10 opacity-40 [mask-image:none]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.35) 1.2px, transparent 1.2px)' }} />
        <div className="animate-drift absolute -top-24 -left-16 -z-10 size-80 rounded-full bg-white/20 blur-[90px]" />
        <div className="animate-drift absolute -right-10 bottom-0 -z-10 size-96 rounded-full bg-amber-300/30 blur-[100px]" style={{ animationDelay: '-6s' }} />
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Pricing</p>
          <H className="mt-3 font-display text-3xl font-extrabold !text-white sm:text-5xl">Choose your IPTV subscription plan</H>
          <p className="mt-4 text-white/85">Every plan includes the full channel and on-demand library, free updates and a 7-day refund.</p>
        </Reveal>
      </div>
      <div className="relative z-10 mx-auto -mt-32 max-w-6xl px-4">
        <PlansGrid />
      </div>
    </section>
  )
}
