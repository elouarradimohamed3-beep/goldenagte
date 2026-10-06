import { Clapperboard, Baby, Newspaper, Play, Popcorn, Trophy } from 'lucide-react'

const TILES = [
  { Icon: Trophy, label: 'Sports', c: 'from-emerald-500 to-teal-700' },
  { Icon: Clapperboard, label: 'Movies', c: 'from-rose-500 to-red-700' },
  { Icon: Popcorn, label: 'Series', c: 'from-violet-500 to-indigo-700' },
  { Icon: Newspaper, label: 'News', c: 'from-sky-500 to-blue-700' },
  { Icon: Baby, label: 'Kids', c: 'from-amber-400 to-orange-600' },
]

export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* TV */}
      <div className="rounded-[1.4rem] bg-slate-900 p-2.5 shadow-2xl shadow-brand/30 ring-1 ring-slate-800">
        <div className="overflow-hidden rounded-xl bg-[#0d1226]">
          <div className="flex items-center justify-between px-4 py-2.5 text-[10px] text-slate-400">
            <span className="font-semibold text-white">Golden Gate IPTV</span>
            <span className="flex gap-3"><span>Live</span><span>Movies</span><span>Series</span></span>
          </div>
          <div className="relative mx-3 overflow-hidden rounded-lg bg-gradient-to-br from-brand via-violet-600 to-fuchsia-600 p-5">
            <span className="inline-flex items-center gap-1.5 rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white"><span className="size-1.5 animate-pulse rounded-full bg-white" />LIVE</span>
            <p className="mt-6 font-display text-xl font-bold text-white sm:text-2xl">Live sports tonight</p>
            <p className="text-xs text-white/80">4K · HDR · Surround sound</p>
            <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-white text-brand"><Play size={18} fill="currentColor" /></span>
            <div className="absolute inset-x-5 bottom-3 flex items-end gap-1 opacity-30">
              {Array.from({ length: 18 }).map((_, k) => <span key={k} className="w-1.5 rounded-sm bg-white" style={{ height: '30%', animation: `bars ${0.8 + (k % 5) * 0.15}s ease-in-out ${k * 0.05}s infinite` }} />)}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 p-3">
            {TILES.map(({ Icon, label, c }) => (
              <div key={label} className={`flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-lg bg-gradient-to-b ${c} text-white`}>
                <Icon size={18} /><span className="text-[9px] font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-1/3 rounded-b-xl bg-slate-800" />
      <div className="mx-auto h-1.5 w-1/2 rounded-full bg-slate-300/60 blur-sm" />

      {/* phone */}
      <div className="animate-float absolute -right-3 -bottom-8 w-28 rounded-[1.6rem] bg-slate-900 p-1.5 shadow-2xl sm:-right-10 sm:w-36" style={{ animationDelay: '-2s' }}>
        <div className="overflow-hidden rounded-[1.2rem] bg-[#0d1226] p-2">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-slate-700" />
          <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 p-3 text-white"><p className="text-[10px] font-bold">Live now</p><p className="text-[9px] opacity-80">Football</p></div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {TILES.slice(1, 5).map(({ Icon, c, label }) => <div key={label} className={`grid aspect-square place-items-center rounded-md bg-gradient-to-b ${c} text-white`}><Icon size={14} /></div>)}
          </div>
        </div>
      </div>

      <div className="glass animate-float absolute -top-10 -left-2 rounded-2xl px-4 py-3 text-sm sm:-left-8"><p className="text-xs text-slate-500">Activated in</p><p className="font-display text-lg font-bold text-brand">~ 5 minutes</p></div>
    </div>
  )
}
