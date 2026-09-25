'use client'

import { Project } from '@/payload-types'
import { useState, useTransition } from 'react'
import ProjectCard, { ProjectCardSkeleton } from './ProjectCard'
import { fetchProjects } from '@/actions'
import { ProjectType } from '@/types'
import clsx from 'clsx'

export default function ProjectGroup(props: { initialProjects: Project[] }) {
  const { initialProjects } = props
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isPending, startTransition] = useTransition()
  const [selectedType, setSelectedType] = useState<ProjectType>('all')
  const [isFiltering, setIsFiltering] = useState(false)

  const handleFetchMoreProjects = () => {
    startTransition(async () => {
      const newProjects = await fetchProjects({ page: page + 1, projectType: selectedType })

      if (newProjects.length === 0) {
        setHasMore(false)
        return
      }

      setProjects((oldProjects) => [...oldProjects, ...newProjects])
      setPage((page) => page + 1)
    })
  }

  const handleProjectFiltering = (type: ProjectType) => {
    setIsFiltering(true)
    setHasMore(true)
    startTransition(async () => {
      const projects = await fetchProjects({ page: 1, projectType: type })

      setProjects(projects)
      setPage(1)
      setIsFiltering(false)
    })
  }

  return (
    <section className="mx-auto w-[90%] px-10 pb-24 pt-12 max-[600px]:px-5 max-[600px]:pt-8">
      <div
        className="mb-7 flex items-center justify-between border-b border-[#e6e4e0] pb-3 text-[10px] 
        uppercase tracking-[.18em] text-[#6d6b68]"
      >
        <nav className="flex gap-6">
          <button
            className={clsx(
              selectedType === 'all' && 'border-b border-near-dark pb-3 font-bold text-near-dark',
            )}
            onClick={() => {
              setSelectedType('all')
              handleProjectFiltering('all')
            }}
          >
            All projects
          </button>
          {['learning', 'portfolio'].map((type) => (
            <button
              key={type}
              className={clsx(
                selectedType === type && 'border-b border-near-dark pb-3 font-bold text-near-dark',
                'capitalize',
              )}
              onClick={() => {
                setSelectedType(type as ProjectType)
                handleProjectFiltering(type as ProjectType)
              }}
            >
              {type}
            </button>
          ))}
        </nav>
        <span>
          Showing {projects.length} item{projects.length >= 2 && 's'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-11 max-[600px]:grid-cols-1">
        {!isFiltering ? (
          projects.length > 0 ? (
            <div>
              {projects.map((project: Project) => (
                <ProjectCard key={project.title} project={project} />
              ))}

              {isPending &&
                Array.from({ length: 2 }).map((_, idx) => <ProjectCardSkeleton key={idx} />)}
            </div>
          ) : (
            <div className="col-span-2 text-center font-mono text-sm uppercase tracking-[0.12em] max-[600px]:col-span-1">
              No projects found
            </div>
          )
        ) : (
          <>
            {Array.from({ length: 4 }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))}
          </>
        )}
      </div>

      {hasMore && projects.length > 0 && (
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
