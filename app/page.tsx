import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import { getSportsCategories } from "@/lib/cloudinary";

export default async function Home() {
  const categories = await getSportsCategories();
  
  // Extract images from the dynamically fetched categories for the Hero slider
  const heroImages = categories
    .map((category) => category.imageSrc)
    .filter(Boolean);
    
  // If we couldn't get enough dynamic images for the hero slider, provide some fallbacks
  if (heroImages.length === 0) {
    heroImages.push(
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628892189689-53e9ea7a5525?q=80&w=2070&auto=format&fit=crop"
    );
  }

  return (
    <div>
      <Hero images={heroImages} />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#8C8C8C]/20 mt-12">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl text-[#F5F5F5] uppercase tracking-wide mb-4">
            Sports Categories
          </h2>
          <div className="w-24 h-1 bg-[#D62828] mx-auto rounded-full" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              href={category.href}
              imageSrc={category.imageSrc}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#171717] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-5xl lg:text-6xl text-[#F5F5F5] uppercase tracking-wide leading-tight mb-6">
            Need a photographer for your team or event?
          </h2>
          <p className="text-[#8C8C8C] text-lg lg:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto">
            Book a professional shoot today and ensure those pivotal moments are captured edge-to-edge.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D62828] text-[#F5F5F5] px-10 py-4 rounded-full font-medium hover:bg-red-700 transition-colors uppercase tracking-widest text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
