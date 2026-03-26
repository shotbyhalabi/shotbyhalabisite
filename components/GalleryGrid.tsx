"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  if (!images || images.length === 0) {
    return (
      <div className="py-20 text-center text-[#8C8C8C] font-light tracking-wide">
        No images available for this sport currently.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
        {images.map((src, index) => (
          <div 
            key={`${src}-${index}`}
            className="relative w-full h-full overflow-hidden cursor-pointer group bg-[#0F0F0F]"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-0 animate-fade-in"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.classList.remove('opacity-0');
              }}
              unoptimized={true}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#D62828]/0 group-hover:bg-[#D62828]/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        initialIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
