"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Start as true on the server so content is visible without JS (SSR / no-JS / bots).
  // Flip to false immediately on the client so the entrance animation can run.
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: mounted
          ? `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
