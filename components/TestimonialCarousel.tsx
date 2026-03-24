"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "GRank completely transformed how we reach brokers. Our e-blast open rates went from 12% to 34% in 60 days. Nothing short of exceptional.",
    name: "Carlos Mena",
    role: "VP of Sales",
    company: "Fortune International Group",
  },
  {
    quote:
      "We launched a pre-construction campaign with GRank and generated 320 qualified leads in the first month. Their Meta ads precision is unmatched.",
    name: "Daniela Ruiz",
    role: "Marketing Director",
    company: "One Metropica",
  },
  {
    quote:
      "The landing page they built for us doubled our lead conversion rate. Clean, fast, and on-brand with every detail of our luxury positioning.",
    name: "Matthew Torres",
    role: "Development Manager",
    company: "Icon Beach Residences",
  },
  {
    quote:
      "GRank's CRM automation saved us 25 hours per month and our broker response rate jumped 40%. The ROI is crystal clear.",
    name: "Sofia Morales",
    role: "Director of Operations",
    company: "Related Group",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const t = testimonials[index];

  return (
    <div
      className="relative max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[320px] px-6 py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative opening quote — large, editorial weight */}
      <span
        className="block text-center font-black leading-none select-none mb-2"
        style={{
          fontSize: "6rem",
          lineHeight: "1",
          background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
          className="text-center px-6 md:px-10 flex flex-col items-center gap-8"
        >
          <p className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed italic text-center">
            {t.quote}
          </p>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-px bg-white/20 mb-3" />
            <p className="text-white font-bold uppercase tracking-widest text-sm">{t.name}</p>
            <p className="text-zinc-500 text-xs">
              {t.role} &middot; {t.company}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-white/20 w-1.5 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
