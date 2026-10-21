'use client'
import { useState } from 'react'
import { Check, Clock, MessageCircle, Zap } from 'lucide-react'
import { PLAN_TIERS, SITE, waLink } from '@/lib/site'
import { convert } from '@/lib/currency'
import { UI } from '@/lib/i18n/ui'
import { isRtl } from '@/lib/i18n'
import { useLang } from './use-lang'
import { useCurrency } from './currency-provider'
import { Price, OtherCurrencies } from './price'

/** Two side-by-side choices: a 3-hour free trial request, or the paid 1-day pass. */
export function TrialOptions({ compact = false }: { compact?: boolean }) {
  const lang = useLang()
  const t = UI[lang].trial
  const { currency } = useCurrency()
  const [name, setName] = useState('')
  const [device, setDevice] = useState(t.devices[0])
  const day = PLAN_TIERS[0].plans[0]

  const requestFree = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hi! I would like a 3-hour free trial of ${SITE.host}.\nName: ${name}\nDevice: ${device}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }
  const dayOrder = currency === 'USD' ? day.order : `${day.order} (${convert(day.price, currency)} ${currency})`
  const field = 'w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-50 outline-none transition focus:border-brand'

  return (
    <div dir={isRtl(lang) ? 'rtl' : 'ltr'} className={`grid gap-5 text-start md:grid-cols-2 ${compact ? '' : 'mt-8'}`}>
      <form onSubmit={requestFree} className="lift relative flex flex-col rounded-2xl border-2 border-emerald-400 bg-zinc-900 p-6 shadow-sm">
        <span className="absolute -top-3 start-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">{t.freeBadge}</span>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600"><Clock size={22} /></span>
          <h3 className="text-xl font-bold">{t.freeTitle}</h3>
        </div>
        <p className="mt-3 text-sm text-zinc-300">{t.freeDesc}</p>
        <div className="mt-5 space-y-3">
          <label className="block text-sm text-zinc-300">{t.name}<input required value={name} onChange={(e) => setName(e.target.value)} className={`${field} mt-1`} /></label>
          <label className="block text-sm text-zinc-300">{t.device}
            <select value={device} onChange={(e) => setDevice(e.target.value)} className={`${field} mt-1`}>{t.devices.map((d) => <option key={d}>{d}</option>)}</select></label>
        </div>
        <button className="press mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-semibold text-black transition hover:brightness-105"><MessageCircle size={18} />{t.request}</button>
      </form>

      <div className="lift relative flex flex-col rounded-2xl border-2 border-brand bg-zinc-900 p-6 shadow-sm">
        <span className="absolute -top-3 start-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">{t.paidBadge}</span>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand-ink"><Zap size={22} /></span>
          <h3 className="text-xl font-bold">{t.paidTitle}</h3>
        </div>
        <p className="mt-3 text-sm text-zinc-300">{t.paidDesc}</p>
        <div className="mt-5 text-zinc-50" dir="ltr"><Price usd={day.price} /></div>
        <p className="mt-1" dir="ltr"><OtherCurrencies usd={day.price} /></p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {UI[lang].popup.note.split(' · ').map((x) => <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand-ink" />{x.charAt(0).toUpperCase() + x.slice(1)}</li>)}
        </ul>
        <a href={waLink(dayOrder)} target="_blank" rel="noopener noreferrer" className="btn-shine press mt-auto block rounded-xl bg-brand py-3.5 pt-3.5 text-center font-semibold text-ink transition-colors hover:bg-brand-dark">{t.buy}</a>
      </div>
    </div>
  )
}
