import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/plans', '/reseller', '/install', '/faq', '/blog', '/free-trial', '/about', '/contact', '/legal/terms', '/legal/refund', '/privacy-policy', '/cookie-policy', '/dmca']
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: SITE.launched })),
    ...getPosts().map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.date })),
  ]
}
