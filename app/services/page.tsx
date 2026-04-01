'use client'
import { useState } from 'react'

const services = [
    {
        name: 'Web Development',
        desc: 'Custom websites and web apps built for performance, scalability, and seamless user experience.',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        name: 'SEO Services',
        desc: 'Strategic search engine optimisation that drives organic traffic and puts you ahead of the competition.',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
    {
        name: 'Social Media Marketing',
        desc: 'Data-driven campaigns across all channels that grow your audience and maximize your ROI.',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
            </svg>
        ),
    },
    {
        name: 'Google Ads Management',
        desc: 'Expertly managed paid campaigns that convert clicks into customers and scale your revenue.',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
        ),
    },
]

const whyUs = [
    {
        title: 'We think differently',
        desc: 'Our team approaches every challenge with fresh eyes, combining creative intuition with analytical rigor to deliver solutions that truly stand out.',
    },
    {
        title: 'Results you can measure',
        desc: 'Every strategy we build is tied to clear KPIs. We track, report, and optimise continuously so your investment always works harder.',
    },
    {
        title: 'Long-term partnership',
        desc: 'We don\'t just deliver and disappear. We embed ourselves in your growth story and evolve our strategies as your business scales.',
    },
]

const brands = [
    { name: 'Oakville Chamber', abbr: 'OC' },
    { name: 'Region Halton', abbr: 'RH' },
    { name: 'First Class', abbr: 'FC' },
    { name: 'FirstOntario', abbr: 'FO' },
    { name: "Gino's Pizza", abbr: 'GP' },
]

const footerServices = ['Website Development', 'SEO Services', 'Social Media Marketing', 'Google Ads Management']
const footerLinks = ['Contact Us', 'About Us', 'Services', 'Hiring', 'Our Blog']

export default function ServicesPage() {
    const [email, setEmail] = useState('')

    return (
        <div className="bg-black text-white font-sans min-h-screen">
            {/* ── HERO BANNER ── */}
            <section className="relative w-full h-[320px] flex items-end overflow-hidden pt-[64px]">
                <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop"
                    alt="Services hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.3) saturate(0.4)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000 30%, transparent 100%)' }} />
                <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-10 w-full">
                    <p className="text-sm text-[#5D5D5D] font-semibold mb-2">
                        <span className="text-white">Stylus</span>
                        <span className="mx-2 text-[#333]">•</span>
                        <span className="text-[#97F23D]">Services</span>
                    </p>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-none tracking-tight">Services</h1>
                </div>
            </section>

            {/* ── SERVICE CARDS ── */}
            <section id="services" className="w-full bg-black py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#97F23D]"></div>
                            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">What We're Offering</span>
                        </div>
                        <h2 className="font-extrabold text-4xl md:text-5xl leading-tight">
                            <span className="text-[#97F23D]">Services</span>{' '}
                            <span className="text-white">We're Providing<br />To Our Customers</span>
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                        {services.map((service, i) => (
                            <div key={service.name} className="relative bg-[#101010] p-8 border border-[#1a1a1a] group hover:border-[#97F23D] transition-colors duration-300 cursor-pointer overflow-hidden">
                                <div className="absolute top-4 right-4 text-[80px] font-black text-[#97F23D] opacity-[0.04] leading-none select-none group-hover:opacity-[0.07] transition-opacity">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="mb-6 text-[#5D5D5D] group-hover:text-[#97F23D] transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-white font-extrabold text-lg mb-4 leading-snug">{service.name}</h3>
                                <p className="text-[#5D5D5D] text-sm leading-[1.75] mb-8">{service.desc}</p>
                                <div className="border-t border-[rgba(93,93,93,0.3)]" />
                                <div className="mt-5 flex items-center gap-2 text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase group-hover:text-[#97F23D] transition-colors">
                                    <span>Learn More</span>
                                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </div>
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#97F23D] group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Extra services row */}
                    <div className="mt-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                        {[
                            { name: 'Branding', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
                            { name: 'SEO Services', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" /></svg> },
                            { name: 'Social Media', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg> },
                            { name: 'Google Ads', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
                        ].map((s) => (
                            <div key={s.name} className="bg-[#0a0a0a] border border-[#1a1a1a] px-8 py-5 flex items-center gap-4 group hover:border-[#97F23D] transition-colors cursor-pointer">
                                <span className="text-[#97F23D]">{s.icon}</span>
                                <span className="text-[#5D5D5D] font-semibold text-sm group-hover:text-white transition-colors">{s.name}</span>
                                <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#97F23D" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="w-full bg-black py-24 border-t border-[#111]">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left text */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#97F23D]"></div>
                            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
                        </div>
                        <h2 className="font-extrabold text-4xl md:text-5xl leading-tight mb-12">
                            Providing The <span className="text-[#97F23D]">Best</span><br />Services
                        </h2>
                        <div className="flex flex-col gap-8">
                            {whyUs.map((item) => (
                                <div key={item.title} className="flex gap-5">
                                    <div className="flex-shrink-0 mt-1 w-8 h-8 bg-[#97F23D] flex items-center justify-center">
                                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-extrabold text-base mb-1">{item.title}</h4>
                                        <p className="text-[#5D5D5D] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right image with circular badge */}
                    <div className="relative flex items-center justify-center">
                        {/* Decorative arcs */}
                        <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-[#97F23D] opacity-20" />
                        <div className="absolute w-[380px] h-[380px] rounded-full border border-[#97F23D] opacity-10" />

                        {/* Accent arc */}
                        <svg className="absolute w-[440px] h-[440px]" viewBox="0 0 440 440">
                            <circle cx="220" cy="220" r="200" fill="none" stroke="#97F23D" strokeWidth="3" strokeDasharray="80 20" strokeLinecap="round" opacity="0.5" />
                        </svg>

                        {/* Photo */}
                        <div className="w-[340px] h-[340px] rounded-full overflow-hidden border-4 border-[#1a1a1a]">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&fit=crop&crop=face"
                                alt="Agency professional"
                                className="w-full h-full object-cover"
                                style={{ filter: 'grayscale(0.4) brightness(0.9)' }}
                            />
                        </div>

                        {/* Circular text badge */}
                        <div className="absolute bottom-4 left-[54%] w-[110px] h-[110px]">
                            <svg viewBox="0 0 110 110" className="w-full h-full animate-spin" style={{ animationDuration: '12s' }}>
                                <path id="badge-circle" d="M 55,55 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                                <text fontSize="8.5" fontFamily="sans-serif" fontWeight="700" fill="white" letterSpacing="2.2">
                                    <textPath href="#badge-circle">Watch Our Agency Video • </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <svg width="14" height="14" fill="black" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BRANDS ── */}
            <section className="w-full bg-black border-t border-[#111] py-16">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex-1 h-px bg-[#1a1a1a]" />
                        <span className="text-[#5D5D5D] text-xs font-semibold tracking-[0.25em] uppercase">30+ Brands Trust Us</span>
                        <div className="flex-1 h-px bg-[#1a1a1a]" />
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                        {brands.map((b) => (
                            <div key={b.name} className="flex items-center justify-center py-6 border border-[#1a1a1a] hover:border-[#97F23D] transition-colors cursor-pointer group">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-2xl font-extrabold text-[#333] group-hover:text-[#97F23D] transition-colors tracking-tight">{b.abbr}</span>
                                    <span className="text-[10px] text-[#2a2a2a] group-hover:text-[#5D5D5D] transition-colors font-semibold tracking-widest uppercase">{b.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}