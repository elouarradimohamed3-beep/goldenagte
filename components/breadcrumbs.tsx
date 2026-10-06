import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SITE } from '@/lib/site'
import { JsonLd } from './json-ld'

export type Crumb = { name: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE.url}${c.href}` })),
  }
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <JsonLd data={ld} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i < items.length - 1 ? <Link href={c.href} className="transition-colors hover:text-brand">{c.name}</Link> : <span aria-current="page" className="text-slate-700">{c.name}</span>}
            {i < items.length - 1 && <ChevronRight size={14} />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
