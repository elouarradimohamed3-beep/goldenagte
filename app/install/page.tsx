import type { Metadata } from 'next'
import { GUIDES } from '@/lib/site'

export const metadata: Metadata = { title: 'Installation guide', alternates: { canonical: '/install' } }

export default function Install() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-36 pb-16">
      <h1 className="text-4xl font-bold">Installation guide</h1>
      <p className="mt-3 text-white/70">Setup takes a few minutes on any device. Choose yours below.</p>
      {GUIDES.map((g) => (
        <section key={g.device} className="mt-10">
          <h2 className="text-2xl font-semibold text-gold">{g.device}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-white/80">{g.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        </section>
      ))}
    </div>
  )
}
