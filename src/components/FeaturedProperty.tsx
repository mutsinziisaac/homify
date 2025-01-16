import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function FeaturedProperty() {
  return (
    <section className="relative h-[70vh] bg-gray-900 text-white overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Luxury Villa"
        fill
        style={{ objectFit: 'cover' }}
        className="mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Discover Your Dream Home</h1>
        <p className="text-xl mb-8 max-w-2xl">Explore our curated selection of premium properties, from cozy apartments to luxurious villas.</p>
        <Button size="lg" className="w-fit">Explore Properties</Button>
      </div>
    </section>
  )
}

