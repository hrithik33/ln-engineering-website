import React from "react";
import { company } from "@/data/company";

interface FactoryMapProps {
  className?: string;
  compact?: boolean;
}

export default function FactoryMap({ className = "", compact = false }: FactoryMapProps) {
  // Google Maps embed URL using the verified factory address
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=LN+Machineries+Pvt+Ltd,+NH+8,+Mokhampura,+Rajsamand,+Rajasthan+313326,+India&t=&z=14&ie=UTF8&iwloc=&output=embed";

  // Verified destination link for Google Maps navigation
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=LN+Machineries+Pvt+Ltd+NH+8+Mokhampura+Rajsamand+Rajasthan+313326+India";

  return (
    <section className={`w-full ${className}`}>
      <div className="bg-[#191B1D] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Address & Facility Information (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#191B1D]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101112] border border-white/10 rounded-full text-xs">
                <span className="w-2 h-2 rounded-full bg-[#C82032] animate-pulse"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5]">
                  Manufacturing & Engineering Works
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
                  Visit Our Manufacturing Facility
                </h3>
                <p className="font-mono text-xs text-[#EF4444] uppercase tracking-wider mt-1 font-semibold">
                  Rajsamand • Rajasthan • India
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#7E8691] uppercase tracking-wider font-semibold block">
                    Factory & Head Office Address
                  </span>
                  <p className="text-white font-medium text-sm mt-0.5 leading-relaxed">
                    {company.legalName} / {company.name}
                  </p>
                  <p className="text-[#A7ADB5] mt-0.5 leading-relaxed">
                    N. H. 8, Mokhampura, Rajsamand (Udaipur), Rajasthan 313326, India.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="font-mono text-[10px] text-[#7E8691] uppercase tracking-wider font-semibold block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${company.phones[0].number}`}
                      className="text-white hover:text-[#C82032] font-mono text-xs font-semibold transition-colors block mt-0.5"
                    >
                      {company.phones[0].display}
                    </a>
                    <a
                      href={`tel:${company.phones[1].number}`}
                      className="text-[#A7ADB5] hover:text-white font-mono text-xs transition-colors block"
                    >
                      {company.phones[1].display}
                    </a>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#7E8691] uppercase tracking-wider font-semibold block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${company.emails[0].address}`}
                      className="text-white hover:underline text-xs block mt-0.5"
                    >
                      {company.emails[0].address}
                    </a>
                    <a
                      href={`mailto:${company.emails[1].address}`}
                      className="text-[#A7ADB5] hover:underline text-xs block"
                    >
                      {company.emails[1].address}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C82032] hover:bg-[#E02D40] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Get Directions &rarr;</span>
              </a>

              <a
                href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
                  "Hello LN Engineering, I would like to schedule a visit to your Rajsamand manufacturing facility."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#101112] hover:bg-white/10 text-[#25D366] text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/10 transition-colors"
              >
                <span>Plan a Visit via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Responsive Google Map Iframe (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#101112] border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden">
            <iframe
              src={mapEmbedUrl}
              title="LN Engineering Manufacturing Facility Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[340px] sm:min-h-[420px] filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
            {/* Top-right map watermark badge */}
            <div className="absolute top-3 right-3 bg-[#101112]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-white pointer-events-none">
              <span className="text-[#EF4444] font-bold">●</span> Rajsamand Industrial Belt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
