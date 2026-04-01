'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative w-full min-h-screen flex items-center overflow-hidden pt-[90px]">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(245,144,13,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,144,13,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>

      {/* Right image panels */}
      <div className="absolute right-0 top-0 h-full w-[48%] flex overflow-hidden">

        {/* Left fade mask into main content */}
        <div className="absolute left-0 top-0 h-full w-[120px] z-10 pointer-events-none"
          style={{background: 'linear-gradient(to right, #000 0%, transparent 100%)'}}></div>

        {/* Left tall strip image */}
        <div className="w-[38%] h-full relative overflow-hidden" style={{clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)'}}>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80&fit=crop"
            alt="Agency team at work"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6) saturate(0.7)' }}
          />
          {/* Green accent line overlay */}
          <div className="absolute top-0 right-0 w-[2px] h-full bg-[#97F23D] opacity-30"></div>
          {/* Label */}
          <div className="absolute bottom-[12%] left-0 w-full px-5">
            <div className="w-6 h-[2px] bg-[#97F23D] mb-2"></div>
            <p className="text-[10px] text-[#97F23D] font-semibold tracking-[0.25em]">OUR TEAM</p>
          </div>
        </div>

        {/* Right column — two stacked images */}
        <div className="w-[62%] h-full flex flex-col gap-[3px] relative">

          {/* Top image — taller */}
          <div className="relative overflow-hidden" style={{height: '58%'}}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop"
              alt="Creative studio workspace"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.65) saturate(0.75)' }}
            />
            {/* Floating stat badge */}
            <div className="absolute top-6 right-6 bg-[#97F23D] px-4 py-3 flex flex-col items-center">
              <span className="text-black font-extrabold text-2xl leading-none">12+</span>
              <span className="text-black text-[9px] font-semibold tracking-widest mt-1">YEARS</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full px-5 py-4"
              style={{background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)'}}>
              <p className="text-[10px] text-[#97F23D] font-semibold tracking-[0.25em]">CREATIVE STUDIO</p>
            </div>
          </div>

          {/* Bottom image — shorter */}
          <div className="relative overflow-hidden" style={{height: '42%'}}>
            <img
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80&fit=crop"
              alt="Digital design work"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.6) saturate(0.7)' }}
            />
            {/* Floating stat badge */}
            <div className="absolute bottom-6 right-6 border border-[#97F23D] px-4 py-3 flex flex-col items-center">
              <span className="text-white font-extrabold text-2xl leading-none">98%</span>
              <span className="text-[#97F23D] text-[9px] font-semibold tracking-widest mt-1">SATISFACTION</span>
            </div>
            <div className="absolute top-0 left-0 w-full px-5 py-4"
              style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)'}}>
              <p className="text-[10px] text-[#97F23D] font-semibold tracking-[0.25em]">DIGITAL FIRST</p>
            </div>
          </div>

        </div>
      </div>

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#97F23D] to-transparent opacity-40"></div>

      {/* Social icons left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
        {['twitter','facebook','linkedin','instagram'].map(s => (
          <a key={s} href="#" aria-label={s} className="w-4 h-4 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
            <SocialIcon name={s} />
          </a>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 ml-[135px] max-w-[600px]">
        <div className="flex items-center gap-3 mb-6 animate-fade-in">
          <div className="w-10 h-[2px] bg-[#97F23D]"></div>
          <span className="text-[#97F23D] text-xs font-semibold tracking-[0.3em] uppercase">Creative Digital Agency</span>
        </div>

        <h1 className="font-extrabold text-white leading-[0.92] tracking-[-4px] mb-8 animate-fade-up"
            style={{fontSize: 'clamp(64px, 8vw, 105px)'}}>
          More than<br/>
          just a<br/>
          <span className="text-transparent" style={{WebkitTextStroke: '2px rgba(255,255,255,0.15)'}}>design</span><br/>
          agency
        </h1>

        <p className="text-[#5D5D5D] text-lg font-medium mb-10 max-w-[420px] leading-relaxed animate-fade-up" style={{animationDelay: '0.2s', opacity: 0}}>
          We craft digital experiences that define brands, accelerate growth, and leave lasting impressions.
        </p>

        <div className="flex items-center gap-6 animate-fade-up" style={{animationDelay: '0.4s', opacity: 0}}>
          <a href="#services" className="bg-[#97F23D] text-white font-extrabold text-sm px-12 py-4 hover:bg-orange-500 transition-colors tracking-wide">
            DISCOVER MORE
          </a>
          <a href="#about" className="flex items-center gap-3 text-white font-semibold text-sm hover:text-[#97F23D] transition-colors group">
            <span className="w-10 h-10 border border-[#333] flex items-center justify-center group-hover:border-[#97F23D] transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </span>
            OUR STORY
          </a>
        </div>

        {/* Phone rotated */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-[2px] h-8 bg-[#333]"></div>
          <span className="text-[#5D5D5D] text-sm font-semibold tracking-widest" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
            +1 (800) EPOCH-01
          </span>
        </div>
      </div>

      {/* Circular text badge */}
      <div className="absolute bottom-16 left-[520px] z-10">
        <div className="relative w-[130px] h-[130px]">
          <svg viewBox="0 0 130 130" className="w-full h-full animate-rotate-slow">
            <path id="circle" d="M 65,65 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none"/>
            <text fontSize="10.5" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="white" letterSpacing="2.5">
              <textPath href="#circle">DISCOVER • MORE • AGENCY • DISCOVER • MORE •</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#97F23D] flex items-center justify-center">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none" style={{background: 'linear-gradient(to bottom, transparent, #000)'}}></div>
    </section>
  )
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    twitter: <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    facebook: <svg width="10" height="16" fill="white" viewBox="0 0 10 18"><path d="M6.5 18V10h2.7l.4-3.1H6.5V5c0-.9.3-1.5 1.6-1.5H9.7V.6C9.4.6 8.4.5 7.2.5c-2.4 0-4 1.5-4 4.2V7H.5v3.1H3.2V18z"/></svg>,
    linkedin: <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    instagram: <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg>,
  }
  return icons[name] || null
}