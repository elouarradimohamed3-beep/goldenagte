'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UI } from '@/lib/i18n/ui'
import { isRtl } from '@/lib/i18n'
import { useLang } from './use-lang'

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

const KEY = 'gg-cookie-ok'

export function CookieBanner() {
  const lang = useLang()
  const ui = UI[lang].cookie
  const [show, setShow] = useState(false)
  useEffect(() => {
    try { setShow(!localStorage.getItem(KEY)) } catch { setShow(true) }
  }, [])
  if (!show) return null
  const choose = (granted: boolean) => {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied') } catch {}
    if (granted) window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    setShow(false)
  }
  return (
    <div dir={isRtl(lang) ? 'rtl' : 'ltr'} className="glass fixed inset-x-4 bottom-24 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-5 text-sm sm:flex-row sm:items-center">
      <p className="text-slate-600">{ui.text} <Link href="/cookie-policy" className="text-brand underline">{ui.policy}</Link>.</p>
      <div className="flex shrink-0 gap-2">
        <button onClick={() => choose(false)} className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition-colors hover:border-slate-400">{ui.no}</button>
        <button onClick={() => choose(true)} className="rounded-lg bg-brand px-5 py-2 font-semibold text-white transition-colors hover:bg-brand-dark">{ui.ok}</button>
      </div>
    </div>
  )
}
