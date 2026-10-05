import Link from 'next/link'
import { SITE } from '@/lib/site'

const NAV = [['Plans', '/plans'], ['Install', '/install'], ['FAQ', '/faq'], ['About', '/about'], ['Contact', '/contact']]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-gold">{SITE.name}</Link>
        <nav className="flex items-center gap-4 text-sm">
          {NAV.map(([l, h]) => (
            <Link key={h} href={h} className="hidden hover:text-gold sm:block">{l}</Link>
          ))}
          <Link href="/plans" className="rounded-full bg-gold px-4 py-2 font-semibold text-black hover:bg-gold-dark">Get started</Link>
        </nav>
      </div>
    </header>
  )
}
