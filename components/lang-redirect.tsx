'use client'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { HTML_LANG, LANG_KEY, detectLang, homePath, isRtl, langFromPath } from '@/lib/i18n'

/**
 * Keeps <html lang/dir> in sync with the page language and, on the first visit to the English
 * home page, sends visitors whose browser language we support to the translated home page.
 */
export function LangRedirect() {
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    const lang = langFromPath(pathname)
    document.documentElement.lang = HTML_LANG[lang]
    document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr'
  }, [pathname])
  useEffect(() => {
    if (pathname !== '/') return
    let saved: string | null = null
    try { saved = localStorage.getItem(LANG_KEY) } catch {}
    if (saved) { if (saved !== 'en') router.replace(homePath(saved as never)); return }
    const d = detectLang()
    if (d) router.replace(homePath(d))
  }, [pathname, router])
  return null
}
