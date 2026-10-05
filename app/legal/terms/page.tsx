import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Terms and conditions', alternates: { canonical: '/legal/terms' } }

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-4 text-white/80">
      <h1 className="text-4xl font-bold text-white">Terms and conditions</h1>
      <p className="text-sm text-white/50">Last updated: October 5, 2026</p>
      <p>By buying a subscription you agree to use the service for personal viewing only and not to resell or share your login without our written agreement.</p>
      <p>Content availability can change. We work to keep streams stable but cannot guarantee uninterrupted service.</p>
      <p>We may suspend accounts that break these terms. Have a lawyer review this text before relying on it.</p>
    </div>
  )
}
