import type { Metadata } from 'next'
import { ListingsContent } from './ListingsContent'

export const metadata: Metadata = {
  title: 'Properties in Oran',
  description: 'Browse apartments, villas and studios for rent or sale in Oran, Algeria.',
}

export default function ListingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <p className="font-heading text-sm uppercase tracking-[0.2em] text-brand">Oran, Algeria</p>
      <ListingsContent />
    </div>
  )
}
