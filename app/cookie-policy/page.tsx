import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Cookie policy', description: 'Cookie policy: how Golden Gate IPTV uses cookies and similar browser storage, and how you can clear or block it at any time.', alternates: { canonical: '/cookie-policy' } }

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 pt-36 pb-16 text-slate-600">
      <h1 className="text-4xl font-bold text-slate-900">Cookie policy</h1>
      <p className="text-sm text-slate-500">Last updated: October 7, 2026</p>
      <p>Our site stores a small value in your browser to remember your cookie choice, your language, your currency and whether you have seen our offer. These values do not identify you.</p>
      <p>We use Google Analytics (Google tag) to understand how the site is used. Analytics cookies are only set if you choose Accept in the cookie notice. If you choose Decline, or ignore the notice, analytics storage stays off. We also use privacy-friendly Vercel Analytics, which does not use tracking cookies. We do not use the data for advertising.</p>
      <p>You can clear or block site data in your browser settings at any time.</p>
    </div>
  )
}
