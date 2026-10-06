import type { Metadata } from 'next'
import { MessageCircle, Mail } from 'lucide-react'
import { SITE, waLink } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact us', alternates: { canonical: '/contact' } }

export default function Contact() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-36 pb-16 text-center">
      <h1 className="text-4xl font-bold">Contact us</h1>
      <p className="mt-3 text-slate-600">Questions, a free trial request or help installing? Message us on WhatsApp, any time.</p>
      <div className="mt-8 flex flex-col items-center gap-3">
        <a href={waLink('Hi! I have a question about goldengateiptv.com')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-black"><MessageCircle size={18} />WhatsApp {SITE.whatsappDisplay}</a>
        <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-brand"><Mail size={16} />{SITE.email}</a>
      </div>
    </div>
  )
}
