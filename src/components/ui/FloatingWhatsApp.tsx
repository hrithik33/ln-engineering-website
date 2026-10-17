"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/company";

export default function FloatingWhatsApp() {
  const whatsappNumber = company.whatsapp.number || "919413638727";
  const defaultMessage = encodeURIComponent(
    "Hello LN Engineering, I would like to enquire about your stone-processing machinery."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-end">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] focus:ring-offset-[#101112] active:scale-95"
      >
        {/* Official WhatsApp Brand Icon via FaWhatsapp (20-22px) */}
        <FaWhatsapp className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white flex-shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
