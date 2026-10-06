import type { Metadata } from 'next'
import { LegalDoc } from '@/components/legal-doc'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Terms and conditions', description: 'The terms that apply when you use the Golden Gate IPTV website and services.', alternates: { canonical: '/legal/terms' } }

export default function Terms() {
  return (
    <LegalDoc
      title="Terms and conditions"
      effective="October 6, 2026"
      intro={`Welcome to Golden Gate IPTV. By accessing or using our website at ${SITE.url}, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please do not use our website.`}
      sections={[
        { h: '1. Use of the website', p: ['You agree to use this website only for lawful purposes. You are prohibited from:'], ul: ['Violating any applicable laws or regulations', 'Interfering with or disrupting the website', 'Attempting unauthorized access to any part of the website or our servers', 'Using the website to distribute spam or malware'] },
        { h: '2. Services', p: ['We provide TV streaming services and related content. Service availability, quality and pricing are subject to change without notice.', 'Account registration: you may be required to create an account to access certain features. You are responsible for keeping your account information confidential.', 'Payments: all purchases are subject to payment of the applicable fees. We may use third-party payment processors, and payment information is handled securely.'] },
        { h: '3. Intellectual property', p: ['All content on this website, including text, graphics, logos and software, is owned by or licensed to us. You may not copy, modify or distribute our content without permission.'] },
        { h: '4. User content', p: ['If you submit any content, such as reviews or comments, you grant us a non-exclusive, royalty-free license to use, reproduce and display it in connection with the website.'] },
        { h: '5. Disclaimer of warranties', p: ['Our website and services are provided "as is" and "as available". We do not guarantee that the service will be uninterrupted, secure or error-free.'] },
        { h: '6. Limitation of liability', p: ['To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental or consequential damages arising from your use of the website or services.'] },
        { h: '7. Indemnification', p: ['You agree to indemnify and hold harmless Golden Gate IPTV, its affiliates and employees from any claims, losses or damages arising from your breach of these terms.'] },
        { h: '8. Termination', p: ['We may suspend or end your access to the website at our discretion, without notice, if you violate these terms.'] },
        { h: '9. Changes to the terms', p: ['We may update these terms from time to time. The latest version will be posted on this page with its effective date. Continued use of the website means you accept the changes.'] },
        { h: '10. Governing law', p: ['These terms are governed by the laws of the jurisdiction in which Golden Gate IPTV operates, and any disputes will be resolved in the courts of that jurisdiction.'] },
        { h: '11. Contact us', p: [`Questions about these terms? Email ${SITE.email}.`] },
      ]}
    />
  )
}
