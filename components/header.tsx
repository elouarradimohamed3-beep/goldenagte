'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Tv, X } from 'lucide-react'
import { waLink } from '@/lib/site'
import { CurrencySwitcher } from './currency-switcher'
import { LangSwitcher } from './lang-switcher'
import { useLang } from './use-lang'
import { UI } from '@/lib/i18n/ui'
import { isRtl } from '@/lib/i18n'

const hrefs = ['/iptv-subscription', '/iptv-usa', '/iptv-premium', '/install', '/blog', '/contact']

export function Header() {
  const lang = useLang()
  const ui = UI[lang]
  const labels = [ui.nav.subscription, ui.nav.usa, ui.nav.premium, ui.nav.install, ui.nav.blog, ui.nav.contact]
  const NAV = labels.map((l, i) => [l, hrefs[i]])
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header dir={isRtl(lang) ? 'rtl' : 'ltr'} className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${scrolled || open ? 'border-slate-200 shadow-sm' : 'border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap text-base font-bold text-ink sm:text-lg">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-ink text-white"><Tv size={18} /></span>
          Golden Gate <span className="text-brand">IPTV</span>
        </Link>
        <nav className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-600 xl:flex">
          {NAV.map(([l, h]) => <Link key={h} href={h} className="transition-colors hover:text-brand">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden xl:block"><LangSwitcher /></div>
          <div className="hidden 2xl:block"><CurrencySwitcher /></div>
          <a href={waLink('want buy 1 Day')} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:px-5">{ui.tryNow}</a>
          <button aria-label={ui.menu} className="grid size-10 place-items-center rounded-lg text-ink xl:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className={`grid transition-all duration-300 xl:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <nav className="overflow-hidden"><div className="flex flex-col px-4 pb-4">
          <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 py-3"><LangSwitcher /><CurrencySwitcher /></div>
          {NAV.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="border-t border-slate-100 px-1 py-3 font-medium text-slate-700">{l}</Link>)}
        </div></nav>
      </div>
    </header>
  )
}
