'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Post } from '@/payload-types'
import { ProjectType } from '@/types'

const payload = await getPayload({ config })

export async function fetchPosts({
  page,
  theme,
  limit = 5,
}: {
  page: number
  theme: string
  limit?: number
}) {
  let result

  if (theme !== 'all') {
    // filter posts by theme
    result = await payload.find({
      collection: 'posts',
      where: {
        and: [
          {
            status: {
              equals: 'published',
            },
          },
          {
            'theme.name': {
              equals: theme,
            },
          },
        ],
      },
      depth: 2,
      limit,
      page,
      sort: '-publishedAt',
    })
  } else {
    // Fetches all posts unfiltered
    result = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      depth: 2,
      limit,
      page,
      sort: '-publishedAt',
    })
  }

  // Add a 3 second delay.
  // TODO: Remove this from production code
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.docs
}

export async function fetchPostFromSlug({ slug }: { slug: string }) {
  const foundPosts = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    depth: 2,
  })

  // Add a 3 second delay
  // TODO: Remove this from production code
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return foundPosts.docs.at(0)
}

// TODO: Work on a better algorithm to find related posts
// The ideal system should also support blog posts in a series.
export async function fetchRelatedPosts({ post }: { post: Post }) {
  return await payload.find({
    collection: 'posts',
    where: {
      id: { not_equals: post.id },
    },
    sort: '-published_at',
    limit: 2,
  })
}

export async function fetchCategories() {
  const { docs: categories } = await payload.find({ collection: 'themes' })
  return categories
}

export async function fetchSettings() {
  return await payload.findGlobal({ slug: 'settings', depth: 2 })
}

export async function fetchProjects({
  page,
  projectType = 'all',
  limit = 4,
}: {
  page: number
  limit?: number
  projectType?: ProjectType
}) {
  let result

  if (projectType === 'all') {
    result = await payload.find({
      collection: 'projects',
      page,
      limit,
    })
  } else {
    result = await payload.find({
      collection: 'projects',
      where: {
        projectType: {
          equals: projectType,
        },
      },
      page,
      limit,
    })
  }

  // TODO: Remove this delay of 3 seconds from the actual production code
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.docs
}
