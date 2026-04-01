'use client'
import { useState } from 'react'

const posts = [
    {
        slug: 'psychology-of-color',
        date: '12 Mar 2025',
        category: 'Design',
        comments: 8,
        title: 'The Psychology of Color in Brand Identity Design',
        excerpt: 'Discover how strategic color choices influence perception, trigger emotion, and build lasting brand recognition across every touchpoint.',
        tag: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80&fit=crop',
        author: 'Sarah Mitchell',
        authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop&crop=face',
        readTime: '5 min read',
    },
    {
        slug: 'nextjs-go-to-framework',
        date: '24 Feb 2025',
        category: 'Dev',
        comments: 14,
        title: 'Why Next.js is Our Go-To Framework for Client Projects',
        excerpt: 'From server-side rendering to edge functions, we break down exactly why Next.js has become the backbone of every web project we ship.',
        tag: 'Web Development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop',
        author: 'James Okafor',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face',
        readTime: '7 min read',
    },
    {
        slug: 'digital-marketing-funnel',
        date: '01 Mar 2025',
        category: 'Marketing',
        comments: 5,
        title: 'How to Build a Digital Marketing Funnel That Actually Converts',
        excerpt: 'Most funnels leak. Learn the exact architecture we use to guide prospects from awareness to purchase without losing them at every stage.',
        tag: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop',
        author: 'Priya Nair',
        authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fit=crop&crop=face',
        readTime: '6 min read',
    },
    {
        slug: 'seo-in-2025',
        date: '18 Mar 2025',
        category: 'Marketing',
        comments: 11,
        title: 'SEO in 2025: What Actually Moves the Needle Now',
        excerpt: 'Algorithm updates have changed the game entirely. Here\'s what our SEO team is doubling down on — and what we\'ve stopped doing.',
        tag: 'SEO Services',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&fit=crop',
        author: 'Sarah Mitchell',
        authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop&crop=face',
        readTime: '8 min read',
    },
    {
        slug: 'brand-identity-from-scratch',
        date: '05 Mar 2025',
        category: 'Design',
        comments: 9,
        title: 'Building a Brand Identity From Scratch: Our Full Process',
        excerpt: 'A transparent look at how we take a brief from first call to final brand guidelines — every tool, decision, and revision included.',
        tag: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80&fit=crop',
        author: 'James Okafor',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face',
        readTime: '10 min read',
    },
    {
        slug: 'google-ads-roi',
        date: '28 Feb 2025',
        category: 'Dev',
        comments: 3,
        title: 'Maximising Google Ads ROI Without Blowing Your Budget',
        excerpt: 'Small tweaks to bidding strategy, ad copy, and audience segmentation that we\'ve used to cut wasted spend by 40% for our clients.',
        tag: 'Google Ads',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
        author: 'Priya Nair',
        authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fit=crop&crop=face',
        readTime: '5 min read',
    },
]

const categories = ['All', 'Design', 'Dev', 'Marketing']

