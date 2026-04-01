'use client'
import { useState } from 'react'

const testimonials = [
  {
    content: "Epoch Media transformed our brand from the ground up. Their strategic thinking combined with stunning design work delivered results we couldn't have imagined. Our conversion rate tripled within three months.",
    name: 'Wade Warrens',
    job: 'CEO, Momentum Brands',
    initials: 'WW',
  },
  {
    content: "The web development team at Epoch built our platform on time, on budget, and beyond expectation. The product is fast, scalable, and our users love it. We've already come back for our second project.",
    name: 'Sarah Mitchel',
    job: 'Founder, Novatech Solutions',
    initials: 'SM',
  },
  {
    content: "From our brand identity to our full digital marketing strategy, Epoch handled everything seamlessly. They feel less like an agency and more like a true extension of our team.",
    name: 'David Okafor',
    job: 'Marketing Director, PinnacleGroup',
    initials: 'DO',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="w-full bg-black py-24 overflow-hidden relative">
      {/* Decorative bg shape */}
      <div className="absolute right-0 top-0 w-[22%] h-full pointer-events-none" style={{background: 'linear-gradient(180deg, #101010 0%, #101010 60%, #000 100%)', clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'}}>
        {/* Abstract decorative lines */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-full h-[1px] bg-[#1a1a1a]" style={{top: `${15 + i * 14}%`}}></div>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-2 h-2 bg-[#97F23D]"></div>
          <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">Client Testimonials</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Avatar & quote mark */}
          <div className="flex-shrink-0 relative">
            <div className="w-[180px] h-[220px] bg-[#101010] border border-[#1f1f1f] relative overflow-hidden">
              {/* Initials avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black text-[#1a1a1a]">{t.initials}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#101010] to-transparent"></div>
            </div>
            {/* Quote icon */}
            <div className="absolute -bottom-4 left-8 w-14 h-14 bg-[#97F23D] flex items-center justify-center">
              <svg width="22" height="18" fill="white" viewBox="0 0 24 18">
                <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8 6 .6 8.4 0 10.8 0l1.2 2.4c-2 .4-3.6 1.2-4.8 2.4C6 6 5.4 7.4 5.4 9h3.6V18H0zm13.2 0V10.8c0-3.6 1.2-6.6 3.6-9C19.2.6 21.6 0 24 0l1.2 2.4c-2 .4-3.6 1.2-4.8 2.4C19.2 6 18.6 7.4 18.6 9h3.6V18H13.2z"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-[#5D5D5D] font-light text-xl md:text-2xl leading-relaxed mb-8 max-w-[700px]">
              "{t.content}"
            </p>

            <div className="flex items-end gap-6 mb-10">
              <div>
                <div className="text-white font-extrabold text-2xl">{t.name}</div>
                <div className="text-[#97F23D] font-semibold text-xs tracking-widest uppercase mt-1">{t.job}</div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${i === active ? 'w-10 h-[3px] bg-[#97F23D]' : 'w-3 h-[3px] bg-[#333] hover:bg-[#555]'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
              <div className="ml-4 flex gap-2">
                <button onClick={() => setActive(a => (a - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 border border-[#333] flex items-center justify-center text-[#5D5D5D] hover:border-[#97F23D] hover:text-[#97F23D] transition-colors">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={() => setActive(a => (a + 1) % testimonials.length)}
                  className="w-10 h-10 border border-[#333] flex items-center justify-center text-[#5D5D5D] hover:border-[#97F23D] hover:text-[#97F23D] transition-colors">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
