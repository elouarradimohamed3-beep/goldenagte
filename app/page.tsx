import Link from 'next/link'
import { DEVICES, FEATURES, PLANS } from '@/lib/site'
import { PlanCard } from '@/components/plan-card'

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">Live TV and movies on <span className="text-gold">every screen</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Plans from $20 a month. Cancel any time, with a seven-day refund if it is not for you.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/plans" className="rounded-full bg-gold px-6 py-3 font-semibold text-black hover:bg-gold-dark">See plans</Link>
          <Link href="/install" className="rounded-full border border-white/20 px-6 py-3 hover:border-gold">How to install</Link>
        </div>
        <p className="mt-8 text-sm text-white/50">Works on {DEVICES.join(' · ')}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Why people choose us</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-panel p-6">
              <h3 className="font-semibold text-gold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Pick a plan</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.slice(0, 3).map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>
        <p className="mt-6 text-center"><Link href="/plans" className="text-gold underline">Compare all plans</Link></p>
      </section>
    </>
  )
}
