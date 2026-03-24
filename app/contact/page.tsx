"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import AnimatedSection from "@/components/AnimatedSection";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const services = [
  "E-Blast Campaigns",
  "Social Media Management",
  "Landing Pages & Microsites",
  "Meta Ads Management",
  "SEO + Google My Business",
  "Lead Automation",
  "Full Service Package",
  "Not sure yet",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $3,000/mo",
  "$3,000 – $6,000/mo",
  "$6,000 – $10,000/mo",
  "$10,000+/mo",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ||
          "https://services.leadconnectorhq.com/hooks/PLACEHOLDER_WEBHOOK_ID/webhook-trigger/PLACEHOLDER_TRIGGER_ID",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "grankagency.com/contact" }),
        }
      );
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0a0a0a] border-b-2 border-white/10 focus:border-blue-600 focus:outline-none text-white py-4 text-sm transition-colors duration-300 placeholder-gray-600";
  const labelClass =
    "block text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1";
  const errorClass = "text-red-400 text-[10px] mt-1";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(37,99,235,0.08) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">GRank Agency</p>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Let&apos;s<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Talk.</span>
          </h1>
          <p className="text-gray-400 font-light max-w-md text-sm leading-relaxed">
            Tell us about your development. We&apos;ll come back to you within 24 hours with a clear plan.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: info */}
          <AnimatedSection className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Direct Contact</p>
              <a
                href="mailto:admin@grankagency.com"
                className="text-white font-bold text-lg hover:text-blue-400 transition-colors block mb-2"
              >
                admin@grankagency.com
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <span>WhatsApp →</span>
              </a>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">What Happens Next</p>
              <div className="space-y-6">
                {[
                  { n: "01", text: "We review your submission within 24 hours." },
                  { n: "02", text: "We schedule a 30-minute strategy call." },
                  { n: "03", text: "You receive a custom proposal with clear pricing." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="text-2xl font-black text-blue-600/30 flex-shrink-0">{step.n}</span>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Follow Us</p>
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/company/grank-agency/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 text-xs uppercase tracking-widest transition-colors">LinkedIn →</a>
                <a href="https://www.instagram.com/grankagency/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 text-xs uppercase tracking-widest transition-colors">Instagram →</a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={150} className="lg:col-span-3">
            {status === "success" ? (
              <div className="border border-blue-600/30 bg-blue-950/10 p-12 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">Message Sent!</h3>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ll review your submission and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-8 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:border-blue-500 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      {...register("company")}
                      placeholder="Waldorf Astoria Dev."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                      })}
                      placeholder="john@company.com"
                      type="email"
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      {...register("phone")}
                      placeholder="+1 (305) 000-0000"
                      type="tel"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Service Interested In</label>
                    <select
                      {...register("service")}
                      className={`${inputClass} bg-[#0a0a0a]`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Monthly Budget</label>
                    <select
                      {...register("budget")}
                      className={`${inputClass} bg-[#0a0a0a]`}
                    >
                      <option value="">Select budget range...</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Your Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your development, your goals, and any challenges you're facing..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Hidden webhook source */}
                <input type="hidden" value="grankagency_nextjs" {...register("source" as keyof FormData)} />

                {status === "error" && (
                  <div className="border border-red-500/30 bg-red-950/10 px-4 py-3">
                    <p className="text-red-400 text-xs">Something went wrong. Please try again or email us directly.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-6 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
