import type { Metadata } from 'next'
import { FAQ } from '@/lib/site'
import { PillarLinks } from '@/components/pillar-links'

export const metadata: Metadata = {
  title: { absolute: 'IPTV FAQ: IPTV Service, Subscription, Premium and USA Questions' },
  description: 'Answers to common questions about an IPTV service: what it is, IPTV subscription prices, premium IPTV, the free trial, devices and IPTV in the USA.',
  alternates: { canonical: '/faq' },
}

export default function Faq() {
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <>
    <div className="mx-auto max-w-3xl px-4 pt-36 pb-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1 className="text-4xl font-bold">Frequently asked questions</h1>
      <div className="mt-8 space-y-3">
        {FAQ.map((f) => (
          <details key={f.q} className="rounded-xl border border-white/10 bg-white p-4">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
    <PillarLinks />
    </>
  )
}
