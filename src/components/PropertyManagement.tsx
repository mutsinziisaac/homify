'use client'

import { useState, useEffect } from 'react'
import PropertyForm from './PropertyForm'
import PropertyList from './PropertyList'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface Property {
  propertyId: number
  userId: number
  price: number
  location: string
  status: string
  plotNumber: number | null
  Descriptions: {
    description1: number
    propertyId: number
    landType: string
    size: string
    houseType: string | null
    bedRooms: number | null
    parking: string
    bathRooms: number | null
    YearBuilt: number | null
    Amentities: string | null
  }[]
  PropertyImages: {
    imageId: number
    propertyId: number
    imagePath: string
  }[]
}

export default function PropertyManagement() {
  const [properties, setProperties] = useState<Property[]>([])
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [isFormVisible, setIsFormVisible] = useState(false)

  useEffect(() => {
    // Simulating API call to fetch properties
    const fetchProperties = async () => {
      // In a real application, you would fetch data from your API here
      const mockProperties: Property[] = [
        {
          propertyId: 1,
          userId: 1,
          price: 250000,
          location: "123 Main St, Anytown, USA",
          status: "For Sale",
          plotNumber: null,
          Descriptions: [
            {
              description1: 1,
              propertyId: 1,
              landType: "Residential",
              size: "2000 sqft",
              houseType: "Single Family",
              bedRooms: 3,
              parking: "2 Car Garage",
              bathRooms: 2,
              YearBuilt: 2010,
              Amentities: "Pool, Garden",
            }
          ],
          PropertyImages: [
            {
              imageId: 1,
              propertyId: 1,
              imagePath: "/placeholder.svg?height=200&width=300"
            }
          ]
        },
        // Add more mock properties as needed
      ]
      setProperties(mockProperties)
    }

    fetchProperties()
  }, [])

  const handleCreateProperty = (newProperty: Property) => {
    // Simulating API call to create a new property
    setProperties([...properties, { ...newProperty, propertyId: Date.now() }])
    setIsFormVisible(false)
  }

  const handleUpdateProperty = (updatedProperty: Property) => {
    // Simulating API call to update a property
    setProperties(properties.map(p => p.propertyId === updatedProperty.propertyId ? updatedProperty : p))
    setEditingProperty(null)
  }

  const handleDeleteProperty = (propertyId: number) => {
    // Simulating API call to delete a property
    setProperties(properties.filter(p => p.propertyId !== propertyId))
  }

  return (
    <div>
      {isFormVisible || editingProperty ? (
        <PropertyForm
          property={editingProperty}
          onSubmit={editingProperty ? handleUpdateProperty : handleCreateProperty}
          onCancel={() => {
            setIsFormVisible(false)
            setEditingProperty(null)
          }}
        />
      ) : (
        <>
          <Button onClick={() => setIsFormVisible(true)} className="mb-4">
            <Plus className="mr-2 h-4 w-4" /> Add New Property
          </Button>
          <PropertyList
            properties={properties}
            onEdit={setEditingProperty}
            onDelete={handleDeleteProperty}
          />
        </>
      )}
    </div>
  )
}

