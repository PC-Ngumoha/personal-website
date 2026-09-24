import { fetchProjects, fetchSettings } from '@/actions'
import ProjectGroup from '@/components/projects/ProjectGroup'
import Link from 'next/link'

export default async function ProjectsPage() {
  const projects = await fetchProjects({ page: 1 })
  const siteSettings = await fetchSettings()
  // console.log(projects)

  return (
    <>
      {projects.length > 0 ? (
        <>
          <header
            className="box-border flex min-h-[307px] items-center text-near-dark
      max-[600px]:min-h-[330px] pl-10 py-10"
          >
            <div className="mt-5 w-[calc(100%-48px)] max-w-[705px] py-[3px] pb-[7px] max-[600px]:w-[calc(100%-40px)]">
              <p
                className="mb-[18px] font-sans text-[8px] lg:text-[10px] font-bold leading-none tracking-[.32em] text-[#59605a]
          uppercase"
              >
                selected works
              </p>
              <div className="max-w-[510px]">
                <h1
                  className="m-0 font-serif text-[60px] lg:text-[65px] font-normal leading-[.94] tracking-[-.035em] 
          max-[600px]:text-[clamp(36px,11vw,45px)]"
                >
                  {siteSettings.projectPage?.title}
                </h1>
                <p className="mt-5 font-serif text-[15px] leading-[1.55] text-[#6d6b68] max-[600px]:text-[12px]">
                  {siteSettings.projectPage?.subtitle}
                </p>
              </div>
            </div>
          </header>
          <ProjectGroup initialProjects={projects} />
        </>
      ) : (
        <section className="flex min-h-[60vh] items-center justify-center px-6 py-16 text-center sm:px-12">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500">
              No projects yet
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-near-dark md:text-5xl">
              No projects have been made available by the author.
            </h1>
            <p className="mt-5 font-serif text-[17px] leading-[1.42] text-gray-500 sm:text-[18px]">
              Please check back later, or return to the home page to explore more.
            </p>
            <Link
              href="/"
              replace
              className="mt-8 inline-block border-b border-near-dark pb-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-near-dark transition-opacity hover:opacity-60"
            >
              Return home
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
