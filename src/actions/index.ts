'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export async function fetchPosts({ page = 1, theme }: { page?: number; theme?: string }) {
  let result

  if (theme) {
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
      depth: 1,
      limit: 5,
      page,
      sort: '-publishedAt',
    })
  } else {
    result = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      depth: 1,
      limit: 5,
      page,
      sort: '-publishedAt',
    })
  }

  // Add a 3 second delay.
  // TODO: Remove this from production code
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.docs
}

export async function fetchCategories() {
  const { docs: categories } = await payload.find({ collection: 'themes' })
  return categories
}

export async function fetchSettings() {
  return await payload.findGlobal({ slug: 'settings' })
}
