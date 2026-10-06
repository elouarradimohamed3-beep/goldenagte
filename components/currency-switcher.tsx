'use client'
import { CURRENCIES, RATES, RATES_AS_OF } from '@/lib/currency'
import { useCurrency } from './currency-provider'

const EN_NOTE = 'Prices are set in USD. EUR and CAD are converted at 1 USD = €{eur} / C${cad} ({asOf}) and rounded. Your final price is confirmed on WhatsApp.'

export function CurrencySwitcher({ tone = 'light', note = false, asOf = RATES_AS_OF }: { tone?: 'light' | 'dark'; note?: boolean | string; asOf?: string }) {
  const { currency, setCurrency } = useCurrency()
  const dark = tone === 'dark'
  return (
    <div className="flex flex-col items-center gap-2">
      <div role="radiogroup" aria-label="Currency" className={`inline-flex rounded-lg p-1 text-xs font-semibold ${dark ? 'border border-white/15 bg-white/10' : 'border border-slate-200 bg-slate-100'}`}>
        {CURRENCIES.map((c) => (
          <button key={c} role="radio" aria-checked={currency === c} onClick={() => setCurrency(c)}
            className={`rounded-md px-3 py-1.5 transition-colors ${currency === c ? (dark ? 'bg-white text-ink' : 'bg-white text-ink shadow-sm') : dark ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-ink'}`}>{c}</button>
        ))}
      </div>
      {note && <p className={`text-center text-xs ${dark ? 'text-white/60' : 'text-slate-500'}`}>{(typeof note === 'string' ? note : EN_NOTE).replace('{eur}', String(RATES.EUR)).replace('{cad}', String(RATES.CAD)).replace('{asOf}', asOf)}</p>}
    </div>
  )
}
