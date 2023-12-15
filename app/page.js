'use client'
import Navbar from '@/Layouts/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Price from '@/components/Price';
import Work from '@/components/Work';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="font-inter">
        <Hero />
        <Services />
        <Price />
        <Work />
        <Testimonial />
        <Footer />
      </main>
    </>
  )
}
