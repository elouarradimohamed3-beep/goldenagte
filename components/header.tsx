'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Tv, X } from 'lucide-react'
import { waLink } from '@/lib/site'

const NAV = [['IPTV Subscription', '/iptv-subscription'], ['IPTV USA', '/iptv-usa'], ['Premium IPTV', '/iptv-premium'], ['Install', '/install'], ['Blog', '/blog'], ['Contact', '/contact']]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${scrolled || open ? 'border-slate-200 shadow-sm' : 'border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap text-base font-bold text-ink sm:text-lg">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-ink text-white"><Tv size={18} /></span>
          Golden Gate <span className="text-brand">IPTV</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {NAV.map(([l, h]) => <Link key={h} href={h} className="transition-colors hover:text-brand">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink('want buy 1 Day')} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:px-5">Try now</a>
          <button aria-label="Menu" className="grid size-10 place-items-center rounded-lg text-ink md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <nav className="overflow-hidden"><div className="flex flex-col px-4 pb-4">
          {NAV.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="border-t border-slate-100 px-1 py-3 font-medium text-slate-700">{l}</Link>)}
        </div></nav>
      </div>
    </header>
  )
}
