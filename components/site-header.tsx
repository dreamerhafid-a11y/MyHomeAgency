import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

const nav = [
  { href: '/listings?type=buy', label: 'Buy' },
  { href: '/listings?type=rent', label: 'Rent' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="My Home Agency home">
          <span className="relative h-11 w-14 overflow-hidden">
            <Image
              src="/MyHomeAgency/images/logo.webp"
              alt=""
              width={122}
              height={122}
              className="absolute -left-[31px] -top-[26px] size-[122px] max-w-none mix-blend-multiply"
              priority
            />
          </span>
          <span className="font-heading text-lg font-semibold uppercase tracking-wide text-primary">
            My Home <span className="text-brand">Agency</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
      <nav aria-label="Mobile" className="flex justify-center gap-6 border-t py-2 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-foreground/80 hover:text-brand"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
