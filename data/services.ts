export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'fa-bath',
    title: 'Full Bathroom Renovations',
    description: 'Complete bathroom transformations including tiles, plumbing, electric work, and plastering. We handle every aspect of your bathroom project.',
  },
  {
    icon: 'fa-kitchen-set',
    title: 'Full Kitchen Renovations',
    description: 'Comprehensive kitchen remodeling services from design to completion. Expert installation of cabinets, countertops, and all fixtures.',
  },
  {
    icon: 'fa-droplet',
    title: 'Plumbing Services',
    description: 'Professional plumbing installation and repairs. From pipes to fixtures, we ensure everything works perfectly.',
  },
  {
    icon: 'fa-bolt',
    title: 'Electrical Work',
    description: 'Certified electrical services for your renovation. Safe and compliant installations for lighting, outlets, and more.',
  },
  {
    icon: 'fa-paint-roller',
    title: 'Painting & Decorating',
    description: 'High-quality painting services to give your space the perfect finish. Professional preparation and attention to detail.',
  },
  {
    icon: 'fa-hammer',
    title: 'Carpentry & Joinery',
    description: 'Expert carpentry including custom doors, cabinets, and woodwork. Precision craftsmanship for lasting results.',
  },
]
