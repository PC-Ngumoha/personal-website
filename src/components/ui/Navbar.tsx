'use client'
import { Setting } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { TfiMenuAlt, TfiClose } from 'react-icons/tfi'
import { clsx } from 'clsx'

//TODO: Review and refactor
export function Navbar(props: { settings: Setting }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <nav className="mx-auto sm:flex-2 w-full h-full flex justify-between items-center max-w-350 p-3">
        <div className="flex items-center gap-2 ">
          {props.settings.image &&
            typeof props.settings.image !== 'string' &&
            props.settings.image.url && (
              <div className="h-10 w-10 rounded-full overflow-clip">
                <Image
                  src={props.settings.image.url}
                  alt={props.settings.image.alt}
                  height={300}
                  width={300}
                  className="w-full h-full object-center"
                />
              </div>
            )}
          <span className="font-bold text-near-dark tracking-tighter [word-spacing:4px] text-xl">
            {props.settings.navbar?.logo}'s Portfolio
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-10 font-semibold">
          {props.settings.navbar?.navLinks?.map((link) => {
            // Detecting the page we're currently on.
            const currentPage = pathname === link?.uri

            return (
              <li key={link.id}>
                <Link
                  href={link.uri!}
                  className={clsx(
                    'transition-colors hover:text-near-dark',
                    currentPage && 'text-near-dark',
                  )}
                >
                  {link.label!}
                </Link>
              </li>
            )
          })}
        </ul>
        <button
          className="md:hidden transition-colors hover:text-near-dark text-xl"
          onClick={toggleDropdown}
        >
          {isOpen ? <TfiClose /> : <TfiMenuAlt />}
        </button>
      </nav>
      {/* dropdown */}
      {isOpen && (
        <ul className="mx-3 py-5 px-6 flex flex-col items-start gap-4 md:hidden">
          {props.settings.navbar?.navLinks?.map((link) => {
            const currentPage = pathname === link?.uri

            return (
              <li key={link.id} className="block">
                <Link
                  href={link.uri!}
                  className={clsx(
                    'rounded-md px-3 py-2 text-base font-semibold transition-colors hover:text-near-dark',
                    currentPage && 'text-near-dark',
                  )}
                >
                  {link.label!}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
