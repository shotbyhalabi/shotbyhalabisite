import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#8C8C8C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bebas text-3xl tracking-wider text-[#F5F5F5]">
              SHOT<span className="text-[#D62828]">BY</span>HALABI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">
                Home
              </Link>
              <Link href="/about" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">
                About
              </Link>
              <Link href="/portfolio" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">
                Portfolio
              </Link>
              <Link href="/contact" className="text-[#F5F5F5] hover:text-[#D62828] transition-colors text-sm uppercase tracking-wide font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="sms:+14372188681"
              className="bg-[#D62828] text-[#F5F5F5] px-6 py-2.5 rounded-full font-medium hover:bg-red-700 transition-colors uppercase tracking-wide text-sm"
            >
              Text Me
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-[#F5F5F5] hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
