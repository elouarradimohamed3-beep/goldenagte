import { Reveal } from './reveal'

export function Section({ title, eyebrow, intro, children, id }: { title: string; eyebrow?: string; intro?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto mt-28 max-w-6xl px-4">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>}
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-white/60">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}
