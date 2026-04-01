const stats = [
  { number: '500+', label: 'Clients Served', icon: '◈' },
  { number: '12+', label: 'Years Experience', icon: '✦' },
  { number: '300+', label: 'Projects Delivered', icon: '◉' },
  { number: '99%', label: 'Client Satisfaction', icon: '⊕' },
]

export default function Stats() {
  return (
    <section className="w-full bg-[#97F23D] py-12">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-lime-950">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center py-6 px-4 group">
              <div className="text-lime-800 text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-white font-extrabold text-4xl md:text-5xl leading-none mb-2">{stat.number}</div>
              <div className="text-lime-900 text-sm font-semibold tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
