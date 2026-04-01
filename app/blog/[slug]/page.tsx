'use client'
import { useState } from 'react'

// In a real app this would come from params/API
const post = {
    date: '12 Mar 2025',
    category: 'Design',
    comments: 8,
    title: 'The Psychology of Color in Brand Identity Design',
    tag: 'Graphic Design',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1400&q=80&fit=crop',
    author: 'Sarah Mitchell',
    authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop&crop=face',
    authorBio: 'Sarah is our Lead Brand Strategist with 9 years of experience in identity design, color theory, and visual communication. She\'s worked with brands across fintech, hospitality, and consumer tech.',
    content: [
        {
            type: 'lead',
            text: 'Color is one of the most powerful — and most misunderstood — tools in a brand designer\'s arsenal. Done right, it silently communicates values, triggers emotion, and builds instant recognition. Done wrong, it undermines trust before a single word is read.',
        },
        {
            type: 'h2',
            text: 'Why Color Is Never Just Aesthetic',
        },
        {
            type: 'p',
            text: 'Studies in consumer psychology consistently show that color accounts for up to 85% of the reason a person decides to buy a product. That\'s not a small influence — that\'s a primary driver. Yet most brand projects treat color as a finishing touch rather than a strategic foundation.',
        },
        {
            type: 'p',
            text: 'The mistake is thinking of color as decoration. In reality, it\'s communication. Every hue carries cultural weight, emotional resonance, and cognitive associations that have been built up over a lifetime of exposure. A designer\'s job is to harness those associations with precision.',
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=80&fit=crop',
            caption: 'Color systems in brand identity work best when each choice is deliberate and documented.',
        },
        {
            type: 'h2',
            text: 'The Four Dimensions of Brand Color',
        },
        {
            type: 'p',
            text: 'When we develop a color system for a client, we think across four dimensions: primary palette (the dominant brand colors), secondary palette (supporting and accent tones), semantic colors (success, warning, error states in digital), and neutral tones (backgrounds, text, dividers).',
        },
        {
            type: 'list',
            items: [
                'Primary palette: 1–2 colors that own the brand\'s emotional space',
                'Secondary palette: 3–5 tones that extend flexibility without diluting identity',
                'Semantic colors: functional hues for UI and data contexts',
                'Neutrals: the invisible backbone of every composition',
            ],
        },
        {
            type: 'h2',
            text: 'Cultural Context Always Wins',
        },
        {
            type: 'p',
            text: 'White signals purity in Western markets. In parts of East Asia, it\'s associated with mourning. Red means danger in safety contexts but luck and prosperity in Chinese culture. Green can mean environmental responsibility or financial growth depending entirely on context.',
        },
        {
            type: 'p',
            text: 'For any brand operating across cultures, color research isn\'t optional — it\'s essential. We always map intended color choices against the primary markets a brand operates in before any final decisions are made.',
        },
        {
            type: 'quote',
            text: 'Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings. The artist is the hand that plays, touching one key or another, to cause vibrations in the soul.',
            author: 'Wassily Kandinsky',
        },
        {
            type: 'h2',
            text: 'Practical Framework: How We Choose Brand Colors',
        },
        {
            type: 'p',
            text: 'Our process starts with a positioning audit — where does the brand sit relative to competitors, and what emotional territory is unclaimed? We then map that territory to color families, test contrast ratios for accessibility, and validate across dark and light contexts before ever presenting to a client.',
        },
        {
            type: 'p',
            text: 'The final deliverable is always a documented color system — not just hex codes, but usage rules, forbidden combinations, and rationale for every decision. That documentation is what prevents brand drift over the years.',
        },
    ],
}

const relatedPosts = [
    {
        title: 'Building a Brand Identity From Scratch: Our Full Process',
        date: '05 Mar 2025',
        tag: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&q=80&fit=crop',
    },
    {
        title: 'Why Next.js is Our Go-To Framework for Client Projects',
        date: '24 Feb 2025',
        tag: 'Web Development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80&fit=crop',
    },
    {
        title: 'How to Build a Digital Marketing Funnel That Actually Converts',
        date: '01 Mar 2025',
        tag: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&fit=crop',
    },
]

const recentPosts = relatedPosts

