'use client'

import { useState, useEffect } from 'react'
import PropertyForm from './PropertyForm'
import PropertyList from './PropertyList'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { apiBaseUrl } from '@/lib/api-config'

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

  const fetchData = async () => {
    try {
      const res = await fetch(`${apiBaseUrl}/api/properties`);
      const data = await res.json();
      setProperties(data)
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {


    fetchData();
  }, []);

  const handleCreateProperty = (newProperty: Property) => {
    // Simulating API call to create a new property
    setProperties([...properties, { ...newProperty, propertyId: Date.now() }])
    setIsFormVisible(false)
  }

  const handleUpdateProperty = async (updatedProperty: Property, propertyId: number, imageFiles: File[]) => {
    try {
      const formData = new FormData();
      
      // Add the JSON stringified property data
      formData.append("property", JSON.stringify(updatedProperty));
      
      // Add the image files to the form data
      imageFiles.forEach((file) => {
        formData.append("imageFiles", file);
      });
      
      const response = await fetch(`${apiBaseUrl}/api/properties/${propertyId}`, {
        method: "PUT",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update property. Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log("Property updated successfully:", data);
      
      // Call fetchData to refresh the property list
      fetchData();
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };
  

  const handleDeleteProperty = async (propertyId: number) => {
    try {
      const res = await fetch(`${apiBaseUrl}/api/properties/${propertyId}`,{method: 'DELETE'});
      const data = await res.json();
      console.log(data);
      
      fetchData()
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
    {isFormVisible || editingProperty ? (
      <PropertyForm
        property={editingProperty}
        onSubmit={(property: Property) => {
          if (editingProperty) {
            // Call handleUpdateProperty with additional arguments for updates
            handleUpdateProperty(property, property.propertyId));
          } else {
            // Call handleCreateProperty for new properties
            handleCreateProperty(property);
          }
        }}
        onCancel={() => {
          setIsFormVisible(false);
          setEditingProperty(null);
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

