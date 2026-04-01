const services = [
  {
    name: 'Web Development',
    desc: 'Custom websites and web apps built for performance, scalability, and seamless user experience.',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: 'Software Development',
    desc: 'Scalable, enterprise-grade software solutions tailored to your business workflows and goals.',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    name: 'Digital Marketing',
    desc: 'Data-driven campaigns across all channels that grow your audience and maximize your ROI.',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    name: 'Graphic Design',
    desc: 'Striking visuals, brand identity systems, and creative assets that make your brand unforgettable.',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full bg-black py-24">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#97F23D]"></div>
            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">What We're Offering</span>
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl leading-tight">
            <span className="text-[#97F23D]">Services</span> <span className="text-white">We're Providing<br/>To Our Customers</span>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, i) => (
            <div key={service.name} className="service-card relative bg-[#101010] p-8 border border-[#1a1a1a] group hover:border-[#97F23D] transition-colors duration-300 cursor-pointer overflow-hidden">
              {/* Number bg */}
              <div className="absolute top-4 right-4 text-[80px] font-black text-[#97F23D] opacity-[0.04] leading-none select-none group-hover:opacity-[0.07] transition-opacity">
                {String(i+1).padStart(2,'0')}
              </div>

              {/* Icon */}
              <div className="service-icon mb-6 transition-all duration-300 group-hover:text-[#97F23D]">
                {service.icon}
              </div>

              {/* Name */}
              <h3 className="text-white font-extrabold text-lg mb-4 leading-snug">{service.name}</h3>

              {/* Description */}
              <p className="text-[#5D5D5D] font-medium text-sm leading-[1.75] mb-8">{service.desc}</p>

              {/* Divider */}
              <div className="border-t border-[rgba(93,93,93,0.3)]"></div>

              {/* Link */}
              <div className="mt-5 flex items-center gap-2 text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase group-hover:text-[#97F23D] transition-colors">
                <span>Learn More</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#97F23D] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Extra services row */}
        <div className="mt-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { name: 'Branding', icon: '◈' },
            { name: 'SEO Services', icon: '◉' },
            { name: 'Social Media', icon: '✦' },
            { name: 'Google Ads', icon: '⊕' },
          ].map((s, i) => (
            <div key={s.name} className="bg-[#0a0a0a] border border-[#1a1a1a] px-8 py-5 flex items-center gap-4 group hover:border-[#97F23D] transition-colors cursor-pointer">
              <span className="text-[#97F23D] text-2xl">{s.icon}</span>
              <span className="text-[#5D5D5D] font-semibold text-sm group-hover:text-white transition-colors">{s.name}</span>
              <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#97F23D" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
