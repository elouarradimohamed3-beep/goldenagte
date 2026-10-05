import { MULTI, PLANS } from '@/lib/site'
import { PlanCard } from './plan-card'

export function PlansGrid() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}</div>
      <h3 className="mt-14 mb-6 text-center text-2xl font-bold">Premium plans</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{MULTI.map((p) => <PlanCard key={p.id} plan={p} />)}</div>
      <p className="mt-8 text-center text-sm text-white/60">Need more than 5 devices? <a href="/contact" className="text-gold underline">Contact support</a> for a tailored multi-device plan.</p>
    </>
  )
}
