export type Guide = {
  id: string
  title: string
  logo?: string
  groups: { heading?: string; steps: string[]; note?: string }[]
  code?: string
}

export const INSTALL_GUIDES: Guide[] = [
  {
    id: 'smart-tv',
    title: 'Smart TV (Samsung, LG, Android TV)',
    logo: '/images/dev-smarttv.png',
    groups: [
      { heading: 'Samsung Smart TVs', steps: ['Press the Smart Hub button on your remote.', 'Search for IPTV Smarters Pro and install it.', 'Open the app and log in with your subscription details: username, password and portal URL.'] },
      { heading: 'LG Smart TVs', steps: ['Press the Home button on your remote and open the LG Content Store.', 'Search for IPTV Smarters Pro and install it.', 'Open the app and log in with your subscription details: username, password and portal URL.'] },
    ],
  },
  {
    id: 'fire-tv',
    title: 'Fire TV Stick',
    logo: '/images/dev-firetv.png',
    groups: [{ steps: ['Open the Downloader app.', 'Enter this code: 78522.', 'IPTV Smarters Pro starts downloading. When it finishes, choose Install.', 'Open it, choose Login with Xtream codes, then enter your username, password and URL.', 'Enjoy.'] }],
  },
  {
    id: 'android',
    title: 'Android (XCIPTV Player)',
    logo: '/images/dev-android.png',
    groups: [{ steps: ['Unlock your Android device and open Google Play.', 'Search for XCIPTV Player.', 'Select Install.', 'Launch the player.', 'Enter your IPTV login details and tap Login.', 'Done. Enjoy.'] }],
  },
  {
    id: 'ios',
    title: 'iPhone and iPad (Smarters Player Lite)',
    logo: '/images/dev-ios.jpg',
    groups: [{ steps: ['Download Smarters Player Lite from the App Store and install it.', 'Open the app and choose to add a user.', 'Enter the login details we sent you after you subscribed, then tap Add User.', 'Wait a few seconds while it loads.', 'Tap the Live TV icon.', 'Select the channel group you want to watch.', 'Tap a channel name, then double-tap the small screen to go full screen.'] }],
  },
  {
    id: 'mag',
    title: 'MAG box',
    logo: '/images/dev-mag.png',
    groups: [{ heading: 'MAG 250, 254, 256 and similar', steps: ['When the box loads, the main portal screen appears. Open Settings and press SETUP/SET on the remote.', 'Open System Settings, then Servers.', 'Select Portals.', 'Enter a name in Portal 1 Name and the portal URL in Portal 1 URL.', 'Select OK to save, then press EXIT on the remote.', 'Restart the box and select OK to apply the changes.'], note: 'To activate your subscription on a MAG box, send us the MAC address printed on the label on the back of the box with your order. Activation is done remotely, and we then send you the URL to place in your portal.' }],
  },
  {
    id: 'windows',
    title: 'Windows (IPTV Smarters Pro)',
    groups: [{ steps: ['Search the web for IPTV Smarters Pro and open the official website.', 'Choose Downloads in the menu.', 'Download the latest version for Windows.', 'Run the downloaded file and allow Windows to open it.', 'Wait one to two minutes for the installation to finish.', 'Launch IPTV Smarters, choose Add New User, then Login with Xtream Codes API.', 'Enter your details and start watching.'] }],
  },
  {
    id: 'enigma2',
    title: 'Enigma 2 and Linux receivers',
    groups: [{ steps: ['On the receiver, go to Settings, Configuration, System, Network Device, Configuration Adapter, Settings and note the IP address (it starts with 192.168).', 'On a Windows PC, download and open PuTTY.', 'Enter the receiver’s IP address and port 23, then choose Open.', 'Log in with the default username and password: root.', 'Paste your command line, which we send after you subscribe, in this format: wget -O /etc/enigma2/iptv.sh "your m3u link" && chmod 777 /etc/enigma2/iptv.sh && /etc/enigma2/iptv.sh', 'Right-click to paste, then press Enter.', 'Type reboot and wait for the receiver to restart.'] }],
  },
]
