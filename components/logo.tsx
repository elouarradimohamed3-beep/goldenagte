/** Golden Gate monogram: two bridge towers under a suspension arc, inside a thin gold ring. */
export function LogoMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id="gg-gold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FB7185" />
          <stop offset=".5" stopColor="#C026D3" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22.5" stroke="url(#gg-gold)" strokeWidth="1.5" />
      <path d="M8 29 C 14 18, 34 18, 40 29" stroke="url(#gg-gold)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 13 V35 M32 13 V35" stroke="url(#gg-gold)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M14.5 17 H17.5 M30.5 17 H33.5" stroke="url(#gg-gold)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 35 H39" stroke="url(#gg-gold)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 23 V35 M24 21.6 V35 M28 23 V35" stroke="url(#gg-gold)" strokeWidth=".8" strokeLinecap="round" opacity=".7" />
    </svg>
  )
}

export function Logo({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} dir="ltr">
      <LogoMark size={compact ? 32 : 38} />
      <span className="flex flex-col leading-none">
        <span className={`font-display whitespace-nowrap font-extrabold text-white ${compact ? 'text-[.95rem] tracking-[.04em] sm:text-[1.15rem] sm:tracking-[.06em]' : 'text-[1.15rem] tracking-[.06em]'}`}>GOLDEN GATE</span>
        <span className="mt-1 flex items-center gap-2 text-[.62rem] font-bold tracking-[.32em] text-accent">PREMIUM IPTV</span>
      </span>
    </span>
  )
}
