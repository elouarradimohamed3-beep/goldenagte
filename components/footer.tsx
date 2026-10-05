import Link from 'next/link'
import { SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:justify-between">
        <p>© 2026 {SITE.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal/terms">Terms</Link>
          <Link href="/legal/refund">Refund policy</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
