import Link from 'next/link'
import { Reveal } from './reveal'
import { en } from '@/lib/i18n/dicts'
import type { Dict } from '@/lib/i18n/en'

export function CtaBand({ t = en.cta, home = '' }: { t?: Dict['cta']; home?: string }) {
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-2xl bg-ink px-6 py-14 text-center sm:px-16 sm:py-16">
          <h2 className="text-3xl font-bold !text-white sm:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{t.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`${home}/#plans`} className="rounded-lg bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">{t.seePlans}</Link>
            <Link href="/contact" className="rounded-lg border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10">{t.support}</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
