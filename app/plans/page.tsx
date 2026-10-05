import type { Metadata } from 'next'
import { PlansGrid } from '@/components/plans-grid'

export const metadata: Metadata = { title: 'Plans and pricing', alternates: { canonical: '/plans' } }

export default function Plans() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold">Choose your IPTV subscription plan</h1>
      <PlansGrid />
    </div>
  )
}
