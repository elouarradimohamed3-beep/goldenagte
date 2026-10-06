export type Currency = 'USD' | 'EUR' | 'CAD'

export const CURRENCIES: Currency[] = ['USD', 'EUR', 'CAD']

/**
 * All prices are stored in USD. EUR and CAD are converted with these fixed rates and rounded
 * to whole units. Update the rates (and RATES_AS_OF) whenever you want to re-price.
 */
export const RATES: Record<Currency, number> = { USD: 1, EUR: 0.92, CAD: 1.37 }
export const RATES_AS_OF = 'October 2026'

export const SYMBOL: Record<Currency, string> = { USD: '$', EUR: '€', CAD: 'C$' }

/** Whole-number price in the chosen currency. */
export const convert = (usd: number, cur: Currency) => (cur === 'USD' ? usd : Math.round(usd * RATES[cur]))

export const money = (usd: number, cur: Currency) => `${SYMBOL[cur]}${convert(usd, cur).toLocaleString('en-US')}`

/** Per-month value keeps two decimals. */
export const moneyDecimal = (usd: number, cur: Currency) => `${SYMBOL[cur]}${(usd * RATES[cur]).toFixed(2)}`

const EU = new Set(['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'NO', 'CH', 'IS', 'LI'])

/** Pick a starting currency from the browser locale and time zone. */
export function detectCurrency(): Currency {
  try {
    const langs = [...(navigator.languages ?? []), navigator.language]
    const regions = langs.map((l) => l?.split('-')[1]?.toUpperCase()).filter(Boolean) as string[]
    if (regions.includes('CA')) return 'CAD'
    if (regions.some((r) => EU.has(r))) return 'EUR'
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
    if (/^America\/(Toronto|Vancouver|Edmonton|Winnipeg|Halifax|St_Johns|Regina|Montreal)/.test(tz)) return 'CAD'
    if (/^Europe\//.test(tz)) return 'EUR'
  } catch {}
  return 'USD'
}
