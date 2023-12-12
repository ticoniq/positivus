'use client'
import Navbar from '@/Layouts/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Price from '@/components/Price';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="font-inter">
        <Hero />
        <Services />
        <Price />
        <Work />
      </main>
    </>
  )
}
