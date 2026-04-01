'use client'
import Image from 'next/image'
import { useState } from 'react'

const navItems = ['Home', 'About', 'Services', 'Blog', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[90px] flex items-center px-8 md:px-20" style={{background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.04)'}}>
      {/* Logo */}
      <div className="flex items-center gap-2 mr-auto">
        <Image src="/epoch-word-logo.png" alt='epoch media logo' width={120} height={30}/>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-10">
        {navItems.map((item, i) => (
          <li key={item}>
            <a
              href={`/${item.toLowerCase()}`}
              className="nav-item text-white font-semibold text-[15px] hover:text-[#97F23D] transition-colors relative pb-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="hidden md:flex ml-12 items-center justify-center bg-[#97F23D] text-white font-extrabold text-sm px-7 py-3 hover:bg-orange-500 transition-colors" style={{borderRadius: '0'}}>
        GET STARTED
      </a>

      {/* Mobile hamburger */}
      <button className="md:hidden text-white ml-4" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="w-6 h-[2px] bg-white mb-1"></div>
        <div className="w-6 h-[2px] bg-white mb-1"></div>
        <div className="w-4 h-[2px] bg-white"></div>
      </button>

      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-black border-t border-[#222] md:hidden">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block px-8 py-4 text-white font-semibold border-b border-[#111] hover:text-[#97F23D]" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
