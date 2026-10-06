import Link from 'next/link'
import { Reveal } from './reveal'

export function CtaBand() {
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-violet-600 to-fuchsia-600 p-10 text-center text-white sm:p-16">
          <div className="animate-drift absolute -top-24 -right-24 size-72 rounded-full bg-white/20 blur-[80px]" />
          <h2 className="relative text-3xl font-extrabold !text-white sm:text-5xl">Ready to watch anything, anywhere?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">Pick a plan, get your login in minutes, and take a full week to decide. If it is not for you, we refund you.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#plans" className="rounded-full bg-white px-8 py-3.5 font-semibold text-brand shadow-xl transition hover:scale-105">See plans</Link>
            <Link href="/contact" className="rounded-full border border-white/50 px-8 py-3.5 font-medium text-white transition hover:bg-white/10">Talk to support</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
