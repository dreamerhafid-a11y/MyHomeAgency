import Image from 'next/image'
import Link from 'next/link'
import { Bath, BedDouble, MapPin, Ruler } from 'lucide-react'
import { formatPrice, type Listing } from '@/lib/listings'

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/listings/${listing.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide ${
              listing.type === 'rent'
                ? 'bg-brand text-brand-foreground'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            {listing.type === 'rent' ? 'For rent' : 'For sale'}
          </span>
        </div>
        <div className="p-4">
          <p className="font-heading text-xl text-brand">{formatPrice(listing)}</p>
          <h3 className="mt-1 text-base font-medium normal-case tracking-normal font-sans text-foreground">
            {listing.title}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            {listing.neighborhood}, Oran
          </p>
          <dl className="mt-4 flex items-center gap-4 border-t pt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <BedDouble className="size-4" aria-hidden="true" />
              <dt className="sr-only">Bedrooms</dt>
              <dd>{listing.bedrooms}</dd>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="size-4" aria-hidden="true" />
              <dt className="sr-only">Bathrooms</dt>
              <dd>{listing.bathrooms}</dd>
            </div>
            <div className="flex items-center gap-1">
              <Ruler className="size-4" aria-hidden="true" />
              <dt className="sr-only">Area</dt>
              <dd>{`${listing.area} m²`}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </article>
  )
}
