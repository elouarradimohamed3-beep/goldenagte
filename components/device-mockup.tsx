import { Clapperboard, Baby, Newspaper, Play, Popcorn, Trophy } from 'lucide-react'

const TILES = [
  { Icon: Trophy, label: 'Sports' },
  { Icon: Clapperboard, label: 'Movies' },
  { Icon: Popcorn, label: 'Series' },
  { Icon: Newspaper, label: 'News' },
  { Icon: Baby, label: 'Kids' },
]

export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-2xl bg-ink p-2.5 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/10">
        <div className="overflow-hidden rounded-xl bg-[#0a1630]">
          <div className="flex items-center justify-between px-4 py-2.5 text-[10px] text-slate-400">
            <span className="font-semibold text-white">Golden Gate IPTV</span>
            <span className="flex gap-3"><span className="text-white">Live</span><span>Movies</span><span>Series</span></span>
          </div>
          <div className="relative mx-3 overflow-hidden rounded-lg bg-gradient-to-br from-brand to-navy p-5">
            <span className="inline-flex items-center gap-1.5 rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white"><span className="size-1.5 rounded-full bg-white" />LIVE</span>
            <p className="mt-6 text-xl font-bold text-white sm:text-2xl">Live sports tonight</p>
            <p className="text-xs text-white/75">4K · HDR · Surround sound</p>
            <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-white text-brand"><Play size={18} fill="currentColor" /></span>
          </div>
          <div className="grid grid-cols-5 gap-2 p-3">
            {TILES.map(({ Icon, label }) => (
              <div key={label} className="flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-lg bg-white/[.07] text-white ring-1 ring-white/10">
                <Icon size={18} className="text-sky-300" /><span className="text-[9px] font-medium text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto h-2.5 w-1/3 rounded-b-lg bg-slate-800" />

      <div className="absolute -right-3 -bottom-8 w-28 rounded-[1.4rem] bg-ink p-1.5 shadow-xl ring-1 ring-slate-900/10 sm:-right-8 sm:w-32">
        <div className="overflow-hidden rounded-[1.1rem] bg-[#0a1630] p-2">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-slate-700" />
          <div className="rounded-lg bg-brand p-3 text-white"><p className="text-[10px] font-bold">Live now</p><p className="text-[9px] opacity-80">Football</p></div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {TILES.slice(1, 5).map(({ Icon, label }) => <div key={label} className="grid aspect-square place-items-center rounded-md bg-white/[.07] text-sky-300"><Icon size={14} /></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
