import { fetchProjects, fetchSettings } from '@/actions'
import ProjectGroup from '@/components/projects/ProjectGroup'

export default async function ProjectsPage() {
  const projects = await fetchProjects({ page: 1 })
  const siteSettings = await fetchSettings()
  // console.log(projects)

  return (
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
  )
}
