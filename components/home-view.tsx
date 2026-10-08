import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, X as XIcon, Gauge, Headphones, Layers, Film, MonitorSmartphone, Newspaper, Popcorn, Baby, Clapperboard, Mountain, Music2, Languages, Server, Trophy, Tv2, Zap, Activity, Globe2, Cpu } from 'lucide-react'
import { PLAN_TIERS, SITE } from '@/lib/site'
import { FOCUS } from '@/lib/seo'
import { homePath, isRtl, HTML_LANG, type Lang } from '@/lib/i18n'
import { rich } from '@/lib/i18n/rich'
import { OVERRIDES } from '@/lib/i18n/overrides'
import type { Dict } from '@/lib/i18n/en'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { PillarLinks } from '@/components/pillar-links'
import { PricingSection } from '@/components/pricing-section'
import { ExploreTabs } from '@/components/explore-tabs'
import { JsonLd } from '@/components/json-ld'

const WHY_ICONS = [Zap, MonitorSmartphone, Tv2, Server, Headphones]
const INFRA_ICONS = [Server, Activity, Globe2, Cpu]
const GENRE_ICONS = [Trophy, Newspaper, Clapperboard, Popcorn, Baby, Mountain, Music2, Languages]
const FEAT_ICONS = [Gauge, Layers, Film]
// Same order as the genres: sports, news, movies, series, kids, documentaries, music, international
const GENRE_IMAGES: (string | null)[] = [null, 'genre-news', 'genre-movies', 'genre-series', 'genre-kids', 'genre-docs', 'genre-music', 'genre-international']

