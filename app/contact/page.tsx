import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, MessageCircle } from 'lucide-react'
import { SITE, waLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Contact us: IPTV support 24/7',
  description: 'Our support team is available 24/7 on WhatsApp and email for connection issues, channel setup, device compatibility and streaming quality.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-brand-soft to-white px-4 pt-36 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">IPTV support, available 24/7</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">Our technical team is here to help with your IPTV subscription. We assist with connection issues, channel setup, device compatibility and streaming quality, so you can enjoy uninterrupted entertainment.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink('Hi! I have a question about goldengateiptv.com')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-black shadow-lg transition hover:brightness-110"><MessageCircle size={18} />WhatsApp {SITE.whatsappDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-ink transition hover:border-brand hover:text-brand"><Mail size={18} />Email us</a>
          </div>
          <p className="mt-4 text-sm text-slate-500">{SITE.email}</p>
        </div>
        <Reveal from="right"><Image src="/images/support-agent.webp" alt="A smiling support agent wearing a headset at a laptop" width={1408} height={768} priority className="mx-auto w-full max-w-xl rounded-3xl object-cover shadow-2xl" /></Reveal>
      </div>
    </section>
  )
}
