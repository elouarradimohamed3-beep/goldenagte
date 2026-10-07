'use client'
import { Check } from 'lucide-react'
import { waLink, type Plan } from '@/lib/site'
import { Price, OtherCurrencies, PerMonth } from './price'
import { useCurrency } from './currency-provider'
import { convert } from '@/lib/currency'
import type { Dict } from '@/lib/i18n/en'

const MONTH_INDEX: Record<number, number> = { 0: 0, 1: 1, 3: 2, 6: 3, 12: 4, 24: 5 }

export function PlanCard({ plan, t }: { plan: Plan; t: Dict['plans']; index?: number }) {
  const { currency } = useCurrency()
  const hot = plan.badge === 'Best value'
  const isPremium = plan.id.startsWith('premium-')
  const label = isPremium ? t.premium[plan.connections - 1] : t.durations[MONTH_INDEX[plan.months ?? 1]]
  const per = plan.months === 0 ? t.oneDay : plan.months === 1 ? t.billed : plan.months && plan.months > 1 ? null : t.fullYear
  return (
    <div className={`relative flex h-full flex-col rounded-2xl bg-white p-7 text-slate-600 shadow-sm transition-shadow hover:shadow-xl lift ${hot ? 'pulse-ring ring-2 ring-brand' : 'ring-1 ring-slate-200'}`}>
      {plan.badge && <span className={`absolute -top-3 start-7 rounded-full px-3 py-1 text-xs font-semibold text-white ${hot ? 'bg-brand' : 'bg-ink'}`}>{plan.badge === 'World Cup' ? t.worldCup : t.popular}</span>}
      <h3 className="text-lg font-semibold text-ink">{label}</h3>
      <div className="mt-4 text-ink" dir="ltr"><Price usd={plan.price} /></div>
      <p className="mt-1" dir="ltr"><OtherCurrencies usd={plan.price} /></p>
      <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {per ?? <PerMonth usd={plan.price / (plan.months ?? 1)} suffix={t.perMonth} />}
        {plan.save ? <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">{t.save.replace('{n}', String(plan.save))}</span> : null}
      </p>
      <hr className="my-6 border-slate-200" />
      <ul className="mb-8 flex-1 space-y-3 text-sm">
        <li className="flex gap-2.5 font-semibold text-ink"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{t.conn[plan.connections - 1]}</li>
        {t.includes.map((i) => <li key={i} className="flex gap-2.5 transition-transform hover:translate-x-1 rtl:hover:-translate-x-1"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{i}</li>)}
      </ul>
      <a href={waLink(currency === 'USD' ? plan.order : `${plan.order} (${convert(plan.price, currency)} ${currency})`)} target="_blank" rel="noopener noreferrer" className={`btn-shine press rounded-lg py-3 text-center font-semibold transition-colors ${hot ? 'bg-brand text-white hover:bg-brand-dark' : 'border border-brand text-brand hover:bg-brand hover:text-white'}`}>{t.subscribe}</a>
    </div>
  )
}
