"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#0F0F0F]">
      {/* Background Texture/Grain for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl">
        <div className="mb-4 animate-fade-in-down">
          <span className="text-[#D62828] font-medium uppercase tracking-[0.6em] text-[10px] md:text-xs">
            Photography & Creative Studio
          </span>
        </div>
        
        <div className="relative mb-12">
          <h1 className="font-bebas text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.8] text-[#F5F5F5] uppercase tracking-tighter drop-shadow-2xl">
            SHOT<span className="text-[#D62828]">BY</span>HALABI
          </h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#D62828]/50" />
          
          {/* Mobile Shout - Only visible on small screens */}
          <div className="lg:hidden mt-8 opacity-40">
            <p className="text-[#F5F5F5] text-[8px] tracking-[0.3em] uppercase font-medium">
              Designed & Built by <span className="text-[#D62828]">Sterling Web</span>
            </p>
          </div>
        </div>

        <p className="text-[#8C8C8C] text-lg md:text-2xl font-light tracking-[0.15em] mb-12 max-w-2xl lowercase italic">
          capturing the intensity of the game
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
          <Link
            href="/portfolio"
            className="group relative overflow-hidden bg-[#D62828] text-[#F5F5F5] px-10 py-4 rounded-full font-medium transition-all hover:pr-14 uppercase tracking-widest text-sm"
          >
            <span className="relative z-10 transition-all">View Portfolio</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              &rarr;
            </span>
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-[#8C8C8C]/40 text-[#F5F5F5] px-10 py-4 rounded-full font-medium hover:bg-[#F5F5F5] hover:text-[#0F0F0F] transition-all uppercase tracking-widest text-sm hover:border-[#F5F5F5]"
          >
            Book a Shoot
          </Link>
        </div>
      </div>

      {/* Social / Scroll hint elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-[#8C8C8C] text-[10px] tracking-[0.3em] uppercase">
            <a href="https://www.instagram.com/shotbyhalabi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D62828] cursor-pointer transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@shotbyhalabi" target="_blank" rel="noopener noreferrer" className="hover:text-[#D62828] cursor-pointer transition-colors">TikTok</a>
          </div>
          <div className="pt-4 border-t border-[#8C8C8C]/20">
            <p className="text-[#8C8C8C]/40 text-[9px] tracking-[0.2em] font-medium uppercase">
              Designed & Built by <span className="text-[#F5F5F5]/60 hover:text-[#D62828] transition-colors cursor-default">Sterling Web</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 text-[#8C8C8C] text-[10px] tracking-[0.3em] uppercase vertical-text">
        <div className="w-[1px] h-12 bg-[#8C8C8C]/30" />
        <span>Scroll to Explore</span>
      </div>
    </div>
  );
}
