import { fetchProjectFromSlug, fetchRelatedProjects } from '@/actions'
import { RichText } from '@/components/RichText'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { LuSquareArrowOutUpRight } from 'react-icons/lu'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await fetchProjectFromSlug({ slug })

  if (!project) {
    notFound()
  }

  const relatedProjects = await fetchRelatedProjects({ project })

  const dateString = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(project.createdAt as string))

  return (
    <main className="min-h-screen px-6 py-6 text-near-dark sm:px-10 lg:px-[7.5vw]">
      <div className="mx-auto max-w-[1090px]">
        <Link
          href="/projects"
          className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#65635e] transition-colors hover:text-[#242321]
          flex items-center gap-2"
        >
          <FaArrowLeft className="w-2 h-2" /> Back to projects
        </Link>

        <header className="mt-5 flex flex-col gap-7 sm:mt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.23em] text-[#7c7a73]">
              {dateString}
            </p>
            <h1 className="max-w-[580px] font-serif text-[35px] lg:text-[60px] leading-[0.96] tracking-[-0.04em]">
              {project?.title}
            </h1>
          </div>
          <nav className="flex gap-6 pb-1 font-mono text-[12px] uppercase tracking-[0.08em]">
            <a
              href={project.links.repo}
              target="_blank"
              className="hover:underline flex items-center gap-2"
            >
              Repository <FiGithub className="w-4 h-4" />
            </a>
            {project?.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                className="hover:underline  flex items-center gap-2"
              >
                Live Demo <LuSquareArrowOutUpRight className="w-4 h-4" />
              </a>
            )}
          </nav>
        </header>

        <div className="mt-8 aspect-[1.88] w-full overflow-hidden bg-[#d8d6ce] sm:mt-7">
          {project?.projectImage && typeof project.projectImage !== 'string' && (
            <Image
              src={project.projectImage.url as string}
              alt={project.title}
              width={project.projectImage.width as number}
              height={project.projectImage.height as number}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <section className="mx-auto mt-14 max-w-[610px] pb-16 sm:mt-[55px] flex flex-col items-center">
          <p
            className="font-serif text-[17px] italic leading-[1.45] tracking-[0.01em] text-[#77746e]
          border-b border-[#e2e0da] pb-8 mb-8"
          >
            {project?.summary}
          </p>
          <div className="richtext-blockquote richtext-paragraph richtext-headings richtext-lists">
            <RichText data={project?.body} />
          </div>
        </section>

        <footer className="mx-auto border-t border-[#d8d6ce] pb-16 pt-14 max-w-[700px] sm:pt-[62px]">
          <p className="font-mono text-[9px] uppercase tracking-[0.23em] text-[#7c7a73]">
            Stack &amp; technologies
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project?.techStack!.map((stack) => (
              <span
                key={stack.id}
                className="bg-[#f2f2ed] px-3 py-2 font-mono text-[9px] text-[#4d4b46]"
              >
                {stack.technology}
              </span>
            ))}
          </div>

          <div className="mt-28 grid grid-cols-2 gap-8 border-t border-[#d8d6ce] pt-16 sm:mt-[122px]">
            <Link href={`/projects/${relatedProjects.at(0)?.slug}`} className="group">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#7c7a73]">
                Previous project
              </p>
              <span className="mt-3 flex items-center gap-2 font-serif text-[17px] group-hover:underline">
                <FaArrowLeft className="w-3 h-3" />
                <span>{relatedProjects.at(0)?.title}</span>
              </span>
            </Link>
            <Link href={`/projects/${relatedProjects.at(1)?.slug}`} className="group text-right">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#7c7a73]">
                Next project
              </p>
              <span className="mt-3 flex items-center justify-end gap-2 font-serif text-[17px] group-hover:underline">
                <span>{relatedProjects.at(1)?.title}</span>
                <FaArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
