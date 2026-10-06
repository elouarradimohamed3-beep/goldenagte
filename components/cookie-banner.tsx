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
    <div className="glass fixed inset-x-4 bottom-24 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl bg-panel/95 p-5 text-sm sm:flex-row sm:items-center">
      <p className="text-white/75">We use minimal storage to improve the site. See our <Link href="/cookie-policy" className="text-gold underline">cookie policy</Link>.</p>
      <button onClick={close} className="shrink-0 rounded-full bg-gold px-5 py-2 font-semibold text-black">Got it</button>
    </div>
  )
}
