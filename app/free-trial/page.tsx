import type { Metadata } from 'next'
import { TrialForm } from '@/components/trial-form'

export const metadata: Metadata = {
  title: 'Request a free trial',
  description: 'Ask for a trial of Golden Gate IPTV. Tell us your device and we will reply on WhatsApp with your test login.',
  alternates: { canonical: '/free-trial' },
}

export default function FreeTrial() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-36 pb-16 text-center">
      <h1 className="text-4xl font-bold">Request a free trial</h1>
      <p className="mt-3 text-white/60">Tell us what you will watch on and we will reply on WhatsApp with next steps. Availability of trials is at our discretion.</p>
      <TrialForm />
    </div>
  )
}
