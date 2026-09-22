export default function ProjectsLoading() {
  return (
    <main aria-busy="true" aria-label="Loading projects">
      <header
        className="box-border flex min-h-[307px] items-center text-near-dark
        max-[600px]:min-h-[330px] pl-10 py-10"
      >
        <div className="mt-5 w-[calc(100%-48px)] max-w-[705px] py-[3px] pb-[7px] max-[600px]:w-[calc(100%-40px)]">
          <div className="mb-[18px] h-2 w-24 animate-pulse rounded bg-[#d9d9d5]" />
          <div className="max-w-[510px]">
            <div className="h-16 w-3/4 animate-pulse rounded bg-[#d9d9d5] max-[600px]:h-11" />
            <div className="mt-5 h-5 w-full animate-pulse rounded bg-[#e3e3df] max-[600px]:h-4" />
            <div className="mt-2 h-5 w-2/3 animate-pulse rounded bg-[#e3e3df] max-[600px]:h-4" />
          </div>
        </div>
      </header>
      <section
        className="mx-auto w-[90%] px-10 pb-24 pt-12 max-[600px]:px-5 max-[600px]:pt-8"
        aria-hidden="true"
      >
        <div
          className="mb-7 flex items-center justify-between border-b border-[#e6e4e0] pb-3 text-[10px] 
                uppercase tracking-[.18em] text-[#6d6b68]"
        >
          <nav className="flex gap-6" aria-hidden="true">
            <div className="h-3 w-20 animate-pulse rounded bg-[#d9d9d5]" />
            <div className="h-3 w-14 animate-pulse rounded bg-[#e3e3df]" />
            <div className="h-3 w-16 animate-pulse rounded bg-[#e3e3df]" />
          </nav>
          <div className="h-3 w-24 animate-pulse rounded bg-[#e3e3df]" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-11 max-[600px]:grid-cols-1">
          {Array.from({ length: 4 }, (_, index) => (
            <article key={index} className="animate-pulse">
              <div className="aspect-[4/3] w-full rounded bg-[#deded9]" />
              <div className="mt-4 h-5 w-3/4 rounded bg-[#deded9]" />
              <div className="mt-2 h-4 w-1/2 rounded bg-[#e7e7e3]" />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
