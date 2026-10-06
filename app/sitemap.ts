import type { MetadataRoute } from 'next'
import { getIndexable } from '@/lib/posts'
import { PILLARS } from '@/lib/seo'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const last = SITE.launched
  const entry = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' = 'monthly') => ({ url: `${SITE.url}${path}`, lastModified: last, changeFrequency, priority })
  return [
    entry('', 1, 'weekly'),
    ...PILLARS.map((p) => entry(`/${p.slug}`, 0.9, 'weekly')),
    entry('/plans', 0.9),
    ...(['service', 'subscription', 'usa', 'premium'] as const).map((k) => entry(`/blog/topic/${k}`, 0.6, 'weekly')),
    entry('/free-trial', 0.8),
    entry('/blog', 0.8, 'weekly'),
    entry('/install', 0.7),
    entry('/reseller', 0.7),
    entry('/faq', 0.6),
    entry('/about', 0.4),
    entry('/contact', 0.4),
    entry('/legal/terms', 0.2),
    entry('/legal/refund', 0.2),
    entry('/privacy-policy', 0.2),
    entry('/cookie-policy', 0.2),
    entry('/dmca', 0.2),
    ...getIndexable().map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: 'monthly' as const, priority: 0.5 })),
  ]
}
