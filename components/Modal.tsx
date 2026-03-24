"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  metrics: { label: string; value: string }[];
}

interface ModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#0a0a0a] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-[#111]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors text-lg font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{item.client}</p>
                </div>
              </div>

              <p className="text-gray-300 font-light text-sm leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {item.metrics.map((m) => (
                  <div key={m.label} className="border border-white/10 p-4 text-center">
                    <p className="text-2xl font-black text-white">{m.value}</p>
                    <p className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={onClose}
                className="inline-block px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors"
              >
                I Want Results Like These →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
