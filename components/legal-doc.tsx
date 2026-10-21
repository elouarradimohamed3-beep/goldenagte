export function LegalDoc({ title, effective, intro, sections }: { title: string; effective: string; intro: string; sections: { h: string; p?: string[]; ul?: string[] }[] }) {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-36 pb-20">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-zinc-400">Effective date: {effective}</p>
      <p className="mt-6 text-zinc-300">{intro}</p>
      {sections.map((s) => (
        <section key={s.h} className="mt-8">
          <h2 className="text-xl font-bold">{s.h}</h2>
          {s.p?.map((t) => <p key={t} className="mt-2 text-zinc-300">{t}</p>)}
          {s.ul && <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-300">{s.ul.map((t) => <li key={t}>{t}</li>)}</ul>}
        </section>
      ))}
    </article>
  )
}
