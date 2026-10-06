import { Search } from 'lucide-react'
import { neighborhoods } from '@/lib/listings'

type Props = {
  type?: string
  area?: string
  beds?: string
  className?: string
}

const selectClass =
  'h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function ListingFilters({ type = '', area = '', beds = '', className = '' }: Props) {
  return (
    <form
      action="/listings"
      method="get"
      className={`grid gap-3 rounded-lg bg-card p-4 shadow-lg sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      <div>
        <label htmlFor="type" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          I want to
        </label>
        <select id="type" name="type" defaultValue={type} className={selectClass}>
          <option value="">Rent or buy</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </div>
      <div>
        <label htmlFor="area" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Neighborhood
        </label>
        <select id="area" name="area" defaultValue={area} className={selectClass}>
          <option value="">All of Oran</option>
          {neighborhoods.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="beds" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Bedrooms
        </label>
        <select id="beds" name="beds" defaultValue={beds} className={selectClass}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-brand px-4 text-sm font-semibold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Search className="size-4" aria-hidden="true" />
          Search
        </button>
      </div>
    </form>
  )
}
