'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects-data'

const categories = ['All', 'Web Dev', 'Branding', 'Digital Marketing', 'Graphic Design']

export default function Portfolio() {
    const [active, setActive] = useState('All')
    const [hovered, setHovered] = useState<number | null>(null)

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

    return (
        <main className="min-h-screen bg-[#030D00] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
            {/* Hero */}
            <section className="relative pt-40 pb-20 px-10 max-w-[1280px] mx-auto">
                {/* Decorative grid */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(151,242,61,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(151,242,61,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

                <div className="flex items-end justify-between mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-[2px] bg-[#97F23D]"></div>
                            <span className="text-[#97F23D] text-xs font-semibold tracking-[0.3em] uppercase">Our Work</span>
                        </div>
                        <h1 className="font-extrabold text-white leading-[0.9] tracking-[-3px]" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
                            Projects that<br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.12)' }}>speak</span> for<br />
                            themselves.
                        </h1>
                    </div>
                    <div className="hidden lg:block text-right max-w-[280px]">
                        <p className="text-[#5D5D5D] text-base font-medium leading-relaxed">
                            A curated selection of brands, products, and experiences we've shaped.
                        </p>
                        <div className="mt-6 flex items-center justify-end gap-6">
                            <div className="text-center">
                                <p className="text-[#97F23D] font-extrabold text-3xl">120+</p>
                                <p className="text-[#5D5D5D] text-xs tracking-widest uppercase mt-1">Projects</p>
                            </div>
                            <div className="w-[1px] h-10 bg-[#1a1a1a]"></div>
                            <div className="text-center">
                                <p className="text-[#97F23D] font-extrabold text-3xl">98%</p>
                                <p className="text-[#5D5D5D] text-xs tracking-widest uppercase mt-1">Retention</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter tabs */}
                <div className="flex items-center gap-2 flex-wrap mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase border transition-all duration-200 ${active === cat
                                    ? 'bg-[#97F23D] text-black border-[#97F23D]'
                                    : 'text-[#5D5D5D] border-[#1a1a1a] hover:border-[#97F23D] hover:text-white bg-transparent'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                    <div className="ml-auto text-[#5D5D5D] text-xs font-semibold tracking-widest">
                        {filtered.length} PROJECTS
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]">
                    {filtered.map((project, i) => (
                        <Link
                            key={project.id}
                            href={`/portfolio/${project.slug}`}
                            className={`group relative bg-[#030D00] overflow-hidden cursor-pointer ${project.featured && i === 0 ? 'md:col-span-2' : ''}`}
                            onMouseEnter={() => setHovered(project.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Image */}
                            <div className={`relative overflow-hidden ${project.featured && i === 0 ? 'h-[480px]' : 'h-[320px]'}`}>
                                <Image
                                    src={project.image}
                                    fill
                                    alt={project.title}
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030D00] via-[rgba(3,13,0,0.4)] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                                {/* Category pill */}
                                <div className="absolute top-5 left-5">
                                    <span className="bg-[rgba(3,13,0,0.8)] border border-[#97F23D] text-[#97F23D] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Year */}
                                <div className="absolute top-5 right-5 text-[#5D5D5D] text-xs font-semibold tracking-widest">
                                    {project.year}
                                </div>

                                {/* Arrow on hover */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#97F23D] flex items-center justify-center transition-all duration-300 ${hovered === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-7 border-t border-[#111]">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-white font-extrabold text-lg leading-snug mb-2 group-hover:text-[#97F23D] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#5D5D5D] text-sm font-medium leading-relaxed">{project.desc}</p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-2 mt-5 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[#3a3a3a] text-[10px] font-bold tracking-widest uppercase border border-[#1a1a1a] px-2.5 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                    <div className="ml-auto w-0 group-hover:w-full h-[2px] bg-[#97F23D] transition-all duration-500 ease-out" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load more */}
                <div className="mt-16 flex items-center justify-center gap-6">
                    <div className="flex-1 h-px bg-[#111]"></div>
                    <button className="flex items-center gap-3 text-[#5D5D5D] text-xs font-bold tracking-widest uppercase hover:text-[#97F23D] transition-colors group">
                        <span>Load More Projects</span>
                        <span className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#97F23D] transition-colors">
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>
                    <div className="flex-1 h-px bg-[#111]"></div>
                </div>
            </section>

            {/* CTA strip */}
            <section className="border-t border-[#111] mt-10">
                <div className="max-w-[1280px] mx-auto px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="font-extrabold text-white text-3xl md:text-4xl leading-tight tracking-tight">
                            Ready to be our<br />
                            <span className="text-[#97F23D]">next case study?</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#contact" className="bg-[#97F23D] text-black font-extrabold text-sm px-10 py-4 hover:bg-white transition-colors tracking-wide">
                            START A PROJECT
                        </a>
                        <Link href="/" className="flex items-center gap-3 text-white font-semibold text-sm hover:text-[#97F23D] transition-colors group">
                            <span className="w-10 h-10 border border-[#333] flex items-center justify-center group-hover:border-[#97F23D] transition-colors">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </span>
                            BACK HOME
                        </Link>
                    </div>
                </div>
            </section>

            {/* Left accent bar */}
            <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#97F23D] to-transparent opacity-30 pointer-events-none"></div>
        </main>
    )
}