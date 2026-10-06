import { FileCheck, Handshake, KeyRound, MapPinned } from 'lucide-react'

const points = [
  {
    icon: MapPinned,
    title: 'Local experts',
    text: 'We know every neighborhood of Oran, from Akid Lotfi to Canastel.',
  },
  {
    icon: FileCheck,
    title: 'Verified papers',
    text: 'Every property for sale is checked for its act and livret foncier.',
  },
  {
    icon: KeyRound,
    title: 'Rent or buy',
    text: 'Short or long-term rentals and sales — one agency for everything.',
  },
  {
    icon: Handshake,
    title: 'Honest advice',
    text: 'Clear prices, no surprises, and help until you get your keys.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-brand">Why My Home</p>
          <h2 className="mt-1 text-3xl font-semibold text-primary md:text-4xl">
            A real estate agency that feels like home
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border bg-card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-medium text-primary">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
