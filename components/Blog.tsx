const posts = [
  {
    date: '12 Mar',
    category: 'Design',
    comments: '8 Comments',
    title: 'The Psychology of Color in Brand Identity Design',
    tag: 'Graphic Design',
  },
  {
    date: '24 Feb',
    category: 'Dev',
    comments: '14 Comments',
    title: 'Why Next.js is Our Go-To Framework for Client Projects',
    tag: 'Web Development',
  },
  {
    date: '01 Mar',
    category: 'Marketing',
    comments: '5 Comments',
    title: 'How to Build a Digital Marketing Funnel That Actually Converts',
    tag: 'Digital Marketing',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-black py-24">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#97F23D]"></div>
            <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">Our Recent Posts</span>
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl leading-tight">
            <span className="text-white">Our Latest </span>
            <span className="text-[#97F23D]">News &amp; Articles<br/>From The Blog</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <article key={post.title} className="blog-card group cursor-pointer">
              {/* Image area */}
              <div className="relative h-[260px] overflow-hidden bg-[#101010] mb-6">
                {/* Abstract image placeholder */}
                <div className="blog-image absolute inset-0 transition-transform duration-500"
                  style={{background: `linear-gradient(${135 + i * 25}deg, #1a1a1a, #0d0d0d)`, mixBlendMode: 'luminosity'}}>
                  <div className="absolute inset-0 opacity-15"
                    style={{backgroundImage: `radial-gradient(circle, rgba(245,144,13,0.4) 1px, transparent 1px)`, backgroundSize: '30px 30px'}}></div>
                  {/* Category icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    {i === 0 && <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="#97F23D" strokeWidth={0.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>}
                    {i === 1 && <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="#97F23D" strokeWidth={0.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>}
                    {i === 2 && <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="#97F23D" strokeWidth={0.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282" /></svg>}
                  </div>
                </div>

                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-white text-black font-bold text-xs px-3 py-2 uppercase tracking-wide z-10">
                  {post.date}
                </div>

                {/* Tag overlay */}
                <div className="absolute bottom-4 left-4 bg-[#97F23D] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {post.tag}
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[2px] bg-[#97F23D]"></div>
                <span className="text-[#5D5D5D] text-sm font-medium">{post.category}</span>
                <span className="text-[#5D5D5D] text-sm">·</span>
                <span className="text-[#5D5D5D] text-sm font-medium">{post.comments}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-extrabold text-xl leading-snug mb-4 group-hover:text-[#97F23D] transition-colors">
                {post.title}
              </h3>

              {/* Divider */}
              <div className="border-t border-[rgba(93,93,93,0.3)] pt-4">
                <span className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#97F23D] transition-colors">
                  Read More
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
