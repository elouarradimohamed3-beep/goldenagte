export function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto mt-24 max-w-6xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
