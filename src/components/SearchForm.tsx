'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function SearchForm() {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call an API or update the state to filter properties
    console.log('Searching for:', { location, propertyType })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rental">Rental</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
    </form>
  )
}

