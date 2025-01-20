"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building,
  ShoppingBag,
  Utensils,
  Warehouse,
  Hotel,
} from "lucide-react";

export default function CommercialPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const commercialTypes = [
    {
      title: "Office Spaces",
      icon: Building,
      description: "Modern workspaces for businesses of all sizes.",
    },
    {
      title: "Retail Stores",
      icon: ShoppingBag,
      description: "Prime locations for your retail business.",
    },
    {
      title: "Restaurants",
      icon: Utensils,
      description: "Ideal spots for culinary entrepreneurs.",
    },
    {
      title: "Warehouses",
      icon: Warehouse,
      description: "Spacious facilities for storage and distribution.",
    },
    {
      title: "Hotels",
      icon: Hotel,
      description: "Properties for the hospitality industry.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Commercial Real Estate Solutions
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commercialTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <type.icon
                    className={`w-12 h-12 mb-4 transition-colors duration-300 ${
                      hoveredIndex === index ? "text-primary" : "text-gray-600"
                    }`}
                  />
                  <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Homify for Commercial Real Estate?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Extensive portfolio of commercial properties",
                  "Expert guidance throughout the leasing or buying process",
                  "Tailored solutions for your business needs",
                  "Prime locations in high-traffic areas",
                  "Flexible lease terms and purchase options",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/commercial.jpeg?height=400&width=600"
                alt="Commercial building"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Find Your Next Commercial Property?
          </h3>
          <Button size="lg">Browse Commercial Listings</Button>
        </div>
      </div>
    </div>
  );
}