export default function BlogDetailPage() {
    const [comment, setComment] = useState({ name: '', email: '', message: '' })

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

            {/* ── HERO IMAGE ── */}
            <section className="relative w-full h-[480px] flex items-end overflow-hidden pt-[64px]">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.4) saturate(0.6)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000 40%, transparent 100%)' }} />
                <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-12 w-full">
                    <div className="flex items-center gap-2 mb-4 text-sm text-[#5D5D5D]">
                        <a href="#" className="hover:text-white transition-colors">Stylus</a>
                        <span className="text-[#333]">•</span>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                        <span className="text-[#333]">•</span>
                        <span className="text-[#97F23D]">{post.tag}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mb-6 tracking-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-5 text-sm text-[#5D5D5D]">
                        <div className="flex items-center gap-2">
                            <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-white font-semibold">{post.author}</span>
                        </div>
                        <span className="flex items-center gap-1.5">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            {post.comments} Comments
                        </span>
                        <span className="flex items-center gap-1.5">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* ── CONTENT + SIDEBAR ── */}
            <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">

                {/* ── ARTICLE ── */}
                <article>
                    {post.content.map((block, i) => {
                        if (block.type === 'lead') return (
                            <p key={i} className="text-xl text-[#aaa] leading-relaxed mb-8 font-medium border-l-4 border-[#97F23D] pl-6">{block.text}</p>
                        )
                        if (block.type === 'h2') return (
                            <h2 key={i} className="text-2xl font-extrabold text-white mt-12 mb-5 tracking-tight">{block.text}</h2>
                        )
                        if (block.type === 'p') return (
                            <p key={i} className="text-[#888] leading-[1.85] mb-5 text-[15px]">{block.text}</p>
                        )
                        if (block.type === 'image') return (
                            <figure key={i} className="my-10">
                                <img src={block.src} alt={block.caption} className="w-full object-cover" style={{ maxHeight: '420px', filter: 'brightness(0.9) saturate(0.8)' }} />
                                <figcaption className="text-[#444] text-xs font-semibold tracking-wide mt-3 text-center uppercase">{block.caption}</figcaption>
                            </figure>
                        )
                        if (block.type === 'list') return (
                            <ul key={i} className="my-6 flex flex-col gap-3">
                                {block.items!.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-[#888] text-[15px] leading-relaxed">
                                        <span className="mt-1.5 w-4 h-4 bg-[#97F23D] flex-shrink-0 flex items-center justify-center">
                                            <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )
                        if (block.type === 'quote') return (
                            <blockquote key={i} className="my-10 border-l-4 border-[#97F23D] pl-8 py-2">
                                <p className="text-xl text-white font-semibold italic leading-relaxed mb-3">"{block.text}"</p>
                                <cite className="text-[#97F23D] text-sm font-bold not-italic tracking-widest uppercase">— {block.author}</cite>
                            </blockquote>
                        )
                        return null
                    })}

                    {/* Tags + Share */}
                    <div className="border-t border-[#1a1a1a] mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[#5D5D5D] text-xs font-bold tracking-widest uppercase mr-2">Tags:</span>
                            {[post.tag, post.category, 'Branding'].map(t => (
                                <span key={t} className="border border-[#222] text-[#5D5D5D] text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider hover:border-[#97F23D] hover:text-white transition-colors cursor-pointer">{t}</span>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[#5D5D5D] text-xs font-bold tracking-widest uppercase">Share:</span>
                            {[
                                <svg key="tw" width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                                <svg key="li" width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                            ].map((icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 border border-[#222] flex items-center justify-center hover:border-[#97F23D] transition-colors">{icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Author bio */}
                    <div className="mt-10 p-8 border border-[#1a1a1a] flex gap-6 items-start">
                        <img src={post.authorImg} alt={post.author} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                        <div>
                            <p className="text-[#97F23D] text-[10px] font-bold tracking-widest uppercase mb-1">About the Author</p>
                            <h4 className="text-white font-extrabold text-lg mb-2">{post.author}</h4>
                            <p className="text-[#5D5D5D] text-sm leading-relaxed">{post.authorBio}</p>
                        </div>
                    </div>

                    {/* Comment form */}
                    <div className="mt-16">
                        <h3 className="text-white font-extrabold text-2xl mb-8">Leave a Comment</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={comment.name}
                                onChange={e => setComment(p => ({ ...p, name: e.target.value }))}
                                className="bg-[#0d0d0d] border border-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={comment.email}
                                onChange={e => setComment(p => ({ ...p, email: e.target.value }))}
                                className="bg-[#0d0d0d] border border-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors"
                            />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="Your Comment"
                            value={comment.message}
                            onChange={e => setComment(p => ({ ...p, message: e.target.value }))}
                            className="w-full bg-[#0d0d0d] border border-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors resize-none mb-4"
                        />
                        <button className="bg-[#97F23D] text-black font-extrabold text-sm px-10 py-4 hover:brightness-110 transition-all tracking-wide uppercase">
                            Post Comment
                        </button>
                    </div>
                </article>

                {/* ── SIDEBAR ── */}
                <aside className="flex flex-col gap-10">

                    {/* Search */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
                            <span className="w-6 h-[2px] bg-[#97F23D]" /> Search
                        </h4>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="flex-1 bg-[#0d0d0d] border border-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors"
                            />
                            <button className="bg-[#97F23D] px-4 flex items-center justify-center">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2.5}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Recent posts */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                            <span className="w-6 h-[2px] bg-[#97F23D]" /> Recent Posts
                        </h4>
                        <div className="flex flex-col gap-5">
                            {recentPosts.map((p) => (
                                <a key={p.title} href="#" className="flex gap-4 group">
                                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ filter: 'brightness(0.7) saturate(0.7)' }} />
                                    </div>
                                    <div>
                                        <p className="text-[#97F23D] text-[10px] font-bold tracking-widest uppercase mb-1">{p.date}</p>
                                        <p className="text-[#888] text-xs font-semibold leading-snug group-hover:text-white transition-colors line-clamp-2">{p.title}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                            <span className="w-6 h-[2px] bg-[#97F23D]" /> Categories
                        </h4>
                        <div className="flex flex-col gap-0">
                            {[['Graphic Design', 4], ['Web Development', 6], ['Digital Marketing', 5], ['SEO Services', 3], ['Google Ads', 2]].map(([name, count]) => (
                                <a key={name} href="#" className="flex items-center justify-between py-3 border-b border-[#111] group hover:pl-2 transition-all duration-200">
                                    <span className="text-[#5D5D5D] text-sm font-semibold group-hover:text-[#97F23D] transition-colors flex items-center gap-2">
                                        <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                        {name}
                                    </span>
                                    <span className="text-[#333] text-xs font-bold">({count})</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                            <span className="w-6 h-[2px] bg-[#97F23D]" /> Tags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {['Branding', 'Design', 'Next.js', 'SEO', 'Marketing', 'React', 'Google Ads', 'Social Media', 'Identity'].map(t => (
                                <span key={t} className="border border-[#1a1a1a] text-[#5D5D5D] text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider hover:border-[#97F23D] hover:text-white transition-colors cursor-pointer">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* CTA banner */}
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 text-center">
                        <div className="w-10 h-10 bg-[#97F23D] flex items-center justify-center mx-auto mb-4">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        </div>
                        <h5 className="text-white font-extrabold text-base mb-2">Ready to grow?</h5>
                        <p className="text-[#5D5D5D] text-xs leading-relaxed mb-5">Let's talk about your brand, your goals, and how we can help.</p>
                        <a href="#" className="block bg-[#97F23D] text-black font-extrabold text-xs py-3 uppercase tracking-widest hover:brightness-110 transition-all">
                            Get In Touch
                        </a>
                    </div>
                </aside>
            </div>

            {/* ── RELATED POSTS ── */}
            <section className="border-t border-[#111] py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-[2px] bg-[#97F23D]" />
                        <h3 className="text-white font-extrabold text-2xl">Related Posts</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((p) => (
                            <a key={p.title} href="#" className="group border border-[#1a1a1a] hover:border-[#97F23D] transition-colors overflow-hidden relative block">
                                <div className="h-[200px] overflow-hidden">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ filter: 'brightness(0.7) saturate(0.7)' }} />
                                </div>
                                <div className="p-6 bg-[#0d0d0d]">
                                    <span className="text-[#97F23D] text-[9px] font-extrabold tracking-widest uppercase">{p.tag}</span>
                                    <h4 className="text-white font-extrabold text-sm leading-snug mt-2 group-hover:text-[#97F23D] transition-colors">{p.title}</h4>
                                    <p className="text-[#444] text-xs mt-2">{p.date}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#97F23D] group-hover:w-full transition-all duration-500" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}