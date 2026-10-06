export type ListingType = 'rent' | 'buy'

export type Listing = {
  slug: string
  title: string
  type: ListingType
  category: 'Apartment' | 'Villa' | 'Studio' | 'Duplex'
  price: number
  neighborhood: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  description: string
  features: string[]
  featured?: boolean
}

export const neighborhoods = [
  'Front de Mer',
  'Canastel',
  'Bir El Djir',
  'Akid Lotfi',
  'Es Senia',
  'Centre-Ville',
]

export const listings: Listing[] = [
  {
    slug: 'sea-view-f4-front-de-mer',
    title: 'Sea-view F4 apartment',
    type: 'buy',
    category: 'Apartment',
    price: 32_500_000,
    neighborhood: 'Front de Mer',
    bedrooms: 3,
    bathrooms: 2,
    area: 135,
    image: '/MyHomeAgency/images/property-1.png',
    description:
      'A bright, spacious F4 on the 6th floor with a wide balcony overlooking the Mediterranean. Recently renovated, with a modern kitchen, double glazing and an elevator in the building. Walking distance to the seafront boulevard, cafés and shops.',
    features: ['Sea view', 'Balcony', 'Elevator', 'Double glazing', 'Parking spot'],
    featured: true,
  },
  {
    slug: 'villa-with-pool-bir-el-djir',
    title: 'Modern villa with pool',
    type: 'buy',
    category: 'Villa',
    price: 78_000_000,
    neighborhood: 'Bir El Djir',
    bedrooms: 5,
    bathrooms: 3,
    area: 320,
    image: '/MyHomeAgency/images/property-2.png',
    description:
      'A two-storey family villa on a 450 m² plot in a quiet residential area of Bir El Djir. Private garden with olive trees, swimming pool, garage for two cars and a large terrace for summer evenings.',
    features: ['Swimming pool', 'Garden', 'Garage', 'Terrace', 'Act + livret foncier'],
    featured: true,
  },
  {
    slug: 'furnished-studio-centre-ville',
    title: 'Furnished studio downtown',
    type: 'rent',
    category: 'Studio',
    price: 35_000,
    neighborhood: 'Centre-Ville',
    bedrooms: 1,
    bathrooms: 1,
    area: 38,
    image: '/MyHomeAgency/images/property-3.png',
    description:
      'A cozy, fully furnished studio in the heart of Oran, steps from the tramway and Place du 1er Novembre. Ideal for students or young professionals. Water and internet included.',
    features: ['Furnished', 'Near tramway', 'Internet included', 'Water heater'],
    featured: true,
  },
  {
    slug: 'colonial-f3-akid-lotfi',
    title: 'Renovated colonial F3',
    type: 'rent',
    category: 'Apartment',
    price: 65_000,
    neighborhood: 'Akid Lotfi',
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    image: '/MyHomeAgency/images/property-4.png',
    description:
      'Charming F3 in a renovated French-era building with high ceilings, tall windows and wrought-iron balconies. Fully renovated kitchen and bathroom. Close to schools, markets and the university.',
    features: ['High ceilings', 'Balcony', 'Renovated', 'Near schools'],
  },
  {
    slug: 'new-f3-es-senia',
    title: 'New F3 in residence',
    type: 'buy',
    category: 'Apartment',
    price: 18_500_000,
    neighborhood: 'Es Senia',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    image: '/MyHomeAgency/images/property-5.png',
    description:
      'Brand-new F3 in a secured residence with a guard, underground parking and green spaces. Open kitchen, bright living room and good finishing throughout. Close to the airport and highway.',
    features: ['Secured residence', 'Underground parking', 'New build', 'Elevator'],
  },
  {
    slug: 'seaside-duplex-canastel',
    title: 'Seaside duplex with terrace',
    type: 'rent',
    category: 'Duplex',
    price: 150_000,
    neighborhood: 'Canastel',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    image: '/MyHomeAgency/images/property-6.png',
    description:
      'An elegant duplex in Canastel with a large private terrace overlooking the coast. Furnished, air-conditioned, and perfect for families or expatriates looking for calm near the sea.',
    features: ['Private terrace', 'Sea view', 'Air conditioning', 'Furnished', 'Parking'],
    featured: true,
  },
]

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug)
}

export function formatPrice(listing: Pick<Listing, 'price' | 'type'>) {
  const amount = new Intl.NumberFormat('fr-DZ').format(listing.price)
  return listing.type === 'rent' ? `${amount} DA / month` : `${amount} DA`
}
