export const projects = [
    {
        id: 1,
        slug: 'velour-fashion-house',
        title: 'Velour Fashion House',
        category: 'Branding',
        tags: ['Identity', 'Art Direction', 'Packaging', 'Typography'],
        year: '2024',
        client: 'Velour Ltd.',
        duration: '3 months',
        role: 'Brand Strategy · Visual Identity · Art Direction',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80',
        featured: true,
        desc: 'Full brand identity system for a luxury fashion label — from logomark to packaging.',
        overview:
            'Velour came to us as an ambitious fashion startup with a clear vision: position themselves as the go-to luxury label for the modern minimalist. We built an identity from the ground up — brand strategy, logomark, type system, color palette, packaging, and art direction guidelines.',
        challenge:
            'The fashion space is saturated with brands chasing the same austere aesthetic. The challenge was carving out a position that felt genuinely luxurious without defaulting to the expected tropes of high fashion.',
        solution:
            'We developed a visual language rooted in tension — raw textures against refined type, muted earth tones punctuated by a single high-contrast ink black. The logomark is a custom ligature that doubles as a monogram, giving the brand a singular ownable mark.',
        results: [
            { label: 'Brand Recall', value: '89%', sub: 'in target demo surveys' },
            { label: 'Press Features', value: '12', sub: 'within launch quarter' },
            { label: 'Social Growth', value: '4.2×', sub: 'follower increase post-launch' },
        ],
        gallery: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&auto=format&fit=crop&q=80',
        ],
        testimonial: {
            quote: 'They didn\'t just give us a logo — they gave us a point of view. The brand feels exactly like what we imagined but couldn\'t articulate.',
            author: 'Amara Nwosu',
            role: 'Founder, Velour Fashion House',
        },
        nextProject: 'nexus-saas-platform',
    },
    {
        id: 2,
        slug: 'nexus-saas-platform',
        title: 'Nexus SaaS Platform',
        category: 'Web Dev',
        tags: ['React', 'UI/UX', 'Dashboard', 'Data Viz'],
        year: '2024',
        client: 'Nexus Analytics Inc.',
        duration: '5 months',
        role: 'Product Design · Frontend Development · UX Research',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
        featured: true,
        desc: 'End-to-end design and development of a B2B analytics dashboard.',
        overview:
            'Nexus needed a powerful analytics dashboard that non-technical users could actually love. We handled the full product lifecycle — from user research and wireframes through to pixel-perfect React implementation.',
        challenge:
            'Data-heavy interfaces often sacrifice usability for completeness. The brief demanded both: every metric a power user could want, presented in a way that a first-time user could navigate in under two minutes.',
        solution:
            'We built a modular dashboard architecture where every widget is contextually aware. Progressive disclosure hides complexity until needed, while persistent data storytelling keeps casual users oriented. The result is an interface that scales with expertise.',
        results: [
            { label: 'Onboarding Time', value: '−62%', sub: 'vs previous product' },
            { label: 'User Retention', value: '91%', sub: 'at 90-day mark' },
            { label: 'Support Tickets', value: '−48%', sub: 'post-launch' },
        ],
        gallery: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1526628953301-3cd5dfca9929?w=900&auto=format&fit=crop&q=80',
        ],
        testimonial: {
            quote: 'The dashboard reduced our customer support load by nearly half. Our users finally understand their data.',
            author: 'David Chen',
            role: 'CPO, Nexus Analytics Inc.',
        },
        nextProject: 'grounded-coffee-co',
    },
    {
        id: 3,
        slug: 'grounded-coffee-co',
        title: 'Grounded Coffee Co.',
        category: 'Digital Marketing',
        tags: ['Social', 'Campaigns', 'Meta Ads', 'Google Ads'],
        year: '2023',
        client: 'Grounded Coffee Co.',
        duration: '6 months',
        role: 'Paid Media · Content Strategy · Creative Direction',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=80',
        featured: false,
        desc: '3x ROAS growth campaign across Meta and Google for an artisan coffee brand.',
        overview:
            'Grounded had incredible product and zero digital presence. We built a full-funnel paid media strategy from scratch — audience research, creative development, campaign architecture, and ongoing optimisation.',
        challenge:
            'Artisan coffee is a lifestyle purchase. The challenge was translating the in-store experience — smell, ritual, community — into scroll-stopping digital content that actually converts.',
        solution:
            'We led with emotion, not product. Our creative strategy centred on the "morning ritual" — intimate, warm, aspirational content that made audiences feel something before they even knew what they were buying.',
        results: [
            { label: 'ROAS', value: '3.1×', sub: 'avg across all channels' },
            { label: 'Revenue', value: '+210%', sub: 'YoY online sales' },
            { label: 'CPA', value: '−44%', sub: 'vs industry benchmark' },
        ],
        gallery: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900&auto=format&fit=crop&q=80',
        ],
        testimonial: {
            quote: 'We went from zero to a six-figure digital revenue stream in under six months. The results speak for themselves.',
            author: 'Kemi Adeyemi',
            role: 'CEO, Grounded Coffee Co.',
        },
        nextProject: 'apex-fitness-app',
    },
    {
        id: 4,
        slug: 'apex-fitness-app',
        title: 'Apex Fitness App',
        category: 'Web Dev',
        tags: ['Next.js', 'Mobile-first', 'PWA', 'API'],
        year: '2024',
        client: 'Apex Health Technologies',
        duration: '4 months',
        role: 'Full-stack Development · UX Design · API Integration',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80',
        featured: false,
        desc: 'Workout tracking web app with real-time sync and personalized plans.',
        overview:
            'Apex wanted a web-based fitness companion that could compete with native apps on performance and feel. We built a Progressive Web App using Next.js with real-time data sync, offline support, and AI-powered plan personalisation.',
        challenge:
            'Web apps in the fitness space are often second-class citizens to native. The brief demanded native-level performance, haptic-quality micro-interactions, and an experience that felt personal from day one.',
        solution:
            'We implemented a service-worker-first architecture for offline-first reliability, paired with a WebSocket layer for live session tracking. The onboarding flow uses a short adaptive quiz to generate a personalised plan before the user even signs up.',
        results: [
            { label: 'Lighthouse Score', value: '98', sub: 'performance on mobile' },
            { label: 'DAU/MAU', value: '67%', sub: 'engagement ratio' },
            { label: 'App Store Rating', value: '4.8★', sub: 'across platforms' },
        ],
        gallery: [
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&auto=format&fit=crop&q=80',
        ],
        testimonial: {
            quote: 'Our users forget it\'s a web app. That was the goal and they delivered it completely.',
            author: 'James Okafor',
            role: 'CTO, Apex Health Technologies',
        },
        nextProject: 'horizon-real-estate',
    },
    {
        id: 5,
        slug: 'horizon-real-estate',
        title: 'Horizon Real Estate',
        category: 'Graphic Design',
        tags: ['Print', 'Digital', 'Signage', 'Brand System'],
        year: '2023',
        client: 'Horizon Property Group',
        duration: '2 months',
        role: 'Graphic Design · Print Production · Campaign Creative',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
        featured: false,
        desc: 'Full creative suite including brochures, signage, and digital ads.',
        overview:
            'Horizon needed a complete creative refresh ahead of their biggest development launch. We produced everything from hoarding signage to digital display ads, all unified under a bold new visual language.',
        challenge:
            'Real estate marketing is notoriously conservative. The client wanted to stand out in a crowded market without alienating high-net-worth buyers who expect a certain level of sophistication.',
        solution:
            'We built a visual system around dramatic scale and restraint — oversized type, generous white space, and architectural photography treated with a signature warm tone. Every touchpoint felt like an invitation, not a sales pitch.',
        results: [
            { label: 'Enquiries', value: '+180%', sub: 'vs previous launch' },
            { label: 'Units Sold', value: '94%', sub: 'within launch month' },
            { label: 'Creative Assets', value: '60+', sub: 'delivered across formats' },
        ],
        gallery: [
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=80',
        ],
        testimonial: {
            quote: 'The creative work elevated the entire development. Buyers commented on the materials before they even saw the property.',
            author: 'Sandra Mills',
            role: 'Head of Marketing, Horizon Property Group',
        },
        nextProject: 'lumina-skincare',
    },
    {
        id: 6,
        slug: 'lumina-skincare',
        title: 'Lumina Skincare',
        category: 'Branding',
        tags: ['Packaging', 'Identity', 'Clean Beauty', 'Print'],
        year: '2024',
        client: 'Lumina Labs Ltd.',
        duration: '3 months',
        role: 'Brand Identity · Packaging Design · Creative Strategy',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&auto=format&fit=crop&q=80',
        featured: true,
        desc: 'Minimalist-meets-luxe packaging and identity for a clean beauty startup.',
        overview:
            'Lumina entered a fiercely competitive clean beauty market with formulations they believed in and a brand that needed to match. We created an identity where every element earns its place — nothing decorative, everything purposeful.',
        challenge:
            'Clean beauty is a crowded space with a lot of visual sameness — muted tones, leaf motifs, the same "honest" aesthetic everywhere. Standing out without shouting was the central creative problem.',
        solution:
            'We anchored the brand in a tension between clinical precision and sensory warmth. The packaging uses embossed type on uncoated stock, a restricted palette of off-white and deep terracotta, and a structural bottle form that\'s instantly recognisable on shelf.',
        results: [
            { label: 'Retailer Pickup', value: '14', sub: 'stockists in 60 days' },
            { label: 'DTC Revenue', value: '+340%', sub: 'month 3 vs month 1' },
            { label: 'Press Coverage', value: '8', sub: 'beauty publications' },
        ],
        gallery: [
            'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=900&auto=format&fit=crop&q=80',
        ],
        testimonial: {
            quote: 'People reach for our products in store because of how they look before they even read what\'s inside. That\'s the power of this brand.',
            author: 'Priya Sharma',
            role: 'Co-founder, Lumina Labs',
        },
        nextProject: 'velour-fashion-house',
    },
]

export type Project = typeof projects[0]