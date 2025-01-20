"use client";

import { useState, useEffect } from 'react'
import PropertyForm from './PropertyForm'
import PropertyList from './PropertyList'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { apiBaseUrl } from '@/lib/api-config'
import { PropertyFormItem, PropertyListItem } from '@/types'
import { postNewProperty, readAllProperties, updateExistingProperty } from '@/lib/api'

export default function PropertyManagement() {
  const [properties, setProperties] = useState<PropertyListItem[]>([])
  const [editingProperty, setEditingProperty] = useState<PropertyFormItem | null>(null)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const fetchData = async () => {
    try {
      const data = await readAllProperties();
      setProperties(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateProperty = (newProperty: PropertyFormItem) => {
    postNewProperty(newProperty);
    // setProperties([...properties, { ...newProperty, propertyId: Date.now() }]);

    // Call fetchData to refresh the property list
    fetchData();
    // Hide the form
    setIsFormVisible(false);
  }

  const handleUpdateProperty = async (updatedProperty: PropertyFormItem, propertyId: number) => {
    try {
      // const formData = new FormData();

      // // Add the JSON stringified property data
      // formData.append("property", JSON.stringify(updatedProperty));

      // const response = await fetch(`${apiBaseUrl}/properties/${propertyId}`, {
      //   method: "PUT",
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error(`Failed to update property. Status: ${response.status}`);
      // }

      // const data = await response.json();

      // console.log("Property updated successfully:", data);

      await updateExistingProperty(updatedProperty, propertyId);

      // Call fetchData to refresh the property list
      fetchData();
      // Hide the form
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleDeleteProperty = async (propertyId: number) => {
    try {
      const res = await fetch(`${apiBaseUrl}/properties/${propertyId}`, { method: 'DELETE' });
      const data = await res.json();
      console.log(data);
      fetchData()
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {isFormVisible || editingProperty ? (
        <PropertyForm
          property={editingProperty}
          onSubmit={(property: PropertyFormItem) => {
            if (editingProperty) {
              // Call handleUpdateProperty with additional arguments for updates
              handleUpdateProperty(property, property.propertyId);
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
