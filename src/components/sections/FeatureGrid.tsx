export type FeatureItem = { title: string; description: string; icon?: React.ReactNode };
export function FeatureGrid({ items }: { items: FeatureItem[] }){
  return (
    <section aria-labelledby="features-heading" className="mx-auto max-w-6xl px-6">
      <h2 id="features-heading" className="sr-only">주요 기능</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((f, i)=> (
          <article key={i} className="rounded-2xl p-6 bg-[var(--color-surface)] border border-white/5">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-[var(--color-muted)]">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
