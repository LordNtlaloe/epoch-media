'use client'
import { useState, useRef } from 'react'

export default function VideoSection() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    setMuted(prev => {
      if (videoRef.current) videoRef.current.muted = !prev
      return !prev
    })
  }

  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="relative w-full overflow-hidden" style={{ height: '560px' }}>

          {/* Looping background video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.75) saturate(0.85)' }}
          >
            <source src="https://videos.pexels.com/video-files/3255267/3255267-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(151,242,61,0.2) 39px, rgba(151,242,61,0.2) 40px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(151,242,61,0.1) 79px, rgba(151,242,61,0.1) 80px)' }} />

          {/* Right accent panel */}
          <div className="absolute right-0 top-0 w-[365px] h-full pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(151,242,61,0.12) 0%, rgba(151,242,61,0.04) 100%)', clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
            <div className="absolute inset-0 flex items-end justify-center pb-12 pr-8">
              <div className="text-right">
                <div className="text-[#97F23D] font-extrabold text-4xl leading-tight mb-2">Watch Our<br/>Agency Video</div>
                <div className="text-[#5D5D5D] text-sm">See what we do best</div>
              </div>
            </div>
          </div>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            className="absolute right-[14%] bottom-[20%] group"
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-white opacity-10 scale-110 group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white flex items-center justify-center">
                {muted ? (
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <line x1="23" y1="9" x2="17" y2="15"/>
                    <line x1="17" y1="9" x2="23" y2="15"/>
                  </svg>
                ) : (
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
                  </svg>
                )}
              </div>
            </div>
            <svg viewBox="0 0 180 176" className="absolute -top-6 -left-6 w-[180px] h-[176px] animate-rotate-slow pointer-events-none opacity-80">
              <path id="vCircle" d="M 90,88 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0" fill="none"/>
              <text fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="white" letterSpacing="3">
                <textPath href="#vCircle">{muted ? 'CLICK TO UNMUTE • AGENCY VIDEO • ' : 'CLICK TO MUTE • AGENCY VIDEO • '}</textPath>
              </text>
            </svg>
          </button>

          {/* Left stat badges */}
          <div className="absolute left-8 bottom-10 flex gap-4">
            {[['500+', 'Clients'], ['12+', 'Years'], ['99%', 'Rate']].map(([n, l]) => (
              <div key={l} className="bg-[rgba(0,0,0,0.75)] border border-[#222] px-5 py-3 text-center backdrop-blur-sm">
                <div className="text-[#97F23D] font-extrabold text-xl">{n}</div>
                <div className="text-[#5D5D5D] text-[10px] tracking-widest uppercase">{l}</div>
              </div>
            ))}
          </div>

          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #000)' }} />
        </div>
      </div>

    </section>
  )
}