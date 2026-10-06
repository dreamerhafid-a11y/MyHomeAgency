export const site = {
  name: 'My Home Agency',
  phone: '+213 555 00 00 00',
  phoneHref: 'tel:+213555000000',
  whatsapp: '213555000000',
  email: 'contact@myhome-oran.dz',
  address: 'Boulevard de la Soummam, Oran, Algeria',
  hours: 'Sat – Thu, 9:00 – 18:00',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
