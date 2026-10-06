export const LOCALES = ['fr', 'es', 'de', 'pt', 'pl', 'el', 'ar'] as const
export type Locale = (typeof LOCALES)[number]
export type Lang = 'en' | Locale

export const NATIVE: Record<Lang, string> = { en: 'English', fr: 'Français', es: 'Español', de: 'Deutsch', pt: 'Português', pl: 'Polski', el: 'Ελληνικά', ar: 'العربية' }
export const HTML_LANG: Record<Lang, string> = { en: 'en', fr: 'fr', es: 'es', de: 'de', pt: 'pt', pl: 'pl', el: 'el', ar: 'ar' }
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', fr: 'fr_FR', es: 'es_ES', de: 'de_DE', pt: 'pt_PT', pl: 'pl_PL', el: 'el_GR', ar: 'ar_AR' }
export const isRtl = (l: Lang) => l === 'ar'
export const isLocale = (s: string): s is Locale => (LOCALES as readonly string[]).includes(s)
export const homePath = (l: Lang) => (l === 'en' ? '/' : `/${l}`)

/** Language of the page from the URL: only the home page has translations (/fr, /es, ...). */
export function langFromPath(pathname: string | null): Lang {
  const seg = (pathname ?? '/').split('/')[1] ?? ''
  return isLocale(seg) ? seg : 'en'
}

/** First supported language in the browser's preference list, or null when English is fine. */
export function detectLang(): Lang | null {
  try {
    for (const l of [...(navigator.languages ?? []), navigator.language]) {
      const base = l?.toLowerCase().split('-')[0]
      if (base === 'en') return null
      if (base && isLocale(base)) return base
    }
  } catch {}
  return null
}

/** Replace {key} markers with elements and **bold** with <strong>. */
export const LANG_KEY = 'gg-lang'
