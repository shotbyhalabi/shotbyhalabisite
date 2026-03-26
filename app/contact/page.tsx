import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shot By Halabi",
  description: "Book a sports photography shoot with Shot By Halabi.",
};

export default function ContactPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="font-bebas text-6xl lg:text-7xl text-[#F5F5F5] uppercase tracking-wide mb-4">
          Need a photographer for your team or event?
        </h1>
        <div className="w-24 h-1 bg-[#D62828] mx-auto rounded-full" />
        <p className="mt-6 text-[#8C8C8C] max-w-2xl mx-auto font-light text-lg">
          Reach out today to discuss availability and rates. Let's capture the defining moments of your team's season.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pb-12">
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h3 className="text-[#8C8C8C] text-sm font-semibold uppercase tracking-widest mb-4">
              Direct Contact
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:Shotbyhalabi@gmail.com" 
                className="flex items-center gap-3 text-[#F5F5F5] hover:text-[#D62828] transition-colors font-medium text-lg"
              >
                <svg className="w-6 h-6 text-[#D62828]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Shotbyhalabi@gmail.com
              </a>
              <a 
                href="sms:+14372188681" 
                className="flex items-center gap-3 text-[#F5F5F5] hover:text-[#D62828] transition-colors font-medium text-lg"
              >
                <svg className="w-6 h-6 text-[#D62828]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text: (437)-218-8681
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#8C8C8C] text-sm font-semibold uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <p className="text-[#F5F5F5] font-light">
              Available for tournaments, media days, and individual coverage primarily in the Greater Toronto Area. Travel requests evaluated case-by-case.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 bg-[#171717] p-8 md:p-12 rounded-xl ring-1 ring-[#8C8C8C]/20 shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
