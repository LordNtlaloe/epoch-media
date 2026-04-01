'use client'
import { JSX, useState } from 'react'
import Image from 'next/image'

const quickLinks = ['Contact Us', 'About Us', 'Services', 'Hiring', 'Our Blog']
const services = ['Website Development', 'SEO Services', 'Social Media Marketing', 'Google Ads Management', 'Graphic Design']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="w-full relative overflow-hidden" style={{ background: '#101010' }}>
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #97F23D 0, #97F23D 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 pt-16 pb-0">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-14 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/epoch-word-logo.png" alt='epoch media logo' width={180} height={30} />

          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {['twitter', 'facebook', 'linkedin', 'instagram'].map(s => (
              <a key={s} href="#" aria-label={s}
                className="w-14 h-14 bg-black flex items-center justify-center hover:bg-[#97F23D] transition-colors duration-300 group">
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">
          {/* CTA left */}
          <div className="lg:col-span-2">
            <p className="text-[#5D5D5D] text-2xl font-normal mb-3">Let's start working together</p>
            <a href="mailto:hello@epochmedia.co" className="text-white font-extrabold text-4xl lg:text-5xl leading-tight hover:text-[#97F23D] transition-colors block mb-6 break-all">
              hello@epochmedia.co
            </a>
            <p className="text-[#5D5D5D] text-sm font-medium max-w-xs leading-relaxed">
              Ready to grow your brand? Drop us a line and one of our strategists will be in touch within 24 hours.
            </p>
            <p className="text-[#5D5D5D] text-base mt-6">© Copyright 2024 by Epoch Media</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-extrabold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#97F23D]"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-[#5D5D5D] text-base font-normal hover:text-[#97F23D] transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#97F23D] group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-white font-extrabold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#97F23D]"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <a href="#" className="text-[#5D5D5D] text-base font-normal hover:text-[#97F23D] transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#97F23D] group-hover:w-4 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="pb-14 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <h4 className="text-white font-extrabold text-lg mb-1">Stay in the loop</h4>
            <p className="text-[#5D5D5D] text-sm">Get agency insights, design tips, and marketing news — straight to your inbox.</p>
          </div>
          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email to subscribe"
              className="bg-white text-[#5D5D5D] text-base px-6 py-4 w-full lg:w-[300px] outline-none placeholder-[#5D5D5D] font-normal"
            />
            <button className="bg-[#97F23D] text-white font-extrabold text-sm px-8 py-4 hover:bg-orange-500 transition-colors whitespace-nowrap tracking-wide">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(93,93,93,0.3)]"></div>

        {/* Bottom links */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-center gap-4">
          {['Privacy Policy', 'Epoch Media', 'Terms & Conditions'].map((item, i) => (
            <div key={item} className="flex items-center gap-4">
              {i > 0 && <span className="w-1 h-1 bg-[#5D5D5D] rounded-full hidden md:block"></span>}
              <a href="#" className="text-[#5D5D5D] text-base font-normal hover:text-[#97F23D] transition-colors">{item}</a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    twitter: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    facebook: <svg width="12" height="20" fill="white" viewBox="0 0 10 18"><path d="M6.5 18V10h2.7l.4-3.1H6.5V5c0-.9.3-1.5 1.6-1.5H9.7V.6C9.4.6 8.4.5 7.2.5c-2.4 0-4 1.5-4 4.2V7H.5v3.1H3.2V18z" /></svg>,
    linkedin: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    instagram: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="white" /></svg>,
  }
  return icons[name] || null
}
