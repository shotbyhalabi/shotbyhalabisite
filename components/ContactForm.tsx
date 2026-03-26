"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#0F0F0F] border border-[#8C8C8C]/30 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
        <svg className="w-16 h-16 text-green-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-bebas text-[#F5F5F5] tracking-wide mb-2">Message Sent!</h3>
        <p className="text-[#8C8C8C]">We'll get back to you as soon as possible.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#D62828] hover:text-white transition-colors underline uppercase text-sm tracking-widest font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/Shotbyhalabi@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Disable Captcha for smoother UX, can be re-enabled if spam is an issue */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Inquiry from Shot By Halabi" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[#F5F5F5] text-sm uppercase font-medium tracking-wide mb-2">
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-[#0F0F0F] border border-[#8C8C8C]/50 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[#F5F5F5] text-sm uppercase font-medium tracking-wide mb-2">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-[#0F0F0F] border border-[#8C8C8C]/50 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-[#F5F5F5] text-sm uppercase font-medium tracking-wide mb-2">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-[#0F0F0F] border border-[#8C8C8C]/50 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-colors"
            placeholder="(437)-218-8681"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-[#F5F5F5] text-sm uppercase font-medium tracking-wide mb-2">
            TEAM / ORGANIZATION
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full bg-[#0F0F0F] border border-[#8C8C8C]/50 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-colors"
            placeholder="Toronto Tigers"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sport" className="block text-[#F5F5F5] text-sm uppercase font-medium tracking-wide mb-2">
          SPORT / EVENT TYPE
        </label>
        <input
          type="text"
          id="sport"
          name="sport"
          required
          className="w-full bg-[#0F0F0F] border border-[#8C8C8C]/50 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-colors"
          placeholder="e.g. Volleyball Tournament, Team Headshots"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[#F5F5F5] text-sm uppercase font-medium tracking-wide mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-[#0F0F0F] border border-[#8C8C8C]/50 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-colors resize-none"
          placeholder="Tell us about the event..."
        ></textarea>
      </div>

      {status === "error" && (
        <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
          There was an error sending your message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#D62828] text-white font-medium uppercase tracking-widest py-4 rounded-md hover:bg-red-700 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
