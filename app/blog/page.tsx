import type { Metadata } from 'next'
import { getPosts } from '@/lib/posts'
import { BlogIndex } from '@/components/blog-index'

export const metadata: Metadata = {
  title: 'IPTV guides and articles',
  description: 'In-depth IPTV guides: how it works, setup on Firestick, Smart TV and Roku, buying advice, pricing, 4K streaming and troubleshooting.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  const posts = getPosts()
  return (
    <div className="mx-auto max-w-6xl px-4 pt-36 pb-20">
      <h1 className="text-center text-4xl font-bold">IPTV guides and articles</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Practical guides on how IPTV works, how to set it up on your devices, what it costs and how to fix common problems.</p>
      <BlogIndex posts={posts} />
    </div>
  )
}
