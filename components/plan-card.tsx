import { Check } from 'lucide-react'
import { PLAN_INCLUDES, waLink, type Plan } from '@/lib/site'
import { AnimatedPrice } from './animated-price'

const HEADS = ['from-indigo-600 to-violet-600', 'from-violet-600 to-fuchsia-600', 'from-sky-600 to-indigo-600']

export function PlanCard({ plan, index = 0 }: { plan: Plan; index?: number }) {
  const hot = plan.badge === 'Best value'
  const head = hot ? 'from-fuchsia-600 via-rose-500 to-amber-500' : HEADS[index % HEADS.length]
  return (
    <div className={`plan-card card-hover group relative flex h-full flex-col overflow-visible rounded-3xl bg-white ${hot ? 'glow-border lg:scale-[1.04]' : 'glass'}`}>
      {plan.badge && <span className={`badge-bob absolute -top-3 right-5 z-10 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg ${hot ? 'bg-amber-500' : 'bg-fuchsia-600'}`}>{plan.badge === 'World Cup' ? '⚽ World Cup' : '★ ' + plan.badge}</span>}
      <div className={`shine grad-anim rounded-t-3xl bg-gradient-to-br ${head} px-7 pt-7 pb-6 text-white`}>
        <h3 className="font-display text-lg font-semibold !text-white/95">{plan.label}</h3>
        <p className="mt-3 flex items-start gap-1"><span className="mt-2 text-xl text-white/80">$</span><span className="font-display text-5xl font-extrabold tabular-nums"><AnimatedPrice value={plan.price} /></span></p>
        <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-white/85">{plan.per}{plan.save ? <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-bold backdrop-blur">Save {plan.save}%</span> : null}</p>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <ul className="mb-6 space-y-2.5 text-sm text-slate-600">
          <li className="feat flex gap-2 font-semibold text-ink" style={{ ['--i' as string]: 0 }}><Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />{plan.connections} {plan.connections === 1 ? 'connection' : 'connections'}</li>
          {PLAN_INCLUDES.map((i, k) => <li key={i} className="feat flex gap-2" style={{ ['--i' as string]: k + 1 }}><Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />{i}</li>)}
        </ul>
        <a href={waLink(plan.order)} target="_blank" rel="noopener noreferrer" className={`shine mt-auto rounded-full bg-gradient-to-r ${head} grad-anim py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl`}>Order now</a>
      </div>
    </div>
  )
}
