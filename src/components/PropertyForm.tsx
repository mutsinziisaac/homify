import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

interface PropertyFormProps {
  property?: Property | null
  onSubmit: (property: Property) => void
  onCancel: () => void
}

export default function PropertyForm({ property, onSubmit, onCancel }: PropertyFormProps) {
  const [formData, setFormData] = useState<Property>({
    propertyId: 0,
    userId: 1, // Assuming a default user ID
    price: 0,
    location: '',
    status: '',
    plotNumber: null,
    Descriptions: [{
      description1: 0,
      propertyId: 0,
      landType: '',
      size: '',
      houseType: null,
      bedRooms: null,
      parking: '',
      bathRooms: null,
      YearBuilt: null,
      Amentities: null,
    }],
    PropertyImages: [{
      imageId: 0,
      propertyId: 0,
      imagePath: '',
    }],
  })

  useEffect(() => {
    if (property) {
      setFormData(property)
    }
  }, [property])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      Descriptions: [{ ...prev.Descriptions[0], [name]: value }],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select name="status" value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="For Sale">For Sale</SelectItem>
            <SelectItem value="For Rent">For Rent</SelectItem>
            <SelectItem value="Sold">Sold</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="landType">Land Type</Label>
        <Input
          id="landType"
          name="landType"
          value={formData.Descriptions[0].landType}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="size">Size</Label>
        <Input
          id="size"
          name="size"
          value={formData.Descriptions[0].size}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="houseType">House Type</Label>
        <Input
          id="houseType"
          name="houseType"
          value={formData.Descriptions[0].houseType || ''}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="bedRooms">Bedrooms</Label>
        <Input
          id="bedRooms"
          name="bedRooms"
          type="number"
          value={formData.Descriptions[0].bedRooms || ''}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="bathRooms">Bathrooms</Label>
        <Input
          id="bathRooms"
          name="bathRooms"
          type="number"
          value={formData.Descriptions[0].bathRooms || ''}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="parking">Parking</Label>
        <Input
          id="parking"
          name="parking"
          value={formData.Descriptions[0].parking}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="YearBuilt">Year Built</Label>
        <Input
          id="YearBuilt"
          name="YearBuilt"
          type="number"
          value={formData.Descriptions[0].YearBuilt || ''}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="Amentities">Amenities</Label>
        <Textarea
          id="Amentities"
          name="Amentities"
          value={formData.Descriptions[0].Amentities || ''}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
  <Label htmlFor="imageFiles">Upload Images</Label>
  <Input
    id="imageFiles"
    name="imageFiles"
    type="file"
    multiple
    onChange={(e) => {
      const files = Array.from(e.target.files || []);
      setFormData((prev) => ({
        ...prev,
        imageFiles: files,
      }));
    }}
  />
</div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {property ? 'Update' : 'Create'} Property
        </Button>
      </div>
    </form>
  )
}

