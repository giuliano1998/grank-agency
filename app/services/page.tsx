import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services | GRank Agency",
  description: "Full portfolio of digital marketing services for luxury real estate in South Florida.",
};

const services = [
  {
    id: "eblasts",
    number: "01",
    title: "E-Blast Campaigns",
    tagline: "Direct to Decision Makers.",
    description:
      "High-conversion email campaigns deployed to broker networks of 10,000+ contacts. Every e-blast is engineered for maximum opens, clicks, and qualified inquiries. We handle copywriting, HTML design, list management, and performance tracking.",
    clients: ["Fortune International Group", "One Metropica", "Icon Beach Residences", "Waldorf Astoria Pompano Beach"],
    image: "/images/metropica-eblast.jpg",
    image2: "/images/icon-top-producer.png",
    image3: "/images/icon-rosewood-eblast.jpg",
    stats: [{ label: "Avg. Open Rate", value: "32%" }, { label: "Click Rate", value: "18%" }, { label: "Leads per Campaign", value: "250+" }],
    pricing: [
      { label: "Copy Only (Templates)", price: "$300" },
      { label: "Design Only (HTML)", price: "$500" },
      { label: "Copy + Design (Full Campaign)", price: "$800" },
    ],
    reverse: false,
  },
  {
    id: "social",
    number: "02",
    title: "Social Media Management",
    tagline: "Content that Commands Attention.",
    description:
      "On-brand content that positions your development as the definitive luxury choice in its market. Strategy, design, copy and scheduling — handled end to end. We manage Instagram, Facebook and LinkedIn for pre-construction and established developments.",
    clients: ["Related Group", "Nomad Wynwood", "Viceroy Brickell", "Rivage Bal Harbour"],
    image: "/images/eblast-social.jpg",
    image2: "/images/eblast-social2.jpg",
    image3: null,
    stats: [{ label: "Posts per Month", value: "20+" }, { label: "Avg. Engagement Lift", value: "3x" }, { label: "Platforms Managed", value: "3" }],
    pricing: [
      { label: "Content Strategy + 12 Posts/mo", price: "$1,200" },
      { label: "Full Management (20 Posts + Stories)", price: "$2,000" },
      { label: "Premium (Reels + Influencer Coord.)", price: "$3,500" },
    ],
    reverse: true,
  },
  {
    id: "landing",
    number: "03",
    title: "Landing Pages & Microsites",
    tagline: "Digital Show Rooms.",
    description:
      "Digital experiences as premium as the properties they represent. From high-converting lead capture pages to full interactive microsites with broker portals, virtual tours, and floor plan galleries. Built on modern stacks, optimized for mobile and speed.",
    clients: ["One Metropica", "Andare Residences", "Rosewood Residences", "Six Fisher Island"],
    image: "/images/metropica-eblast.jpg",
    image2: null,
    image3: null,
    stats: [{ label: "Avg. Conversion Rate", value: "14%" }, { label: "Page Speed Score", value: "95+" }, { label: "Leads Captured", value: "1,200+" }],
    pricing: [
      { label: "Lead Capture Landing Page", price: "$1,500" },
      { label: "Multi-page Microsite", price: "$4,000" },
      { label: "Full Broker Portal + Virtual Tour", price: "$8,500+" },
    ],
    reverse: false,
  },
  {
    id: "meta",
    number: "04",
    title: "Meta Ads Management",
    tagline: "Precision at Scale.",
    description:
      "Hyper-targeted paid campaigns on Facebook and Instagram that reach qualified buyers and investors. We've reduced CPL by 32% and generated 500+ qualified leads for a single development. Full creative production, audience strategy, A/B testing, and reporting.",
    clients: ["Related Group", "Fortune International Group", "Baccarat Residences"],
    image: "/images/icon-top-producer.png",
    image2: null,
    image3: null,
    stats: [{ label: "CPL Reduction", value: "32%" }, { label: "Leads per Launch", value: "500+" }, { label: "ROAS Average", value: "4.2x" }],
    pricing: [
      { label: "Setup + Creative (One-time)", price: "$750" },
      { label: "Monthly Management Fee", price: "$1,500/mo" },
      { label: "Full-funnel (Creative + Retargeting)", price: "$2,500/mo" },
    ],
    reverse: true,
  },
  {
    id: "seo",
    number: "05",
    title: "SEO + Google My Business",
    tagline: "Own the Search Results.",
    description:
      "Dominating local search results so that when buyers search for luxury real estate in South Florida, your development appears first. Technical SEO, content strategy, GMB optimization, and link building — all coordinated to outrank competitors.",
    clients: ["Coldwell Banker", "Dezer Development", "CasaBella"],
    image: "/images/icon-rosewood-eblast.jpg",
    image2: null,
    image3: null,
    stats: [{ label: "Organic Traffic Lift", value: "180%" }, { label: "Keywords Ranked", value: "200+" }, { label: "GMB Views/mo", value: "5,000+" }],
    pricing: [
      { label: "GMB Optimization (One-time)", price: "$500" },
      { label: "SEO Retainer (On-page + Content)", price: "$1,200/mo" },
      { label: "Full SEO + GMB + Link Building", price: "$2,200/mo" },
    ],
    reverse: false,
  },
  {
    id: "automation",
    number: "06",
    title: "Lead Automation",
    tagline: "Never Lose a Lead Again.",
    description:
      "CRM workflows built on GoHighLevel that automate broker outreach, lead nurturing and follow-up sequences. We saved 20+ hours per month in manual tasks for our clients while increasing response rates by 40%. Full CRM setup, pipeline design, and automation scripting.",
    clients: ["Related Group", "One Metropica", "Icon Beach Residences"],
    image: "/images/eblast-social.jpg",
    image2: null,
    image3: null,
    stats: [{ label: "Hours Saved / Month", value: "20+" }, { label: "Response Rate Lift", value: "40%" }, { label: "CRMs Deployed", value: "12+" }],
    pricing: [
      { label: "GHL Setup + Basic Workflow", price: "$1,000" },
      { label: "CRM + Lead Nurture Sequences", price: "$2,000" },
      { label: "Full Automation Ecosystem", price: "$4,500+" },
    ],
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 60%, rgba(37,99,235,0.08) 0%, transparent 50%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">GRank Agency — Services</p>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            OUR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">WORK.</span>
          </h1>
          <p className="text-gray-400 font-light max-w-xl text-sm leading-relaxed">
            A portfolio of campaigns, systems and digital experiences built for South Florida&apos;s most iconic developments.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s) => (
        <section key={s.id} id={s.id} className={`py-28 px-6 ${s.reverse ? "bg-[#050505]" : "bg-black"} border-t border-white/5`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${s.reverse ? "lg:flex-row-reverse" : ""}`}>

              {/* Text — swap order on reverse */}
              <AnimatedSection className={s.reverse ? "lg:order-2" : ""}>
                <span className="text-blue-600 font-black text-7xl opacity-15 block mb-2">{s.number}</span>
                <div className="inline-flex items-center gap-2 bg-blue-950/30 border border-blue-600/20 px-3 py-1 mb-5">
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{s.title}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-5 leading-tight">
                  {s.tagline}
                </h2>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">{s.description}</p>

                {/* Stats */}
                <div className="flex gap-4 flex-wrap mb-8">
                  {s.stats.map((st) => (
                    <div key={st.label} className="border border-white/8 px-5 py-3 text-center">
                      <p className="text-2xl font-black text-white">{st.value}</p>
                      <p className="text-[9px] uppercase tracking-widest text-gray-500 mt-0.5">{st.label}</p>
                    </div>
                  ))}
                </div>

                {/* Clients */}
                <div className="mb-7">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-bold">Clients</p>
                  <div className="flex flex-wrap gap-2">
                    {s.clients.map((c) => (
                      <span key={c} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/8 px-3 py-1 hover:border-blue-600/40 hover:text-blue-300 transition-colors cursor-default">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-8 pt-5 border-t border-white/8">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3 font-bold">Pricing</p>
                  <div className="space-y-2">
                    {s.pricing.map((p) => (
                      <div key={p.label} className="flex justify-between text-sm">
                        <span className="text-gray-300">{p.label}</span>
                        <span className="text-blue-400 font-bold">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  Start This Service →
                </Link>
              </AnimatedSection>

              {/* Gallery */}
              <AnimatedSection delay={120} className={`flex flex-col gap-4 ${s.reverse ? "lg:order-1" : ""}`}>
                <div className="relative h-72 bg-[#111] overflow-hidden group cursor-pointer">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-gray-200 text-[10px] uppercase tracking-widest font-bold">{s.title} — {s.clients[0]}</span>
                  </div>
                </div>
                {(s.image2 || s.image3) && (
                  <div className="grid grid-cols-2 gap-4">
                    {s.image2 && (
                      <div className="relative h-44 bg-[#111] overflow-hidden group cursor-pointer">
                        <Image src={s.image2} alt={s.clients[1] || s.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                          <span className="text-gray-200 text-[9px] uppercase tracking-widest font-bold">{s.clients[1]}</span>
                        </div>
                      </div>
                    )}
                    {s.image3 && (
                      <div className="relative h-44 bg-[#111] overflow-hidden group cursor-pointer">
                        <Image src={s.image3} alt={s.clients[2] || s.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                          <span className="text-gray-200 text-[9px] uppercase tracking-widest font-bold">{s.clients[2]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Ready to see what<br />we can do for your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">development?</span>
          </h2>
          <p className="text-gray-400 font-light mb-10 text-sm">Your first strategy session is on us.</p>
          <Link href="/contact" className="inline-block px-14 py-6 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-700 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-300">
            LET&apos;S TALK
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
