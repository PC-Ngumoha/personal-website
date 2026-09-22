import { fetchProjects, fetchSettings } from '@/actions'
import { Project } from '@/payload-types'
import Image from 'next/image'

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
      <section className="mx-auto w-[90%] px-10 pb-24 pt-12 max-[600px]:px-5 max-[600px]:pt-8">
        <div
          className="mb-7 flex items-center justify-between border-b border-[#e6e4e0] pb-3 text-[10px] 
        uppercase tracking-[.18em] text-[#6d6b68]"
        >
          <nav className="flex gap-6">
            <button className="border-b border-[#59605a] pb-3 font-bold text-[#252422]">
              All projects
            </button>
            <button>Case studies</button>
            <button>Experiments</button>
          </nav>
          <span>Showing 4 items</span>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-11 max-[600px]:grid-cols-1">
          {projects.map((project: Project) => {
            // Auto generate tags from the list of technologies for the project
            const tags = project.techStack?.reduce(
              (tags, current) => tags + ` #${current.technology!}`,
              '',
            )
            // console.log(tags)

            return (
              <article key={project.title}>
                {project.projectImage && typeof project.projectImage !== 'string' && (
                  <Image
                    src={project.projectImage.url as string}
                    alt={project.projectImage.alt}
                    width={1000}
                    height={1000}
                    className="mb-2 h-[300px] w-full object-cover grayscale-[15%] max-[600px]:h-[220px]"
                  />
                )}
                <p className="mb-1 font-sans text-[10px] uppercase tracking-[.12em] text-[#77736f]">
                  {new Date(project.createdAt).getFullYear()} / {project.status}
                </p>
                <h2 className="mb-2 font-serif text-[16px] font-normal text-[#252422]">
                  {project.title}
                </h2>
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
          })}
        </div>
        <button
          className="mx-auto my-10 border border-near-dark block py-5 px-8 text-near-dark
        hover:border-gray-300 duration-200 ease-in"
        >
          Load more projects
        </button>
      </section>
    </>
  )
}
