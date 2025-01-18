import { Property, PropertyFormItem, PropertyListItem } from "@/types";
import { apiBaseUrl } from "./api-config";

export const postNewProperty = async (property: PropertyFormItem) => {
    const formData = new FormData();

    if (property.PropertyImages !== null && property.PropertyImages.length > 0) {
        Array.from(property.PropertyImages).forEach(image => {
            formData.append("imageFiles", image);
        });
    }

    const propertyDataContent = {
        propertyId: property.propertyId,
        userId: property.userId,
        status: property.status,
        plotNumber: property.plotNumber,
        location: property.location,
        price: property.price,
        Descriptions: property.Descriptions
    }

    formData.append("property", JSON.stringify(propertyDataContent));

    const response = await fetch(`${apiBaseUrl}/properties`, {
        method: "post",
        body: formData
    });

    if (response.ok) {
        console.log("Property posted");
    } else {
        console.log("Failed to create property");
    }
};

export const readAllProperties = async (): Promise<PropertyListItem[]> => {
    const response = await fetch(`${apiBaseUrl}/properties`);
    if (response.ok) return (await response.json()).map((item: Property) => ({
        propertyId: item.propertyId,
        userId: item.userId,
        price: item.price,
        location: item.location,
        status: item.status,
        plotNumber: item.plotNumber,
        Descriptions: item.Descriptions,
        Image: item.PropertyImages.map(image => image.imagePath)[0],
    }));
    return [];
};

export const updateExistingProperty = async (property: PropertyFormItem, propertyId: number) => {
    const formData = new FormData();

    if (property.PropertyImages !== null && property.PropertyImages.length > 0) {
        Array.from(property.PropertyImages).forEach(image => {
            formData.append("imageFiles", image);
        });
    }

    const propertyDataContent = {
        propertyId: property.propertyId,
        userId: property.userId,
        status: property.status,
        plotNumber: property.plotNumber,
        location: property.location,
        price: property.price,
        Descriptions: property.Descriptions
    }

    formData.append("property", JSON.stringify(propertyDataContent));

    const response = await fetch(`${apiBaseUrl}/properties/${propertyId}`, {
        method: "put",
        body: formData
    });

    if (response.ok) {
        console.log("Property updated");
    } else {
        console.log("Failed to update property");
    }
};