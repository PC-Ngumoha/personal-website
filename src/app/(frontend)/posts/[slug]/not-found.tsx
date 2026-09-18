export default function PostNotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 rotate-[-12deg] bg-border/60" />
      </div>

      <section className="w-full max-w-2xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Error 404
        </p>
        <div className="relative mx-auto mb-8 select-none text-[clamp(8rem,28vw,14rem)] font-bold leading-none tracking-[-0.12em] text-foreground/10">
          404
          <span className="absolute inset-0 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent opacity-90">
            404
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          This post took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
          The page you are looking for does not exist, or it may have moved somewhere new.
        </p>
        <a
          href="/posts"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span aria-hidden="true">←</span>
          Back to posts
        </a>
      </section>
    </main>
  )
}
