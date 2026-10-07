'use client'
import { useEffect, useRef, useState } from 'react'
import { CURRENCIES, SYMBOL, convert, money, moneyDecimal } from '@/lib/currency'
import { useCurrency } from './currency-provider'

/** Big price: symbol + whole number in the chosen currency. */
export function Price({ usd, className = '' }: { usd: number; className?: string }) {
  const { currency } = useCurrency()
  return (
    <span className={`flex items-baseline gap-1 ${className}`}>
      <span className="text-xl font-semibold text-slate-500">{SYMBOL[currency]}</span>
      <CountUp value={convert(usd, currency)} className="text-5xl font-bold tracking-tight tabular-nums" />
    </span>
  )
}

/** Small line showing the same price in the other two currencies. */
export function OtherCurrencies({ usd }: { usd: number }) {
  const { currency } = useCurrency()
  return <span className="text-xs text-slate-400">≈ {CURRENCIES.filter((c) => c !== currency).map((c) => money(usd, c)).join(' · ')}</span>
}

export function PerMonth({ usd, suffix = '/ month' }: { usd: number; suffix?: string }) {
  const { currency } = useCurrency()
  return <><span dir="ltr">{moneyDecimal(usd, currency)}</span> {suffix}</>
}


/** Counts up to the value the first time it scrolls into view, and animates again when the value changes. */
export function CountUp({ value, className = '', duration = 900 }: { value: number; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(value)
  const seen = useRef(false)
  const from = useRef(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const run = () => {
      const start = from.current, t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - t0) / duration, 1)
        setN(Math.round(start + (value - start) * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick); else from.current = value
      }
      requestAnimationFrame(tick)
    }
    if (seen.current) { run(); return }
    setN(value)
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { seen.current = true; io.disconnect(); from.current = Math.round(value * 0.35); run() } }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])
  return <span ref={ref} className={className}>{n.toLocaleString('en-US')}</span>
}
