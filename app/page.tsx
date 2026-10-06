import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getByPillar } from '@/lib/posts'
import { en } from '@/lib/i18n/dicts'
import { LOCALES, homePath } from '@/lib/i18n'
import { HomeView } from '@/components/home-view'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: { absolute: en.meta.title },
  description: en.meta.description,
  alternates: {
    canonical: '/',
    languages: { en: '/', ...Object.fromEntries(LOCALES.map((l) => [l, homePath(l)])), 'x-default': '/' },
  },
}

export default function Home() {
  const guides = (
      <Section eyebrow="Guides" title="Learn more about IPTV">
      <div className="grid gap-5 md:grid-cols-3">
        {getByPillar('service').slice(0, 6).map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <Link href={`/blog/${p.slug}`} className="card-hover glass spot group flex h-full flex-col rounded-2xl p-7">
              <p className="text-xs text-slate-500">{p.readMinutes} min read</p>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand">Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm"><Link href="/blog/topic/service" className="font-semibold text-brand hover:underline">See all IPTV service guides</Link> · <Link href="/blog/topic/subscription" className="font-semibold text-brand hover:underline">IPTV subscription guides</Link> · <Link href="/blog/topic/usa" className="font-semibold text-brand hover:underline">IPTV USA guides</Link> · <Link href="/blog/topic/premium" className="font-semibold text-brand hover:underline">Premium IPTV guides</Link></p>
    </Section>
  )
  return <HomeView lang="en" t={en} guides={guides} />
}
