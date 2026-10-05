'use client'
import { useState } from 'react'
import { MULTI, PLANS } from '@/lib/site'
import { PlanCard } from './plan-card'
import { Reveal } from './reveal'

export function PlansGrid() {
  const [tab, setTab] = useState<'std' | 'premium'>('std')
  const list = tab === 'std' ? PLANS : MULTI
  return (
    <>
      <div className="mx-auto mb-12 flex w-fit rounded-full border border-line bg-panel p-1.5">
        {([['std', 'Standard plans'], ['premium', 'Premium plans']] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === k ? 'bg-gold text-black shadow-lg shadow-gold/30' : 'text-white/70 hover:text-white'}`}>{l}</button>
        ))}
      </div>
      <div key={tab} className="grid gap-6 pt-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <Reveal key={p.id} delay={i * 70} className="h-full"><PlanCard plan={p} /></Reveal>)}
      </div>
      <p className="mt-10 text-center text-sm text-white/60">Need more than 5 devices? <a href="/contact" className="text-gold underline">Contact support</a> for a tailored multi-device plan.</p>
    </>
  )
}
