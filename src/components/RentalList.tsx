import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

interface Rental {
  rentalId: number;
  userId: number;
  clientName: string;
  clientEmail: string;
  clientContact: string;
  clientLocation: string;
  rent: number;
  billingPeriod: string;
  due: string;
}

interface RentalListProps {
  rentals: Rental[];
  onEdit: (rental: Rental) => void;
  onDelete: (rentalId: number) => void;
}

export default function RentalList({
  rentals,
  onEdit,
  onDelete,
}: RentalListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {rentals.length > 0 ? (
      rentals.map((rental) => (
        <Card key={rental.rentalId} className="overflow-hidden">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{rental.clientName}</h2>
            <p className="text-gray-600 mb-2">{rental.clientEmail}</p>
            <p className="text-gray-600 mb-2">{rental.clientContact}</p>
            <p className="text-gray-600 mb-2">{rental.clientLocation}</p>
            <p className="text-primary font-bold">
              ${rental.rent} / {rental.billingPeriod}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Due: {new Date(rental.due).toLocaleDateString()}
            </p>
          </CardContent>
          <CardFooter className="bg-gray-50 p-4 flex justify-between">
            <Button variant="outline" size="sm" onClick={() => onEdit(rental)}>
              <Pencil className="h-4 w-4 mr-2" /> Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(rental.rentalId)}
            >
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))
    ) : (
      <p className="text-center text-gray-600 col-span-1 md:col-span-2 lg:col-span-3">
        No data found.
      </p>
    )}
  </div>
  
  );
}
