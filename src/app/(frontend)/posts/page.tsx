import { fetchCategories, fetchPosts, fetchSettings } from '@/actions'
import PostGroup from '@/components/posts/PostGroup'
import Link from 'next/link'

export default async function PostsPage() {
  const siteSettings = await fetchSettings()
  const posts = await fetchPosts({ page: 1, theme: 'all' })
  const categories = await fetchCategories()

  return (
    <>
      {posts.length > 0 ? (
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
          <PostGroup initialPosts={posts} categories={categories} currentPage={1} />
        </>
      ) : (
        <section className="flex min-h-[60vh] items-center justify-center px-6 py-16 text-center sm:px-12">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500">
              No posts yet
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-near-dark md:text-5xl">
              There are currently no blog posts available.
            </h1>
            <p className="mt-5 font-serif text-[17px] leading-[1.42] text-gray-500 sm:text-[18px]">
              Please check back later, or return to the home page to explore more.
            </p>
            <Link
              href="/"
              replace
              className="mt-8 inline-block border-b border-near-dark pb-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-near-dark transition-opacity hover:opacity-60"
            >
              Return home
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
