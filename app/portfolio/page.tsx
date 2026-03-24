"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Modal, { PortfolioItem } from "@/components/Modal";

const categories = ["All", "E-Blasts", "Social Media", "Landing Pages", "Meta Ads", "SEO", "Automation"];

const items: PortfolioItem[] = [
  {
    id: "1",
    title: "Metropica Penthouse Launch",
    client: "One Metropica",
    category: "E-Blasts",
    image: "/images/metropica-eblast.jpg",
    description:
      "A full e-blast campaign targeting the top 500 broker network in South Florida to launch the penthouse collection at One Metropica. We handled copy, HTML design, deployment, and performance tracking.",
    metrics: [
      { label: "Open Rate", value: "32%" },
      { label: "Click Rate", value: "18%" },
      { label: "Inquiries", value: "250+" },
      { label: "Sent To", value: "8,000" },
    ],
  },
  {
    id: "2",
    title: "Top Producers Alert",
    client: "Icon Beach Residences",
    category: "E-Blasts",
    image: "/images/icon-top-producer.png",
    description:
      "Targeted e-blast to Icon Beach's top producer broker network, announcing exclusive inventory and VIP pricing for qualified buyers. High urgency design drove exceptional conversion.",
    metrics: [
      { label: "Leads", value: "140+" },
      { label: "Conversion", value: "28%" },
      { label: "Open Rate", value: "38%" },
      { label: "Brokers Reached", value: "2,400" },
    ],
  },
  {
    id: "3",
    title: "Icon Beach / Rosewood VIP Preview",
    client: "Icon Beach / Rosewood Residences",
    category: "E-Blasts",
    image: "/images/icon-rosewood-eblast.jpg",
    description:
      "Co-branded e-blast campaign for the Icon Beach and Rosewood Residences VIP preview event, deploying to 500+ curated broker recipients in South Florida and New York.",
    metrics: [
      { label: "Recipients", value: "500+" },
      { label: "Event RSVPs", value: "62" },
      { label: "Click Rate", value: "22%" },
      { label: "Follow-up Leads", value: "38" },
    ],
  },
  {
    id: "4",
    title: "Social Media Growth Campaign",
    client: "Nomad Wynwood",
    category: "Social Media",
    image: "/images/eblast-social.jpg",
    description:
      "6-month social media management campaign for Nomad Wynwood, driving brand awareness and lead generation through curated lifestyle content on Instagram and Facebook.",
    metrics: [
      { label: "Follower Growth", value: "+340%" },
      { label: "Avg. Reach/Post", value: "12,000" },
      { label: "Leads via DM", value: "85" },
      { label: "Engagement Rate", value: "6.2%" },
    ],
  },
  {
    id: "5",
    title: "Broker Network Social Campaign",
    client: "Related Group",
    category: "Social Media",
    image: "/images/eblast-social2.jpg",
    description:
      "Monthly social media retainer for Related Group's flagship developments, focused on broker-facing content and investor positioning across Instagram and LinkedIn.",
    metrics: [
      { label: "Monthly Impressions", value: "80K+" },
      { label: "Broker Inquiries", value: "120" },
      { label: "Content Pieces", value: "24/mo" },
      { label: "CPL", value: "$12" },
    ],
  },
  {
    id: "6",
    title: "Penthouse Landing Page",
    client: "One Metropica",
    category: "Landing Pages",
    image: "/images/metropica-eblast.jpg",
    description:
      "High-converting single-page lead capture microsite for the Metropica Penthouse launch. Built with performance-first architecture, featuring floor plan gallery, video background, and GHL CRM integration.",
    metrics: [
      { label: "Conversion Rate", value: "14%" },
      { label: "Leads Captured", value: "320" },
      { label: "Page Speed", value: "97/100" },
      { label: "Bounce Rate", value: "32%" },
    ],
  },
  {
    id: "7",
    title: "Meta Ads Performance Campaign",
    client: "Fortune International Group",
    category: "Meta Ads",
    image: "/images/icon-top-producer.png",
    description:
      "Full-funnel Meta advertising campaign for Fortune International Group targeting UHNW individuals and investors in the US and Latin America, with retargeting sequences.",
    metrics: [
      { label: "ROAS", value: "4.8x" },
      { label: "CPL Reduction", value: "32%" },
      { label: "Qualified Leads", value: "500+" },
      { label: "Ad Spend Managed", value: "$120K" },
    ],
  },
  {
    id: "8",
    title: "SEO & GMB Domination",
    client: "Andare Residences",
    category: "SEO",
    image: "/images/icon-rosewood-eblast.jpg",
    description:
      "Comprehensive SEO strategy for Andare Residences combining technical SEO, pillar content strategy, and GMB optimization to dominate Fort Lauderdale luxury condo search results.",
    metrics: [
      { label: "Organic Traffic", value: "+180%" },
      { label: "Keywords #1", value: "12" },
      { label: "GMB Views/mo", value: "5,200" },
      { label: "Leads from SEO", value: "68" },
    ],
  },
  {
    id: "9",
    title: "GHL CRM + Lead Automation",
    client: "Related Group",
    category: "Automation",
    image: "/images/eblast-social.jpg",
    description:
      "Full GoHighLevel CRM deployment for Related Group including broker outreach sequences, lead nurturing workflows, appointment booking automation, and real-time pipeline dashboards.",
    metrics: [
      { label: "Hours Saved/mo", value: "22" },
      { label: "Response Rate", value: "+40%" },
      { label: "Workflows Built", value: "18" },
      { label: "Leads Automated", value: "1,200+" },
    ],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, rgba(37,99,235,0.07) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">GRank Agency — Portfolio</p>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            CASE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">STUDIES.</span>
          </h1>
          <p className="text-gray-400 font-light max-w-xl text-sm leading-relaxed">
            Real results from real campaigns — every number is from an actual client engagement.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-20 z-30 bg-black/90 backdrop-blur-sm border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "border border-white/10 text-gray-500 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-6 bg-black min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 50}>
                <div
                  className="group relative overflow-hidden bg-[#111] border border-white/5 hover:border-blue-600/40 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-1"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/70 text-blue-400 text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                        {item.category}
                      </span>
                    </div>

                    {/* Click to view overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                        View Case Study
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-white font-black uppercase tracking-tight text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs mb-4">{item.client}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {item.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="border border-white/5 p-2 text-center">
                          <p className="text-white font-black text-sm">{m.value}</p>
                          <p className="text-gray-600 text-[8px] uppercase tracking-wider mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-600">
              <p className="text-sm uppercase tracking-widest">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
