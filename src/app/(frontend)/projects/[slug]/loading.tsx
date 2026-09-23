export default function ProjectLoading() {
  return (
    <main className="min-h-screen px-6 py-6 text-near-dark sm:px-10 lg:px-[7.5vw]">
      <div className="mx-auto max-w-[1090px] animate-pulse">
        <div className="h-3 w-28 rounded bg-[#d8d6ce]" />
        <header className="mt-5 flex flex-col gap-7 sm:mt-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full">
            <div className="mb-3 h-3 w-20 rounded bg-[#d8d6ce]" />
            <div className="h-10 max-w-[580px] rounded bg-[#d8d6ce] sm:h-16" />
          </div>
          <div className="flex gap-6 pb-1">
            <div className="h-4 w-24 rounded bg-[#d8d6ce]" />
            <div className="h-4 w-20 rounded bg-[#d8d6ce]" />
          </div>
        </header>
        <div className="mt-8 aspect-[1.88] w-full bg-[#d8d6ce] sm:mt-7" />
        <section className="mx-auto mt-14 max-w-[610px] pb-16 sm:mt-[55px]">
          <div className="mb-8 space-y-3 border-b border-[#e2e0da] pb-8">
            <div className="h-5 w-full rounded bg-[#d8d6ce]" />
            <div className="h-5 w-3/4 rounded bg-[#d8d6ce]" />
          </div>
          <div className="space-y-4">
            <div className="h-4 w-full rounded bg-[#d8d6ce]" />
            <div className="h-4 w-11/12 rounded bg-[#d8d6ce]" />
            <div className="h-4 w-4/5 rounded bg-[#d8d6ce]" />
            <div className="h-4 w-full rounded bg-[#d8d6ce]" />
          </div>
        </section>
        <footer className="mx-auto max-w-[700px] border-t border-[#d8d6ce] pb-16 pt-14 sm:pt-[62px]">
          <div className="h-3 w-36 rounded bg-[#d8d6ce]" />
          <div className="mt-7 flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-20 rounded bg-[#d8d6ce]" />
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}
