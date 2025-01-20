"use client";

import { useState, useEffect } from "react";
import RentalForm from "./RentalForm";
import RentalList from "./RentalList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { apiBaseUrl } from "@/lib/api-config";

interface Rental {
  id: number;
  userId: number;
  clientName: string;
  clientEmail: string;
  clientContact: string;
  clientLocation: string;
  rent: number;
  billingPeriod: string;
  due: string;
}

export default function RentalManagement() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [editingRental, setEditingRental] = useState<Rental | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Simulating API call to fetch rentals
    const fetchRentals = async () => {
      // In a real application, you would fetch data from your API here
      const mockRentals: Rental[] = [
        {
          id: 1,
          userId: 101,
          clientName: "John Doe",
          clientEmail: "john.doe@example.com",
          clientContact: "+1234567890",
          clientLocation: "123 Main Street, Cityville",
          rent: 1200.5,
          billingPeriod: "Monthly",
          due: "2025-02-01",
        },
        {
          id: 2,
          userId: 102,
          clientName: "Jane Smith",
          clientEmail: "jane.smith@example.com",
          clientContact: "+1987654321",
          clientLocation: "456 Elm Street, Townsville",
          rent: 950.0,
          billingPeriod: "Monthly",
          due: "2025-02-15",
        },
      ];
      setRentals(mockRentals);
    };

    fetchRentals();
  }, []);

  const fetchRentals = async () => {
    const res = await fetch(`${apiBaseUrl}/api/rentals/${101}`);
    const data = await res.json();
    setRentals(data);
  };

  const handleCreateRental = async (newRental: Rental) => {
    try {
      const res = await fetch(`${apiBaseUrl}/api/rentals/${101}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRental),
      });
      const data = await res.json();
      fetchRentals();
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdateRental = (updatedRental: Rental) => {
    try {
      fetch(`${apiBaseUrl}/api/rentals/${updatedRental.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRental),
      });
      fetchRentals();
      setIsFormVisible(false);
      setEditingRental(null);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteRental = (rentalId: number) => {
    try {
      fetch(`${apiBaseUrl}/api/rentals/${rentalId}`, {
        method: "DELETE",
      });
      fetchRentals();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {isFormVisible || editingRental ? (
        <RentalForm
          rental={editingRental}
          onSubmit={editingRental ? handleUpdateRental : handleCreateRental}
          onCancel={() => {
            setIsFormVisible(false);
            setEditingRental(null);
          }}
        />
      ) : (
        <>
          <Button onClick={() => setIsFormVisible(true)} className="mb-4">
            <Plus className="mr-2 h-4 w-4" /> Add New Rental
          </Button>
          <RentalList
            rentals={rentals}
            onEdit={setEditingRental}
            onDelete={handleDeleteRental}
          />
        </>
      )}
    </div>
  );
}
