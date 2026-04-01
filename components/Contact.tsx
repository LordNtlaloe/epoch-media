'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Thanks! We\'ll be in touch within 24 hours.')
  }

  return (
    <section id="contact" className="w-full bg-black py-24 relative overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#97F23D] to-transparent opacity-30"></div>

      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1 max-w-[520px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#97F23D]"></div>
              <span className="text-[#5D5D5D] text-sm font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
            </div>
            <h2 className="font-extrabold text-white text-4xl md:text-5xl leading-tight mb-6">
              Let's Build Something<br/>
              <span className="text-[#97F23D]">Great Together</span>
            </h2>
            <p className="text-[#5D5D5D] text-base leading-relaxed mb-10">
              Whether you have a project in mind, need a quote, or just want to say hello — we'd love to hear from you. Our team responds within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@epochmedia.co', icon: '✉' },
                { label: 'Phone', value: '+1 (800) EPOCH-01', icon: '☎' },
                { label: 'Location', value: 'Toronto, Canada', icon: '◎' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#101010] border border-[#1f1f1f] flex items-center justify-center text-[#97F23D] text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-white font-semibold text-base">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex-1 w-full bg-[#101010] border border-[#1f1f1f] p-10">
            <h3 className="text-white font-extrabold text-xl mb-8 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#97F23D]"></span>
              Send Us A Message
            </h3>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase block mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-black border border-[#222] text-white px-4 py-3 text-sm placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase block mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-black border border-[#222] text-white px-4 py-3 text-sm placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase block mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-black border border-[#222] text-white px-4 py-3 text-sm outline-none focus:border-[#97F23D] transition-colors font-medium appearance-none"
                >
                  <option value="" disabled>Select a service...</option>
                  <option>Graphic Design</option>
                  <option>Web Development</option>
                  <option>Software Development</option>
                  <option>Branding</option>
                  <option>Digital Marketing</option>
                  <option>SEO Services</option>
                </select>
              </div>

              <div>
                <label className="text-[#5D5D5D] text-xs font-semibold tracking-widest uppercase block mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full bg-black border border-[#222] text-white px-4 py-3 text-sm placeholder-[#333] outline-none focus:border-[#97F23D] transition-colors font-medium resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#97F23D] text-white font-extrabold text-sm py-4 hover:bg-orange-500 transition-colors tracking-widest uppercase"
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
