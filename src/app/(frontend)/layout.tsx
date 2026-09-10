import React from 'react'
import './styles.css'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { Navbar } from '@/components/ui/Navbar'
import { Lora } from 'next/font/google'
import { Footer } from '@/components/ui/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const lora = Lora({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'settings', depth: 2 })

  // console.log(siteSettings)

  return (
    <html lang="en" className={`${lora.variable}`}>
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
