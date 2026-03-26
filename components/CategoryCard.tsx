import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

export default function CategoryCard({ title, imageSrc, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative block w-full aspect-[4/5] overflow-hidden bg-[#0F0F0F] rounded-lg">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        unoptimized={true}
      />
      
      {/* Gradient overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      
      <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
        <h3 className="font-bebas text-4xl text-[#F5F5F5] uppercase tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-[#D62828] font-medium text-sm sm:text-base uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          View Gallery &rarr;
        </p>
      </div>
    </Link>
  );
}
