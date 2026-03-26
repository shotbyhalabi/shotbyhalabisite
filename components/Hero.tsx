"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  images: string[];
}

export default function Hero({ images }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="h-screen bg-[#0F0F0F] w-full" />;
  }

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-[#0F0F0F]">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-[#0F0F0F] ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Main Image Contained - NO CROPPING */}
          <Image
            src={img}
            alt="Sports Photography Hero"
            fill
            className="object-contain z-10"
            priority={index === 0}
            unoptimized={true}
          />
          
          {/* Cinematic Vignette Blend */}
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle,_transparent_40%,_#0F0F0F_100%)] opacity-70" />
          
          {/* Bottom Gradient for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-[#F5F5F5] uppercase tracking-wider mb-2 leading-none drop-shadow-lg">
          Sports Photography
        </h1>
        <p className="text-[#F5F5F5] text-lg md:text-2xl font-light tracking-wide mb-8 max-w-2xl drop-shadow-md">
          Capturing the intensity of the game
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/portfolio"
            className="bg-[#D62828] text-[#F5F5F5] px-8 py-3 rounded-full font-medium hover:bg-red-700 transition uppercase tracking-wide"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-[#F5F5F5] text-[#F5F5F5] px-8 py-3 rounded-full font-medium hover:bg-[#F5F5F5] hover:text-[#0F0F0F] transition uppercase tracking-wide"
          >
            Book a Shoot
          </Link>
        </div>
      </div>
    </div>
  );
}
