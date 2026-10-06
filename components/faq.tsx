'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ } from '@/lib/site'
import { Reveal } from './reveal'

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQ.map((f, i) => {
        const on = open === i
        return (
          <Reveal key={f.q} delay={i * 40}>
            <div className={`rounded-2xl border transition-colors ${on ? 'border-brand/40 bg-white shadow-lg shadow-brand/10' : 'border-slate-200 bg-white'}`}>
              <button onClick={() => setOpen(on ? null : i)} aria-expanded={on} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                {f.q}<Plus className={`shrink-0 text-brand transition-transform duration-300 ${on ? 'rotate-45' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><p className="px-5 pb-5 text-slate-600">{f.a}</p></div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
