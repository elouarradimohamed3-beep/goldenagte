import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { isValidElement } from 'react'

function isCta(children: React.ReactNode) {
  const arr = Array.isArray(children) ? children : [children]
  return arr.length === 1 && isValidElement(arr[0]) && (arr[0].props as { href?: string }).href !== undefined
}

export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose prose-slate prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:text-ink prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm prose-strong:text-ink">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href = '', children }) => href.startsWith('/') || href.startsWith('#') ? <Link href={href}>{children}</Link> : <a href={href} rel="noopener noreferrer" target="_blank">{children}</a>,
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={typeof src === 'string' ? src : undefined} alt={alt ?? ''} loading="lazy" className="mx-auto h-auto max-w-full" />
          ),
          table: ({ children }) => <div className="my-6 overflow-x-auto rounded-xl border border-slate-200"><table className="!my-0 w-full">{children}</table></div>,
          h4: ({ children }) => isCta(children)
            ? <div className="my-8 text-center not-prose"><span className="inline-block [&_a]:inline-block [&_a]:rounded-lg [&_a]:bg-brand [&_a]:px-7 [&_a]:py-3 [&_a]:text-sm [&_a]:font-semibold [&_a]:tracking-wide [&_a]:text-white [&_a]:no-underline hover:[&_a]:bg-brand-dark">{children}</span></div>
            : <h4>{children}</h4>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
