import { Reveal } from './reveal'

export function Section({ title, eyebrow, intro, children, id, tone = 'white' }: { title: string; eyebrow?: string; intro?: string; children: React.ReactNode; id?: string; tone?: 'white' | 'soft' }) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${tone === 'soft' ? 'border-y hairline bg-[#0d0d0d]' : ''}`}>
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h2 className="text-3xl font-extrabold leading-tight sm:text-[2.6rem]">{title}</h2>
          {intro && <p className="mt-4 text-zinc-300">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
