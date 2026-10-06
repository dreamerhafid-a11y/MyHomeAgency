import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Bath, BedDouble, Check, Home, MapPin, MessageCircle, Phone, Ruler } from 'lucide-react'
import { ListingCard } from '@/components/listing-card'
import { formatPrice, getListing, listings } from '@/lib/listings'
import { site, whatsappLink } from '@/lib/site'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const listing = getListing(slug)
  if (!listing) return {}
  return {
    title: `${listing.title} – ${listing.neighborhood}`,
    description: listing.description,
  }
}

export default async function ListingPage({ params }: { params: Params }) {
  const { slug } = await params
  const listing = getListing(slug)
  if (!listing) notFound()

  const isRent = listing.type === 'rent'
  const message = `Hello My Home Agency, I'm interested in ${isRent ? 'renting' : 'buying'} "${listing.title}" in ${listing.neighborhood} (${formatPrice(listing)}). Can we schedule a visit?`
  const similar = listings.filter((l) => l.slug !== listing.slug && l.type === listing.type).slice(0, 3)

  const stats = [
    { icon: Home, label: 'Type', value: listing.category },
    { icon: BedDouble, label: 'Bedrooms', value: listing.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: listing.bathrooms },
    { icon: Ruler, label: 'Area', value: `${listing.area} m²` },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <Link
        href={`/listings?type=${listing.type}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-brand"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to {isRent ? 'rentals' : 'properties for sale'}
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            <span
              className={`absolute left-4 top-4 rounded px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                isRent ? 'bg-brand text-brand-foreground' : 'bg-primary text-primary-foreground'
              }`}
            >
              {isRent ? 'For rent' : 'For sale'}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold text-primary md:text-4xl">{listing.title}</h1>
          <p className="mt-2 flex items-center gap-1 text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {listing.neighborhood}, Oran
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg border bg-card p-4">
                <Icon className="size-5 text-brand" aria-hidden="true" />
                <dt className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
                <dd className="font-semibold text-primary">{value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-8 text-xl font-semibold text-primary">Description</h2>
          <p className="mt-2 leading-relaxed text-foreground/85">{listing.description}</p>

          <h2 className="mt-8 text-xl font-semibold text-primary">Features</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {listing.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-foreground/85">
                <Check className="size-4 text-brand" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {isRent ? 'Monthly rent' : 'Asking price'}
            </p>
            <p className="font-heading text-3xl text-brand">{formatPrice(listing)}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {isRent
                ? 'Interested in renting? Contact us to book a visit and discuss the lease.'
                : 'Interested in buying? Contact us to book a visit and see the papers.'}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {isRent ? 'Rent this property' : 'Buy this property'}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-secondary"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{site.hours}</p>
          </div>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-primary">Similar properties</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((l) => (
              <ListingCard key={l.slug} listing={l} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
