import Link from 'next/link'
import { IoChevronBackOutline } from 'react-icons/io5'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <main className="min-h-screen text-[#292825]" style={{ fontFamily: 'Georgia, serif' }}>
      <article className="mx-auto max-w-[980px] px-5 pb-16 pt-3 sm:px-8">
        <header
          className="mb-5 flex justify-start border-b border-[#dedbd3] pb-3 text-[10px]
        uppercase tracking-[0.22em] text-[#77736b] font-mono"
        >
          <Link href="/posts" className="flex gap-2 items-center">
            <IoChevronBackOutline className="h-3 w-3" /> Back to journal
          </Link>
        </header>
        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
          alt="Open notebook and coffee overlooking misty mountains"
          className="mb-12 h-[220px] w-full object-cover sm:h-[390px]"
        />
        <section className="mx-auto max-w-[670px]">
          <div className="mb-3 flex gap-4 text-[8px] uppercase tracking-[0.16em] text-[#77736b]">
            <span>08 October 2024</span>
            <span>—</span>
            <span className="text-[#788b75]">Ideas &amp; Culture</span>
          </div>
          <h1 className="max-w-[570px] text-4xl leading-[.98] tracking-[-.045em] sm:text-6xl">
            The Architecture of Quiet: Designing for Focus in a Digital Age
          </h1>
          <p className="mt-5 border-b border-[#dedbd3] pb-6 text-[11px] italic leading-5 text-[#77736b]">
            Exploring the intersections of minimalism, spatial design, and digital well-being
            through the lens of architectural restraint.
          </p>
          <div className="mt-8 text-[11px] leading-[1.9] text-[#4e4b45]">
            <p>
              The promise of modern productivity is clear: more often than ever, we are surrounded
              by tools designed to keep us moving. But in the pursuit of constant progress, we have
              forgotten a quieter possibility. What if a space could help us think by asking less of
              us?
            </p>
            <h2 className="mt-8 text-sm font-bold text-[#302e2a]">The Structural Void</h2>
            <p className="mt-4">
              A well-designed room allows light to do the work that technology often promises. It
              gives the mind a horizon, a moment between one thought and the next. These pauses are
              not empty; they are where attention gathers and ideas become whole.
            </p>
            <blockquote className="my-9 border-y border-[#d8d4cc] py-6 text-center text-sm italic leading-6 text-[#36332e]">
              “The space between the notes is just as important as the notes themselves. Without the
              silence, the music is merely noise.”
              <cite className="mt-3 block text-[8px] not-italic uppercase tracking-[.16em] text-[#89857c]">
                — Anonymous, On Composition
              </cite>
            </blockquote>
            <p>
              When we apply these principles to our homes and devices, the result is not a return to
              the past. Quite simply, we make room for deliberate thought. A quiet room can be an
              active participant in our lives, reminding us that the best technology is often the
              technology we choose not to use.
            </p>
            <h2 className="mt-8 text-sm font-bold text-[#302e2a]">Implementing Focused Systems</h2>
            <p className="mt-4">
              There are three pillars to creating a focused digital environment:
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-6">
              <li>Elimination of unnecessary information.</li>
              <li>Single-purpose tools that support the task.</li>
              <li>Predictable, intentional spatial relationships.</li>
            </ol>
            <aside className="my-8 border border-[#d8d4cc] bg-[#f0eee8] p-4 text-[10px] leading-5">
              <strong className="mb-1 block text-[8px] uppercase tracking-[.16em]">
                The quiet test
              </strong>
              The measure of a space is not how much it contains, but how much clarity it makes
              possible. Remove what interrupts; preserve what helps you stay present.
            </aside>
            <p>
              As we move forward into an increasingly fragmented digital landscape, the value of
              these quiet spaces will only grow. It is our responsibility as inhabitants to create
              environments that allow us to concentrate, reflect, and return to the world with
              greater intention.
            </p>
          </div>
        </section>
        <footer className="mt-16 flex justify-between border-t border-[#dedbd3] pt-6 text-[8px] uppercase tracking-[.2em] text-[#77736b]">
          <span>Continue reading</span>
          <span>All articles</span>
        </footer>
      </article>
    </main>
  )
}
