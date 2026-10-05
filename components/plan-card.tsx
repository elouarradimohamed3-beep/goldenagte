import Link from 'next/link'
import { PLAN_INCLUDES, type Plan } from '@/lib/site'

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`flex flex-col rounded-2xl border p-6 ${plan.badge ? 'border-gold bg-panel' : 'border-white/10 bg-panel'}`}>
      {plan.badge && <span className="mb-2 w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-black">{plan.badge}</span>}
      <h3 className="text-lg font-semibold">{plan.label}</h3>
      <p className="mt-3 text-4xl font-bold text-gold">${plan.price}</p>
      <p className="text-sm text-white/60">{plan.per}</p>
      <ul className="my-5 space-y-2 text-sm">
        <li>✓ {plan.connections} {plan.connections === 1 ? 'screen' : 'screens'} at once</li>
        {PLAN_INCLUDES.map((i) => <li key={i}>✓ {i}</li>)}
      </ul>
      <Link href={`/contact?plan=${plan.id}`} className="mt-auto rounded-full bg-gold py-3 text-center font-semibold text-black hover:bg-gold-dark">Order now</Link>
    </div>
  )
}
