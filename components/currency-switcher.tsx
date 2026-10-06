'use client'
import { CURRENCIES, RATES, RATES_AS_OF } from '@/lib/currency'
import { useCurrency } from './currency-provider'

export function CurrencySwitcher({ tone = 'light', note = false }: { tone?: 'light' | 'dark'; note?: boolean }) {
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
      {note && <p className={`text-xs ${dark ? 'text-white/60' : 'text-slate-500'}`}>Prices are set in USD. EUR and CAD are converted at 1 USD = €{RATES.EUR} / C${RATES.CAD} ({RATES_AS_OF}) and rounded. Your final price is confirmed on WhatsApp.</p>}
    </div>
  )
}
