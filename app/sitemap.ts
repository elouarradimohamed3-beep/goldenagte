import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/plans', '/reseller', '/install', '/faq', '/about', '/contact', '/legal/terms', '/legal/refund']
    .map((p) => ({ url: `${SITE.url}${p}`, lastModified: SITE.launched }))
}
