"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trees,
  Building,
  Warehouse,
  ChevronDown,
  ChevronUp,
  Home,
} from "lucide-react";

export default function LandPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const landTypes = [
    {
      title: "Residential Land",
      icon: Home,
      description: "Perfect for building your dream home.",
      details:
        "Our residential land plots are ideal for those looking to build their own homes. With various sizes available, you can find the perfect spot for your future residence.",
    },
    {
      title: "Commercial Land",
      icon: Building,
      description: "Prime locations for your business ventures.",
      details:
        "Invest in our commercial land plots to establish or expand your business. These properties are strategically located in high-traffic areas, ensuring visibility and accessibility.",
    },
    {
      title: "Agricultural Land",
      icon: Trees,
      description: "Fertile grounds for farming and cultivation.",
      details:
        "Our agricultural land offerings provide rich soil and ample space for farming enthusiasts and professional agriculturists alike. From small orchards to large-scale farms, we have options to suit your needs.",
    },
    {
      title: "Industrial Land",
      icon: Warehouse,
      description: "Spacious plots for manufacturing and warehousing.",
      details:
        "Our industrial land plots are designed to accommodate various industrial needs, from manufacturing facilities to warehouses. These properties offer the space and infrastructure necessary for your industrial operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Discover Your Ideal Land
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {landTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-primary mr-4" />
                    <h2 className="text-xl font-semibold">{type.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div
                    className="cursor-pointer text-primary flex items-center"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    {expandedIndex === index ? (
                      <>
                        <span className="mr-2">Less Info</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span className="mr-2">More Info</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </div>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600"
                    >
                      {type.details}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Why Invest in Land?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-2">
              {[
                "Appreciating asset",
                "Diverse investment options",
                "Tangible property ownership",
                "Potential for development",
              ].map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {reason}
                </motion.li>
              ))}
            </ul>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/land.jpeg?height=400&width=600"
                alt="Beautiful landscape"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg">Explore Available Land</Button>
        </div>
      </div>
    </div>
  );
}
