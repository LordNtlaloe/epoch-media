'use client'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
    {
        id: 1,
        quote: 'They transformed our entire digital presence in ways we didn\'t think were possible. From strategy to execution, every detail was considered. Our brand has never felt more alive.',
        name: 'Amara Nwosu',
        role: 'Founder, Velour Fashion House',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&q=80',
    },
    {
        id: 2,
        quote: 'Working with this team was a masterclass in what a creative agency should be. They listened, they pushed back when needed, and delivered results that exceeded every benchmark.',
        name: 'David Chen',
        role: 'CPO, Nexus Analytics Inc.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80',
    },
    {
        id: 3,
        quote: 'Our ROAS tripled and our brand finally has a story worth telling. The campaigns felt like they were made by people who genuinely cared about our mission.',
        name: 'Kemi Adeyemi',
        role: 'CEO, Grounded Coffee Co.',
        image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&h=300&fit=crop&q=80',
    },
]

const brands = [
    { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
    { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Linear', logo: 'https://seeklogo.com/images/L/linear-app-logo-12AF7C4E7B-seeklogo.com.png' },
]

export default function About() {
    return (
        <main className="min-h-screen bg-[#030D00] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">

            {/* ─── HERO BANNER ─── */}
            <section className="relative w-full h-[560px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1440&auto=format&fit=crop&q=80"
                    fill
                    alt="About us"
                    style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-36"
                    style={{ background: 'linear-gradient(to bottom, transparent, #030D00)' }} />

                {/* Breadcrumb */}
                <div className="absolute left-[120px] top-[249px] flex items-center gap-1.5">
                    <span className="text-white text-sm font-semibold">Company</span>
                    <span className="w-1 h-1 rounded-full bg-white inline-block" />
                    <span className="text-[#97F23D] text-sm font-semibold">About</span>
                </div>

                {/* Page title */}
                <div className="absolute left-[120px] top-[285px]">
                    <h1
                        className="font-extrabold text-white leading-[0.9] tracking-[-7px]"
                        style={{ fontSize: '105px', lineHeight: '95px' }}
                    >
                        About
                    </h1>
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(151,242,61,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(151,242,61,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
            </section>

            {/* ─── ABOUT SECTION ─── */}
            <section className="relative bg-black w-full py-24">
                <div className="max-w-[1280px] mx-auto px-[80px] flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left — image collage */}
                    <div className="relative flex-shrink-0 w-full lg:w-[570px] h-[496px]">
                        {/* Cascading lime accent squares */}
                        <div className="absolute top-0 left-[15px] w-6 h-6 bg-[#97F23D] z-10" />
                        <div className="absolute top-[34px] left-[49px] w-10 h-10 bg-[#97F23D] z-10" />
                        <div className="absolute top-[84px] left-[99px] w-14 h-14 bg-[#97F23D] z-10" />

                        {/* Small left image */}
                        <div className="absolute left-0 top-[180px] w-[290px] h-[316px] overflow-hidden border border-[#1a1a1a]">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80"
                                fill
                                alt="Team at work"
                                style={{ objectFit: 'cover', mixBlendMode: 'luminosity', opacity: 0.9 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#97F23D]/10 via-transparent to-black/30 pointer-events-none" />
                        </div>

                        {/* Large right image */}
                        <div className="absolute right-0 top-[32px] w-[400px] h-[496px] overflow-hidden border border-[#1a1a1a]">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                                fill
                                alt="Agency collaboration"
                                style={{ objectFit: 'cover', mixBlendMode: 'luminosity', opacity: 0.9 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#97F23D]/15 via-transparent to-black/40 pointer-events-none" />

                            {/* Stats overlay */}
                            <div className="absolute bottom-6 left-4 right-4">
                                <div className="grid grid-cols-3 gap-2">
                                    {[['12+', 'Years'], ['300+', 'Projects'], ['98%', 'Satisfied']].map(([num, label]) => (
                                        <div key={label} className="text-center border border-[#97F23D]/40 py-3 bg-black/70 backdrop-blur-sm">
                                            <div className="text-2xl font-extrabold text-[#97F23D]">{num}</div>
                                            <div className="text-[10px] text-white/50 tracking-widest uppercase mt-1">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — text */}
                    <div className="flex-1 max-w-[580px]">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#97F23D]" />
                            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">About The Agency</span>
                        </div>

                        <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 50px)' }}>
                            Get to know about<br />
                            <span className="text-[#97F23D]">Epoch Creative</span>
                        </h2>

                        <p className="text-[#97F23D] font-semibold text-lg mb-5 leading-relaxed">
                            EPOCH is where strategy meets creativity — built for brands that want to lead, not follow.
                        </p>

                        <p className="text-[#5D5D5D] font-medium text-[15px] leading-[1.85] mb-8">
                            From pixel-perfect graphic design and robust web development to scalable software solutions, brand identity systems, and high-performance digital marketing campaigns — we bring every piece of your digital presence together under one roof. We don't just build websites; we build momentum.
                        </p>

                        {/* Feature list */}
                        <ul className="space-y-3 mb-10">
                            {[
                                'Strategic brand positioning from day one',
                                'Full-stack development, built to scale',
                                'Data-driven digital marketing campaigns',
                                'Dedicated account management & support',
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3 text-[#5D5D5D] text-sm font-medium">
                                    <span className="w-5 h-5 bg-[#97F23D] flex items-center justify-center flex-shrink-0">
                                        <svg width="10" height="10" fill="none" viewBox="0 0 12 12" stroke="black" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#services"
                            className="inline-flex items-center justify-center bg-[#97F23D] text-black font-extrabold text-sm px-12 py-4 hover:bg-white transition-colors tracking-wide"
                        >
                            DISCOVER MORE
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── MARQUEE TICKER ─── */}
            <section className="relative w-full overflow-hidden border-y border-[#111] bg-[#030D00] py-6">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(2)].map((_, i) => (
                        <span key={i} className="inline-flex items-center gap-10 mr-10">
                            {['WEB DEVELOPMENT', 'BRAND IDENTITY', 'DIGITAL MARKETING', 'GRAPHIC DESIGN', 'SEO SERVICES', 'SOCIAL MEDIA', 'GOOGLE ADS', 'SOFTWARE DEV'].map(t => (
                                <span key={t} className="flex items-center gap-10">
                                    <span className="text-white font-extrabold tracking-tight" style={{ fontSize: '180px', lineHeight: '1.15' }}>{t}</span>
                                    <span className="text-[#97F23D] text-7xl font-black">•</span>
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="relative w-full bg-black py-24 overflow-hidden">
                {/* Decorative bg shape */}
                <div className="absolute right-0 top-0 w-[22%] h-full bg-[#101010]"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }} />

                <div className="relative max-w-[1280px] mx-auto px-[80px]">
                    {/* Heading */}
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#97F23D]" />
                            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">What Clients Say</span>
                        </div>
                        <h2 className="font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}>
                            Trusted by the brands<br />
                            <span className="text-[#97F23D]">we've helped grow.</span>
                        </h2>
                    </div>

                    {/* Testimonial cards */}
                    <div className="flex flex-col gap-0">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.id}
                                className={`group flex flex-col md:flex-row gap-10 py-12 border-t border-[#1a1a1a] ${i === testimonials.length - 1 ? 'border-b' : ''}`}
                            >
                                {/* Image + quote mark */}
                                <div className="relative flex-shrink-0 w-[220px] h-[260px]">
                                    <div className="w-full h-full overflow-hidden border border-[#1a1a1a]">
                                        <Image
                                            src={t.image}
                                            fill
                                            alt={t.name}
                                            style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
                                            className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                    {/* Orange quote badge */}
                                    <div className="absolute -bottom-4 left-8 w-12 h-12 bg-[#97F23D] flex items-center justify-center z-10">
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="black">
                                            <path d="M0 16V9.6C0 4.267 2.667 1.067 8 0l1.867 2.133C7.378 2.844 5.956 4.178 5.333 6.4H8V16H0zm12 0V9.6C12 4.267 14.667 1.067 20 0l1.867 2.133C19.378 2.844 17.956 4.178 17.333 6.4H20V16H12z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="flex-1 pt-2">
                                    <p className="text-[#5D5D5D] font-light text-[28px] leading-[1.65] mb-8 group-hover:text-white/70 transition-colors duration-500">
                                        {t.quote}
                                    </p>
                                    <div className="flex items-end gap-6">
                                        <div>
                                            <p className="text-white font-extrabold text-2xl">{t.name}</p>
                                            <p className="text-[#97F23D] text-xs font-semibold tracking-widest uppercase mt-1">{t.role}</p>
                                        </div>
                                        {/* Progress dots */}
                                        <div className="ml-auto flex items-center gap-2 pb-1">
                                            {testimonials.map((_, j) => (
                                                <div key={j} className={`rounded-full transition-all ${j === i ? 'w-6 h-2 bg-[#97F23D]' : 'w-2 h-2 bg-[#1a1a1a]'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── BRANDS / TRUST BAR ─── */}
            <section className="bg-black w-full py-20 border-t border-[#111]">
                <div className="max-w-[1280px] mx-auto px-[80px]">
                    {/* Divider heading */}
                    <div className="flex items-center gap-6 mb-16">
                        <div className="flex-1 h-px bg-[#5D5D5D] opacity-50" />
                        <span className="text-[#5D5D5D] text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
                            20+ Brands Trust Us
                        </span>
                        <div className="flex-1 h-px bg-[#5D5D5D] opacity-50" />
                    </div>

                    {/* Brand logos — text-based since logos need licensing */}
                    <div className="flex items-center justify-between flex-wrap gap-10">
                        {[
                            'ACCENTURE', 'SHOPIFY', 'FIGMA INC.', 'LINEAR', 'STRIPE', 'NOTION', 'VERCEL', 'PRISMIC',
                        ].map(brand => (
                            <span
                                key={brand}
                                className="text-[#5D5D5D] font-extrabold text-lg tracking-widest hover:text-white transition-colors duration-300 cursor-default select-none"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TEAM ─── */}
            <section className="bg-[#030D00] w-full py-24 border-t border-[#111]">
                <div className="max-w-[1280px] mx-auto px-[80px]">
                    <div className="flex items-end justify-between mb-14">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-[#97F23D]" />
                                <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">The People</span>
                            </div>
                            <h2 className="font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}>
                                The minds behind<br />
                                <span className="text-[#97F23D]">the work.</span>
                            </h2>
                        </div>
                        <a href="#contact" className="hidden lg:flex items-center gap-3 text-[#5D5D5D] text-xs font-bold tracking-widest uppercase hover:text-[#97F23D] transition-colors group">
                            <span>Join The Team</span>
                            <span className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#97F23D] transition-colors">
                                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#111]">
                        {[
                            { name: 'Tariq Osei', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80' },
                            { name: 'Priya Sharma', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80' },
                            { name: 'Marcus Webb', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80' },
                            { name: 'Aisha Diallo', role: 'Marketing Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80' },
                        ].map(member => (
                            <div key={member.name} className="group relative bg-[#030D00] overflow-hidden">
                                <div className="relative h-[380px] overflow-hidden">
                                    <Image
                                        src={member.img}
                                        fill
                                        alt={member.name}
                                        style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
                                        className="opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030D00] via-transparent to-transparent" />
                                    {/* Hover lime overlay */}
                                    <div className="absolute inset-0 bg-[#97F23D] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                </div>
                                <div className="p-6 border-t border-[#111]">
                                    <h3 className="text-white font-extrabold text-base group-hover:text-[#97F23D] transition-colors">{member.name}</h3>
                                    <p className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase mt-1">{member.role}</p>
                                </div>
                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#97F23D] group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Left accent bar */}
            <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#97F23D] to-transparent opacity-30 pointer-events-none" />
        </main>
    )
}
