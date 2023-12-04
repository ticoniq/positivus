'use client'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Brand from '@/components/Brand'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="px-5 md:px-0">
      <Hero />
      <Brand />
      <Card>
        hello
      </Card>
    </main>
  )
}
