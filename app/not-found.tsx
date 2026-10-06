import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-44 pb-24 text-center">
      <p className="text-gradient text-8xl font-extrabold">404</p>
      <h1 className="mt-4 text-3xl font-bold">This channel is off the air</h1>
      <p className="mt-3 text-white/60">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-black">Back to home</Link>
    </div>
  )
}
