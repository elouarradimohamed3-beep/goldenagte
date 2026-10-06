import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PILLARS } from '@/lib/seo'
import type { Dict } from '@/lib/i18n/en'

export function PillarLinks({ title = 'Explore our IPTV guides', exclude, t }: { title?: string; exclude?: string; t?: Dict['pillars'] }) {
  const base = [{ slug: '', label: 'IPTV Service', blurb: 'How a reliable IPTV service works, with plans from $20 a month.', href: '/' }, ...PILLARS.map((p) => ({ slug: p.slug, label: p.label, blurb: p.blurb, href: `/${p.slug}` }))]
  const items = base.map((b, i) => (t ? { ...b, label: t.items[i].label, blurb: t.items[i].blurb } : b)).filter((i) => i.slug !== exclude)
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-center text-2xl font-bold">{t ? t.title : title}</h2>
      <div className={`mt-8 grid gap-5 ${items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="card-hover glass group flex flex-col rounded-2xl p-6">
            <h3 className="text-lg font-semibold">{i.label}</h3>
            <p className="mt-2 text-sm text-slate-600">{i.blurb}</p>
            <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-brand">{t ? t.readGuide : 'Read the guide'} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180" /></span>
          </Link>
        ))}
      </div>
    </section>
  )
}
