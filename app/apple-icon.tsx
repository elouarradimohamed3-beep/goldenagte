import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#e11d48"/><stop offset=".55" stop-color="#c026d3"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs><rect width="48" height="48" fill="url(#g)"/><g fill="none" stroke="#fff" stroke-linecap="round"><path d="M11 28.5 C 16 20, 32 20, 37 28.5" stroke-width="1.8"/><path d="M18 15 V33 M30 15 V33" stroke-width="2.6"/><path d="M12 33 H36" stroke-width="1.8"/></g></svg>`

export default function AppleIcon() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`data:image/svg+xml;base64,${Buffer.from(SVG).toString('base64')}`} width={180} height={180} alt="" />,
    size,
  )
}
