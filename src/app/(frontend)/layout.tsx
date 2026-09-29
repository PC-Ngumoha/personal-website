import React from 'react'
import './styles.css'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { Navbar } from '@/components/ui/Navbar'
import { Lora, JetBrains_Mono } from 'next/font/google'
import { Footer } from '@/components/ui/Footer'
import { fetchSettings } from '@/actions'
import { Metadata } from 'next'

// export const metadata = {
//   title: '',
//   description: 'A blank template using Payload in a Next.js app.',
// }

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await fetchSettings()
  const favIconPath =
    siteSettings.image && typeof siteSettings.image !== 'string' && siteSettings.image.url

  return {
    title: {
      default: siteSettings.siteName || 'Personal Website',
      template: `%s ― ${siteSettings.siteName || 'Personal Website'}`,
    },
    icons: {
      icon: favIconPath || '',
    },
  }
}

const lora = Lora({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
})

const jetbrains_mono = JetBrains_Mono({
  variable: '--font-jetbrain-mono',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'settings', depth: 2 })

  // console.log(siteSettings)

  return (
    <html lang="en" className={`${lora.variable} ${jetbrains_mono.variable}`}>
      <body className="bg-off-white text-gray-500 p-2">
        <header className="flex flex-col border-b border-green-900/30">
          <Navbar settings={siteSettings} />
        </header>
        <main className="max-w-350 mx-auto">{children}</main>
        <div className="border-t border-green-900/30">
          <Footer settings={siteSettings} />
        </div>
      </body>
    </html>
  )
}
