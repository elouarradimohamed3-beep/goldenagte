import { Check } from 'lucide-react'
import { PLAN_INCLUDES, waLink, type Plan } from '@/lib/site'

export function PlanCard({ plan }: { plan: Plan }) {
  const hot = plan.badge === 'Best value'
  return (
    <div className={`card-hover relative flex h-full flex-col rounded-3xl bg-white p-7 ${hot ? 'glow-border' : 'glass spot'}`}>
      {plan.badge && <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-bold text-white ${hot ? 'bg-brand' : 'bg-sun'}`}>{plan.badge === 'World Cup' ? '⚽ World Cup' : plan.badge}</span>}
      <h3 className="text-lg font-semibold">{plan.label}</h3>
      <p className="mt-4 flex items-start gap-1 text-ink"><span className="mt-2 text-xl text-slate-500">$</span><span className="font-display text-5xl font-extrabold">{plan.price}</span></p>
      <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">{plan.per}{plan.save ? <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">Save {plan.save}%</span> : null}</p>
      <ul className="my-6 space-y-2.5 text-sm text-slate-600">
        <li className="flex gap-2 font-semibold text-ink"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{plan.connections} {plan.connections === 1 ? 'connection' : 'connections'}</li>
        {PLAN_INCLUDES.map((i) => <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{i}</li>)}
      </ul>
      <a href={waLink(plan.order)} target="_blank" rel="noopener noreferrer" className={`mt-auto rounded-full py-3 text-center font-semibold transition ${hot ? 'bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark' : 'bg-brand-soft text-brand hover:bg-brand hover:text-white'}`}>Order now</a>
    </div>
  )
}
