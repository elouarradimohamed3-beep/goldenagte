import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageCircle } from 'lucide-react'
import { SITE, waLink } from '@/lib/site'

const L = 'transition-colors hover:text-white'
export function Footer() {
  return (
    <footer className="bg-ink py-16 text-sm text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/images/logo.png" alt="Golden Gate IPTV" width={150} height={50} />
          <p className="mt-4 max-w-sm">Live TV, movies and series on every screen, with plans from $20 a month and a 7-day refund.</p>
          <a href={waLink('Hi! I have a question about goldengateiptv.com')} target="_blank" rel="noopener noreferrer" className={`mt-4 flex items-center gap-2 ${L}`}><MessageCircle size={16} />WhatsApp {SITE.whatsappDisplay}</a>
          <a href={`mailto:${SITE.email}`} className={`mt-2 flex items-center gap-2 ${L}`}><Mail size={16} />{SITE.email}</a>
        </div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">Explore</p>
          <Link href="/#plans" className={L}>Plans</Link><Link href="/reseller" className={L}>Reseller</Link><Link href="/install" className={L}>Installation guide</Link><Link href="/faq" className={L}>FAQ</Link><Link href="/blog" className={L}>Blog</Link><Link href="/free-trial" className={L}>Free trial</Link></div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">Company</p>
          <Link href="/about" className={L}>About us</Link><Link href="/contact" className={L}>Contact us</Link><Link href="/legal/terms" className={L}>Terms and conditions</Link><Link href="/legal/refund" className={L}>Refund policy</Link><Link href="/privacy-policy" className={L}>Privacy policy</Link><Link href="/cookie-policy" className={L}>Cookie policy</Link><Link href="/dmca" className={L}>DMCA</Link></div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-6">© 2026 {SITE.name}. All rights reserved.</p>
    </footer>
  )
}
