import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
export const metadata: Metadata = { title: 'Contact us', alternates: { canonical: '/contact' } }

export default async function Contact({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams
  const subject = encodeURIComponent(plan ? `Order: ${plan}` : 'Question')
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Contact us</h1>
      <p className="mt-3 text-white/70">{plan ? `You chose plan "${plan}". ` : ''}Email us and we will reply with payment options and set you up.</p>
      <a href={`mailto:${SITE.email}?subject=${subject}`} className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-black hover:bg-gold-dark">{SITE.email}</a>
    </div>
  )
}
