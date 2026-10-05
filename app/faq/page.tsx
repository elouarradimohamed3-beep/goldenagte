import type { Metadata } from 'next'
import { FAQ } from '@/lib/site'

export const metadata: Metadata = { title: 'Frequently asked questions', alternates: { canonical: '/faq' } }

export default function Faq() {
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1 className="text-4xl font-bold">Frequently asked questions</h1>
      <div className="mt-8 space-y-3">
        {FAQ.map((f) => (
          <details key={f.q} className="rounded-xl border border-white/10 bg-panel p-4">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
