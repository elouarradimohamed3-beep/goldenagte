export const SITE = {
  name: 'Golden Gate IPTV',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goldengateiptv.com',
  tagline: 'Live TV, movies and series on every screen',
  orderUrl: '/contact',
  whatsapp: '',
  email: 'support@goldengateiptv.com',
  launched: '2026-10-05',
}

export const FEATURES = [
  { title: 'Activated in minutes', body: 'Pay, and your login details arrive by email so you can start watching right away.' },
  { title: 'Every screen you own', body: 'Smart TVs, Fire TV Stick, Android boxes, phones, tablets, Mac and Windows.' },
  { title: 'Live TV plus on-demand', body: 'Sports, news, kids, movies and international genres, alongside a growing library of films and series.' },
  { title: 'HD and 4K picture', body: 'Adaptive streaming drops the quality instead of freezing when your connection dips.' },
  { title: 'Guided setup', body: 'Step-by-step install guides for each device, with live help if you get stuck.' },
  { title: 'Seven-day refund', body: 'Try it for a week. If it is not right for you, ask and we will refund you.' },
]

export const DEVICES = ['Smart TV', 'Fire TV Stick', 'Android TV box', 'iPhone and iPad', 'Android phone', 'Windows and Mac']

export type Plan = { id: string; label: string; price: number; per: string; connections: number; badge?: string }

export const PLANS: Plan[] = [
  { id: '1m', label: '1 Month', price: 20, per: 'billed monthly', connections: 1 },
  { id: '3m', label: '3 Months', price: 37, per: '$12.33 / month', connections: 1 },
  { id: '6m', label: '6 Months', price: 49, per: '$8.17 / month', connections: 1 },
  { id: '12m', label: '1 Year', price: 77, per: '$6.42 / month', connections: 1, badge: 'Best value' },
  { id: '24m', label: '2 Years', price: 119, per: '$4.96 / month', connections: 1 },
]

export const MULTI: Plan[] = [
  { id: '12m-2', label: '1 Year · 2 screens', price: 119, per: 'two screens at once', connections: 2 },
  { id: '12m-3', label: '1 Year · 3 screens', price: 149, per: 'three screens at once', connections: 3 },
  { id: '12m-4', label: '1 Year · 4 screens', price: 189, per: 'four screens at once', connections: 4 },
  { id: '12m-5', label: '1 Year · 5 screens', price: 229, per: 'five screens at once', connections: 5 },
]

export const PLAN_INCLUDES = ['Live TV in HD and 4K', 'Movies and series on demand', 'TV guide (EPG)', 'Free updates', '24/7 support', '7-day refund']

export const FAQ = [
  { q: 'What is IPTV?', a: 'IPTV delivers television over the internet instead of a cable or satellite box. You install an app on your device, sign in, and watch live channels and on-demand titles.' },
  { q: 'How do I receive my login?', a: 'After payment you get an email with your username, password and setup instructions, usually within minutes.' },
  { q: 'Can I watch local sports and news?', a: 'Coverage depends on your region. Contact us before ordering and we will tell you what is available where you live.' },
  { q: 'How many screens can I use at once?', a: 'Standard plans include one screen. Multi-screen plans cover two to five screens at the same time.' },
  { q: 'Can I get a refund?', a: 'Yes. Ask within seven days of purchase and we will refund you. See the refund policy for details.' },
  { q: 'How do I renew?', a: 'Contact support before your plan ends and we will extend it on the same login.' },
  { q: 'Do I need a VPN?', a: 'No. A VPN is optional. Some people use one for privacy, and the service works with or without it.' },
  { q: 'How fast is a typical order?', a: 'Most orders are active within minutes. Occasionally it takes longer outside support hours.' },
  { q: 'Can I become a reseller?', a: 'Yes. Contact us and we will share reseller pricing and how the panel works.' },
]

export const GUIDES = [
  { device: 'Smart TV', steps: ['Open your TV app store and install a compatible IPTV player.', 'Open the app and choose to add a playlist or sign in with Xtream details.', 'Enter the username, password and server address from your email.', 'Wait for the channel list to load, then start watching.'] },
  { device: 'Fire TV Stick', steps: ['Install the Downloader app from the Amazon Appstore.', 'Use it to install your IPTV player of choice.', 'Open the player and enter your login details.', 'Allow the guide to load, then browse by category.'] },
  { device: 'Android and iPhone', steps: ['Install an IPTV player from Google Play or the App Store.', 'Add a new playlist using your login details.', 'Let the list refresh, then pick a channel.'] },
  { device: 'Windows and Mac', steps: ['Install an IPTV player that supports Xtream codes.', 'Add your login details in its settings.', 'Refresh the list and start watching.'] },
]
