'use client'
import Hero from '@/components/Hero';
import Navbar from '@/Layouts/Navbar';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="font-inter">
        <Hero />
        <Services />
      </main>
    </>
  )
}
