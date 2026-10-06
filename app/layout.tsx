import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SITE } from '@/lib/site'
import { FOCUS } from '@/lib/seo'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { Effects } from '@/components/effects'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: FOCUS.title, template: `%s | ${SITE.name}` },
  description: FOCUS.description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <Effects />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
