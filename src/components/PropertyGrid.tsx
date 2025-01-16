import PropertyCard from './PropertyCard'

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

const properties: Property[] = [
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
        Property: null
      }
    ],
    PropertyImages: [
      {
        imageId: 1,
        propertyId: 1,
        imagePath: "/placeholder.svg?height=400&width=600"
      }
    ]
  },
  {
    propertyId: 2,
    userId: 1,
    price: 150000,
    location: "456 Oak Rd, Somewhereville, USA",
    status: "For Rent",
    plotNumber: null,
    Descriptions: [
      {
        description1: 2,
        propertyId: 2,
        landType: "Residential",
        size: "1500 sqft",
        houseType: "Apartment",
        bedRooms: 2,
        parking: "1 Parking Space",
        bathRooms: 1,
        YearBuilt: 2015,
        Amentities: "Gym, Rooftop Terrace",
        Property: null
      }
    ],
    PropertyImages: [
      {
        imageId: 2,
        propertyId: 2,
        imagePath: "/placeholder.svg?height=400&width=600"
      }
    ]
  },
  {
    propertyId: 3,
    userId: 1,
    price: 500000,
    location: "789 Pine Lane, Metropolis, USA",
    status: "For Sale",
    plotNumber: 123,
    Descriptions: [
      {
        description1: 3,
        propertyId: 3,
        landType: "Commercial",
        size: "5000 sqft",
        houseType: "Office Building",
        bedRooms: null,
        parking: "Underground Parking",
        bathRooms: 4,
        YearBuilt: 2020,
        Amentities: "Conference Rooms, Cafeteria",
        Property: null
      }
    ],
    PropertyImages: [
      {
        imageId: 3,
        propertyId: 3,
        imagePath: "/placeholder.svg?height=400&width=600"
      }
    ]
  }
]

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.propertyId} property={property} />
      ))}
    </div>
  )
}

