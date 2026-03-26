import CategoryCard from "@/components/CategoryCard";
import { getSportsCategories } from "@/lib/cloudinary";

export const metadata = {
  title: "Portfolio | Shot By Halabi",
  description: "Browse various sports photography galleries.",
};

export default async function PortfolioHub() {
  const categories = await getSportsCategories();

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
      <div className="text-center mb-16">
        <h1 className="font-bebas text-6xl text-[#F5F5F5] uppercase tracking-wide mb-4">
          All Portfolios
        </h1>
        <div className="w-24 h-1 bg-[#D62828] mx-auto rounded-full" />
        <p className="mt-6 text-[#8C8C8C] max-w-2xl mx-auto font-light">
          Select a sport below to view the full gallery. More sports and events are added regularly.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            href={category.href}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
