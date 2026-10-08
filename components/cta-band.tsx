import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from './reveal'
import { en } from '@/lib/i18n/dicts'
import type { Dict } from '@/lib/i18n/en'

export function CtaBand({ t = en.cta, home = '' }: { t?: Dict['cta']; home?: string }) {
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center sm:px-16 sm:py-20">
          <Image src="/images/cta-bg.webp" alt="" fill sizes="(min-width: 1152px) 1152px, 100vw" className="orb -z-10 scale-110 object-cover opacity-90" />
          <div className="absolute inset-0 -z-10 bg-ink/40" />
          <h2 className="text-3xl font-bold !text-white sm:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{t.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`${home}/#plans`} className="btn-shine pulse-ring press rounded-lg bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">{t.seePlans}</Link>
            <Link href="/contact" className="rounded-lg border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10">{t.support}</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
