import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'About us', alternates: { canonical: '/about' } }

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-36 pb-16 space-y-4 text-slate-600">
      <h1 className="text-4xl font-bold text-slate-900">About Golden Gate IPTV</h1>
      <p>We sell IPTV subscriptions for people who want live TV and on-demand titles without a cable contract.</p>
      <p>Our goal is simple: a stable stream, a clear price, and a person you can reach when something goes wrong.</p>
    </div>
  )
}
