import { ImageResponse } from 'next/og'

export const alt = 'Golden Gate IPTV'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: 'linear-gradient(135deg,#07080c,#1a1405)', color: 'white' }}>
        <div style={{ fontSize: 34, color: '#f5b82e', fontWeight: 700 }}>GOLDEN GATE IPTV</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 24 }}>Live TV, movies and series on every screen</div>
        <div style={{ fontSize: 34, color: '#bbb', marginTop: 28 }}>Plans from $20 a month · 7-day refund · 24/7 support</div>
      </div>
    ),
    size,
  )
}
