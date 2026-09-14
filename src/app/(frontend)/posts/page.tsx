import { getPayload } from 'payload'
import config from '@payload-config'
import { Post, Theme } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default async function PostsPage() {
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'settings' })

  return (
    <>
      <header className="px-6 py-14 sm:px-12 sm:py-16">
        <div className="max-w-155">
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500">
            Archive &amp; Reflections
          </p>
          <h1 className="font-serif text-5xl w-[80%] md:text-6xl leading-[1.05] tracking-[-0.035em] text-near-dark ">
            {siteSettings.blogPage ? siteSettings.blogPage.title : 'Title of Page'}
          </h1>
          <p className="mt-6 max-w-140 font-serif text-[17px] leading-[1.42] text-gray-500 sm:text-[18px]">
            {siteSettings.blogPage
              ? siteSettings.blogPage.subtitle
              : 'Additional text for the page.'}
          </p>
        </div>
      </header>
      <PostsArchive payload={payload} />
    </>
  )
}

async function PostsArchive({ payload }: { payload: Awaited<ReturnType<typeof getPayload>> }) {
  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    depth: 1,
    limit: 100,
    sort: '-publishedAt',
  })

  const { docs: categories } = await payload.find({ collection: 'themes' })

  return (
    <section className="px-6 pb-16 sm:px-12">
      <div className="mx-auto">
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-200 pb-4 font-mono
        text-[10px] uppercase tracking-[0.12em] text-gray-500"
        >
          <span className="mr-2">Filter by theme:</span>
          <button className="border-b border-near-dark pb-1 text-near-dark">All</button>
          {categories.map((category: Theme) => (
            <button key={category.name} className="transition-colors hover:text-near-dark">
              {category.name}
            </button>
          ))}
        </div>

        <div>
          {posts.map((post: Post) => {
            const date = post.published_at ? new Date(post.published_at) : undefined

            return (
              <article
                key={post.id}
                className="grid gap-6 border-b border-gray-200 py-8 sm:grid-cols-[1fr_3fr_150px] sm:gap-5 sm:py-8"
              >
                <div className="font-mono text-[11px] uppercase leading-[1.35] tracking-[0.12em] text-gray-500">
                  {date ? (
                    <>
                      <time dateTime={date.toISOString()}>
                        {date.toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                      <br />
                    </>
                  ) : null}
                  {/* TODO: Add estimated read time functionality later. */}
                  <span> 5 min read</span>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.12em] text-gray-500">
                    {post.theme && typeof post.theme !== 'string' && `#${post.theme.name}`}
                  </p>
                  <h2 className="font-serif text-xl md:text-2xl leading-tight tracking-[-0.02em] text-near-dark">
                    <Link href={`/posts/${post.slug}`} className="hover:opacity-70">
                      {post.title}
                    </Link>
                  </h2>
                  {post.subtitle ? (
                    <p className="mt-4 max-w-135 font-serif text-sm leading-[1.45] text-gray-500">
                      {post.subtitle.substring(0, 100)}
                    </p>
                  ) : null}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="mt-5 inline-block font-mono text-[9px] uppercase tracking-[0.16em] text-gray-600 hover:text-near-dark"
                  >
                    Read entry →
                  </Link>
                </div>
                {post.coverImage && typeof post.coverImage !== 'string' && (
                  <Image
                    src={post.coverImage.url as string}
                    alt={post.coverImage.alt}
                    width={300}
                    height={300}
                    className="hidden h-[75px] w-full object-cover sm:block"
                  />
                )}
              </article>
            )
          })}
        </div>

        <button className="mx-auto mt-10 block border border-gray-200 px-9 py-3 font-mono text-xs uppercase tracking-[0.12em] text-near-dark hover:border-gray-400">
          Load older entries&nbsp; →
        </button>
      </div>
    </section>
  )
}
