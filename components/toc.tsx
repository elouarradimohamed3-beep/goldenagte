import GithubSlugger from 'github-slugger'

export function headings(md: string) {
  const slugger = new GithubSlugger()
  return [...md.matchAll(/^## (.+)$/gm)].map((m) => ({ text: m[1].replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1'), id: slugger.slug(m[1].replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')) }))
}

export function Toc({ body }: { body: string }) {
  const hs = headings(body)
  if (hs.length < 4) return null
  return (
    <nav aria-label="Table of contents" className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-sm font-semibold text-zinc-50">In this guide</p>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-zinc-300 marker:text-slate-400">
        {hs.map((h) => <li key={h.id}><a href={`#${h.id}`} className="transition-colors hover:text-brand-ink">{h.text}</a></li>)}
      </ol>
    </nav>
  )
}
