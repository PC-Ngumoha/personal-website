import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/payload-types'

export default function PostCard(props: { post: Post }) {
  const date = props.post.published_at ? new Date(props.post.published_at) : undefined

  return (
    <article className="grid gap-6 border-b border-gray-200 py-8 sm:grid-cols-[1fr_3fr_150px] sm:gap-5 sm:py-8">
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
          {props.post.theme && typeof props.post.theme !== 'string' && `#${props.post.theme.name}`}
        </p>
        <h2 className="font-serif text-xl md:text-2xl leading-tight tracking-[-0.02em] text-near-dark">
          <Link href={`/posts/${props.post.slug}`} className="hover:opacity-70">
            {props.post.title}
          </Link>
        </h2>
        {props.post.subtitle ? (
          <p className="mt-4 max-w-135 font-serif text-sm leading-[1.45] text-gray-500">
            {props.post.subtitle.substring(0, 100)}
          </p>
        ) : null}
        <Link
          href={`/posts/${props.post.slug}`}
          className="mt-5 inline-block font-mono text-[9px] uppercase tracking-[0.16em] text-gray-600 hover:text-near-dark"
        >
          Read entry →
        </Link>
      </div>
      {props.post.coverImage && typeof props.post.coverImage !== 'string' && (
        <Image
          src={props.post.coverImage.url as string}
          alt={props.post.coverImage.alt}
          width={300}
          height={300}
          className="hidden h-[75px] w-full object-cover sm:block"
        />
      )}
    </article>
  )
}
