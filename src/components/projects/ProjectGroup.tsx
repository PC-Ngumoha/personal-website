'use client'

import { Project } from '@/payload-types'
import { useState, useTransition } from 'react'
import Image from 'next/image'
import ProjectCard, { ProjectCardSkeleton } from './ProjectCard'
import { fetchProjects } from '@/actions'

export default function ProjectGroup(props: { initialProjects: Project[] }) {
  const { initialProjects } = props
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isPending, startTransition] = useTransition()

  const handleFetchMoreProjects = () => {
    startTransition(async () => {
      const newProjects = await fetchProjects({ page: page + 1 })

      if (newProjects.length === 0) {
        setHasMore(false)
        return
      }

      setProjects((oldProjects) => [...oldProjects, ...newProjects])
      setPage((page) => page + 1)
    })
  }

  return (
    <section className="mx-auto w-[90%] px-10 pb-24 pt-12 max-[600px]:px-5 max-[600px]:pt-8">
      <div
        className="mb-7 flex items-center justify-between border-b border-[#e6e4e0] pb-3 text-[10px] 
        uppercase tracking-[.18em] text-[#6d6b68]"
      >
        <nav className="flex gap-6">
          <button className="border-b border-[#59605a] pb-3 font-bold text-[#252422]">
            All projects
          </button>
          {['learning', 'portfolio'].map((type) => (
            <button key={type} className="capitalize">
              {type}
            </button>
          ))}
        </nav>
        <span>Showing {projects.length} items</span>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-11 max-[600px]:grid-cols-1">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        {isPending && Array.from({ length: 2 }).map((_, idx) => <ProjectCardSkeleton key={idx} />)}
      </div>
      {hasMore && (
        <button
          className="mx-auto my-10 border border-near-dark block py-5 px-8 text-near-dark
        hover:border-gray-300 duration-200 ease-in"
          onClick={handleFetchMoreProjects}
        >
          {isPending ? 'Loading ...' : 'Load more projects'}
        </button>
      )}
    </section>
  )
}
