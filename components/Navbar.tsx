"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#8C8C8C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bebas text-3xl tracking-wider text-[#F5F5F5]" onClick={() => setIsOpen(false)}>
              SHOT<span className="text-[#D62828]">BY</span>HALABI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">Home</Link>
              <Link href="/about" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">About</Link>
              <Link href="/portfolio" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">Portfolio</Link>
              <Link href="/contact" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="sms:+14372188681" className="bg-[#D62828] text-[#F5F5F5] px-6 py-2.5 rounded-full font-medium hover:bg-red-700 transition-colors uppercase tracking-wide text-sm">Text Me</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F5F5F5] hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-b border-[#8C8C8C]/20 px-4 pt-2 pb-6 space-y-4 shadow-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-[#F5F5F5] hover:text-[#D62828] py-2 text-lg font-medium tracking-wide uppercase">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-[#F5F5F5] hover:text-[#D62828] py-2 text-lg font-medium tracking-wide uppercase">About</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block text-[#F5F5F5] hover:text-[#D62828] py-2 text-lg font-medium tracking-wide uppercase">Portfolio</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-[#F5F5F5] hover:text-[#D62828] py-2 text-lg font-medium tracking-wide uppercase">Contact</Link>
          <div className="pt-4">
            <Link href="sms:+14372188681" onClick={() => setIsOpen(false)} className="inline-block bg-[#D62828] text-[#F5F5F5] px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors uppercase tracking-wide text-sm text-center w-full shadow-lg">Text Me</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
