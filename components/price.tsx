'use client'
import { CURRENCIES, SYMBOL, convert, money, moneyDecimal } from '@/lib/currency'
import { useCurrency } from './currency-provider'

/** Big price: symbol + whole number in the chosen currency. */
export function Price({ usd, className = '' }: { usd: number; className?: string }) {
  const { currency } = useCurrency()
  return (
    <span className={`flex items-baseline gap-1 ${className}`}>
      <span className="text-xl font-semibold text-slate-500">{SYMBOL[currency]}</span>
      <span className="text-5xl font-bold tracking-tight">{convert(usd, currency).toLocaleString('en-US')}</span>
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
