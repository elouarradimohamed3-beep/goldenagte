import { Reveal } from './reveal'

export function Section({ title, eyebrow, intro, children, id, tone = 'white' }: { title: string; eyebrow?: string; intro?: string; children: React.ReactNode; id?: string; tone?: 'white' | 'soft' }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${tone === 'soft' ? 'border-y border-zinc-800 bg-zinc-950' : ''}`}>
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-brand-ink">{eyebrow}</p>}
          <h2 className="text-3xl font-bold sm:text-4xl"><span className="underline-draw">{title}</span></h2>
          {intro && <p className="mt-4 text-zinc-300">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