export default function BlogPage() {
    const [active, setActive] = useState('All')
    const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)
    const [featured, ...rest] = filtered

    return (
        <div className="bg-black text-white min-h-screen">

            {/* ── NAV ── */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-[#1a1a1a]">
                <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#97F23D] font-extrabold text-lg tracking-tight">Agency</span>
                        <span className="text-white font-extrabold text-lg tracking-tight">Studio</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map(l => (
                            <a key={l} href="#" className={`text-sm font-semibold tracking-wide flex items-center gap-1.5 transition-colors ${l === 'Blog' ? 'text-[#97F23D]' : 'text-[#5D5D5D] hover:text-white'}`}>
                                <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ── HERO BANNER ── */}
            <section className="relative w-full h-[300px] flex items-end overflow-hidden pt-[64px]">
                <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80&fit=crop"
                    alt="Blog hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.25) saturate(0.4)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000 35%, transparent 100%)' }} />
                <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-10 w-full">
                    <p className="text-sm text-[#5D5D5D] font-semibold mb-2">
                        <span className="text-white">Stylus</span>
                        <span className="mx-2 text-[#333]">•</span>
                        <span className="text-[#97F23D]">Blog</span>
                    </p>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-none tracking-tight">Blog</h1>
                </div>
            </section>

            {/* ── HEADING + FILTERS ── */}
            <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#97F23D]" />
                            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">Our Recent Posts</span>
                        </div>
                        <h2 className="font-extrabold text-4xl md:text-5xl leading-tight">
                            <span className="text-white">Our Latest </span>
                            <span className="text-[#97F23D]">News &amp; Articles<br />From The Blog</span>
                        </h2>
                    </div>
                    {/* Category filter */}
                    <div className="flex gap-2 flex-wrap">
                        {categories.map(c => (
                            <button
                                key={c}
                                onClick={() => setActive(c)}
                                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase border transition-all ${active === c ? 'bg-[#97F23D] border-[#97F23D] text-black' : 'border-[#222] text-[#5D5D5D] hover:border-[#97F23D] hover:text-white'}`}
                            >{c}</button>
                        ))}
                    </div>
                </div>

                {/* ── FEATURED POST ── */}
                {featured && (
                    <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 border border-[#1a1a1a] hover:border-[#97F23D] transition-colors duration-300 overflow-hidden">
                        <div className="relative h-[340px] lg:h-auto overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ filter: 'brightness(0.8) saturate(0.8)' }}
                            />
                            <div className="absolute top-4 left-4 bg-[#97F23D] text-black text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">{featured.tag}</div>
                            <div className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-2 uppercase tracking-wide">{featured.date}</div>
                        </div>
                        <div className="bg-[#0d0d0d] p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[2px] bg-[#97F23D]" />
                                <span className="text-[#5D5D5D] text-sm">{featured.category}</span>
                                <span className="text-[#333]">·</span>
                                <span className="text-[#5D5D5D] text-sm">{featured.comments} Comments</span>
                                <span className="text-[#333]">·</span>
                                <span className="text-[#5D5D5D] text-sm">{featured.readTime}</span>
                            </div>
                            <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-snug mb-5 group-hover:text-[#97F23D] transition-colors">
                                {featured.title}
                            </h3>
                            <p className="text-[#5D5D5D] text-sm leading-relaxed mb-8">{featured.excerpt}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-3">
                                    <img src={featured.authorImg} alt={featured.author} className="w-9 h-9 rounded-full object-cover" />
                                    <span className="text-white text-sm font-semibold">{featured.author}</span>
                                </div>
                                <span className="text-[#5D5D5D] text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#97F23D] transition-colors">
                                    Read More
                                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#97F23D] group-hover:w-full transition-all duration-500 col-span-2" />
                    </article>
                )}

                {/* ── GRID POSTS ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
                    {rest.map((post) => (
                        <article key={post.slug} className="group cursor-pointer border border-[#1a1a1a] hover:border-[#97F23D] transition-colors duration-300 overflow-hidden relative">
                            <div className="relative h-[220px] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ filter: 'brightness(0.75) saturate(0.75)' }}
                                />
                                <div className="absolute top-3 left-3 bg-[#97F23D] text-black text-[9px] font-extrabold px-2.5 py-1 uppercase tracking-widest">{post.tag}</div>
                                <div className="absolute top-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2.5 py-1.5 uppercase tracking-wide">{post.date}</div>
                            </div>
                            <div className="p-6 bg-[#0d0d0d]">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-[2px] bg-[#97F23D]" />
                                    <span className="text-[#5D5D5D] text-xs">{post.category}</span>
                                    <span className="text-[#333]">·</span>
                                    <span className="text-[#5D5D5D] text-xs">{post.comments} Comments</span>
                                </div>
                                <h3 className="text-white font-extrabold text-base leading-snug mb-3 group-hover:text-[#97F23D] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-[#5D5D5D] text-xs leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                                <div className="border-t border-[rgba(93,93,93,0.2)] pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src={post.authorImg} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                                        <span className="text-[#5D5D5D] text-xs font-semibold">{post.author}</span>
                                    </div>
                                    <span className="text-[#5D5D5D] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 group-hover:text-[#97F23D] transition-colors">
                                        Read More
                                        <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#97F23D] group-hover:w-full transition-all duration-500" />
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}