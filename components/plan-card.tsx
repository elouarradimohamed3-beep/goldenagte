import Link from 'next/link'
import { Check } from 'lucide-react'
import { PLAN_INCLUDES, waLink, type Plan } from '@/lib/site'

export function PlanCard({ plan }: { plan: Plan }) {
  const hot = plan.badge === 'Best value'
  return (
    <div className={`card-hover relative flex h-full flex-col rounded-3xl p-7 ${hot ? 'glow-border bg-panel' : 'glass spot'}`}>
      {plan.badge && <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-bold ${hot ? 'bg-gold text-black' : 'bg-orange-500 text-white'}`}>{plan.badge === 'World Cup' ? '⚽ World Cup' : plan.badge}</span>}
      <h3 className="text-lg font-semibold">{plan.label}</h3>
      <p className="mt-4 flex items-start gap-1"><span className="mt-2 text-xl text-white/60">$</span><span className="text-5xl font-extrabold text-gold">{plan.price}</span></p>
      <p className="mt-1 flex items-center gap-2 text-sm text-white/50">{plan.per}{plan.save ? <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400">Save {plan.save}%</span> : null}</p>
      <ul className="my-6 space-y-2.5 text-sm text-white/75">
        <li className="flex gap-2 font-medium text-white"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{plan.connections} {plan.connections === 1 ? 'connection' : 'connections'}</li>
        {PLAN_INCLUDES.map((i) => <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{i}</li>)}
      </ul>
      <Link href={waLink(plan.order)} target="_blank" rel="noopener noreferrer" className={`mt-auto rounded-full py-3 text-center font-semibold transition ${hot ? 'bg-gold text-black hover:bg-gold-dark' : 'border border-gold/40 text-gold hover:bg-gold hover:text-black'}`}>Order now</Link>
    </div>
  )
}
