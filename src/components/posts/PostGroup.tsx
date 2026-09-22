'use client'
import { Post, Theme } from '@/payload-types'
import { useState, useTransition } from 'react'
import PostCard, { PostCardSkeleton } from './PostCard'
import { fetchPosts } from '@/actions'
import clsx from 'clsx'

export default function PostGroup(props: {
  initialPosts: Post[]
  categories: Theme[]
  currentPage: number
}) {
  const { initialPosts, categories, currentPage } = props
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [page, setPage] = useState(currentPage)
  const [hasMore, setHasMore] = useState(true)
  const [selectedTheme, setSelectedTheme] = useState('all')
  const [isFiltering, setIsFiltering] = useState(false)
  const [isPending, startTransition] = useTransition()

  console.log(posts)

  const handleFetchMorePosts = () => {
    startTransition(async () => {
      const newPosts = await fetchPosts({ page: page + 1, theme: selectedTheme })

      if (newPosts.length === 0) {
        setHasMore(false)
        return
      }

      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setPage((prev) => prev + 1)
    })
  }

  // TODO: This approach works but it's still a little bit buggy.
  const handleFilteringPosts = (category: string) => {
    setIsFiltering(true)
    setHasMore(true)
    startTransition(async () => {
      const posts = await fetchPosts({ page: 1, theme: category })

      setPosts(posts)
      setPage(1)
      setIsFiltering(false)
    })
  }

  return (
    <section className="px-6 pb-16 sm:px-12">
      <div className="mx-auto">
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-200 pb-4 font-mono
        text-[10px] uppercase tracking-[0.12em] text-gray-500"
        >
          <span className="mr-2">Filter by theme:</span>
          <button
            className={clsx(
              selectedTheme === 'all' && 'border-b border-near-dark pb-1 text-near-dark',
              'transition-colors hover:text-near-dark',
            )}
            onClick={() => {
              setSelectedTheme('all')
              handleFilteringPosts('all')
            }}
          >
            All
          </button>
          {categories.map((category: Theme) => (
            <button
              key={category.name}
              className={clsx(
                selectedTheme === category.name && 'border-b border-near-dark pb-1 text-near-dark',
                'transition-colors hover:text-near-dark',
              )}
              onClick={() => {
                setSelectedTheme(category.name)
                handleFilteringPosts(category.name)
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {!isFiltering ? (
          <div>
            {posts.map((post: Post) => (
              <PostCard post={post} key={post.id} />
            ))}
            {/* Display a loading skeleton */}
            {isPending && Array.from({ length: 5 }).map((_, idx) => <PostCardSkeleton key={idx} />)}
          </div>
        ) : (
          <>
            {Array.from({ length: 5 }).map((_, idx) => (
              <PostCardSkeleton key={idx} />
            ))}
          </>
        )}

        {hasMore && (
          <button
            className="mx-auto mt-10 block border border-gray-200 px-9 py-3 font-mono text-sm uppercase tracking-[0.12em] 
        text-near-dark hover:border-gray-400"
            onClick={handleFetchMorePosts}
            disabled={isPending}
          >
            {isPending ? 'Loading ...' : 'Load older entries →'}
          </button>
        )}
      </div>
    </section>
  )
}
