import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-10 rounded-xl bg-primary p-8 text-primary-foreground md:grid-cols-2 md:p-12">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-accent">Contact us</p>
          <h2 className="mt-1 text-3xl font-semibold md:text-4xl">Selling or looking for a place?</h2>
          <p className="mt-3 text-primary-foreground/80">
            Tell us what you need — we&apos;ll find it for you, or help you list your property.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappLink('Hello My Home Agency, I would like some information about your properties.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-brand/90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call us
            </a>
          </div>
        </div>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>{site.address}</span>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <a href={site.phoneHref} className="hover:underline">{site.phone}</a>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>{site.hours}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
