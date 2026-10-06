'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    try { setShow(!localStorage.getItem('gg-cookie-ok')) } catch { setShow(true) }
  }, [])
  if (!show) return null
  const close = () => { try { localStorage.setItem('gg-cookie-ok', '1') } catch {} setShow(false) }
  return (
    <div className="glass fixed inset-x-4 bottom-24 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-5 text-sm sm:flex-row sm:items-center">
      <p className="text-slate-600">We use minimal storage to improve the site. See our <Link href="/cookie-policy" className="text-brand underline">cookie policy</Link>.</p>
      <button onClick={close} className="shrink-0 rounded-lg bg-brand px-5 py-2 font-semibold text-white">Got it</button>
    </div>
  )
}
