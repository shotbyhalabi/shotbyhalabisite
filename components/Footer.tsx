import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#8C8C8C]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start tracking-wide">
            <Link href="/" className="font-bebas text-3xl mb-4 text-[#F5F5F5]">
              SHOT<span className="text-[#D62828]">BY</span>HALABI
            </Link>
            <p className="text-[#8C8C8C] text-sm max-w-xs leading-relaxed">
              Professional sports photographer capturing the intensity and raw emotion of the game.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-sm uppercase tracking-wider font-medium">
            <h3 className="text-[#F5F5F5] mb-6 mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#8C8C8C] hover:text-[#D62828] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#8C8C8C] hover:text-[#D62828] transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-[#8C8C8C] hover:text-[#D62828] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-[#8C8C8C] hover:text-[#D62828] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-sm uppercase tracking-wider font-medium">
            <h3 className="text-[#F5F5F5] mb-6">Contact</h3>
            <ul className="space-y-4 text-[#8C8C8C]">
              <li><a href="mailto:Shotbyhalabi@gmail.com" className="hover:text-[#D62828] transition-colors">Shotbyhalabi@gmail.com</a></li>
              <li><a href="sms:+14372188681" className="hover:text-[#D62828] transition-colors">Text: (437)-218-8681</a></li>
              <li className="pt-4">
                <Link href="/contact" className="text-[#D62828] hover:text-[#F5F5F5] transition-colors font-semibold">
                  Book a Shoot ↗
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#8C8C8C]/20 flex flex-col md:flex-row justify-between items-center text-xs text-[#8C8C8C]">
          <p>&copy; {currentYear} Shot By Halabi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <p>Pictures cannot be used without explicit permission.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
