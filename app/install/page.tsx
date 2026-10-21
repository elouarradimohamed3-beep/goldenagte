import type { Metadata } from 'next'
import { PillarLinks } from '@/components/pillar-links'
import Image from 'next/image'
import { Tv, Usb, Smartphone, Tablet, Box, Monitor, Server } from 'lucide-react'

const DEVICE_ICONS: Record<string, typeof Tv> = { 'smart-tv': Tv, 'fire-tv': Usb, android: Smartphone, ios: Tablet, mag: Box, windows: Monitor, enigma2: Server }
import { INSTALL_GUIDES } from '@/lib/install'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'IPTV Setup Guide: Smart TV, Firestick, Android, iPhone, MAG' },
  description: 'Step-by-step IPTV setup for Smart TV, Fire TV Stick, Android, iPhone and iPad, MAG box, Windows and Enigma 2. Get your IPTV service running in minutes.',
  alternates: { canonical: '/install' },
}

export default function Install() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#1b1830] to-[#0a0a0a] px-4 pt-36 pb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">How to set up IPTV on your device</h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Pick your device and follow the steps. Stuck? Message us on WhatsApp and we will help you install it.</p>
        <Image src="/images/install-devices.webp" alt="A remote, streaming stick, phone, tablet and laptop all showing the same streaming app" width={1408} height={768} priority className="mx-auto mt-8 w-full max-w-3xl rounded-2xl shadow-xl" />
        <nav className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {INSTALL_GUIDES.map((g) => <a key={g.id} href={`#${g.id}`} className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-brand hover:text-brand-ink">{g.title.split(' (')[0]}</a>)}
        </nav>
      </section>

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
        {INSTALL_GUIDES.map((g) => (
          <Reveal key={g.id}>
            <section id={g.id} className="glass scroll-mt-24 rounded-2xl p-7 sm:p-9">
              <div className="flex items-center gap-4">
                {(() => { const I = DEVICE_ICONS[g.id] ?? Tv; return <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand-ink"><I size={28} /></span> })()}
                <h2 className="text-2xl font-bold">{g.title}</h2>
              </div>
              {g.groups.map((grp, i) => (
                <div key={i} className="mt-6">
                  {grp.heading && <h3 className="mb-2 font-semibold text-brand-ink">{grp.heading}</h3>}
                  <ol className="space-y-2.5">
                    {grp.steps.map((s, k) => (
                      <li key={s} className="flex gap-3 text-zinc-300"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-xs font-bold text-brand-ink">{k + 1}</span><span className="break-words">{s}</span></li>
                    ))}
                  </ol>
                  {grp.note && <p className="mt-4 rounded-xl bg-brand/10 p-4 text-sm text-zinc-200">{grp.note}</p>}
                </div>
              ))}
            </section>
          </Reveal>
        ))}
        <p className="text-center text-sm text-zinc-400">Need a hand? <a href={waLink('Hi! I need help installing IPTV on my device')} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-ink underline">Chat with support on WhatsApp</a>.</p>
      </div>
      <PillarLinks />
      <CtaBand />
    </>
  )
}
