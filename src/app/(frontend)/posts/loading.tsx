import { PostCardSkeleton } from '@/components/posts/PostCard'

export default function PostsLoading() {
  return (
    <>
      <header className="px-6 py-14 sm:px-12 sm:py-16">
        <div className="max-w-155">
          <div className="mb-4 h-3 w-36 animate-pulse rounded bg-gray-200" />
          <div className="h-14 w-[80%] animate-pulse rounded bg-gray-200 md:h-16" />
          <div className="mt-6 h-5 w-full max-w-140 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-5 w-4/5 max-w-140 animate-pulse rounded bg-gray-200" />
        </div>
      </header>
      <section className="px-6 pb-16 sm:px-12">
        <div className="mx-auto">
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-200 pb-4 font-mono
              text-[10px] uppercase tracking-[0.12em] text-gray-500"
          >
            <div className="mr-2 h-3 w-24 animate-pulse rounded bg-gray-200" />
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-3 w-12 animate-pulse rounded bg-gray-200" />
            ))}
          </div>

          <div>
            {Array.from({ length: 5 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
          <div className="mx-auto mt-10 h-12 w-48 animate-pulse rounded bg-gray-200" />
        </div>
      </section>
    </>
  )
}
