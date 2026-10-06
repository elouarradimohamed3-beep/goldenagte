import Link from 'next/link'
import { Reveal } from './reveal'

export function CtaBand() {
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-2xl bg-ink px-6 py-14 text-center sm:px-16 sm:py-16">
          <h2 className="text-3xl font-bold !text-white sm:text-4xl">Ready to start watching?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Pick a plan, get your login in minutes, and take a full week to decide. If it is not for you, we refund you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#plans" className="rounded-lg bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">See plans</Link>
            <Link href="/contact" className="rounded-lg border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10">Talk to support</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
