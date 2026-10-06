import { COMPARE, FAQ, FEATURE_ARTICLES, GENRES, INFRA, LONG_ARTICLES, PLAN_INCLUDES, STEPS, WHY } from '../site'
import { FOCUS } from '../seo'

type Pair = { title: string; body: string }

/** All text of the home page. English is the source of truth; other languages mirror this shape. */
export const en = {
  meta: { title: FOCUS.title, description: FOCUS.description },
  hero: {
    badge: 'Plans from $20 a month · cancel any time',
    h1: 'A reliable IPTV service for live TV, movies and series in the USA',
    p: 'Choose an {sub} from $20 a month, or upgrade to {prem} for 4K and up to 5 screens. Get your login in minutes and watch on your Smart TV, Fire Stick, phone or computer across the {usa}.',
    sub: 'IPTV subscription', prem: 'premium IPTV', usa: 'USA',
    subscribe: 'Subscribe now', trial: 'Request a trial',
    checks: ['7-day refund', 'Instant activation', '24/7 support'],
  },
  stats: [
    { to: 34000, suffix: '+', label: 'Live channels' },
    { to: 130, suffix: 'K+', label: 'Movies and series' },
    { to: 7, suffix: '-day', label: 'Refund window' },
    { to: 24, suffix: '/7', label: 'Support' },
  ],
  devices: { eyebrow: 'Supports all devices', alt: 'Supported devices: iPhone, iPad, Mac, Android, Windows, Chrome, MAG, Roku, Samsung Smart TV, LG Smart TV and Linux' },
  service: {
    eyebrow: 'IPTV service', title: 'What is an IPTV service?',
    p1: 'An **IPTV service** delivers live TV channels and on-demand movies and series over your internet connection, so you can watch on a Smart TV, Fire TV Stick, phone or computer without a cable box or satellite dish.',
    p2: 'You choose an {sub} for the length you want, receive your login in minutes and sign in to an app. If you want the sharpest picture or several screens at once, look at {prem}. For devices, speeds and pricing in US dollars, see our {usa} guide.',
    p3: 'Still learning? Read {what} or browse all our {blog}.',
    sub: 'IPTV subscription', prem: 'premium IPTV', usa: 'IPTV USA', what: 'what an IPTV service is', blog: 'IPTV guides',
    chooseTitle: 'How to choose a reliable IPTV service',
    choose: ['A clear refund window, so you can test it on your own devices', 'Support you can reach at any hour before and after you pay', 'Setup guides for the exact device you own', 'Prices shown as a monthly cost with no hidden extras', 'Multiple screens on one plan if your household shares it'],
  },
  why: {
    eyebrow: 'Why us', title: 'No more buffering, no more freezing',
    tileTitle: 'TV the whole family can share', tileBody: 'Kids, sports, news and movies on every screen in the house, with up to five screens at the same time.',
    tileAlt: 'Two young children watching a cartoon on TV in their playroom',
    items: WHY.slice(0, 5) as Pair[],
  },
  plans: {
    eyebrow: 'Pricing', title: 'Choose your IPTV subscription plan', intro: 'Every plan includes the full channel and on-demand library, free updates and a 7-day refund.',
    tabs: ['1 device', '2 devices', '3 devices', 'Premium plans'],
    durations: ['1 Day', '1 Month', '3 Months', '6 Months', '1 Year', '2 Years'],
    premium: ['1 Year · 1 connection', '1 Year · 2 connections', '1 Year · 3 connections', '1 Year · 4 connections', '1 Year · 5 connections'],
    conn: ['1 connection', '2 connections', '3 connections', '4 connections', '5 connections'],
    includes: PLAN_INCLUDES as string[],
    save: 'Save {n}%', popular: 'Most popular', worldCup: 'World Cup special',
    perMonth: '/ month', billed: 'billed monthly', oneDay: 'one-day pass', fullYear: 'full year',
    subscribe: 'Subscribe now',
    more: 'Need more than 5 devices? {link} for a tailored multi-device plan.', moreLink: 'Contact support',
    currencyNote: 'Prices are set in USD. EUR and CAD are converted at 1 USD = €{eur} / C${cad} ({asOf}) and rounded. Your final price is confirmed on WhatsApp.',
    asOf: 'October 2026',
    approx: '≈',
  },
  band: { title: 'Every game, every show, every room.', body: "Bring the whole family together with live sports, movies and kids' shows in 4K, on as many as five screens at once.", cta: 'See plans', alt: 'A family laughing together on the sofa while watching live sports on a 4K TV' },
  steps: { eyebrow: 'Get started', title: 'Watching in three simple steps', items: STEPS as Pair[] },
  genres: { eyebrow: 'Content', title: 'Something for everyone in the house', intro: 'Live channels and on-demand titles, organized by genre so you find what you want fast.', items: GENRES.map((g) => ({ title: g.name, body: g.body })) as Pair[] },
  explore: {
    eyebrow: 'Explore', title: 'Built for the way you watch',
    tabs: ['Multi-device', 'HD and 4K', 'Interactivity and DVR'],
    long: LONG_ARTICLES.map((a) => ({ title: a.title, body: a.body })) as { title: string; body: string[] }[],
    signUp: 'Sign up now',
    alts: ['A traveler watching a live match on a phone while waiting at an airport gate', 'A couple under a blanket watching a movie on a large TV at night', 'A man drinking coffee and watching the morning news on a TV in his kitchen'],
    features: FEATURE_ARTICLES.map((a) => ({ title: a.title, body: a.body })) as Pair[],
  },
  infra: { eyebrow: 'Behind the screen', title: 'How an IPTV service provider works', intro: 'Four building blocks decide whether your stream is smooth or stuttering.', items: INFRA as Pair[] },
  customers: { eyebrow: 'Customers', title: 'Our happy clients', intro: 'Messages from customers who contacted us on WhatsApp.', alt: 'Customer WhatsApp conversation' },
  compare: { eyebrow: 'Compare', title: 'Why people leave cable', cable: 'Traditional cable', us: 'Golden Gate IPTV', rows: COMPARE as string[][] },
  pillars: {
    title: 'Explore our IPTV guides', readGuide: 'Read the guide',
    items: [
      { label: 'IPTV Service', blurb: 'How a reliable IPTV service works, with plans from $20 a month.' },
      { label: 'IPTV Subscription', blurb: 'Plans, prices, free trial and how to buy an IPTV subscription safely.' },
      { label: 'IPTV USA', blurb: 'IPTV in the United States: devices, internet speeds, pricing and setup.' },
      { label: 'IPTV Premium', blurb: 'What makes IPTV premium: 4K quality, multiple screens, stability and support.' },
    ],
  },
  faq: { eyebrow: 'FAQ', title: 'Frequently asked questions about IPTV subscriptions', items: FAQ as { q: string; a: string }[] },
  cta: { title: 'Ready to start watching?', body: 'Pick a plan, get your login in minutes, and take a full week to decide. If it is not for you, we refund you.', seePlans: 'See plans', support: 'Talk to support' },
}

export type Dict = typeof en
