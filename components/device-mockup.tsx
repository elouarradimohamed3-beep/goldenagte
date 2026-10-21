'use client'
import { useEffect, useState } from 'react'
import { Clapperboard, Baby, Newspaper, Play, Popcorn, Trophy, Music2 } from 'lucide-react'

const SCENES = [
  { Icon: Trophy, tag: 'Live sports', title: 'Match night', meta: '4K · HDR · Surround', from: '#e11d48', via: '#c026d3', to: '#7c3aed' },
  { Icon: Clapperboard, tag: 'Movies', title: 'Premiere tonight', meta: 'Full HD · On demand', from: '#7c3aed', via: '#4f46e5', to: '#22d3ee' },
  { Icon: Newspaper, tag: '24/7 news', title: 'Breaking now', meta: 'Live · HD', from: '#0891b2', via: '#2563eb', to: '#7c3aed' },
  { Icon: Popcorn, tag: 'Series', title: 'New season', meta: 'All episodes · 4K', from: '#c026d3', via: '#e11d48', to: '#f97316' },
]
const GUIDE = ['Football · Live', 'Movie premiere', 'World news', 'Kids cartoons', 'Music hits', 'Documentary', 'Series marathon', 'Tennis · Live']

export function DeviceMockup() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((x) => (x + 1) % SCENES.length), 3600)
    return () => clearInterval(t)
  }, [])
  const s = SCENES[i]
  return (
    <div className="float-y relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl transition-colors duration-1000" style={{ background: `radial-gradient(closest-side, ${s.via}55, transparent)` }} />
      <div className="rounded-2xl bg-[#0d0b16] p-2.5 shadow-[0_40px_120px_-30px_rgba(192,38,211,.6)] ring-1 ring-white/10">
        <div className="overflow-hidden rounded-xl bg-[#12101d]">
          <div className="flex items-center justify-between px-4 py-2.5 text-[10px] text-zinc-400">
            <span className="flex items-center gap-1.5 font-semibold text-white"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_#22d3ee]" />Golden Gate IPTV</span>
            <span className="flex gap-3">{['Live', 'Movies', 'Series', 'Guide'].map((x, k) => <span key={x} className={k === 0 ? 'text-white' : ''}>{x}</span>)}</span>
          </div>
          <div className="grid grid-cols-[1.6fr_1fr] gap-2 px-3">
            <div key={i} className="relative overflow-hidden rounded-lg p-5" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.via} 55%, ${s.to})`, animation: 'fade .7s ease both' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.25),transparent_45%)]" />
              <span className="relative inline-flex items-center gap-1.5 rounded bg-black/30 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur"><span className="live-dot size-1.5 rounded-full bg-red-500" />LIVE · {s.tag}</span>
              <s.Icon className="absolute -end-3 -bottom-4 size-24 text-white/15" strokeWidth={1.2} />
              <p className="relative mt-6 text-lg font-bold text-white sm:text-xl" style={{ animation: 'pop .6s cubic-bezier(.2,.8,.2,1) both' }}>{s.title}</p>
              <p className="relative text-[11px] text-white/80">{s.meta}</p>
              <div className="relative mt-4 flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-full bg-white text-[#c026d3]"><Play size={14} fill="currentColor" /></span>
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/25"><span key={i} className="block h-full origin-left rounded-full bg-white" style={{ animation: 'progress 3.6s linear both' }} /></span>
              </div>
            </div>
            <div className="relative h-[9.5rem] overflow-hidden rounded-lg bg-white/[.04] ring-1 ring-white/10 sm:h-[10.5rem]">
              <p className="relative z-10 bg-[#161321] px-2.5 py-2 text-[9px] font-bold tracking-wider text-accent uppercase">TV guide</p>
              <ul className="guide-scroll px-2.5">
                {[...GUIDE, ...GUIDE].map((g, k) => (
                  <li key={k} className="flex items-center gap-1.5 border-b border-white/5 py-1.5 text-[9px] text-zinc-300"><span className="text-zinc-500">{String(18 + (k % 6)).padStart(2, '0')}:00</span><span className="truncate">{g}</span></li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#12101d] to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 p-3">
            {[Trophy, Clapperboard, Popcorn, Newspaper, Baby].map((Icon, k) => (
              <div key={k} className={`grid aspect-[4/3] place-items-center rounded-lg ring-1 transition-all duration-500 ${k === [0, 1, 3, 2][i] ? 'bg-white/15 ring-accent/60 shadow-[0_0_18px_-4px_#22d3ee]' : 'bg-white/[.06] ring-white/10'}`}>
                <Icon size={16} className={k === [0, 1, 3, 2][i] ? 'text-white' : 'text-accent'} />
              </div>
            ))}
          </div>
          <div className="flex items-end gap-0.5 px-3 pb-3" aria-hidden>
            {Array.from({ length: 40 }).map((_, k) => <i key={k} className="eq-bar w-full rounded-sm bg-gradient-to-t from-[#e11d48] to-[#7c3aed] opacity-50" style={{ height: 14, animationDelay: `${(k % 9) * 0.09}s`, animationDuration: `${0.7 + (k % 5) * 0.14}s` }} />)}
          </div>
        </div>
      </div>
      <div className="mx-auto h-2.5 w-1/3 rounded-b-lg bg-[#1b1830]" />

      <div className="float-y2 absolute -end-3 -bottom-10 w-28 rounded-[1.4rem] bg-[#0d0b16] p-1.5 shadow-xl ring-1 ring-white/15 sm:-end-8 sm:w-32">
        <div className="overflow-hidden rounded-[1.1rem] bg-[#12101d] p-2">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-zinc-700" />
          <div key={i} className="rounded-lg p-3 text-white" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})`, animation: 'fade .7s ease both' }}><p className="text-[10px] font-bold">Live now</p><p className="text-[9px] opacity-85">{s.tag}</p></div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {[Clapperboard, Popcorn, Newspaper, Music2].map((Icon, k) => <div key={k} className="grid aspect-square place-items-center rounded-md bg-white/[.07] text-accent"><Icon size={14} /></div>)}
          </div>
        </div>
      </div>
      <div className="glass float-y absolute -start-6 bottom-6 hidden rounded-2xl px-4 py-3 text-xs sm:block" style={{ animationDelay: '-3s' }}>
        <p className="text-zinc-400">Screens</p><p className="text-gradient-neon font-display text-lg font-extrabold">Up to 5</p>
      </div>
    </div>
  )
}
