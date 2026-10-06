"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ListingCard } from '@/components/listing-card';
import { ListingFilters } from '@/components/listing-filters';
import { listings } from '@/lib/listings';
import { Suspense } from 'react';

function ListingsBody() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const area = searchParams.get('area') || '';
  const beds = searchParams.get('beds') || '';
  const minBeds = Number(beds) || 0;

  const results = listings.filter(
    (l) =>
      (!type || l.type === type) &&
      (!area || l.neighborhood === area) &&
      l.bedrooms >= minBeds,
  );

  const heading =
    type === 'rent' ? 'Properties for rent' : type === 'buy' ? 'Properties for sale' : 'All properties';

  return (
    <>
      <h1 className="mt-1 text-3xl font-semibold text-primary md:text-4xl">{heading}</h1>

      <ListingFilters type={type} area={area} beds={beds} className="mt-6 border shadow-none" />

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {results.length} {results.length === 1 ? 'property' : 'properties'} found
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed p-10 text-center">
          <p className="font-medium text-primary">No properties match your search.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another neighborhood, or{' '}
            <Link href="/#contact" className="font-medium text-brand underline">
              contact us
            </Link>{' '}
            and we&apos;ll find it for you.
          </p>
        </div>
      )}
    </>
  );
}

export function ListingsContent() {
  return (
    <Suspense fallback={<div className="mt-10 text-center">Loading properties...</div>}>
      <ListingsBody />
    </Suspense>
  );
}
