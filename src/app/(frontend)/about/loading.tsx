export default function AboutLoading() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-7 text-[#292826] sm:px-10 lg:px-24">
      <section className="mx-auto max-w-[924px] border-b border-[#dfded9] pb-[74px]">
        <div className="grid gap-12 lg:grid-cols-[276px_minmax(0,1fr)] lg:gap-[49px]">
          <aside>
            <div className="h-[275px] animate-pulse overflow-hidden border border-[#d9d8d4] bg-[#f1f0ed]" />
            <div className="mt-6 space-y-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#65645f]">
              <div className="h-3 w-32 animate-pulse rounded bg-[#e5e3de]" />
              <div className="h-3 w-24 animate-pulse rounded bg-[#e5e3de]" />
            </div>
          </aside>

          <article className="max-w-[535px]">
            <div className="h-16 w-3/4 animate-pulse rounded bg-[#e5e3de] lg:h-20" />
            <div className="mt-5 h-px w-[75px] bg-green-900/40" />
            <div className="mt-9 space-y-4">
              <div className="h-4 w-full animate-pulse rounded bg-[#e5e3de]" />
              <div className="h-4 w-[92%] animate-pulse rounded bg-[#e5e3de]" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-[#e5e3de]" />
            </div>
            <div className="mt-12 h-5 w-64 animate-pulse rounded bg-[#e5e3de]" />
          </article>
        </div>
      </section>
      <section className="mx-auto grid max-w-[924px] gap-12 pt-[38px] lg:grid-cols-[276px_minmax(0,1fr)] lg:gap-[49px]">
        <div />
        <div>
          <div className="mb-7 h-5 w-72 animate-pulse rounded bg-[#e5e3de]" />
          <div className="space-y-[18px]">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[112px] animate-pulse border border-gray-200 bg-[#f7f6f2]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
