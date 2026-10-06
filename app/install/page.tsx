import type { Metadata } from 'next'
import Image from 'next/image'
import { INSTALL_GUIDES } from '@/lib/install'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Installation guide: how to set up IPTV on your device',
  description: 'Step-by-step IPTV setup for Smart TV, Fire TV Stick, Android, iPhone, MAG box, Windows and Enigma 2.',
  alternates: { canonical: '/install' },
}

export default function Install() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-soft to-white px-4 pt-36 pb-12 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">How to set up IPTV on your device</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">Pick your device and follow the steps. Stuck? Message us on WhatsApp and we will help you install it.</p>
        <Image src="/images/devices-flatlay.webp" alt="A remote, phone, tablet, laptop and streaming stick all showing the same streaming app" width={1408} height={768} priority className="mx-auto mt-8 w-full max-w-3xl rounded-3xl shadow-xl" />
        <nav className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {INSTALL_GUIDES.map((g) => <a key={g.id} href={`#${g.id}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand">{g.title.split(' (')[0]}</a>)}
        </nav>
      </section>

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
        {INSTALL_GUIDES.map((g) => (
          <Reveal key={g.id}>
            <section id={g.id} className="glass scroll-mt-24 rounded-3xl p-7 sm:p-9">
              <div className="flex items-center gap-4">
                {g.logo && <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-slate-50 p-2"><Image src={g.logo} alt="" width={64} height={64} className="max-h-full w-auto object-contain" /></span>}
                <h2 className="text-2xl font-bold">{g.title}</h2>
              </div>
              {g.groups.map((grp, i) => (
                <div key={i} className="mt-6">
                  {grp.heading && <h3 className="mb-2 font-semibold text-brand">{grp.heading}</h3>}
                  <ol className="space-y-2.5">
                    {grp.steps.map((s, k) => (
                      <li key={s} className="flex gap-3 text-slate-600"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">{k + 1}</span><span className="break-words">{s}</span></li>
                    ))}
                  </ol>
                  {grp.note && <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">{grp.note}</p>}
                </div>
              ))}
            </section>
          </Reveal>
        ))}
        <p className="text-center text-sm text-slate-500">Need a hand? <a href={waLink('Hi! I need help installing IPTV on my device')} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">Chat with support on WhatsApp</a>.</p>
      </div>
      <CtaBand />
    </>
  )
}
