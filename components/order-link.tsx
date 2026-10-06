'use client'
import { convert } from '@/lib/currency'
import { waLink } from '@/lib/site'
import { useCurrency } from './currency-provider'

/** WhatsApp order link whose message also states the price in the visitor's currency. */
export function OrderLink({ order, usd, className, children }: { order: string; usd: number; className?: string; children: React.ReactNode }) {
  const { currency } = useCurrency()
  const text = currency === 'USD' ? order : `${order} (${convert(usd, currency)} ${currency})`
  return <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
}
