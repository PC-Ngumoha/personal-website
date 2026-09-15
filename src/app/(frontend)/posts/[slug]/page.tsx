import Link from 'next/link'
import { getPayload } from 'payload'
import { IoBookmarkOutline, IoChevronBackOutline, IoShareOutline } from 'react-icons/io5'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { RichText } from '@/components/RichText'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: postSlug } = await params
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'settings', depth: 2 })
  const foundPosts = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: postSlug },
    },
    limit: 1,
    depth: 2,
  })
  const post = foundPosts.docs.at(0)

  if (!post) {
    notFound() // Raise 404
  }

  const relatedPosts = await payload.find({
    collection: 'posts',
    where: {
      id: { not_equals: post.id },
    },
    sort: '-published_at',
    limit: 2,
  })

  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(new Date(post.published_at as string))

  // console.log(JSON.stringify(post.body!.root.children, null, 2))

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
            width={500}
            height={500}
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
          {/* <div className="mt-8 leading-[1.9] text-[#4e4b45]">
            <p>
              The promise of modern productivity is clear: more often than ever, we are surrounded
              by tools designed to keep us moving. But in the pursuit of constant progress, we have
              forgotten a quieter possibility. What if a space could help us think by asking less of
              us?
            </p>
            <h2 className="mt-8 text-sm font-bold text-[#302e2a]">The Structural Void</h2>
            <p className="mt-4">
              A well-designed room allows light to do the work that technology often promises. It
              gives the mind a horizon, a moment between one thought and the next. These pauses are
              not empty; they are where attention gathers and ideas become whole.
            </p>
            <blockquote className="my-9 border-y border-[#d8d4cc] py-6 text-center text-sm italic leading-6 text-[#36332e]">
              “The space between the notes is just as important as the notes themselves. Without the
              silence, the music is merely noise.”
              <cite className="mt-3 block text-[8px] not-italic uppercase tracking-[.16em] text-[#89857c]">
                — Anonymous, On Composition
              </cite>
            </blockquote>
            <p>
              When we apply these principles to our homes and devices, the result is not a return to
              the past. Quite simply, we make room for deliberate thought. A quiet room can be an
              active participant in our lives, reminding us that the best technology is often the
              technology we choose not to use.
            </p>
            <h2 className="mt-8 text-sm font-bold text-[#302e2a]">Implementing Focused Systems</h2>
            <p className="mt-4">
              There are three pillars to creating a focused digital environment:
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-6">
              <li>Elimination of unnecessary information.</li>
              <li>Single-purpose tools that support the task.</li>
              <li>Predictable, intentional spatial relationships.</li>
            </ol>
            <aside className="my-8 border border-[#d8d4cc] bg-[#f0eee8] p-4 text-[10px] leading-5">
              <strong className="mb-1 block text-[8px] uppercase tracking-[.16em]">
                The quiet test
              </strong>
              The measure of a space is not how much it contains, but how much clarity it makes
              possible. Remove what interrupts; preserve what helps you stay present.
            </aside>
            <p>
              As we move forward into an increasingly fragmented digital landscape, the value of
              these quiet spaces will only grow. It is our responsibility as inhabitants to create
              environments that allow us to concentrate, reflect, and return to the world with
              greater intention.
            </p>
          </div> */}
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
            {relatedPosts.docs.map((relatedPost) => (
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
