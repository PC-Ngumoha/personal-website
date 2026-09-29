import Link from 'next/link'
import { IoChevronBackOutline, IoShareOutline, IoBookmarkOutline } from 'react-icons/io5'

export default function PostLoading() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-[980px] px-5 pb-16 pt-3 sm:px-8">
        <header
          className="mb-5 flex justify-start border-b border-gray-300 pb-3 text-[10px]
        uppercase tracking-[0.22em] text-gray-500 font-mono"
        >
          <Link href="/posts" className="flex gap-2 items-center">
            <IoChevronBackOutline className="h-3 w-3" /> Back to journal
          </Link>
        </header>
        <div className="mb-12 h-[220px] w-full animate-pulse bg-gray-200 sm:h-[390px]" />
        <section className="mx-auto max-w-[670px]">
          <div className="mb-3 flex items-center gap-4 uppercase tracking-[0.16em]">
            <span className="h-3 w-24 animate-pulse bg-gray-200" />
            <span>&#124;</span>
            <span className="h-4 w-20 animate-pulse bg-green-50" />
          </div>
          <div className="h-14 max-w-[570px] animate-pulse bg-gray-200 sm:h-16" />
          <div
            className="mt-5 h-14 max-w-[570px] animate-pulse border-b border-gray-300 border-l-4 
          border-l-green-900 bg-gray-200"
          />
          <div
            className="mt-8 richtext-paragraph richtext-blockquote
          richtext-headings richtext-lists"
          >
            <div className="space-y-4 animate-pulse">
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-11/12 bg-gray-200" />
              <div className="h-4 w-4/5 bg-gray-200" />
              <div className="my-8 h-24 w-full bg-gray-200" />
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-3/4 bg-gray-200" />
            </div>
          </div>
        </section>
        <section
          className="mx-auto mt-16 flex max-w-[670px] items-center justify-between border-y 
          border-gray-300 py-4 font-mono text-[11px] uppercase tracking-[.14em] text-gray-500"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-gray-300
            text-[10px] text-near-dark/60"
            >
              <div className="h-full w-full animate-pulse bg-gray-200" />
            </div>
            <div>
              <div className="h-3 w-24 animate-pulse bg-gray-200" />
              <div className="mt-2 h-2 w-32 animate-pulse bg-gray-200" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button type="button" className="flex items-center gap-1.5 hover:text-near-dark/80">
              <IoShareOutline className="w-3 h-3" />
              Share
            </button>
            <button type="button" className="flex items-center gap-1.5 hover:text-near-dark/80">
              <IoBookmarkOutline className="w-3 h-3" />
              Save
            </button>
          </div>
        </section>
        <footer className="mt-16 border-t border-gray-300 pt-6">
          <div className="mb-10 flex items-center justify-between text-[10px] uppercase tracking-[.2em]">
            <span>Continue reading</span>
            <Link href="/posts" className="border-b border-gray-400 pb-1">
              All articles
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {[1, 2].map((item) => (
              <Link key={item} href="/posts" className="group border-b border-gray-300 pb-4">
                <span className="block text-[8px] uppercase tracking-[.2em]">
                  <span className="inline-block h-2 w-16 animate-pulse bg-gray-200" />
                </span>
                <h2 className="mt-4 text-xl tracking-[-.02em] group-hover:underline">
                  <span className="block h-6 w-4/5 animate-pulse bg-gray-200" />
                </h2>
                <span className="mt-3 block h-3 w-3/5 animate-pulse bg-gray-200" />
                <span className="mt-7 block w-6 border-t border-gray-300" />
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </main>
  )
}
