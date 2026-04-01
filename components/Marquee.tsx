const words = ['Web Design', '—', 'Branding', '—', 'Software Dev', '—', 'Digital Marketing', '—', 'Graphic Design', '—']

export default function Marquee() {
  const doubled = [...words, ...words]
  return (
    <div className="w-full overflow-hidden bg-black border-y border-[#111] py-6">
      <div className="flex" style={{width: 'max-content'}}>
        <div className="animate-marquee flex items-center gap-8">
          {doubled.map((word, i) => (
            <span
              key={i}
              className={`font-extrabold whitespace-nowrap select-none ${word === '—' ? 'text-[#97F23D] text-6xl' : 'text-white text-6xl md:text-7xl'}`}
              style={{lineHeight: 1.1, letterSpacing: word === '—' ? '0' : '-2px'}}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
