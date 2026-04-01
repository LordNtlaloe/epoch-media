import Hero from '@/components/Hero'
import Attributes from '@/components/Attributes'
import About from '@/components/About'
import Marquee from '@/components/Marquee'
import VideoSection from '@/components/VideoSection'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Attributes />
      <About />
      <Marquee />
      <VideoSection />
      <Stats />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  )
}
