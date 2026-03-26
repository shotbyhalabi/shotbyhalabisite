import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAboutImage } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "About | Shot By Halabi",
  description: "Learn more about the photographer behind Shot By Halabi.",
};

export default async function AboutPage() {
  const customAboutImage = await getAboutImage();
  const imageSrc = customAboutImage || "https://images.unsplash.com/photo-1554047648-433c23178c77?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-bebas text-6xl text-[#F5F5F5] uppercase tracking-wide mb-4">
          About The Photographer
        </h1>
        <div className="w-24 h-1 bg-[#D62828] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#171717] ring-1 ring-[#8C8C8C]/20 border border-[#8C8C8C]/10">
          <Image
            src={imageSrc}
            alt="Photographer behind the lens"
            fill
            className="object-cover"
            priority
            unoptimized={true}
          />
          <div className="absolute inset-0 border-4 border-[#0F0F0F] rounded-xl mix-blend-overlay pointer-events-none" />
        </div>

        <div className="space-y-8 text-[#F5F5F5]">
          <div>
            <h2 className="font-bebas text-4xl text-[#D62828] uppercase tracking-wide mb-4">
              My Philosophy
            </h2>
            <p className="text-[#8C8C8C] leading-relaxed text-lg font-light">
              Great sports photography isn't just about capturing the peak of action, it's about capturing the visceral emotion, the grueling effort, and the unyielding determination etched on the athlete's face. Every frame tells a story of preparation meeting execution.
            </p>
          </div>

          <div>
            <h2 className="font-bebas text-4xl text-[#D62828] uppercase tracking-wide mb-4">
              Experience & Coverage
            </h2>
            <p className="text-[#8C8C8C] leading-relaxed text-lg font-light mb-4">
              With experience shooting fast-paced indoor sports, I specialize in freezing action in challenging lighting environments. From high stakes volleyball rallies to the high-impact collisions of hockey and the high-flying acrobatics of basketball.
            </p>
            <ul className="list-disc list-inside text-[#8C8C8C] font-light space-y-2">
              <li>Collegiate & Professional Volleyball matches</li>
              <li>Local & Regional Hockey tournaments</li>
              <li>High-intensity Basketball games</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-[#8C8C8C]/20">
            <Link
              href="/portfolio"
              className="inline-block bg-transparent border border-[#F5F5F5] text-[#F5F5F5] px-8 py-3 rounded-full font-medium hover:bg-[#F5F5F5] hover:text-[#0F0F0F] transition uppercase tracking-widest text-sm"
            >
              See My Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
