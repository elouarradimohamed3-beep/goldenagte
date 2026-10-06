import { Reveal } from './reveal'

export function Section({ title, eyebrow, intro, children, id, tone = 'white' }: { title: string; eyebrow?: string; intro?: string; children: React.ReactNode; id?: string; tone?: 'white' | 'soft' }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${tone === 'soft' ? 'bg-slate-50' : ''}`}>
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>}
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-slate-600">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
