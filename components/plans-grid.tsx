'use client'
import { useState } from 'react'
import { MULTI, PLAN_TIERS, waLink } from '@/lib/site'
import { rich } from '@/lib/i18n/rich'
import type { Dict } from '@/lib/i18n/en'
import { PlanCard } from './plan-card'
import { CurrencySwitcher } from './currency-switcher'

export function PlansGrid({ t }: { t: Dict['plans'] }) {
  const [tab, setTab] = useState<string>('1')
  const list = tab === 'premium' ? MULTI : PLAN_TIERS.find((t) => String(t.devices) === tab)!.plans
  const tabs = [...PLAN_TIERS.map((tier, i) => [String(tier.devices), t.tabs[i]]), ['premium', t.tabs[3]]]
  return (
    <>
      <div className="mb-6"><CurrencySwitcher tone="dark" note={t.currencyNote} asOf={t.asOf} /></div>
      <div role="tablist" className="mx-auto mb-12 flex w-fit max-w-full flex-wrap justify-center rounded-lg border border-white/15 bg-white/10 p-1">
        {tabs.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`press rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6 ${tab === k ? 'bg-white text-ink' : 'text-white/80 hover:text-white'}`}>{l}</button>
        ))}
      </div>
      <div key={tab} className="fade-up-stagger grid gap-6 pt-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <PlanCard key={p.id} plan={p} t={t} index={i} />)}
      </div>
      <p className="mt-10 text-center text-sm text-white/70">{rich(t.more, { link: <a href={waLink('Hi! I need more info about more than 5 devices')} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">{t.moreLink}</a> })}</p>
    </>
  )
}
