export interface PortfolioProject {
    id: string
    title: string
    slug: string
    category: 'bathroom' | 'wet-room' | 'shower-room' | 'kitchen' | 'wc'
    coverImage: string
    featured?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
    {
        id: '1',
        title: 'The Sage & Walnut Shaker',
        slug: 'the-sage-walnut-shaker',
        category: 'kitchen',
        coverImage: '/images/portfolio/sage-walnut/cover.JPG',
        featured: true
    },
    {
        id: '2',
        title: 'Marble & Midnight Suite',
        slug: 'marble-midnight-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Marble & Midnight Suite/cover.JPG',
        featured: true
    },
    {
        id: '3',
        title: 'Crimson & Stone WC',
        slug: 'crimson-stone-wc',
        category: 'wc',
        coverImage: '/images/portfolio/Crimson & Stone WC/cover.JPG'
    },
    {
        id: '4',
        title: 'Sandstone & Mosaic Shower Room',
        slug: 'sandstone-mosaic-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Sandstone & Mosaic Shower Room/cover.JPG'
    },
    {
        id: '5',
        title: 'Slate & Chrome Shower Room',
        slug: 'slate-chrome-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Slate & Chrome Shower Room/cover.JPG'
    },
    {
        id: '6',
        title: 'The Anthracite & Marble Suite',
        slug: 'the-anthracite-marble-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/The Anthracite & Marble Suite/cover.JPG',
        featured: true
    },
    {
        id: '7',
        title: 'Porcelain & Timber Suite',
        slug: 'porcelain-timber-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Porcelain & Timber Suite/cover.JPG'
    },
    {
        id: '8',
        title: 'Herringbone & Mosaic Suite',
        slug: 'herringbone-mosaic-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Herringbone & Mosaic Suite/cover.JPG'
    },
    {
        id: '9',
        title: 'Classic White & Timber Suite',
        slug: 'classic-white-timber-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Classic White & Timber Suite/cover.JPG'
    },
    {
        id: '10',
        title: 'Contemporary Stone Wet Room',
        slug: 'contemporary-stone-wet-room',
        category: 'wet-room',
        coverImage: '/images/portfolio/Contemporary Stone Wet Room/cover.JPG'
    },
    {
        id: '11',
        title: 'Marble & Chevron Kitchen',
        slug: 'marble-chevron-kitchen',
        category: 'kitchen',
        coverImage: '/images/portfolio/Marble & Chevron Kitchen/cover.JPG'
    },
    {
        id: '12',
        title: 'Patterned Floor & Stone Suite',
        slug: 'patterned-floor-stone-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Patterned Floor & Stone Suite/cover.JPG'
    },
    {
        id: '13',
        title: 'Neutral Stone & Gloss Suite',
        slug: 'neutral-stone-gloss-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Neutral Stone & Gloss Suite/cover.JPG'
    },
    {
        id: '14',
        title: 'Compact Bright Shower Room',
        slug: 'compact-bright-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Compact Bright Shower Room/cover1.JPG'
    },
    {
        id: '15',
        title: 'Grey Mosaic Wet Room',
        slug: 'grey-mosaic-wet-room',
        category: 'wet-room',
        coverImage: '/images/portfolio/Grey Mosaic Wet Room/cover.JPG'
    },
    {
        id: '16',
        title: 'Stone & Graphite Suite',
        slug: 'stone-graphite-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Stone & Graphite Suite/cover.JPG'
    },
    {
        id: '17',
        title: 'Vibrant Metro WC',
        slug: 'vibrant-metro-wc',
        category: 'wc',
        coverImage: '/images/portfolio/Vibrant Metro WC/cover.JPG',
        featured: true
    },
    {
        id: '18',
        title: 'Marble & Geometric Suite',
        slug: 'marble-geometric-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Marble & Geometric Suite/cover.JPG'
    },
    {
        id: '19',
        title: 'Linear Stone Wet Room',
        slug: 'linear-stone-wet-room',
        category: 'wet-room',
        coverImage: '/images/portfolio/Linear Stone Wet Room/cover.JPG'
    },
    {
        id: '20',
        title: 'White Gloss & Graphite Kitchen',
        slug: 'white-gloss-graphite-kitchen',
        category: 'kitchen',
        coverImage: '/images/portfolio/White Gloss & Graphite Kitchen/cover.JPG'
    },
    {
        id: '21',
        title: 'Warm Stone Walk-In Suite',
        slug: 'warm-stone-walk-in-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Warm Stone Walk-In Suite/cover.jpg'
    },
    {
        id: '22',
        title: 'Midnight Blue Onyx Suite',
        slug: 'midnight-blue-onyx-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Midnight Blue Onyx Suite/cover.JPG',
        featured: true
    },
    {
        id: '23',
        title: 'Marble & Gold Suite',
        slug: 'marble-gold-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Marble & Gold Suite/cover.jpg',
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
        coverImage: '/images/portfolio/Geometric Sage Suite/cover.jpg',
        featured: true
    },
    {
        id: '26',
        title: 'Monochrome Marble Ensuite',
        slug: 'monochrome-marble-ensuite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Monochrome Marble Ensuite/cover.jpg',
        featured: true
    },
    {
        id: '27',
        title: 'High-Contrast Feature Ensuite',
        slug: 'high-contrast-feature-ensuite',
        category: 'bathroom',
        coverImage: '/images/portfolio/High-Contrast Feature Ensuite/cover.jpg',
        featured: true
    },
    {
        id: '28',
        title: 'Slate Blue & White Suite',
        slug: 'slate-blue-white-suite',
        category: 'shower-room',
        coverImage: '/images/portfolio/Slate Blue & White Suite/cover.JPG',
        featured: true
    },
    {
        id: '29',
        title: 'Vibrant Magenta Cloakroom',
        slug: 'vibrant-magenta-cloakroom',
        category: 'wc',
        coverImage: '/images/portfolio/Vibrant Magenta Cloakroom/cover.JPG',
        featured: true
    },
    {
        id: '30',
        title: 'Neutral Walk-In Shower Room',
        slug: 'neutral-walk-in-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Neutral Walk-In Shower Room/cover.JPG',
        featured: true
    },
    {
        id: '31',
        title: 'Botanical Feature Bathroom',
        slug: 'botanical-feature-bathroom',
        category: 'bathroom',
        coverImage: '/images/portfolio/Botanical Feature Bathroom/cover.JPG',
        featured: true
    },
    {
        id: '32',
        title: 'Tropical Feature & Fitted Suite',
        slug: 'tropical-feature-fitted-suite',
        category: 'bathroom',
        coverImage: '/images/portfolio/Tropical Feature & Fitted Suite/cover.JPG',
        featured: true
    },
    {
        id: '33',
        title: 'Clean White Loft Shower Room',
        slug: 'clean-white-loft-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Clean White Loft Shower Room/cover.JPG',
        featured: true
    },
    {
        id: '34',
        title: 'Compact Angular Cloakroom',
        slug: 'compact-angular-cloakroom',
        category: 'wc',
        coverImage: '/images/portfolio/Compact Angular Cloakroom/cover.JPG',
        featured: true
    },
    {
        id: '35',
        title: 'Warm Stone & Fitted Shower Room',
        slug: 'warm-stone-fitted-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Warm Stone & Fitted Shower Room/cover.JPG',
        featured: true
    },
    {
        id: '36',
        title: 'Marble & Mosaic Shower Room',
        slug: 'marble-mosaic-shower-room',
        category: 'shower-room',
        coverImage: '/images/portfolio/Marble & Mosaic Shower Room/cover.JPG',
        featured: true
    }
]

export const categories = [
    { id: 'all', label: 'All Projects', count: 36 },
    { id: 'bathroom', label: 'Bathrooms', count: 19 },
    { id: 'wet-room', label: 'Wet Rooms', count: 3 },
    { id: 'shower-room', label: 'Shower Rooms', count: 8 },
    { id: 'kitchen', label: 'Kitchens', count: 3 },
    { id: 'wc', label: 'WC/Cloakrooms', count: 4 }
]
