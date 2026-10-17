import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`font-mono text-[11px] text-[#98A1AB] ${className}`}>
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center space-x-2">
              <span className="text-[#3D4348]">/</span>
              {isLast || !item.href ? (
                <span className="text-[#F5F3EF] font-semibold uppercase tracking-wider" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white uppercase tracking-wider transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
