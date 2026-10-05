'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Radio, ShieldCheck, Sparkles } from 'lucide-react'
import { Counter } from './counter'
import { DEVICES } from '@/lib/site'

const WORDS = ['Smart TV', 'Fire Stick', 'iPhone', 'Android box', 'laptop']
const GENRES = ['Live Football', '24/7 News', 'Kids', 'Movies', 'Documentaries', 'Music', 'Series']

export function Hero() {
  const [i, setI] = useState(0)
  const [g, setG] = useState(0)
  useEffect(() => {
    const a = setInterval(() => setI((x) => (x + 1) % WORDS.length), 2200)
    const b = setInterval(() => setG((x) => (x + 1) % GENRES.length), 1800)
    return () => { clearInterval(a); clearInterval(b) }
  }, [])
  const tilt = useRef<HTMLDivElement>(null)
  const move = (e: React.PointerEvent) => {
    const el = tilt.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`
  }
  const reset = () => { if (tilt.current) tilt.current.style.transform = '' }
  return (
    <section className="relative isolate overflow-hidden px-4 pt-36 pb-20">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="animate-drift absolute -top-20 left-[10%] -z-10 size-96 rounded-full bg-gold/25 blur-[120px]" />
      <div className="animate-drift absolute top-40 right-[5%] -z-10 size-96 rounded-full bg-orange-600/20 blur-[120px]" style={{ animationDelay: '-6s' }} />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-gold"><Sparkles size={14} /> Plans from $20 a month · cancel any time</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-6xl">Best IPTV service provider in the USA, on your <span className="text-gradient inline-block min-w-[3ch]" key={i}>{WORDS[i]}</span><span className="text-gold" style={{ animation: 'blink 1s steps(1) infinite' }}>|</span></h1>
          <p className="mt-6 max-w-xl text-lg text-white/65">Stream live TV, movies and series in HD and 4K. Pay once, get your login in minutes, and start watching on every screen you own.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#plans" className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-black transition hover:bg-gold-dark">Subscribe now <ArrowRight size={18} className="transition group-hover:translate-x-1" /></Link>
            <Link href="/install" className="glass rounded-full px-7 py-3.5 font-medium transition hover:border-gold/60">How it works</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" />7-day refund</span>
            <span className="flex items-center gap-2"><Radio size={16} className="text-gold" />Instant activation</span>
            <span className="flex items-center gap-2"><Sparkles size={16} className="text-gold" />24/7 support</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg" onPointerMove={move} onPointerLeave={reset}><div ref={tilt} className="tilt">
          <div className="animate-float glass relative overflow-hidden rounded-3xl p-3 shadow-2xl shadow-gold/10">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1f2e] via-[#0d1017] to-[#2a1c05]">
              <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-gold/10 to-transparent" style={{ animation: 'scan 4s linear infinite' }} />
              <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold"><span className="size-2 animate-pulse rounded-full bg-white" />LIVE</div>
              <div className="absolute top-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs">4K · HDR</div>
              <div className="absolute inset-0 grid place-items-center"><p key={g} className="text-3xl font-bold" style={{ animation: 'float 1.8s ease-out' }}>{GENRES[g]}</p></div>
              <div className="absolute inset-x-4 bottom-4 flex items-end gap-1.5">
                {Array.from({ length: 24 }).map((_, k) => <span key={k} className="w-full rounded-sm bg-gold/70" style={{ height: '30%', animation: `bars ${0.8 + (k % 5) * 0.15}s ease-in-out ${k * 0.05}s infinite` }} />)}
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-gold" /></div>
          </div>
          <div className="glass animate-float absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 text-sm" style={{ animationDelay: '-2s' }}><p className="text-white/50">Activated in</p><p className="text-lg font-bold text-gold">~ 5 minutes</p></div>
          <div className="glass animate-float absolute -top-5 -right-3 rounded-2xl px-4 py-3 text-sm" style={{ animationDelay: '-4s' }}><p className="text-white/50">Screens</p><p className="text-lg font-bold text-gold">up to 5 at once</p></div>
        </div></div>
      </div>

      <div className="mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {[[34000, '+', 'Live channels'], [130, 'K+', 'Movies and series'], [7, '-day', 'Refund window'], [24, '/7', 'Free support']].map(([n, s, l]) => (
          <div key={String(l)} className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-gold sm:text-4xl"><Counter to={n as number} suffix={s as string} /></p>
            <p className="mt-1 text-sm text-white/60">{l}</p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-4 whitespace-nowrap">
          {[...DEVICES, ...DEVICES, ...DEVICES, ...DEVICES].map((d, k) => <span key={k} className="glass rounded-full px-5 py-2 text-sm text-white/70">{d}</span>)}
        </div>
      </div>
    </section>
  )
}
