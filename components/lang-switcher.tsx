'use client'
import { useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { LANG_KEY, NATIVE, homePath, type Lang } from '@/lib/i18n'
import { UI } from '@/lib/i18n/ui'
import { useLang } from './use-lang'

const ORDER: Lang[] = ['en', 'fr', 'es', 'de', 'pt', 'pl', 'el', 'ar']

export function LangSwitcher({ className = '' }: { className?: string }) {
  const lang = useLang()
  const router = useRouter()
  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{UI[lang].language}</span>
      <Globe size={16} className="pointer-events-none absolute start-2.5 text-slate-500" />
      <select
        value={lang}
        onChange={(e) => {
          const next = e.target.value as Lang
          try { localStorage.setItem(LANG_KEY, next) } catch {}
          router.push(homePath(next))
        }}
        className="h-9 cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white ps-8 pe-3 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-brand focus:border-brand"
      >
        {ORDER.map((l) => <option key={l} value={l}>{NATIVE[l]}</option>)}
      </select>
    </label>
  )
}
