import { fetchPosts, fetchProjects, fetchSettings } from '@/actions'
import { Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default async function HomePage() {
  const siteSettings = await fetchSettings()
  const publishedPosts = await fetchPosts({ page: 1, theme: 'all', limit: 3 })
  const topProjects = await fetchProjects({ page: 1, limit: 3 })

  return (
    <>
      <section className="border-b border-green-900/30 pb-8 pt-8 md:pt-10 mb-4">
        <div className="grid items-end gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="max-w-190 text-[clamp(3.5rem,6vw,8.5rem)] leading-[0.82] tracking-[-0.07em] text-near-dark">
              {siteSettings.homePage?.mainTagline}
            </h1>

            <div className="mt-8 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-near-dark/70">
              <span className="h-px w-12 bg-black/40" />
              <span>Currently exploring: {siteSettings.homePage?.currentlyExploring}</span>
            </div>
          </div>

          <div className="max-w-130 justify-self-end">
            <p className="text-[clamp(1.15rem,2vw,2.4rem)] leading-[1.2] tracking-tighter text-near-dark">
              {siteSettings.homePage?.introduction}
            </p>

            <div className="mt-8 flex gap-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-near-dark/75">
              {siteSettings.homePage?.cta?.map((action) => (
                <Link
                  key={action.label!}
                  href={action.uri!}
                  className="border-b border-black/60 pb-1 transition-opacity hover:opacity-70"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Latest Writing Section */}
      <section className="py-8">
        <div className="flex items-center justify-between border-b border-black/15 pb-4">
          <h2 className="font-serif text-2xl tracking-tight text-near-dark">Latest Writing</h2>
          <Link
            href="/posts"
            className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-near-dark/65 transition-opacity hover:opacity-60"
          >
            View all articles <span className="ml-1 md:hover:ml-5 text-lg">→</span>
          </Link>
        </div>

        <div>
          {publishedPosts.map((post: Post) => (
            <Link
              key={post.title}
              href={`posts/${post.slug}`}
              className="grid gap-6 border-b border-black/10 py-7 transition-opacity hover:opacity-65 md:grid-cols-[7.5rem_1fr] md:gap-8"
            >
              <div className="font-mono text-[0.58rem] uppercase leading-normal tracking-[0.08em] text-near-dark/60">
                <div className="mb-2">{new Date(post.published_at as string).toDateString()}</div>
                <div className="text-green-900/70">
                  {post.theme && typeof post.theme !== 'string' && post.theme.name}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg leading-tight tracking-tight text-near-dark md:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-130 text-sm leading-[1.45] text-near-dark/60">
                  {post.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Selected Projects Section */}
      <section className="border-t border-black/15 py-8">
        <div className="flex items-center justify-between border-b border-black/15 pb-4">
          <h2 className="font-serif text-2xl tracking-tight text-near-dark">Selected Projects</h2>
          <Link
            href="/projects"
            className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-near-dark/65 transition-opacity hover:opacity-60"
          >
            All work <span className="ml-1 text-lg">→</span>
          </Link>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-3 md:gap-12">
          {topProjects.map((project) => (
            <Link key={project.title} href={`/projects/${project.slug}`} className="group block">
              <div className="aspect-[1.55] overflow-hidden bg-black/5">
                {project.projectImage && typeof project.projectImage !== 'string' && (
                  <Image
                    src={project.projectImage.url as string}
                    alt={project.title}
                    width={project.projectImage.width as number}
                    height={project.projectImage.height as number}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                )}
              </div>
              <div className="flex items-end justify-between border-b border-black/15 pb-5 pt-4">
                <div>
                  <div className="font-mono text-[0.58rem] uppercase tracking-[0.08em] text-near-dark/60">
                    {new Date(project.createdAt).getFullYear()}
                  </div>
                  <h3 className="mt-1 font-serif text-lg leading-tight tracking-tight text-near-dark">
                    {project.title}
                  </h3>
                </div>
                <span className="text-sm text-near-dark/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
