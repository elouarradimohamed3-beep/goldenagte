'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Rewind, Smartphone, Tv2 } from 'lucide-react'
import type { Dict } from '@/lib/i18n/en'

const ICONS = [Smartphone, Tv2, Rewind]
const PHOTOS = ['/images/explore-travel.webp', '/images/explore-movie-night.webp', '/images/explore-news.webp']

export function ExploreTabs({ t: dict, plansHref = '#plans' }: { t: Dict['explore']; plansHref?: string }) {
  const [t, setT] = useState(0)
  const a = dict.long[t]
  const I = ICONS[t]
  return (
    <div>
      <div className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1">
        {dict.tabs.map((s, i) => <button key={s} onClick={() => setT(i)} className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${t === i ? 'bg-white text-ink shadow-sm' : 'text-slate-600 hover:text-ink'}`}>{s}</button>)}
      </div>
      <div key={t} className="grid items-center gap-10 lg:grid-cols-2" style={{ animation: 'fade-in .5s ease' }}>
        <div>
          <h3 className="text-3xl font-bold">{a.title}</h3>
          <div className="mt-5 space-y-4 text-slate-600">{a.body.map((p) => <p key={p}>{p}</p>)}</div>
          <a href={plansHref} className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">{dict.signUp}</a>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <Image src={PHOTOS[t]} alt={dict.alts[t]} width={1408} height={768} className="aspect-[4/3] w-full object-cover" />
          <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-sm font-semibold text-ink shadow"><I size={16} className="text-brand" />{dict.tabs[t]}</span>
        </div>
      </div>
    </div>
  )
}
