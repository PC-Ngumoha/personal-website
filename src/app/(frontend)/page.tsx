import config from '@/payload.config'
import Link from 'next/link'
import { getPayload } from 'payload'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'settings', depth: 1 })

  // console.log(siteSettings)

  return (
    <>
      <section className="border-b border-green-900/30 pb-8 pt-8 md:pt-10 mb-4">
        <div className="grid items-end gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="max-w-190 text-[clamp(3.5rem,6vw,8.5rem)] leading-[0.82] tracking-[-0.07em] text-near-dark">
              {siteSettings.homePage?.mainTagline}
            </h1>

            <div className="mt-8 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-near-dark/70">
              <span className="h-px w-12 bg-black/40" />
              <span>Currently exploring: {siteSettings.homePage?.currentlyExploring}</span>
            </div>
          </div>

          <div className="max-w-130 justify-self-end">
            <p className="text-[clamp(1.15rem,2vw,2.4rem)] leading-[1.2] tracking-tighter text-near-dark">
              {siteSettings.homePage?.introduction}
            </p>

            <div className="mt-8 flex gap-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-near-dark/75">
              {siteSettings.homePage?.cta?.map((action) => (
                <Link
                  key={action.label!}
                  href={action.uri!}
                  className="border-b border-black/60 pb-1 transition-opacity hover:opacity-70"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
