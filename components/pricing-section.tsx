import { PlansGrid } from './plans-grid'
import { Reveal } from './reveal'

export function PricingSection({ as: H = 'h2', id = 'plans' }: { as?: 'h1' | 'h2'; id?: string }) {
  return (
    <section id={id} className="relative isolate overflow-hidden bg-black pt-28 pb-24 text-white">
      <div className="animate-drift absolute -top-32 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-neon/15 blur-[130px]" />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1.2px, transparent 1.2px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 50% 20%, #000 20%, transparent 70%)' }} />
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-neon">Pricing</p>
          <H className="mt-3 font-display text-3xl font-extrabold !text-white sm:text-5xl">Choose your IPTV subscription plan</H>
          <p className="mt-4 text-white/70">Every plan includes the full channel and on-demand library, free updates and a 7-day refund.</p>
        </Reveal>
        <PlansGrid />
      </div>
    </section>
  )
}
