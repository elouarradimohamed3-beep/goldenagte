'use client'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { waLink } from '@/lib/site'

const DEVICES = ['Smart TV', 'Fire TV Stick', 'Android box', 'iPhone / iPad', 'Android phone', 'Windows / Mac', 'Other']

export function TrialForm() {
  const [name, setName] = useState('')
  const [device, setDevice] = useState(DEVICES[0])
  const [state, setState] = useState('')
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hi! I would like a free trial of goldengateiptv.com.\nName: ${name}\nDevice: ${device}${state ? `\nState: ${state}` : ''}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }
  const field = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand'
  return (
    <form onSubmit={submit} className="glass mx-auto mt-8 max-w-md space-y-4 rounded-2xl p-7 text-left">
      <label className="block text-sm">Your name<input required value={name} onChange={(e) => setName(e.target.value)} className={`${field} mt-1`} placeholder="Jane" /></label>
      <label className="block text-sm">Device you will watch on
        <select value={device} onChange={(e) => setDevice(e.target.value)} className={`${field} mt-1`}>{DEVICES.map((d) => <option key={d}>{d}</option>)}</select></label>
      <label className="block text-sm">State (optional)<input value={state} onChange={(e) => setState(e.target.value)} className={`${field} mt-1`} placeholder="Texas" /></label>
      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-black transition-colors hover:brightness-110"><MessageCircle size={18} />Request trial on WhatsApp</button>
    </form>
  )
}
