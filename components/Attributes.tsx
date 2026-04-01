const attributes = [
  {
    title: 'Creative Agency',
    subtitle: 'Bold ideas, flawless execution',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80&fit=crop',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Quality Work',
    subtitle: 'Crafted with precision & care',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: 'Professional Team',
    subtitle: 'Experts who deliver results',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Strategic Thinking',
    subtitle: 'Data-driven, future-focused',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
]

export default function Attributes() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-[1280px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {attributes.map((attr, i) => (
          <div
            key={attr.title}
            className="relative h-[360px] overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              src={attr.image}
              alt={attr.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'brightness(0.45) saturate(0.7)' }}
            />

            {/* Diagonal grid overlay */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #97F23D 0px, #97F23D 1px, transparent 1px, transparent 14px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Dark gradient — bottom heavy */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Top-left number */}
            <div className="absolute top-7 left-7 text-[#97F23D] text-5xl font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 select-none">
              {String(i + 1).padStart(2, '0')}
            </div>

            {/* Top-right geometric accent */}
            <div className="absolute top-6 right-6 w-14 h-14 border border-white/10 rotate-45 group-hover:rotate-[75deg] transition-transform duration-700" />
            <div className="absolute top-[26px] right-[26px] w-7 h-7 bg-[#97F23D] rotate-45 group-hover:scale-110 transition-transform duration-500" />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 px-7 py-6">
              <p className="text-[#97F23D] text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">
                {attr.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-extrabold text-xl tracking-tight">{attr.title}</h3>
                <div className="w-11 h-11 bg-[#97F23D] flex items-center justify-center flex-shrink-0">
                  {attr.icon}
                </div>
              </div>
            </div>

            {/* Bottom hover accent line */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#97F23D] group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}