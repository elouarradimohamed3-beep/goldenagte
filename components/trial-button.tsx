'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { UI } from '@/lib/i18n/ui'
import { isRtl } from '@/lib/i18n'
import { useLang } from './use-lang'
import { TrialOptions } from './trial-options'

/** Button that opens the two trial options (3-hour free trial or paid 1-day pass) in a dialog. */
export function TrialButton({ label, className }: { label: string; className?: string }) {
  const [open, setOpen] = useState(false)
  const lang = useLang()
  const t = UI[lang].trial
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>{label}</button>
      {open && createPortal(
        <div dir={isRtl(lang) ? 'rtl' : 'ltr'} className="fixed inset-0 z-[75] grid place-items-center overflow-y-auto p-4" role="dialog" aria-modal="true" aria-labelledby="trial-title">
          <button aria-label={t.close} tabIndex={-1} onClick={() => setOpen(false)} className="fixed inset-0 bg-ink/60 backdrop-blur-sm" style={{ animation: 'fade .3s ease both' }} />
          <div className="pop-in relative my-8 w-full max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">
            <button onClick={() => setOpen(false)} aria-label={t.close} className="absolute end-4 top-4 grid size-9 place-items-center rounded-full bg-zinc-900 text-zinc-300 shadow transition hover:text-white"><X size={18} /></button>
            <h2 id="trial-title" className="pe-10 text-2xl font-bold">{t.title}</h2>
            <p className="mt-1 text-zinc-300">{t.sub}</p>
            <div className="mt-8"><TrialOptions compact /></div>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
