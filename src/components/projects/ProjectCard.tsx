import { Project } from '@/payload-types'
import Image from 'next/image'

export function ProjectCardSkeleton() {
  return (
    <article>
      <div className="mb-2 h-[300px] w-full animate-pulse bg-[#e5e2de] max-[600px]:h-[220px]" />
      <div className="mb-2 h-3 w-24 animate-pulse bg-[#e5e2de]" />
      <div className="mb-3 h-5 w-3/4 animate-pulse bg-[#e5e2de]" />
      <div className="min-h-[47px] space-y-2">
        <div className="h-3 w-full animate-pulse bg-[#e5e2de]" />
        <div className="h-3 w-5/6 animate-pulse bg-[#e5e2de]" />
      </div>
      <div className="mt-3 h-3 w-2/5 animate-pulse bg-[#e5e2de]" />
      <div className="mt-5 h-4 w-28 animate-pulse bg-[#e5e2de]" />
    </article>
  )
}

export default function ProjectCard(props: { project: Project }) {
  const { project } = props

  // Auto generate tags from the list of technologies used for the project
  const tags = project.techStack?.reduce((tags, current) => tags + ` #${current.technology!}`, '')

  return (
    <article>
      {project.projectImage && typeof project.projectImage !== 'string' && (
        <Image
          src={project.projectImage.url as string}
          alt={project.projectImage.alt}
          width={project.projectImage.width as number}
          height={project.projectImage.height as number}
          className="mb-2 h-[300px] w-full object-cover grayscale-[15%] max-[600px]:h-[220px]"
        />
      )}
      <p className="mb-1 font-sans text-[10px] uppercase tracking-[.12em] text-[#77736f]">
        {new Date(project.createdAt).getFullYear()} / {project.status}
      </p>
      <h2 className="mb-2 font-serif text-[16px] font-normal text-[#252422]">{project.title}</h2>
      <p className="min-h-[47px] font-serif text-[12px] leading-[1.45] text-[#77736f]">
        {project.summary}
      </p>
      <p className="mt-3 font-mono text-[10px] text-[#59605a] tracking-wide">{tags}</p>
      <a
        href="#"
        className="mt-5 inline-flex items-center gap-2 font-serif text-[12px] text-near-dark/65"
      >
        <span className="underline underline-offset-2"> Read Case Study</span>{' '}
        <span className="text-[11px] no-underline">→</span>
      </a>
    </article>
  )
}
