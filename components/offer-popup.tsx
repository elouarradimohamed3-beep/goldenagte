'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Check, X } from 'lucide-react'
import { PLAN_TIERS, waLink } from '@/lib/site'
import { convert, money, moneyDecimal } from '@/lib/currency'
import { isRtl } from '@/lib/i18n'
import { UI } from '@/lib/i18n/ui'
import { homePath } from '@/lib/i18n'
import { useCurrency } from './currency-provider'
import { useLang } from './use-lang'

const KEY = 'gg-offer-seen'
const COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000
const SKIP = ['/legal', '/privacy-policy', '/cookie-policy', '/dmca', '/trial']

/** One-time offer for the 1-year plan: after ~15 s, after scrolling about two screens (or 40% of a short page), or when the mouse leaves the top of the page. */
export function OfferPopup() {
  const lang = useLang()
  const path = usePathname() ?? '/'
  const { currency } = useCurrency()
  const [open, setOpen] = useState(false)
  const shown = useRef(false)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const t = UI[lang].popup

  const plan = PLAN_TIERS[0].plans.find((p) => p.id === '12m-1')!
  const monthly = PLAN_TIERS[0].plans.find((p) => p.id === '1m-1')!

  const show = useCallback(() => {
    if (shown.current) return
    shown.current = true
    setOpen(true)
  }, [])

  const dismiss = useCallback(() => {
    setOpen(false)
    try { localStorage.setItem(KEY, String(Date.now())) } catch {}
  }, [])

  useEffect(() => {
    if (SKIP.some((s) => path.startsWith(s))) return
    try {
      const last = Number(localStorage.getItem(KEY) ?? 0)
      if (last && Date.now() - last < COOLDOWN_MS) return
    } catch {}
    shown.current = false
    const timer = window.setTimeout(show, 15000)
    const onScroll = () => { const room = document.documentElement.scrollHeight - innerHeight; if (window.scrollY > Math.min(room * 0.4, 2200)) show() }
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0) show() }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); document.removeEventListener('mouseleave', onLeave) }
  }, [path, show])

  useEffect(() => {
    if (!open) return
    closeBtn.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, dismiss])

  if (!open) return null
  const saving = plan.save ?? 68
  const order = currency === 'USD' ? plan.order : `${plan.order} (${convert(plan.price, currency)} ${currency})`
  return (
    <div dir={isRtl(lang) ? 'rtl' : 'ltr'} className="fixed inset-0 z-[70] grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="offer-title">
      <button aria-label={t.close} onClick={dismiss} className="absolute inset-0 bg-ink/60 backdrop-blur-sm" style={{ animation: 'fade .3s ease both' }} tabIndex={-1} />
      <div className="pop-in relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="grad-pan relative bg-gradient-to-br from-ink via-navy to-brand px-7 pt-8 pb-7 text-white">
          <div className="orb absolute -top-10 -end-10 size-40 rounded-full bg-white/15 blur-2xl" />
          <button ref={closeBtn} onClick={dismiss} aria-label={t.close} className="absolute end-3 top-3 grid size-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><X size={18} /></button>
          <span className="wiggle inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-ink">★ {t.badge}</span>
          <h2 id="offer-title" className="mt-4 text-2xl leading-tight font-bold !text-white">{t.title}</h2>
          <div className="mt-5 flex items-end gap-3" dir="ltr">
            <span className="text-5xl font-bold tracking-tight tabular-nums">{money(plan.price, currency)}</span>
            <span className="pb-1.5 text-sm text-white/70"><s>{money(monthly.price * 12, currency)}</s></span>
            <span className="mb-1.5 rounded-md bg-emerald-400 px-2 py-0.5 text-xs font-bold text-ink">{t.save.replace('{n}', String(saving))}</span>
          </div>
          <p className="mt-1 text-sm text-white/75" dir="ltr">≈ {moneyDecimal(plan.price / 12, currency)} {t.perMonth}</p>
        </div>
        <div className="p-7">
          <p className="text-slate-600">{t.body.replace('{m}', moneyDecimal(plan.price / 12, currency)).replace('{full}', money(monthly.price * 12, currency))}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-slate-500"><Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />{t.note}</p>
          <a href={waLink(order)} target="_blank" rel="noopener noreferrer" onClick={dismiss} className="btn-shine pulse-ring press mt-6 block rounded-xl bg-brand py-3.5 text-center font-semibold text-white transition-colors hover:bg-brand-dark">{t.cta}</a>
          <div className="mt-3 flex items-center justify-between text-sm">
            <a href={`${homePath(lang) === '/' ? '' : homePath(lang)}/#plans`} onClick={dismiss} className="font-semibold text-brand hover:underline">{t.all}</a>
            <button onClick={dismiss} className="text-slate-500 hover:text-ink">{t.later}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
