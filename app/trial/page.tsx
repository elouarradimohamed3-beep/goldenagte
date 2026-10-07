import type { Metadata } from 'next'
import Link from 'next/link'
import { TrialForm } from '@/components/trial-form'
import { FaqList } from '@/components/faq'
import { PillarLinks } from '@/components/pillar-links'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: { absolute: 'Request a Trial: Try Our IPTV Service Before You Subscribe' },
  description: 'Request a short trial of our IPTV service. Tell us your device and we reply on WhatsApp with next steps. Every IPTV subscription has a 7-day refund.',
  alternates: { canonical: '/trial' },
}

const FAQ_TRIAL = [
  { q: 'How does the trial work?', a: 'Tell us which device you will watch on. We reply on WhatsApp with next steps and a test login so you can try live TV and on-demand titles on your own device and internet connection.' },
  { q: 'Do I have to commit to anything?', a: 'No. A trial request carries no obligation to subscribe. Availability and length are at our discretion, and every paid IPTV subscription also has a 7-day refund.' },
  { q: 'What should I check during a trial?', a: 'Test your main device at the time you usually watch, try a few live channels and an on-demand title, check the TV guide and see how quickly support replies.' },
  { q: 'What happens after the trial?', a: 'Choose an IPTV subscription from $7 for one day or $20 for one month, or a premium plan with up to 5 screens. There is no obligation to continue.' },
]

export default function FreeTrial() {
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_TRIAL.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <>
      <JsonLd data={ld} />
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-10">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Request a trial', href: '/trial' }]} />
        <h1 className="text-center text-4xl font-bold">Request a trial</h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Try our IPTV service before you commit. Tell us what you will watch on and we will reply on WhatsApp with your trial login.</p>
        <div className="mx-auto max-w-md"><TrialForm /></div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">How the trial works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-600">
            <li>Send your name and the device you will use (Smart TV, Fire TV Stick, phone or computer).</li>
            <li>We reply on WhatsApp with next steps and your test login.</li>
            <li>Install a compatible player using our <Link href="/install" className="font-semibold text-brand hover:underline">installation guide</Link>.</li>
            <li>Test live channels, the on-demand library and the TV guide on your own connection.</li>
            <li>If you like it, choose an <Link href="/iptv-subscription" className="font-semibold text-brand hover:underline">IPTV subscription</Link> that fits. Every paid plan has a 7-day refund.</li>
          </ol>
                  </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Trial questions</h2>
          <div className="mt-6"><FaqList items={FAQ_TRIAL} /></div>
        </section>
      </div>
      <PillarLinks />
    </>
  )
}
