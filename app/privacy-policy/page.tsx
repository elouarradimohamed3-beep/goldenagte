import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy policy', description: 'How Golden Gate IPTV collects, uses and protects your information.', alternates: { canonical: '/privacy-policy' } }

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 pt-36 pb-16 text-slate-600">
      <h1 className="text-4xl font-bold text-slate-900">Privacy policy</h1>
      <p className="text-sm text-slate-500">Last updated: October 5, 2026</p>
      <p>We collect only what we need to provide your subscription: the name or handle you give us, your contact details on WhatsApp or email, the device you use, and payment confirmation details sent by your payment provider.</p>
      <p>We use this information to activate and support your subscription, answer your questions and prevent misuse. We do not sell your personal information.</p>
      <p>Payments are handled by third-party payment providers. We do not store full card numbers.</p>
      <p>We use privacy-friendly analytics to understand which pages are visited. You can ask us to delete your information at any time by contacting support.</p>
      <p>This is a general policy. Have it reviewed against the laws that apply to your business before relying on it.</p>
    </div>
  )
}
