import { getImagesBySport } from "@/lib/cloudinary";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ sport: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sport = (await params).sport;
  const capitalizedSport = sport.charAt(0).toUpperCase() + sport.slice(1);
  return {
    title: `${capitalizedSport} Photography | Shot By Halabi`,
    description: `View the ${capitalizedSport} sports photography portfolio by Shot By Halabi.`,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const sport = (await params).sport;
  const capitalizedSport = sport.charAt(0).toUpperCase() + sport.slice(1);
  
  // Temporarily falling back to placeholder images if Cloudinary list is empty or fails
  // This ensures the site tests well before the user properly sets up Cloudinary tags
  const cloudinaryImages = await getImagesBySport(sport);
  const displayImages = cloudinaryImages.length > 0 ? cloudinaryImages : getDefaultPlaceholderImages(sport);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-bebas text-6xl md:text-8xl text-[#F5F5F5] uppercase tracking-wide text-center">
          {capitalizedSport}
        </h1>
        <div className="w-32 h-2 bg-[#D62828] mt-4 mb-4" />
        
        <Link 
          href="/portfolio" 
          className="text-[#8C8C8C] hover:text-[#D62828] transition-colors flex items-center gap-2 mt-4 uppercase text-sm font-medium tracking-widest"
        >
          &larr; Back to all sports
        </Link>
      </div>

      <GalleryGrid images={displayImages} />
    </div>
  );
}

function getDefaultPlaceholderImages(sport: string): string[] {
  // Return different Unsplash placeholders based on requested sport
  const sportLower = sport.toLowerCase();
  if (sportLower === 'volleyball') {
    return [
      "https://images.unsplash.com/photo-1628892189689-53e9ea7a5525?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop",
    ];
  } else if (sportLower === 'hockey') {
    return [
      "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1654877397732-fc3d17d59b0d?q=80&w=1000&auto=format&fit=crop",
    ];
  } else if (sportLower === 'basketball') {
    return [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1000&auto=format&fit=crop",
    ];
  }
  
  // Default generic fallback
  return [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1444490892978-7d87bc783a6c?q=80&w=1000&auto=format&fit=crop",
  ];
}
