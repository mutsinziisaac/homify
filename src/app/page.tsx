import PropertyGrid from "@/components/PropertyGrid";
import FeaturedProperty from "@/components/FeaturedProperty";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <FeaturedProperty />
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Discover Your Dream Property
          </h2>
          <PropertyGrid />
        </section>
      </main>
    </div>
  );
}
