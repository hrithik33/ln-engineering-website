import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductModel } from "@/data/products";

interface ProductCardProps {
  product: ProductModel;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const detailUrl =
    product.categorySlug === "wire-rope"
      ? "/products/wire-rope"
      : `/machines/${product.categorySlug}#${product.slug}`;

  return (
    <div
      className={`group bg-[#151719] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* Machine Image Preview — Clean, No Overlaid Badges */}
      <div>
        <div className="relative aspect-[16/10] bg-[#101112] overflow-hidden border-b border-white/10">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.tagline}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-baseline justify-between gap-2 mb-1.5">
              <h3 className="font-display text-2xl font-semibold uppercase text-white tracking-tight group-hover:text-[#F5F5F5] transition-colors">
                {product.name}
              </h3>
              <span className="font-mono text-[10px] text-[#EF4444] font-semibold tracking-wider uppercase">
                {product.categoryName}
              </span>
            </div>

            <p className="font-mono text-xs text-[#EF4444] uppercase tracking-wider mb-2 font-medium">
              {product.tagline}
            </p>

            <p className="text-xs text-[#A7ADB5] line-clamp-3 leading-relaxed mb-4 font-normal">
              {product.shortDescription}
            </p>

            {/* Quick Technical Specs Highlights */}
            <div className="space-y-2 pt-3 border-t border-white/10">
              <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider font-semibold block">
                Key Parameters:
              </span>
              <ul className="space-y-1.5">
                {product.keyHighlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="text-xs text-[#F5F5F5] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C82032] flex-shrink-0" />
                    <span className="font-mono text-[11px]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <Link
            href={detailUrl}
            className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-white inline-flex items-center gap-1 group/link transition-colors"
          >
            <span>Technical Specs</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={`/contact?machine=${encodeURIComponent(product.name)}`}
            className="px-4 py-2 bg-[#C82032] hover:bg-[#E02D40] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
