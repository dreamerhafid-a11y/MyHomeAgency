import Link from 'next/link'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl uppercase tracking-wide">
            My Home <span className="text-accent">Agency</span>
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Your trusted real estate partner in Oran. Apartments, villas and studios to rent or buy.
          </p>
        </div>
        <div>
          <p className="font-heading text-sm uppercase tracking-wider text-accent">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link href="/listings?type=buy" className="hover:text-primary-foreground">Properties for sale</Link></li>
            <li><Link href="/listings?type=rent" className="hover:text-primary-foreground">Properties for rent</Link></li>
            <li><Link href="/listings" className="hover:text-primary-foreground">All listings</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm uppercase tracking-wider text-accent">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>{site.address}</li>
            <li><a href={site.phoneHref} className="hover:text-primary-foreground">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-primary-foreground">{site.email}</a></li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        {`© ${new Date().getFullYear()} My Home Agency, Oran. All rights reserved.`}
      </div>
    </footer>
  )
}
