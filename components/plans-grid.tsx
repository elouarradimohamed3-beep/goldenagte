'use client'
import { useState } from 'react'
import { MULTI, PLAN_TIERS, waLink } from '@/lib/site'
import { PlanCard } from './plan-card'
import { Reveal } from './reveal'

export function PlansGrid() {
  const [tab, setTab] = useState<string>('1')
  const list = tab === 'premium' ? MULTI : PLAN_TIERS.find((t) => String(t.devices) === tab)!.plans
  const tabs = [...PLAN_TIERS.map((t) => [String(t.devices), `${t.devices} ${t.devices === 1 ? 'device' : 'devices'}`]), ['premium', 'Premium plans']]
  return (
    <>
      <div className="mx-auto mb-12 flex w-fit max-w-full flex-wrap justify-center rounded-full border border-white/30 bg-white/15 p-1.5 backdrop-blur-md">
        {tabs.map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`rounded-full px-4 py-2.5 text-sm sm:px-6 font-semibold transition ${tab === k ? 'bg-white text-brand shadow-lg' : 'text-white/85 hover:text-white'}`}>{l}</button>
        ))}
      </div>
      <div key={tab} className="grid gap-6 pt-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <Reveal key={p.id} delay={i * 70} className="h-full"><PlanCard plan={p} index={i} /></Reveal>)}
      </div>
      <p className="mt-10 text-center text-sm text-slate-500">Need more than 5 devices? <a href={waLink("Hi! I need more info about more than 5 devices")} target="_blank" rel="noopener noreferrer" className="text-brand underline">Contact support</a> for a tailored multi-device plan.</p>
    </>
  )
}
