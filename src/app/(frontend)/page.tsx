import config from '@/payload.config'
import { getPayload } from 'payload'

export default async function HomePage() {
  // const payload = await getPayload({ config })
  // const siteSettings = await payload.findGlobal({ slug: 'settings', depth: 1 })

  // console.log(siteSettings)

  return <div>Home page</div>
}
