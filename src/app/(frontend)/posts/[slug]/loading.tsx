import Link from 'next/link'
import { IoChevronBackOutline, IoShareOutline, IoBookmarkOutline } from 'react-icons/io5'

export default function PostLoading() {
  return (
    <main className="min-h-screen text-[#292825]" style={{ fontFamily: 'Georgia, serif' }}>
      <article className="mx-auto max-w-[980px] px-5 pb-16 pt-3 sm:px-8">
        <header
          className="mb-5 flex justify-start border-b border-[#dedbd3] pb-3 text-[10px]
        uppercase tracking-[0.22em] text-[#77736b] font-mono"
        >
          <Link href="/posts" className="flex gap-2 items-center">
            <IoChevronBackOutline className="h-3 w-3" /> Back to journal
          </Link>
        </header>
        <div className="mb-12 h-[220px] w-full animate-pulse bg-[#e8e5de] sm:h-[390px]" />
        <section className="mx-auto max-w-[670px] text-[16px] tracking-wide">
          <div
            className="mb-3 flex items-center gap-4 text-[10px] uppercase tracking-[0.16em] text-[#77736b]
          font-mono"
          >
            <span className="h-3 w-24 animate-pulse bg-[#e8e5de]" />
            <span>&#124;</span>
            <span className="h-4 w-20 animate-pulse bg-green-50" />
          </div>
          <div className="h-14 max-w-[570px] animate-pulse bg-[#e8e5de] sm:h-16" />
          <div className="mt-5 h-14 max-w-[570px] animate-pulse border-b border-gray-300 border-l-4 border-l-green-900 bg-[#f0eee9]" />
          <div
            className="mt-8 text-near-dark/70 richtext-paragraph richtext-blockquote
          richtext-headings richtext-lists"
          >
            <div className="space-y-4 animate-pulse">
              <div className="h-4 w-full bg-[#e8e5de]" />
              <div className="h-4 w-11/12 bg-[#e8e5de]" />
              <div className="h-4 w-4/5 bg-[#e8e5de]" />
              <div className="my-8 h-24 w-full bg-[#f0eee9]" />
              <div className="h-4 w-full bg-[#e8e5de]" />
              <div className="h-4 w-3/4 bg-[#e8e5de]" />
            </div>
          </div>
        </section>
        <section
          className="mx-auto mt-16 flex max-w-[670px] items-center justify-between border-y border-[#dedbd3] py-4
        font-mono text-[11px] uppercase tracking-[.14em] text-[#77736b]"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-[#e8e5de]
            text-[10px] text-[#292825]"
            >
              <div className="h-full w-full animate-pulse bg-[#d8d4cb]" />
            </div>
            <div>
              <div className="h-3 w-24 animate-pulse bg-[#d8d4cb]" />
              <div className="mt-2 h-2 w-32 animate-pulse bg-[#e8e5de]" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button type="button" className="flex items-center gap-1.5 hover:text-[#292825]">
              <IoShareOutline className="w-3 h-3" />
              Share
            </button>
            <button type="button" className="flex items-center gap-1.5 hover:text-[#292825]">
              <IoBookmarkOutline className="w-3 h-3" />
              Save
            </button>
          </div>
        </section>
        <footer className="mt-16 border-t border-[#dedbd3] pt-6 text-[#77736b]">
          <div className="mb-10 flex items-center justify-between text-[10px] uppercase tracking-[.2em]">
            <span>Continue reading</span>
            <Link href="/posts" className="border-b border-[#aaa69e] pb-1">
              All articles
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {[1, 2].map((item) => (
              <Link key={item} href="/posts" className="group border-b border-[#dedbd3] pb-4">
                <span className="block text-[8px] uppercase tracking-[.2em]">
                  <span className="inline-block h-2 w-16 animate-pulse bg-[#e8e5de]" />
                </span>
                <h2 className="mt-4 text-xl tracking-[-.02em] text-[#292825] group-hover:underline">
                  <span className="block h-6 w-4/5 animate-pulse bg-[#e8e5de]" />
                </h2>
                <span className="mt-3 block h-3 w-3/5 animate-pulse bg-[#e8e5de]" />
                <span className="mt-7 block w-6 border-t border-[#dedbd3]" />
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </main>
  )
}
