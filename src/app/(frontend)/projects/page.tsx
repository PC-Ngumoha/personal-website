export default async function ProjectsPage() {
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
          <h1
            className="m-0 max-w-[510px] font-serif text-[60px] lg:text-[65px] font-normal leading-[.94] tracking-[-.035em] 
          max-[600px]:text-[clamp(36px,11vw,45px)]"
          >
            Building digital
            <br />
            artifacts with
            <br />
            precision &amp; purpose.
          </h1>
          <p className="mt-5 font-serif text-[15px] leading-[1.55] text-[#6d6b68] max-[600px]:text-[12px]">
            A collection of software experiments, digital products, and technical research
            <br className="max-[600px]:hidden" /> conducted at the intersection of design systems
            and functional engineering.
          </p>
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
          {[
            {
              image:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
              date: '2023 / Completed',
              title: 'Kinetic UI Framework',
              description:
                'A performance-first motion library for React that prioritizes declarative animations and ergonomic developer experience. Built with low-level browser APIs for zero-jank transitions.',
              tags: 'React   TypeScript   WASM',
            },
            {
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
              date: '2024 / Beta',
              title: 'Lumina Digital Ledger',
              description:
                'A minimalist financial tracking application designed for personal transparency. Features automated bank syncing and deep cryptographic auditing for every transaction entry.',
              tags: 'Next.js   PostgreSQL   Cryptography',
            },
            {
              image:
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
              date: '2024 / In progress',
              title: 'Stoa Publishing Platform',
              description:
                'An editorial-first CMS built specifically for independent journals and long-form writing. Focuses on typographic precision and distraction-free authoring environments.',
              tags: 'Rust   GraphQL   Editorial',
            },
            {
              image:
                'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
              date: '2022 / Completed',
              title: 'Aether OS Environment',
              description:
                'A conceptual operating system interface exploring spatial computing paradigms. Focuses on minimizing cognitive load through progressive disclosure and organic motion.',
              tags: 'WebGL   Systems   Research',
            },
          ].map((project) => (
            <article key={project.title}>
              <img
                src={project.image}
                alt=""
                className="mb-2 h-[300px] w-full object-cover grayscale-[15%] max-[600px]:h-[220px]"
              />
              <p className="mb-1 font-sans text-[10px] uppercase tracking-[.12em] text-[#77736f]">
                {project.date}
              </p>
              <h2 className="mb-2 font-serif text-[16px] font-normal text-[#252422]">
                {project.title}
              </h2>
              <p className="min-h-[47px] font-serif text-[12px] leading-[1.45] text-[#77736f]">
                {project.description}
              </p>
              <p className="mt-3 font-mono text-[9px] text-[#59605a]">{project.tags}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 font-serif text-[12px] text-near-dark/65"
              >
                <span className="underline underline-offset-2"> Read Case Study</span>{' '}
                <span className="text-[11px] no-underline">→</span>
              </a>
            </article>
          ))}
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
