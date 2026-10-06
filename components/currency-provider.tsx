'use client'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { detectCurrency, type Currency } from '@/lib/currency'
import { useLang } from './use-lang'

type Ctx = { currency: Currency; setCurrency: (c: Currency) => void }
const CurrencyContext = createContext<Ctx>({ currency: 'USD', setCurrency: () => {} })
const KEY = 'gg-currency'

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render use USD so the HTML matches; the real choice is applied after mount.
  const [currency, set] = useState<Currency>('USD')
  const lang = useLang()
  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(KEY) } catch {}
    const auto = detectCurrency()
    // France, Spain, Germany, Portugal, Poland and Greece pages default to euros when the browser gives no other hint.
    const byLang: Currency = ['fr', 'es', 'de', 'pt', 'pl', 'el'].includes(lang) && auto === 'USD' ? 'EUR' : auto
    set(saved === 'USD' || saved === 'EUR' || saved === 'CAD' ? saved : byLang)
  }, [lang])
  const setCurrency = useCallback((c: Currency) => {
    set(c)
    try { localStorage.setItem(KEY, c) } catch {}
  }, [])
  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>
}

export const useCurrency = () => useContext(CurrencyContext)
