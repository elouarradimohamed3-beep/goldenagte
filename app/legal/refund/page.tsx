import type { Metadata } from 'next'
import { LegalDoc } from '@/components/legal-doc'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Refund and cancellation policy', description: 'When refunds are available, how to request one, and how cancellation works at Golden Gate IPTV.', alternates: { canonical: '/legal/refund' } }

export default function Refund() {
  return (
    <LegalDoc
      title="Refund and cancellation policy"
      effective="October 6, 2026"
      intro="We aim to give you reliable TV streaming. Please read this refund and cancellation policy before you buy."
      sections={[
        { h: '1. Subscription and billing', p: ['Plans are prepaid for the period you choose, such as a day, a month, three or six months, a year or two years.'] },
        { h: '2. Refund policy', p: ['Money-back guarantee: if the service does not work for you, you can ask for a refund within 7 days of your payment.', 'Because our service is digital and delivered instantly, refunds after that 7-day window are not available.'] },
        { h: 'Situations where we do not refund', ul: ['Change of mind after the refund window has passed', 'Compatibility issues with your device or network (please request a trial before subscribing)', 'Service interruptions caused by your internet provider, VPN or other third parties', 'Misuse of the service or violation of our terms and conditions'] },
        { h: 'How to request a refund', p: [`Contact our support team on WhatsApp or at ${SITE.email} within 7 days of your payment. Requests after that period are not considered.`, 'If your refund is approved, it is returned to your original payment method within 7 to 14 business days.'] },
        { h: '3. Cancellation policy', ul: ['You can stop your subscription at any time by contacting support.', 'Your subscription stays active until the end of the period you paid for.', 'Cancelling prevents future renewals but does not refund the current period outside the refund window.'] },
        { h: '4. Changes to this policy', p: ['We may update this policy at any time. Changes are posted on this page with a new effective date.'] },
        { h: '5. Contact us', p: [`Questions about this policy? Email ${SITE.email}.`] },
      ]}
    />
  )
}
