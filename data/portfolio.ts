export interface PortfolioProject {
    id: string
    title: string
    slug: string
    category: 'bathroom' | 'wet-room' | 'shower-room' | 'kitchen' | 'wc' | 'flooring' | 'carpentry'
    coverImage: string
    featured?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
    {
        id: '1',
        title: 'The Sage & Walnut Shaker',
        slug: 'the-sage-walnut-shaker',
        category: 'kitchen',
        coverImage: '/images/portfolio/sage-walnut/cover.jpg',
        featured: true
    },
    {
        id: '2',
        title: 'Marble & Midnight Suite',
        slug: 'marble-midnight-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/marble-midnight-suite/cover.jpg',
        featured: true
    },
    {
        id: '3',
        title: 'Crimson & Stone WC',
        slug: 'crimson-stone-wc',
        category: 'wc',
        coverImage: '/images/portfolio/crimson-stone-wc/cover.jpg'
    },
    {
        id: '4',
        title: 'Sandstone & Mosaic Shower Room',
        slug: 'sandstone-mosaic-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/sandstone-mosaic-shower-room/cover.jpg'
    },
    {
        id: '5',
        title: 'Slate & Chrome Shower Room',
        slug: 'slate-chrome-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/slate-chrome-shower-room/cover.jpg'
    },
    {
        id: '6',
        title: 'The Anthracite & Marble Suite',
        slug: 'the-anthracite-marble-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/the-anthracite-marble-suite/cover.jpg',
        featured: true
    },
    {
        id: '7',
        title: 'Porcelain & Timber Suite',
        slug: 'porcelain-timber-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/porcelain-timber-suite/cover.jpg'
    },
    {
        id: '8',
        title: 'Herringbone & Mosaic Suite',
        slug: 'herringbone-mosaic-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/herringbone-mosaic-suite/cover.jpg'
    },
    {
        id: '9',
        title: 'Classic White & Timber Suite',
        slug: 'classic-white-timber-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/classic-white-timber-suite/cover.jpg'
    },
    {
        id: '10',
        title: 'Contemporary Stone Wet Room',
        slug: 'contemporary-stone-wet-room',
        category: 'wet-room',
        coverImage: '/images/portfolio/contemporary-stone-wet-room/cover.jpg'
    },
    {
        id: '11',
        title: 'Marble & Chevron Kitchen',
        slug: 'marble-chevron-kitchen',
        category: 'kitchen',
        coverImage: '/images/portfolio/marble-chevron-kitchen/cover.jpg'
    },
    {
        id: '12',
        title: 'Patterned Floor & Stone Suite',
        slug: 'patterned-floor-stone-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/patterned-floor-stone-suite/cover.jpg'
    },
    {
        id: '13',
        title: 'Neutral Stone & Gloss Suite',
        slug: 'neutral-stone-gloss-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/neutral-stone-gloss-suite/cover.jpg'
    },
    {
        id: '14',
        title: 'Compact Bright Shower Room',
        slug: 'compact-bright-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/compact-bright-shower-room/cover1.jpg'
    },
    {
        id: '15',
        title: 'Grey Mosaic Wet Room',
        slug: 'grey-mosaic-wet-room',
        category: 'wet-room',
        coverImage: '/images/portfolio/grey-mosaic-wet-room/cover.jpg'
    },
    {
        id: '16',
        title: 'Stone & Graphite Suite',
        slug: 'stone-graphite-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/stone-graphite-suite/cover.jpg'
    },
    {
        id: '17',
        title: 'Vibrant Metro WC',
        slug: 'vibrant-metro-wc',
        category: 'wc',
        coverImage: '/images/portfolio/vibrant-metro-wc/cover.jpg',
        featured: true
    },
    {
        id: '18',
        title: 'Marble & Geometric Suite',
        slug: 'marble-geometric-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/marble-geometric-suite/cover.jpg'
    },
    {
        id: '19',
        title: 'Linear Stone Wet Room',
        slug: 'linear-stone-wet-room',
        category: 'wet-room',
        coverImage: '/images/portfolio/linear-stone-wet-room/cover.jpg'
    },
    {
        id: '20',
        title: 'White Gloss & Graphite Kitchen',
        slug: 'white-gloss-graphite-kitchen',
        category: 'kitchen',
        coverImage: '/images/portfolio/white-gloss-graphite-kitchen/cover.jpg'
    },
    {
        id: '21',
        title: 'Warm Stone Walk-In Suite',
        slug: 'warm-stone-walk-in-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/warm-stone-walk-in-suite/cover.jpg'
    },
    {
        id: '22',
        title: 'Midnight Blue Onyx Suite',
        slug: 'midnight-blue-onyx-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/midnight-blue-onyx-suite/cover.jpg',
        featured: true
    },
    {
        id: '23',
        title: 'Marble & Gold Suite',
        slug: 'marble-gold-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/marble-gold-suite/cover.jpg',
        featured: true
    },
    {
        id: '24',
        title: 'Textured Grey & Brass Suite',
        slug: 'textured-grey-brass-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/textured-grey-brass-suite/cover.jpg',
        featured: true
    },
    {
        id: '25',
        title: 'Geometric Sage Suite',
        slug: 'geometric-sage-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/geometric-sage-suite/cover.jpg',
        featured: true
    },
    {
        id: '26',
        title: 'Monochrome Marble Ensuite',
        slug: 'monochrome-marble-ensuite',
        category: 'bathroom',
        coverImage: '/images/portfolio/monochrome-marble-ensuite/cover.jpg',
        featured: true
    },
    {
        id: '27',
        title: 'High-Contrast Feature Ensuite',
        slug: 'high-contrast-feature-ensuite',
        category: 'bathroom',
        coverImage: '/images/portfolio/high-contrast-feature-ensuite/cover.jpg',
        featured: true
    },
    {
        id: '28',
        title: 'Slate Blue & White Suite',
        slug: 'slate-blue-white-suite',
        category: 'shower-room',
        coverImage: '/images/portfolio/slate-blue-white-suite/cover.jpg',
        featured: true
    },
    {
        id: '29',
        title: 'Vibrant Magenta Cloakroom',
        slug: 'vibrant-magenta-cloakroom',
        category: 'wc',
        coverImage: '/images/portfolio/vibrant-magenta-cloakroom/cover.jpg',
        featured: true
    },
    {
        id: '30',
        title: 'Neutral Walk-In Shower Room',
        slug: 'neutral-walk-in-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/neutral-walk-in-shower-room/cover.jpg',
        featured: true
    },
    {
        id: '31',
        title: 'Botanical Feature Bathroom',
        slug: 'botanical-feature-bathroom',
        category: 'bathroom',
        coverImage: '/images/portfolio/botanical-feature-bathroom/cover.jpg',
        featured: true
    },
    {
        id: '32',
        title: 'Tropical Feature & Fitted Suite',
        slug: 'tropical-feature-fitted-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/tropical-feature-fitted-suite/cover.jpg',
        featured: true
    },
    {
        id: '33',
        title: 'Clean White Loft Shower Room',
        slug: 'clean-white-loft-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/clean-white-loft-shower-room/cover.jpg',
        featured: true
    },
    {
        id: '34',
        title: 'Compact Angular Cloakroom',
        slug: 'compact-angular-cloakroom',
        category: 'wc',
        coverImage: '/images/portfolio/compact-angular-cloakroom/cover.jpg',
        featured: true
    },
    {
        id: '35',
        title: 'Warm Stone & Fitted Shower Room',
        slug: 'warm-stone-fitted-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/warm-stone-fitted-shower-room/cover.jpg',
        featured: true
    },
    {
        id: '36',
        title: 'Marble & Mosaic Shower Room',
        slug: 'marble-mosaic-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/marble-mosaic-shower-room/cover.jpg',
        featured: true
    },
    {
        id: '37',
        title: 'Retro Industrial Shower Room',
        slug: 'retro-industrial-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/retro-industrial-shower-room/cover.jpg',
        featured: true
    },
    {
        id: '38',
        title: 'Grey Oak Laminate Installation',
        slug: 'grey-oak-laminate-installation',
        category: 'flooring',
        coverImage: '/images/portfolio/grey-oak-laminate-installation/cover.jpg',
        featured: true
    },
    {
        id: '39',
        title: 'Grey Oak Bedroom Flooring',
        slug: 'grey-oak-bedroom-flooring',
        category: 'flooring',
        coverImage: '/images/portfolio/grey-oak-bedroom-flooring/cover.jpg',
        featured: true
    },
    {
        id: '40',
        title: 'Oak & White Staircase Renovation',
        slug: 'oak-white-staircase-renovation',
        category: 'carpentry',
        coverImage: '/images/portfolio/oak-white-staircase-renovation/cover.jpg',
        featured: true
    },
    {
        id: '41',
        title: 'Engineered Oak Landing, Bedroom & Staircase',
        slug: 'engineered-oak-bedroom-landing',
        category: 'flooring',
        coverImage: '/images/portfolio/engineered-oak-bedroom-landing/cover.jpg',
        featured: true
    },
    {
        id: '42',
        title: 'Acoustic Slat Feature Wall',
        slug: 'acoustic-slat-feature-wall',
        category: 'carpentry',
        coverImage: '/images/portfolio/acoustic-slat-feature-wall/cover.jpg',
        featured: true
    },
    {
        id: '43',
        title: 'Warm Oak Laminate Bedroom',
        slug: 'warm-oak-laminate-bedroom',
        category: 'flooring',
        coverImage: '/images/portfolio/warm-oak-laminate-bedroom/cover.jpg'
    },
    {
        id: '44',
        title: 'Polished Stone Family Bathroom',
        slug: 'polished-stone-family-bathroom',
        category: 'bathroom',
        coverImage: '/images/portfolio/polished-stone-family-bathroom/cover.jpg'
    }
]

export const categories = [
    { id: 'all', label: 'All Projects', count: 44 },
    { id: 'bathroom', label: 'Bathrooms', count: 20 },
    { id: 'wet-room', label: 'Wet Rooms', count: 3 },
    { id: 'shower-room', label: 'Shower Rooms', count: 9 },
    { id: 'kitchen', label: 'Kitchens', count: 3 },
    { id: 'wc', label: 'WC/Cloakrooms', count: 4 },
    { id: 'flooring', label: 'Flooring', count: 4 },
    { id: 'carpentry', label: 'Carpentry', count: 2 }
]
