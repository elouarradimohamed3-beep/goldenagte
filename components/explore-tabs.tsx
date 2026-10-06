'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Rewind, Smartphone, Tv2 } from 'lucide-react'
import { LONG_ARTICLES } from '@/lib/site'

const ICONS = [Smartphone, Tv2, Rewind]
const SHORT = ['Multi-device', 'HD and 4K', 'Interactivity and DVR']

export function ExploreTabs() {
  const [t, setT] = useState(0)
  const a = LONG_ARTICLES[t]
  const I = ICONS[t]
  return (
    <div>
      <div className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1.5">
        {SHORT.map((s, i) => <button key={s} onClick={() => setT(i)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${t === i ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'text-slate-600 hover:text-ink'}`}>{s}</button>)}
      </div>
      <div key={t} className="grid items-center gap-10 lg:grid-cols-2" style={{ animation: 'fade-in .5s ease' }}>
        <div>
          <h3 className="text-3xl font-bold">{a.title}</h3>
          <div className="mt-5 space-y-4 text-slate-600">{a.body.map((p) => <p key={p}>{p}</p>)}</div>
          <a href="#plans" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">Sign up now</a>
        </div>
        {t === 0 ? (
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl"><Image src="/images/family-tv.webp" alt="Two children watching live TV together in the living room" width={500} height={500} className="aspect-[4/3] w-full object-cover" /></div>
        ) : (
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-violet-600 to-fuchsia-600 shadow-xl">
            <div className="animate-drift absolute size-60 rounded-full bg-white/20 blur-[70px]" />
            <I className="relative text-white" size={110} strokeWidth={1.1} />
          </div>
        )}
      </div>
    </div>
  )
}
