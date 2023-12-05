'use client'
import Hero from '@/components/Hero'
import Brand from '@/components/Brand'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brand />
      <Card>
        hello
      </Card>
    </main>
  )
}
