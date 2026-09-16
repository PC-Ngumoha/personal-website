'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export async function fetchPosts({ page }: { page: number }) {
  const { docs: posts } = await payload.find({
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

  return posts
}

export async function fetchCategories() {
  const { docs: categories } = await payload.find({ collection: 'themes' })
  return categories
}

export async function fetchSettings() {
  return await payload.findGlobal({ slug: 'settings' })
}
