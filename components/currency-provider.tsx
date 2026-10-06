'use client'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { detectCurrency, type Currency } from '@/lib/currency'

type Ctx = { currency: Currency; setCurrency: (c: Currency) => void }
const CurrencyContext = createContext<Ctx>({ currency: 'USD', setCurrency: () => {} })
const KEY = 'gg-currency'

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render use USD so the HTML matches; the real choice is applied after mount.
  const [currency, set] = useState<Currency>('USD')
  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(KEY) } catch {}
    set(saved === 'USD' || saved === 'EUR' || saved === 'CAD' ? saved : detectCurrency())
  }, [])
  const setCurrency = useCallback((c: Currency) => {
    set(c)
    try { localStorage.setItem(KEY, c) } catch {}
  }, [])
  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>
}

export const useCurrency = () => useContext(CurrencyContext)
