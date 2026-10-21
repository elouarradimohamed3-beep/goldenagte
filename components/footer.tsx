'use client'
import Link from 'next/link'
import { Mail, MessageCircle, Tv } from 'lucide-react'
import { SITE, waLink } from '@/lib/site'
import { UI } from '@/lib/i18n/ui'
import { isRtl } from '@/lib/i18n'
import { useLang } from './use-lang'
import { LangSwitcher } from './lang-switcher'

const L = 'transition-colors hover:text-white'
export function Footer() {
  const lang = useLang()
  const ui = UI[lang].footer
  return (
    <footer dir={isRtl(lang) ? 'rtl' : 'ltr'} className="border-t border-zinc-800 bg-black py-16 text-sm text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="flex items-center gap-2 whitespace-nowrap text-lg font-bold text-white"><span className="grid size-9 place-items-center rounded-lg bg-brand text-ink"><Tv size={18} /></span>Golden Gate<span className="text-brand">IPTV</span></span>
          <p className="mt-4 max-w-sm">{ui.tagline}</p>
          <a href={waLink(`Hi! I have a question about ${SITE.host}`)} target="_blank" rel="noopener noreferrer" className={`mt-4 flex items-center gap-2 ${L}`}><MessageCircle size={16} className="shrink-0" />WhatsApp {SITE.whatsappDisplay}</a>
          <a href={`mailto:${SITE.email}`} className={`mt-2 flex items-center gap-2 ${L}`}><Mail size={16} className="shrink-0" />{SITE.email}</a>
        </div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">{ui.popular}</p>
          <Link href="/blog/what-is-iptv-service" className={L}>What is an IPTV service?</Link><Link href="/blog/iptv-guide" className={L}>The complete IPTV guide</Link><Link href="/blog/iptv-providers" className={L}>IPTV providers explained</Link><Link href="/blog/iptv-streaming-services" className={L}>IPTV streaming services</Link><Link href="/blog/best-iptv-for-firestick-2025" className={L}>IPTV for Firestick</Link><Link href="/blog/evolution-of-iptv" className={L}>The evolution of IPTV</Link></div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">{ui.guides}</p>
          <Link href="/" className={L}>IPTV service</Link><Link href="/iptv-subscription" className={L}>IPTV subscription</Link><Link href="/iptv-usa" className={L}>IPTV USA</Link><Link href="/iptv-premium" className={L}>Premium IPTV</Link><Link href="/blog" className={L}>All articles</Link><Link href="/blog/topic/service" className={L}>IPTV service guides</Link><Link href="/trial" className={L}>Request a trial</Link></div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">{ui.company}</p>
          <Link href="/plans" className={L}>Plans and pricing</Link><Link href="/install" className={L}>Installation guide</Link><Link href="/reseller" className={L}>Reseller</Link><Link href="/faq" className={L}>FAQ</Link><Link href="/about" className={L}>About us</Link><Link href="/contact" className={L}>Contact us</Link><Link href="/legal/terms" className={L}>Terms</Link><Link href="/legal/refund" className={L}>Refund policy</Link><Link href="/privacy-policy" className={L}>Privacy</Link><Link href="/cookie-policy" className={L}>Cookies</Link><Link href="/dmca" className={L}>DMCA</Link></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 pt-6"><p>© 2026 {SITE.name}. {ui.rights}</p><LangSwitcher /></div>
    </footer>
  )
}
