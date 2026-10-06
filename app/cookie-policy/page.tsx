import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Cookie policy', description: 'Cookie policy: how Golden Gate IPTV uses cookies and similar browser storage, and how you can clear or block it at any time.', alternates: { canonical: '/cookie-policy' } }

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 pt-36 pb-16 text-slate-600">
      <h1 className="text-4xl font-bold text-slate-900">Cookie policy</h1>
      <p className="text-sm text-slate-500">Last updated: October 6, 2026</p>
      <p>Our site stores a small value in your browser to remember that you dismissed the cookie notice. It does not identify you.</p>
      <p>Our analytics are designed to work without tracking cookies. If we add other tools later, we will update this page and ask for consent where required.</p>
      <p>You can clear or block site data in your browser settings at any time.</p>
    </div>
  )
}
