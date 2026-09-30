import { fetchSettings } from '@/actions'
import { ImageResponse } from 'next/og'

const siteSettings = await fetchSettings()

// const settings = siteSettings as typeof siteSettings & {
//   image?: { url?: string } | string
//   logo?: { url?: string } | string
//  profileImage?: { url?: string } | string
// }

const imageUrl =
  siteSettings.image && typeof siteSettings.image !== 'string' && siteSettings.image.url

const initials = siteSettings.siteName
  ?.split(' ')
  .map((word) => word[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

// Image metadata
export const contentType = 'image/webp'
export const alt = siteSettings.siteName
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      className="flex h-full w-full items-center bg-[linear-gradient(120deg,#111827_0%,#312e81_100%)] p-[72px_88px]
    font-sans text-white"
    >
      <div
        className="flex h-[310px] w-[310px] items-center justify-center overflow-hidden rounded-[40px]
      border-[8px] border-white/20 bg-[linear-gradient(135deg,#818cf8,#c084fc)] text-[92px] font-bold"
      >
        {imageUrl ? (
          <img src={imageUrl} alt="" className="h-full w-full object-center" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <div className="ml-16 flex flex-col">
        <div className="mb-[18px] text-[28px] text-violet-300">Check us out</div>
        <div className="text-[64px] font-bold tracking-[-2px]">{siteSettings.siteName}</div>
      </div>
    </div>,
    { ...size },
  )
}
