import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SITE } from '@/lib/site'
import { FOCUS } from '@/lib/seo'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import { LangRedirect } from '@/components/lang-redirect'
import { OfferPopup } from '@/components/offer-popup'
import { GoogleAnalytics } from '@/components/google-analytics'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { Effects } from '@/components/effects'
import { CurrencyProvider } from '@/components/currency-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext', 'greek'], variable: '--font-inter', display: 'swap' })
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: FOCUS.title, template: `%s | ${SITE.name}` },
  description: FOCUS.description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { themeColor: '#0b1b3a', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${arabic.variable}`}>
      <body className="antialiased">
        <CurrencyProvider>
        <LangRedirect />
        <Effects />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <OfferPopup />
        </CurrencyProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
