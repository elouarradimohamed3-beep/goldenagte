'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Tv, X } from 'lucide-react'
import { waLink } from '@/lib/site'

const NAV = [['Plans', '/#plans'], ['Reseller', '/reseller'], ['Install', '/install'], ['FAQ', '/#faq'], ['About', '/about'], ['Contact', '/contact']]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid size-9 place-items-center rounded-xl bg-gold text-black"><Tv size={18} /></span>
          <span>Golden Gate <span className="text-gold">IPTV</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          {NAV.map(([l, h]) => <Link key={h} href={h} className="relative transition hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink('want buy 1 Day')} target="_blank" rel="noopener noreferrer" className="animate-pulse-ring rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition hover:bg-gold-dark">Try now</a>
          <button aria-label="Menu" className="grid size-10 place-items-center rounded-lg md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <nav className="overflow-hidden"><div className="flex flex-col gap-1 px-4 pb-4">
          {NAV.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5">{l}</Link>)}
        </div></nav>
      </div>
    </header>
  )
}
