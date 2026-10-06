import { Fragment } from 'react'

/** Fill {markers} with elements and render **bold** as <strong>. */
export function rich(text: string, map: Record<string, React.ReactNode> = {}) {
  return text.split(/(\*\*[^*]+\*\*|\{\w+\})/g).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    const m = part.match(/^\{(\w+)\}$/)
    if (m && m[1] in map) return <Fragment key={i}>{map[m[1]]}</Fragment>
    return <Fragment key={i}>{part}</Fragment>
  })
}
