import Link from 'next/link'
import { Mail, Tv } from 'lucide-react'
import { SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-28 border-t border-line bg-panel/50 py-14 text-sm text-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="flex items-center gap-2 text-lg font-bold text-white"><span className="grid size-9 place-items-center rounded-xl bg-gold text-black"><Tv size={18} /></span>Golden Gate IPTV</p>
          <p className="mt-4 max-w-sm">Live TV, movies and series on every screen, with plans from $20 a month and a 7-day refund.</p>
          <a href={`mailto:${SITE.email}`} className="mt-4 inline-flex items-center gap-2 hover:text-gold"><Mail size={16} />{SITE.email}</a>
        </div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">Explore</p>
          <Link href="/#plans" className="hover:text-gold">Plans</Link><Link href="/reseller" className="hover:text-gold">Reseller</Link><Link href="/install" className="hover:text-gold">Installation guide</Link><Link href="/faq" className="hover:text-gold">FAQ</Link></div>
        <div className="flex flex-col gap-2"><p className="font-semibold text-white">Company</p>
          <Link href="/about" className="hover:text-gold">About us</Link><Link href="/contact" className="hover:text-gold">Contact us</Link><Link href="/legal/terms" className="hover:text-gold">Terms and conditions</Link><Link href="/legal/refund" className="hover:text-gold">Refund policy</Link></div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-line px-4 pt-6">© 2026 {SITE.name}. All rights reserved.</p>
    </footer>
  )
}
