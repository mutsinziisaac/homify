'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, DollarSign, Calendar } from 'lucide-react'

export default function RentalsPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const rentalTypes = [
    { title: 'Apartments', icon: Home, description: 'Modern living spaces in the heart of the city.' },
    { title: 'Houses', icon: Home, description: 'Spacious homes for families and individuals alike.' },
    { title: 'Vacation Rentals', icon: Calendar, description: 'Short-term stays in prime locations.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Find Your Perfect Rental</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rentalTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card 
                className={`cursor-pointer transition-all ${activeIndex === index ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <CardContent className="flex flex-col items-center p-6">
                  <type.icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
                  <p className="text-center text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Homify Rentals?</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Wide selection of properties',
              'Verified listings',
              'Flexible lease terms',
              'Online rent payments',
              '24/7 customer support',
              'Maintenance request tracking'
            ].map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg">
            Start Your Rental Search
          </Button>
        </div>
      </div>
    </div>
  )
}

