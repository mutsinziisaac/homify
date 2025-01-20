"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      icon: Shield,
      description:
        "We uphold the highest standards of honesty and transparency in all our dealings.",
    },
    {
      title: "Customer-Centric",
      icon: Heart,
      description:
        "Our clients' needs and satisfaction are at the heart of everything we do.",
    },
    {
      title: "Innovation",
      icon: TrendingUp,
      description:
        "We continuously strive to improve and innovate in the real estate industry.",
    },
    {
      title: "Community",
      icon: Users,
      description:
        "We are committed to building and supporting thriving communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">About Homify</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Homify is a leading real estate platform dedicated to connecting
            people with their perfect homes and properties. With years of
            experience and a passion for innovation, we strive to make the
            process of buying, selling, and renting properties as seamless and
            enjoyable as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Homify, our mission is to empower individuals and families to
              find their ideal living spaces while helping property owners
              maximize the value of their investments. We believe that everyone
              deserves a place to call home, and we're committed to making that
              a reality.
            </p>
            <Button>Learn More</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-64 rounded-lg overflow-hidden"
          >
            <Image
              src="/about.jpeg?height=400&width=600"
              alt="Homify team"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion
            for real estate and innovation. If you're interested in joining the
            Homify team, we'd love to hear from you!
          </p>
          <Button size="lg">View Career Opportunities</Button>
        </motion.div>
      </div>
    </div>
  );
}
