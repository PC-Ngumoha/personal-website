import Link from 'next/link'
import { IoBookmarkOutline, IoChevronBackOutline, IoShareOutline } from 'react-icons/io5'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { RichText } from '@/components/RichText'
import { fetchPostFromSlug, fetchRelatedPosts, fetchSettings } from '@/actions'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const siteSettings = await fetchSettings()
  const post = await fetchPostFromSlug({ slug })

  if (!post) {
    notFound() // Raise 404
  }

  const relatedPosts = await fetchRelatedPosts({ post })

  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(new Date(post.published_at as string))

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
        {post.coverImage && typeof post.coverImage !== 'string' && (
          <Image
            src={post.coverImage.url as string}
            alt={post.coverImage.alt}
            width={2000}
            height={2000}
            className="mb-12 h-[220px] w-full object-cover sm:h-[390px]"
          />
        )}
        <section className="mx-auto max-w-[670px] text-[16px] tracking-wide">
          <div
            className="mb-3 flex items-center gap-4 text-[10px] uppercase tracking-[0.16em] text-[#77736b]
          font-mono"
          >
            <span>{dateString}</span>
            <span>&#124;</span>
            <span className="text-green-900 bg-green-50 p-1">
              {post.theme && typeof post.theme !== 'string' && post.theme.name}
            </span>
          </div>
          <h1 className="max-w-[570px] text-5xl leading-[.98] tracking-[-.045em] sm:text-6xl">
            {post.title}
          </h1>
          {post.subtitle && (
            <blockquote
              className="mt-5 border-b border-gray-300 pb-6 text-[19px] italic leading-5 text-[#77736b]
          max-w-[570px] tracking-wide [word-spacing:2px] border-l-4 border-l-green-900 pl-6 pt-3"
            >
              {post.subtitle}
            </blockquote>
          )}
          <div
            className="mt-8 text-near-dark/70 richtext-paragraph richtext-blockquote
          richtext-headings richtext-lists"
          >
            <RichText data={post.body} />
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
              {siteSettings.image && typeof siteSettings.image !== 'string' && (
                <Image
                  src={siteSettings.image.url as string}
                  alt={siteSettings.image.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-center"
                />
              )}
            </div>
            <div>
              <p className="text-[12px] text-[#292825]">{siteSettings.siteName}</p>
              <p className="mt-1 text-[9px] tracking-[.12em]">{siteSettings.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button type="button" className="flex items-center gap-1.5 hover:text-[#292825]">
              <IoShareOutline className="h-3 w-3" />
              Share
            </button>
            <button type="button" className="flex items-center gap-1.5 hover:text-[#292825]">
              <IoBookmarkOutline className="h-3 w-3" />
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
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/posts/${relatedPost.slug}`}
                className="group border-b border-[#dedbd3] pb-4"
              >
                <span className="block text-[8px] uppercase tracking-[.2em]">
                  {new Intl.DateTimeFormat('en-GB', {
                    month: 'short',
                    day: '2-digit',
                  }).format(new Date(relatedPost.published_at as string))}
                </span>
                <h2 className="mt-4 text-xl tracking-[-.02em] text-[#292825] group-hover:underline">
                  {relatedPost.title}
                </h2>
                {relatedPost.subtitle && (
                  <p className="mt-3 text-xs tracking-wide">{relatedPost.subtitle}</p>
                )}
                <span className="mt-7 block w-6 border-t border-[#dedbd3]" />
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </main>
  )
}
