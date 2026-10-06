import { CircleCheck } from 'lucide-react'
import { PLAN_INCLUDES, waLink, type Plan } from '@/lib/site'
import { AnimatedPrice } from './animated-price'

export function PlanCard({ plan }: { plan: Plan; index?: number }) {
  const hot = plan.badge === 'Best value'
  return (
    <div className={`plan-card neon-card group relative flex h-full flex-col rounded-[2rem] text-white transition duration-300 hover:-translate-y-2 ${hot ? 'neon-hot lg:scale-[1.04]' : ''}`}>
      {plan.badge && <span className="badge-bob absolute -top-3 right-6 z-10 rounded-full bg-neon px-3 py-1 text-xs font-extrabold text-black shadow-lg">{plan.badge === 'World Cup' ? '⚽ World Cup' : '★ ' + plan.badge}</span>}
      <div className="shine border-b border-white/15 px-7 pt-7 pb-6 text-center">
        <h3 className="font-display text-xl font-bold !text-white">{plan.label}</h3>
        <p className="mt-4 flex items-start justify-center gap-1"><span className="mt-2 text-xl font-bold text-white/80">$</span><span className="font-display text-6xl font-extrabold tabular-nums text-white"><AnimatedPrice value={plan.price} /></span></p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm text-white/65">{plan.per}{plan.save ? <span className="rounded-full bg-neon px-2 py-0.5 text-xs font-extrabold text-black">Save {plan.save}%</span> : null}</p>
      </div>
      <ul className="flex-1 space-y-3 px-7 py-6 text-sm font-medium">
        <li className="feat flex items-center gap-2.5 border-b border-white/10 pb-3" style={{ ['--i' as string]: 0 }}><CircleCheck size={18} className="shrink-0 text-neon" />{plan.connections} {plan.connections === 1 ? 'connection' : 'connections'}</li>
        {PLAN_INCLUDES.map((i, k) => <li key={i} className="feat flex items-center gap-2.5 border-b border-white/10 pb-3 last:border-0" style={{ ['--i' as string]: k + 1 }}><CircleCheck size={18} className="shrink-0 text-neon" />{i}</li>)}
      </ul>
      <div className="px-7 pb-7">
        <a href={waLink(plan.order)} target="_blank" rel="noopener noreferrer" className="shine neon-btn block py-3.5 text-center font-extrabold transition hover:-translate-y-0.5">Subscribe now</a>
      </div>
    </div>
  )
}
