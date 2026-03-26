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
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 px-2">
        {images.map((src, index) => (
          <div 
            key={`${src}-${index}`}
            className="relative w-full overflow-hidden cursor-pointer group bg-[#111] mb-4 break-inside-avoid shadow-lg rounded-sm"
            onClick={() => openLightbox(index)}
          >
            {/* Using standard img for native masonry aspect ratio fluid sizing */}
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto block object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-0 animate-fade-in pointer-events-none select-none"
              loading="lazy"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.classList.remove('opacity-0');
              }}
            />
            <div className="absolute inset-0 bg-[#0F0F0F]/0 group-hover:bg-black/20 transition-colors duration-300" />
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
