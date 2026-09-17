import { fetchCategories, fetchPosts, fetchSettings } from '@/actions'
import PostGroup from '@/components/posts/PostGroup'

export default async function PostsPage() {
  const siteSettings = await fetchSettings()
  const posts = await fetchPosts({ page: 1, theme: 'all' })
  const categories = await fetchCategories()

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
      <PostGroup initialPosts={posts} categories={categories} currentPage={1} />
    </>
  )
}
