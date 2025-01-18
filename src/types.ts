export interface Property {
    propertyId: number
    userId: number
    price: number
    location: string
    status: string
    plotNumber: number | null
    Descriptions: Description[]
    PropertyImages: { imageId: number, propertyId: number, imagePath: string }[]
}

export type PropertyListItem = {
    propertyId: number
    userId: number
    price: number
    location: string
    status: string
    plotNumber: number | null
    Descriptions: Description[]
    Image: string | null
}

export interface PropertyFormItem {
    propertyId: number
    userId: number
    price: number
    location: string
    status: string
    plotNumber: number | null
    Descriptions: Description[]
    PropertyImages: FileList | null
}

export type Description = {
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
}

interface PropertyListProps {
    properties: PropertyListItem[]
    onEdit: (property: PropertyFormItem) => void
    onDelete: (propertyId: number) => void
}