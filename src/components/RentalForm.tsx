import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Rental {
  id: number
  userId: number
  clientName: string
  clientEmail: string
  clientContact: string
  clientLocation: string
  rent: number
  billingPeriod: string
  due: string
}

interface RentalFormProps {
  rental?: Rental | null
  onSubmit: (rental: Rental) => void
  onCancel: () => void
}

export default function RentalForm({ rental, onSubmit, onCancel }: RentalFormProps) {
  const [formData, setFormData] = useState<Rental>({
    id: 0,
    userId: 0,
    clientName: '',
    clientEmail: '',
    clientContact: '',
    clientLocation: '',
    rent: 0,
    billingPeriod: 'Monthly',
    due: ''
  })

  useEffect(() => {
    if (rental) {
      setFormData(rental)
    }
  }, [rental])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="clientName">Client Name</Label>
        <Input
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="clientEmail">Client Email</Label>
        <Input
          id="clientEmail"
          name="clientEmail"
          type="email"
          value={formData.clientEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="clientContact">Client Contact</Label>
        <Input
          id="clientContact"
          name="clientContact"
          value={formData.clientContact}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="clientLocation">Client Location</Label>
        <Input
          id="clientLocation"
          name="clientLocation"
          value={formData.clientLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="rent">Rent</Label>
        <Input
          id="rent"
          name="rent"
          type="number"
          step="0.01"
          value={formData.rent}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="billingPeriod">Billing Period</Label>
        <Select 
          name="billingPeriod" 
          value={formData.billingPeriod} 
          onValueChange={(value) => setFormData(prev => ({ ...prev, billingPeriod: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select billing period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Weekly">Weekly</SelectItem>
            <SelectItem value="Monthly">Monthly</SelectItem>
            <SelectItem value="Quarterly">Quarterly</SelectItem>
            <SelectItem value="Yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="due">Due Date</Label>
        <Input
          id="due"
          name="due"
          type="date"
          value={formData.due}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {rental ? 'Update' : 'Create'} Rental
        </Button>
      </div>
    </form>
  )
}

