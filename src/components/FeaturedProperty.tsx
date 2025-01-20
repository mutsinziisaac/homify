import { Button } from "@/components/ui/button";

export default function FeaturedProperty() {
  return (
    <section className="relative h-[80vh] bg-gray-600 text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="home.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Discover Your Dream Home</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Explore our curated selection of premium properties, from cozy
          apartments to luxurious villas in Uganda.
        </p>
        <Button size="lg" className="w-fit">
          Explore Properties
        </Button>
      </div>
    </section>
  );
}
