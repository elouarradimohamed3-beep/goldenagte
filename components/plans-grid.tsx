'use client'
import { useState } from 'react'
import { MULTI, PLAN_TIERS, waLink } from '@/lib/site'
import { PlanCard } from './plan-card'

export function PlansGrid() {
  const [tab, setTab] = useState<string>('1')
  const list = tab === 'premium' ? MULTI : PLAN_TIERS.find((t) => String(t.devices) === tab)!.plans
  const tabs = [...PLAN_TIERS.map((t) => [String(t.devices), `${t.devices} ${t.devices === 1 ? 'device' : 'devices'}`]), ['premium', 'Premium plans']]
  return (
    <>
      <div role="tablist" className="mx-auto mb-12 flex w-fit max-w-full flex-wrap justify-center rounded-lg border border-white/15 bg-white/10 p-1">
        {tabs.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors sm:px-6 ${tab === k ? 'bg-white text-ink' : 'text-white/80 hover:text-white'}`}>{l}</button>
        ))}
      </div>
      <div key={tab} className="grid gap-6 pt-3 sm:grid-cols-2 lg:grid-cols-3" style={{ animation: 'fade-in .35s ease' }}>
        {list.map((p, i) => <PlanCard key={p.id} plan={p} index={i} />)}
      </div>
      <p className="mt-10 text-center text-sm text-white/70">Need more than 5 devices? <a href={waLink('Hi! I need more info about more than 5 devices')} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">Contact support</a> for a tailored multi-device plan.</p>
    </>
  )
}
