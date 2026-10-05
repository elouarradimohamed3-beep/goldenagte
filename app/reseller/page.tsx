import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Reseller plan', alternates: { canonical: '/reseller' } }

const POINTS = [
  ['Buy credits at a discount', 'Purchase subscription credits in bulk and set your own retail prices.'],
  ['Simple panel', 'Create, extend and disable customer logins yourself from one dashboard.'],
  ['We handle the streams', 'You focus on customers while we keep servers, channels and updates running.'],
  ['Support for you and your clients', 'Reach our team around the clock when a customer needs help.'],
]

export default function Reseller() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Reseller plan</h1>
      <p className="mt-3 text-white/70">Start your own IPTV business without owning any servers.</p>
      <div className="mt-8 space-y-4">
        {POINTS.map(([t, b]) => (
          <div key={t} className="rounded-xl border border-white/10 bg-panel p-5"><h2 className="font-semibold text-gold">{t}</h2><p className="mt-1 text-white/70">{b}</p></div>
        ))}
      </div>
      <p className="mt-8"><Link href="/contact?plan=reseller" className="rounded-full bg-gold px-6 py-3 font-semibold text-black">Ask for reseller pricing</Link></p>
    </div>
  )
}
