import { fetchSettings } from '@/actions'
import { RichText } from '@/components/RichText'
import Image from 'next/image'
import { FaRegEnvelope, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { GoLink } from 'react-icons/go'
import { LuArrowUpRight } from 'react-icons/lu'
import { IconType } from 'react-icons/lib'

export default async function AboutPage() {
  const siteSettings = await fetchSettings()

  type LinkType = {
    label: string
    uri: string
    icon: IconType
  }

  const links: LinkType[] = [
    {
      label: 'Email',
      uri: siteSettings.socials?.email ?? '',
      icon: FaRegEnvelope,
    },
    {
      label: 'Linkedin',
      uri: siteSettings.socials?.linkedin ?? '',
      icon: FaLinkedinIn,
    },
    {
      label: 'Twitter',
      uri: siteSettings.socials?.twitter ?? '',
      icon: FaXTwitter,
    },
  ]

  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-7 text-[#292826] sm:px-10 lg:px-24">
      <section className="mx-auto max-w-[924px] border-b border-[#dfded9] pb-[74px]">
        <div className="grid gap-12 lg:grid-cols-[276px_minmax(0,1fr)] lg:gap-[49px]">
          <aside>
            <div className="h-[275px] overflow-hidden border border-[#d9d8d4] bg-[#f1f0ed]">
              {siteSettings.image && typeof siteSettings.image !== 'string' && (
                <Image
                  src={siteSettings.image.url as string}
                  alt={siteSettings.siteName as string}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover object-top"
                />
              )}
            </div>
            <div className="mt-6 space-y-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#65645f]">
              <p className="flex items-center gap-2">
                <span aria-hidden="true" className="text-[11px]">
                  ⌖
                </span>{' '}
                Based in {siteSettings.location}
              </p>
              <p className="flex items-center gap-2">
                <span aria-hidden="true" className="text-[10px]">
                  ♧
                </span>{' '}
                {siteSettings.role}
              </p>
            </div>
          </aside>

          <article className="max-w-[535px]">
            <h1 className="font-serif text-5xl lg:text-6xl max-w-[80%] leading-[0.98] tracking-[-0.045em]">
              {siteSettings.siteName}
            </h1>
            <div className="mt-5 h-px w-[75px] bg-green-900/40" />
            <div
              className="mt-9 space-y-7 font-serif text-[15.5px] leading-[1.47] tracking-[0.01em] text-[#73716d]
            richtext-paragraph"
            >
              <RichText data={siteSettings.bio} />
            </div>
            <a
              href={siteSettings.socials!.github ?? ''}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-12 inline-flex items-center gap-3 border-b border-green-900/40 pb-2 font-serif
              text-[15px] text-[#292a28] hover:border-[#52685f]"
            >
              <span aria-hidden="true" className="text-[17px]">
                ♧
              </span>{' '}
              Follow the engineering journey on GitHub{' '}
              <span aria-hidden="true" className="text-xs">
                ↗
              </span>
            </a>
          </article>
        </div>
      </section>
      <section className="mx-auto grid max-w-[924px] gap-12 pt-[38px] lg:grid-cols-[276px_minmax(0,1fr)] lg:gap-[49px]">
        <div />
        <div>
          <div className="mb-7 flex items-center gap-3 font-mono text-[16px] uppercase tracking-[0.25em] text-near-dark/45">
            <span aria-hidden="true" className=" leading-none text-near-dark">
              <GoLink />
            </span>
            Connect / Correspondence
          </div>
          <div className="space-y-[18px]">
            {links.map(({ label, uri, icon: Icon }: LinkType) => {
              // Removing unnecessary prefixes from the links
              const displayedUri = uri.replace('https://', '').replace('www.', '').toLowerCase()

              return (
                <a
                  key={label as string}
                  href={label?.toLowerCase() === 'email' ? `mailto:${uri}` : uri}
                  target="_blank"
                  className="group block border border-gray-200 px-[19px] py-[17px] transition-colors hover:border-gray-400"
                >
                  <div className="flex items-start justify-between">
                    <span
                      aria-hidden="true"
                      className="text-xl leading-none text-gray-500
                    group-hover:text-gray-700"
                    >
                      <Icon className="w-6 h-6" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[11px] text-gray-400 transition-transform group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5 group-hover:text-near-dark"
                    >
                      <LuArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div
                    className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-gray-400
                  group-hover:text-near-dark ease-in duration-75"
                  >
                    {label}
                  </div>
                  <div
                    className="mt-1 font-serif text-[17px] tracking-[-0.01em] text-near-dark
                  group-hover:text-gray-400 ease-in duration-75"
                  >
                    {displayedUri}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
