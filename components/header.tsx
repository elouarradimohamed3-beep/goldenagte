'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Tv, X } from 'lucide-react'
import { waLink } from '@/lib/site'

const NAV = [['Plans', '/#plans'], ['Reseller', '/reseller'], ['Install', '/install'], ['Blog', '/blog'], ['FAQ', '/#faq'], ['Contact', '/contact']]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 whitespace-nowrap font-display text-base font-bold text-ink sm:gap-2.5 sm:text-lg">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br sm:size-10 from-brand to-fuchsia-500 text-white shadow-lg shadow-brand/30"><Tv size={20} /></span>
          Golden Gate <span className="text-brand">IPTV</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {NAV.map(([l, h]) => <Link key={h} href={h} className="transition hover:text-brand">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink('want buy 1 Day')} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full bg-brand px-4 py-2.5 text-sm font-semibold sm:px-5 text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">Try now</a>
          <button aria-label="Menu" className="grid size-10 place-items-center rounded-lg text-ink md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <nav className="overflow-hidden"><div className="flex flex-col gap-1 px-4 pb-4">
          {NAV.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50">{l}</Link>)}
        </div></nav>
      </div>
    </header>
  )
}
