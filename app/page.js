'use client'
import Hero from '@/components/Hero'
import Brand from '@/components/Brand'
import Services from '@/components/Services'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brand />
      <Services />
    </main>
  )
}
