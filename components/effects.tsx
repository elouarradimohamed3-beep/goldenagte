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
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('.spot')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointermove', onMove) }
  }, [])
  return (
    <>
      <div className="progress" />
      <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`glass fixed bottom-5 left-5 z-50 grid size-12 place-items-center rounded-full text-gold transition-all duration-300 hover:bg-gold hover:text-black ${top ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}><ArrowUp size={20} /></button>
    </>
  )
}
