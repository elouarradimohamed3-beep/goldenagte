import type { Metadata } from 'next'
import Link from 'next/link'
import { PillarLinks } from '@/components/pillar-links'
import { PricingSection } from '@/components/pricing-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { getByPillar } from '@/lib/posts'

export const metadata: Metadata = {
  title: { absolute: 'IPTV Subscription Plans and Pricing: From $7 a Day' },
  description: 'Compare IPTV subscription plans from $7 a day to $119 for two years, plus premium IPTV plans for up to 5 screens. 7-day refund and instant activation.',
  alternates: { canonical: '/plans' },
}

export default function Plans() {
  const guides = getByPillar('subscription')
  return (
    <>
      <PricingSection as="h1" id="pricing" />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'IPTV subscription plans', href: '/plans' }]} />
        <h2 className="text-2xl font-bold">Choosing an IPTV subscription</h2>
        <p className="mt-3 text-slate-600">An IPTV subscription is a prepaid plan for live TV and on-demand movies and series. Pick the length that suits you and the number of screens you need. Read our complete <Link href="/iptv-subscription" className="font-semibold text-brand hover:underline">IPTV subscription guide</Link> for pricing, free trials and safe buying tips, or see <Link href="/iptv-premium" className="font-semibold text-brand hover:underline">premium IPTV</Link> for 4K and multi-screen plans.</p>
        <h2 className="mt-10 text-2xl font-bold">IPTV subscription guides</h2>
        <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {guides.map((g) => <li key={g.slug}><Link href={`/blog/${g.slug}`} className="text-sm text-slate-700 transition-colors hover:text-brand hover:underline">{g.title}</Link></li>)}
        </ul>
      </section>
      <PillarLinks />
    </>
  )
}
