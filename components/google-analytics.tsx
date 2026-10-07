import Script from 'next/script'

export const GA_ID = 'G-B3KYW0G8JW'

/**
 * Google tag (gtag.js) with Consent Mode v2: analytics storage stays denied until the visitor
 * accepts the cookie banner, so no analytics cookies are set before consent.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });
        try { if (localStorage.getItem('gg-cookie-ok') === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' }); } catch (e) {}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  )
}
