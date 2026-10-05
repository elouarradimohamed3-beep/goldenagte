import type { Metadata } from 'next'
import { MULTI, PLANS } from '@/lib/site'
import { PlanCard } from '@/components/plan-card'

export const metadata: Metadata = { title: 'Plans and pricing', alternates: { canonical: '/plans' } }

export default function Plans() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold">Plans and pricing</h1>
      <p className="mt-3 text-center text-white/70">Every plan includes the full channel and on-demand library.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}</div>
      <h2 className="mt-16 text-center text-3xl font-bold">Watch on more screens</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{MULTI.map((p) => <PlanCard key={p.id} plan={p} />)}</div>
      <p className="mt-8 text-center text-sm text-white/60">Need more than five screens? Contact us for a custom plan.</p>
    </div>
  )
}
