import { Check } from 'lucide-react'
import { PLAN_INCLUDES, waLink, type Plan } from '@/lib/site'

export function PlanCard({ plan }: { plan: Plan; index?: number }) {
  const hot = plan.badge === 'Best value'
  return (
    <div className={`relative flex h-full flex-col rounded-2xl bg-white p-7 text-slate-600 shadow-sm transition-shadow hover:shadow-xl ${hot ? 'ring-2 ring-brand' : 'ring-1 ring-slate-200'}`}>
      {plan.badge && <span className={`absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold text-white ${hot ? 'bg-brand' : 'bg-ink'}`}>{plan.badge === 'World Cup' ? 'World Cup special' : 'Most popular'}</span>}
      <h3 className="text-lg font-semibold text-ink">{plan.label}</h3>
      <p className="mt-4 flex items-baseline gap-1 text-ink"><span className="text-xl font-semibold text-slate-500">$</span><span className="text-5xl font-bold tracking-tight">{plan.price}</span></p>
      <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">{plan.per}{plan.save ? <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">Save {plan.save}%</span> : null}</p>
      <hr className="my-6 border-slate-200" />
      <ul className="mb-8 flex-1 space-y-3 text-sm">
        <li className="flex gap-2.5 font-semibold text-ink"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{plan.connections} {plan.connections === 1 ? 'connection' : 'connections'}</li>
        {PLAN_INCLUDES.map((i) => <li key={i} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{i}</li>)}
      </ul>
      <a href={waLink(plan.order)} target="_blank" rel="noopener noreferrer" className={`rounded-lg py-3 text-center font-semibold transition-colors ${hot ? 'bg-brand text-white hover:bg-brand-dark' : 'border border-brand text-brand hover:bg-brand hover:text-white'}`}>Subscribe now</a>
    </div>
  )
}
