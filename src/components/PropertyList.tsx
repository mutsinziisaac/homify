import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Pencil, Trash2 } from 'lucide-react'

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

interface PropertyListProps {
  properties: Property[]
  onEdit: (property: Property) => void
  onDelete: (propertyId: number) => void
}

export default function PropertyList({ properties, onEdit, onDelete }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.propertyId} className="overflow-hidden">
          <Image
            src={property.PropertyImages[0]?.imagePath || "/placeholder.svg?height=200&width=300"}
            alt={property.location}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{property.location}</h2>
            <p className="text-gray-600 mb-2">{property.Descriptions[0]?.landType}</p>
            <p className="text-primary font-bold">${property.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-2">
              {property.Descriptions[0]?.bedRooms} beds • {property.Descriptions[0]?.bathRooms} baths • {property.Descriptions[0]?.size}
            </p>
          </CardContent>
          <CardFooter className="bg-gray-50 p-4 flex justify-between">
            <Button variant="outline" size="sm" onClick={() => onEdit(property)}>
              <Pencil className="h-4 w-4 mr-2" /> Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={() => onDelete(property.propertyId)}>
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

