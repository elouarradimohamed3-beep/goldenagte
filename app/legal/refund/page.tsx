import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Refund and cancellation policy', alternates: { canonical: '/legal/refund' } }

export default function Refund() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-36 pb-16 space-y-4 text-slate-600">
      <h1 className="text-4xl font-bold text-slate-900">Refund and cancellation policy</h1>
      <p className="text-sm text-slate-500">Last updated: October 5, 2026</p>
      <p>Ask for a refund within seven days of purchase and we will return your payment.</p>
      <p>You can stop renewing at any time. Your plan stays active until the end of the period you paid for.</p>
    </div>
  )
}
