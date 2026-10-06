'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function Effects() {
  const [top, setTop] = useState(false)
  useEffect(() => {
    const bar = document.documentElement
    const onScroll = () => {
      const max = bar.scrollHeight - window.innerHeight
      bar.style.setProperty('--p', String(max > 0 ? window.scrollY / max : 0))
      setTop(window.scrollY > 800)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll) }
  }, [])
  return (
    <>
      <div className="progress" />
      <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 left-5 z-50 grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:text-brand ${top ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}><ArrowUp size={20} /></button>
    </>
  )
}
