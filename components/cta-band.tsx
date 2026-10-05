import Link from 'next/link'
import { Reveal } from './reveal'

export function CtaBand() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/20 via-panel to-orange-600/20 p-10 text-center sm:p-16">
          <div className="animate-drift absolute -top-24 -right-24 size-72 rounded-full bg-gold/30 blur-[90px]" />
          <h2 className="relative text-3xl font-extrabold sm:text-5xl">Ready to watch <span className="text-gradient">anything, anywhere?</span></h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/70">Pick a plan, get your login in minutes, and enjoy a full week to decide. If it is not for you, we refund you.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#plans" className="animate-pulse-ring rounded-full bg-gold px-8 py-3.5 font-semibold text-black hover:bg-gold-dark">See plans</Link>
            <Link href="/contact" className="glass rounded-full px-8 py-3.5 font-medium hover:border-gold/60">Talk to support</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
