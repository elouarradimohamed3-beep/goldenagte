export type Post = {
  slug: string
  title: string
  description: string
  date: string
  readMinutes: number
  sections: { h: string; p: string[] }[]
}

const DATE = '2026-10-05'

export const POSTS: Post[] = [
  {
    slug: 'what-is-iptv',
    title: 'What Is IPTV? A Plain-English Guide for Beginners',
    description: 'IPTV delivers live TV and on-demand video over the internet. Learn how it works, what you need, and how it compares to cable.',
    date: DATE,
    readMinutes: 5,
    sections: [
      { h: 'IPTV in one sentence', p: ['IPTV stands for Internet Protocol Television. Instead of arriving through a coaxial cable or a satellite dish, television reaches you as data over your home internet connection and plays in an app.', 'That single difference explains most of what makes IPTV different: no dish, no set-top box rental, and no tie to one room of your house.'] },
      { h: 'How IPTV works', p: ['A provider collects live broadcasts and on-demand titles at a facility called a headend. The signals are converted into internet packets and sent out through servers, often spread across several regions so viewers connect to one near them.', 'On your side, an app on a Smart TV, streaming stick, phone or computer asks for a channel, receives the stream and plays it. If your connection slows down, adaptive streaming lowers the picture quality for a moment instead of freezing.'] },
      { h: 'What you need to get started', p: ['You need three things: a subscription, an internet connection and a compatible device. For smooth HD viewing, aim for at least 10 Mbps per screen, and about 25 Mbps for a 4K stream.', 'Most people use a Smart TV or a Fire TV Stick for the living room and a phone or tablet for watching away from home.'] },
      { h: 'What you can watch', p: ['A typical subscription includes live channels grouped by genre, such as sports, news, kids, movies and documentaries, plus an on-demand library of films and series. Many services also include a TV guide so you can see what is on now and next.'] },
      { h: 'Is IPTV right for you?', p: ['IPTV suits people who want flexibility: cancel any time, use several devices and watch away from home. If you rely on a very specific local broadcast, ask the provider before you buy to confirm it is covered where you live.'] },
    ],
  },
  {
    slug: 'how-to-set-up-iptv-on-fire-tv-stick',
    title: 'How to Set Up IPTV on a Fire TV Stick in 10 Minutes',
    description: 'A step-by-step guide to installing an IPTV player on a Fire TV Stick and signing in with your subscription details.',
    date: DATE,
    readMinutes: 4,
    sections: [
      { h: 'Before you start', p: ['Have your username, password and server address ready. You receive them by message after your order is confirmed. Make sure the Fire TV Stick is connected to Wi-Fi and has a few hundred megabytes of free space.'] },
      { h: 'Step 1: Install a downloader', p: ['From the Fire TV home screen, open Find, choose Search and type "Downloader". Install the app from the Amazon Appstore. It lets you fetch apps that are not listed in the store.'] },
      { h: 'Step 2: Allow installs from your downloader', p: ['Open Settings, then My Fire TV, then Developer Options. Select Install unknown apps and switch Downloader on. The exact menu names can change slightly between Fire OS versions.'] },
      { h: 'Step 3: Install an IPTV player', p: ['Open Downloader and enter the address of the IPTV player your provider recommends. Download it, choose Install, then Open. Any player that supports Xtream login or playlist links will work.'] },
      { h: 'Step 4: Sign in and watch', p: ['Choose the option to log in with Xtream codes or to add a playlist, then enter the details from your message. Wait for the channel list and guide to load. The first load can take a minute.', 'If the list does not load, double-check for typos in the username and password and confirm the Fire TV Stick is online. Still stuck? Message support and we will walk you through it.'] },
    ],
  },
  {
    slug: 'iptv-vs-cable-tv',
    title: 'IPTV vs Cable TV: Cost, Flexibility and Picture Quality',
    description: 'Compare IPTV and cable on price, contracts, devices, picture quality and reliability, so you can decide which suits your home.',
    date: DATE,
    readMinutes: 5,
    sections: [
      { h: 'Cost', p: ['Cable usually combines a base package, equipment rental, fees and taxes, and the price often rises after a promotional period. IPTV is typically a flat subscription, and longer plans bring the monthly cost down further.'] },
      { h: 'Contracts and flexibility', p: ['Cable commonly asks for a 12 or 24 month commitment and charges to leave early. IPTV plans range from a single day to two years, so you can start small and extend only if you like it.'] },
      { h: 'Devices and rooms', p: ['With cable, every additional TV needs another box. With IPTV, any compatible device works: a Smart TV, a stick, a phone or a laptop. Multi-screen plans let several people watch at once.'] },
      { h: 'Picture quality', p: ['Cable quality is consistent but capped by the package you pay for. IPTV can offer HD and 4K, but quality depends on your internet speed and the provider servers. A wired connection or strong Wi-Fi makes the biggest difference.'] },
      { h: 'Reliability', p: ['Cable keeps working during an internet outage; IPTV does not. In return, IPTV is not affected by dish alignment or weather. A stable connection is the main requirement.'] },
      { h: 'The bottom line', p: ['If you want flexibility, multiple screens and no contract, IPTV is usually the better fit. If you need a backup that works without the internet, cable still has a place.'] },
    ],
  },
  {
    slug: 'internet-speed-for-iptv-4k',
    title: 'How Much Internet Speed Do You Need for IPTV in HD and 4K?',
    description: 'Recommended internet speeds for SD, HD, Full HD and 4K IPTV, plus tips to stop buffering on Wi-Fi.',
    date: DATE,
    readMinutes: 4,
    sections: [
      { h: 'Recommended speeds per screen', p: ['As a rule of thumb: about 3 Mbps for standard definition, 5 to 8 Mbps for HD, 10 to 15 Mbps for Full HD and around 25 Mbps for 4K. Multiply by the number of screens you plan to use at the same time.'] },
      { h: 'Your plan speed is not your real speed', p: ['Advertised speeds are maximums. Run a speed test on the device you watch on, at the time you usually watch. Evening hours are often slower than the middle of the day.'] },
      { h: 'Fixes for buffering', p: ['Use an Ethernet cable where you can, especially for the main TV. On Wi-Fi, move the router closer or use the 5 GHz band. Restart the router, close apps that use bandwidth, and avoid placing the router inside a cabinet.'] },
      { h: 'When it is not your connection', p: ['If other apps stream fine but one channel stutters, the cause may be that single feed. Note the channel genre and time, and message support so it can be checked.'] },
    ],
  },
  {
    slug: 'iptv-usa-buyers-guide',
    title: 'Choosing an IPTV Service in the USA: A Buyer’s Checklist',
    description: 'What to check before buying an IPTV subscription in the USA: trial, refund policy, support, devices and payment safety.',
    date: DATE,
    readMinutes: 5,
    sections: [
      { h: 'Look for a refund window', p: ['A clear refund policy is the fastest way to reduce risk. A seven-day window gives you time to test during busy evening hours and on the devices you actually own.'] },
      { h: 'Check device support', p: ['Confirm that the service works on your TV, stick or phone before paying. Good providers publish setup guides for each device and answer questions before you buy.'] },
      { h: 'Test support before you pay', p: ['Send a question and see how long a reply takes. Support that answers promptly pre-sale is usually the support you will be glad to have later.'] },
      { h: 'Understand what the plan includes', p: ['Compare the number of screens, the length of the plan and whether the TV guide and updates are included. A longer plan lowers the monthly price but commits you for longer, so start with a month if you are unsure.'] },
      { h: 'Pay safely', p: ['Use a payment method you trust, keep the receipt and never share your login with strangers. Be wary of prices that look too good to be true.'] },
      { h: 'Check your connection first', p: ['A good service cannot fix a weak internet connection. Test your speed and your Wi-Fi coverage before you decide.'] },
    ],
  },
]

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug)
