"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Swipe left
    if (distance > 50) handleNext();
    // Swipe right
    if (distance < -50) handlePrev();

    setTouchStart(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F]/95 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#F5F5F5] hover:text-[#D62828] transition-colors z-50"
        aria-label="Close Lightbox"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 text-[#F5F5F5] hover:text-[#D62828] transition-colors z-50 p-2 hidden sm:block"
        aria-label="Previous Image"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto flex items-center justify-center p-4 outline-none select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onContextMenu={(e) => e.preventDefault()}
        style={{ WebkitTouchCallout: 'none' }}
        tabIndex={0}
      >
        {images.length > 0 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              fill
              className="object-contain pointer-events-none select-none"
              unoptimized={true}
              priority
            />
          </div>
        )}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 text-[#F5F5F5] hover:text-[#D62828] transition-colors z-50 p-2 hidden sm:block"
        aria-label="Next Image"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#8C8C8C] font-mono text-sm tracking-widest z-50">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
