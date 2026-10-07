'use client'
import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, delay = 0, from = 'up', className = '' }: { children: React.ReactNode; delay?: number; from?: 'up' | 'left' | 'right' | 'zoom'; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const dir = from === 'left' ? 'reveal-left' : from === 'right' ? 'reveal-right' : from === 'zoom' ? 'reveal-zoom' : ''
  return <div ref={ref} style={{ ['--d' as string]: `${delay}ms` }} className={`reveal ${dir} ${shown ? 'in' : ''} ${className}`}>{children}</div>
}
