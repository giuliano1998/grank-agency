"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  pricing: { label: string; price: string }[];
  featured?: boolean;
  slug: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  icon,
  pricing,
  featured = false,
  slug,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative group p-8 flex flex-col gap-5 cursor-pointer border transition-all duration-350 ${
        featured
          ? "border-white/15 bg-white/[0.02]"
          : "border-white/5 hover:border-white/15"
      } hover:-translate-y-1`}
      style={{ transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)" }}
    >
      {featured && (
        <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1">
          Most Popular
        </span>
      )}

      <div className="flex items-start justify-between">
        <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
          {number}
        </span>
        <div className="text-zinc-400 w-8 h-8 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-black uppercase tracking-tight text-white">{title}</h3>
      <p className="text-zinc-400 text-sm font-light leading-relaxed">{description}</p>

      {/* Expandable pricing */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
      >
        {expanded ? "Hide" : "View"} Pricing
        <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>▾</span>
      </button>

      {expanded && (
        <div className="border-t border-white/10 pt-4 space-y-2">
          {pricing.map((p) => (
            <div key={p.label} className="flex justify-between text-sm">
              <span className="text-zinc-400">{p.label}</span>
              <span className="text-white font-bold">{p.price}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        href={`/services#${slug}`}
        className="mt-auto text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group/link"
      >
        Explore
        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
}
