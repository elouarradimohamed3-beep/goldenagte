export type PillarKey = 'service' | 'subscription' | 'usa' | 'premium'

/**
 * Keyword strategy (Semrush, US database, Oct 2026):
 *  - FOCUS  "IPTV service"      8,100/mo, KD 21  -> home page (+ "iptv services" 5,400, KD 20)
 *  - PILLAR "IPTV subscription" 5,400/mo, KD 37  -> /iptv-subscription (commercial, CPC $1.32)
 *  - PILLAR "IPTV USA"          2,400/mo, KD 19  -> /iptv-usa
 *  - PILLAR "IPTV premium"      1,000/mo, KD 20  -> /iptv-premium ("premium iptv" 720, KD 13)
 */
export const FOCUS = {
  keyword: 'IPTV service',
  title: 'IPTV Service USA: Live TV, Movies & Series from $20/Month',
  description: 'A reliable IPTV service for the USA: live TV, movies and series in HD and 4K on any device. Plans from $7 a day or $20 a month with a 7-day refund.',
}

export type Pillar = { key: Exclude<PillarKey, 'service'>; slug: string; label: string; keyword: string; blurb: string }

export const PILLARS: Pillar[] = [
  { key: 'subscription', slug: 'iptv-subscription', label: 'IPTV Subscription', keyword: 'IPTV subscription', blurb: 'Plans, prices and how to buy an IPTV subscription safely.' },
  { key: 'usa', slug: 'iptv-usa', label: 'IPTV USA', keyword: 'IPTV USA', blurb: 'IPTV in the United States: devices, internet speeds, pricing and setup.' },
  { key: 'premium', slug: 'iptv-premium', label: 'IPTV Premium', keyword: 'premium IPTV', blurb: 'What makes IPTV premium: 4K quality, multiple screens, stability and support.' },
]

export const pillarByKey = (k: PillarKey) => PILLARS.find((p) => p.key === k)
export const pillarBySlug = (s: string) => PILLARS.find((p) => p.slug === s)

export const CLUSTER_LABEL: Record<PillarKey, string> = {
  service: 'IPTV Service',
  subscription: 'IPTV Subscription',
  usa: 'IPTV USA',
  premium: 'IPTV Premium',
}

/** URL of the page that "owns" a cluster. */
export const clusterHref = (k: PillarKey) => (k === 'service' ? '/' : `/${pillarByKey(k)!.slug}`)

/** Assign every article to exactly one topic cluster from its title and slug. */
export function classify(title: string, slug: string): PillarKey {
  const t = `${title} ${slug}`.toLowerCase().replace(/-/g, ' ')
  if (/subscription|cost|price|pricing|cheap|deal|buy |monthly|annual|trial|how much/.test(t)) return 'subscription'
  if (/premium|4k|paid|ultra hd|high performance|pro\b/.test(t)) return 'premium'
  if (/\busa\b|\bus\b|america|united states|florida|texas|california|u\.s\./.test(t)) return 'usa'
  return 'service'
}

/** A short contextual sentence that links an article to its hub, with varied anchor text. */
export function quickLinks(key: PillarKey): string {
  const service = '[IPTV service](/)'
  const sub = '[IPTV subscription](/iptv-subscription)'
  const usa = '[IPTV USA](/iptv-usa)'
  const premium = '[premium IPTV](/iptv-premium)'
  switch (key) {
    case 'service':
      return `New to this? See how our ${service} works, compare an ${sub}, or read the ${usa} and ${premium} guides.`
    case 'subscription':
      return `This guide is part of our ${sub} hub. Compare current plans on the home page for our ${service}, or read about ${premium} and ${usa} viewing.`
    case 'usa':
      return `This guide is part of our ${usa} hub. See our ${service}, compare an ${sub}, or learn what ${premium} adds.`
    case 'premium':
      return `This guide is part of our ${premium} hub. See what a good ${service} includes, compare an ${sub}, or read the ${usa} guide.`
  }
}
