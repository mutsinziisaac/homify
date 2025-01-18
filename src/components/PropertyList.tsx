import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Pencil, Trash2 } from 'lucide-react'
import { apiBaseUrl, serverBaseUrl } from '@/lib/api-config'
import { PropertyFormItem, PropertyListItem } from '@/types'

interface PropertyListProps {
  properties: PropertyListItem[]
  onEdit: (property: PropertyFormItem) => void
  onDelete: (propertyId: number) => void
}

export default function PropertyList({ properties, onEdit, onDelete }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (

        <Card key={property.propertyId} className="overflow-hidden">
          <img
            src={`${serverBaseUrl}/${property.Image}` || "/placeholder.png"}
            alt={property.location}
            className="transition-transform duration-300 group-hover:scale-110 object-fit:cover h-[400px] w-[600px] rounded-b-lg"
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
            <Button variant="outline" size="sm" onClick={() => onEdit({
              propertyId: property.propertyId,
              userId: property.userId,
              price: property.price,
              location: property.location,
              status: property.status,
              plotNumber: property.plotNumber,
              Descriptions: property.Descriptions,
              PropertyImages: null
            })}>
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

