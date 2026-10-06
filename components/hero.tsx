'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Radio, ShieldCheck, Sparkles } from 'lucide-react'
import { Counter } from './counter'
import { DeviceMockup } from './device-mockup'

const WORDS = ['Smart TV', 'Fire Stick', 'iPhone', 'Android box', 'laptop']

export function Hero() {
  const [i, setI] = useState(0)
  const tilt = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const a = setInterval(() => setI((x) => (x + 1) % WORDS.length), 2200)
    return () => clearInterval(a)
  }, [])
  const move = (e: React.PointerEvent) => {
    const el = tilt.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white px-4 pt-32 pb-16 sm:pt-40">
      <div className="bg-dots absolute inset-0 -z-10" />
      <div className="animate-drift absolute -top-24 right-0 -z-10 size-[28rem] rounded-full bg-fuchsia-300/40 blur-[110px]" />
      <div className="animate-drift absolute top-20 -left-20 -z-10 size-[26rem] rounded-full bg-indigo-300/40 blur-[110px]" style={{ animationDelay: '-7s' }} />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-sm"><Sparkles size={14} />Plans from $20 a month · cancel any time</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-6xl">Best IPTV service provider in the USA, on your <span className="text-gradient inline-block" key={i}>{WORDS[i]}</span></h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">Stream live TV, movies and series in HD and 4K. Pay once, get your login in minutes, and start watching on every screen you own.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#plans" className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark">Subscribe now <ArrowRight size={18} className="transition group-hover:translate-x-1" /></Link>
            <Link href="/free-trial" className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-ink transition hover:border-brand hover:text-brand">Request a trial</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand" />7-day refund</span>
            <span className="flex items-center gap-2"><Radio size={16} className="text-brand" />Instant activation</span>
            <span className="flex items-center gap-2"><Sparkles size={16} className="text-brand" />24/7 support</span>
          </div>
        </div>
        <div onPointerMove={move} onPointerLeave={() => { if (tilt.current) tilt.current.style.transform = '' }} className="pb-10">
          <div ref={tilt} className="tilt"><DeviceMockup /></div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {[[34000, '+', 'Live channels'], [130, 'K+', 'Movies and series'], [7, '-day', 'Refund window'], [24, '/7', 'Free support']].map(([n, s, l]) => (
          <div key={String(l)} className="glass rounded-2xl p-6 text-center">
            <p className="font-display text-3xl font-extrabold text-brand sm:text-4xl"><Counter to={n as number} suffix={s as string} /></p>
            <p className="mt-1 text-sm text-slate-500">{l}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
