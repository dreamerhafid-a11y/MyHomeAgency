import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ListingCard } from '@/components/listing-card'
import { ListingFilters } from '@/components/listing-filters'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { listings } from '@/lib/listings'

export default function HomePage() {
  const featured = listings.filter((l) => l.featured)

  return (
    <>
      <section className="relative isolate">
        <Image
          src="/images/hero-oran.png"
          alt="Oran seafront at golden hour"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/60" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:pb-24 md:pt-32">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-accent">
            Real estate in Oran, Algeria
          </p>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
            Find your home in El Bahia
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-primary-foreground/85 md:text-lg">
            Apartments, villas and studios to rent or buy across Oran — from the seafront to Bir El Djir.
          </p>
          <ListingFilters className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-brand">Featured</p>
            <h2 className="mt-1 text-3xl font-semibold text-primary md:text-4xl">Latest properties</h2>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
          >
            View all listings
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>

      <AboutSection />
      <ContactSection />
    </>
  )
}
