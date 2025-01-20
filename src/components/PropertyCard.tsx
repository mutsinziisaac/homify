import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, DollarSign, Home, Car, Bath } from 'lucide-react'
import { apiBaseUrl, serverBaseUrl } from '@/lib/api-config.ts'
import { PropertyListItem } from '@/types'

// interface Property {
//   propertyId: number
//   userId: number
//   price: number
//   location: string
//   status: string
//   plotNumber: number | null
//   Descriptions: {
//     description1: number
//     propertyId: number
//     landType: string
//     size: string
//     houseType: string | null
//     bedRooms: number | null
//     parking: string
//     bathRooms: number | null
//     YearBuilt: number | null
//     Amentities: string | null
//   }[]
//   PropertyImages: {
//     imageId: number
//     propertyId: number
//     imagePath: string
//   }[]
// }

export default function PropertyCard({ property }: { property: PropertyListItem }) {
  const description = property.Descriptions[0]
  const image = property.Image

  return (
    <Card className="overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <img
          src={`${serverBaseUrl}/${image}` || "/placeholder.png"}
          alt={property.location}
          className="transition-transform duration-300 group-hover:scale-110 object-fit:cover h-full w-full rounded-b-lg"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {property.status}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{property.location}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{description.landType}</span>
        </div>
        <div className="flex items-center text-primary font-bold mb-2">
          <p className='font-bold'>UGX </p>
          <span>{property.price.toLocaleString()}</span>
          {property.status === 'For Rent' && <span className="text-sm text-gray-600 ml-1">/month</span>}
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {description.bedRooms && (
            <div className="flex items-center">
              <Home className="h-4 w-4 mr-1" />
              <span>{description.bedRooms} bed{description.bedRooms > 1 ? 's' : ''}</span>
            </div>
          )}
          {description.bathRooms && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{description.bathRooms} bath{description.bathRooms > 1 ? 's' : ''}</span>
            </div>
          )}
          <div className="flex items-center">
            <Car className="h-4 w-4 mr-1" />
            <span>{description.parking}</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <span>{description.size}</span>
          {description.YearBuilt && <span className="ml-2">• Built {description.YearBuilt}</span>}
        </div>
        {description.Amentities && (
          <div className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">Amenities:</span> {description.Amentities}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

