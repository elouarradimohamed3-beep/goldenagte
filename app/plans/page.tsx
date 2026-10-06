import type { Metadata } from 'next'
import { PricingSection } from '@/components/pricing-section'

export const metadata: Metadata = {
  title: 'Plans and pricing',
  description: 'IPTV plans from $7 a day and $20 a month, with 1 to 5 connections, free updates and a 7-day refund.',
  alternates: { canonical: '/plans' },
}

export default function Plans() {
  return <PricingSection as="h1" id="pricing" />
}
