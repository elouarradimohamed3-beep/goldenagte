import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'DMCA and copyright', description: 'How to report copyright concerns to Golden Gate IPTV.', alternates: { canonical: '/dmca' } }

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 pt-36 pb-16 text-slate-600">
      <h1 className="text-4xl font-bold text-slate-900">DMCA and copyright</h1>
      <p className="text-sm text-slate-500">Last updated: October 5, 2026</p>
      <p>We respect intellectual property rights. If you are a rights holder and believe material linked or referenced from this site infringes your copyright, send us a notice.</p>
      <p>Please include your contact details, a description of the work, where you believe the infringement appears, a statement that you act in good faith, and a statement, made under penalty of perjury, that you are authorized to act for the rights holder.</p>
      <p>Send notices through the contact page. We review valid notices promptly and act on them as required by law.</p>
    </div>
  )
}
