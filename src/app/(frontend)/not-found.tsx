import Link from 'next/link'

export const metadata = {
  title: '404: Page Not Found',
}

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[70vh] items-center overflow-hidden px-6 py-24 sm:px-10">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <section>
          <p className="mb-5 font-mono text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Error 404
          </p>
          <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            This page took a wrong turn.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            The link you followed may be broken, or the page may have moved. Let&apos;s get you
            somewhere useful.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Back to home
            </Link>
            <Link
              href="/posts"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Explore posts
            </Link>
          </div>
        </section>

        <div aria-hidden="true" className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72">
          <div className="absolute inset-0 rotate-6 rounded-[2.5rem] border border-border bg-muted/40" />
          <div className="absolute inset-5 -rotate-6 rounded-[2rem] border border-primary/30 bg-background shadow-2xl shadow-primary/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-7xl font-bold tracking-tighter text-primary sm:text-8xl">
              404
            </span>
            <span className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              lost signal
            </span>
          </div>
          <span className="absolute -right-2 top-8 h-3 w-3 rounded-full bg-primary" />
          <span className="absolute bottom-10 -left-3 h-5 w-5 rounded-full border-2 border-primary/50" />
        </div>
      </div>
    </main>
  )
}
