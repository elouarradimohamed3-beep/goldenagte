import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="#0a0a0a"/><g fill="none" stroke="#C9A227" stroke-linecap="round"><circle cx="24" cy="24" r="17" stroke-width="1.4"/><path d="M11 28.5 C 16 20, 32 20, 37 28.5" stroke-width="1.6"/><path d="M18 16 V32 M30 16 V32" stroke-width="2.4"/><path d="M12 32 H36" stroke-width="1.6"/></g></svg>`

export default function AppleIcon() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`data:image/svg+xml;base64,${Buffer.from(SVG).toString('base64')}`} width={180} height={180} alt="" />,
    size,
  )
}
