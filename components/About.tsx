export default function About() {
  return (
    <section id="about" className="w-full bg-black py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-16">
        {/* Left - image area */}
        <div className="relative flex-shrink-0 w-full lg:w-[588px] h-[588px]">
          {/* Background square - Black */}
          <div className="absolute top-0 left-0 w-[190px] h-[190px] bg-[#0a0a0a] border border-[#97F23D]/20"></div>
          {/* Burgundy accent */}
          <div className="absolute bottom-0 left-0 w-14 h-14 bg-[#97F23D]"></div>

          {/* Main image frame */}
          <div className="absolute top-8 left-8 right-0 bottom-8 bg-[#0a0a0a] overflow-hidden border border-[#97F23D]/30">
            {/* Unsplash Main Image */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-500"
            />

            {/* Decorative overlay with burgundy tone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#97F23D]/20 via-transparent to-black/40 pointer-events-none"></div>

            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-3">
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

        {/* Right - text */}
        <div className="flex-1 max-w-[580px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#97F23D]"></div>
            <span className="text-white/40 text-sm font-semibold tracking-[0.2em] uppercase">About The Agency</span>
          </div>

          <h2 className="font-extrabold text-white text-4xl md:text-5xl leading-tight mb-6">
            We're Top Notch &amp; Best<br />
            <span className="text-[#97F23D]">Web Design &amp; SEO<br />Agency</span>
          </h2>

          <p className="text-[#97F23D] font-semibold text-lg mb-5 leading-relaxed">
            CAESAR BLACK is where strategy meets creativity — built for brands that want to lead, not follow.
          </p>

          <p className="text-white/50 font-medium text-[15px] leading-[1.85] mb-8">
            From pixel-perfect graphic design and robust web development to scalable software solutions, brand identity systems, and high-performance digital marketing campaigns — we bring every piece of your digital presence together under one roof. We don't just build websites; we build momentum.
          </p>

          {/* Feature list */}
          <ul className="space-y-3 mb-10">
            {['Strategic brand positioning from day one', 'Full-stack development, built to scale', 'Data-driven digital marketing campaigns', 'Dedicated account management & support'].map(item => (
              <li key={item} className="flex items-center gap-3 text-white/50 text-sm font-medium">
                <span className="w-5 h-5 bg-[#97F23D] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" fill="white" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#services" className="inline-flex items-center justify-center bg-[#97F23D] text-white font-extrabold text-sm px-12 py-4 hover:bg-[#4d0012] transition-colors tracking-wide">
            DISCOVER MORE
          </a>
        </div>
      </div>
    </section>
  )
}