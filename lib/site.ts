export const SITE = {
  name: 'Golden Gate IPTV',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goldengateiptv.com',
  tagline: 'Live TV, movies and series on every screen',
  orderUrl: '/contact',
  whatsapp: '212707711512',
  email: 'goldengateiptv@gmail.com',
  whatsappDisplay: '+212 707 711 512',
  launched: '2026-10-06',
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

export type Plan = { save?: number; id: string; label: string; price: number; per: string; connections: number; badge?: string; order: string }

export const waLink = (text: string) => `https://api.whatsapp.com/send/?phone=${SITE.whatsapp}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`

const DURATIONS = ['1 Day', '1 Month', '3 Months', '6 Months', '1 Year', '2 Years']
const MONTHS = [0, 1, 3, 6, 12, 24]
// prices copied from the old site's order buttons: [1 device, 2 devices, 3 devices]
const PRICES: Record<number, number[]> = {
  1: [7, 20, 37, 49, 77, 119],
  2: [9, 29, 64, 84, 109, 199],
  3: [12, 39, 79, 117, 189, 297],
}

const perMonth = (price: number, m: number) => (m === 0 ? 'one-day pass' : m === 1 ? 'billed monthly' : `$${(price / m).toFixed(2)} / month`)

export const PLAN_TIERS = [1, 2, 3].map((devices) => ({
  devices,
  plans: DURATIONS.map<Plan>((d, i) => ({
    id: `${MONTHS[i]}m-${devices}`,
    label: d,
    price: PRICES[devices][i],
    per: perMonth(PRICES[devices][i], MONTHS[i]),
    connections: devices,
    badge: d === '1 Year' ? 'Best value' : undefined,
    save: MONTHS[i] >= 3 ? Math.round((1 - PRICES[devices][i] / (PRICES[devices][1] * MONTHS[i])) * 100) : undefined,
    order: `goldengateiptv.com - ${d} / ${devices} ${devices === 1 ? 'Device' : 'Devices'} - ${PRICES[devices][i]} USD`,
  })),
}))

export const MULTI: Plan[] = [[1, 77], [2, 119], [3, 149], [4, 189], [5, 229]].map(([n, price]) => ({
  id: `premium-${n}`,
  label: `1 Year · ${n} ${n === 1 ? 'connection' : 'connections'}`,
  price,
  per: 'full year',
  connections: n,
  badge: n > 1 ? 'World Cup' : undefined,
  order: `goldengateiptv.com - 1 Year / ${n} Device - ${price} USD`,
}))

export const PLAN_INCLUDES = [
  'Watch on any device',
  'Anti-Freeze™ 9.8 technology',
  '130K+ movies and series (VOD)',
  '34,000+ live channels',
  '4K / UHD / FHD / HD quality',
  'Free automatic updates',
  'TV guide (EPG) included',
  '7-day refund',
  '24/7 free support',
  'Privacy protection and built-in VPN',
]

export const FAQ = [
  { q: 'What is an IPTV service?', a: 'An IPTV service delivers live TV channels and on-demand movies and series over your internet connection instead of cable or satellite. You subscribe, receive a login and watch in an app on your Smart TV, Fire TV Stick, phone or computer.' },
  { q: 'How much does an IPTV subscription cost?', a: 'Our IPTV subscription starts at $7 for one day and $20 for one month for a single screen. Longer plans cost less per month: $37 for 3 months, $49 for 6 months, $77 for 1 year and $119 for 2 years. Plans for 2 and 3 screens and premium plans for up to 5 screens cost more.' },
  { q: 'What is premium IPTV?', a: 'Premium IPTV adds higher picture quality such as 4K, more simultaneous screens, a TV guide, stable servers and fast support. Our premium plans cover 1 to 5 screens for a year, from $77 to $229.' },
  { q: 'Is IPTV available in the USA?', a: 'Yes. Our IPTV service is built for viewers in the USA, with prices in US dollars, support on WhatsApp around the clock and setup guides for popular American devices. Ask us about local coverage for your area before you buy.' },
  { q: 'Is there an IPTV free trial?', a: 'You can request a short free trial. Tell us the device you will watch on and we will reply on WhatsApp with next steps. Every paid plan also has a 7-day refund.' },
  { q: 'Is IPTV legal in the USA?', a: 'It depends on the service and the content it provides, and rules differ by state and over time. Choose a provider that is open about what it sells, keep your receipts and check the regulations that apply to you.' },
  { q: 'What is IPTV?', a: 'IPTV means Internet Protocol Television. Instead of arriving through a cable or satellite dish, live channels and on-demand titles reach you over your internet connection and play in an app on your own devices.' },
  { q: 'How will I receive my credentials?', a: 'Right after your payment clears we email your username, password and server details together with a link to the setup guide. Most customers are watching within a few minutes.' },
  { q: 'Can I watch local sports and news in my area?', a: 'Many regional and national sports and news feeds are included, but coverage varies by location. Message support with your city and we will tell you exactly what you can expect before you buy.' },
  { q: 'How many simultaneous connections do I get?', a: 'Standard plans allow one screen at a time. Premium plans raise that to two, three, four or five screens streaming together. Need more than five? Contact support for a tailored plan.' },
  { q: 'Can I get a refund?', a: 'Yes. Every plan carries a 7-day refund. If the service does not work for you, tell us within a week of purchase and we will return your money. Full details are in the refund policy.' },
  { q: 'Can I renew my IPTV subscription?', a: 'Yes. Reach out before your plan expires and we will extend it on the same login, so you do not have to set anything up again.' },
  { q: 'Do I need a VPN to use IPTV?', a: 'No. The service works without one. A built-in privacy option is included, and you are free to run your own VPN if you prefer.' },
  { q: 'What payment methods do you accept?', a: 'We accept major credit and debit cards and a selection of other online payment options. Support will confirm what is available for your country when you place the order.' },
  { q: 'How long does it take for orders to be processed?', a: 'Orders are normally activated within minutes of payment. Late-night orders can occasionally take a little longer while our team is offline.' },
  { q: 'How do I pay with Visa or Mastercard?', a: 'Choose your plan, press Order Now, and our team replies with a secure payment link. Enter your card details there, and your login follows as soon as the payment is confirmed.' },
  { q: 'Can I become a reseller?', a: 'Yes. Our reseller plan lets you buy credits at a discount and sell subscriptions to your own customers. See the reseller page or contact us to get started.' },
]

export const GUIDES = [
  { device: 'Smart TV', steps: ['Open your TV app store and install a compatible IPTV player.', 'Open the app and choose to add a playlist or sign in with Xtream details.', 'Enter the username, password and server address from your email.', 'Wait for the channel list to load, then start watching.'] },
  { device: 'Fire TV Stick', steps: ['Install the Downloader app from the Amazon Appstore.', 'Use it to install your IPTV player of choice.', 'Open the player and enter your login details.', 'Allow the guide to load, then browse by category.'] },
  { device: 'Android and iPhone', steps: ['Install an IPTV player from Google Play or the App Store.', 'Add a new playlist using your login details.', 'Let the list refresh, then pick a channel.'] },
  { device: 'Windows and Mac', steps: ['Install an IPTV player that supports Xtream codes.', 'Add your login details in its settings.', 'Refresh the list and start watching.'] },
]

export const WHY = [
  { title: 'Instant activation', body: 'The moment your payment succeeds, your subscription is switched on and ready to use.' },
  { title: 'Works on every device', body: 'Smart TVs, phones, tablets, laptops and streaming sticks all run the same service, at home or away.' },
  { title: 'Watch with zero effort', body: 'Over 34,000 live channels and 130K movies and series, sorted into clear categories.' },
  { title: 'Stable servers', body: 'A large server network spreads the load, so one busy evening does not slow everyone down.' },
  { title: 'Free installation help', body: 'A complete guide covers each device from first tap to first stream, and support is a message away.' },
  { title: 'Sharp picture', body: 'HD and 4K streams with smooth playback, and fresh titles added almost every day.' },
]

export const INFRA = [
  { title: 'What are headend servers?', body: 'Every IPTV service starts at the headend, the facility that collects live broadcasts and on-demand libraries from satellite, cable and other sources. Equipment there converts each signal into internet packets so it can travel to your screen. The better the headend, the cleaner the stream that leaves it.' },
  { title: 'Streaming protocols explained', body: 'Protocols such as HLS and RTMP decide how video is chopped up and delivered. HLS splits the stream into short chunks and picks the right quality for your connection moment by moment, which is why a good service keeps playing when your Wi-Fi wobbles. A provider that keeps these protocols current avoids most stalls and sync problems.' },
  { title: 'The role of content delivery networks', body: 'A content delivery network keeps copies of popular streams on servers in many regions, so your video comes from a machine near you instead of from the other side of the world. Shorter distance means less delay and fewer pauses, especially during big live events when everyone tunes in at once.' },
  { title: 'Device compatibility and middleware', body: 'Middleware is the software layer between the streams and your device. It manages logins, channel lists, the TV guide and which screens are allowed to connect. Good middleware means the same account works on a Smart TV, an Android box, a phone or a computer without extra effort.' },
]

export const FEATURE_ARTICLES = [
  { n: '1', title: 'Sharp 4K and HD picture', body: 'Channels are offered in HD, Full HD and 4K, with HDR where the source supports it. Adaptive streaming adjusts quality automatically, so a slow moment on your connection lowers the resolution briefly instead of freezing the screen.' },
  { n: '2', title: 'One account, every screen', body: 'Use Smart TVs, Android and iOS phones, Fire TV sticks, MAG boxes, Windows and Mac. Start a match on the living-room TV and finish it on your phone on the train.' },
  { n: '3', title: 'Live TV and on-demand together', body: 'Browse thousands of live channels from the US, UK, Canada and Europe next to a large on-demand library. Everything is sorted by category and genre so finding something takes seconds.' },
]

export const LONG_ARTICLES = [
  { title: 'Multi-device and on-the-go streaming', body: ['The biggest everyday advantage of IPTV is that your TV goes where you go. All you need is an internet connection, whether that is the living room Smart TV, a laptop at the office or a tablet in a hotel.', 'Multi-screen plans let a whole household watch at the same time, so one person can follow a game while another catches up on a series, with no arguments over the remote.'] },
  { title: 'HD and 4K quality, explained', body: ['Good IPTV should look as good as it sounds. Expect sharp HD channels, Full HD and 4K Ultra HD options on premium feeds, and surround sound where the broadcast includes it.', 'Picture quality still depends on two things you can check: your internet speed and the strength of the provider\'s servers. A stable 25 Mbps connection comfortably handles 4K on one screen, and fewer compression shortcuts on the server side keep peak-hour viewing smooth.'] },
  { title: 'Interactivity and DVR: control what you watch', body: ['Modern IPTV frees you from the broadcast schedule. Pause a live match when the doorbell rings, rewind a goal you missed, or jump forward through the quiet parts.', 'Catch-up TV keeps recent programmes available after they air, and cloud DVR lets you record shows to watch later. Together they turn television into something you control rather than something that happens to you.'] },
]

export const STEPS = [
  { title: 'Choose your plan', body: 'Pick a duration and the number of screens you need. Not sure? Message us and we will help you choose.' },
  { title: 'Get your login', body: 'Order on WhatsApp, pay, and receive your username, password and setup link within minutes.' },
  { title: 'Install and watch', body: 'Follow the short guide for your device, sign in, and start streaming live TV and on-demand titles.' },
]

export const GENRES = [
  { name: 'Live sports', body: 'Football, basketball, combat sports and more' },
  { name: '24/7 news', body: 'National, international and local coverage' },
  { name: 'Movies', body: 'A huge on-demand library, sorted by genre' },
  { name: 'Series', body: 'Full seasons ready to binge' },
  { name: 'Kids', body: 'Cartoons and learning shows for every age' },
  { name: 'Documentaries', body: 'Nature, history, science and travel' },
  { name: 'Music', body: 'Videos and live music channels' },
  { name: 'International', body: 'Channels from the US, UK, Canada and Europe' },
]

export const COMPARE = [
  ['Contract', 'Long contracts and cancellation fees', 'Cancel any time'],
  ['Equipment', 'Set-top box and installation visit', 'Any device you already own'],
  ['Screens', 'Extra boxes for extra rooms', 'Up to 5 screens on one plan'],
  ['Pricing', 'Bundles and price rises', 'Clear prices from $20 a month'],
  ['Watching away from home', 'Limited to one location', 'Anywhere with internet'],
  ['Refund', 'Rarely offered', '7-day refund'],
]

export const RESELLER_PACKAGES = [
  { credits: 120, price: 329 },
  { credits: 240, price: 629 },
  { credits: 360, price: 949 },
]

export const RESELLER_INCLUDES = [
  'Credits never expire',
  'Get your own reseller panel',
  '1 credit = 1 month',
  '12 credits = 1 year',
  'TV guide (EPG)',
  '24/7 support',
]

export const RESELLER_WHY = [
  { title: 'White-label platform', body: 'Build your brand on a customizable reseller dashboard with your own logo, colors and domain name.' },
  { title: 'Premium content library', body: 'Offer customers 34,000+ live channels and 130,000+ movies and series in HD across sports, movies and international genres.' },
  { title: 'Automated management', body: 'Create accounts, extend subscriptions and handle customer requests from one panel, so you spend time selling instead of administering.' },
]

export const RESELLER_STEPS = [
  { title: 'Select your reseller package', body: 'Choose the credit bundle that fits your goals and budget. Contact us if you want pricing tailored to your market.' },
  { title: 'Receive expert training', body: 'Once you are onboarded, we walk you through the panel, how to price your plans and how to look after your customers.' },
  { title: 'Start generating revenue', body: 'Launch your reselling business with support behind you. Every customer you add brings recurring income.' },
]

export const RESELLER_FAQ = [
  { q: 'What content is included with my IPTV service?', a: 'The full lineup of 34,000+ live channels, including sports, movies, entertainment and international genres, in HD and 4K quality, plus a large on-demand library.' },
  { q: 'Do you provide an EPG (electronic program guide)?', a: 'Yes. Every package includes a TV guide that shows program information for most channels, so your customers can find and plan what to watch.' },
  { q: 'On how many devices can my customers use the service?', a: 'Depending on the subscription, 1 to 5 devices at the same time, so a whole household can watch different content together.' },
  { q: 'Can I cancel at any time?', a: 'Services are prepaid for the period you choose, and we offer a 7-day money-back guarantee if you are not satisfied.' },
  { q: 'What payment methods do you accept?', a: 'Major credit cards, PayPal, cryptocurrency and other secure payment methods.' },
  { q: 'Is the service compatible with my customers’ devices?', a: 'It works with most modern devices, including Smart TVs, Amazon Fire Stick, Android and iOS devices, MAG boxes and computers.' },
  { q: 'Is IPTV legal where I live?', a: 'Rules differ by country and region. Check the regulations that apply to you before you resell any IPTV service.' },
  { q: 'Do you offer technical support?', a: 'Yes. We provide 24/7 support on WhatsApp and by email for resellers and their customers.' },
]
