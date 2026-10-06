import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Golden Gate IPTV',
    short_name: 'Golden Gate IPTV',
    description: 'IPTV service with live TV, movies and series. Plans from $20 a month.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b1b3a',
    icons: [{ src: '/icon', sizes: '64x64', type: 'image/png' }, { src: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  }
}
