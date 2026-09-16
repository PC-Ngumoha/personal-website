'use client'
import { Post, Theme } from '@/payload-types'
import { useState, useTransition } from 'react'
import PostCard, { PostCardSkeleton } from './PostCard'
import { fetchPosts } from '@/actions'

export default function PostGroup(props: {
  initialPosts: Post[]
  categories: Theme[]
  currentPage: number
}) {
  const { initialPosts, categories, currentPage } = props
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [page, setPage] = useState(currentPage)
  const [hasMore, setHasMore] = useState(true)
  const [isPending, startTransition] = useTransition()

  const handleFetchMorePosts = () => {
    startTransition(async () => {
      const newPosts = await fetchPosts({ page: page + 1 })

      if (newPosts.length === 0) {
        setHasMore(false)
        return
      }

      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setPage((prev) => prev + 1)
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
          <button className="border-b border-near-dark pb-1 text-near-dark">All</button>
          {categories.map((category: Theme) => (
            <button key={category.name} className="transition-colors hover:text-near-dark">
              {category.name}
            </button>
          ))}
        </div>

        <div>
          {posts.map((post: Post) => (
            <PostCard post={post} key={post.id} />
          ))}
          {/* Display a loading skeleton */}
          {isPending && Array.from({ length: 5 }).map((_, idx) => <PostCardSkeleton key={idx} />)}
        </div>

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