/** The whole home page, rendered from one dictionary so every language shares the same layout. */
export function HomeView({ lang, t, guides }: { lang: Lang; t: Dict; guides?: React.ReactNode }) {
  const home = homePath(lang)
  const plansHref = `${home === '/' ? '' : home}#plans`
  const A = 'font-semibold text-brand hover:underline'
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', name: SITE.name, url: SITE.url, logo: `${SITE.url}/images/logo.png`, description: FOCUS.description, contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: SITE.email, telephone: '+212707711512', availableLanguage: ['English', 'French', 'Spanish', 'German', 'Portuguese', 'Polish', 'Greek', 'Arabic'], areaServed: OVERRIDES[lang]?.area ?? 'US' } },
      { '@type': 'WebSite', name: SITE.name, url: SITE.url, inLanguage: HTML_LANG[lang] },
      { '@type': 'WebPage', url: `${SITE.url}${home === '/' ? '' : home}`, name: t.meta.title, description: t.meta.description, inLanguage: HTML_LANG[lang], about: OVERRIDES[lang]?.focus.keyword ?? FOCUS.keyword },
      {
        '@type': 'Product', name: `${SITE.name} IPTV subscription`, description: t.meta.description, brand: { '@type': 'Brand', name: SITE.name },
        offers: PLAN_TIERS.flatMap((tier) => tier.plans).map((pl) => ({ '@type': 'Offer', name: `${pl.label}, ${pl.connections} ${pl.connections === 1 ? 'screen' : 'screens'}`, price: pl.price, priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceValidUntil: '2027-10-06', url: `${SITE.url}/plans` })),
      },
      { '@type': 'FAQPage', inLanguage: HTML_LANG[lang], mainEntity: t.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div dir={isRtl(lang) ? 'rtl' : 'ltr'} lang={HTML_LANG[lang]}>
      <JsonLd data={ld} />
      <Hero t={t} home={home} />

      <div className="marquee relative overflow-hidden border-y border-slate-200 bg-white py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-hidden dir="ltr">
        <div className="marquee-track flex w-max gap-3 whitespace-nowrap">
          {[...t.genres.items, ...t.genres.items, ...t.genres.items, ...t.genres.items].map((g, k) => <span key={k} className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-600">{g.title}</span>)}
        </div>
      </div>

      <PricingSection t={t.plans} />

      <section className="px-4 pt-20 pb-4">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-brand">{t.devices.eyebrow}</p>
          <div className="lift overflow-hidden rounded-2xl border border-slate-200 bg-white" dir="ltr">
            <Image src="/images/devices-lineup.webp" alt={t.devices.alt} width={1340} height={315} className="mx-auto h-auto w-full" />
          </div>
        </Reveal>
      </section>

      <Section eyebrow={t.service.eyebrow} title={t.service.title}>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg text-ink">{rich(t.service.p1)}</p>
            <p className="mt-4">{rich(t.service.p2, { sub: <Link href="/iptv-subscription" className={A}>{t.service.sub}</Link>, prem: <Link href="/iptv-premium" className={A}>{t.service.prem}</Link>, usa: <Link href="/iptv-usa" className={A}>{t.service.usa}</Link> })}</p>
            <p className="mt-4">{rich(t.service.p3, { what: <Link href="/blog/what-is-iptv-service" className={A}>{t.service.what}</Link>, blog: <Link href="/blog" className={A}>{t.service.blog}</Link> })}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass rounded-2xl p-7">
              <h3 className="text-lg font-semibold">{t.service.chooseTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {t.service.choose.map((c) => <li key={c} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{c}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow={t.why.eyebrow} title={t.why.title}>
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl">
              <Image src="/images/kids-tv.webp" alt={t.why.tileAlt} width={1408} height={768} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold !text-white sm:text-3xl">{t.why.tileTitle}</h3>
                <p className="mt-2 max-w-md text-white/80">{t.why.tileBody}</p>
              </div>
            </div>
          </Reveal>
          {t.why.items.map((f, i) => { const I = WHY_ICONS[i]; return (
            <Reveal key={f.title} delay={i * 80}>
              <div className="lift glass spot group icon-spin h-full rounded-2xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"><I size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden">
        <Image src="/images/family-living-room.webp" alt={t.band.alt} width={1408} height={768} className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent rtl:bg-gradient-to-l" />
        <Reveal className="mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <h2 className="max-w-xl text-3xl font-bold !text-white sm:text-5xl">{t.band.title}</h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">{t.band.body}</p>
          <Link href={plansHref} className="mt-8 inline-flex items-center gap-2 btn-shine press rounded-lg bg-white px-8 py-3.5 font-semibold text-brand shadow-xl transition hover:scale-105">{t.band.cta} <ArrowRight size={18} className="rtl:rotate-180" /></Link>
        </Reveal>
      </section>

      <Section eyebrow={t.steps.eyebrow} title={t.steps.title}>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-8 right-[16%] left-[16%] hidden h-px border-t-2 border-dashed border-brand/30 md:block" />
          {t.steps.items.map((st, i) => (
            <Reveal key={st.title} delay={i * 140} from="zoom">
              <div className="relative text-center">
                <span className="pulse-ring mx-auto grid size-14 place-items-center rounded-full bg-ink text-xl font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{st.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-slate-600">{st.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow={t.genres.eyebrow} title={t.genres.title} intro={t.genres.intro}>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.genres.items.map((g, i) => { const I = GENRE_ICONS[i]; return (
            <Reveal key={g.title} delay={(i % 4) * 80}>
              <div className="lift icon-spin group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink p-6 text-white">
                {GENRE_IMAGES[i] ? (
                  <>
                    <Image src={`/images/${GENRE_IMAGES[i]}.webp`} alt="" width={1000} height={545} sizes="(min-width: 1024px) 25vw, 50vw" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/10" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-ink" />
                    <I className="absolute -end-3 -bottom-3 size-28 text-white/[.06]" strokeWidth={1.2} />
                  </>
                )}
                <span className="relative grid size-11 place-items-center rounded-lg bg-white/15 text-sky-200 backdrop-blur-sm"><I size={22} /></span>
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-lg font-semibold !text-white">{g.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{g.body}</p>
                </div>
              </div>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow={t.explore.eyebrow} title={t.explore.title}>
        <ExploreTabs t={t.explore} plansHref={plansHref} />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.explore.features.map((a, i) => { const I = FEAT_ICONS[i]; return (
            <Reveal key={a.title} delay={i * 100}>
              <article className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><I size={22} /></span>
                <div><h3 className="font-semibold">{a.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{a.body}</p></div>
              </article>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section tone="soft" eyebrow={t.infra.eyebrow} title={t.infra.title} intro={t.infra.intro}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.infra.items.map((a, i) => { const I = INFRA_ICONS[i]; return (
            <Reveal key={a.title} delay={i * 90}>
              <article className="lift glass spot icon-spin h-full rounded-2xl p-6">
                <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-xl bg-brand text-white"><I size={20} /></span><span className="text-3xl font-black text-slate-200" dir="ltr">0{i + 1}</span></div>
                <h3 className="mt-4 font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
              </article>
            </Reveal>
          )})}
        </div>
      </Section>

      <Section eyebrow={t.customers.eyebrow} title={t.customers.title} intro={t.customers.intro}>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" dir="ltr">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 100} from="zoom">
              <div className="lift overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <Image src={`/images/chat-${n}.webp`} alt={`${t.customers.alt} ${n}`} width={569} height={1011} className="h-auto w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow={t.compare.eyebrow} title={t.compare.title}>
        <Reveal>
          <div className="glass mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <div className="grid grid-cols-3 bg-slate-50 text-sm font-semibold"><span className="p-4" /><span className="p-4 text-slate-500">{t.compare.cable}</span><span className="p-4 text-brand">{t.compare.us}</span></div>
            {t.compare.rows.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-3 border-t border-slate-100 text-sm transition-colors hover:bg-brand-soft/40">
                <span className="p-4 font-medium text-ink">{k}</span>
                <span className="flex gap-2 p-4 text-slate-500"><XIcon size={16} className="mt-0.5 shrink-0 text-red-400" />{a}</span>
                <span className="flex gap-2 p-4 text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />{b}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {guides}

      <PillarLinks t={t.pillars} />

      <Section id="faq" tone="soft" eyebrow={t.faq.eyebrow} title={t.faq.title}>
        <FaqList items={t.faq.items} />
      </Section>

      <CtaBand t={t.cta} home={home === '/' ? '' : home} />
    </div>
  )
}
