import { Setting } from '@/payload-types'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { FaXTwitter } from 'react-icons/fa6'

export function Footer(props: { settings: Setting }) {
  return (
    <footer className="mx-auto max-w-350 px-6 py-10 sm:px-10 lg:px-16">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        <div>
          <p className="text-sm text-near-dark font-semibold">
            © {new Date().getFullYear()} {props.settings.siteName}.
          </p>
          <p className="mt-3 max-w-md text-base leading-6 text-stone-500">
            {props.settings.tagline}
          </p>
        </div>

        <div className="flex items-center gap-8 pt-1 text-lg md:text-2xl">
          <a
            href={props.settings.socials?.github!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-near-dark"
          >
            <LuGithub />
          </a>
          <a
            href={props.settings.socials?.linkedin!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-near-dark"
          >
            <LuLinkedin />
          </a>
          <a
            href={props.settings.socials?.twitter!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="transition-colors hover:text-near-dark"
          >
            <FaXTwitter />
          </a>
          <a
            href={`mailto:${props.settings.socials?.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="transition-colors hover:text-near-dark"
          >
            <LuMail />
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-x-9 gap-y-4 text-sm ">
        <a href="#" className="hover:text-near-dark">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-near-dark">
          Sitemap
        </a>
        <a href="#" className="hover:text-near-dark">
          Colophon
        </a>
        <span aria-hidden="true">—</span>
        <span>Built with passion &amp; precision.</span>
      </div>
    </footer>
  )
}
