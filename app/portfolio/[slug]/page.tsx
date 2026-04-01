'use client'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects-data'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const next = projects.find(p => p.slug === project.nextProject)

  return (
    <main className="min-h-screen bg-[#030D00] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      {/* Hero image — full bleed */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src={project.image}
          fill
          alt={project.title}
          style={{ objectFit: 'cover' }}
          priority
          className="scale-[1.02]"
        />
        {/* Heavy gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030D00] via-[rgba(3,13,0,0.35)] to-[rgba(3,13,0,0.5)]" />

        {/* Back button */}
        <Link
          href="/portfolio"
          className="absolute top-28 left-10 flex items-center gap-3 text-[#5D5D5D] hover:text-[#97F23D] text-xs font-bold tracking-widest uppercase transition-colors group"
        >
          <span className="w-8 h-8 border border-[#333] flex items-center justify-center group-hover:border-[#97F23D] transition-colors">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          All Projects
        </Link>

        {/* Hero text — bottom left */}
        <div className="absolute bottom-16 left-10 right-10 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#97F23D]"></div>
              <span className="text-[#97F23D] text-xs font-semibold tracking-[0.3em] uppercase">{project.category}</span>
            </div>
            <h1
              className="font-extrabold text-white leading-[0.9] tracking-[-3px]"
              style={{ fontSize: 'clamp(48px, 6vw, 84px)' }}
            >
              {project.title}
            </h1>
          </div>
          {/* Meta right */}
          <div className="hidden lg:flex flex-col gap-3 items-end text-right">
            <div>
              <p className="text-[#3a3a3a] text-[10px] font-bold tracking-widest uppercase mb-1">Client</p>
              <p className="text-white text-sm font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-[#3a3a3a] text-[10px] font-bold tracking-widest uppercase mb-1">Year</p>
              <p className="text-white text-sm font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="text-[#3a3a3a] text-[10px] font-bold tracking-widest uppercase mb-1">Duration</p>
              <p className="text-white text-sm font-semibold">{project.duration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Tags + Role bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-8 border-b border-[#111]">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="border border-[#1a1a1a] text-[#5D5D5D] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[#3a3a3a] text-xs font-semibold tracking-widest">{project.role}</p>
        </div>

        {/* Overview + Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 border-b border-[#111]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#97F23D]"></div>
              <span className="text-[#97F23D] text-[10px] font-bold tracking-[0.3em] uppercase">Overview</span>
            </div>
            <p className="text-white text-lg font-medium leading-[1.8]">{project.overview}</p>
          </div>
          <div className="lg:pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#97F23D]"></div>
              <span className="text-[#97F23D] text-[10px] font-bold tracking-[0.3em] uppercase">The Challenge</span>
            </div>
            <p className="text-[#5D5D5D] text-base font-medium leading-[1.9]">{project.challenge}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="py-20 border-b border-[#111]">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[2px] bg-[#97F23D]"></div>
              <span className="text-[#97F23D] text-[10px] font-bold tracking-[0.3em] uppercase">Our Approach</span>
            </div>
            <p className="text-white text-xl font-medium leading-[1.8]">{project.solution}</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="py-20 border-b border-[#111]">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-[2px] bg-[#97F23D]"></div>
            <span className="text-[#97F23D] text-[10px] font-bold tracking-[0.3em] uppercase">Project Gallery</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#111]">
            {/* First image — full width */}
            <div className="lg:col-span-2 relative h-[520px] overflow-hidden group">
              <Image
                src={project.gallery[0]}
                fill
                alt={`${project.title} — main`}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[rgba(3,13,0,0.2)] group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Remaining 3 images */}
            {project.gallery.slice(1).map((img, i) => (
              <div key={i} className="relative h-[340px] overflow-hidden group bg-[#030D00]">
                <Image
                  src={img}
                  fill
                  alt={`${project.title} — ${i + 2}`}
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[rgba(3,13,0,0.25)] group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="py-20 border-b border-[#111]">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-[2px] bg-[#97F23D]"></div>
            <span className="text-[#97F23D] text-[10px] font-bold tracking-[0.3em] uppercase">Results</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#111]">
            {project.results.map((r, i) => (
              <div key={i} className="bg-[#030D00] p-10 group hover:bg-[#0a0a0a] transition-colors">
                <p
                  className="font-extrabold text-[#97F23D] leading-none tracking-tight mb-3"
                  style={{ fontSize: 'clamp(48px, 5vw, 72px)' }}
                >
                  {r.value}
                </p>
                <p className="text-white font-bold text-base mb-1">{r.label}</p>
                <p className="text-[#3a3a3a] text-sm font-medium">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="py-24 border-b border-[#111]">
          <div className="max-w-[820px] mx-auto text-center">
            <div className="text-[#97F23D] text-5xl font-black mb-8 leading-none">"</div>
            <blockquote
              className="text-white font-extrabold leading-[1.2] tracking-tight mb-10"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
            >
              {project.testimonial.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-[#97F23D]"></div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">{project.testimonial.author}</p>
                <p className="text-[#5D5D5D] text-xs font-semibold tracking-widest mt-0.5">{project.testimonial.role}</p>
              </div>
              <div className="w-10 h-[1px] bg-[#97F23D]"></div>
            </div>
          </div>
        </div>

        {/* Next project */}
        {next && (
          <div className="py-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[2px] bg-[#97F23D]"></div>
              <span className="text-[#97F23D] text-[10px] font-bold tracking-[0.3em] uppercase">Next Project</span>
            </div>
            <Link href={`/portfolio/${next.slug}`} className="group block relative overflow-hidden">
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={next.image}
                  fill
                  alt={next.title}
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030D00] via-[rgba(3,13,0,0.6)] to-transparent" />
                <div className="absolute inset-0 flex items-center px-12">
                  <div>
                    <span className="text-[#97F23D] text-[10px] font-bold tracking-widest uppercase">{next.category}</span>
                    <h3
                      className="text-white font-extrabold leading-tight tracking-tight mt-2 group-hover:text-[#97F23D] transition-colors duration-300"
                      style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
                    >
                      {next.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-5 text-[#5D5D5D] group-hover:text-[#97F23D] transition-colors text-sm font-bold tracking-widest uppercase">
                      <span>View Project</span>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="border-t border-[#111] py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-extrabold text-white text-3xl leading-tight tracking-tight">
              Like what you see?<br />
              <span className="text-[#97F23D]">Let's build something together.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="/#contact" className="bg-[#97F23D] text-black font-extrabold text-sm px-10 py-4 hover:bg-white transition-colors tracking-wide">
              START A PROJECT
            </a>
            <Link href="/portfolio" className="flex items-center gap-3 text-white font-semibold text-sm hover:text-[#97F23D] transition-colors group">
              <span className="w-10 h-10 border border-[#333] flex items-center justify-center group-hover:border-[#97F23D] transition-colors">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              ALL WORK
            </Link>
          </div>
        </div>
      </div>

      {/* Left accent bar */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#97F23D] to-transparent opacity-30 pointer-events-none"></div>
    </main>
  )
}